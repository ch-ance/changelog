import React, { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import { withCookies, useCookies } from "react-cookie";
import Header from "./Header";
import ChangeLog from "./ChangeLog";
import ModalChangeLog from "./ModalChangeLog";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

function Home() {
  // Notifications-Modal styles
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

  const [notifNumber, setNotifNumber] = useState(0);

  const [seenIds, setSeenIds] = useState([]);

  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    async function fetchChanges() {
      try {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/cembreyfarquhar/76bf4cb38fe04cdd4da3b3ca34157ff1/raw/10e34857705612519619ee6af24d8045950b46c5/gistfile1.md"
        );
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

        const ids = Object.keys(cookies).map(id => {
          if (!isNaN(parseInt(id))) {
            return parseInt(id);
          } else {
            return null;
          }
        });

        const notInCookies = formattedData.filter(change => {
          return !ids.includes(change.id);
        });

        setNewChanges(notInCookies);
        setNotifNumber(notInCookies.length);
      } catch (error) {
        console.error("Error fetching changes");
      }
    }

    fetchChanges();
  }, [cookies, setNewChanges]);

  useLayoutEffect(() => {
    setNotifNumber(newChanges.length);
  }, [newChanges]);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setNewChanges(
      newChanges.filter(change => {
        return !seenIds.includes(change.id);
      })
    );
  }

  function clearNotification(id) {
    console.log(id);
    if (notifNumber > 0 && !seenIds.includes(id)) {
      setNotifNumber(notifNumber - 1);
    }
    setSeenIds([...seenIds, id]);
    setCookie(`${id}`);
  }

  if (!allChanges.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <Header openModal={openModal} notifNumber={notifNumber} />
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
          <>
            <h4>No new updates</h4>
            <button
              onClick={e => {
                e.preventDefault();

                allChanges.forEach(change => {
                  removeCookie(`${change.id}`);
                });
                setModalOpen(false);
                setSeenIds([]);
                setNewChanges(allChanges);
              }}
            >
              This app uses cookies to track the updates you've already seen.
              Click here to delete your cookies and get your notifcations back
            </button>
          </>
        )}
      </Modal>
      <ChangeLog changes={allChanges} />
    </div>
  );
}

export default withCookies(Home);
