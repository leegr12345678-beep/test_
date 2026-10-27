import type { DesignerType } from '../data/types';

interface Props {
  type: DesignerType;
  onRestart: () => void;
}

export function ResultScreen({ type, onRestart }: Props) {
  return (
    <main className="screen" data-type={type.id}>
      <div className="content result">
        <p className="eyebrow">나의 디자이너 유형은</p>
        <h1 className="title-xl">
          {type.emoji} {type.name}
        </h1>
        <p className="type-label">{type.label}</p>

        {/* 결과 이미지가 들어갈 자리 */}
        <div className="result-image" role="img" aria-label={`${type.name} 이미지`}>
          <span className="result-image-emoji" aria-hidden>
            {type.emoji}
          </span>
          <span className="result-image-label">이미지 영역</span>
        </div>

        <blockquote className="quote">{type.quote}</blockquote>

        <ul className="traits">
          {type.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>

        <section className="result-section">
          <h2 className="section-title">주요 성향</h2>
          <div className="chips">
            {type.keywords.map((keyword) => (
              <span key={keyword} className="chip chip-type">
                #{keyword}
              </span>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2 className="section-title">이런 일이 잘 맞아요</h2>
          <div className="chips">
            {type.recommendedWork.map((work) => (
              <span key={work} className="chip">
                {work}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="bottom-bar bottom-bar-double">
        <button type="button" className="btn btn-secondary" onClick={onRestart}>
          다시하기
        </button>
        {/* 공유 기능은 아직 동작하지 않아요 */}
        <button type="button" className="btn btn-primary">
          공유하기
        </button>
      </div>
    </main>
  );
}
