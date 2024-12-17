1-savol:
v-model data binding qilish uchun ishlatiladi. U input, textarea, va select elementlari, form elementlarini Vue komponentdagi data bilan bog‘lash uchun ishlatiladi.

<template>
  <div>
    <input v-model="name" placeholder="Ismingizni kiriting" />
    <p>Salom, {{ name }}!</p>
  </div>
</template>

<script setup>
  data() {
    return {
      name: '',
    };
  },
</script>


2-savol:
Vue Lifecycle Hooks 
Vue komponentlari turli bosqichlardan o‘tadi: yaratilish, o‘rnatilish, yangilanish, va yo‘q qilish. Lifecycle hooks — bu har bir bosqichda ishga tushadigan funksiyalar.

mounted: DOM-ga komponent o‘rnatilgandan keyin ishlaydi.
beforeDestroy: Komponent DOM-dan o‘chirishdan oldin ishlaydi.
<template>
  <div>
    <p>blog page yuklandi!</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('blog page DOM-ga o‘rnatildi');
  },
  beforeDestroy() {
    console.log('blog page o‘chirishdan oldin');
  },
};
</script>

3-savol:
Props va Emits nima?
Props: Ota komponentdan bola komponentga data yuborish uchun ishlatiladi.
Emits: Bola komponentdan ota komponentga hodisalar (events) yuborish uchun ishlatiladi.



4-savol:
Teleport — bir komponent ichidagi HTML tarkibini boshqa DOM elementiga yuborish uchun ishlatiladi.
misol uchun,  Modal oynalar, global dialoglar kabi joylashuviga bog‘liq bo‘lmagan elementlar uchun ishlatiladi.

<template>
  <div>
    <p>Asosiy sahifa</p>
    <teleport to="body">
      <div class="modal">
        Bu modal oynadir.
      </div>
    </teleport>
  </div>
</template>
