<template>
  <div id="app" class="p-4">
    <h1 class="text-2xl font-bold">Sonlar yig'indisini hisoblash</h1>
    <div class="mt-4">
      <label for="numberInput" class="block text-lg">Musbat son kiriting:</label>
      <input
        type="number"
        id="numberInput"
        v-model.number="n"
        min="1"
        class="border rounded p-2 mt-2"
        placeholder="misol uchun, 5"
      />
    </div>
    <div class="mt-4">
      <button
        @click="calculateSum"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Hisoblash
      </button>
    </div>
    <div v-if="sum !== null" class="mt-4 text-lg">
      <p>Natija: {{ sum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: null, 
      sum: null, 
    };
  },
  methods: {
    calculateSum() {
      if (this.n && this.n > 0) {
        this.sum = (this.n * (this.n + 1)) / 2; 
      } else {
        this.sum = null;
        alert("Iltimos, musbat son kiriting!");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
