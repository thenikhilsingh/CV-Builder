import React, { useState } from "react";
import GenNewDetail from "./GenNewDetail";
import Btn from "./Btn";
import cross from "../assets/cross.svg";

export default function GeneralForm({ detailData, setDetailData, index }) {
  const [isDeleted, setIsDeleted] = useState(false);
  function handleCrossClick() {
    setDetailData((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      return newArr;
    });
  }

  return !isDeleted ? (
    <div className="border-2 border-dotted rounded-[12px] flex flex-col justify-center items-center gap-4 p-4 bg-gradient-to-r from-slate-200 to-slate-300  ">
      <div className="w-[24vw] flex justify-end ">
        <img
          className="size-8 hover:scale-[1.2] active:translate-y-[5px]"
          src={cross}
          alt=""
          onClick={handleCrossClick}
        />
      </div>
      <form
        className="flex flex-col justify-center items-center gap-4"
        action=""
      >
        <div className="flex justify-between w-[24vw]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={detailData[index].name}
            className="border-2 bg-white"
            onChange={(e) => {
              setDetailData((prevData) => {
                const newArr = [...prevData];
                const newObj = { ...newArr[index], name: e.target.value };
                newArr[index] = newObj;
                return newArr;
              });
            }}
          />
        </div>
        <div className="flex justify-between w-[24vw]">
          <label htmlFor="">Time</label>
          <input
            type="text"
            value={detailData[index].time}
            className="border-2 bg-white"
            onChange={(e) => {
              setDetailData((prevData) => {
                const newArr = [...prevData];
                const newObj = { ...newArr[index], time: e.target.value };
                newArr[index] = newObj;
                return newArr;
              });
            }}
          />
        </div>
        <div className="flex justify-between w-[24vw]">
          <label htmlFor="">Description</label>
          <input
            type="text"
            value={detailData[index].desc}
            className="border-2 bg-white"
            onChange={(e) => {
              setDetailData((prevData) => {
                const newArr = [...prevData];
                const newObj = { ...newArr[index], desc: e.target.value };
                newArr[index] = newObj;
                return newArr;
              });
            }}
          />
        </div>

        {detailData[index].detail.map((item, detailIndex) => (
          <GenNewDetail
            detailData={detailData}
            setDetailData={setDetailData}
            key={detailIndex}
            parentIndex={index}
            detailIndex={detailIndex}
          />
        ))}
      </form>
      <Btn
        name="Add New Detail"
        onClick={() => {
          setDetailData((prevData) => {
            const newArr = [...prevData];
            const newObj = { ...newArr[index] };
            const newDetail = [...newObj.detail];

            newDetail.push({
              labelName: `Detail ${newDetail.length + 1}`,
              det: "",
            });

            newObj.detail = newDetail;
            newArr[index] = newObj;
            return newArr;
          });
        }}
      />
    </div>
  ) : null;
}
