import React, { useState } from "react";
import deleteBtn from "../assets/delete.svg";

export default function GenNewDetail({
  detailData,
  setDetailData,
  parentIndex,
  detailIndex,
}) {
  return (
    <div className="flex justify-between w-[24vw] ">
      <div className="flex justify-center items-center">
        <img
          className="size-5 hover:scale-[1.2] active:translate-y-[5px]"
          src={deleteBtn}
          alt=""
          onClick={() => {
            setDetailData((prevData) => {
              const newArr = [...prevData];
              const newObj = { ...newArr[parentIndex] };
              const newDetail = [...newObj.detail];

              newDetail.splice(detailIndex, 1);

              newObj.detail = newDetail;
              newArr[parentIndex] = newObj;
              return newArr;
            });
          }}
        />
        <label htmlFor="">
          {detailData[parentIndex].detail[detailIndex].labelName}
        </label>
      </div>
      <input
        type="text"
        value={detailData[parentIndex].detail[detailIndex].det}
        className="border-2 bg-white"
        onChange={(e) => {
          const newDetailData = [...detailData];
          newDetailData[parentIndex].detail[detailIndex].det = e.target.value;
          setDetailData(newDetailData);
        }}
      />
    </div>
  );
}
