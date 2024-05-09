const trending_coins = document.querySelector("#trending-coins");

async function getApiData(url) {
  const response = await fetch(url);
  const result = await response.json();
  //   console.log(result);
  return result;
}

// getApiData("https://api.coingecko.com/api/v3/search/trending");

// show trending data

window.addEventListener("load", trendingData);

async function trendingData() {
  const data = await getApiData(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  showTrendingData(data.coins);
  console.log(data);
}

function showTrendingData(data) {
  data.forEach((coin) => {
    const parent = document.createElement("div");
    parent.classList.add("parent");

    const left = document.createElement("div");
    left.classList.add("left-inner");
    const img = document.createElement("img");
    img.src = coin.item.thumb;

    left.append(img);

    const right = document.createElement("div");
    right.classList.add("right-inner");
    const para = document.createElement("p");

    para.innerHTML = coin.item.name + " " + `(${coin.item.symbol})`;

    const price = document.createElement("p");
    // price.innerText = calculatePrice(coin.item.data.price_btc);
    let priceInr = 5250000 * coin.item.data.price_btc;
    price.innerText = priceInr.toFixed(2);

    right.append(para, price);

    parent.append(left, right);
    trending_coins.append(parent);
  });
}

// async function btcIntoinr() {
//   const response = await getApiData(
//     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
//   );
//   return response;
// }
