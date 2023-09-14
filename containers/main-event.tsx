import Image from 'next/image';
import Date from '@/components/date';
import Button from '@/components/button';
import ComingSoonModal from '@/components/coming-soon-modal';

const MainEvent = () => {
  return (
    <div className="pt-36 md:py-12 flex gap-6 md:flex-col">
      <div className="w-full">
        <div className="flex flex-col items-start gap-6 md:gap-3">
          <Date text="12th May, 2023" />
          <div className="mmd:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg">
            <Image
              src="/assets/images/--ct-products-1.png"
              alt="campustalkative merch"
              className="w-full h-full"
              height={500}
              width={350}
            />
          </div>
          <div>
            <h2 className="font-sora font-bold text-3xl text-ct-grey-1000 my-6 md:my-3 md:text-2xl">
              Spark AR x Campustalkative
            </h2>
            <p className="text-lg text-ct-grey-600 max-w-[690px] md:text-sm">
              At Campustalkative, we understand the importance of building and
              maintaining a strong community. That&lsquo;s why we are dedicated
              to providing the best resources and opportunities for our members
              to connect, network, and grow together. Whether it&lsquo;s through
              events, online resources, or other initiatives, we are committed
              to fostering a vibrant and supportive community for all.
            </p>
          </div>
          <div>
            <ComingSoonModal
              title="Coming soon: Make a Difference with Your Donation"
              text="We're thrilled to announce that our new donate feature is on its way! Soon, you'll be able to support our noble cause by making a donation. Every contribution will help us take important steps toward our mission. Whether it's helping the less fortunate, protecting the environment, or promoting social justice, your donation will play a crucial role in creating positive change. Stay tuned for updates on how you can be a part of this transformative journey."
            >
              <Button hoverText="Coming soon!">Get Tickets</Button>
            </ComingSoonModal>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="md:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg">
          <Image
            src="/assets/images/--ct-products-1.png"
            alt="campustalkative merch"
            className="w-full h-full"
            height={500}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default MainEvent;
