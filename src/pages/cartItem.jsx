import React from "react";
import { useLocalStorage } from "usehooks-ts";

export const CartItem = ({ item }) => {

    console.log(item)
  const {
    id,
    userId,
    productName,
    description,
    category,
    unitPrice,
    minimumOrder,
    image,
  } = item;
  const [itemslist, setItemsList] = useLocalStorage("Item List", []);
  const [Decrement, setDecrementList] = useLocalStorage("Item List", []);

  /* to add item to cart */
  const handleAddToCart = (id) => {
    const updatedItemsList = [...itemslist]; //copy of the itemslist
    const index = updatedItemsList.findIndex((item) => item.id === id);
    if (index !== -1) {
      updatedItemsList[index].item += 1;
    } else {
      updatedItemsList.push({ id, item: 1 });
    }
    setItemsList(updatedItemsList); // Update the state with the updated itemslist
  };

  /* decreament item */
  const handleDecreament = (id) => {
    const updatedItemsList = [...Decrement]; // Copy of the itemslist
    const res = updatedItemsList.find((item) => item.id === id);

    if (res === undefined) return;
    else if (res.item === 0) return;
    else {
      res.item -= 1;
    }

    const items = updatedItemsList.filter((x) => x.item !== 0);
    // console.log({itemslist});
    setDecrementList(items); // Update the state with the updated itemslist
  };

  /* get cart items total */
  const getItemQuantity = (itemId) => {
    const item = itemslist.find((item) => item.id === itemId);
    // console.log(item)
    return item ? item.item : 0;
  };

  let removeItem = (itemId) => {
    const updatedItemsList = [...itemslist];
    const result = updatedItemsList.filter((x) => x.id !== itemId);
    setItemsList(result);
  };

  return (
    <div className="h-[auto] flex items-center relative shadow-lg rounded-lg m-[20px] gap-[10px] pr-[100px] ">
      <img src={image} className="w-[200px] h-[h-100px] "/>
      <div className="w-[100%] text-3xl flex gap-[10px]">
        <p>
          <b>{productName}</b>
        </p>
        <p>GH&#8373; {unitPrice} </p>
      </div>

      <div className="flex items-center gap-[8px]">
        <button onClick={() => handleDecreament(id)}> - </button>
        <p>{getItemQuantity(id)}</p>
        <button onClick={() => handleAddToCart(id)}> + </button>
      </div>
      {/* <Cart subTotal={SubtotalAmout}/> */}
      <div className="absolute top-[5px] right-[10px] p-[10px]">
        <i onClick={() => removeItem(id)} className="fa-solid fa-xmark text-lg text-black p-[6px] rounded-lg transition ease-in-out delay-150"></i>
      </div>
    </div>
  );
};
