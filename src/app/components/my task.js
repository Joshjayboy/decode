import AvatarGroup from "./avatar";

function MyTask() {
  const avatarImages = [
    "/Male Memojis.svg",
    "/Male Memojis (1).svg",
    "/Male Memojis (2).svg",
  ];

  const avatarImages2 = ["/Male Memojis.svg", "/Male Memojis (1).svg"];

  const avatarImages3 = ["/Male Memojis.svg"];

  return (
    <div>
      <div className="p-5 bg-[#191919] rounded-2xl pb-6">
        <h2 className="text-4xl mt-2 mb-8 border-b-2 border-[#242424] pb-3">
          My Tasks
        </h2>
        <div className="flex">
          <span className="text-base p-1 pb-2 border-b-2 border-[#6d59ea] hover:cursor-pointer">
            Upcoming
          </span>
          <span className="text-base p-1 pb-2 mx-6 hover:cursor-pointer">
            In progress
          </span>
          <span className="text-base p-1 pb-2 hover:cursor-pointer">
            Completed
          </span>
        </div>
        <div className="mt-8">
          <div className="flex items-center mb-6 hover:cursor-pointer">
            <span className="mr-6 w-48">Testing out the project</span>
            <AvatarGroup images={avatarImages} />
            <span className="ml-3">July 27-31</span>
          </div>

          <div className="flex items-center mb-6 hover:cursor-pointer">
            <span className="mr-6 w-48">Development of Decolab</span>
            <AvatarGroup images={avatarImages2} />
            <span className="ml-3">August 1-10</span>
          </div>

          <div className="flex items-center mb-6 hover:cursor-pointer">
            <span className="mr-6 w-48">Web3 Js Integration</span>
            <AvatarGroup images={avatarImages3} />
            <span className="ml-3">August 2-6</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTask;
