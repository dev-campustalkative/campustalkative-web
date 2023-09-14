'use client';

import Container from '@/components/container';
import AboutHeader from '@/containers/about-header';
import Journey from '@/containers/journey';
import Mission from '@/containers/mission';
import Team from '@/containers/team';

const About = () => {
  return (
    <Container>
      <AboutHeader />
      <Journey />
      <Mission />
      <Team />
    </Container>
  );
};

export default About;
