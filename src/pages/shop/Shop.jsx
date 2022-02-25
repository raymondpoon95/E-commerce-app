import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/Collections-overview";
import CollectionPage from "../collection/Collection";
import WithSpinner from "../../components/with-spinner/With-spinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ updateCollections }) => {
  const [loading, setLoading] = useState(true);

  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = db.collection("collections");

    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });

    return () => {
      unsubscribeFromSnapshot = null;
    };
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path=""
          element={<CollectionOverviewWithSpinner isLoading={loading} />}
        />
        <Route
          path=":collectionId"
          element={
            <CollectionPageWithSpinner
              isLoading={loading}
              props={useLocation()}
            />
          }
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
