// 모든 노래를 한 곳에서 export
export { discord } from './discord';
export { gominjungdok } from './gominjungdok';
export { nunmulchamgi } from './nunmulchamgi';
export { myname } from './myname';
export { ceremony } from './ceremony';
export * from './types';

// 노래 리스트 (5개 곡 - 세레모니 추가)
import { discord } from './discord';
import { gominjungdok } from './gominjungdok';
import { nunmulchamgi } from './nunmulchamgi';
import { myname } from './myname';
import { ceremony } from './ceremony';
import { Song } from './types';

export const ALL_SONGS: Song[] = [
  discord,
  gominjungdok,
  nunmulchamgi,
  myname,
  ceremony,
];
