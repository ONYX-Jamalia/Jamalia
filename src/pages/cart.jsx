import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts';
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';
import { CartItem } from './cartItem';

export const Cart = () => {

    const [itemslist, setItemsList] = useLocalStorage("Item List", []);
    const [subtotalAmount, setSubtotalAmout] = useState(0);
    const [products, setProducts] = useState([]);


    let clearCart = () => {
        setItemsList([]);
        setSubtotalAmout(0);
      }

      let totalAmount = () =>{
        if(itemslist.length !== 0){
            let amount = itemslist.map((x) =>{
                let {item, id} = x;
                let result = products.find((y)=> y.id === id) || [];
                return item * result.price;
            }).reduce((x,y)=>x+y,0);
            setSubtotalAmout(amount);
        } else return setSubtotalAmout(0);
    }

      useEffect(() => {
        async function getProducts() {
            const docSnap = await getDocs(collection(db, "products"));
            let collectionarray = [];
            docSnap.forEach((result) => {
              collectionarray.push(result.data());
            });
            setProducts(collectionarray);
          }
          getProducts();

        totalAmount();
          }, [itemslist]); 
          console.log({products});

          const availableItems = itemslist.filter(item => item.item > 0);
          console.log({availableItems});

          const finalResults = availableItems.map(item => ({
            ...products.find(product => product.id === item.id),
            quantity: item.quantity
        }));
        console.log({finalResults});

  return (
    <>
        <div class="container text-center mt-5">
  <div class="row">
    <div class="col-8 ">
    <div>
                <h1>Your cart items</h1>
            </div>
            <div>
            {finalResults.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            </div>

    </div>
    <div class="col-4">
    <div className="">
              <p>SubTotal GH&#8373; {subtotalAmount}</p>
              <button> <Link className="w-[69%] h-[50px] rounded m-[10px] cursor-pointer decoration-none text-white bg-black" to='/products'> Continue Shopping</Link> </button>
              <button > <Link  className="w-[69%] h-[50px] rounded m-[10px] cursor-pointer decoration-none text-white bg-black" to='/billing'> Check Out</Link> </button>
              <button onClick={()=> clearCart()} className="bg-red-600 transition ease-in-out delay-150 hover:bg-red-800 focus:bg-red-800 text-white"> Clear Cart </button>
            </div>
    </div>
  </div>
</div>
    </>
  )
}
