import Image from 'next/image';
import EventsCard from '@/components/events-card';
import Button from '@/components/button';
import { Card } from '@/components/ui/card';
import ComingSoonModal from '@/components/coming-soon-modal';

const UpcomingEvents = () => {
  return (
    <div className="relative">
      <div className="absolute w-full mx-auto h-full shadow-2xl z-10 bg-background/80 backdrop-blur-sm p-20 flex items-center justify-center">
        <Card className="p-20 text-2xl font-bold font-sora">Coming Soon</Card>
      </div>

      <div className="py-12 md:py-8">
        <h2 className="text-ct-grey-1000 text-3xl font-bold font-sora my-2">
          Upcoming events
        </h2>
        <p className="text-ct-grey-600 text-lg my-4 max-w-[788px]">
          At Campustalkative, we understand the importance of building and
          maintaining a strong community. That&lsquo;s why we are dedicated to
          providing the best resources and op
        </p>
        d
      </div>
      <div>
        <div className="flex items-end gap-5 mxl:ml-[-8%] mxl:px-12 mxl:mb-[-65%] mmd:mt-[15%] xl:hidden ">
          <Image
            src="/assets/icons/--ct-events-curve.svg"
            alt="events"
            className=""
            height={900}
            width={900}
          />
          <div className=" mmd:mb-[-1%]">
            <ComingSoonModal
              title="Coming soon: Make a Difference with Your Donation"
              text="We're thrilled to announce that our new donate feature is on its way! Soon, you'll be able to support our noble cause by making a donation. Every contribution will help us take important steps toward our mission. Whether it's helping the less fortunate, protecting the environment, or promoting social justice, your donation will play a crucial role in creating positive change. Stay tuned for updates on how you can be a part of this transformative journey."
            >
              <Button hoverText="Coming soon!">See more events</Button>
            </ComingSoonModal>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6 mxl:mb-[15%]">
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
        <div className="my-12 mxl:hidden w-max mmd:w-full mmd:flex mmd:items-end mmd:justify-end">
          <div>
            <ComingSoonModal
              title="Coming soon: Make a Difference with Your Donation"
              text="We're thrilled to announce that our new donate feature is on its way! Soon, you'll be able to support our noble cause by making a donation. Every contribution will help us take important steps toward our mission. Whether it's helping the less fortunate, protecting the environment, or promoting social justice, your donation will play a crucial role in creating positive change. Stay tuned for updates on how you can be a part of this transformative journey."
            >
              <Button hoverText="Coming soon!">See more events</Button>
            </ComingSoonModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
