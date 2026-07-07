import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";

import VideoCard from "../components/video/VideoCard";
import { webdWText } from "../data/webdw";

const WebdW = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const webdwPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main
      title="웹디자인개발기능사 필기"
      description="웹디자인개발기능사 필기 강의입니다."
    >
      <section id="webdwPage" className={webdwPageClass}>
        <h2>0원으로 웹디자인개발기능사 필기 합격하기!</h2>
        <div className="video__inner">
          <VideoCard videos={webdWText} />
        </div>
      </section>
    </Main>
  );
};

export default WebdW;
