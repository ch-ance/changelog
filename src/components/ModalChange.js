import React, { useEffect } from "react";
import Markdown from "react-markdown";
import { useInView } from "react-intersection-observer";

function ModalChange({ change, clearNotification }) {
  const [ref, inView, entry] = useInView({
    threshold: .5
  });


  useEffect(() => {
    if (inView) {
      clearNotification(change.id);
    }
  }, [inView]);

  return (
    <div className="modal-change" ref={ref}>
      <Markdown source={change.content} />
    </div>
  );
}

export default ModalChange;
