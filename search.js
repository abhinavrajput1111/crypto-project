const footer = document.querySelector("#footer");
const output = document.querySelector("#output");
const searchCoin = document.querySelector("#search-btn");

searchCoin.addEventListener("click", async (e) => {
  const search = document.querySelector("#search");
  e.preventDefault();
  console.log(search.value);
  let data = await getApiData(
    `https://api.coingecko.com/api/v3/search?query=${search.value}`
  );
  console.log(data.coins);
  displaySearchCoins(data.coins);
});

async function getApiData(url) {
  const response = await fetch(url);
  const result = await response.json();
  //   console.log(result);
  return result;
}

function displaySearchCoins(data) {
  output.innerText = "";

  data.forEach((coin, index) => {
    const parent = document.createElement("div");
    parent.classList.add("coin-parent", "py-2");

    const wrapper = document.createElement("div");
    wrapper.classList.add(
      "wrapper",
      "flex",
      "justify-center",
      "items-center",
      "gap-5",
      "px-5"
    );

    const serial_no = document.createElement("span");
    serial_no.classList.add("serial_no");
    serial_no.innerText = index + 1;

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = coin.thumb;

    const name = document.createElement("p");
    name.classList.add("name");
    name.innerHTML = coin.name + " (" + coin.symbol + ") ";

    const button = document.createElement("a");
    button.classList.add(
      "button",
      "px-3",
      "py-1",
      "mx-3",
      "bg-red-500",
      "text-white",
      "cursor-pointer"
    );

    button.innerText = "Details";
    button.href = "more_Infor.html";

    // button.addEventListener("click", (e) => {
    //   console.log("yes ddy");
    // });

    wrapper.append(serial_no, img, name);
    parent.append(wrapper, button);
    output.append(parent);
  });
}
