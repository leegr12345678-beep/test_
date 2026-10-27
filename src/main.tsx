import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorSchemeArea, TDSMobileProvider } from '@toss/tds-mobile';
import App from './App';
import './index.css';

// 토스 앱 밖(일반 브라우저)에서 실행하므로 앱 환경 정보를 직접 넣어줘요.
const userAgent = {
  fontA11y: undefined,
  fontScale: undefined,
  isAndroid: /Android/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent),
  colorPreference: 'light' as const,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 토스 앱이 넣어주던 색상 변수(--adaptive... 등)를 직접 채워줘요.
        하단 고정 버튼처럼 포털로 그려지는 요소도 받을 수 있게 Provider 바깥을 감싸요. */}
    <ColorSchemeArea theme="light">
      <TDSMobileProvider userAgent={userAgent}>
        <App />
      </TDSMobileProvider>
    </ColorSchemeArea>
  </StrictMode>,
);
