import { QUESTIONS } from '../data/questions';

interface Props {
  index: number;
  /** 이전에 고른 선택지가 있으면 표시 */
  selected?: number;
  onSelect: (choiceIndex: number) => void;
  onBack: () => void;
}

const CHOICE_LETTERS = ['A', 'B'];

export function QuestionScreen({ index, selected, onSelect, onBack }: Props) {
  const question = QUESTIONS[index];
  const total = QUESTIONS.length;

  return (
    <main className="screen">
      <header className="top-bar">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="이전으로">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
            <path
              d="M15 5l-7 7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="step-count">
          {index + 1} / {total}
        </span>
      </header>

      <div
        className="progress"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
      >
        <div className="progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="content question">
        <p className="eyebrow">Q{index + 1}</p>
        <h1 className="title-lg">{question.title}</h1>

        <div className="choices" key={index}>
          {question.choices.map((choice, i) => (
            <button
              key={i}
              type="button"
              className="choice"
              aria-pressed={selected === i}
              onClick={() => onSelect(i)}
            >
              <span className="choice-letter" aria-hidden>
                {CHOICE_LETTERS[i]}
              </span>
              <span className="choice-text">{choice.text}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
