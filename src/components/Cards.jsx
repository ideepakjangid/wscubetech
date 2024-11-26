import single from "../assets/img/single.png";
import double from "../assets/img/double.png";
import triple from "../assets/img/triple.png";

export default function Cards() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-7 px-6 md:px-24 py-28">
          <div className="shadow-lg flex flex-col items-center px-12 gap-5 py-8 text-center relative group hover:scale-[1.1] duration-[500ms] ">
            <div className="absolute top-[-41px] left-[40%]">
              <img src={single} width="80px" alt="" />
            </div>
            <h2 className="font-bold text-[18px]">Web Development</h2>
            <span className="font-bold text-3xl">$ 149</span>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply
            </div>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply dummy text of printing
            </div>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply dumm
            </div>
            <button className="bg-[#11dc89] rounded p-2 px-10 text-black group-hover:text-[#11dc89] group-hover:bg-black">
              Start Trial
            </button>
          </div>
          <div className="shadow-lg bg-[#f2f4f5] flex flex-col items-center px-12 gap-5 py-8 text-center relative top-[-20px] group hover:scale-[1.1] duration-[500ms] mt-28 md:mt-0">
            <div className="absolute top-[-41px] left-[40%]">
              <img src={double} width="80px" alt="" />
            </div>
            <h2 className="font-bold text-[18px]">Digital Marketing</h2>
            <span className="font-bold text-3xl">$ 149</span>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply
            </div>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply dummy text of printing
            </div>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply dumm
            </div>
            <button className="bg-[#11dc89] rounded p-2 px-10 text-black group-hover:text-[#11dc89] group-hover:bg-black">
              Start Trial
            </button>
          </div>
          <div className="shadow-lg  flex flex-col items-center px-12 gap-5 py-8 text-center relative group hover:scale-[1.1] duration-[500ms] mt-28 md:mt-0">
            <div className="absolute top-[-41px] left-[40%]">
              <img src={triple} width="80px" alt="" />
            </div>
            <h2 className="font-bold text-[18px]">App Development</h2>
            <span className="font-bold text-3xl">$ 149</span>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply
            </div>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply dummy text of printing
            </div>
            <div className="w-full border-b border-slate-200 pb-2">
              Lorem ipsum is simply dumm
            </div>
            <button className="bg-[#11dc89] rounded p-2 px-10 text-black group-hover:text-[#11dc89] group-hover:bg-black">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
