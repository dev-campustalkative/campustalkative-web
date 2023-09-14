'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { testimonies } from '@/data/testimonies';

const TestimonialBox = () => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);
  const testimoniesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonyIndex((prevIndex) =>
        prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const scrollContainer = testimoniesRef.current;
    const activeElement = scrollContainer?.querySelector(
      '.bg-ct-secondary-1100',
    );

    if (scrollContainer && activeElement instanceof HTMLDivElement) {
      const containerWidth = scrollContainer.offsetWidth;
      const activeElementWidth = activeElement.offsetWidth;
      const activeElementLeft = activeElement.offsetLeft;

      if (
        activeElementLeft < scrollContainer.scrollLeft ||
        currentTestimonyIndex === 0
      ) {
        scrollContainer.scrollTo({
          behavior: 'smooth',
          left: 0,
        });
      } else if (
        activeElementLeft + activeElementWidth >
        scrollContainer.scrollLeft + containerWidth
      ) {
        scrollContainer.scrollTo({
          behavior: 'smooth',
          left: activeElementLeft + activeElementWidth - containerWidth,
        });
      }
    }
  }, [currentTestimonyIndex]);

  const currentTestimony = testimonies[currentTestimonyIndex];

  const handleClick = (index: number) => {
    setCurrentTestimonyIndex(index);
  };

  return (
    <div className=" rounded-3xl border-2 border-ct-secondary-600 border-dashed p-8 flex justify-between mx-auto max-w-[1480px] sm:flex-col sm:p-6 ">
      <div className="flex-1">
        <div
          ref={testimoniesRef}
          className=" w-3/5 sm:w-full sm:flex sm:overflow-x-scroll sm:no-scrollbar "
        >
          {testimonies.map((testimony, index) => {
            return (
              <div
                key={testimony.id}
                className={`rounded-full  p-4 flex items-center gap-4 cursor-pointer hover:scale-110 duration-200 mt-6 sm:mr-2  ${
                  currentTestimonyIndex === index && 'bg-ct-secondary-1100'
                }`}
                onClick={() => handleClick(index)}
              >
                <div className="rounded-full border border-ct-primary-100 sm:w-10">
                  <Image
                    src="/assets/images/--ct-testimonials-1.png"
                    alt="testimony"
                    className="sm:w-10"
                    height={80}
                    width={80}
                  />
                </div>
                <div className="">
                  <span
                    className={`text-xl md:whitespace-nowrap ${
                      currentTestimonyIndex === index
                        ? 'font-bold text-ct-primary-100 '
                        : ' font-semibold text-ct-grey-600'
                    }`}
                  >
                    {testimony.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex-1">
        <div className="w-full h-full">
          <div className="max-w-[595px] duration-200 h-[60%]">
            <h2 className="text-3xl text-ct-grey-1000 font-bold my-3">
              {currentTestimony.name}
            </h2>
            <p className="text-lg text-ct-grey-600">
              {currentTestimony.testimony}
            </p>
          </div>
          <div className="flex items-center justify-start mt-4">
            {testimonies.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentTestimonyIndex === index
                    ? 'bg-ct-secondary-1100'
                    : 'bg-ct-secondary-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
