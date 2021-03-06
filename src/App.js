import { Global } from "./Global";
import { useState, useEffect } from "react";
import Principal from "./pages/Principal/Principal";
import { BrowserRouter, Route ,Routes} from "react-router-dom";


import CatInfo from "./pages/CatInfo/CatInfo"
import BestCats from "./pages/BestCats/BestCats";
function App() {
  const [breeds, setbreeds] = useState([]);

  const url = `https://api.thecatapi.com/v1/breeds?api_key=22dbcded-7059-47aa-936f-7a73941fa92c`;

  const GetApi = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setbreeds(json);
  };
  useEffect(() => {
    GetApi();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Global />

        <Routes>
          <Route path="/" element={<Principal breeds={breeds} />}></Route>
          <Route path="/catInfo" element={<CatInfo/>}></Route>
          <Route path="/BestCats" element={<BestCats breeds={breeds}/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
