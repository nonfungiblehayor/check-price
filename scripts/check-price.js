'use strict'

// bitcoin data
const bitcoinPrice = document.querySelectorAll('.bitcoin-price');
const bitcoin24High = document.querySelectorAll('.bitcoin-24h-high');
const bitcoin24Low = document.querySelectorAll('.bitcoin-24h-low');
const bitcoinChart = document.querySelectorAll('.bitcoin-chart');


async function getBtcData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
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

// // ethereum
 
async function getEthData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getEthData().then(response=> {
    let {current_price: object1, high_24h: object2, low_24h: object3} = response[0]
    bitcoinPrice[1].textContent = dollar + object1;
    bitcoin24High[1].textContent = dollar + object2;
    bitcoin24Low[1].textContent = dollar + object3; 
})

// // usdt
 
async function getUsdtData() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    let data = await response.json();
    return data;
}
getUsdtData().then(response=> {
    let {current_price: object1, high_24h: object2, low_24h: object3} = response[0]
    bitcoinPrice[2].textContent = dollar + object1;
    bitcoin24High[2].textContent = dollar + object2;
    bitcoin24Low[2].textContent = dollar + object3; 
})

// // bnb
 
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

// // solana & cardano
 
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

// // polygon & DAI $ uniswap
 
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

// // polkadot & ethereum classic & litecoin & ftx & algorand & terra luna
 
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

const search = document.querySelector('.search')
const searchOption = document.querySelector('.search-option')
const options = document.querySelectorAll('a');

let typingTimer;                
let doneTypingInterval = 1000; 

search.addEventListener('click', function(){
    searchOption.style.display = "flex";
})
search.addEventListener('keyup', function(){
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
})

search.addEventListener('keydown', function(){
    clearTimeout(typingTimer);
})
function doneTyping () {
    for(let i = 0; i < options.length; i++){
        if(search.value === options[i].textContent){
            options[i].style.display = 'flex'
        } else if(search.value === ""){
            options[i].style.display = 'none'
        }
    }
  }

for(let x = 0; x < options.length; x++){
    options[x].addEventListener('click', function(){
        searchOption.style.display = "none"
        search.value = ""
    })
  }

// get top volume
async function getTopVolume() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Ccardano%2Csolana%2Cmatic-network%2Cdai%2Cuniswap%2Cpolkadot%2Clitecoin%2Cethereum-classic%2Cftx-token%2Calgorand%2Cterra-luna&order=market_cap_desc&per_page=100&page=1&sparkline=false&market_cap_percentage=24h')
    let data = await response.json();
    return data;
    }
   

    const topVolume = document.querySelector('.top-volume')
    const topVolumeName = document.querySelector('.top-volume-name')
    const topVolumePrice = document.querySelector('.top-volume-price')
    const lowVolume = document.querySelector('.low-volume')
    const lowVolumeName = document.querySelector('.low-volume-name')
    const lowVolumePrice = document.querySelector('.low-volume-price')
    const bigPercent = document.querySelector('.big-percent')
    const bigPercentName = document.querySelector('.big-percent-name')
    const bigPercentPrice = document.querySelector('.big-percent-price')
    const lowPercent = document.querySelector('.low-percent')
    const lowPercentName = document.querySelector('.low-percent-name')
    const lowPercentPrice = document.querySelector('.low-percent-price')
    const percent = '%'
    const dollar2 = '$'
    getTopVolume().then(response=> {
        console.log(response[0])
       const arr2 = [response[0].market_cap_change_percentage_24h,response[1].market_cap_change_percentage_24h,response[2].market_cap_change_percentage_24h,
       response[3].market_cap_change_percentage_24h,response[4].market_cap_change_percentage_24h,response[5].market_cap_change_percentage_24h,response[6].market_cap_change_percentage_24h,
       response[7].market_cap_change_percentage_24h,response[8].market_cap_change_percentage_24h,response[9].market_cap_change_percentage_24h,response[10].market_cap_change_percentage_24h,
       response[11].market_cap_change_percentage_24h,response[12].market_cap_change_percentage_24h,response[13].market_cap_change_percentage_24h,response[14].market_cap_change_percentage_24h]
       let max = Math.max(...arr2);
       console.log(max)
       for(let i = 0; i < response.length; i++){
        if(max === response[i].market_cap_change_percentage_24h) {
            const volume = response[i].market_cap_change_percentage_24h
            topVolume.textContent = volume.toFixed(2) + percent;
            topVolumeName.textContent = response[i].symbol;
            topVolumePrice.textContent = dollar2 + response[i].current_price;
        }
       }
       let min = Math.min(...arr2);
       console.log(min)
       for(let i = 0; i < response.length; i++){
        if(min === response[i].market_cap_change_percentage_24h) {
            const volume = response[i].market_cap_change_percentage_24h
            lowVolume.textContent = volume.toFixed(2) + percent;
            lowVolumeName.textContent = response[i].symbol;
            lowVolumePrice.textContent = dollar2 + response[i].current_price;
        }
       }
       const arr3 = [response[0].price_change_percentage_24h,response[1].price_change_percentage_24h,response[2].price_change_percentage_24h,
       response[3].price_change_percentage_24h,response[4].price_change_percentage_24h,response[5].price_change_percentage_24h,response[6].price_change_percentage_24h,
       response[7].price_change_percentage_24h,response[8].price_change_percentage_24h,response[9].price_change_percentage_24h,response[10].price_change_percentage_24h,
       response[11].price_change_percentage_24h,response[12].price_change_percentage_24h,response[13].price_change_percentage_24h,response[14].price_change_percentage_24h]

       let max2 = Math.max(...arr3);
       console.log(max2)
       for(let i = 0; i < response.length; i++){
        if(max2 === response[i].price_change_percentage_24h) {
            const volume = response[i].price_change_percentage_24h
            bigPercent.textContent = volume.toFixed(2) + percent;
            bigPercentName.textContent = response[i].symbol;
            bigPercentPrice.textContent = dollar2 + response[i].current_price;
        }
       }

       let min2 = Math.min(...arr3);
       console.log(min2)
       for(let i = 0; i < response.length; i++){
        if(min2 === response[i].price_change_percentage_24h) {
            const volume = response[i].price_change_percentage_24h
            lowPercent.textContent = volume.toFixed(2) + percent;
            lowPercentName.textContent = response[i].symbol;
            lowPercentPrice.textContent = dollar2 + response[i].current_price;
        }
       }


 })


