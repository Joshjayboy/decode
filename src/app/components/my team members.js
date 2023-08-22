import Image from "next/image";

function MyTeamMembers() {
  return (
    <div>
      <div className="p-5 bg-[#191919] rounded-2xl pb-6 mt-[-23px]">
        <div className="flex items-center gap-[165px] mt-2 mb-8 border-b-2 border-[#242424] pb-3">
          <h2 className="text-white text-4xl">Team Members</h2>
          <Image src="/profile-add.svg" width="24" height="24" />
        </div>
        <div className="flex items-center mb-6 hover:cursor-pointer">
          <Image src="/Male Memojis.svg" width="30" height="30" />
          <span className="ml-2 w-20">Ox7rbfc9...</span>
          <span className="w-36 ml-6">UI/UX Designer</span>
          <span className="w-20 ml-6">Tech</span>
          <Image
            src="/document-text.svg"
            width="24"
            height="24"
            className="ml-6"
          />
          <span className="ml-2">3</span>
        </div>

        <div className="flex items-center mb-6 hover:cursor-pointer">
          <Image src="/Male Memojis (1).svg" width="30" height="30" />
          <span className="ml-2 w-20">Ox7rbfc9...</span>
          <span className="w-36 ml-6">Backend Developer</span>
          <span className="w-20 ml-6">Tech</span>
          <Image
            src="/document-text.svg"
            width="24"
            height="24"
            className="ml-6"
          />
          <span className="ml-2">1</span>
        </div>

        <div className="flex items-center mb-6 hover:cursor-pointer">
          <Image src="/Male Memojis (2).svg" width="30" height="30" />
          <span className="ml-2 w-20">Ox7rbfc9...</span>
          <span className="w-36 ml-6">Content Creator</span>
          <span className="w-20 ml-6">Marketing</span>
          <Image
            src="/document-text.svg"
            width="24"
            height="24"
            className="ml-6"
          />
          <span className="ml-2">7</span>
        </div>

        <div className="flex items-center mb-6 hover:cursor-pointer">
          <Image src="/Male Memojis (1).svg" width="30" height="30" />
          <span className="ml-2 w-20">Ox7rbfc9...</span>
          <span className="w-36 ml-6">Project Managaer</span>
          <span className="w-20 ml-6">Innovation</span>
          <Image
            src="/document-text.svg"
            width="24"
            height="24"
            className="ml-6"
          />
          <span className="ml-2">9</span>
        </div>
      </div>
    </div>
  );
}

export default MyTeamMembers;
