<template>
    <div>
     <nav class="navbar"  role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Rozee.pk_logo.svg/2560px-Rozee.pk_logo.svg.png" alt="">
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item " to="/">
        Home
      </router-link>

      <router-link class="navbar-item " to="/vacancies">
        Vacancies
      </router-link>

    
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name:"NavbarComp"
    }
</script>

<style  scoped>


</style>