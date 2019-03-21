import React from "react";

const GithubScore = props => {
  let text = "";
  let style = {
    color: "red"
  };

  if (props.score === 0 && !props.searchHappened) {
  } else if (props.score < 20) {
    text = "Needs Work!";
    style.color = "red";
  } else if (props.score < 50) {
    text = "A Decent start!";
    style.color = "orange";
  } else if (props.score < 100) {
    text = "Doing better!";
    style.color = "black";
  } else if (props.score < 200) {
    text = "Great job!";
    style.color = "green";
  } else {
    text = "Github Elite!";
    style.color = "blue";
  }

  return (
    <div>
      <h1>Your Score: {props.score}</h1>
      {props.error ? <h2 style={{ color: "red" }}>Something went horribly and I mean Horribly Wrong</h2> : <h2 style={style}>{text}</h2>}
    </div>
  );
};

export default GithubScore;
