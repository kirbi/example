//file state

import action from './action'
import mutation from './mutation'
import getters from './getters'

const state={
    data1:{}
}
//untuk mengirim data1 ke index.vue / agar ke file yg membutuhkan
export default{
    namespaced:true,
    state,
    action,
    mutation,
    getters
}
