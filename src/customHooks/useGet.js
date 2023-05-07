import axios from "axios";
import { useEffect, useState } from "react";

const useGet = (URL, initialState = {}) => {
  const [dataNews, setDataNews] = useState(initialState);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setDataNews(data);
    });
  }, [URL]);
  return { dataNews };
};

export default useGet;
