import React from "react";
import "./Product.css";

function Product() {
  
  return (
    <>
      <div id="page">
        <div class="content">
          <div class="product-items">
            <div class="product-item">
              <div class="item-wrap">
                <img src="https://tympanus.net/Development/ScatteredPolaroidsGallery/img/11.jpg" />
                <div class="wrap-qtt">
                  <div class="wrap-qtt-field-qtt">
                    <input class="field-qtt" name="qtt" value="1" readonly="" />
                  </div>
                  <div class="wrap-qtt-minus-plus">
                    <button class="btn-cart-qtt btn-plus">
                      <i class="ion-plus-round"></i>
                    </button>
                    <button class="btn-cart-qtt btn-minus">
                      <i class="ion-minus-round"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="item-info">
                <div class="item-title">Product One</div>
                <div class="item-price" data-price="45">
                  $45
                </div>
              </div>
            </div>
            <div class="product-item">
              <div class="item-wrap">
                <img src="https://tympanus.net/Development/ScatteredPolaroidsGallery/img/12.jpg" />
                <div class="wrap-qtt">
                  <div class="wrap-qtt-field-qtt">
                    <input class="field-qtt" name="qtt" value="1" readonly="" />
                  </div>
                  <div class="wrap-qtt-minus-plus">
                    <button class="btn-cart-qtt btn-plus">
                      <i class="ion-plus-round"></i>
                    </button>
                    <button class="btn-cart-qtt btn-minus">
                      <i class="ion-minus-round"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="item-info">
                <div class="item-title">Product One</div>
                <div class="item-price" data-price="35">
                  $35
                </div>
              </div>
            </div>
            <div class="product-item">
              <div class="item-wrap">
                <img src="https://tympanus.net/Development/ScatteredPolaroidsGallery/img/13.jpg" />
                <div class="wrap-qtt">
                  <div class="wrap-qtt-field-qtt">
                    <input class="field-qtt" name="qtt" value="1" readonly="" />
                  </div>
                  <div class="wrap-qtt-minus-plus">
                    <button class="btn-cart-qtt btn-plus">
                      <i class="ion-plus-round"></i>
                    </button>
                    <button class="btn-cart-qtt btn-minus">
                      <i class="ion-minus-round"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="item-info">
                <div class="item-title">Product One</div>
                <div class="item-price" data-price="25">
                  $25
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="design"
          href="https://dribbble.com/shots/1769468-Product-Animation?list=users&offset=0"
          target="_blank"
        >
          Kenny Sing <i class="ion-ios-arrow-thin-right"></i>
        </a>
      </div>
    </>
  );
}

export default Product;
