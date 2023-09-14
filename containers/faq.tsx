'use client';

import FAQBox from '@/components/faq-box';

const FAQ = () => {
  return (
    <div>
      <div>
        <h1 className="text-base text-ct-primary-800">FAQs</h1>
        <h2 className="text-3xl font-sora font-bold text-ct-primary-1100 max-[742px] my-4">
          Here are some frequently asked questions by our community.
        </h2>
      </div>
      <div>
        <FAQBox />
      </div>
    </div>
  );
};

export default FAQ;
