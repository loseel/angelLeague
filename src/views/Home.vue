<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <div class="home_main">
          <div class="medium">
            {{user.user_name}}님의 <br> 투자현황입니다
          </div>
          <div class="home_info">
            <div class="large strong">
              {{$filters.currency(user.money)}}
            </div>
            <div class="large">
              원
            </div>
          </div>
        </div>
        <div class="white-margin">
          <div class="menu_row">
            <div class="col-xs-3" v-for="menu in homeMain" v-bind:key="menu">
              <img :src="menu.src" :srcset="menu.srcset">
              <div class="t">{{menu.title}}</div>
            </div>
          </div>
        </div>
        <div class="home_clubdeal">
          <div class="home_top">
            <div class="medium">
              놓치면 언제 또 볼지 몰라...
            </div>
            <div class="big">
              참여가능 클럽딜
            </div>
            <div class="small cursor">
              <a href="#">
                전체보기 >
              </a>
            </div>
          </div>
          <div class="deal_row">
            <div class="small_card cursor" v-for="store in stores" v-bind:key="store">
              <div class="small_card_bg" v-bind:style='{backgroundImage : `url("${store.bg_img}")`}'>
                <img v-bind:src="store.img">
              </div>
              <div class="small_card_info">
                <div class="pn">{{store.name}}{{store.num}}호 클럽딜</div>
                <div class="pr">
                  <span v-if="store.discount === 1" class="font-light discounted">
                    {{$filters.currency(store.befo_price)}}원/주
                  </span>
                  <br>
                  <span class="bold" v-if="user.name = ''">
                    로그인 후 확인 가능
                  </span>
                  <span class="bold" v-else>
                    {{$filters.currency(store.price)}}원/주
                  </span>
                </div>
                <div class="r" v-if="store.state === 'progress'">
                  <span :style="[store.percent >= 40 ? store.percent >= 70 ? {'color':'#ff0000'} : {'color':'#4a90e2'} : {'color':'#666'}]">
                        {{store.percent}}%
                  </span>
                  진행 / {{store.people}}명
                </div>
                <div class="r" v-else>
                  진행예정 / 0명
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="white-margin">
          <div class="earlybird">
            <div class="title">
                얼리버드로 구매하기! >
            </div>
            <p>
              인기 회사 주식, 미리 준비해놓고 바로구매!
            </p>
            <div class="row early_row">
              <div class="logoBox">
                <div class="earlybird_company" v-for="clogo in companyLogo" v-bind:key="clogo">
                  <div class="c_logo">
                    <img v-bind:src="clogo" class="pull-left img-responsive img-circle">
                    <div class="inset-border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="white-margin" style="margin-bottiom: 60px;">
          <div class="home_top">
            <div class="big">종목
              <span class="regular">{{stockCount}}개</span>
            </div>
          </div>
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
          <div class="home_button">
            <div class="small cursor bold">
              <a href="#">{{stockCount}}개 종목 전체보기 > </a>
            </div>
          </div>
        </div>
        <section class="content stockoption_tax">
          <div class="row content_row">
            <div class="title">
              스톡옵션 행사하기 전에!
            </div>
            <div class="desciption">
              당신을 위한 스톡옵션 세금계산기
            </div>
            <p>
              내 스톡옵션, 행사하면 얼마가 되는 걸까요?<br>
              5가지 정보만 알고 있다면<br>
              필요 자금과 세금을 계산할 수 있어요
            </p>
            <a href="#" class="content_button">
                  5초만에 계산하기
            </a>
          </div>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import userInfo from '../data/users.json';
import storeInfo from '../data/store.json';
import stockInfo from '../data/stock.json';
import homeMain from '../data/homeMain.json';

export default  {
  name: 'home',
  data() {
    return {
      user:userInfo,
      stores:storeInfo.store,
      stocks:stockInfo.stock,
      companyLogo:stockInfo.cLogo,
      homeMain:homeMain.menu,
      stockCount:stockInfo.stockCount,
    }
  },
  components: { IonContent, IonPage }
}
</script>