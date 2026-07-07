import React, { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import ScrollTo from "../../utils/scrollTo";

const Main = (props) => {
  useEffect(() => {
    document.title = props.title || "DevTube";

    let descriptionMeta = document.querySelector('meta[name="description"]');

    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }

    descriptionMeta.setAttribute("content", props.description || "");
  }, [props.title, props.description]);

  return (
    <>
      <ScrollTo />

      <Header />
      <main id="main" role="main">
        <Search />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
