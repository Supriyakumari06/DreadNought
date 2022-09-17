import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <div
      className="Footer bg-primary "
      style={{
        backgroundImage:
          "url('https://c.tenor.com/18SBZln9s3AAAAAC/black-space-outer-space.gif')",
      }}
    >
      <div class="container text-center" style={{ color: "white" }}>
        <div class="row">
          <div class="col-4">About</div>
          <div class="col-4">Contact Us</div>
          <div class="col-4">E-mail</div>
          <div class="col-4">FeedBack</div>
          <div class="col-4">Social Media</div>
        </div>
      </div>
    </div>
  );
};
