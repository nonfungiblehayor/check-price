'use strict'

const bitcoinPrice = document.querySelector('.bitcoin-price');
const bitcoin24High = document.querySelector('.bitcoin-24h-high');
const bitcoin24Low = document.querySelector('.bitcoin-24h-low');
const bitcoinChart = document.querySelector('.bitcoin-chart');


async function getPrice() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h')
    let data = await response.json();
    return data;
}

const dollar = "$"
getPrice().then(response=> {
    let {current_price: object1, high_24h: object2, low_24h: object3, sparkline_in_7d: object4} = response[0]
    bitcoinPrice.textContent = dollar + object1;
    bitcoin24High.textContent = dollar + object2;
    bitcoin24Low.textContent = dollar + object3;
    // bitcoinChart.textContent = object4; 
   console.log(response[0])  
})

