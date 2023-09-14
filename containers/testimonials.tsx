'use client';

import TestimonialBox from '@/components/testimonial-box';
import Container from '@/components/container';

const Testimonials = () => {
  return (
    <div className="py-8 my-12 sm:my-6">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-ct-primary-1000 p-2 text-center my-8 sm:my-2">
            <span className="text-ct-primary-500 text-sm font-bold whitespace-nowrap">
              Words from the community
            </span>
          </div>
          <div className="my-4 sm:my-0">
            <h1 className="text-center text-9xl font-extrabold md:text-7xl sm:text-5xl">
              Testimonials
            </h1>
            <p className=" text-lg text-center text-ct-grey-600 max-w-[766px] mx-auto my-4">
              Hear from those who have already experienced the benefits of our
              community. Check out our community testimonials below.
            </p>
          </div>
        </div>
      </Container>
      <TestimonialBox />
    </div>
  );
};

export default Testimonials;
