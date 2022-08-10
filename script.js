var socketbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');
var socketeth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1m');
var socketbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@kline_1m');
socketbtc.onmessage = function (e) {
    var data = JSON.parse(e.data);
    if (data.k.x) {
        btcprice = parseFloat(data.k.c);
        diff = ''

        const newBtcPrice = document.querySelector('.btc-price')
        let priceBtcDiff = document.querySelector('.btc-diff')

        if (btcprice > newBtcPrice.textContent) {
            newBtcPrice.classList.remove('fall')
            newBtcPrice.classList.add('rise')
            priceBtcDiff.classList.remove('fall')
            priceBtcDiff.classList.add('rise')
            diff = parseFloat(btcprice) - parseFloat(newBtcPrice.textContent)
        }
        if (btcprice < newBtcPrice.textContent) {
            newBtcPrice.classList.remove('rise')
            newBtcPrice.classList.add('fall')
            priceBtcDiff.classList.remove('rise')
            priceBtcDiff.classList.add('fall')

            diff = parseFloat(newBtcPrice.textContent) - parseFloat(btcprice)
        }

        newBtcPrice.innerHTML = btcprice
        priceBtcDiff.innerHTML = diff
    }


}

socketeth.onmessage = function (e) {
    var data = JSON.parse(e.data);
    if (data.k.x) {
        ethprice = parseFloat(data.k.c);
        let diff = ''


        let priceEthDiff = document.querySelector('.eth-diff')
        const newethPrice = document.querySelector('.eth-price')

        if (ethprice > newethPrice.textContent) {
            newethPrice.classList.remove('fall')
            newethPrice.classList.add('rise')
            priceEthDiff.classList.remove('fall')
            priceEthDiff.classList.add('rise')
            diff = parseFloat(ethprice) - parseFloat(newethPrice.textContent)
        }
        if (ethprice < newethPrice.textContent) {
            newethPrice.classList.remove('rise')
            newethPrice.classList.add('fall')
            priceEthDiff.classList.remove('rise')
            priceEthDiff.classList.add('fall')

            diff = parseFloat(newethPrice.textContent) - parseFloat(ethprice)
        }
        newethPrice.innerHTML = ethprice
        priceEthDiff.innerHTML = diff
    }

}

socketbnb.onmessage = function (e) {
    var data = JSON.parse(e.data);
    if (data.k.x) {
        diff = ''

        bnbprice = parseFloat(data.k.c);
        const newbnbPrice = document.querySelector('.bnb-price')
        let priceBnbDiff = document.querySelector('.bnb-diff')

        if (bnbprice > newbnbPrice.textContent) {
            newbnbPrice.classList.remove('fall')
            newbnbPrice.classList.add('rise')
            priceBnbDiff.classList.remove('fall')
            priceBnbDiff.classList.add('rise')
            diff = parseFloat(bnbprice) - parseFloat(newbnbPrice.textContent)


        }
        if (bnbprice < newbnbPrice.textContent) {
            newbnbPrice.classList.remove('rise')
            newbnbPrice.classList.add('fall')
            priceBnbDiff.classList.remove('rise')
            priceBnbDiff.classList.add('fall')
            diff = parseFloat(newbnbPrice.textContent) - parseFloat(bnbprice)
        }
        newbnbPrice.innerHTML = bnbprice
        priceBnbDiff.innerHTML = diff

    }


}

