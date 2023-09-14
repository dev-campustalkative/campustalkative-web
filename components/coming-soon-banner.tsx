const ComingSoonBanner: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-b text-white text-center py-2 z-50 animate-gradient-slide">
      <p className="text-sm font-medium">{children}</p>
    </div>
  );
};

export default ComingSoonBanner;
