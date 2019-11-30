import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import components from "./styles";

const WishListComponent = () => {
  const wishListState = useSelector(state => state.wishListState);
  const dispatch = useDispatch();

  const deleteItem = index => {
    dispatch({ type: "DELETE_ITEM_FROM_WISH_LIST", payload: index });
  };

  const {
    WishBox,
    WishCategories,
    Category,
    CategoriesLine,
    WishDetails,
    WishNameBox,
    WishLinkBox,
    WishPriceBox
  } = components;

  return (
    <WishBox>
      <WishCategories>
        <Category>Nazwa</Category>
        <Category>Link</Category>
        <Category>Cena</Category>
      </WishCategories>
      <CategoriesLine />
      {wishListState.items.map((x, index) => (
        <WishDetails key={`wish-list-item-${index}`}>
          <WishNameBox>{x.itemName}</WishNameBox>
          <WishLinkBox>{x.shopLink}</WishLinkBox>
          <WishPriceBox>{x.price}</WishPriceBox>
          <FontAwesomeIcon
            onClick={() => deleteItem(index)}
            icon={faTrashAlt}
          />
        </WishDetails>
      ))}
    </WishBox>
  );
};
export default WishListComponent;
