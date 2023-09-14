'use client';

interface Props {
  text: string;
}

const Date: React.FC<Props> = ({ text }) => {
  return (
    <div className="bg-ct-primary-1000 p-2 text-center ">
      <span className="text-ct-primary-500 text-sm font-bold whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

export default Date;
