import React from "react";
import Image from "next/image";

const Avatar = ({ src }) => {
  return (
    <div className="avatar border-0">
      <div className="w-12">
        <Image src={src} width="10" height="10" />
      </div>
    </div>
  );
};

const AvatarGroup = ({ images }) => {
  const maxVisibleAvatars = 2;

  const visibleAvatars = images.slice(0, maxVisibleAvatars);
  const remainingAvatars = images.slice(maxVisibleAvatars);

  return (
    <div className="avatar-group w-24 -space-x-6">
      {visibleAvatars.map((src, index) => (
        <Avatar key={index} src={src} />
      ))}
      {remainingAvatars.length > 0 && (
        <div className="avatar border-0">
          <div className="w-12">
            <div className="flex items-center justify-center bg-[#6d59ea] text-[white] w-full min-h-full">
              <div className="flex items-center justify-center rounded-full">
                <span className="text-lg">+</span>
                <span className="text-base">{remainingAvatars.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
