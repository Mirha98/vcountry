<template>
    <div v-for="country in country_list" :key="country.id" class="grid grid-cols-3 gap-3 bg-indigo-100">
        <div>

        </div>
        <div>
            <RouterLink :to="{name:'countryDetail',params: {id:country.id}}" class="mycountrylist">{{country.country}}</RouterLink>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            country_list : [],
        }
    },
    mounted(){
        fetch('http://localhost:3000/country_list')
        .then(res => res.json())
        .then(data => this.country_list = data)
    }
}
</script>

<style>

.mycountrylist{
    background-color: crimson;
    padding: 10px 0;
    margin-bottom: 100px;
}

</style>