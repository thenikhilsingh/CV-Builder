import React, { useState } from "react";
import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";
import Btn from "./Btn";
import NewInputForm from "./NewInputForm";

function PIForm({ PIDetail, setPIDetail }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <form
        className="flex flex-col justify-between items-center gap-3"
        action=""
      >
        <div className="flex justify-between  w-[25vw]">
          <label htmlFor="">First Name</label>
          <input
            className="border-2 bg-white"
            value={PIDetail.firstName}
            type="text"
            onChange={(e) =>
              setPIDetail((data) => ({ ...data, firstName: e.target.value }))
            }
          />
        </div>
        <div className="flex justify-between  w-[25vw]">
          <label htmlFor="">Last Name</label>
          <input
            className="border-2 bg-white"
            value={PIDetail.lastName}
            type="text"
            onChange={(e) => {
              setPIDetail((data) => ({ ...data, lastName: e.target.value }));
            }}
          />
        </div>
        <div className="flex justify-between  w-[25vw]">
          <label htmlFor="">Email</label>{" "}
          <input
            className="border-2 bg-white"
            value={PIDetail.email}
            type="text"
            onChange={(e) => {
              setPIDetail((data) => ({ ...data, email: e.target.value }));
            }}
          />
        </div>
        <div className="flex justify-between  w-[25vw]">
          <label htmlFor="">Phone</label>{" "}
          <input
            className="border-2 bg-white"
            value={PIDetail.phone}
            type="text"
            onChange={(e) => {
              setPIDetail((data) => ({ ...data, phone: e.target.value }));
            }}
          />
        </div>
        <div className="flex justify-between  w-[25vw]">
          <label htmlFor="">Place</label>{" "}
          <input
            className="border-2 bg-white"
            value={PIDetail.place}
            type="text"
            onChange={(e) => {
              setPIDetail((data) => ({ ...data, place: e.target.value }));
            }}
          />
        </div>
      </form>
      {PIDetail.extraDet.map((item, index) => (
        <NewInputForm
          PIDetail={PIDetail}
          setPIDetail={setPIDetail}
          key={index}
          index={index}
        />
      ))}
      <Btn
        name="Add New Contact"
        onClick={() => {
          setPIDetail((prev) => {
            const newObj = { ...prev };
            const newArr = [...newObj.extraDet];
            newArr.push({
              inputName: `New Contact ${newArr.length + 1}`,
              text: null,
              link: null,
            });
            newObj.extraDet = newArr;
            return newObj;
          });
        }}
      />
    </div>
  );
}

export default function PIDetailForm({
  PIDetail,
  extraDet,
  setPIDetail,
  setExtraDet,
}) {
  const [showForm, setShowForm] = useState(false);
  const [imageSrc, setImageSrc] = useState(downArrow);

  function handleArrowBtn() {
    setImageSrc(upArrow);
    setShowForm(true);
    showForm === true && setShowForm(false);
    imageSrc === upArrow && setImageSrc(downArrow);
  }
  return (
    <div className="border-2 rounded-[12px] p-5 bg-gradient-to-t from-slate-300 to-slate-400 w-[28vw]">
      <div className="flex justify-between items-center w-[25vw]">
        <h1 className="pt-3 pb-3 text-[22px] font-heading">
          Personal Information
        </h1>
        <img
          className="size-5 hover:scale-[1.2] active:translate-y-[5px]"
          src={imageSrc}
          alt=""
          onClick={handleArrowBtn}
        />
      </div>
      {showForm === true ? (
        <PIForm
          PIDetail={PIDetail}
          extraDet={extraDet}
          setPIDetail={setPIDetail}
          setExtraDet={setExtraDet}
        />
      ) : null}
    </div>
  );
}
