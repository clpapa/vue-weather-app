<template>
  <HeaderDisplay />
  <WeatherContent />
</template>

<script>
import HeaderDisplay from "./components/HeaderDisplay.vue";
import WeatherContent from "./components/weather/WeatherContent.vue";
export default {
  name: "App",
  components: {
    HeaderDisplay,
    WeatherContent,
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(15deg, #e8dc30, rgb(255, 0, 64), #5335ff);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}
.header h2 {
  color: #fff;
}
.header p {
  font-size: 12px;
  color: #fff;
}
</style>
