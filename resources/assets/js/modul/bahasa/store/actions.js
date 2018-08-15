import axios from 'axios'

//function get data
const getDataWarna = function getDataWarna(context){
    axios 
        .get('https://jsonplaceholder.typicode.com/photos')
        .then(response =>{
            context.commit('RAGAM_WARNA',response.data) //response.data untuk mengirim data dalam bentuk objek
        });
}
export default{
    getDataWarna
}