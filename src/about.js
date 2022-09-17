import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div className="About">
      <div className="about">
        <div>
          <h1 className="About">About DreadNought</h1>
        </div>{" "}
        <br></br>
        <div className="tag">
          {" "}
          We believe <b>humanity's survival</b> depends on us being a{" "}
          <b>spacefaring civilisation</b> and future deep tech founders will
          lead the way.<br></br>
          <b>Get paid to learn</b> the initial 2 months of founder journey that
          covers everything other than engineering. We trust your coding skills.
        </div>
        <br></br>
        <div className="tag">
          Our team is comprised of digitally-native entrepreneurs, futurists and
          operators with strengths in AI, Space Tech, Genomics, AR/VR and
          Longevity. We decided to launch Dreadnought to super charge the future
          by helping unlock the potential of future deep tech entrepreneurs.
        </div>
      </div>
    </div>
  );
};
