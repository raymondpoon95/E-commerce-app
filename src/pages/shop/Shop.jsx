import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/Collections-overview";
import CollectionPage from "../collection/Collection";

const ShopPage = () => {
  let params = useParams();
  return (
    <div className="shop-page">
      <Routes>
        <Route path="" element={<CollectionsOverview />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
