<template>
  <div class="container">
    <ion-header translucent>
      <ion-toolbar>
        <div class="main-top">
          <div class="first-menu">
            <button class="first-btn">
              지분거래
            </button>
          </div>
          <div class="sec-menu">
            <button class="second-btn">
              공동구매
            </button>
          </div>
        </div>
        <div class="searchbar-input-container sc-ion-searchbar-md">
          <input aria-label="search text" class="searchbar-input sc-ion-searchbar-md" placeholder="회사명, 종목(주식)코드 검색" type="search" autocomplete="off" autocorrect="off" spellcheck="false">
          <!-- <button aria-label="reset" type="button" no-blur="" class="searchbar-clear-button sc-ion-searchbar-md">
          <ion-icon aria-hidden="true" class="searchbar-clear-icon sc-ion-searchbar-md md hydrated" role="img" aria-label="close sharp">
          </ion-icon>
          </button>
          <ion-icon aria-hidden="true" class="searchbar-search-icon sc-ion-searchbar-md md hydrated" role="img" aria-label="search sharp">
          </ion-icon> -->
        </div>
        <!-- <ion-searchbar class="sol"></ion-searchbar> -->
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
        <ion-item>
          <div class="row vote_row">
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
                  <div class="num blue" v-if="stock.isClubDeal === 1">
                    <span>클럽딜 {{stock.cdNum}}</span>
                    <span>
                      <span style="margin: 0px 3px; color: rgb(153,153,153);">|</span>
                    </span>
                  </div>
                  <div class="num">
                    <span>{{$filters.currency(stock.price)}}원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ion-item> 
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
import {
  // IonSearchbar,
  IonToolbar,
  IonHeader,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/vue";
import { defineComponent } from "vue";
import stockInfo from '../data/stock.json';

export default defineComponent({
  components: { IonToolbar, IonHeader, IonContent, IonList, IonItem },
  setup() {
    const stocks = stockInfo.stock;
    function handleInput(event) {
      const items = Array.from(document.querySelector('ion-list').children);
      const query = event.target.value.toLowerCase();
      requestAnimationFrame(() => {
        items.forEach(item => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
    }

    return { stocks, handleInput };
  }
});
</script>

<style>
  .container {
    display: block;
    margin-left : 25px;
    margin-right : 25px;
  }

  .main-top {
    display: flex;
    flex-direction: row;
  }

  .main-top>.first-menu {
    display : block;
    border-radius: 10px;
    margin: 5px;
    padding: 8px;
    background-color: #2388ff;
  }

  .main-top>.sec-menu {
    display : block;
    margin: 5px;
    padding: 8px;
    background-color:rgb(255, 255, 255);
  }

  .main-top>.first-menu>.first-btn {
    font-size: 16px;
    color: white;
    background: transparent;
  }

  .main-top>.sec-menu>.second-btn {
    font-size: 16px;
    color: gray;
    background: transparent;
  }

  .searchbar-input-container {
    margin-top : 10px;
    border-bottom: 2px solid #000;
  }

  .searchbar-input.sc-ion-searchbar-md {
      padding-top: 6px;
      padding-bottom: 6px;
      background-position: left 8px center;
      height: auto;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      border-radius: var(--border-radius);
      display: block;
      width: 100%;
      border: 0;
      outline: none;
  }

  .searchbar-input.sc-ion-searchbar-md {
    padding-left: unset;
    padding-right: unset;
    padding-inline-start: 10px;
    padding-inline-end: 55px;
  }

  .main-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 15px;
  }

  .main-text>.left>.large {
    font-size: 20px;
  }

  .main-text>.left>.blue {
    margin-left: 6px;
    color:#2388ff;
  }

  .main-info {
    display: block;
  }

  .main-text>.right {
    margin-top: 4px;
  }

  .main-text>.right>.date {
    font-weight: 600;
    font-size: 13px;
  }

  .small {
    font-size: 13px;
  }


  ion-item::part(native) {
    padding-left : 0px;
    padding-right : 0px;
  }

  ion-item::part(native)>.item-inner { 
    background-color: red;
  }

  .main-title {
    position: relative;
    padding-top: 12px;
  }

  .main-title {

  }

  .stock-list {
    padding-top: 0px;
  }
</style>