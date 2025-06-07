import { TbCoin, TbBriefcase2 } from "react-icons/tb";

function ImagePlaceholder() {
  return (
    <div className="bg-midnight-800 relative flex h-72 w-96 items-center justify-center overflow-hidden rounded-xl shadow-lg">
      <div className="from-midnight-900 via-midnight-800 to-midnight-700 absolute inset-0 rounded-xl bg-gradient-to-br opacity-20"></div>
      <div className="border-midnight-400 relative flex h-4/5 w-4/5 items-center justify-center rounded-lg border-2">
        <div className="bg-midnight-500 absolute top-10 right-10 flex h-14 w-14 items-center justify-center rounded-md text-xl text-white shadow-md">
          <TbCoin size={22} />
        </div>
        <div className="bg-midnight-400 absolute bottom-10 left-10 flex h-14 w-14 items-center justify-center rounded-md text-xl text-white shadow-md">
          <TbBriefcase2 size={22} />
        </div>
        <div className="bg-midnight-500 h-20 w-20 rotate-45 shadow-md"></div>
      </div>
    </div>
  );
}

export default ImagePlaceholder;
