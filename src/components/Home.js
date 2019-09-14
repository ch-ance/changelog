import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ChangeLog from "./ChangeLog";

function Home() {
  const [allChanges, setAllChanges] = useState([]);

  useEffect(() => {
    async function fetchChanges() {
      const { data } = await axios.get(
        "https://gist.githubusercontent.com/cembreyfarquhar/76bf4cb38fe04cdd4da3b3ca34157ff1/raw/d37e0f35f381807fc2a732715448c45192a70c4d/gistfile1.md"
      );
      console.log("RESULT: ", data);
    }
    fetchChanges();
  }, []);

  // const changes = ["one update", "another update"];

  return (
    <div>
      <Header />
      <ChangeLog changes={allChanges} />
    </div>
  );
}

export default Home;
