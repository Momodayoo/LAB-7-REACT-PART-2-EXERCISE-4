'use client'

import React, { useState, useEffect } from "react";

// Save as page.jsx in app/about
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export default function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const [btcPrice, setBtcPrice] = useState(0);


    useEffect(() => {
        let ignore = false;

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
            .then(response => response.json())
            .then(json => {
                if (!ignore) setBtcPrice(json.bitcoin[currency.toLowerCase()]);
            });

        // cleanup function - runs when unmounted or dependencies change
        return () => {
            ignore = true;
        };            
    }, [currency]); // effect dependencies

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>)

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <div className="exchange-rate-box"> 1 BTC = {btcPrice} {currency}{}</div>
        </div>
    )

}

