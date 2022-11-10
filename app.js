const daysOfWeekMap = {
  0: "SUN",
  1: "MON",
  2: "TUES",
  3: "WED",
  4: "THUR",
  5: "FRI",
  6: "SAT",
};

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  "partly-cloudy": { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

const api = {
  key: "cf742c5cc6b0b5c2b7f4b17262c20468",
  base: "https://api.openweathermap.org/data/2.5/",
};

/* E.h */
const successCallback = async (position) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${api.key}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const errorCallback = (error) => {
  console.log(error);
};

window.addEventListener("load", async () => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});
