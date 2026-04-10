import { Song } from './types';

export const tbh: Song = {
  id: 'tbh',
  title: 'T.B.H',
  emoji: '💜',
  color: '#9d7fff',
  chantData: [
    { type: 'section', text: '[시작]' },
    { type: 'chant', text: 'T! B! H!', subtext: '세 번 외치기' },
    { type: 'break', text: '' },
    
    { type: 'lyric', text: 'To Be Honest' },
    { type: 'chant', text: '솔직히 말할게!', subtext: '함성!' },
    { type: 'break', text: '' },
    
    { type: 'section', text: '[코러스]' },
    { type: 'lyric', text: 'T.B.H T.B.H' },
    { type: 'chant', text: '👏 짝짝-짝 👏', subtext: '박수 두 번' },
    { type: 'lyric', text: '솔직히 말할게' },
    { type: 'chant', text: '💜 말할게! 💜', subtext: '함성!' },
  ],
};
