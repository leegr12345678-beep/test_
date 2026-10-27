import {
  Button,
  ProgressBar,
  Spacing,
  Top,
  TopNavigation,
  TopNavigationBackButton,
} from '@toss/tds-mobile';
import { QUESTIONS } from '../data/questions';

interface Props {
  index: number;
  /** 이전에 고른 선택지가 있으면 표시 */
  selected?: number;
  onSelect: (choiceIndex: number) => void;
  onBack: () => void;
}

export function QuestionScreen({ index, selected, onSelect, onBack }: Props) {
  const question = QUESTIONS[index];
  const total = QUESTIONS.length;

  return (
    <div className="screen">
      <TopNavigation
        leading={<TopNavigationBackButton onClick={onBack} aria-label="이전으로" />}
        content={`${index + 1} / ${total}`}
      />
      <div className="progress">
        <ProgressBar progress={(index + 1) / total} size="normal" animate />
      </div>
      <Spacing size={24} />
      <Top
        upper={<span className="question-number">Q{index + 1}</span>}
        title={<Top.TitleParagraph size={22}>{question.title}</Top.TitleParagraph>}
      />
      <div className="choices">
        {question.choices.map((choice, i) => (
          <Button
            key={`${index}-${i}`}
            display="block"
            size="xlarge"
            color={selected === i ? 'primary' : 'dark'}
            variant={selected === i ? 'fill' : 'weak'}
            onClick={() => onSelect(i)}
          >
            {choice.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
