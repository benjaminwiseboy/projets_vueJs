<template>

    <div class="card">
      
      <img :src="informations.imgUrl">

       
    <div class="content">
      <div class="header">{{informations.nom}}</div>
      <span class="center floated"> <h2>{{informations.prix}} $</h2>  </span>
    </div>
    <div class="extra content">
      <span style="display : inline-block; margin : 10px;"> <i class="heart  icon"  @click="toogle" :class="like"></i></span>
     <span  style="display : inline-block; margin-left : 50px;">  <i class="shopping cart icon" @click="test"></i></span>
     
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Article',
  props: ['informations'],
  data () {
    return {
      favori : false,
    }
  },
  computed : {
    ...mapState(['listeArticles']),
    element(){
      return this.listeArticles.filter(item=> item.id==this.informations.id)
    },
    like(){
      
      if (!this.favori)
      {
        return "outline"
      } 
      return ""
    },
  },
  methods: {
   ...mapActions(['liker']),
   toogle()
   {
     this.liker(this.informations.id)
     this.favori=!this.favori
   }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/semantic/semantic.min.css">
</style>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
