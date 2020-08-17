import React from "react";
import { fb, db, auth } from "fb";

const Main = () => {
  return (
    <div
      className="main"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "600px",
      }}
    >
      <h1> Main window</h1>
      <button
        style={{ background: "#f99090" }}
        onClick={async () => {
          auth.signOut();
        }}
      >
        SignOut
      </button>
    </div>
  );
};

export default Main;
