<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="container">
        <div class="login-box">
          <div class="login-logo">로그인</div>
          <div class="login-box-body">
            <form id="loginForm" v-on:submit.prevent="sendPost">
              <div class="form-group has-feedback">
                <input
                  type="text"
                  v-model="reValue.userID"
                  name="userID"
                  class="form-control input-lg"
                  placeholder="Email"
                />
              </div>
              <div class="form-group has-feedback last">
                <input
                  type="password"
                  v-model="reValue.userPW"
                  name="userPW"
                  class="form-control input-lg"
                  placeholder="Password"
                />
              </div>
              <button type="Submit" class="loginBtn">로그인</button>
            </form>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import axios from "axios";
import { useStore } from "../vuex/store";
import { defineComponent, reactive } from "vue";
import router from "../router";

export default defineComponent({
  name: "Login",
  components: { IonPage, IonContent },
  setup() {
    const { commit, getters } = useStore();
    const reValue = reactive({userID : "", userPW : ""});

    const sendPost = async () => {
      axios
        .post("https://api.angelleague.io/v1/token", {
          clientSecret: reValue.userPW,
        })
        .then((res) => {
          commit("SET_TOKEN", res.data.token);
          if (getters.token !== null) {
            console.log(getters.token);
            router.push("/tabs/home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return { sendPost, reValue };
    // => data return
  },
});
</script>

<style>
.container {
  display: block;
  text-align: center;
}
.login-box {
  display: inline-block;
  width: 100%;
}
@media (min-width: 500px) {
  .login-box {
    width: 500px;
  }
}
.login-box .login-box-body {
  padding-top: 5px;
  padding: 20px;
}

.login-box .login-box-body form,
.login-box .login-box-body .form-group:not(.last) {
  margin-bottom: 30px;
}

.login-box > .login-logo {
  margin-top: 60px;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -2px;
  text-align: center;
  color: #222222;
  margin-bottom: 0;
}

.login-box > .login-box-body {
  background: #fff;
  border-top: 0;
  color: #666;
}

.has-feedback {
  position: relative;
}

.login-box .login-box-body .form-group > input {
  font-family: Arial;
  font-size: 16px;
  font-weight: 500;
  color: #999999;
  border: none;
  border-bottom: solid 1px #cfd8eb;
  background-color: none;
  height: 40px;
  padding-left: 0;
  padding-right: 0;
  padding: 0;
}

.login-box .login-box-body .form-group > input::placeholder {
  font-family: NanumSquare;
  color: #cfcfcf;
}

.login-box .login-box-body .form-group > input:focus {
  outline: none;
  border-bottom: solid 1px #4a90e2;
}

.login-box .login-box-body form#loginForm .form-group.last {
  margin-bottom: 55px;
}

.loginForm {
  display: block;
}
.form-control {
  border-radius: 0;
  box-shadow: none;
  background-color: #fff;
  background-image: none;
  display: block;
  width: 100%;
  background-image: none;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.loginBtn {
  background-color: #4a90e2 !important;
  border: solid 1px #4a90e2 !important;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  padding: 10px 16px;
  line-height: 1.3333333;
  font-size: 18px;
  font-weight: 500;
  display: block;
  width: 100%;
}
</style>