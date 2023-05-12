<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <p class="title is-4" id="heading">Find Your Dream Job Today</p>
        <p class="subtitle ">
            Apply for any Vacancies below
        </p>
      </div>
    </section>
    <NewVacancy @save="handlerSubmit" />
    <VacancyComp v-for='vacancy in vacancies' :key="vacancy.id" :vacancy='vacancy' @delete='deleteHandler'  />
  </div>
</template>

<script>
import NewVacancy from '../components/NewVacancy.vue'
import VacancyComp from '../components/VacancyComp.vue'
import {vacancies} from '../data'

export default {
  name: "HompComp",
  data(){
     
      return{
        vacancies
      }
  },
  
  components:{
    NewVacancy,
    VacancyComp
  },
  methods:{
    handlerSubmit(formDetails){
      console.log(formDetails,"FormDetails");
      this.vacancies.unshift(formDetails)

    },
    deleteHandler(vacancyId){
      console.log(vacancyId);

      this.vacancies = this.vacancies.filter( vacancy => vacancy.id !== vacancyId )

    }
  }


};
</script>

<style >

#heading{
    text-transform: uppercase;
}
</style>