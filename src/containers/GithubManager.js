import React, { Component } from "react";
import GithubForm from "../components/GithubForm";
import GithubScore from "../components/GithubScore";
import axios from "axios";

class GithubManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      githubInfo: {},
      score: 0,
      searchHappened: false,
      error: false
    };
  }
  fieldUpdated = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  submit = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(response => {
        let score = response.data.public_repos + response.data.followers;
        this.setState({ githubInfo: response.data, score: score, searchHappened: true, error: false });
      })
      .catch(error => {
        this.setState({ error: true, score: 0 });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Github Score</h1>
        <div id="contentarea">
          <div id="form">
            <GithubForm fieldUpdated={this.fieldUpdated} submit={this.submit} />
          </div>
          <div id="score">
            <GithubScore score={this.state.score} error={this.state.error} searchHappened={this.state.searchHappened} />
          </div>
        </div>
      </div>
    );
  }
}
export default GithubManager;
