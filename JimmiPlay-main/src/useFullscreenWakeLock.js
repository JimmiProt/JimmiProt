import { useCallback, useEffect, useRef, useState } from "react";

export default function useFullscreenWakeLock(targetRef) {
  const wakeLock = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const releaseWakeLock = useCallback(async () => {
    const current = wakeLock.current;
    wakeLock.current = null;
    if (current && !current.released) {
      try { await current.release(); } catch {}
    }
  }, []);

  const requestWakeLock = useCallback(async () => {
    if (!("wakeLock" in navigator) || document.visibilityState !== "visible") return false;
    if (wakeLock.current && !wakeLock.current.released) return true;
    try {
      const sentinel = await navigator.wakeLock.request("screen");
      wakeLock.current = sentinel;
      sentinel.addEventListener("release", () => {
        if (wakeLock.current === sentinel) wakeLock.current = null;
      }, { once: true });
      return true;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    const syncFullscreen = () => {
      const active = document.fullscreenElement === targetRef.current;
      setIsFullscreen(active);
      if (active) requestWakeLock();
      else releaseWakeLock();
    };
    const restoreWakeLock = () => {
      if (document.visibilityState === "visible" && document.fullscreenElement === targetRef.current) requestWakeLock();
    };
    document.addEventListener("fullscreenchange", syncFullscreen);
    document.addEventListener("visibilitychange", restoreWakeLock);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreen);
      document.removeEventListener("visibilitychange", restoreWakeLock);
      releaseWakeLock();
    };
  }, [releaseWakeLock, requestWakeLock, targetRef]);

  const enterFullscreen = useCallback(async () => {
    const target = targetRef.current;
    if (!target?.requestFullscreen) return { fullscreen: false, wakeLock: false };
    try {
      if (!document.fullscreenElement) await target.requestFullscreen();
      if (document.fullscreenElement !== target) return { fullscreen: false, wakeLock: false };
      const keptAwake = await requestWakeLock();
      return { fullscreen: true, wakeLock: keptAwake };
    } catch {
      return { fullscreen: false, wakeLock: false };
    }
  }, [requestWakeLock, targetRef]);

  const exitFullscreen = useCallback(async () => {
    await releaseWakeLock();
    try {
      if (document.fullscreenElement === targetRef.current) await document.exitFullscreen();
    } catch {}
  }, [releaseWakeLock, targetRef]);

  return { isFullscreen, enterFullscreen, exitFullscreen };
}
