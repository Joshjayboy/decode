function MyActivity() {
  return (
    <div>
      <div className="p-5 bg-[#191919] rounded-2xl pb-14">
        <h2 className="text-white text-4xl mt-2 mb-8 border-b-2 border-[#242424] pb-3">
          Activity
        </h2>
        <div>
          <div className="flex mb-4 items-center hover:cursor-pointer">
            <span className="w-44">Payment For Milestone</span>
            <span className="ml-6 w-40">Ox7rbfc9a6c6179dl...</span>
            <span className="ml-6">
              2 sec <span>ago</span>
            </span>
          </div>

          <div className="flex mb-4 items-center hover:cursor-pointer">
            <span className="w-44">Deployed Smart Con...</span>
            <span className="ml-6 w-40">Ox7rbfc9a6c6179dl...</span>
            <span className="ml-6">
              30 min <span>ago</span>
            </span>
          </div>

          <div className="flex mb-4 items-center hover:cursor-pointer">
            <span className="w-44">Send Eth</span>
            <span className="ml-6 w-40">Ox7rbfc9a6c6179dl...</span>
            <span className="ml-6">
              12 hrs <span>ago</span>
            </span>
          </div>

          <div className="flex mb-4 items-center hover:cursor-pointer">
            <span className="w-44">Approve Zeta Spending</span>
            <span className="ml-6 w-40">Ox7rbfc9a6c6179dl...</span>
            <span className="ml-6">
              12 hrs <span>ago</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyActivity;
