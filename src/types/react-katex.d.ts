declare module 'react-katex' {
  import React from 'react';

  interface MathProps {
    math: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }

  export const InlineMath: React.FC<MathProps>;
  export const BlockMath: React.FC<MathProps>;
} 