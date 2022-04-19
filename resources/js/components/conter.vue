<template>
<button @click =" conter++ ">conter : {{conter}}</button>
</template>

<script>
export default {
        
    name:'Conter',

    data: ()=> ({
        conter:10,
    }),
}
</script>