<template>
 <div>
  <div class="box mt-4 mb-4">
    <h1 class="title is-5">{{vacancy.title}}</h1>
    <p class="mt-4">{{vacancy.company}}</p>
    <p class="mt-4">{{vacancy.city}}</p>
    <p class="mt-4">
     {{vacancy.description}}
    </p>
    <div class="is-flex is-justify-content-space-between">
        <button class="button is-primary mt-4" >Apply</button>
    <button class="button is-danger mt-4" @click='deleteHandler(vacancy)'>Delete</button>
    </div>

  </div>



 



  </div>
</template>

<script>
export default {
  name: "VacancyComp",
  props:['vacancy'],
  methods:{
    deleteHandler(vacancy){

      this.$emit('delete',vacancy.id )
       
     }
  }
};
</script>

<style lang="scss" scoped>
</style>