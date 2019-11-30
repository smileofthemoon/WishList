import React from "react";
import { useDispatch } from "react-redux";

import components from "./styles";
import { useFormInput } from "../../hooks/useFormInput";
import Input from "../../shared/WLInput";
import WishList from "../WishList";
import Button from "../../shared/WLButton";

const AdminWishListComponent = () => {
  const itemNameInput = useFormInput();
  const shopLinkInput = useFormInput();
  const priceInput = useFormInput();
  const dispatch = useDispatch();

  const saveWish = () => {
    const newItem = {
      itemName: itemNameInput.value,
      shopLink: shopLinkInput.value,
      price: priceInput.value
    };
    dispatch({ type: "ADD_NEW_ITEM_TO_WISH_LIST", payload: newItem });
  };

  const { AdminWishList, InputsSection, InputBox } = components;

  return (
    <AdminWishList>
      Twoja lista:
      <InputsSection>
        <InputBox>
          Wpisz nazwę rzeczy:
          <Input name="itemName" input={itemNameInput} />
        </InputBox>
        <InputBox>
          Załącz link do sklepu:
          <Input name="shopLink" input={shopLinkInput} />
        </InputBox>
        <InputBox>
          Oszacuj cenę rzeczy:
          <Input name="price" input={priceInput} />
        </InputBox>
      </InputsSection>
      <Button onClick={saveWish} buttonText="dodaj" />
      <WishList />
    </AdminWishList>
  );
};
export default AdminWishListComponent;
