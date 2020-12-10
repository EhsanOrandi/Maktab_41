$(document).ready(function (e) {
    setInterval(() => {
        clear()
        main().then(data => {
            let today = new Date()
            let current_date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDay()
            let current_time =  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
            display_info(data.Currency, data.Gold, (current_date + ' ,  '+ current_time))
            console.log(data.Currency)
        })
        main().catch(data => {
            console.log(data)
        })
    }, 5000); 
})

function clear() {
    $('.header').empty()
    $('.show-result').empty()
}

function display_info(currency, gold, time){
    var currency_items = [];
    var gold_items = []
    $.each(currency, function(i, item) {
        currency_items.push(`<button type="button" class="btn btn-info m-1 col-2" data-toggle="tooltip" data-placement="top" title="Sell: ${item.Sell}  |  Buy: ${item.Buy}">${item.Currency}</button>`)
    })
    $.each(gold, function(i, item) {
        gold_items.push(`<button type="button" class="btn btn-info m-1 col-2" data-toggle="tooltip" data-placement="top" title="Sell: ${item.Sell}  |  Buy: ${item.Buy}">${item.Coin}</button>`)
    })
    var items = currency_items.concat(gold_items)
    $('.header').append(`<h3>${time}</h3>`)
    $('.show-result').append(items.join(''));
}

function main() {
    let promise = new Promise((resolve, reject) => {
        $.ajax({
            type: 'get',
            url: 'https://currency.jafari.li/json',
            success: function(response){
                text = JSON.parse(response)
                resolve(text)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                reject('Something went wrong!') 
            }
        })
    })
    return promise
}