const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  //   const resp = await fetch("https://api.coinpaprika.com/v1/coins");
  //   const json = await resp.json();
  //   return json;

  return fetch(`${BASE_URL}/coins`)
    .then((resp) => resp.json())
    .then((data) => data.slice(0, 100));
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((resp) => resp.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((resp) => resp.json());
}
