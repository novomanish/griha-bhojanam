<template>
  <div>
    <v-list two-line>
      <template v-for="item in items">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name" class="capitalize"></v-list-tile-title>
            <v-list-tile-sub-title>INR {{ item.price }}</v-list-tile-sub-title>
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
      <v-text-field
        label="Price"
        v-model="price"
        :rules="priceRules"
        required
      ></v-text-field>
      <v-list v-if="selectedDishes.length > 0">
        <template v-for="item in selectedDishes">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="capitalize">
                {{item.name}}
              </v-list-tile-title>

            </v-list-tile-content>
            <v-list-tile-action>
              <v-select
                :items="[1,2,3,4,5,6]"
                v-model="item.serving"
                label="Servings"
                style="width:100px"
              ></v-select>
            </v-list-tile-action>
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
        :items="dishesName"
        v-model="select"
        autocomplete
        clearable
        combobox
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
      price: 0,
      select: null,
      selectedDishes: [],
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      priceRules: [
        (v) => !!v || 'Price is required',
        (v) => !isNaN(v) || 'Price must be number'
      ]
    }),
    computed: {
      dishesName () {
        return this.dishes.map(dish => dish.name)
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.$firestore.items.add({
            name: this.name,
            price: this.price,
            dishes: this.selectedDishes
          })
        }
        this.clear()
      },
      remove (item) {
        this.$firestore.items.doc(item['.key']).delete()
      },
      clear () {
        this.$refs.form.reset()
        this.selectedDishes.splice(0, this.selectedDishes.length)
      },
      removeDish (item) {
        this.selectedDishes.splice(this.selectedDishes.indexOf(item), 1)
      },
      onSelectDish () {
        if (this.select && this.selectedDishes.every(dish => dish.name !== this.select)) {
          let dish = this.dishes.find(dish => dish.name === this.select)
          if (!dish) {
            dish = {
              'name': this.select
            }
            this.$firestore.dishes.add(dish)
          }
          dish.serving = 1
          this.selectedDishes.push(dish)
          if (this.selectedDishes.length === 1 && !this.name) {
            this.name = this.select
          }
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
