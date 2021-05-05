<template>
  <div class="about">
    <h1>Kylmik.ee</h1>
    <h2>Vali koostisosad</h2>
    <input type="checkbox" id="kartul" value=3 v-model="checkedIngredients">
    <label for="kartul">Kartul</label>
    <input type="checkbox" id="sai" value=4 v-model="checkedIngredients">
    <label for="sai">Sai</label>
    <input type="checkbox" id="juust" value=2 v-model="checkedIngredients">
    <label for="juust">Juust</label>
    <input type="checkbox" id="porgand" value=1 v-model="checkedIngredients">
    <label for="porgand">Porgand</label>
    <input type="checkbox" id="leib" value=5 v-model="checkedIngredients">
    <label for="leib">Leib</label>
    <input type="checkbox" id="või" value=6 v-model="checkedIngredients">
    <label for="või">Või</label>
    <input type="checkbox" id="kapsas" value=7 v-model="checkedIngredients">
    <label for="kapsas">Kapsas</label>
    <input type="checkbox" id="jahu" value=8 v-model="checkedIngredients">
    <label for="jahu">Jahu</label>
    <input type="checkbox" id="piim" value=9 v-model="checkedIngredients">
    <label for="piim">Piim</label>
    <input type="checkbox" id="muna" value=10 v-model="checkedIngredients">
    <label for="muna">Muna</label>
    <input type="checkbox" id="kanaliha" value=11 v-model="checkedIngredients">
    <label for="kanaliha">Kanaliha</label>
    <input type="checkbox" id="sealiha" value=12 v-model="checkedIngredients">
    <label for="sealiha">Sealiha</label>
    <input type="checkbox" id="makaronid" value=13 v-model="checkedIngredients">
    <label for="makaronid">Makaronid</label>
    <input type="checkbox" id="sibul" value=14 v-model="checkedIngredients">
    <label for="sibul">Sibul</label>
    <input type="checkbox" id="tomat" value=15 v-model="checkedIngredients">
    <label for="tomat">Tomat</label>
    <input type="checkbox" id="kurk" value=16 v-model="checkedIngredients">
    <label for="kurk">Kurk</label>
    <input type="checkbox" id="viinerid" value=17 v-model="checkedIngredients">
    <label for="viinerid">Viinerid</label>
    <input type="checkbox" id="riis" value=18 v-model="checkedIngredients">
    <label for="riis">Riis</label>
    <input type="checkbox" id="kala" value=19 v-model="checkedIngredients">
    <label for="kala">Kala</label>
    <input type="checkbox" id="veiseliha" value=20 v-model="checkedIngredients">
    <label for="veiseliha">Veiseliha</label>
    <input type="checkbox" id="suhkur" value=21 v-model="checkedIngredients">
    <label for="suhkur">Suhkur</label>
    <input type="checkbox" id="hapukoor" value=22 v-model="checkedIngredients">
    <label for="hapukoor">Hapukoor</label>
    <input type="checkbox" id="paprika" value=23 v-model="checkedIngredients">
    <label for="paprika">Paprika</label>
    <input type="checkbox" id="oliiviõli" value=24 v-model="checkedIngredients">
    <label for="oliiviõli">Oliiviõli</label>
    <input type="checkbox" id="tomatipüree" value=25 v-model="checkedIngredients">
    <label for="tomatipüree">Tomatipüree</label>
    <input type="checkbox" id="sool" value=26 v-model="checkedIngredients">
    <label for="sool">Sool</label>
    <input type="checkbox" id="küüslauk" value=27 v-model="checkedIngredients">
    <label for="küüslauk">Küüslauk</label>
    <input type="checkbox" id="pipar" value=28 v-model="checkedIngredients">
    <label for="pipar">Pipar</label>
    <input type="checkbox" id="kaalikas" value=29 v-model="checkedIngredients">
    <label for="kaalikas">Kaalikas</label>
    <br>
    <button v-on:click="sendIngredients">Saada</button>
    <span></span>
    <br>
    <table>
      <tr v-for="row in createAccountResponse">
        <td>{{ row.output }}</td>
        <td>{{ row.recipeName }}</td>
      </tr>
    </table>
  </div>

</template>
<script>

function sendIngredients() {
  this.$http.get('http://localhost:8080/stuff/recipe?a=' + this.checkedIngredients)
      .then(response => {
        this.createAccountResponse = response.data
      })
      .catch(response => {
        alert("Error")
      })
}


export default {
  data: function () {
    return {
      'checkedIngredients': [],
      'createAccountResponse': []
    }
  },
  methods: {
    'sendIngredients': sendIngredients

  }
}
</script>