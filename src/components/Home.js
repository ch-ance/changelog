import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ChangeLog from "./ChangeLog";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

function Home() {
  // Notifications Modal styles
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  const [modalOpen, setModalOpen] = useState(true);

  const [allChanges, setAllChanges] = useState([]);

  useEffect(() => {
    async function fetchChanges() {
      try {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/cembreyfarquhar/76bf4cb38fe04cdd4da3b3ca34157ff1/raw/10e34857705612519619ee6af24d8045950b46c5/gistfile1.md"
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

  function closeModal() {
    setModalOpen(false);
  }

  if (!allChanges.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <Header setModalOpen={setModalOpen} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="New features and changes"
      >
        Modal
      </Modal>
      <ChangeLog changes={allChanges} />
    </div>
  );
}

export default Home;
