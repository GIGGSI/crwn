import React, { useState } from "react";
import shopData from "./colections";
import PreveiwCollection from "../../components/preview-collection/preview-collection.component";

const ShopPage = () => {
  const [data, setData] = useState(shopData);

  return (
    <div className="shop-page">
      {data.map((collection) => (
        <PreveiwCollection key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default ShopPage;
