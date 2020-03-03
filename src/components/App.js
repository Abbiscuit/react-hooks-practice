import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = React.useState("posts");
  return (
    <div>
      <nav
        style={{
          marginBottom: "20px"
        }}
      >
        <div className="nav-wrapper white">
          <a href="#" className="brand-logo black-text">
            Hooks Simple
          </a>
        </div>
      </nav>
      <div>
        <button
          className="waves-effect  waves-light pink btn btn-small z-depth-0"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="waves-effect  waves-light indigo  btn btn-small z-depth-0"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
