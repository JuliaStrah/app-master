<template>
  <div id="authentication">

    <div id="authentication-form-wrapper">
      <form>

        <div id="authentication-form-header">
          <div style="font-size: 24px; font-weight: bold">Welcome back!</div>
          <div style="font-size: 12px; font-style: italic">Login to your account below</div>
        </div>

        <label>Username</label>
        <input type="text" class="uk-input"/>

        <label>Password</label>
        <input type="password" class="uk-input"/>

        <div id="authentication-form-button-group">
          <button type="submit" class="uk-button uk-button-primary">Sign in</button>
          <router-link to="/registration">Sign up</router-link>
        </div>

      </form>
    </div>

  </div>
</template>

<script src="./authentication.module.js"></script>