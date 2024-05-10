const left = document.querySelector("#left-output");
const right = document.querySelector("#right-output");

console.log(left, right);

let url = new URL(window.location.href);
let data = new URLSearchParams(url.search);
// console.log(url);

console.log(data.get("id"));

if (!data.has("id")) {
  window.location.href = "search.html";
}

async function getApiData(url) {
  const response = await fetch(url);
  const result = await response.json();
  //   console.log(result);
  return result;
}

window.addEventListener("load", async () => {
  let response = await getApiData(
    `https://api.coingecko.com/api/v3/coins/${data.get(
      "id"
    )}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  console.log(response);
  showData(response);
});

function showData(coin) {
  console.log(coin);

  // const parent = document.createElement("div");
  // parent.classList.add("parent");

  const img = document.createElement("img");
  img.classList.add("img_single_coin");
  img.src = coin.image.large;

  left.append(img);

  //   right div start

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.innerHTML = `${coin.name} (${coin.symbol})`;

  const desc = document.createElement("p");
  desc.classList.add("desc");
  desc.innerHTML = coin.description.en;

  right.append(heading, desc);
}
