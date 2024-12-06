import Content from "components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContext from "components/MainContext";
import { useEffect, useState } from "react";
import brandsData from "data/brands.json";
import CopiedSnackbar from "components/CopiedSnackbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import URLData from "components/Content/URLData";

function App() {
  const brandsArray = [];
  Object.keys(brandsData).map((key) => brandsArray.push(brandsData[key]));

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  const data = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]); //eslint-disable-line

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
        <Router>
          <Routes>
            <>
              <Route path="/" element={<Content />} />
              <Route path="/c/:slugs" element={<URLData />} />
            </>
          </Routes>
        </Router>
        {copied && <CopiedSnackbar color={copied} />}
      </MainContext.Provider>
    </>
  );
}

export default App;
