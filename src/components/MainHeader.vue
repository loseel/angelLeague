<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <div class="logo">
          <a href="/">
              <img class="angelleague_logo" src="//static.angelleague.io/images/logo/LOGO_ANGELLEAGUE.png" srcset="//static.angelleague.io/images/logo/LOGO_ANGELLEAGUE@2x.png 2x,//static.angelleague.io/images/logo/LOGO_ANGELLEAGUE@3x.png 3x">
          </a>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import { IonMenuButton, IonButtons, IonHeader, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'MainHeader',
  components: {
      IonButtons,
      IonMenuButton,
      IonHeader,
      IonToolbar
  },
});
</script>

<style>
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-right : 50px;
  }
</style>