let elCountryList = document.querySelector(".countries-list");
let elSelect = document.querySelector(".country-select");
let elSerchInput = document.querySelector(".search-input");
let tun =document.getElementById("tun")
let kun =document.getElementById("kun")
let body=document.querySelector("body")

   


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
      "card w-[305px] p-2 bg-white shadow-md position-relative rounded-[10px] hover:bg-slate-50";
    elImg.src = value.flag;
    elImg.height = "150";
    elImg.className =
      "w-[100%] h-[50%] rounded-[5px]  border-[1px] border-slate-200";

    let actionText = document.createElement("div");
    elName.textContent = "Country: " + value.name;
    elCapital.textContent = "Capital: " + value.capital;
    elPopulation.textContent = "Population: " + value.population;
    elIdTag.textContent = value.id;
    elLikeImg.textContent = value.like;
    elBasketImg.textContent = value.basket;
    elMoreImg.textContent = value.more;

    elIdTag.className =
      " absolute-relative";

    actionImgWrappers.className = "flex items-center justify-center gap-3 pt-1";
    elLikeImg.src = value.like;
    elLikeImg.innerHTML=`<img src="./images/like-svg.svg" alt="img"/>`
    elLikeImg.height = "25";
    elLikeImg.className = "w-[30px] h-[30px] text-red-500 block";

    elBasketImg.src = value.basket;
    elBasketImg.height = "25";
    elBasketImg.className = "w-[30px] h-[30px]";

    elMoreImg.src = value.more;
    elMoreImg.height = "25";
    elMoreImg.className = "w-[30px] h-[30px]  flex items-center justify-center";


    actionImgWrappers.append(elLikeImg, elBasketImg, elMoreImg);
    elItem.append(
      elImg,
      elName,
      elCapital,
      elPopulation,
      elIdTag,
      actionImgWrappers,
      actionText,
   
      
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
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 900,
    easing: "easeOutExpo",
    delay: (el, i) => 60 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 1500
  })



  tun.addEventListener('click', ()=>{
    body.classList.add('dark_bg');
    tun.style.display='none';
    kun.style.display='block';
  });

  kun.addEventListener('click', ()=>{
    body.classList.remove('dark_bg');
    tun.style.display='block';
    kun.style.display='none';
  });

