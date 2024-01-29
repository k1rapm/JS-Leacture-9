const box = document.querySelector(".box");
const search = document.querySelector(".search");
const select = document.querySelector("#select");

let api = "http://localhost:3000/api/data";

async function getData() {
  try {
    const { data } = await axios.get(api);
    get(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

search.oninput = async () => {
  try {
    const { data } = await axios.get(`${api}?q=${search.value}`);
    get(data);
  } catch (error) {
    console.error(error);
  }
};
select.onclick = async () => {
  try {
    const { data } = await axios.get(`${api}?q=${select.value}`);
    get(data);
  } catch (error) {
    console.error(error);
  }
};

function get(data) {
  box.innerHTML = "";
  data.forEach((e) => {
    let card = document.createElement("div");
    card.classList = "card";
    let flag = document.createElement("img");
    flag.src = e.flags.png;
    flag.classList = "flag";
    let ph = document.createElement("p");
    ph.classList = "ph";
    ph.innerHTML = e.name.common;
    let p1 = document.createElement("p");
    p1.classList = "p1";
    p1.innerHTML = "Population: " + e.population;
    let p2 = document.createElement("p");
    p2.classList = "p1";
    p2.innerHTML = "Region: " + e.region;
    let p3 = document.createElement("p");
    p3.classList = "p1";
    p3.innerHTML = "Capital: " + e.capital;
    let info = document.createElement("a");
    info.classList = "info";
    info.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" color="blue" width="24" height="24" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/></svg>`;
    info.href = e.maps.googleMaps;
    card.append(flag, ph, p1, p2, p3, info);
    box.appendChild(card);
  });
}
