import React from "react";

const GithubForm = props => {
  return (
    <div>
      <h1>Calculate Score</h1>
      <label>Github Username: </label>
      <input onChange={props.fieldUpdated} type="text" id="username" placeholder="Username" />
      <br />
      <button onClick={props.submit}>Calculate my Github Score</button>
    </div>
  );
};

export default GithubForm;
