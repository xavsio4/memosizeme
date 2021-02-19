<template>
  <div>
      <b-navbar toggleable="lg" type="dark" :sticky="true" variant="dark">
      <b-navbar-brand href="#"><h3>MemoSizeMe</h3></b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="/"><fa :icon="['fas', 'child']" /> Body</b-nav-item>
        <b-nav-item href="/bike"
          ><fa :icon="['fas', 'bicycle']" /> Bike</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="pull-right">
        <b-nav-item-dropdown no-caret>
          <template #button-content>
            <fa :icon="['fas', 'cog']" />
          </template>
          <b-dropdown-form> 
            <div>
              cm<b-form-checkbox v-model="checked" name="check-button" switch></b-form-checkbox>inch
              </b-form-checkbox>
            </div>
            <div>
              cm<b-form-checkbox v-model="checked_bike" name="check-button" switch></b-form-checkbox>inch
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
