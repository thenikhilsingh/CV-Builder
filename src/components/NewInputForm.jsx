import React, { useState } from "react";
import link from "../assets/link.svg";
import deleteBtn from "../assets/delete.svg";

export default function NewInputForm({ PIDetail, setPIDetail, index }) {
  const [openLink, setOpenLink] = useState(false);
  const [text, setText] = useState("");

  function handleDeleteBtn() {
    setPIDetail((prev) => {
      const newObj = { ...prev };
      const newArr = newObj.extraDet;
      newArr.splice(index, 1);
      newObj.extraDet = newArr;
      return newObj;
    });
  }

  function handleLinkBtn() {
    !openLink && setOpenLink(true);
    openLink && setOpenLink(false);
    setText("text");
  }
  return (
    <form>
      <div className="flex justify-between gap-1 w-full items-center ">
        <div className="flex justify-between gap-1 items-center">
          <img
            className="h-5 hover:scale-125 active:translate-y-[5px]"
            src={deleteBtn}
            alt=""
            onClick={handleDeleteBtn}
          />
          <label htmlFor="">{PIDetail.extraDet[index].inputName}</label>
        </div>
        <div className="flex justify-between gap-1 items-center">
          <img
            className="h-5 hover:scale-125 active:translate-y-[5px]"
            src={link}
            alt=""
            onClick={handleLinkBtn}
          />
          <div className="flex flex-col ">
            {openLink && (
              <input
                type="text"
                value={PIDetail.extraDet[index].link}
                placeholder="link"
                onChange={(e) => {
                  setPIDetail((prev) => {
                    const newObj = { ...prev };
                    const newArr = [...newObj.extraDet];
                    newArr[index].link = e.target.value;
                    return newObj;
                  });
                }}
                className="border-2 bg-white"
              />
            )}
            <input
              type="text"
              value={PIDetail.extraDet[index].text}
              placeholder="text"
              onChange={(e) => {
                setPIDetail((prev) => {
                  const newObj = { ...prev };
                  const newArr = [...newObj.extraDet];
                  newArr[index].text = e.target.value;
                  return newObj;
                });
              }}
              className="border-2 bg-white"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
