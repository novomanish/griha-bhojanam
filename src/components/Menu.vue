<template>
  <v-btn color="primary" :to="{name:'Dish'}">Dishes ({{dishes.length}})</v-btn>
</template>

<script>
  import firestore from '../firestore'

  export default {
    name: 'Dummy',
    data () {
      return {
        msg: 'Dummy'
      }
    },
    firestore: {
      // Collection
      dishes: firestore.collection('dish'),
      orders: firestore.collection('order'),
      items: firestore.collection('item')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
