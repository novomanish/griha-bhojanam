<template>

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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
