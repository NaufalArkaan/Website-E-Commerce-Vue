<template>
  <WebHeaderFull/>
  <div id="app">
    <div class="header">
    </div>
    <div class="main-content">
      <div class="item-card">
        <div class="item-image">
          <img
            src="../../assets/Thumbnail Image.png"
            alt="Vintage chicago cubs white crewneck"
          />
        </div>
        <div class="item-details">
          <div class="item-title">Vintage chicago cubs white crewneck</div>
          <div class="item-size">8/M</div>
          <div class="item-condition">Very Good</div>
          <div class="item-location">Denpasar</div>
          <div class="item-price">Rp200.000</div>
          <div class="item-seller">Jack on the corner</div>
          <div class="item-rating">★★★★★ (110)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
  import WebHeaderFull from '../header/WebHeaderFull.vue';
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  padding-bottom: 20px;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

.categories {
  font-size: 1.2rem;
}

.item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.item-image {
  width: 40%;
}

.item-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.item-details {
  width: 60%;
  margin-left: 20px;
}

.item-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.item-size,
.item-condition,
.item-location {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.item-price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.item-seller {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.item-rating {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>