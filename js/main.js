let elCountryList = document.querySelector(".countries-list");
let elSelect = document.querySelector(".country-select");
let elSerchInput = document.querySelector(".search-input");
let elModalContent=document.querySelector(".modal-content")
let tun=document.getElementById("tun")
let kun=document.getElementById("kun")
let body=document.querySelector("body")

let elModalWrapper=document.querySelector(".modal-wrapper")
let elModalInner=document.querySelector(".modal-inner")

let likeCount=document.querySelector(".like-count")
let savedCount=document.querySelector(".saved-count")


   
function renderCountry(arr){
  elCountryList.innerHTML=null
  arr.forEach(item=>{
    let countryItem=document.createElement("li")
    countryItem.className="w-[300px] bg-white rounded-md p-2"
    countryItem.innerHTML=` 
    <img class="w-[100%] h-[50%] rounded-[5px]  border-[1px] border-slate-200" src=${item.flag} alt="flag" width="100%" height="200"/>
    <h2>Country:${item.name}</h2>
    <p>Capital:${item.capital}</p>
    <p>Population:${item.population}</p>
    <p>${item.id}
    <div class="flex items-center justify-center gap-3 pt-1">
    <button onclick="handleLikeBtnClick(${item.id})" class="${item.isLiked ? "bg-red-600":"bg-slate-400"} text-[18px] font-semibold p-1 rounded-md text-white">Like</button>
    <button onclick="handleSavedBtnClick(${item.id})" class="${item.isSaved ? "bg-green-600":"bg-slate-400"} text-[18px] text-white font-semibold p-1 bg-slate-400 rounded-md">Save</button>
    <button onclick="handleMoreBtnClick(${item.id})" class="text-[18px] bg-blue-500 text-white font-semibold p-1 rounded-md">More</button>
    </div>
    `
    elCountryList.appendChild(countryItem)
  })

  likeCount.textContent=arr.filter(item=>item.isLiked==true).length
  savedCount.textContent=arr.filter(item=>item.isSaved==true).length
}
renderCountry(countrys)

function handleMoreBtnClick(id){
  elModalWrapper.classList.remove("scale-0")

  const findedObj=countrys.find(item=>item.id==id)
  console.log(findedObj)
  elModalContent.innerHTML=`
  <div class="flex justify-between items-center m-20 gap-6"> 
     <div class="w-[60%]">
   <img class="w-[100%] h-[50%] rounded-[5px]  border-[1px] border-slate-200" src=${findedObj.flag} alt="flag" width="100%" height="200"/>
     </div>
     <div class="w-[40%]">
      <h2>Country: ${findedObj.name}</h2>
    <p>Capital: ${findedObj.capital}</p>
    <p>Population: ${findedObj.population}</p>
    </div>
   </div>    
    `

}

// Modal Start 
elModalWrapper.addEventListener("click", function(e){
  if(e.target.id=="wrapper"){
    elModalWrapper.classList.add("scale-0")
  }
})
function closeBtnClick(){
  elModalWrapper.classList.add("scale-0")
}
// Modal end 

// Like btn click start
function handleLikeBtnClick(id){
  const findedObj=countrys.find(item => item.id==id)
  findedObj.isLiked=!findedObj.isLiked
  renderCountry(countrys);
}
// Like btn click finish

// saved btn start
function handleSavedBtnClick(id){
  const findedObj=countrys.find(item => item.id==id)
  findedObj.isSaved=!findedObj.isSaved
  renderCountry(countrys);
}
  // saved btn finish

  // like list
  function handleLikeCountBtnClick(){
    const filteredArr=countrys.filter(item=>item.isLiked==true)
    renderCountry(filteredArr)
  }


  function handleSaveCountBtnClick(){
    const filteredArr=countrys.filter(item=>item.isSaved==true)
    renderCountry(filteredArr)
  }













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

