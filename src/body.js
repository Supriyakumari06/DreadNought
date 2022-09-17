import React from "react";
import { Exp } from "./stuexp.js";
import { TeachCard } from "./teach.js";
import { Gif } from "./gif.js";
import { About } from "./about.js";
import { Social } from "./soc.js";
import { Learn } from "./learn&earn.js";

export const Body = () => {
  return (
    <div>
      <Gif />
      <About />
      <TeachCard />
      <Exp />
      <Social />
      <Learn />
    </div>
  );
};
