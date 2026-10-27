import { DESIGNER_TYPES } from '../data/types';
import { QUESTIONS } from '../data/questions';

interface Props {
  onStart: () => void;
}

export function IntroScreen({ onStart }: Props) {
  return (
    <main className="screen">
      <div className="content intro">
        <p className="eyebrow">디자이너 유형 테스트</p>
        <h1 className="title-xl">나는 어떤 디자이너일까?</h1>
        <p className="lead">
          {QUESTIONS.length}개 질문에 답하고 나의 디자이너 유형을 알아보세요.
          <br />
          결과를 동료와 공유하고 서로의 이야기를 나눠봐요.
        </p>

        <div className="chips">
          <span className="chip">약 1분</span>
          <span className="chip">{QUESTIONS.length}문항</span>
          <span className="chip">결과 유형 3가지</span>
        </div>

        <ul className="type-list">
          {Object.values(DESIGNER_TYPES).map((type) => (
            <li key={type.id} className="type-row" data-type={type.id}>
              <span className="type-row-emoji" aria-hidden>
                {type.emoji}
              </span>
              <span className="type-row-text">
                <span className="type-row-name">{type.name}</span>
                <span className="type-row-label">{type.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bottom-bar">
        <button type="button" className="btn btn-primary" onClick={onStart}>
          테스트 시작하기
        </button>
      </div>
    </main>
  );
}
