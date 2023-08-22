import Image from "next/image";

function Nav() {
  return (
    <nav className="py-6 flex justify-end">
      <div className="flex gap-16">
        <div className="flex justify-between items-center bg-[#191919] lg:w-[401px] w-[280px] p-2 rounded-3xl">
          <div className="flex">
            <button>
              <Image
                src="/search-normal.svg"
                width="24"
                height="24"
                className="mx-2"
              />
            </button>
            <input
              type="text"
              placeholder="Search task, activity team..."
              className="text-[white] bg-[#191919]"
            />
          </div>
          <span>
            <Image
              src="/filter.svg"
              width="16"
              height="16"
              className="mr-4 hover:cursor-pointer"
            />
          </span>
        </div>
        <div className="flex text-[white]">
          <div className="flex">
            <Image
              src="/tick-square.svg"
              width="24"
              height="24"
              className="mx-2 hover:cursor-pointer"
            />
            <Image
              src="/folder.svg"
              width="24"
              height="24"
              className="mx-2 hover:cursor-pointer"
            />
            <Image
              src="/notification.svg"
              width="24"
              height="24"
              className="mx-2 hover:cursor-pointer"
            />
          </div>
          <button className="flex items-center p-2 bg-[#6D59EA] rounded-3xl mx-3.5 px-3.5">
            Add Task
            <span>
              <img src="/add.svg" className="pl-2" />
            </span>
          </button>
          <div className="flex items-center p-2 bg-[#191919] rounded-3xl hover:cursor-pointer">
            <Image
              src="/Ellipse 1923.jpg"
              width="24"
              height="24"
              className="rounded-full mr-2"
            />
            <span>Ox7rbfc9...</span>
            <img
              src="/Icons (1).svg"
              className="ml-6 pr-2"
              alt="dropdown icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
