import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const Today = lazy(() => import("./pages/Today"));
const Developer = lazy(() => import("./pages/Developer"));
const IptP = lazy(() => import("./pages/IptP"));
const WebdW = lazy(() => import("./pages/WebdW"));
const WebdP = lazy(() => import("./pages/WebdP"));
const Sqld = lazy(() => import("./pages/Sqld"));
const IptW = lazy(() => import("./pages/IptW"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));
const Not = lazy(() => import("./pages/Not"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/iptw" element={<IptW />} />
          <Route path="/iptp" element={<IptP />} />
          <Route path="/webdw" element={<WebdW />} />
          <Route path="/webdp" element={<WebdP />} />
          <Route path="/sqld" element={<Sqld />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
