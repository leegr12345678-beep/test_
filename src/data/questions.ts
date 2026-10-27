import { DESIGNER_TYPES, TIE_BREAK_ORDER, type DesignerTypeId } from './types';

export interface Choice {
  text: string;
  /** 이 선택지를 고르면 점수를 받는 유형 */
  type: DesignerTypeId;
}

export interface Question {
  title: string;
  choices: [Choice, Choice];
}

export const QUESTIONS: Question[] = [
  {
    title: '새 프로젝트를 시작할 때\n가장 먼저 여는 건?',
    choices: [
      { text: '그리드와 컴포넌트부터 세팅한 피그마 파일', type: 'craftsman' },
      { text: '레퍼런스를 잔뜩 모은 무드보드', type: 'alchemist' },
    ],
  },
  {
    title: '동료의 시안을 처음 봤을 때\n먼저 나오는 말은?',
    choices: [
      { text: '"톤을 좀 더 과감하게 가보면 어때요?"', type: 'alchemist' },
      { text: '"이 화면에서 사용자가 할 일이 뭐예요?"', type: 'strategist' },
    ],
  },
  {
    title: '출시 하루 전,\n마지막으로 확인하는 건?',
    choices: [
      { text: '성과를 볼 수 있게 데이터가 잘 쌓이는지', type: 'strategist' },
      { text: '모든 화면의 간격과 정렬이 가이드대로인지', type: 'craftsman' },
    ],
  },
  {
    title: '가장 기분 좋은 칭찬은?',
    choices: [
      { text: '"개발 넘길 때 물어볼 게 하나도 없었어요"', type: 'craftsman' },
      { text: '"이거 보자마자 와 소리 나왔어요"', type: 'alchemist' },
    ],
  },
  {
    title: '쉬는 날 가장 끌리는 건?',
    choices: [
      { text: '전시나 팝업스토어 구경하며 사진 남기기', type: 'alchemist' },
      { text: '새로 나온 앱을 써보며 왜 이렇게 만들었는지 뜯어보기', type: 'strategist' },
    ],
  },
];

/** answers[i]는 i번째 질문에서 고른 선택지 번호(0 또는 1) */
export function getResultType(answers: number[]): DesignerTypeId {
  const scores: Record<DesignerTypeId, number> = { craftsman: 0, alchemist: 0, strategist: 0 };
  answers.forEach((choiceIndex, i) => {
    scores[QUESTIONS[i].choices[choiceIndex].type] += 1;
  });
  return TIE_BREAK_ORDER.reduce((best, id) => (scores[id] > scores[best] ? id : best));
}

export { DESIGNER_TYPES };
