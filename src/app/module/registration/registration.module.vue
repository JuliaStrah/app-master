<template>
  <div id="registration">

    <div id="registration-form-wrapper">
      <form>

        <div id="registration-form-header">
          <div style="font-size: 24px; font-weight: bold">Registration</div>
        </div>

        <label>Username</label>
        <input type="text" class="uk-input"/>

        <label>Password</label>
        <input type="password" class="uk-input"/>

        <div id="registration-form-button-group">
          <button type="submit" class="uk-button uk-button-primary">Sign Up</button>
          <a href="#">Sign in</a>
        </div>

      </form>
    </div>

  </div>
</template>

<script src="./registration.module.js"></script>