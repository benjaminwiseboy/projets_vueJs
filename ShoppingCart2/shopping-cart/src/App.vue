<template>
  
  <div class="ui secondary pointing menu">
    <a class="active item">
    <router-link to="/">Home</router-link>
    </a>
    <a class="item">
      <router-link to="/about">About</router-link>
    </a>
  </div>
    
 <router-view/>
</template>
<style src="../src/assets/semantic/semantic.min.css">
</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
