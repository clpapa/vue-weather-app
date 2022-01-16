<template>
  <div class="weather wrapper">
    <ContentHeader />
    <!-- 자식으로부터 온 이벤트를 받은면 이 메소드를 실행하겠다 -->
    <CitySelector @selectCity="selectCity" />
    <WeatherList :weatherList="weatherList" />
  </div>
</template>

<script>
import weatherMixin from "@/mixins/weatherMixin.js";
import ContentHeader from "./ContentHeader.vue";
import CitySelector from "./CitySelector.vue";
import WeatherList from "./WeatherList.vue";
export default {
  name: "WeatherContent",
  components: { ContentHeader, CitySelector, WeatherList },
  mixins: [weatherMixin],
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    async selectCity(city) {
      //console.log(city, "parent received");
      if (city.selected) {
        const weather = await this.getWeatherInfo(city);
        //console.log(weather);
        this.weatherList.push(weather);
      } else {
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      }
    },
  },
};
</script>

<style></style>
