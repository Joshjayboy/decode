import Image from "next/image";

function MyProjects() {
  return (
    <div>
      <div className="p-5 bg-[#191919] rounded-2xl pb-6 lg:pb-24">
        <h2 className="text-white text-4xl mt-2 mb-8 border-b-2 border-[#242424] pb-3">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-h-60 overflow-y-auto overscroll-auto">
          <div className="text-center bg-[#161616] flex flex-col justify-between p-4 rounded-2xl w-56 h-28 hover:cursor-pointer">
            <span>+</span>
            <span>Create Project</span>
          </div>
          <div className="bg-[#161616] flex items-center gap-4 p-4 rounded-2xl w-56 h-28 hover:cursor-pointer">
            <Image
              src="/Frame 1000003077.jpg"
              width="80"
              height="74"
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <span className="text-sm mb-1">Bankless DAO</span>
              <span className="text-xs text-[#D28004]">3 Tasks Due Soon</span>
            </div>
          </div>
          <div className="bg-[#161616] flex items-center gap-4 p-4 rounded-2xl w-56 h-28 hover:cursor-pointer">
            <Image
              src="/Frame 1000003092.png"
              width="80"
              height="74"
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <span className="text-sm mb-1">Bankless DAO</span>
              <span className="text-xs text-[#6BD204]">1 New Task</span>
            </div>
          </div>
          <div className="bg-[#161616] flex items-center gap-4 p-4 rounded-2xl w-56 h-28 hover:cursor-pointer">
            <Image
              src="/Frame 1000003092 (3).jpg"
              width="80"
              height="74"
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <span className="text-sm mb-1">Bankless DAO</span>
              <span className="text-xs text-[#6BD204]">1 New Task</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
