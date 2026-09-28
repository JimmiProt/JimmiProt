import React, { useState } from "react";
import { Star, X, Check } from "lucide-react";

const RATING_LABELS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

const QUESTIONS = [
  { key: "again", label: "Would you play here again?", options: ["Yes", "Maybe", "No"] },
  { key: "level", label: "How was the level of play?", options: ["Too easy", "About right", "Too hard"] },
  { key: "organised", label: "How well was it organised?", options: ["Needs work", "Good", "Excellent"] },
];

/**
 * Review pop-up. Usage:
 *   {reviewing && (
 *     <ReviewModal
 *       title="Padel Match"
 *       subtitle="Sun 27 Sept · Padel Point"
 *       onClose={() => setReviewing(false)}
 *       onSubmit={(review) => console.log(review)}
 *     />
 *   )}
 * `review` = { rating, answers: { again, level, organised }, comment }
 */
export default function ReviewModal({ title, subtitle, onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [answers, setAnswers] = useState({});
  const [comment, setComment] = useState("");
  const [done, setDone] = useState(false);
  const shown = hover || rating;

  const submit = () => {
    if (!rating) return;
    if (onSubmit) onSubmit({ rating, answers, comment: comment.trim() });
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/50 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Leave a review"
        className="mx-auto my-8 w-full max-w-md rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-stone-100 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">{done ? "Thanks for your review" : "Leave a review"}</h2>
            {title && <p className="mt-0.5 text-sm text-stone-600">{title}</p>}
            {subtitle && <p className="text-xs text-stone-400">{subtitle}</p>}
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {done ? (
          <div className="px-5 py-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
              <Check className="h-7 w-7 text-yellow-700" />
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className={`h-6 w-6 ${n <= rating ? "fill-yellow-400 text-yellow-400" : "text-stone-300"}`} />
              ))}
            </div>
            <p className="mt-3 text-sm text-stone-500">Your feedback helps other players and organisers.</p>
            <button onClick={onClose} className="mt-6 w-full rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-medium text-stone-900 hover:bg-yellow-300">
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5 px-5 py-5">
            <div className="text-center">
              <div className="flex justify-center gap-1.5" role="radiogroup" aria-label="Overall rating" onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={rating === n}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    onMouseEnter={() => setHover(n)}
                    onClick={() => setRating(n)}
                    className="rounded-md p-0.5 transition active:scale-95"
                  >
                    <Star className={`h-9 w-9 transition ${n <= shown ? "fill-yellow-400 text-yellow-400" : "text-stone-300"}`} />
                  </button>
                ))}
              </div>
              <p className="mt-2 h-5 text-sm font-medium text-stone-600">{RATING_LABELS[shown]}</p>
            </div>

            {QUESTIONS.map((q) => (
              <div key={q.key}>
                <p className="text-sm font-medium text-stone-900">{q.label}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {q.options.map((o) => {
                    const on = answers[q.key] === o;
                    return (
                      <button
                        key={o}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setAnswers((a) => ({ ...a, [q.key]: o }))}
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition ${on ? "border-yellow-400 bg-yellow-100 text-stone-900" : "border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-50"}`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div>
              <label htmlFor="review-comment" className="text-sm font-medium text-stone-900">Anything else? <span className="font-normal text-stone-400">(optional)</span></label>
              <textarea
                id="review-comment"
                value={comment}
                maxLength={300}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                placeholder="Tell others what it was like…"
                className="mt-2 w-full resize-none rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-500 focus:outline-none"
              />
              <p className="mt-1 text-right text-xs text-stone-400">{comment.length}/300</p>
            </div>

            <div className="flex gap-2">
              <button onClick={onClose} className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-900 hover:bg-stone-50">Cancel</button>
              <button
                onClick={submit}
                disabled={!rating}
                className="flex-1 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-medium text-stone-900 hover:bg-yellow-300 disabled:opacity-40"
              >
                Submit review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
