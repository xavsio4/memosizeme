<template>
  <div>
    <header>
      <b-navbar toggleable="lg" type="dark" :sticky="true" variant="dark">
      <b-navbar-brand href="#"><h3>MemoSizeMe</h3></b-navbar-brand>
      <b-navbar-nav class="float-left">
        <b-nav-item to="/"><fa :icon="['fas', 'child']" /> Body</b-nav-item>
        <b-nav-item to="/bike"
          ><fa :icon="['fas', 'bicycle']" /> Bike</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="float-right">
         <b-nav-item class="float-right" to="/about"><fa :icon="['fas', 'question-circle']" /> About</b-nav-item>
        <b-nav-item-dropdown class="float-right" no-caret>
          <template #button-content>
            <fa :icon="['fas', 'cog']" /> Settings
          </template>
          <b-dropdown-form> 
            <h6>Body metric</h6> 
            <div class="switcher">
             
              <div>cm &nbsp;</div> <b-form-checkbox v-model="checked" name="check-button" switch></b-form-checkbox><div>inch</div>
              </b-form-checkbox>
            </div>
            <h6>Bike metric</h6>
            <div class="switcher">
              <div>cm &nbsp;</div><b-form-checkbox v-model="checked_bike" name="check-button" switch></b-form-checkbox><div>inch</div>
              </b-form-checkbox>
            </div>
            <hr>
            <h6>Lang</h6>
            <ul class="list-inline list-unstyled">
              <li class="list-inline-item"><b-badge>en</b-badge></li>
              <li class="list-inline-item"><b-badge>fr</b-badge></li>
              <li class="list-inline-item"><b-badge>es</b-badge></li>
              </ul>
            </b-dropdown-form
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    </header>
    <Nuxt />
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked:true,
      checked_bike:false
    }
  },
  watch:{
    checked(newValue) {
      console.log(newValue)
      if (newValue === true)
      this.$store.commit('selectedBodyMetric', 'cm')
      else this.$store.commit('selectedBodyMetric', 'inch')
    },
    checked_bike(newValue) {
      console.log(newValue)
      if (newValue === true)
      this.$store.commit('selectedBikeMetric', 'cm')
      else this.$store.commit('selectedBikeMetric', 'inch')
    },

  }
}
</script>

<style scope>
html {
  background-color: #202124!important;
  color:#eee!important;
  
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

header {
  margin:0px 0 16px 0;
}

.switcher {
  display: flex;
  margin:-9px 0 9px 0;
}

.dropdow-menu li {
  background-color:#202124!important ;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.col {
margin:6px 0;
}

.widget {
  background-color: #000;
  padding:8px;
  border-radius:6px;
  width: 324px;
}

.widget h4 {
  margin-bottom: -14px;
}


input[type=number] {
  padding-left:6px;
  background-color: dimgray;
  border-radius: 4px;
  color:white;
  font-weight: 600;

  -webkit-box-flex: 1;
  width: 25%;
  min-width: 10%;
}


</style>
