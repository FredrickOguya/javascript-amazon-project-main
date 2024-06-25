import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import {loadProducts} from "./../SOLUTIONS/data/products.js"
//import '../SOLUTIONS/data/backend-practise.js'
//import '../SOLUTIONS/data/cart-class.js';
loadProducts(()=>{
    renderOrderSummary()
    renderPaymentSummary()
});
