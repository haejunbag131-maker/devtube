import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";

import VideoCard from "../components/video/VideoCard";
import { sqldText } from "../data/sqld";

const Sqld = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const sqldPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="SQLD" description="SQLD 강의입니다.">
      <section id="sqldPage" className={sqldPageClass}>
        <h2>0원으로 SQLD 합격하기!</h2>
        <div className="video__inner">
          <VideoCard videos={sqldText} />
        </div>
      </section>
    </Main>
  );
};

export default Sqld;
