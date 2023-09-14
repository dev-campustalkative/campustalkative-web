'use client';

interface Props {
  num: number;
  children: React.ReactNode;
}

const Metric: React.FC<Props> = ({ num, children }) => {
  return (
    <div className="my-6 sm:my-0">
      <h2 className="text-7xl text-ct-grey-1000 font-bold font-sora sm:text-4xl text-center">
        {num}
      </h2>
      <p className="text-base text-ct-primary-800 font-sora sm:text-xs text-center">
        {children}
      </p>
    </div>
  );
};

export default Metric;
