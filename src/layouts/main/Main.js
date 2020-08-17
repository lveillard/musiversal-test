import React, { useState, useEffect } from "react";
import { useGlobal } from "../../store";

import { db, auth } from "fb";

const Main = () => {
  const [globalState, globalActions] = useGlobal();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [dbData, setDbData] = useState([]);

  // this will create a subscription to the database for real time updates
  useEffect(() => {
    const unsubscribe = db.collection("data").onSnapshot((snapshot) => {
      if (snapshot.size) {
        // in this case we have found stuff
        setIsLoading(false); // by default is true
        const data = snapshot.docs.map((doc) => doc.data());
        setDbData(data);
      } else {
        // nothing in the DB yet! (To-do: or maybe an error, we should do a try-catch for the const unsubscribe just in case)
        setIsLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [db]);

  return (
    <div
      className="Main"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "600px",
      }}
    >
      <div>
        <button
          style={{ background: "#f99090" }}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
          onClick={async () => {
            auth.signOut();
          }}
        >
          SignOut
        </button>
      </div>
      <div> Hello 👋</div>
      <br />{" "}
      {/* br are ugly. All this html code is ugly as i'm not focusing on it */}
      <div>
        {" "}
        {/* Not in the requirements but as i did not used any db it was a nice example of how to use one and it's fast to code*/}
        <b>ADD SOMETHING TO DB</b>
        <br />
        <input
          placeholder="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <textarea
          placeholder="content"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button
          onClick={async () => {
            const userRef = db.collection("data").add({
              title,
              text,
            });
          }}
        >
          {" "}
          Add to DB{" "}
        </button>{" "}
      </div>
      <br /> <br />
      <div>
        {" "}
        <b> DB DATA </b>
        {isLoading
          ? "Loading..."
          : dbData.map((x, key) => (
              <div
                key={key}
                style={{ background: "#f5f5cd", padding: "5px", margin: "5px" }}
              >
                {" "}
                <b> {x.title} </b> <br /> {x.text}{" "}
              </div>
            ))}
      </div>
      <br />
      <b>USER DATA</b>
      <div> Email: {globalState.user.email} </div>
      <br />
      <div> Other data: </div>
      {/* Just showing it because it is interesting to use this when using google login */}
      {JSON.stringify(globalState.user)}
    </div>
  );
};

export default Main;
