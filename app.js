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

let userPosition;

/* E.h */
const successCallback = (position) => {
  userPosition = position;
  console.log(userPosition);
};

const errorCallback = (error) => {
  console.log(error);
};

window.addEventListener("load", async () => {
  const api = {
    key: "f33a484cf794d08d0148764789aaba32",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  try {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    const res = await fetch(
      `${api.base}forecast/daily?lat=${userPosition.coords.latitude}&lon=${userPosition.coords.longitude}&cnt=5units=metric&APPID=${api.key}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
