import React, { useState } from "react";
import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";
import GeneralForm from "./GeneralForm";
import Btn from "./Btn";

export default function GenDetailForm({ heading, detailData, setDetailData }) {
  const [showForm, setShowForm] = useState(false);
  const [imageSrc, setImageSrc] = useState(downArrow);
  function handleArrow() {
    setImageSrc(upArrow);
    imageSrc === upArrow && setImageSrc(downArrow);
    setShowForm(true);
    showForm && setShowForm(false);
  }
  return (
    <div className="border-2 rounded-[12px] p-5 bg-gradient-to-t from-slate-300 to-slate-400 flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-[25vw]">
        <h1 className="pt-3 pb-3 text-[22px] font-heading">{heading}</h1>
        <img
          className="size-5 hover:scale-[1.2] active:translate-y-[5px]"
          src={imageSrc}
          alt=""
          onClick={handleArrow}
        />
      </div>
      <div className="flex flex-col gap-4">
        {showForm &&
          detailData.map((item, index) => (
            <GeneralForm
              detailData={detailData}
              setDetailData={setDetailData}
              index={index}
              key={index}
            />
          ))}
      </div>
      {showForm ? (
        <Btn
          name="Add New Section"
          onClick={() => {
            setDetailData((prev) => {
              const newArr = [...prev];
              newArr.push({
                name: "",
                time: "",
                desc: "",
                detail: [
                  {
                    labelName: "",
                    det: "",
                  },
                  {
                    labelName: "",
                    det: "",
                  },
                ],
              });
              return newArr;
            });
          }}
        />
      ) : null}
    </div>
  );
}
