<template>
  <div class="app">
    <h1>Kylmik.ee</h1>
    <label class="typo__label">Vali koostisosad</label>
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
    <!--    <pre class="language-json"><code>{{ value }}</code></pre>-->

    <!--    <h2>{{ testLink }}</h2>-->
    <button v-on:click="sendIngredients">Otsi retsepte</button>
    <div>
    <table border="1" style="border:1px solid black;margin-left:auto;margin-right:auto;">
      <tr v-for="row in getRecipesResponse">
        <!--         <td><a :href=row.output :id="testLink"> Link </a></td>-->
        <!--        <td>{{ row.recipeName }}</td>-->
        <td>
          <link-prevue :url="row.output"></link-prevue>
<!--          {{row.output}}-->
        </td>
      </tr>
    </table>
    </div>

    <!--    {{ testLink }}-->

  </div>

</template>
<script>
import Multiselect from 'vue-multiselect'
import LinkPrevue from 'link-prevue'

import getPreviewFromContent from 'link-preview-js'


function sendIngredients() {
  let x = this.value.map(y => y.ingredient_id);

  this.$http.get('http://localhost:8080/stuff/recipe?a=' + x)

      .then(response => {

        this.getRecipesResponse = response.data
        this.testLink = response.data.map(({output}) => output)
      })
  // .catch(response => {
  //   alert("Error")
  // })
}

function getArrayFromObject() {
  const entries = Object.entries(this.value);
  return entries;
}


export default {
  components: {
    LinkPrevue,
    Multiselect,
    getPreviewFromContent
  },
  data() {
    let urlTest = 'https://www.delfi.ee/';
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
      'linkArray': []


    }
  },
  methods: {
    'sendIngredients': sendIngredients,
    'getArrayFromObject': getArrayFromObject,
    onClick(prevue) {
      console.log('click', prevue.images, prevue.title, prevue.url, prevue.description)
    }
  }
}
</script>
<style>




#about {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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