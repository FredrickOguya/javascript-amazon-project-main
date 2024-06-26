import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import {loadProducts} from "./../SOLUTIONS/data/products.js"
import {loadCart} from "../SOLUTIONS/data/cart.js"
//import '../SOLUTIONS/data/backend-practise.js'
//import '../SOLUTIONS/data/cart-class.js';



Promise.all([
    new Promise ((resolve)=>{
        loadProducts(()=>{
            resolve('value1');
        })
    }),
    new Promise ((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then((values)=>{
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary()
})
/*
new Promise ((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    })

}).then((value)=>{
    console.log(value)

    return new Promise ((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });

}).then (()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
/*

/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary(); 
    })

});
*/
