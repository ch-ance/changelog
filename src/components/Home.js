import React, { useEffect, useState } from "react";
import Header from "./Header";
import ChangeLog from "./ChangeLog";

function Home() {
  const [allChanges, setAllChanges] = useState([]);


  // const changes = ["one update", "another update"];

  return (
    <div>
      <Header />
      <ChangeLog changes={allChanges} />
    </div>
  );
}

export default Home;
