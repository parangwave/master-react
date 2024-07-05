export async function fetchCoins() {
  //   const resp = await fetch("https://api.coinpaprika.com/v1/coins");
  //   const json = await resp.json();
  //   return json;

  return fetch("https://api.coinpaprika.com/v1/coins")
    .then((resp) => resp.json())
    .then((data) => data.slice(0, 100));
}
