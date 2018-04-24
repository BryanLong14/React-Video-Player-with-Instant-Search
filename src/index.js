import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_key = "AIzaSyDj06xC1hn7XkzfLJdPUgcbmlbVIKksn_8";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
