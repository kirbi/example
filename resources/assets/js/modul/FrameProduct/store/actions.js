//untuk action

import axios from 'axios'

//function get data
const getData = function getData(context){
    axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
        .then(response =>{
            context.commit('UPDATE_DATA1',response.data) //response.data untuk mengirim data dalam bentuk objek
        });
}
export default{
    getData
}