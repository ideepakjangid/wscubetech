export default function NotifyMe() {
  return (
    <>
      <div className="w-full bg-[#2699fb]">
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-14 px-3 md:px-24">
          <div className="text-white">
            <h2 className="text-2xl font-bold">
              Want to learn latest I.T Skills?
            </h2>
            <span>sign to our newletter and stay up to date</span>
          </div>
          <div>
            <div className="mb-4 mt-3 md:mt-0">
              <input
                type="text"
                placeholder="Enter email"
                className="text-slate-400  rounded p-2 px-5"
              />
              <button className="bg-black rounded p-2 px-6 text-white ml-3">
                Notify Me
              </button>
            </div>
            <span>We care about the protection of your data. Read our <br /><a href="" className="text-[blue]">Privacy Policy</a></span>
          </div>
        </div>
      </div>
    </>
  );
}
