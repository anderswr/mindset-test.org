'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  computeScore,
  getDictionary,
  getQuizQuestions,
  type Locale
} from '../../../lib/dictionary';

export default function QuizPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const questions = getQuizQuestions(params.locale);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const router = useRouter();

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / questions.length) * 100);
  const allAnswered = answered === questions.length;

  const { total } = useMemo(() => computeScore(answers), [answers]);

  function handleChange(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleReset() {
    setAnswers({});
  }

  function handleSubmit() {
    if (!allAnswered) return;
    router.push(`/${params.locale}/result?score=${total}`);
  }

  return (
    <main className="quiz">
      <header className="quiz__header">
        <div>
          <p className="eyebrow">{dict.landing.eyebrow}</p>
          <h1>{dict.quiz.title}</h1>
          <p className="lead">{dict.quiz.intro}</p>
        </div>
        <Link href={`/${params.locale}`} className="button button--ghost">
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
          {questions.map((question) => (
            <fieldset key={question.id} className="question">
              <legend>
                <span className="pill">{question.number.toString().padStart(2, '0')}</span>
                <span>{question.prompt}</span>
              </legend>
              <div className="likert" role="radiogroup" aria-label={dict.quiz.likertLabel}>
                {dict.quiz.likertOptions.map((option) => (
                  <label key={`${question.id}-${option.value}`}>
                    <input
                      type="radio"
                      name={question.id}
                      value={option.value}
                      checked={answers[question.id] === option.value}
                      onChange={() => handleChange(question.id, option.value)}
                    />
                    <span className="likert__dot" />
                    <span className="likert__label">{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </form>

        {!allAnswered && <p className="hint">{dict.quiz.completionHint}</p>}

        <div className="quiz__actions">
          <button
            type="button"
            className="button button--primary"
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            {dict.quiz.cta}
          </button>
          <button type="button" className="button button--ghost" onClick={handleReset}>
            {dict.quiz.secondaryCta}
          </button>
        </div>
      </section>
    </main>
  );
}
