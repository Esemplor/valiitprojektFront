<template>
  <div class="about">
    <h1>Kylmik.ee</h1>
    <h2>Vali koostisosad</h2>
    <input type="checkbox" id="kartul" value = 3 v-model="checkedIngredients">
    <label for="kartul">Kartul</label>
    <input type="checkbox" id="sai" value = 4 v-model="checkedIngredients">
    <label for="sai">Sai</label>
    <input type="checkbox" id="juust" value = 2 v-model="checkedIngredients">
    <label for="juust">Juust</label>
    <br>
    <button v-on:click="sendIngredients">Saada</button>
<!--<span>Valitud ingredient_id'd arrays: {{ checkedIngredients }}</span>-->
    <br>
  </div>

</template>
<script>

function sendIngredients() {
  this.$http.post('localhost:8080/stuff/recipe', {
    checkedIngredients: this.checkedIngredients,
  })
      .then(function (response) {
        console.log(response)

      })
  //     .then(response => {
  //   this.registerResponseString = 'You are registered!'
  // })
  //     .catch(function (error) {
  //       alert("Konto juba loodud!")
  //     })

}

export default {
  data: function () {
    return {
      'checkedIngredients' : []
    }
  },
  methods: {
    'sendIngredients' : sendIngredients

  }
}
</script>