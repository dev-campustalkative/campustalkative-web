'use client';

import JoinImages from '@/components/join-images';
import Button from '@/components/secondary-button';
import Link from 'next/link';
import { RiWhatsappFill, RiTelegramFill } from 'react-icons/ri';

const JoinHeader = () => {
  return (
    <div className="pt-32 flex items-center justify-center flex-col my-6">
      <div className="flex items-center justify-center my-4">
        <JoinImages />
      </div>
      <div className="my-4">
        <h1 className=" text-5xl font-bold font-sora text-ct-grey-1000 text-center my-2 sm:text-2xl">
          Join our community with ease
        </h1>
        <p className="text-lg text-center text-ct-grey-600 max-w-[861px] mx-auto my-2 sm:text-sm">
          Our community exist on any of these two platforms. Whatsapp community
          and Telegram channel. You can join either of them and enjoy the same
          benefits.
        </p>
      </div>
      <div className="flex justify-center items-center my-4">
        <div className="flex flex-col  gap-4">
          <Link
            href="https://join.slack.com/t/campustalkative/shared_invite/zt-1onngpe3l-LFu1TtODxkyjQPwnW773qQ"
            target="_blank"
            rel="noreferrer"
          >
            <Button icon={RiWhatsappFill}>CT Whatsapp community</Button>
          </Link>
          <Link
            href="https://t.me/+U8J2O3guPCkxMDI8"
            target="_blank"
            rel="noreferrer"
          >
            <Button icon={RiTelegramFill}>CT Telegram channel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinHeader;
