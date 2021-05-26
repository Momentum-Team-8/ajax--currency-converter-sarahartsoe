const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const url = "http://api.exchangeratesapi.io/v1/latest?access_key=62431ad0068809f046dd0088d9212cdd"

const rootElement = document.querySelector('.container')

// fetch(url)
// // console.log(url)
// .then(response => response.json())
// .then(data => {
//   const info = data[0].rates
//   document.querySelector('.container').innerHTML = `<p>${info}</p>`
// })

//above returned Uncaught (in promise) TypeError: Cannot read property 'rates' of undefined
// trying new approach

// fetch(url)
// .then(response => response.json())
// .then(data => {
//   console.log(data)
// })
// ^ majorly stuck here

// attempting Roan's method below:

fetch(url)
  .then(res => res.json()) 
  .then(data => {
    console.log(data)
    let h2 = document.createElement('h2')
    h2.innerText = data.base
    rootElement.appendChild(h2)

    let allCurrency = document.createElement('select')
    rootElement.appendChild(allCurrency)
    for (let cur of currencies) {
      const optionItem = document.createElement('option')
      optionItem.value = cur
      optionItem.innerText = cur
      allCurrency.appendChild(optionItem)
    }
  })

  //above is returning Uncaught (in promise) TypeError: Cannot read property 'appendChild' of null
    // at script.js:67