import { Badge, BottomCTA, CTAButton, Paragraph, Spacing, Top } from '@toss/tds-mobile';
import type { DesignerType } from '../data/types';

interface Props {
  type: DesignerType;
  onRestart: () => void;
}

export function ResultScreen({ type, onRestart }: Props) {
  return (
    <div className="screen">
      <Spacing size={24} />
      <Top
        subtitleTop={<Top.SubtitleParagraph>나의 디자이너 유형은</Top.SubtitleParagraph>}
        title={
          <Top.TitleParagraph size={28}>
            {type.emoji} {type.name}
          </Top.TitleParagraph>
        }
        subtitleBottom={<Top.SubtitleParagraph>[{type.label}]</Top.SubtitleParagraph>}
      />

      {/* 결과 이미지가 들어갈 자리 */}
      <div className="result-image" role="img" aria-label={`${type.name} 이미지`}>
        <span className="result-image-emoji">{type.emoji}</span>
        <span className="result-image-label">이미지 영역</span>
      </div>

      <div className="section">
        <Paragraph typography="t5" fontWeight="bold" color="#333d4b">
          "{type.quote}"
        </Paragraph>
        <Spacing size={16} />
        <ul className="traits">
          {type.traits.map((trait) => (
            <li key={trait}>
              <Paragraph typography="t6" color="#4e5968">
                {trait}
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <Paragraph typography="t6" fontWeight="bold" color="#333d4b">
          주요 성향
        </Paragraph>
        <div className="badges">
          {type.keywords.map((keyword) => (
            <Badge key={keyword} size="small" variant="weak" color="blue">
              #{keyword}
            </Badge>
          ))}
        </div>
      </div>

      <div className="section">
        <Paragraph typography="t6" fontWeight="bold" color="#333d4b">
          이런 일이 잘 맞아요
        </Paragraph>
        <div className="badges">
          {type.recommendedWork.map((work) => (
            <Badge key={work} size="small" variant="weak" color="elephant">
              {work}
            </Badge>
          ))}
        </div>
      </div>

      <BottomCTA.Double
        fixed
        leftButton={
          <CTAButton color="dark" variant="weak" onClick={onRestart}>
            다시하기
          </CTAButton>
        }
        rightButton={
          // 공유 기능은 아직 동작하지 않아요
          <CTAButton>공유하기</CTAButton>
        }
      />
    </div>
  );
}
