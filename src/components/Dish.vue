<template>
  <div>
    <v-list two-line>
      <template v-for="item in dishes">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name" class="capitalize"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon v-on:click="remove(item)">
              <v-icon>close</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>

    <v-form v-model="valid" ref="form">
      <v-text-field
        label="Dish Name"
        v-model="name"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-btn
        @click="submit"
        :disabled="!valid"
      >
        add
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
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
        (v) => !!v || 'Name is required'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.$firestore.dishes.add({
            name: this.name
          })
        }
        this.clear()
      },
      remove (item) {
        this.$firestore.dishes.doc(item['.key']).delete()
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
