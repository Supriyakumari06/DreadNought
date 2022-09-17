import React from "react";
import "./gif.css";

export const Gif = () => {
  return (
    <div
      // https://media4.giphy.com/media/1jY3oQvXNP79Y6K5d7/giphy.gif
      className="parent"
      style={{
        backgroundImage:
          "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd3a8fb7-5eef-4ae8-857d-977ef347f1e3/dd57lj8-21259187-5d3e-4eae-a028-812089f242d8.jpg/v1/fill/w_926,h_500,q_70,strp/_adventure_time__by_era7_dd57lj8-250t-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM4MyIsInBhdGgiOiJcL2ZcL2ZkM2E4ZmI3LTVlZWYtNGFlOC04NTdkLTk3N2VmMzQ3ZjFlM1wvZGQ1N2xqOC0yMTI1OTE4Ny01ZDNlLTRlYWUtYTAyOC04MTIwODlmMjQyZDguanBnIiwid2lkdGgiOiI8PTI1NjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Io5HYxRxtnRjEPIqNi3ZZnOMaJDJtnk4KnrI8Kz7wZo')",
        // "url('https://cdn.kibrispdr.org/data/1795/technology-gif-28.gif')",
      }}
    >
      <div
        className="Top"
        style={{
          color: "white",
        }}
      >
        <h2 className="Heading">DreadNought</h2>
        <p className="xyz">School for Deep Tech founders</p>
      </div>
    </div>
  );
};
