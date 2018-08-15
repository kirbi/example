//file state

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state={
    data1:{}
}
//untuk mengirim data1 ke index.vue / agar ke file yg membutuhkan
export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}
