"use client";

import Image from "next/image";

function SideBar({ activeOption, onOptionClick }) {
  const isOptionActive = (option) => option === activeOption;

  return (
    <aside className="w-[20%] bg-[#141414] fixed overflow-y-scroll overscroll-contain h-screen">
      <div className="flex flex-col mt-6 text-[white]">
        <div className="flex">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl hover:bg-inherit">
              <img src="/logo.svg" /> Decolab
            </a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost hover:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-14">
          <span
            onClick={() => onOptionClick("overview")}
            className={`flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer ${
              isOptionActive("overview") ? "active bg-[#6d59ea] rounded-lg" : ""
            }`}
          >
            <Image
              src="/Icons.svg"
              width="16"
              height="16"
              className={isOptionActive("overview") ? "mr-2" : "hidden"}
            />
            <Image src="/home.svg" width="24" height="24" />
            <span className="pl-2">Overview</span>
          </span>
          <span
            onClick={() => onOptionClick("task")}
            className={`flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer ${
              isOptionActive("task") ? "active bg-[#6d59ea] rounded-lg" : ""
            }`}
          >
            <Image
              src="/Icons.svg"
              width="16"
              height="16"
              className={isOptionActive("task") ? "mr-2" : "hidden"}
            />
            <span className=""></span>
            <Image src="/tick-square.svg" width="24" height="24" />
            <span className="pl-2">Task</span>
          </span>
          <span
            onClick={() => onOptionClick("projects")}
            className={`flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer ${
              isOptionActive("projects") ? "active bg-[#6d59ea] rounded-lg" : ""
            }`}
          >
            <Image
              src="/Icons.svg"
              width="16"
              height="16"
              className={isOptionActive("projects") ? "mr-2" : "hidden"}
            />
            <Image src="/graph.svg" width="24" height="24" />
            <span className="pl-2">Projects</span>
          </span>
          <span
            onClick={() => onOptionClick("team")}
            className={`flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer ${
              isOptionActive("team") ? "active bg-[#6d59ea] rounded-lg" : ""
            }`}
          >
            <Image
              src="/Icons.svg"
              width="16"
              height="16"
              className={isOptionActive("team") ? "mr-2" : "hidden"}
            />
            <Image src="/people.svg" width="24" height="24" />
            <span className="pl-2">Team</span>
          </span>
          <span
            onClick={() => onOptionClick("files")}
            className={`flex items-center text-[white] mx-4 p-2 mb-6 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer ${
              isOptionActive("files") ? "active bg-[#6d59ea] rounded-lg" : ""
            }`}
          >
            <Image
              src="/Icons.svg"
              width="16"
              height="16"
              className={isOptionActive("files") ? "mr-2" : "hidden"}
            />
            <Image src="/folder.svg" width="24" height="24" />
            <span className="pl-2">Files</span>
          </span>
          <hr className="border-1 mx-4 border-[#242424]" />
        </div>

        <div>
          <div>
            <span className="flex justify-between items-center text-[white] mx-4 p-2 mb-4">
              <span>Integrations</span>
              <button>
                <Image src="/add.svg" width="24" height="24" />
              </button>
            </span>
            <span className="flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer">
              <Image src="/logos_ethereum.svg" width="15" height="24" />
              <span className="pl-2">Ethereum</span>
            </span>
            <span className="flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer">
              <Image src="/logos_web3js.svg" width="24" height="24" />
              <span className="pl-2">Web3.js</span>
            </span>
            <span className="flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer">
              <Image
                src="/aragon-ant-seeklogo.com 1.svg"
                width="24"
                height="24"
              />
              <span className="pl-2">Aragon</span>
            </span>
            <span className="flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer">
              <Image src="/skill-icons_ipfs-light.svg" width="24" height="24" />
              <span className="pl-2">IPFS</span>
            </span>
            <span className="flex items-center text-[white] mx-4 p-2 mb-6 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer">
              <Image src="/logos_metamask-icon.svg" width="24" height="24" />
              <span className="pl-2">Metamask</span>
            </span>
          </div>
          <hr className="border-1 mx-4 border-[#242424]" />
        </div>

        <div>
          <div>
            <span className="flex justify-between items-center text-[white] mx-4 p-2 mb-4">
              <span>Messages</span>
              <button>
                <Image src="/add.svg" width="24" height="24" />
              </button>
            </span>
            <span className="flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer">
              <Image src="/Male Memojis.svg" width="24" height="24" />
              <span className="pl-2">Ox7rbfc9</span>
            </span>
            <span className="flex items-center text-[white] mx-4 p-2 mb-4 hover:bg-[#6d59ea] hover:rounded-lg hover:cursor-pointer">
              <Image src="/Male Memojis (1).svg" width="24" height="24" />
              <span className="pl-2">Ox7rbfc9</span>
            </span>
          </div>
        </div>

        <div className="flex justify-between mt-24 mx-4 p-2 mb-4">
          <Image
            src="/setting-3.svg"
            width="24"
            height="24"
            className="hover:cursor-pointer"
          />
          <Image
            src="/sun.svg"
            width="24"
            height="24"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
