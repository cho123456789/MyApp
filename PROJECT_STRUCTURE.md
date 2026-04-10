# 📁 QWER 응원법 앱 - 프로젝트 구조

## 전체 구조
```
MyApp/
├── App.tsx                    # 🎯 라우터 (최소화된 메인 파일)
├── screens/                   # 📱 화면 컴포넌트
│   ├── index.ts
│   ├── SongListScreen.tsx    # 노래 목록 화면
│   └── SongDetailScreen.tsx  # 노래 상세/응원법 화면
├── songs/                     # 🎵 노래 데이터
│   ├── types.ts              # 타입 정의
│   ├── index.ts              # 전체 export
│   ├── gominjungdok.ts       # 고민중독
│   ├── gajjaidol.ts          # 가짜 아이돌
│   ├── tbh.ts                # T.B.H
│   ├── discord.ts            # Discord
│   ├── myname.ts             # 내 이름 맑음
│   └── README.md             # 노래 추가 가이드
└── PROJECT_STRUCTURE.md       # 이 파일
```

## 📄 파일 설명

### App.tsx (35줄)
**역할:** 라우터 - 화면 전환만 담당
```typescript
- 현재 화면 상태 관리
- 화면 간 데이터 전달
- StatusBar 설정
```
**원칙:** UI 로직 없음, 순수 라우팅만

### screens/
**역할:** 각 화면의 UI와 로직

#### SongListScreen.tsx
- 노래 목록 표시
- 노래 선택 처리
- Props: `onSelectSong`, `selectedSong`

#### SongDetailScreen.tsx
- 선택된 노래의 가사/응원법 표시
- 전체/응원법 전환 토글
- Props: `song`, `onBack`

### songs/
**역할:** 노래 데이터 관리

#### types.ts
공통 타입 정의
```typescript
ChantLine: 가사/응원법 한 줄
Song: 노래 전체 정보
```

#### 각 노래 파일 (예: gominjungdok.ts)
독립적인 노래 데이터
- 가사
- 응원법
- 색상/이모지

## 🎯 설계 원칙

### 1. 관심사 분리 (Separation of Concerns)
- **App.tsx**: 라우팅만
- **screens/**: UI와 화면 로직
- **songs/**: 데이터만

### 2. 단일 책임 원칙 (Single Responsibility)
- 각 파일은 하나의 역할만
- 각 컴포넌트는 하나의 화면만

### 3. 확장 가능성 (Scalability)
- 새 화면 추가: `screens/` 폴더에 파일 추가
- 새 노래 추가: `songs/` 폴더에 파일 추가
- 라우터 업그레이드: App.tsx만 수정

## 🚀 다음 단계 (선택사항)

### React Navigation 도입
현재는 간단한 상태 기반 라우팅이지만, 
프로젝트가 커지면 React Navigation 추가:

```bash
npm install @react-navigation/native
npm install @react-navigation/stack
```

### 추가 폴더 구조
```
MyApp/
├── components/        # 재사용 가능한 컴포넌트
│   ├── ChantLine.tsx  # 응원법 라인 컴포넌트
│   └── SongCard.tsx   # 노래 카드 컴포넌트
├── hooks/             # 커스텀 훅
│   └── useSongData.ts
├── utils/             # 유틸리티 함수
└── constants/         # 상수 정의
```

## 💡 장점

### 유지보수성
- 각 파일이 작고 명확함
- 버그 찾기 쉬움
- 수정 범위가 제한적

### 협업 친화성
- 여러 명이 동시 작업 가능
- 충돌 최소화
- 코드 리뷰 쉬움

### 테스트 용이성
- 각 컴포넌트 독립적으로 테스트
- Mock 데이터 사용 쉬움

## 🎓 학습 포인트

이 구조는 실제 프로덕션 앱에서 사용하는 패턴입니다:
- ✅ 컴포넌트 분리
- ✅ 데이터와 UI 분리
- ✅ 재사용 가능한 구조
- ✅ 확장 가능한 설계
