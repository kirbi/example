<template>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Album</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            </tr>
        </thead>
        <tbody v-for="warna2 in warna" :key="warna2.id">
                <td>{{ warna2.albumId}}</td>
                <td>{{ warna2.id }}</td>
                <td>{{ warna2.title }}</td>
                <td ><img v-bind:src="warna2.thumbnailUrl"> </td>
        </tbody> 
    </table>
</template>
<script>
import store from './store'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'Warna',
  created(){
    const STORE_KEY='$_warna';
    if(!(STORE_KEY in this.$store._modules.root._children)){ //mengecek store dengan nama store_key
        this.$store.registerModule(STORE_KEY,store)
    }
  },
  mounted(){
    this.$store.dispatch('$_warna/getDataWarna')
  }, 
  computed:{
    ...mapGetters({
        warna:'$_warna/ragamWarna'  //mengganti nnama data
    })
  }
}
</script>

