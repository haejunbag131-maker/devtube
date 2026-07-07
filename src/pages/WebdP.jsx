import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";

import VideoCard from "../components/video/VideoCard";
import { webdpText } from "../data/webdp";

const WebdP = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const webdpPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main
      title="웹디자인개발기능사 실기"
      description="웹디자인개발기능사 실기 강의입니다."
    >
      <section id="webdpPage" className={webdpPageClass}>
        <h2>0원으로 웹디자인개발기능사 실기 합격하기!</h2>
        <div className="video__inner">
          <VideoCard videos={webdpText} />
        </div>
      </section>
    </Main>
  );
};

export default WebdP;
