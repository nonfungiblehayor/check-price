async function getChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

let color;
getChart().then(response=> {
        let { times, prices } = response ;
        console.log(response.prices[response.prices.length-1]) 
        console.log(response.prices[response.prices.length-2])  
        if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
            color = '#4ECB71'
            console.log(color)
        } else {
            color = 'red'
            console.log(color)
        } 
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
            label: '',
            data: prices,
            borderColor: color,
            borderJoinStyle: 'round',
            borderCapStyle: 'round',
            borderWidth: 3,
            pointRadius: 0,
            pointHitRadius: 10,
            lineTension: .2,
}]
        },
        options: {
            legend: {
                    display: false
                },
            tooltips: {
                    callbacks: {
                    label: function(tooltipItem) {
                            return tooltipItem.yLabel;
                    }
                    }
                },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                    }
                }],
            }
        }
    });
})

// eth chart
async function getEthChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getEthChart().then(response=> {
    let { times, prices } = response   
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    } 
const ctx = document.getElementById('myChart2').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// usdt chart
async function getUsdtChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDT&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getUsdtChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }  
const ctx = document.getElementById('myChart3').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})


// bnb chart
async function getBnbChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getBnbChart().then(response=> {
    let { times, prices } = response
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }   
const ctx = document.getElementById('myChart4').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// cardano chart
async function getCardanoChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ADA&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getCardanoChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }  
const ctx = document.getElementById('myChart5').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// solana chart
async function getSolanaChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=SOL&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getSolanaChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    } 
const ctx = document.getElementById('myChart6').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// polygon chart
async function getPolygonChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=MATIC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getPolygonChart().then(response=> {
    let { times, prices } = response
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }  
const ctx = document.getElementById('myChart7').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// DAI chart
async function getDaiChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=DAI&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getDaiChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    } 
const ctx = document.getElementById('myChart8').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// Uniswap chart
async function getUniChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=UNI&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getUniChart().then(response=> {
    let { times, prices } = response  
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }
const ctx = document.getElementById('myChart9').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// Polkadot chart
async function getPolChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOT&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getPolChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }
const ctx = document.getElementById('myChart10').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// Litecoin chart
async function getLtcChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getLtcChart().then(response=> {
    let { times, prices } = response
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }
const ctx = document.getElementById('myChart11').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// ethereum classic chart
async function getEtcChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getEtcChart().then(response=> {
    let { times, prices } = response
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    } 
const ctx = document.getElementById('myChart12').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// ftx chart
async function getFtxChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=FTT&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getFtxChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }
const ctx = document.getElementById('myChart13').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// Algo chart
async function getAlgoChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ALGO&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getAlgoChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }
const ctx = document.getElementById('myChart14').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})

// Terra chart
async function getTerraChart() {
    let response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LUNC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146')
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
    times,
    prices
    }
}

getTerraChart().then(response=> {
    let { times, prices } = response 
    if(response.prices[response.prices.length-1] > response.prices[response.prices.length-2]) {
        color = '#4ECB71'
        console.log(color)
    } else {
        color = 'red'
        console.log(color)
    }
const ctx = document.getElementById('myChart15').getContext('2d');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: times,
        datasets: [{
        label: '',
        data: prices,
        borderColor: color,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
}]
    },
    options: {
        legend: {
                display: false
            },
        tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                }
            }],
        }
    }
});
})