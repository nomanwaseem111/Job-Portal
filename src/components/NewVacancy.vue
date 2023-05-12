<template>
  <div>
    <div class="box">
      <h1 class="title is-6">Create a Vacancy</h1>
      <form @submit="submitHandler">
        <input class="input" type="text" placeholder="Job Title" v-model='formData.title' required />
        <input class="input" type="text" placeholder="Company Name" v-model='formData.company' required />

        <input class="input" type="text" placeholder="City Name" v-model='formData.city' required />

        <textarea class="input" type="text" placeholder="Description" v-model='formData.description' required />
        <button class="button is-primary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewVacancy",
  data() {
    return {
      formData: {
        title:'',
        company:'',
        city:'',
        description:''
      },
    };
  },
  methods:{
     
     submitHandler(e){
        e.preventDefault()
        this.$emit('save',{...this.formData,id:new Date().getTime().toString()})
        this.formData.title = ''
        this.formData.company = ''
        this.formData.city = ''
        this.formData.description = ''
     
     }
      
  }
};
</script>

<style>
input,
textarea {
  margin-bottom: 20px;
}
</style>