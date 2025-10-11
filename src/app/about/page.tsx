import React from "react";
import Overview from "../components/Overview";
import OrganizationIntro from "../components/OrganizationIntro";
// import Testimonials from "../components/Testimonials";
import Members from "../components/Members";
import JoiningSimple from "../components/JoiningSimple";
import Benefits from "../components/Benefits";
function About() {
  return (
    <>
      <Overview title="松原青年会議所について" image="/about_mainimage.jpg" />
      <OrganizationIntro />
      {/* <Testimonials /> */}
      <Members />
      <JoiningSimple />
      <Benefits />
    </>
  );
}
export default About;
