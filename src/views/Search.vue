<template>
  <ion-page>
    <div class="container">
      <ion-header translucent>
        <ion-toolbar>
          <div class="searchbar-input-container sc-ion-searchbar-md">
            <input v-on:key-up="handleInput"
                   aria-label="search text" 
                   class="searchbar-input sc-ion-searchbar-md" 
                   placeholder="회사명, 종목(주식)코드 검색" 
                   type="search" 
                   autocomplete="off" 
                   autocorrect="off" 
                   spellcheck="false">
            <ion-icon class="serach-btn" :icon="searchOutline" />
          </div>
          <div class="main-info">
            <div class="main-text">
              <div class="left">
                <span class="large bold">지분거래</span>
                <span class="large blue">212,945</span>
              </div>
              <div class="right">
                <span class="small">
                  11.25 20:49 기준
                </span>
              </div>
            </div>
            <div class="sub-text">
              <span class="small">
                가격은 참고용으로 실제 거래가격과 차이가 있을 수 있습니다.
              </span>
            </div>
          </div>
          <div class="main-title">
            <span class="one">종목</span>
            <span class="two">가격</span>
            <span class="three">거래</span>
          </div>
        </ion-toolbar>
        
      </ion-header>
      <ion-content fullscreen>
        <ion-list class="stock-list">
          <div class="item-container">
            <div class="vote_company" v-for="stock in stocks" v-bind:key="stock">
              <div class="vote_top cursor">
                <div class="vote_top_left">
                  <div class="c_logo">
                    <img v-bind:src="stock.logo" class=" img-responsive img-circle ">
                    <div class="inset-border"></div>
                  </div>
                  <div class="d">
                    <div class="title">{{stock.title}}</div>
                  </div>
                </div>
                <div class="vote_top_right">
                  <div class="num">
                    <span>{{$filters.currency(stock.price)}}원</span>
                  </div>
                  <div class="deal bold">
                    <span>57만</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ion-list>
      </ion-content>
    </div>
  </ion-page>
</template>

<script>
import {
  // IonSearchbar,
  IonPage,
  IonToolbar,
  IonHeader,
  IonContent,
  IonList,
  // IonItem,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import stockInfo from '../data/stock.json';
import { searchOutline } from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonToolbar, IonHeader, IonContent, IonList, IonIcon },
  setup() {
    const stocks = stockInfo.stock;
    function handleInput(event) {
      const items = Array.from(document.querySelector('ion-list').children);
      // 리스트들의 자식을 가져옴 => 아이템들!
      const query = event.target.value.toLowerCase();
      // 이벤트가 발생한 애의 정보를 소문자로 가져옴
      requestAnimationFrame(() => {
        items.forEach(item => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
    }

    return { stocks, handleInput, searchOutline };
  }
});
</script>

<style>
  .container {
    display: block;
    margin-left : 25px;
    margin-right : 25px;
  }

  .searchbar-input-container {
    display: flex;
    flex-direction: row;
    margin-top : 8px;
    border-bottom: 2px solid #000;
  }

  .searchbar-input.sc-ion-searchbar-md {
      padding-top: 6px;
      padding-bottom: 6px;
      font-size: 15px;
      font-weight: 400;
      line-height: 30px;
      width: 100%;
      border: 0;
      outline: none;
  }

  .searchbar-input.sc-ion-searchbar-md {
    padding-inline-start: 10px;
  }

  .main-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 18px;
    padding-bottom: 13px;
  }

  .main-text>.left>.large {
    font-size: 20px;
  }

  .main-text>.left>.blue {
    margin-left: 6px;
    color:#2388ff;
  }

  .main-text>.right {
    margin-top: 4px;
  }

  .main-text>.right>.date {
    font-weight: 600;
    font-size: 13px;
  }

  .small {
    font-size: 12px;
  }

  .main-title {
    position: relative;
    padding-top: 12px;
  }

  .stock-list {
    padding-top: 0px;
  }

  .serach-btn {
    width: 30px;
    height: 30px;
    margin: 7px;
  }

  .main-title {
    font-weight: 700;
  }

  .one {
    display: inline-block;
    float:left;
    padding-left:10px;
  }

  .two {
    display: inline-block;
    float: left;
    padding-left: 173px;
  }

  .three {
    display: inline-block;
    float: right;
    padding-right: 26px;
  }
  
  .num {
    margin-right:10px;
  }

  .item-container {
    padding-right : 20px;
  }

  /* .main-top {
    display: flex;
    flex-direction: row;
  }

  .main-top>.first-menu {
    display : block;
    border-radius: 10px;
    margin: 3px;
    padding: 8px;
    background-color: #2388ff;
    box-shadow: 0 0 5px #2388ff;
  }

  .main-top>.sec-menu {
    display : block;
    margin: 3px;
    padding: 8px;
    background-color:rgb(255, 255, 255);
  }

  .main-top>.first-menu>.first-btn {
    font-size: 15px;
    color: white;
    background: transparent;
  }

  .main-top>.sec-menu>.second-btn {
    font-size: 15px;
    color: gray;
    background: transparent;
  } */
</style>