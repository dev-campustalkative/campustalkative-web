'use client';

import Image from 'next/image';
import MissionCard from '@/components/mission-card';

const Mission = () => {
  return (
    <div className="flex md:flex-col py-12">
      <div className="transform -rotate-12 relative z-10 mmd:hover:rotate-0 mmd:hover:scale-150 mmd:duration-300 group md:rotate-[-5deg]">
        <MissionCard
          title="Our mission"
          text="Campustalkative is a community-focused platform that aims to empower and inspire the youth of Africa. It started with a vision to create a space where young people can connect, network, and grow together. It offers various resources and opportunities for its members, such as events, online courses, mentorship programs, and partnerships with other organizations. Some of the events that Campustalkative organizes."
        />
        <Image
          src="/assets/icons/--ct-mission-1.svg"
          alt="mission"
          className="absolute top-[-15%] right-[-10%] transform rotate-12  group-hover:-rotate-12 duration-300"
          width={87}
          height={139}
        />
      </div>
      <div className="transform rotate-12 relative mt-12  mmd:hover:z-20 mmd:hover:rotate-0 mmd:hover:scale-150 duration-300 group md:rotate-[5deg]">
        <MissionCard
          title="Our values"
          text="Campustalkative is a community-focused platform that aims to empower and inspire the youth of Africa. It started with a vision to create a space where young people can connect, network, and grow together. It offers various resources and opportunities for its members, such as events, online courses, mentorship programs, and partnerships with other organizations. Some of the events that Campustalkative organizes."
        />
        <Image
          src="/assets/icons/--ct-mission-2.svg"
          alt="mission"
          className="absolute bottom-[-10%] right-[-5%] transform -rotate-12 group-hover:rotate-12 duration-300"
          width={87}
          height={139}
        />
      </div>
    </div>
  );
};

export default Mission;
