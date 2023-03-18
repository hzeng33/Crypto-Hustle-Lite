import React, { useEffect, useState } from "react";
const API_KEY =
  "8afd07a1fdaed1ae3466a6d9c04416a66f328924bb74e6d89b3288f239419b0d";

const CoinInfo = ({ image, name, symbol }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const getCoinPrice = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
          API_KEY
      );
      const json = await response.json();
      setPrice(json);
    };
    getCoinPrice().catch(console.error);
  }, [symbol]);

  return (
    <div>
      {price ? ( // rendering only if API call actually returned us data
        <li className="main-list" key={symbol}>
          <img
            className="icons"
            src={`https://www.cryptocompare.com${image}`}
            alt={`Small icon for ${name} crypto coin`}
          />
          {name} <span className="tab"></span> ${price.USD} USD
        </li>
      ) : null}
    </div>
  );
};

export default CoinInfo;
