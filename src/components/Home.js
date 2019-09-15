import React, { useEffect, useState } from "react";
import axios from "axios";
import { withCookies } from "react-cookie";
import uuid from "uuid/v4";
import Header from "./Header";
import ChangeLog from "./ChangeLog";
import ModalChangeLog from "./ModalChangeLog";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

function Home({ cookies }) {
  // Notifications Modal styles
  const modalStyles = {
    content: {
      top: "10%",
      left: "auto",
      right: "25%",
      bottom: "auto",
      width: "300px",
      height: "350px"
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const [allChanges, setAllChanges] = useState([]);

  const [newChanges, setNewChanges] = useState([]);

  useEffect(() => {
    async function fetchChanges() {
      try {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/cembreyfarquhar/76bf4cb38fe04cdd4da3b3ca34157ff1/raw/10e34857705612519619ee6af24d8045950b46c5/gistfile1.md"
        );
        console.log("RESULT: ", data);

        const formattedData = data
          .split("\n## ")
          .slice(1)
          .reverse()
          .map((text, index) => {
            return {
              content: "## " + text,
              id: index
            };
          })
          .reverse();

        // Splits data at each new change and adds the correct MD formatting back in. Also removes the first element (Recent Changes)
        setAllChanges(formattedData);
        setNewChanges(formattedData);
      } catch (error) {
        console.error("Error fetching changes");
      }
    }

    fetchChanges();
  }, []);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function clearNotification(id) {
    console.log(id);
  }

  if (!allChanges.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <Header openModal={openModal} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="New features and changes"
      >
        {newChanges.length ? (
          <ModalChangeLog
            clearNotification={clearNotification}
            changes={newChanges}
          />
        ) : (
          <h4>No new updates</h4>
        )}
      </Modal>
      <ChangeLog changes={allChanges} />
    </div>
  );
}

function ModalContents({ changes }) {
  return (
    <ul>
      {changes.map(change => {
        return <li>{change}</li>;
      })}
    </ul>
  );
}

export default withCookies(Home);
