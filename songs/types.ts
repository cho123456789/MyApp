// 공통 타입 정의
export interface ChantLine {
  type: 'lyric' | 'chant' | 'title' | 'break' | 'section';
  text: string;
  subtext?: string;
  intensity?: 1 | 2 | 3 | 4 | 5;  // 응원 강도 (1: 조용히 ~ 5: 최대 에너지)
  action?: 'clap' | 'wave' | 'jump' | 'raise' | 'stomp' | 'sway';  // 동작
  timing?: number;  // 초 단위 타이밍
  split?: 'all' | 'left' | 'right' | 'call' | 'response';  // 파트 구분
  effect?: 'bounce' | 'shake' | 'glow' | 'pulse' | 'flash';  // 시각 효과
}

export interface Song {
  id: string;
  title: string;
  emoji: string;
  color: string;
  chantData: ChantLine[];
  subSongs?: Song[];  // 앨범 내 서브곡들 (optional)
  image?: any;  // 앨범 커버 이미지 (optional)
}
