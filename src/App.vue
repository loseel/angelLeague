<template>
  <ion-app>
    <menu-bar></menu-bar>
    <div class="ion-page" id="main-content">
      <main-header></main-header>
      <ion-content>
        <ion-router-outlet /> 
      </ion-content>
    </div>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { provideStore } from './vuex/store'
import MainHeader from './components/MainHeader'
import MenuBar from './components/MenuBar';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet, // 여기에 바인딩됨!
    IonContent,
    MainHeader,
    MenuBar,
  },
  setup() {
    provideStore();
    // 저장소 제공 헬퍼 함수!
  },
});
</script>

<style>
</style>