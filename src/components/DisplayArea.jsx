import React from "react";
import CV from "./CV";

export default function DisplayArea({
  PIDetail,
  generalDetail,
  expDetail,
  projectsDetail,
}) {
  return (
    <div className=" w-[70vw] bg-gradient-to-t from-slate-300 to-slate-400 flex justify-center p-[55px] shadow-[inset_20px_20px_25px_-15px_#4a4b4b]">
      <CV
        PIDetail={PIDetail}
        generalDetail={generalDetail}
        expDetail={expDetail}
        projectsDetail={projectsDetail}
      />
    </div>
  );
}
