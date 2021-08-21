let default_price_memory = document.querySelector('.default_price_memory')
console.log(default_price_memory);

default_price_memory.addEventListener('click', function () {
    document.querySelector('.default_cost_memory').innerText = 0.00
    updateTotal()
})
let default_price_storage = document.querySelector('.default_price_storage')
console.log(default_price_memory);

default_price_storage.addEventListener('click', function () {
    document.querySelector('.default_cost_storage').innerText = 0.00
    updateTotal()
})
let default_price_delivery = document.querySelector('.default_price_delivery')
console.log(default_price_memory);

default_price_delivery.addEventListener('click', function () {
    document.querySelector('.default_cost_delivery').innerText = 0
    updateTotal()
})

// let price = document.querySelectorAll('.g')
// console.log(price);

// for (let i = 0; i < price.length; i++) {
//     price[i].addEventListener('click', function () {
//         document.querySelector('.default_cost_memory').innerText = 0
//         console.log("add");
//     })
//     // console.log(element);
    
// }


// cost details

// memory
let cost_memory = document.querySelector('.cost_memory')
console.log(cost_memory);

cost_memory.addEventListener('click', function () {
  let cost1 = document.querySelector('.default_cost_memory')
 cost1.innerText = 180
  updateTotal()
//   console.log(a);
})

// Storage - 1

let cost_storage_1 = document.querySelector('.cost_storage_1')
console.log(cost_storage_1);


cost_storage_1.addEventListener('click', function () {
  let cost2 = document.querySelector('.default_cost_storage')

   cost2.innerText = 100
   updateTotal()
//    console.log(b);
})

// Storage - 2

let cost_storage_2 = document.querySelector('.cost_storage_2')
console.log(cost_storage_2);

cost_storage_2.addEventListener('click', function () {
 let cost3 =  document.querySelector('.default_cost_storage')
 cost3.innerText =  200
 updateTotal()
//  console.log(c);
})


// Delivery

let delivery_price_20 = document.querySelector('.delivery_price_20')
console.log(delivery_price_20);

 delivery_price_20.addEventListener('click', function () {
    let cost4  =  document.querySelector('.default_cost_delivery')
 cost4.innerText = 20
    updateTotal()

    // console.log(e);
})


// Total Price


function updateTotal() {
//     let cost4  =  document.querySelector('.default_cost_delivery')
//     let e = cost4.innerText = 20
//     let cost1 = document.querySelector('.default_cost_memory')
//     let a = cost1.innerText = 180
//     let cost2 = document.querySelector('.default_cost_storage')
//     let b = cost2.innerText = 100
//     let cost3 =  document.querySelector('.default_cost_storage')
//  let c = cost3.innerText =  200
    const memoryPrice = document.querySelector('.memory_cost').innerText 
    const storagePrice1 = document.querySelector('.storage_cost').innerText
    const deliveryPrice = document.querySelector('.delivery_cost').innerText
    console.log(memoryPrice, storagePrice1, deliveryPrice);
    let defaultPrice = 1299

    let total_price = document.querySelector('.total_price')
    // let totalNewPrice = parseInt(total_price.innerText)
    // console.log(totalNewPrice, price)
    total_price.innerText = defaultPrice + parseInt(memoryPrice) + parseInt(storagePrice1) + parseInt(deliveryPrice)
    // console.log(total_price);
    // alert("ddd")
 
}
// console.log(total_price);


// console.log(newPrice);

