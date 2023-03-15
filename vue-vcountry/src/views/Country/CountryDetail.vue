<template>

{{ id }}
<div v-if="country">
    <h1>This country name is {{ country.country }}</h1>
    <h3>The capital is {{ country.capital }}</h3>
</div>

<div v-else>
    <h2>No data</h2>
</div>

</template>

<script>

export default{
    props: ['id'],
    data(){
        return{
            country: null,
        }
    },
    mounted(){
        fetch('http://localhost:3000/country_list/'+ this.id)
        .then(res => res.json())
        .then(data => this.country = data)
        .catch(err => console.log(err.message))
    }
}

</script>