// 공통 타입 정의
export type Member = '시연' | '쵸단' | '마젠타' | '히나' | '바위게';

export interface Lyric {
  member: Member;  // 담당 파트
  text: string;  // 가사
  verse?: string; // 절 표시 (optional)
  startTime?: number; // 시작 시간 (초 단위, optional)
  endTime?: number; // 종료 시간 (초 단위, optional)
}

export interface Song {
  id: string;
  title: string;
  emoji: string;
  color: string;
  lyrics: Lyric[];
  subSongs?: Song[];  // 앨범 내 서브곡들 (optional)
  image?: any;  // 앨범 커버 이미지 (optional)
  youtubeId?: string; // YouTube 영상 ID (optional)
}
