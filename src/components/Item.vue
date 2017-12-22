<template>
  <div>
    <v-list two-line>
      <template v-for="item in items">
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
        label="Item Name"
        v-model="name"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-list two-line>
        <template v-for="item in selectedDishes">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="capitalize">
                {{item.name}}
              </v-list-tile-title>
              <v-select
                :items="[1,2,4,5,6]"
                v-model="item.serving"
                label="Servings"
              ></v-select>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon v-on:click="removeDish(item)">
                <v-icon>close</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>

      <v-select
        label="Select Dishes"
        v-bind:items="dishes"
        item-text="name"
        v-model="selectedDishes"
        multiple
        autocomplete
        max-height="400"
        hint="Pick dishes to include"
        persistent-hint
        @input="onSelectDish"
      ></v-select>
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
    name: 'Item',
    data: () => ({
      valid: true,
      name: '',
      selectedDishes: [],
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
        this.$firestore.items.doc(item['.key']).delete()
      },
      clear () {
        this.$refs.form.reset()
      },
      removeDish (item) {
//        this.selectedDishes.
      },
      onSelectDish () {
        if (this.selectedDishes.length === 1 && !this.name) {
          this.name = this.selectedDishes[0].name
        }
      }
    },
    firestore: {
      // Collection
      items: firestore.collection('item'),
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
