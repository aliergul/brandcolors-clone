import Content from "components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContext from "components/MainContext";
import { useEffect, useState } from "react";
import brandsData from "data/brands.json";
import CopiedSnackbar from "components/CopiedSnackbar";

function App() {
  const brandsArray = [];
  Object.keys(brandsData).map((key) => brandsArray.push(brandsData[key]));

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);

  const data = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
        {copied && <CopiedSnackbar color={copied} />}
      </MainContext.Provider>
    </>
  );
}

export default App;
