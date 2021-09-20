import React from "react";
import { useSelector } from "react-redux";
import PreveiwCollection from "../preview-collection/preview-collection.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const { shopData } = useSelector((state) => state.shop);

  return (
    <div className="collections-overview">
      {shopData.map((collection) => (
        <PreveiwCollection key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
