import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
// import {
//   db,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/Collections-overview";
import CollectionPage from "../collection/Collection";
import WithSpinner from "../../components/with-spinner/With-spinner";
// import CollectionsOverviewContainer from "../../components/collections-overview/Collections-overview.container";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStartAsync, isCollectionLoaded }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route path="" element={<CollectionsOverview />} />
        <Route
          path=":collectionId"
          element={
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              props={useLocation()}
            />
          }
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
