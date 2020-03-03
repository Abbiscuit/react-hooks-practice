import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    console.log(resource);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul className="collection">
      {resources.map(record => {
        return (
          <li className="collection-item" key={record.id}>
            {record.title}
          </li>
        );
      })}
    </ul>
  );
};

export default ResourceList;
