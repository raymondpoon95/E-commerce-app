import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/Collections-overview";
import CollectionPage from "../collection/Collection";
import WithSpinner from "../../components/with-spinner/With-spinner";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, isCollectionLoaded }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
