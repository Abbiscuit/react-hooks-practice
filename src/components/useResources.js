import { useState, useEffect } from "react";
import axios from "axios";

export const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      console.log(resource);
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};
