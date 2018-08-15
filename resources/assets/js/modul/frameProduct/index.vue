<template> 
  <div class="container">  
    <div class="row">
      <div class="col-md-12">
            
        <div class="panel panel-default">
          <div class="panel-heading">Example Component</div>
          <div class="panel-body"> 
            <div class="row"> 
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img :src="nasa.url"  >
                  <div class="caption">
                    <h3>{{nasa.title}}</h3>
                    <p>{{nasa.explanation}}</p>
                    <p><a href="#" class="btn btn-primary" role="button">view</a> <a href="#" class="btn btn-default" role="button">Buy!</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>

      </div>
    </div>
</div>
</template>

<script>
import store from './store'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'FrameProduct',
  created(){
    const STORE_KEY='$_frameProduct';
    if(!(STORE_KEY in this.$store._modules.root._children)){ //mengecek store dengan nama store_key
        this.$store.registerModule(STORE_KEY,store)
    }
  },
  mounted(){
    this.$store.dispatch('$_frameProduct/getData')
  }, 
  computed:{
    ...mapGetters({
        nasa:'$_frameProduct/data1'  //mengganti nnama data
    })
  }
}
</script>
