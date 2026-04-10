// 공통 타입 정의
export interface ChantLine {
  type: 'lyric' | 'chant' | 'title' | 'break' | 'section';
  text: string;
  subtext?: string;
}

export interface Song {
  id: string;
  title: string;
  emoji: string;
  color: string;
  chantData: ChantLine[];
}
