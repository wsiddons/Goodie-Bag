import React from "react";
import { Routes, Route } from 'react-router-dom'
import CandiesList from "./CandiesList";
import Home from "./Home";

const Root = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={'/candies'} element={<CandiesList />} />
      </Routes>
    </>


  );
};

export default Root;
