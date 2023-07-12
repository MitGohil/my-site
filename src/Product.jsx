import React from "react";
import Header from "./CM-cmp/Header";
import "./Product.css"

function Product() {
    return (
        <>
            <a class="link" href="https://codepen.io/HieuHuynh/pen/wBJxWm" target="_blank">Portfolio template <i class="ion-ios-arrow-thin-right"></i></a>
            <div id="page " className="bg">
                <div class="content">
                    <h2>Product Animation</h2>
                    <small></small>
                    <div class="product-items">
                        <div class="product-item">
                            <div class="item-wrap">
                                <img src="https://tympanus.net/Development/ScatteredPolaroidsGallery/img/11.jpg" />
                                <div class="wrap-qtt">
                                    <div class="wrap-qtt-field-qtt">
                                        <input class="field-qtt" name="qtt" value="1" readonly="" />
                                    </div>
                                    <div class="wrap-qtt-minus-plus">
                                        <button class="btn-cart-qtt btn-plus"><i class="ion-plus-round"></i></button>
                                        <button class="btn-cart-qtt btn-minus"><i class="ion-minus-round"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="item-info">
                                <div class="item-title">Product One</div>
                                <div class="item-price" data-price="45">$45</div>
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
                                        <button class="btn-cart-qtt btn-plus"><i class="ion-plus-round"></i></button>
                                        <button class="btn-cart-qtt btn-minus"><i class="ion-minus-round"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="item-info">
                                <div class="item-title">Product One</div>
                                <div class="item-price" data-price="35">$35</div>
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
                                        <button class="btn-cart-qtt btn-plus"><i class="ion-plus-round"></i></button>
                                        <button class="btn-cart-qtt btn-minus"><i class="ion-minus-round"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="item-info">
                                <div class="item-title">Product One</div>
                                <div class="item-price" data-price="35">$35</div>
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
                                        <button class="btn-cart-qtt btn-plus"><i class="ion-plus-round"></i></button>
                                        <button class="btn-cart-qtt btn-minus"><i class="ion-minus-round"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="item-info">
                                <div class="item-title">Product One</div>
                                <div class="item-price" data-price="25">$25</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="design" href="https://dribbble.com/shots/1769468-Product-Animation?list=users&offset=0" target="_blank">Kenny Sing <i class="ion-ios-arrow-thin-right"></i></a>
            </div>


            {
                (function ($) {
                    $(function () {
                        $('.product-item').each(function () {
                            var thisEl = $(this),
                                btnPlus = thisEl.find('.btn-plus'),
                                btnMinus = thisEl.find('.btn-minus'),
                                fieldQtt = thisEl.find('input[name="qtt"]'),
                                itemPriceEl = thisEl.find('.item-price'),
                                price = itemPriceEl.data('price');

                            btnPlus.click(function () {
                                var qttValue = parseInt(fieldQtt.val());
                                fieldQtt.val(qttValue + 1);

                                itemPriceEl.html('$' + (qttValue + 1) * price);
                            })
                            btnMinus.click(function () {
                                var qttValue = parseInt(fieldQtt.val()) - 1;
                                var newQTT = (qttValue <= 1) ? 1 : qttValue;
                                fieldQtt.val(newQTT);

                                itemPriceEl.html('$' + newQTT * price);
                            })

                        })
                    })
                })
                // (jQuery)
            }
        </>
    )
}
export default Product