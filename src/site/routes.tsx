import { Navigate, Route, Routes } from "react-router";
import SiteView from ".";
import QuemSomosView from "./quemSomos";
import hooksApi from "../hooks/api";
import { useState } from "react";
import React from "react";

const SiteRoutes: React.FC = () => {
  const { post } = hooksApi();
  const [urlIndex, setUrlIndex] = useState<string>("");

  const getUrlIndex = async () => {
    const response = (await post({ url: `api/menu/getMenuIndex`, body: {} }));

    if (!response.isValid) {
      return;
    }

    setUrlIndex(`${response.data.url}`)
  }

  React.useEffect(() => {
    getUrlIndex();
    return;
  }, []);

  return (
    <Routes>
      <Route index element={<Navigate to={urlIndex} />} />
      <Route path='*' element={<SiteView />} />
    </Routes>
  )
}

export default SiteRoutes;