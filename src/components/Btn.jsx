import React from "react";

export default function Btn(props) {
  return (
    <button
      className="border-2 h-auto w-auto bg-gradient-to-r from-slate-200 to-slate-300 p-1 shadow-[0px_9px_18px_-6px_#000000] rounded-[10px] hover:scale-[1.2] active:translate-y-[5px] "
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
