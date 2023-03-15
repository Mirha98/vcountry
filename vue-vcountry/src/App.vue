<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  methods:{
    back(){
      this.$router.go(-1)
    },
    next(){
      this.$router.go(1)
    },
    redirector(){
      this.$router.push({name:'home'})
    }
  }
}

</script>

<template>
  <header>
    <div class="grid grid-cols-3 gap-3 my-5">
      <div>
      </div>
      <div>
        <div>
          <RouterLink :to="{name:'home'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">Home</RouterLink>
          <RouterLink :to="{name:'about'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">About</RouterLink>
          <RouterLink :to="{name:'country'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">Country</RouterLink>
        </div>
        <div style="margin: 10px;">
            <button class="" style="background-color: palegreen; border:1px solid red; margin-right:20px" @click="back">Prev</button>
            <button class="" style="background-color: palegreen; border:1px solid red; margin-right:20px" @click="redirector">Redirect</button>
            <button class="" style="background-color: palegreen; border:1px solid red; margin-right:20px" @click="next">Next</button>
        </div>
      </div>
      <div>
      </div>

    </div>
  </header>

  <RouterView />
</template>

<style >

</style>
