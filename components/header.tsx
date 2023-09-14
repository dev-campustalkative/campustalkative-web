'use client';

interface Props {
  title: string;
  text: string;
}

const Header: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="pt-36">
      <div className="rounded-3xl bg-ct-secondary-1100 py-8 px-8 md:px-4 md:py-6">
        <h2 className="text-ct-grey-100 text-4xl font-sora font-bold sm:text-2xl mb-6">
          {text}
        </h2>
        <h1 className=" capitalize text-9xl font-extrabold opacity-80 pt-4 sm:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
