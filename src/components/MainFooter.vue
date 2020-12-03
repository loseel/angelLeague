<template>
  <ion-footer>
    <ion-toolbar>
        안뇽
    </ion-toolbar>
  </ion-footer>
</template>

<script>
import { defineComponent } from 'vue';
import { IonFooter, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'MainFooter',
  components: {
      IonFooter,
      IonToolbar
  },
});
</script>

<style>
</style>