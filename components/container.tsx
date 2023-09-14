'useClient';

interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[1280px] mx-auto mxl:px-20 mmd:px-10 msm:px-4 px-6">
      {children}
    </div>
  );
};

export default Container;
