import React from "react";

import Main from "../components/section/Main";
import LazyMount from "../components/common/LazyMount";
import Today from "../components/contents/Today";
import Developer from "../components/contents/Developer";
import VideoSlider from "../components/video/VideoSlider";

import { iptpText } from "../data/iptp";
import { webdWText } from "../data/webdw";
import { webdpText } from "../data/webdp";
import { sqldText } from "../data/sqld";
import { iptwText } from "../data/iptw";
import { developerText } from "../data/developer";
import { todayText } from "../data/today";

const videoSliderSections = [
  {
    id: "iptw",
    title: "0원으로 정보처리기사 필기 합격하기! (성공)",
    videos: iptwText,
  },
  {
    id: "iptp",
    title: "0원으로 정보처리기사 실기 합격하기! (성공)",
    videos: iptpText,
  },
  {
    id: "webdw",
    title: "0원으로 웹디자인개발기능사 필기 합격하기! (성공)",
    videos: webdWText,
  },
  {
    id: "webdp",
    title: "0원으로 웹디자인개발기능사 실기 합격하기! (성공)",
    videos: webdpText,
  },
  {
    id: "sqld",
    title: "0원으로 SQLD 합격하기! (성공)",
    videos: sqldText,
  },
];

const Home = () => {
  return (
    <Main title="DevTube" description="개발자를 위한 영상 학습 플랫폼입니다.">
      <Today videos={todayText} id="today" />
      <Developer videos={developerText} title="추천 개발자를 소개합니다." id="developer" />
      {videoSliderSections.map((section) => (
        <LazyMount key={section.id} minHeight={320}>
          <VideoSlider videos={section.videos} title={section.title} id={section.id} />
        </LazyMount>
      ))}
    </Main>
  );
};

export default Home;
