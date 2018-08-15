<template>
    <div>
        <h1>This From Child Componnent</h1>
        <p>{{toChild}}</p>
        <p>{{fullName}}</p>
        <p>{{nilaiBaru+3}}</p>
        <br> 
    
    </div>
</template>
<script>
export default { 
    props:{
        toChild:{
            type:Number,
            default:''
            }, //mengenali data yang dikirim dari parents
        fullName:{
            type:String,
            default:''
        },
        nilaiBaru:{
            type:Number, 
            default:0
        }
    } 
}
</script>
<style>

</style>


