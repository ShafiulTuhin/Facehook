import React from "react";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";
import { useProfile } from "../hooks/useProfile";

const ProfileInfo = () => {
  const { state } = useProfile();
  return (
    <div>
      <ProfileImage />

      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.user?.firstName} {state?.user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg"> {state?.user?.email}</p>
      </div>
      <Bio />
      <div className=" border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
};

export default ProfileInfo;
