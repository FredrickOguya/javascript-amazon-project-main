import {cart, removeFromCart} from '../SOLUTIONS/data/cart.js'
import {products} from '../SOLUTIONS/data/products.js'
import {formatCurrency} from '../SOLUTIONS/utils/money.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {deliveryOptions} from '../SOLUTIONS/data/deliveryOptions.js';
const today = dayjs();
 
 const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'))




let cartSummaryHTML = '';

cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
  
    let matchingproduct;

    products.forEach((product)=>{
        if (product.id === productId){
            matchingproduct = product;
        }

    });
 
    
    cartSummaryHTML+=`
    <div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingproduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingproduct.name}
                </div>
                <div class="product-price">
                  ${formatCurrency(matchingproduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id ="${matchingproduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-2">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-2">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-2">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
    `;
});
function deliveryOptionsHTML () {
  deliveryOptions.forEach((deliveryOption) =>{
    `
    <div class="delivery-options">
    <div class="delivery-options-title">
      Choose a delivery option:
    </div>

    <div class="delivery-option">
      <input type="radio" class="delivery-option-input"
        name="delivery-option-${matchingproduct.id}">
      <div>
        <div class="delivery-option-date">
          Tuesday, June 21
        </div>
        <div class="delivery-option-price">
          FREE Shipping
        </div>
      </div>
    </div>
    `
  })
}

deliveryOptionsHTML
document.querySelector('.js-order-summary')
.innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId= link.dataset.productId
        removeFromCart(productId)
        
        const container = document.querySelector(`.js-cart-item-container-${productId}`)
        container.remove()
    })
})

