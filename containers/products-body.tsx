import Image from 'next/image';
import Button from '@/components/button';
import ComingSoonModal from '@/components/coming-soon-modal';

const ProductsBody = () => {
  return (
    <div className="py-12">
      <div className="flex items-center justify-center gap-6 py-12 md:flex-col-reverse">
        <div className="flex flex-col items-start gap-6 max-w-[668px] md:gap-3">
          <h2 className="font-sora text-3xl font-bold text-ct-grey-1000">
            CT Merch
          </h2>
          <div className="mmd:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg transform mmd:rotate-12 ">
            <Image
              src="/assets/images/--ct-products-1.png"
              alt="campustalkative merch"
              className="w-full h-full"
              height={500}
              width={350}
            />
          </div>
          <p className="text-lg text-ct-grey-600">
            At Campustalkative, we understand the importance of building and
            maintaining a strong community. That&lsquo;s why we are dedicated to
            providing the best resources and opportunities for our members to
            connect, network, and grow together. Whether it&lsquo;s through
            events, online resources, or other initiatives, we are committed to
            fostering a vibrant and supportive community for all.
          </p>
          <div>
            <ComingSoonModal
              title="Coming soon: Make a Difference with Your Donation"
              text="We're thrilled to announce that our new donate feature is on its way! Soon, you'll be able to support our noble cause by making a donation. Every contribution will help us take important steps toward our mission. Whether it's helping the less fortunate, protecting the environment, or promoting social justice, your donation will play a crucial role in creating positive change. Stay tuned for updates on how you can be a part of this transformative journey."
            >
              <Button hoverText="Coming soon!">Check out our store</Button>
            </ComingSoonModal>
          </div>
        </div>
        <div className="md:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg transform mmd:rotate-12 ">
          <Image
            src="/assets/images/--ct-products-1.png"
            alt="campustalkative merch"
            className="w-full h-full"
            height={500}
            width={350}
          />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center gap-12 py-12 md:flex-col-reverse md:gap-6">
        <div className="flex flex-col items-start gap-6 max-w-[668px] md:gap-3">
          <h2 className="font-sora text-3xl font-bold text-ct-grey-1000">
            Workspace Deals
          </h2>
          <div className="mmd:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg transform mmd:rotate-12 ">
            <Image
              src="/assets/images/--ct-products-1.png"
              alt="campustalkative merch"
              className="w-full h-full"
              height={500}
              width={350}
            />
          </div>
          <p className="text-lg text-ct-grey-600 ">
            At Campustalkative, we understand the importance of building and
            maintaining a strong community. That&lsquo;s why we are dedicated to
            providing the best resources and opportunities for our members to
            connect, network, and grow together. Whether it&lsquo;s through
            events, online resources, or other initiatives, we are committed to
            fostering a vibrant and supportive community for all.
          </p>
          <div>
            <ComingSoonModal
              title="Coming soon: Make a Difference with Your Donation"
              text="We're thrilled to announce that our new donate feature is on its way! Soon, you'll be able to support our noble cause by making a donation. Every contribution will help us take important steps toward our mission. Whether it's helping the less fortunate, protecting the environment, or promoting social justice, your donation will play a crucial role in creating positive change. Stay tuned for updates on how you can be a part of this transformative journey."
            >
              <Button hoverText="Coming soon!">View deals</Button>
            </ComingSoonModal>
          </div>
        </div>
        <div className="md:hidden w-full h-full rounded-[32px] border border-ct-secondary-300 shadow-ct-lg transform mmd:-rotate-12 ">
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

export default ProductsBody;
