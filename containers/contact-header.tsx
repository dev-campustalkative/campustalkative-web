'use client';

import Image from 'next/image';

const ContactHeader = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <div>
        <Image
          src="/assets/images/--ct-contact-1.png"
          alt="contact"
          height={456}
          width={864}
        />
      </div>
      <div>
        <h1 className=" opacity-80 text-center text-9xl font-sora font-extrabold my-8 sm:text-6xl capitalize">
          CONTACT US
        </h1>
      </div>
    </div>
  );
};

export default ContactHeader;
