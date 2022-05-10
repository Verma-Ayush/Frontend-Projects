import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default function Tempo() {
  const url = "https://course-api.com/react-tabs-project";
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobsList(newJobs);

    const defaultcurrEle = newJobs[0];
    setCurrEle(defaultcurrEle);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <FontAwesomeIcon icon={faBomb} className="icons" />
    </>
  );
}

/*
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [itemList, setItemList] = useState(list);

  const fetchData = async () => {
    const response = await fetch(url);
    const fetchedData = await response.json();
    dispatch({ type: "LOADING", payload: { fetchedData } });
  };

  //onMount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ itemList , setItemList}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
*/
