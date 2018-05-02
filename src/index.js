import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const _ = require("lodash");

const API_key = "AIzaSyDj06xC1hn7XkzfLJdPUgcbmlbVIKksn_8";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Colorado Wilderness");
  }

  videoSearch(term) {
    YTSearch({ key: API_key, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return <div>
        <h1>YouTube Video Player and Search Site</h1>
        <h2>
          Immediately Updating Search Results Brought to you by <a href="https://reactjs.org/">React</a>
        </h2>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
      </div>;
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
