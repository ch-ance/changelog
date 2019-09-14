import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ChangeLog from "./ChangeLog";

function Home() {
  const [allChanges, setAllChanges] = useState([]);

  useEffect(() => {
    async function fetchChanges() {
      try {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/cembreyfarquhar/76bf4cb38fe04cdd4da3b3ca34157ff1/raw/d37e0f35f381807fc2a732715448c45192a70c4d/gistfile1.md"
        );
        console.log("RESULT: ", data);
        
        // Splits data at each new change and adds the correct MD formatting back in. Also removes the first element (Recent Changes)
        setAllChanges(
          data
            .split("\n## ")
            .slice(1)
            .map(text => "## " + text)
        );
      } catch (error) {
        console.error("Error fetching changes");
      }
    }

    fetchChanges();
  }, []);

  if (!allChanges.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header />
      <ChangeLog changes={allChanges} />
    </div>
  );
}

export default Home;
