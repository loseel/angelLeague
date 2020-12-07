<template>
  <ion-page ref="mainElement">
    <ion-content :fullscreen="true">
      <div id="container">
        <div v-if="userToken !== ''" class="home_main">
          <div class="medium">
            {{userName}}님의 <br> 투자현황입니다
          </div>
          <div class="home_info">
            <div class="large strong">
              {{$filters.currency(userMoney)}}
            </div>
            <div class="large">
              원
            </div>
          </div>
        </div>
        <div v-else class="home_main">
          <div class="home_info">
            <div class="large strong">
              환영합니다.
            </div>
          </div>
          <div class="medium">
            로그인을 해주세요.
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
            <div class="small_card cursor" v-for="list in cardList" v-bind:key="list">
              <div class="small_card_bg" v-bind:style='{backgroundImage : `url("${list.card_bg}")`}'>
                <img v-bind:src="list.company_logo">
              </div>
              <div class="small_card_info">
                <div class="pn">{{list.clubdeal_name}}</div>
                <div class="pr">
                  <span v-if="list.discount === 1" class="font-light discounted">
                    {{$filters.currency(list.current_price)}}원/주
                  </span>
                  <br>
                  <span class="bold" v-if="userToken === ''">
                    로그인 후 확인 가능
                  </span>
                  <span class="bold" v-else>
                    {{$filters.currency(list.buy_price)}}원/주
                  </span>
                </div>
                <div class="r" v-if="list.deal_status === 'collected'">
                  <span :style="[list.collected_rate >= 40 ? list.collected_rate >= 70 ? {'color':'#ff0000'} : {'color':'#4a90e2'} : {'color':'#666'}]">
                        {{list.collected_rate}}%
                  </span>
                  진행 / {{list.people}}명
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
import stockInfo from '../data/stock.json';
import homeMain from '../data/homeMain.json';
import { computed, defineComponent } from 'vue';
import { useStore } from '../vuex/store';
import axios from 'axios';

export default defineComponent({
  name: 'home',
  data() {
    return {
      stocks:stockInfo.stock,
      companyLogo:stockInfo.cLogo,
      homeMain:homeMain.menu,
      stockCount:stockInfo.stockCount,
    }
  },
  setup() {
    // const { dispatch, state } = useStore(); // 저장소 객체 주입받아 사용하기
    const { state, dispatch, commit, getters } = useStore();
    const userName = computed(() => state.userName); // computed : 저장소의 count 상태를 반응형으로 렌더링 하기 위해 사용!
    const userMoney = computed(() => state.userMoney);
    const increase = () => dispatch('INCREASE'); // INCREASE 액션 호출
    const decrease = () => dispatch('DECREASE'); // DECREASE 액션 호출 ;
    const getList = () => dispatch('LOADLIST');
    const userToken = computed(() => state.token);

    if(getters.token !== '') {
      commit('SET_TOKEN',getters.token);
      getList();
    }

    const cardList = computed(() => getters.cardList);

    return {userName, userMoney, increase, decrease, cardList, userToken};
  },
  components: { IonContent, IonPage },
});

</script>