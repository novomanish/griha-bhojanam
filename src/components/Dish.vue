<template>
  <div>
    <v-list two-line>
      <template v-for="item in dishes">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name" class="capitalize"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>

    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="Dish Name"
        v-model="name"
        :rules="nameRules"
        :counter="20"
        required
      ></v-text-field>
      <v-btn
        @click="submit"
        :disabled="!valid"
      >
        submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import firestore from '../firestore'

  export default {
    name: 'Dish',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    },
    firestore: {
      // Collection
      dishes: firestore.collection('dish')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .capitalize {
    text-transform: capitalize;
  }
</style>
