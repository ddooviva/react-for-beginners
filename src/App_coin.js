import { useEffect, useState } from "react";

function App_coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(null);

  //coins 설정
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then((json) => setCoins(json)).then(setTimeout(() => setLoading(false), 200));
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    setDollars(event.target[0].value);
    document.querySelector("button").focus();
  }

  function onChange(event) {
    const selectedIndex = event.target.selectedIndex;
    if (selectedIndex > 0) {
      setSelectedCoin(coins[selectedIndex - 1]);
    } else {
      setSelectedCoin(null);
    }
  }
  function onClick(event) {
    event.target.value = null;

  }
  return (
    <div >
      <h1> The Coins!
      </h1>
      {loading ? <h2> loading ...</h2> :
        <div>
          <h2> searched coins: {coins.length}</h2>
          <select onChange={onChange}>
            <option >select coin</option>
            {coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price.toFixed(2)}  </option>)}
          </select>
          <br />
          <form onSubmit={onSubmit}>
            <input onClick={onClick} type="number" placeholder="달러 금액을 입력하세요" ></input>
            <button id="inputBtn">입력</button>
          </form>
          <br />
          {dollars && selectedCoin ? <h4>${dollars} = {(dollars / selectedCoin.quotes.USD.price).toFixed(5)}{selectedCoin.symbol}</h4> : ""}

        </div>}

    </div >
  )
}

export default App_coin;
