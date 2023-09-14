'use client';

interface Props {
  title: string;
  text: string;
}

const MissionCard: React.FC<Props> = ({ title, text }) => {
  return (
    <div className=" p-8 bg-white rounded-2xl border border-ct-secondary-300 shadow-ct-lg ">
      <h1 className=" text-3xl font-bold font-sora text-ct-grey-1000  md:text-2xl">
        {title}
      </h1>
      <p className="text-lg text-ct-grey-600 md:text-sm">{text}</p>
    </div>
  );
};

export default MissionCard;
