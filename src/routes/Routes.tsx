import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SearchMovie from "../pages/Search/SearchMovie";
const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchMovie />} />
    </Routes>
  );
};

export default RoutesMain;
