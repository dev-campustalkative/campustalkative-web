'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export const LayoutClient = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: -200,
      delay: 100,
      once: false,
    });
  }, []);
  return <>{children}</>;
};
