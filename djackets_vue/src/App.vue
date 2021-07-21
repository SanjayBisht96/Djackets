<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Djackets</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="true"
         data-target="navbar-menu" @click="showMobileMenu = ! showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
          <div class="navbar-end">
            <router-link to="/summer" class="navbar-item"><strong>Summer</strong></router-link>
            <router-link to="/winter" class="navbar-item"><strong>Winter</strong></router-link>

            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/log-in" class="button is-light">LogIn</router-link>
                <router-link to="/cart" class="button is-success">
                  <span class="icon"><i class="fas fa-shopping-cart"/></span>
                  <span>Cart</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </nav>
  <section class="section">
    <router-view/>
  </section>

  <footer>
    <div class="has-text-centered">Copyright (c) 2021</div>
  </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
};

</script>

<style lang="scss">
@import '../node_modules/bulma'
</style>
