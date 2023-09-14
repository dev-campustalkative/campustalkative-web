'use client';

import Image from 'next/image';
import Metric from '@/components/metric';

const Journey = () => {
  return (
    <div className="my-12">
      <div className="mmd:max-w-[65%] ml-auto">
        <h2 className=" text-2xl font-sora font-bold text-ct-grey-1000 my-2">
          Our journey has been a really long and exciting.
        </h2>
        <p className="text-base text-ct-grey-600 my-">
          Campustalkative is a community-focused platform that aims to empower
          and inspire the youth of Africa. It started with a vision to create a
          space where young people can connect, network, and grow together. It
          offers various resources and opportunities for its members, such as
          events, online courses, mentorship programs, and partnerships with
          other organizations. Some of the events that Campustalkative organizes
          include workshops, webinars, panel discussions, hackathons, and social
          gatherings. Some of the online courses that Campustalkative provides
          include topics such as entrepreneurship, leadership, personal
          development, and digital skills. Campustalkative also connects its
          members with mentors and experts who can guide them in their career
          and life goals. Additionally, Campustalkative partners with other
          organizations that share its vision and mission of developing and
          building the youths of the future. Campustalkative has grown to become
          the largest community for youth growth and development in Africa, with
          over 4700 members and counting. It is more than just a platform; it is
          a movement that celebrates the potential and diversity of the African
          youth.
        </p>
      </div>
      <div
        style={{
          backgroundImage: 'url(/assets/icons/--ct-journey-slug.svg)',
          backgroundRepeat: 'no-repeat',
        }}
        className="mmd:w-[80%] mmd:h-[400px] relative mmd:mt-[-10%] mb-[10%]  bg-none-md md:flex justify-between items-center gap-4 md:my-8"
      >
        <div className="mmd:absolute mmd:left-[-10%] mmd:top-[15%] ">
          <Metric num={2016}>Beginning of our journey</Metric>
        </div>
        <div className="mmd:absolute mmd:bottom-[10%] mmd:left-[35%] mmd:transform mmd:-translate-x-1/2">
          <Metric num={20}>Team members</Metric>
        </div>
        <div className="mmd:absolute mmd:bottom-[-15%] mmd:right-[15%]">
          <Metric num={4782}>Members and counting</Metric>
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/--ct-journey-1.png"
          alt="journey"
          className="w-full h-full rounded-xl"
          height={1000}
          width={456}
        />
      </div>
    </div>
  );
};

export default Journey;
