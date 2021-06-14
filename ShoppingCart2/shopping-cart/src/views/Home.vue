<template>
  <div class="home">
    <div class="ui vertical segment">
      <div class="ui transparent icon input">
      <input type="search" placeholder="Entrez votre recherche" v-model="filter" >
      <i class="search icon"></i>
    </div>
    </div>
    <br>
    <div style="display : flex; justify-content: space-around;">
      <div class="ui link cards" >
        <Article  v-for="item in filteredList" :informations="item" :key="item.name"/>
      </div>
  <div class="ui blue inverted segment" style="margin-right : 20px; width : 800px; height : 500px;">
  <div class="ui divided items" >
  <div class="item">
    <div class="ui tiny image">
      <img src="https://www.cleor.com/media/catalog/product/cache/98234b6f098e120d7f728f93649aac55/d/z/dz4283_010_bijcrpbl97pknxik.jpg">
    </div>
    <div class="middle aligned content">
      Content A
    </div>
  </div>
  <div class="item">
    <div class="ui tiny image">
      <img src="https://www.cleor.com/media/catalog/product/cache/98234b6f098e120d7f728f93649aac55/d/z/dz4283_010_bijcrpbl97pknxik.jpg">
    </div>
    <div class="middle aligned content">
      Content B
    </div>
  </div>
  <div class="item">
    <div class="ui tiny image">
      <img src="https://www.cleor.com/media/catalog/product/cache/98234b6f098e120d7f728f93649aac55/d/z/dz4283_010_bijcrpbl97pknxik.jpg">
    </div>
    <div class="middle aligned content">
      Content C
    </div>
  </div>
  </div>
</div>
</div>
</div>
</template>

<script>
// @ is an alias to /src
import Article from '@/components/Article.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Article
  },
  computed: {
        ...mapState(['listeArticles']),
       filteredList (){
         if (this.filter.length!=0) return this.listeArticles.filter( (item)=> {
           if ((item.nom.toLowerCase()).indexOf(this.filter.toLowerCase())!==-1) return true
           else return false
          
         });
         else return this.listeArticles
       } ,
  },
  data () {
    return {
     
      filter : ""
      
    }
  },
  
  methods: {
    
  }
  
}
</script>
