export type DesignerTypeId = 'craftsman' | 'alchemist' | 'strategist';

export interface DesignerType {
  id: DesignerTypeId;
  emoji: string;
  /** 유형 이름 위에 붙는 짧은 별칭 */
  label: string;
  name: string;
  quote: string;
  traits: string[];
  keywords: string[];
  recommendedWork: string[];
}

export const DESIGNER_TYPES: Record<DesignerTypeId, DesignerType> = {
  craftsman: {
    id: 'craftsman',
    emoji: '🛠️',
    label: '실용주의 장인',
    name: '픽셀 장인형',
    quote: '아름다움은 완벽한 기능과 1px의 디테일에서 나와요.',
    traits: [
      '그리드, 정렬, 여백까지 1px 어긋남도 그냥 넘기지 않아요.',
      '영감보다 가이드라인과 시스템, 논리를 믿고 작업해요.',
      '그래서 뼈대가 튼튼하고 빈틈없는 화면을 만들어요.',
    ],
    keywords: ['꼼꼼함', '시스템', '논리', '가독성'],
    recommendedWork: ['UI 디자인', '디자인 시스템', '개발 협업'],
  },
  alchemist: {
    id: 'alchemist',
    emoji: '✨',
    label: '트렌드 리더',
    name: '비주얼 연금술사형',
    quote: '세상에 없던 비주얼로 시선을 사로잡고 트렌드를 이끌어요.',
    traits: [
      '트렌드와 레퍼런스에 누구보다 빠르게 반응해요.',
      '"요즘 이런 무드가 와요!" 하며 새로운 비주얼을 끊임없이 가져와요.',
      '감성이 담긴 스토리텔링으로 보는 사람의 마음을 움직여요.',
    ],
    keywords: ['감각', '트렌드', '비주얼', '실험'],
    recommendedWork: ['브랜딩', '그래픽 디자인', '마케팅 크리에이티브', '모션 디자인'],
  },
  strategist: {
    id: 'strategist',
    emoji: '🧠',
    label: '문제 해결사',
    name: '유저 전략가형',
    quote: '디자인은 예술이 아니라 문제를 해결하는 도구예요.',
    traits: [
      '"이걸 왜 만들지?", "사용자가 진짜 원하는 건 뭘까?"를 먼저 물어요.',
      '리서치, 인터뷰, 데이터에서 답을 찾는 걸 즐겨요.',
      '디자인이 지표와 사용자 경험을 어떻게 바꿨는지 증명하려 해요.',
    ],
    keywords: ['분석', '목적 지향', '유저 퍼스트', '데이터'],
    recommendedWork: ['UX 리서치', '프로덕트 디자인', '서비스 기획'],
  },
};

/** 점수가 같을 때 먼저 선택되는 순서 */
export const TIE_BREAK_ORDER: DesignerTypeId[] = ['strategist', 'craftsman', 'alchemist'];
