import { Badge, FixedBottomCTA, Paragraph, Spacing, Top } from '@toss/tds-mobile';
import { DESIGNER_TYPES } from '../data/types';
import { QUESTIONS } from '../data/questions';

interface Props {
  onStart: () => void;
}

export function IntroScreen({ onStart }: Props) {
  return (
    <div className="screen">
      <Spacing size={40} />
      <Top
        upper={
          <div className="intro-emojis" aria-hidden>
            {Object.values(DESIGNER_TYPES).map((type) => (
              <span key={type.id}>{type.emoji}</span>
            ))}
          </div>
        }
        title={<Top.TitleParagraph size={28}>나는 어떤 디자이너일까?</Top.TitleParagraph>}
        subtitleBottom={
          <Top.SubtitleParagraph>
            {QUESTIONS.length}개 질문에 답하고 나의 디자이너 유형을 알아보세요.{'\n'}
            결과를 동료와 공유하고 서로의 이야기를 나눠봐요.
          </Top.SubtitleParagraph>
        }
      />
      <div className="intro-badges">
        <Badge size="medium" variant="weak" color="blue">
          ⏱ 약 1분
        </Badge>
        <Badge size="medium" variant="weak" color="elephant">
          {QUESTIONS.length}문항
        </Badge>
      </div>
      <Spacing size={32} />
      <div className="intro-types">
        {Object.values(DESIGNER_TYPES).map((type) => (
          <Paragraph key={type.id} typography="t6" color="#4e5968">
            {type.emoji} {type.name}
          </Paragraph>
        ))}
      </div>
      <FixedBottomCTA onClick={onStart}>테스트 시작하기</FixedBottomCTA>
    </div>
  );
}
