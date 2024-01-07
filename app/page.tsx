'use client';

import Container from '@/components/container';
import Hero from '@/containers/hero';
import Collaboration from '@/containers/collaboration';
import Progress from '@/containers/progress';
import Resources from '@/containers/resources';
import Community from '@/containers/community';
import Testimonials from '@/containers/testimonials';
import Support from '@/containers/support';
import Sponsors from '@/components/sponsors';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: -200,
      delay: 100,
      once: false,
    });
  }, []);
  return (
    <>
      <Container>
        <Hero />
        <Collaboration />
        <Sponsors />
        <Progress />
        <Resources />
      </Container>
      <Community />
      <Container>
        <Testimonials />
        <Support />
      </Container>
    </>
  );
}
