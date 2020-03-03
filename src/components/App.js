import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = React.useState("posts");
  return (
    <div>
      <nav
        style={{
          marginBottom: "20px"
        }}
        className="white"
      >
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo black-text center">
            Hooks Simple
          </a>
        </div>
      </nav>
      <div className="container">
        <div>
          <UserList />
          <ul className="tabs">
            <li className="tab col s3">
              <a
                className="waves-effect  waves-light pink white-text z-depth-0"
                onClick={() => setResource("posts")}
                href="#test1"
              >
                Test 1
              </a>
            </li>
            <li className="tab col s3">
              <a
                className="waves-effect  waves-light indigo white-text z-depth-0"
                onClick={() => setResource("todos")}
              >
                Test 2
              </a>
            </li>
          </ul>
        </div>
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};

export default App;
