import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import AuthContext from "./context/AuthContext";
import IconButton from "./components/buttons/iconButton/IconButton";

const AppWrapper = () => {
  const { page, pageCount, nextPage, prevPage } = useContext(AuthContext);

  return (
    <div className="container min-vh-100">
      <IconButton
        show={page > 0}
        className={"swiper-button-prev"}
        action={prevPage}
      ></IconButton>
      <Routes>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
      </Routes>
      <IconButton
        show={pageCount > page}
        className={"swiper-button-next"}
        action={nextPage}
      ></IconButton>
    </div>
  );
};

export default AppWrapper;
