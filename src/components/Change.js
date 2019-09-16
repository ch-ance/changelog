import React from "react";
// import Markdown from "react-markdown";
import moment from "moment";

function Change({ change }) {
  console.table("CHANGE OBJECT: ", change.extra);
  console.log("COMING DATE: ", change.date);
  const date = moment().format(change.date);
  // const today = new Date();
  const diff = moment().diff(date, "days");
  const difference = getDistanceFromDate(diff);
  return (
    <div className="change">
      <span>{difference}</span>
      <div className="inner-content">
        <h2>{change.title}</h2>
        {change.content.map(piece => (
          <p>{piece}</p>
        ))}
        {/* <p>{change.content.replace(/-/g, "")}</p> */}
      </div>
    </div>
  );

  function getDistanceFromDate(differenceInDays) {
    if (differenceInDays > 0 && differenceInDays < 30) {
      return `${differenceInDays} days ago`;
    } else if (differenceInDays >= 30 && differenceInDays <= 364) {
      return `${Math.ceil(differenceInDays / 30)} months ago`;
    } else if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays < 0) {
      return `${Math.round(-differenceInDays / 365)} year in the future`;
    } else return `${Math.ceil(differenceInDays / 365)} years ago`;
  }
}

export default Change;
