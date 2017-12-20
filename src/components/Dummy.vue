<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="item in items">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
  import fb from '../firebase'
  export default {
    name: 'Dummy',
    data () {
      return {
        msg: 'Dummy'
      }
    },
    firestore: {
      // Collection
      items: fb.collection('item')
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
