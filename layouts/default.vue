<template>
  <div>
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
            </b-dropdown-form
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
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


</style>
