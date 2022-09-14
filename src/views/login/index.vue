<template>
  <t-space class="login-container">
    <t-form
      class="login-form"
      :label-width="0"
      :data="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <t-form-item name="username">
        <t-input
          v-model="loginForm.username"
          size="large"
          placeholder="请输入账户名"
          type="text"
        >
          <template #prefix-icon>
            <span class="svg-container">
              <svg-icon icon="user"></svg-icon>
            </span>
            <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon> -->
            <!-- <t-icon size="large" name="user" /> -->
          </template>
        </t-input>
      </t-form-item>
      <!-- password -->
      <t-form-item name="password">
        <t-input
          v-model="loginForm.password"
          size="large"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix-icon>
            <span class="svg-container">
              <svg-icon icon="password"></svg-icon>
            </span>
          </template>
        </t-input>
      </t-form-item>

      <!-- 登录按钮 -->
      <t-form-item>
        <t-button size="large" block>登 录</t-button>
      </t-form-item>
    </t-form>
  </t-space>
</template>

<script setup>
import { ref } from 'vue';
import { validatePassword } from './rules';

const loginForm = ref({
  username: 'super-admin',
  password: '123456',
});
// 验证规则
const loginRules = ref({
  username: [
    {
      require: true,
      message: '用户名为必填项',
    },
  ],
  password: [
    {
      require: true,
      validate: validatePassword(),
    },
  ],
});
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .svg-container {
    padding: 6px 5px 6px 5px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
