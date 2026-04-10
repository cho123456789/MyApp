// 모든 노래를 한 곳에서 export
export { gominjungdok } from './gominjungdok';
export { gajjaidol } from './gajjaidol';
export { tbh } from './tbh';
export { discord } from './discord';
export { myname } from './myname';
export * from './types';

// 노래 리스트
import { gominjungdok } from './gominjungdok';
import { gajjaidol } from './gajjaidol';
import { tbh } from './tbh';
import { discord } from './discord';
import { myname } from './myname';
import { Song } from './types';

export const ALL_SONGS: Song[] = [
  gominjungdok,
  gajjaidol,
  tbh,
  discord,
  myname,
];
