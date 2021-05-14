<template>
  <div class="app">
    <h1>KYLMIK</h1>
    <h5> AVA MIND </h5>
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
                 :max-height="250"
                 style="width: 509px; margin-right: auto; margin-left: auto; "
    >
    </multiselect>
    <br>
    <button class="btn" v-on:click="sendIngredients"><img alt="Vue logo" src="../assets/kylmikgif.gif"
                                                          onMouseOver="this.style.cursor='pointer'"></button>
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
          grupid: 'Puu ja juurviljad',
          koostisained: [{ingredient_name: 'Porgand', ingredient_id: 1},
            {ingredient_name: 'Kaalikas', ingredient_id: 29},
            {ingredient_name: 'Must Pipar', ingredient_id: 28},
            {ingredient_name: "kartul", ingredient_id: 3},
            {ingredient_name: "sibul", ingredient_id: 14},
            {ingredient_name: "tomat", ingredient_id: 15},
            {ingredient_name: "kurk", ingredient_id: 16},
            {ingredient_name: "paprika", ingredient_id: 23},
            {ingredient_name: "küüslauk", ingredient_id: 27},
            {ingredient_name: "punane kapsas", ingredient_id: 35},
            {ingredient_name: "avokaado", ingredient_id: 37},
            {ingredient_name: "bataat", ingredient_id: 39},
            {ingredient_name: "oad", ingredient_id: 40},
            {ingredient_name: "mais", ingredient_id: 48},
            {ingredient_name: "banaan", ingredient_id: 53},
            {ingredient_name: "suvikõrvits", ingredient_id: 64},
            {ingredient_name: "peet", ingredient_id: 73},
            {ingredient_name: "redis", ingredient_id: 79},
            {ingredient_name: "sidrun", ingredient_id: 80},
            {ingredient_name: "mango", ingredient_id: 81},
            {ingredient_name: "uba", ingredient_id: 88},
            {ingredient_name: "kapsas", ingredient_id: 7},
            {ingredient_name: "pähklid", ingredient_id: 78},
          ]
        }, {
          grupid: 'Piimatooted',
          koostisained: [{ingredient_name: "juust", ingredient_id: 2},
            {ingredient_name: "või", ingredient_id: 6},
            {ingredient_name: "piim", ingredient_id: 9},
            {ingredient_name: "hapukoor", ingredient_id: 22},
            {ingredient_name: "feta juust", ingredient_id: 51},
            {ingredient_name: "toorjuust", ingredient_id: 57},
            {ingredient_name: "kookospiim", ingredient_id: 68},
            {ingredient_name: "keefir", ingredient_id: 76},
            {ingredient_name: "jäätis", ingredient_id: 59},
            {ingredient_name: "kitsejuust", ingredient_id: 66},
          ]
        },
        {
          grupid: 'Lihatooted',
          koostisained: [{ingredient_name: "kanaliha", ingredient_id: 11},
            {ingredient_name: "sealiha", ingredient_id: 12},
            {ingredient_name: "viinerid", ingredient_id: 17},
            {ingredient_name: "kala", ingredient_id: 19},
            {ingredient_name: "veiseliha", ingredient_id: 20},
          ]
        },
        {
          grupid: 'Kuivained',
          koostisained: [{ingredient_name: "jahu", ingredient_id: 8},
            {ingredient_name: "makaronid", ingredient_id: 13},
            {ingredient_name: "riis", ingredient_id: 18},
            {ingredient_name: "suhkur", ingredient_id: 21},
            {ingredient_name: "sool", ingredient_id: 26},
            {ingredient_name: "taco tasku", ingredient_id: 34},
            {ingredient_name: "tortilja lehed", ingredient_id: 43},
            {ingredient_name: "nacho krõpsud", ingredient_id: 47},
            {ingredient_name: "maisitärklis", ingredient_id: 84},
            {ingredient_name: "tatar", ingredient_id: 85},
            {ingredient_name: "oder", ingredient_id: 86},
            {ingredient_name: "tang", ingredient_id: 87},
            {ingredient_name: "till", ingredient_id: 89},
          ]
        },
        {
          grupid: 'Vegan',
          koostisained: [{ingredient_name: "taimne hakkliha", ingredient_id: 33},
          ]
        }, {
          grupid: 'Muud',
          koostisained: [
            {ingredient_name: "leib", ingredient_id: 5},
            {ingredient_name: "sai", ingredient_id: 4},
            {ingredient_name: "muna", ingredient_id: 10},
            {ingredient_name: "oliiviõli", ingredient_id: 24},
            {ingredient_name: "tomatipüree", ingredient_id: 25},
            {ingredient_name: "lehtsalat", ingredient_id: 36},
            {ingredient_name: "veiseliha", ingredient_id: 38},
            {ingredient_name: "koriander", ingredient_id: 41},
            {ingredient_name: "salsal", ingredient_id: 42},
            {ingredient_name: "bbq kaste", ingredient_id: 44},
            {ingredient_name: "puljongi kuubikud", ingredient_id: 45},
            {ingredient_name: "creme fraiche", ingredient_id: 46},
            {ingredient_name: "päikesekuivatatud tomatid", ingredient_id: 49},
            {ingredient_name: "spinat", ingredient_id: 50},
            {ingredient_name: "basiilik", ingredient_id: 52},
            {ingredient_name: "šokolaad", ingredient_id: 54},
            {ingredient_name: "tomatipüree", ingredient_id: 55},
            {ingredient_name: "hapukoor", ingredient_id: 56},
            {ingredient_name: "münt", ingredient_id: 58},
            {ingredient_name: "külmutatud marjad", ingredient_id: 60},
            {ingredient_name: "kookosõli", ingredient_id: 61},
            {ingredient_name: "laimimahl", ingredient_id: 62},
            {ingredient_name: "seen", ingredient_id: 63},
            {ingredient_name: "baklazaan", ingredient_id: 65},
            {ingredient_name: "jääsalat", ingredient_id: 67},
            {ingredient_name: "karri", ingredient_id: 69},
            {ingredient_name: "muskaatkõrvits", ingredient_id: 70},
            {ingredient_name: "loorberileht", ingredient_id: 71},
            {ingredient_name: "sidrunikoor", ingredient_id: 72},
            {ingredient_name: "tähtaniis", ingredient_id: 74},
            {ingredient_name: "gaseeritud vesi", ingredient_id: 75},
            {ingredient_name: "palsamiäädikas", ingredient_id: 77},
            {ingredient_name: "mesi", ingredient_id: 82},
            {ingredient_name: "skyr", ingredient_id: 83},
          ]
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
  padding: 1.8%;
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
  animation: running;
  color: brown;

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

