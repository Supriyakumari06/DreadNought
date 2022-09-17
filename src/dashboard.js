import React from "react";
import { Header } from "./header.js";
import { Footer } from "./footer.js";
import { Body } from "./body.js";

function Dashboard() {
  return (
    <div>
      <Header />
      <Body />
      <div></div>
      <Footer />
    </div>
  );
}

export default Dashboard;
