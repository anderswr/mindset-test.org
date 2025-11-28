'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  computeScore,
  getDictionary,
  getQuizQuestions,
  type Locale
} from '../../../lib/dictionary';

type QuizClientProps = {
  locale: Locale;
};

export default function QuizClient({ locale }: QuizClientProps) {
  const dict = getDictionary(locale);
  const questions = getQuizQuestions(locale);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const router = useRouter();

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / questions.length) * 100);
  const allAnswered = answered === questions.length;

  const currentQuestion = questions[currentIndex];
  const currentValue = answers[currentQuestion?.id];

  function handleChange(questionId: string, value: number) {
    setIsAdvancing(true);
    setAnswers((prev) => {
      const nextAnswers = { ...prev, [questionId]: value };
      const isLast = currentIndex === questions.length - 1;
      const nextIndex = Math.min(currentIndex + 1, questions.length - 1);

      setTimeout(() => {
        if (!isLast) {
          setCurrentIndex(nextIndex);
        } else {
          handleSubmit(nextAnswers);
        }
        setIsAdvancing(false);
      }, 220);

      return nextAnswers;
    });
  }

  function handleReset() {
    setAnswers({});
    setCurrentIndex(0);
    setIsAdvancing(false);
  }

  function handleSubmit(nextAnswers?: Record<string, number>) {
    const payload = nextAnswers ?? answers;
    if (Object.keys(payload).length !== questions.length) return;
    const { total: computedTotal } = computeScore(payload);
    router.push(`/${locale}/result?score=${computedTotal}`);
  }

  function handlePrevious() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    if (!currentValue) return;
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  }

  return (
    <main className="quiz">
      <header className="quiz__header">
        <div>
          <p className="eyebrow">{dict.landing.eyebrow}</p>
          <h1>{dict.quiz.title}</h1>
          <p className="lead">{dict.quiz.intro}</p>
        </div>
        <Link href={`/${locale}`} className="button button--ghost">
          {dict.quiz.back}
        </Link>
      </header>

      <section className="card quiz__progress" aria-label={dict.quiz.progressA11yLabel}>
        <div className="progress__top">
          <span>{dict.quiz.progressLabel(answered, questions.length)}</span>
          <span>{progress}%</span>
        </div>
        <div className="progress__track" role="presentation">
          <div className="progress__bar" style={{ width: `${progress}%` }} />
        </div>
      </section>

      <section className="card quiz__form">
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset key={currentQuestion.id} className={`question question--single ${isAdvancing ? 'is-advancing' : ''}`}>
            <legend>
              <span className="pill">{currentQuestion.number.toString().padStart(2, '0')}</span>
              <span>{currentQuestion.prompt}</span>
            </legend>
            <div className="likert" role="radiogroup" aria-label={dict.quiz.likertLabel}>
              {dict.quiz.likertOptions.map((option) => (
                <label key={`${currentQuestion.id}-${option.value}`}>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option.value}
                    checked={answers[currentQuestion.id] === option.value}
                    onChange={() => handleChange(currentQuestion.id, option.value)}
                  />
                  <span className="likert__dot" />
                  <span className="likert__label">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </form>

        <div className="quiz__actions quiz__actions--inline">
          <div className="quiz__nav">
            <button type="button" className="button button--ghost" onClick={handlePrevious} disabled={currentIndex === 0}>
              {dict.quiz.previous}
            </button>
            <button
              type="button"
              className="button button--ghost"
              onClick={handleNext}
              disabled={!currentValue || currentIndex === questions.length - 1}
            >
              {dict.quiz.next}
            </button>
          </div>
          <div className="quiz__cta-group">
            {!allAnswered && <p className="hint">{dict.quiz.completionHint}</p>}
            {isAdvancing && <p className="hint" aria-live="polite">{dict.quiz.autoAdvance}</p>}
            <div className="quiz__actions">
              <button type="button" className="button button--ghost" onClick={handleReset}>
                {dict.quiz.secondaryCta}
              </button>
              {allAnswered && (
                <button type="button" className="button button--primary" onClick={() => handleSubmit()}>
                  {dict.quiz.cta}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
