import Content from "components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContext from "components/MainContext";
import { useState } from "react";
import brandsData from "data/brands.json";

function App() {
  const brandsArray = [];
  Object.keys(brandsData).map((key) => brandsArray.push(brandsData[key]));
  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const data = { brands, setBrands, selectedBrands, setSelectedBrands };
  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
