<!--template> 
  <div class="container">  
    <div class="row">
      <div class="col-md-12 col-md-offset-2">
            
        <div class="panel panel-default">
         
          <div class="panel-heading">Example Component</div>

          <div class="panel-body"> 
          <div class="row"> 
          <div v-if="loadingSelesai"> 
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
          <div v-else>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                   <div id="box2"></div>
                  <div class="caption">
                    <h3 id="box1"></h3>
                    <p id="box1"> </p>
                    <p><a href="#" class="btn btn-primary" role="button" >View!</a> <a href="#" class="btn btn-default" role="button">Buy!</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           Data from Parent is {{exampleData}}
          </div>
          <div>
            <child :toChild="toChild"  :fullName="fullName" :nilaiBaru="nilaiAwal"/>  <!--br untuk memanggil page child gunakan take serpti ini , gunakan attribute untuk mengirimkan data ke child -->
            <!--br gunakan hanya satu tag untuk 1page child yang sama>
          </div>
         <br> 
         <button v-on:click="tambah()" v-bind:disabled="nilaiAwal > 9" >+</button> <!--function untuk menonaktifkan buttom bisa juga untuk clas dan lainnya>
         
         <input type="Number" v-model="nilaiAwal"/> 
          <button v-on:click="kurang()" v-bind:disabled="nilaiAwal <2">-</button> 
          
          <!-- table>  
            <th v-for="(value,key) in gambar[1]" :key="key" ><tr>{{key}}</tr> 
            </th>
            <tbody v-for="x in gambar" :key="x.id"><td>{{ x.userId}}</td>
            <td>{{ x.format}}</td>
            <td>{{ x.width }}</td>
            <td><img v-bind:src="'https://picsum.photos/'+x.filename" style="width: 10%;height: auto;" ></td>
            <td>{{ x.height}}</td>
            <td>{{ x.filename}}</td>
            <td>{{ x.if}}</td>
            <td>{{ x.author}}</td>

            </tbody>
            
          </table> 
            
          
         <div>
            <table>  
              <th v-for="(value,key) in info[1]" :key="key" >
                <tr>{{key}}</tr> 
              </th>
              <tbody v-for="x in info.slice(0,5)" :key="x.id">
                <td>{{ x.userId}}</td>
                <td>{{ x.id }}</td>
                <td>{{ x.title }}</td>
                <td  :class="[x.completed == true ? 'trueColor':'falseColor' ]"  >{{ x.completed }} </td>
              </tbody>
             </table>
            </div>

        </div>

      </div>
    </div>
  </div>
</template-->
<template>
  <div class="container-fluid">
    <h1>Blank Page</h1>
    <p> {{store.state}} </p>
</div>
</template>

<script>
  import child from './child.vue' //deklarasi file child, from lokasi direktori file child berada ./ artinya masih berada dalam satu direktori
  export default {
    mounted() {
      console.log('Component mounted.'),
     /* axios
        .get('https://jsonplaceholder.typicode.com/todos') //get methode request bersifat ASCY
         //callback dari get
        .then(response =>(this.info=response.data)),
      axios
        .get('https://picsum.photos/list')
        .then(response=>(this.gambar=response.data)), */
      axios
        .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
        .then(response =>(this.nasa=response.data))
        .finally(()=>(this.loadingSelesai=true))
    },
    components:{ //nama file anak yang akan digunakan atau dikirimin data
      child
    },
    data(){
      return{
        exampleData:100,
        toChild:123,
        firstName:"steven",
        lastName:"Bangun", 
        nilaiAwal:4,
        info:[],
        gambar:[],
        nasa:[],
        loadingSelesai:false
       
      }
    },
    computed:{ //fungsi komputasi dikerjakan disni, 
      fullName: function(){ //berlaku sebagai objek yang akan di panggil di view
        return this.firstName+' '+this.lastName
      }
    },
    methods:{
      tambah: function(){
       this.nilaiAwal+=1
      },
      kurang:function(){
       return this.nilaiAwal-=1 //return tidka mepengaruhi
      }

    }
  }

  import Vuex from 'vuex'
  //vuex
  const store = new Vuex.Store({
    state:{
      count:0
    },
    mutations:{
      increment(state){
        state.count++
      }
    }
  })


</script>
<style>
  .trueColor{
    color:green
  }
    
  .falseColor{
    color:red
    }
 
		
			#box1{
				width:330px;
				height:30px;
				background:#DCDCDC;
			}
			#box2{
				width:330px;
				height:300px;
				background:#DCDCDC;
			}
			 
</style>
