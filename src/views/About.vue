<template>
  <div class="app">
    <label class="typo__label">Vali koostisosad</label>
    <br>
    <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Otsi koostisosa"
                 label="ingredient_name"
                 track-by="ingredient_id" :options="options" :multiple="true" group-values="koostisained"
                 group-label="grupid"
                 :close-on-select="false"
                 :group-select="true"
                 selectLabel="Vajuta ENTER, et valida"
                 deselectLabel="Vajuta ENTER, et tühistada"
                 selectedLabel="Valitud"
                 :max-height="150"
    >
    </multiselect>
    <br>
    <button class="btn" v-on:click="sendIngredients"><img alt="Vue logo" src="../assets/kylmikgif.gif"></button>
    <div class="followFont">
      <div v-for="row in getRecipesResponse" class="col">
        <div>
          <link-prevue :onButtonClick="onClick" :url="row.output"></link-prevue>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Multiselect from 'vue-multiselect'
import LinkPrevue from 'link-prevue'


function sendIngredients() {
  let x = this.value.map(y => y.ingredient_id);
  this.$http.get('http://localhost:8080/stuff/recipe?a=' + x)
      .then(response => {
        this.getRecipesResponse = response.data
        this.testLink = response.data.map(({output}) => output)
      })
}

function updateRecipeCount() {
  this.$http.get('http://localhost:8080/stuff/recipeCount?a=' + 1)

}


export default {
  components: {
    LinkPrevue,
    Multiselect

  },
  data() {
    return {
      value: '',
      options: [
        {
          grupid: 'Piimatooted',
          koostisained: [{ingredient_name: 'Porgand', ingredient_id: 1},
            {ingredient_name: 'Kaalikas', ingredient_id: 29},
            {ingredient_name: 'Must Pipar', ingredient_id: 28},
            {ingredient_name: "kartul", ingredient_id: 3},
            {ingredient_name: "sai", ingredient_id: 4},
          ]

        }, {
          grupid: 'Muud',
          koostisained: [{ingredient_name: "juust", ingredient_id: 2},
            {ingredient_name: "leib", ingredient_id: 5},
            {ingredient_name: "või", ingredient_id: 6},
            {ingredient_name: "kapsas", ingredient_id: 7},
            {ingredient_name: "jahu", ingredient_id: 8},
            {ingredient_name: "piim", ingredient_id: 9},
            {ingredient_name: "muna", ingredient_id: 10},
            {ingredient_name: "kanaliha", ingredient_id: 11},
            {ingredient_name: "sealiha", ingredient_id: 12},
            {ingredient_name: "makaronid", ingredient_id: 13},
            {ingredient_name: "sibul", ingredient_id: 14},
            {ingredient_name: "tomat", ingredient_id: 15},
            {ingredient_name: "kurk", ingredient_id: 16},
            {ingredient_name: "viinerid", ingredient_id: 17},
            {ingredient_name: "riis", ingredient_id: 18},
            {ingredient_name: "kala", ingredient_id: 19},
            {ingredient_name: "veiseliha", ingredient_id: 20},
            {ingredient_name: "suhkur", ingredient_id: 21},
            {ingredient_name: "hapukoor", ingredient_id: 22},
            {ingredient_name: "paprika", ingredient_id: 23},
            {ingredient_name: "oliiviõli", ingredient_id: 24},
            {ingredient_name: "tomatipüree", ingredient_id: 25},
            {ingredient_name: "sool", ingredient_id: 26},
            {ingredient_name: "küüslauk", ingredient_id: 27},]
        }
      ],
      'checkedIngredients': [],
      'getRecipesResponse': [],
      'result': [],
      'testLink': '',
      'linkArray': [],


    }
  },
  methods: {
    'sendIngredients': sendIngredients,
    'updateRecipeCount': updateRecipeCount,
    onClick(prevue) {
      console.log(prevue.url)
      this.$http.get('http://localhost:8080/stuff/recipeCount?a=' + prevue.url)
      window.open(prevue.url, '_blank');
    },
    // onSelect (option) {
    //   this.sendIngredients(option, value)
    // }

  }
}
</script>
<style>
.row {
  display: table

}

.col {
  float: left;
  padding: 1.9%;
  margin-left: auto;
  margin-right: auto;

}

div.block {
  overflow: hidden;
}

div.block label {
  width: 160px;
  display: block;
  float: initial;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

}

div.block .input {
  margin-left: 4px;
  float: left;
}

#about {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
  border: 5px dotted;
  padding: unset;

}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

