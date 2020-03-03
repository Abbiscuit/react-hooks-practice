import React from "react";
import { useResources } from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
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
