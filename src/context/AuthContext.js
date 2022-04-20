import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(data.teams.length);

  let navigate = useNavigate();

  //Set Data
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  const nextPage = () => {
    page == 0 && navigate(`/team`);
    setPage(page + 1);
  };

  const prevPage = () => {
    page == 1 && navigate(`/`);
    setPage(page - 1);
  };

  const value = {
    page,
    pageCount,
    nextPage,
    prevPage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
