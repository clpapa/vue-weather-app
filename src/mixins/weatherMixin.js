import axios from "axios";

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    // promise 형태로 반환되기때문에 async 사용해야 await을 사용할수 있음
    async getWeatherInfo(city) {
      console.log(process.env);

      const API_KEY = process.env.VUE_APP_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`;
      // 기다렸다가 실행
      const res = await axios.get(url);
      //console.log(res);
      const { main, wind, weather } = res.data;
      const weatherResult = {
        label: city.label,
        code: city.code,
        temperature: this.displayTemperature(main.temp),
        humidity: main.humidity,
        wind: wind.speed,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
      };

      return weatherResult;
    },
    displayTemperature(temperature) {
      return (temperature - 273.15).toFixed(1);
    },
  },
};

export default weatherMixin;
