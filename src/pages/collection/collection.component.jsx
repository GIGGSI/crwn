import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const Collection = () => {
  const { collectionId } = useParams();
  const { shopData } = useSelector((state) => state.shop);

  const currentItems = shopData.find(
    (item) => item.id === COLLECTION_ID_MAP[collectionId]
  );
  console.log(currentItems.items);
  return (
    <div className="collection-page">
      <h2 className="title">{collectionId}</h2>
      <div className="items">
        {currentItems.items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
