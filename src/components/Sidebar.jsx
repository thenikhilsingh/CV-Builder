import React from "react";
import Btn from "./Btn";
import PIDetailForm from "./PIDetailForm";
import GenDetailForm from "./GenDetailForm";
import {
  PIDetailSample,
  generalSample,
  experienceSample,
  projectsSample,
  PIDetailData,
  generalData,
  experienceData,
  projectsData,
} from "./data";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro"; // Import html2canvas-pro

export default function Sidebar({
  PIDetail,
  setPIDetail,
  generalDetail,
  setGeneralDetail,
  expDetail,
  setExpDetail,
  projectsDetail,
  setProjectsDetail,
}) {
  function handleNewCV() {
    setPIDetail(PIDetailSample);
    setGeneralDetail(generalSample);
    setExpDetail(experienceSample);
    setProjectsDetail(projectsSample);
  }

  function handleSampleCV() {
    setPIDetail(PIDetailData);
    setGeneralDetail(generalData);
    setExpDetail(experienceData);
    setProjectsDetail(projectsData);
  }

  const handleDownloadCV = () => {
    const input = document.getElementById("cv-content"); // ID of the CV content
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0); // Use JPEG format for better quality
      const pdf = new jsPDF();
      const imgWidth = 190; // Adjust width as needed
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, "JPEG", 10, 0, imgWidth, imgHeight);
      pdf.save("my_cv.pdf"); // Name of the downloaded PDF file
    });
  };

  return (
    <div className=" w-[30vw]  bg-gradient-to-r from-slate-200 to-slate-300 flex flex-col items-center gap-5 ">
      <h1 className="text-[30px]  ">
        <u className="font-heading">Build Your Resume</u>
      </h1>
      <div className="flex justify-evenly  w-100">
        <Btn name="New CV" onClick={handleNewCV} />
        <Btn name="Sample CV" onClick={handleSampleCV} />
        <Btn name="Save CV" onClick={handleDownloadCV} />
      </div>
      <div className="flex flex-col items-center gap-7">
        <PIDetailForm PIDetail={PIDetail} setPIDetail={setPIDetail} />
        <GenDetailForm
          heading="Education"
          detailData={generalDetail}
          setDetailData={setGeneralDetail}
        />
        <GenDetailForm
          heading="Experience"
          detailData={expDetail}
          setDetailData={setExpDetail}
        />
        <GenDetailForm
          heading="Projects"
          detailData={projectsDetail}
          setDetailData={setProjectsDetail}
        />
      </div>
    </div>
  );
}
