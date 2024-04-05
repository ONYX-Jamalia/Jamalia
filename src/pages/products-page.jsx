import React, { useState } from 'react';
import { PRODUCTS } from '../../products';
import Navbar from "../navbar";

function Products() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory ? PRODUCTS.filter(product => product.category === selectedCategory) : PRODUCTS;


  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col">
            <div className={styles.filterrSection} class="mt-5">
              <h3>
                Categories
              </h3>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => handleCategoryChange("crops")} />
                <label class="form-check-label" for="flexRadioDefault1">
                  Crops
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => handleCategoryChange("processed")} />
                <label class="form-check-label" for="flexRadioDefault1">
                  Processed
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => handleCategoryChange("livestock")} />
                <label class="form-check-label" for="flexRadioDefault1">
                  livestock
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => handleCategoryChange("seafood")} />
                <label class="form-check-label" for="flexRadioDefault1">
                  Seafood
                </label>
              </div>
            </div>
          </div>
          <div class="col">
            <section className={styles.shop}>
              <div className={styles.shopTitle}>
                <h1>AgroMart Shop</h1>
              </div>

              <div className={styles.products}>
                {filteredProducts.map((products) => <ProductItem data={products} key={products.id} />)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;