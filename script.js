import { CityData } from "./city.js";

function showdata(city) {
  let citys = document.getElementById("Scityname");
  citys.innerHTML = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4d57d209fdmshcf429d900d79ae6p1a2086jsn524cc7e842e8",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = fetch(url, options);
    response.then((data) => {
      const p1 = data.json();
      p1.then((productdata) => {
        console.log(productdata);
        datashow(productdata);
      });
    });
  } catch (error) {
    console.error(error);
  }
}
showdata(CityData[1]);
function datashow(weather) {
  console.log(weather);

  let currentTemprature = document.getElementById("tempraturemain");
  currentTemprature.innerText = weather.temp;
  let currentHumidity = document.getElementById("Humiditymain");
  currentHumidity.innerText = weather.humidity;
  let currentWind = document.getElementById("Windmain");
  currentWind.innerText = weather.wind_speed;
  let currentMintemp = document.getElementById("min_temp");
  currentMintemp.innerText = weather.min_temp;
  let currentMaxtemp = document.getElementById("max_temp");
  currentMaxtemp.innerText = weather.max_temp;
  let currentcloud_pct = document.getElementById("cloud_pct");
  currentcloud_pct.innerText = weather.cloud_pct;
  let currentfeels_like = document.getElementById("feels_like");
  currentfeels_like.innerText = weather.feels_like;
  let currentsunrise = document.getElementById("sunrise");
  currentsunrise.innerText = weather.sunrise;
  let currentsunset = document.getElementById("sunset");
  currentsunset.innerText = weather.sunset;
  let wind_speed = document.getElementById("wind_speed");
  wind_speed.innerText = weather.wind_speed;
  let Temprature = document.getElementById("tem");
  currentTemprature.innerText = weather.temp;
}

function searchbtn() {
  let ivalue = document.getElementById("cityname").value;
  if (ivalue === "") {
    alert("please enter cityname");
  }
  showdata(ivalue);
}

console.log(CityData);
let inputid = document.getElementById("cityname");
inputid.addEventListener("keyup", () => {
  filterdata(CityData);
});

function filterdata(citydata) {
  let inputvalue = document.getElementById("cityname");
  let filterResult = citydata.filter((name) => {
    if (name.toLowerCase().includes(inputvalue.value)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterResult);
  let maindiv = document.querySelector(".searchitems");
  maindiv.innerHTML = "";
  filterResult.forEach((element, index) => {
    let div = document.createElement("div");
    div.className = "itemname";
    div.innerHTML = `<h4 id="h4-${index}">${element}</h4>`;
    maindiv.appendChild(div);
    let h4 = document.getElementById(`h4-${index}`);
    h4.addEventListener("click", () => {
      console.log(h4.innerText);
      inputvalue.value = h4.innerText;
      console.log(inputvalue);
      maindiv.innerHTML = "";
      showdata(h4.innerText);
    });
  });
}

let details = ["Ahmedabad", "Bangalore", "Delhi", "Mumbai", "Pune", "Kolkata"];
showdetails();
function showdetails() {
  details.forEach((element, index) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${element}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4d57d209fdmshcf429d900d79ae6p1a2086jsn524cc7e842e8",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = fetch(url, options);
      response.then((data) => {
        const p1 = data.json();
        p1.then((productdata) => {
          console.log(productdata);
          name(productdata);
        });
      });
    } catch (error) {
      console.error(error);
    }

    function name(abc) {
      document.getElementById(`a-${index}`).innerText = abc.feels_like;
      document.getElementById(`b-${index}`).innerText = abc.temp;
      document.getElementById(`c-${index}`).innerText = abc.humidity;
      document.getElementById(`d-${index}`).innerText = abc.max_temp;
      document.getElementById(`e-${index}`).innerText = abc.min_temp;
    }
  });
}
