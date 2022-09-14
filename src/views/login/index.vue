<template>
  <t-space class="login-container">
    <t-form class="login-form" :label-width="0">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <t-form-item>
        <t-input size="large" placeholder="请输入账户名" name="username" type="text">
          <template #prefix-icon>
            <t-icon size="large" name="user" />
          </template>
        </t-input>
      </t-form-item>
      <!-- password -->
      <t-form-item>
        <t-input size="large" type="password" placeholder="请输入密码">
          <template #prefix-icon>
            <t-icon size="large" name="lock-on" />
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
import {} from 'vue';
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
