import DisplayArea from "./components/DisplayArea";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import {
  PIDetailData,
  generalData,
  experienceData,
  projectsData,
} from "./components/data";

function App() {
  const [PIDetail, setPIDetail] = useState(PIDetailData);
  const [generalDetail, setGeneralDetail] = useState(generalData);
  const [expDetail, setExpDetail] = useState(experienceData);
  const [projectsDetail, setProjectsDetail] = useState(projectsData);

  return (
    <div className="flex">
      <Sidebar
        PIDetail={PIDetail}
        setPIDetail={setPIDetail}
        generalDetail={generalDetail}
        setGeneralDetail={setGeneralDetail}
        expDetail={expDetail}
        setExpDetail={setExpDetail}
        projectsDetail={projectsDetail}
        setProjectsDetail={setProjectsDetail}
      />
      <DisplayArea
        PIDetail={PIDetail}
        generalDetail={generalDetail}
        expDetail={expDetail}
        projectsDetail={projectsDetail}
      />
    </div>
  );
}

export default App;
