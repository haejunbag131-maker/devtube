import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";

import { iptpText } from "../data/iptp";
import VideoCard from "../components/video/VideoCard";

const IptP = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const iptpPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="정보처리기사 실기" description="정보처리기사 실기 강의입니다.">
      <section id="iptpPage" className={iptpPageClass}>
        <h2>0원으로 정보처리기사 실기 합격하기!</h2>
        <div className="video__inner">
          <VideoCard videos={iptpText} />
        </div>
      </section>
    </Main>
  );
};

export default IptP;
