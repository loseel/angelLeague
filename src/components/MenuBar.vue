<template>
  <div class="side-nav-menu">
    <ion-menu side="start" content-id="main-content">
      <div class="side-content">
        <section id="sidebar_menus" class="sidebar" style="height: auto">
          <ul data-widget="tree" class="sidebar-menu tree">
            <li>
              <a class="img" href="/tabs/login">
                <img
                  class="login_icon"
                  src="//static.angelleague.io/images/icon-login@2x.png"
                />
                로그인
              </a>
            </li>
            <li>
              <a href="/"> 홈 </a>
            </li>
            <li>
              <a href="#"> 종목탐색 </a>
            </li>
            <li>
              <a href="#">
                공동구매
                <span class="pull-right live_badge">LIVE</span>
              </a>
            </li>
            <li>
              <a href="#"> 스톡옵션 </a>
            </li>
          </ul>
        </section>
      </div>
    </ion-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonMenu } from "@ionic/vue";

export default defineComponent({
  name: "MenuBar",
  components: {
    IonMenu,
  },
});
</script>

<style>
ion-menu::part(container) {
  background-color: #2f4051;
  width: 220px;
}

a {
  text-decoration: none;
}

.sidebar {
  height: auto;
  display: block;
  font-size: 20px;
}

.sidebar > .sidebar-menu {
  padding: 3px 0px 13px 0px;
  white-space: nowrap;
  overflow: hidden;
  list-style: none;
}

.tree {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.sidebar-menu > li > a {
  height: 44px;
  line-height: 44px;
  font-family: "NanumSquare";
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  padding: 0 0 0 20px;
  border: none;
}

.sidebar-menu > li > .img {
  display: flex;
  align-items: center;
}

.login_icon {
  width: 12px;
  position: relative;
  bottom: 1px;
  margin-right: 10px;
}

span.live_badge {
  margin-right: 20px;
  margin-top: 10px;
  padding: 0 5px;
  background-color: #33a1ff;
  color: #fff;
  font-size: 10px;
  border-radius: 4px;
  height: 20px;
  line-height: 20px;
}

.pull-right {
  float: right;
}
</style>