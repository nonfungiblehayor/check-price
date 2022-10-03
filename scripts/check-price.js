'use strict'

//bitcoin data
const bitcoinPrice = document.querySelectorAll('.bitcoin-price');
const bitcoin24High = document.querySelectorAll('.bitcoin-24h-high');
const bitcoin24Low = document.querySelectorAll('.bitcoin-24h-low');
const bitcoinChart = document.querySelectorAll('.bitcoin-chart');


async function getBtcData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h')
    let data = await response.json();
    return data;
}

const dollar = "$"
getBtcData().then(response=> {
    let {current_price: object1, high_24h: object2, low_24h: object3} = response[0]
    bitcoinPrice[0].textContent = dollar + object1;
    bitcoin24High[0].textContent = dollar + object2;
    bitcoin24Low[0].textContent = dollar + object3;   
})

// ethereum
 
async function getEthData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2Cusdt&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getEthData().then(response=> {
    let {current_price: object1, high_24h: object2, low_24h: object3} = response[0]
    bitcoinPrice[1].textContent = dollar + object1;
    bitcoin24High[1].textContent = dollar + object2;
    bitcoin24Low[1].textContent = dollar + object3; 
})

// usdt
 
async function getUsdtData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getUsdtData().then(response=> {
    let {current_price: object1, high_24h: object2, low_24h: object3} = response[0]
    bitcoinPrice[2].textContent = dollar + object1;
    bitcoin24High[2].textContent = dollar + object2;
    bitcoin24Low[2].textContent = dollar + object3; 
})

// bnb
 
async function getBnbData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getBnbData().then(response=> {
    let {current_price: object1, high_24h: object2, low_24h: object3} = response[0]
    bitcoinPrice[3].textContent = dollar + object1;
    bitcoin24High[3].textContent = dollar + object2;
    bitcoin24Low[3].textContent = dollar + object3; 
})

// solana & cardano
 
async function getSolData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana%2Ccardano&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getSolData().then(response=> {
    console.log(response)
    for(let i = 0; i < response.length; i++) {
        if(response[i].id == 'cardano') {
       let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
       bitcoinPrice[4].textContent = dollar + object1;
       bitcoin24High[4].textContent = dollar + object2;
       bitcoin24Low[4].textContent = dollar + object3; 
        } else if(response[i].id =='solana') {
        let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
        bitcoinPrice[5].textContent = dollar + object1;
        bitcoin24High[5].textContent = dollar + object2;
        bitcoin24Low[5].textContent = dollar + object3;  
        }
    }
})

// polygon & DAI $ uniswap
 
async function getPduData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network%2Cdai%2Cuniswap&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getPduData().then(response=> {
    console.log(response)
    for(let i = 0; i < response.length; i++) {
        if(response[i].id == 'dai') {
       let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
       bitcoinPrice[7].textContent = dollar + object1;
       bitcoin24High[7].textContent = dollar + object2;
       bitcoin24Low[7].textContent = dollar + object3; 
        } else if(response[i].id =='matic-network') {
        let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
        bitcoinPrice[6].textContent = dollar + object1;
        bitcoin24High[6].textContent = dollar + object2;
        bitcoin24Low[6].textContent = dollar + object3;  
        } else if(response[i].id =='uniswap') {
            let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
            bitcoinPrice[8].textContent = dollar + object1;
            bitcoin24High[8].textContent = dollar + object2;
            bitcoin24Low[8].textContent = dollar + object3;  
        }
    }
})

// polkadot & ethereum classic & litecoin & ftx & algorand & terra luna
 
async function getPolData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=polkadot%2Cethereum-classic%2Cftx-token%2Clitecoin%2Calgorand%2Cterra-luna&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getPolData().then(response=> {
    console.log(response)
    for(let i = 0; i < response.length; i++) {
        if(response[i].id == 'polkadot') {
       let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
       bitcoinPrice[9].textContent = dollar + object1;
       bitcoin24High[9].textContent = dollar + object2;
       bitcoin24Low[9].textContent = dollar + object3; 
        } else if(response[i].id =='litecoin') {
        let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
        bitcoinPrice[10].textContent = dollar + object1;
        bitcoin24High[10].textContent = dollar + object2;
        bitcoin24Low[10].textContent = dollar + object3;  
        } else if(response[i].id =='ethereum-classic') {
            let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
            bitcoinPrice[11].textContent = dollar + object1;
            bitcoin24High[11].textContent = dollar + object2;
            bitcoin24Low[11].textContent = dollar + object3;  
        }  else if(response[i].id =='ftx-token') {
            let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
            bitcoinPrice[12].textContent = dollar + object1;
            bitcoin24High[12].textContent = dollar + object2;
            bitcoin24Low[12].textContent = dollar + object3;  
        }  else if(response[i].id =='algorand') {
            let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
            bitcoinPrice[13].textContent = dollar + object1;
            bitcoin24High[13].textContent = dollar + object2;
            bitcoin24Low[13].textContent = dollar + object3;  
        }
          else if(response[i].id =='terra-luna') {
            let {current_price: object1, high_24h: object2, low_24h: object3} = response[i]
            bitcoinPrice[14].textContent = dollar + object1;
            bitcoin24High[14].textContent = dollar + object2;
            bitcoin24Low[14].textContent = dollar + object3;  
        }
    }
})


