# QWER 노래 응원법 추가 가이드

## 📁 폴더 구조
```
songs/
├── types.ts          # 공통 타입 정의
├── index.ts          # 모든 노래 export
├── gominjungdok.ts   # 고민중독
├── gajjaidol.ts      # 가짜 아이돌
├── tbh.ts            # T.B.H
├── discord.ts        # Discord
├── myname.ts         # 내 이름 맑음
└── README.md         # 이 파일
```

## 🎵 새로운 노래 추가하기

### 1단계: 새 파일 생성
`songs/` 폴더에 새 노래 파일을 만듭니다. (예: `newSong.ts`)

### 2단계: 노래 데이터 작성
```typescript
import { Song } from './types';

export const newSong: Song = {
  id: 'newsong',           // 고유 ID (영문 소문자)
  title: '새로운 노래',     // 노래 제목
  emoji: '🎤',             // 대표 이모지
  color: '#ff5733',        // 테마 색상 (헥스 코드)
  chantData: [
    { type: 'section', text: '[시작]' },
    { type: 'chant', text: '응원 구호!', subtext: '큰 소리로!' },
    { type: 'lyric', text: '가사 내용' },
    { type: 'break', text: '' },
  ],
};
```

### 3단계: index.ts에 추가
`songs/index.ts` 파일을 열어서:

1. import 추가:
```typescript
export { newSong } from './newSong';
```

2. ALL_SONGS 배열에 추가:
```typescript
import { newSong } from './newSong';

export const ALL_SONGS: Song[] = [
  gominjungdok,
  gajjaidol,
  tbh,
  discord,
  myname,
  newSong,  // 여기에 추가!
];
```

### 4단계: 완료! 🎉
앱을 다시 실행하면 새 노래가 목록에 나타납니다.

## 📝 ChantLine 타입 설명

| type | 용도 | 예시 |
|------|------|------|
| `section` | 섹션 제목 | `[시작]`, `[후렴]` |
| `chant` | 응원 구호 (하이라이트) | `One! Two! Q! W! E! R!` |
| `lyric` | 일반 가사 | `어떤 인사가 괜찮을까` |
| `break` | 줄 간격 | (빈 줄) |
| `title` | 곡 제목 (선택) | `🎸 QWER - 고민중독 🎸` |

## 💡 팁

- **색상 선택**: 각 노래의 느낌에 맞는 색상을 선택하세요
- **응원 구호**: `chant` 타입을 사용하면 자동으로 강조됩니다
- **subtext**: 응원 타이밍이나 추가 설명을 넣을 수 있습니다
- **이모지**: 노래의 특징을 나타내는 이모지를 사용하세요

## 예시
더 자세한 예시는 `gominjungdok.ts` 파일을 참고하세요!
