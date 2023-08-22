"use client";

import React, { useState, useEffect } from "react";
import MyTask from "./my task";
import MyProjects from "./my projects";
import MyTeamMembers from "./my team members";
import MyActivity from "./my activity";

function Overview() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const currentDateObj = new Date();
    const options = { weekday: "long", day: "numeric", month: "long" };
    setCurrentDate(currentDateObj.toLocaleDateString("en-NG", options));
  }, []);

  return (
    <div className="text-[white] ml-[20%]">
      <div>
        <span className="text-sm mb-2">{currentDate}</span>
        <h1 className="text-3xl mb-4">
          Good Morning, <span>Kika</span>
        </h1>
        <div className="flex justify-end">
          <span className="w-28 flex justify-center gap-5 items-center p-2 bg-[#191919] rounded-3xl hover:cursor-pointer">
            <span>Today</span>
            <img src="/Icons (1).svg" alt="dropdown icon" />
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid lg:grid-cols-2 grid-rows-2 gap-4">
          <MyTask />
          <MyProjects />
          <MyTeamMembers />
          <MyActivity />
        </div>
      </div>
    </div>
  );
}

export default Overview;
