<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>홈</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon :icon="searchOutline" />
          <ion-label>검색</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="analytics" href="/tabs/home">
          <ion-icon :icon="analyticsOutline" />
          <ion-label>매매</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="myProperty" href="/tabs/home">
          <ion-icon :icon="personOutline" />
          <ion-label>내자산</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="add" href="/tabs/home">
          <ion-icon :icon="reorderThreeOutline" />
          <ion-label>더보기</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { homeOutline, searchOutline, analyticsOutline, personOutline, reorderThreeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeOutline,
      searchOutline,
      analyticsOutline, 
      personOutline, 
      reorderThreeOutline,
    }
  }
}
</script>