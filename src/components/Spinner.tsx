import { Loader } from 'lucide-react';
const Spinner = () => {
  return (
    <div className=" overflow-hidden flex items-center justify-center">
      <Loader className="size-20 animate-spin" />
    </div>
  );
};

export default Spinner;
