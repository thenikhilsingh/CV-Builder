import React from "react";

export default function CV({
  PIDetail,
  generalDetail,
  expDetail,
  projectsDetail,
}) {
  return (
    <div className=" w-[60vw]  bg-white flex flex-col items-center p-8 font-CVheading" id="cv-content">
      <div className="flex flex-col items-center">
        <div className="text-5xl flex gap-3 font-bold ">
          <div>{PIDetail.firstName}</div>
          <div>{PIDetail.lastName}</div>
        </div>
        <ul className="flex gap-8 list-disc">
          <li>{PIDetail.email}</li>
          <li>{PIDetail.phone}</li>
          <li>{PIDetail.place}</li>
        </ul>
        <ul className="flex gap-8 list-disc">
          {PIDetail.extraDet.map((item, index) => {
            return (
              <li key={index}>
                {item.link !== "" ? (
                  <a
                    href={item.link}
                    className="text-blue-800 underline font-bold"
                  >
                    {item.text}
                  </a>
                ) : (
                  <>{item.text}</>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">Education</h1>
        <hr />
        {generalDetail.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between font-bold">
                <div>{item.name}</div>
                <div>{item.time}</div>
              </div>
              <div>
                <p className="italic">{item.desc}</p>
                {item.detail.map((item, ind) => {
                  return <li key={ind}>{item.det}</li>;
                })}
              </div>
              <br />
            </div>
          );
        })}
      </div>

      {/* Experience */}

      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">Experience</h1>
        <hr />
        {expDetail.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between font-bold">
                <div>{item.name}</div>
                <div>{item.time}</div>
              </div>
              <div>
                <p className="italic">{item.desc}</p>
                {item.detail.map((item, ind) => {
                  return <li key={ind}>{item.det}</li>;
                })}
              </div>
              <br />
            </div>
          );
        })}

        {/* Projects */}

        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-bold">Projects</h1>
          <hr />
          {projectsDetail.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex justify-between font-bold">
                  <div>{item.name}</div>
                  <div>{item.time}</div>
                </div>
                <div>
                  <p className="italic">{item.desc}</p>
                  {item.detail.map((item, ind) => {
                    return <li key={ind}>{item.det}</li>;
                  })}
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
