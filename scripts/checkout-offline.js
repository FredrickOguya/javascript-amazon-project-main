import { renderOrderSummary } from "./checkout/orderSummary-offline.js";
import {renderPaymentSummary} from "./checkout/paymentSummary-offline.js"
renderOrderSummary()
renderPaymentSummary()

function strings(myString) {
    // Write your code below this line
    let length = myString.length
    console.log(length)

    let lastLetter = myString.charAt(length - 1)

    console.log(lastLetter)

    let firstThree = myString.substring(0, 3)

    console.log(firstThree)

}
strings('longkng;ohoioghoerhgo;irhoghhrogho;f')