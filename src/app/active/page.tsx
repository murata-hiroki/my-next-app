import React from "react";
import Overview from "../components/Overview";
import ActivityPoints from "../components/ActivityPoints";
import Gallery from "../components/ActivityGarary";
const Active = () => {
  return (
    <>
      <Overview title="私たちの活動" image="/activity_mainimage.jpg" />
      <ActivityPoints />
      <Gallery />
    </>
  );
};

export default Active;
