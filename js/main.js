let elCountryList = document.querySelector(".countries-list");
let elSelect = document.querySelector(".country-select");
let elSerchInput = document.querySelector(".search-input");

function renderCountries(arr, list) {
  list.innerHTML = "";
  arr.forEach((value) => {
    let elItem = document.createElement("li");
    let elImg = document.createElement("img");
    let elName = document.createElement("h2");
    let elCapital = document.createElement("p");
    let elPopulation = document.createElement("p");
    let elIdTag = document.createElement("span");

    let actionImgWrappers = document.createElement("div");
    let elLikeImg = document.createElement("img");
    let elBasketImg = document.createElement("img");
    let elMoreImg = document.createElement("img");

    elItem.className =
      "w-[360px] p-2 bg-[#E3F5FB] border-[1px] shadow-md position-relative rounded-[10px]";

    elImg.src = value.flag;
    elImg.height = "150";
    elImg.className =
      "w-[100%] h-[50%] rounded-[5px]  border-[1px] border-slate-200";

    let actionText = document.createElement("div");
    elName.textContent = "Country: " + value.name;
    elCapital.textContent = "Capital: " + value.capital;
    elPopulation.textContent = "Population: " + value.population;
    elIdTag.textContent = value.id;
    // elLikeImg.textContent = value.like;
    // elBasketImg.textContent = value.basket;
    // elMoreImg.textContent = value.more;

    elIdTag.className =
      " absolute-relative";

    // actionImgWrappers.className = "flex items-center justify-center gap-3 pt-1";
    // elLikeImg.src = value.like;
    // elLikeImg.innerHTML =
    //   '<svg width="300px" height="30px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242z"></path></svg>';
    // elLikeImg.height = "25";
    // elLikeImg.className = "w-[30px] h-[30px] text-red-500 block";

    // elBasketImg.src = value.basket;
    // elBasketImg.height = "25";
    // elBasketImg.className = "w-[30px] h-[30px]";

    // elMoreImg.src = value.more;
    // elMoreImg.height = "25";
    // elMoreImg.className = "w-[30px] h-[30px]  flex items-center justify-center";

    actionImgWrappers.append(elLikeImg, elBasketImg, elMoreImg);
    elItem.append(
      elImg,
      elName,
      elCapital,
      elPopulation,
      elIdTag,
      actionImgWrappers,
      actionText
    );
    list.append(elItem);
  });
}
renderCountries(countrys, elCountryList);

countrys.forEach((value) => {
  let elOption = document.createElement("option");
  elOption.innerHTML = `${value.name} - ${value.capital}`;
  elOption.setAttribute("value", value.capital);
  elSelect.append(elOption);
});

elSelect.addEventListener("change", (evt) => {
  if (evt.target.value == "All") {
    renderCountries(countrys, elCountryList);
  } else {
    const selectedList = countrys.filter(
      (item) => item.capital == evt.target.value
    );
    renderCountries(selectedList, elCountryList);
  }
});

elSerchInput.addEventListener("keyup", (evt) => {
  const serchValeu = evt.target.value;
  if (Number(serchValeu)) {
    const serchedList = countrys.filter((item) =>
      String(item.population).toLowerCase().includes(serchValeu.trim())
    );
    renderCountries(serchedList, elCountryList);
  } else {
    const serchedList = countrys.filter((item) =>
      item.name.toLowerCase().includes(serchValeu.trim().toLowerCase())
    );
    renderCountries(serchedList, elCountryList);
  }
});

// Countrys textini animatsiyasi
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });