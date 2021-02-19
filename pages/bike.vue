<template>
<div>  

  <b-container>
   
    <h4><fa :icon="['fas', 'bicycle']" /> &nbsp;Bike</h4>
    <b-form>
    <b-row>
       <b-col>
        <div class="widget">
          <h4>Brand & model</h4>
          <hr color="#999"/>
          <b-form-group>
            
            <input  max="70" v-model="bike.brand" type="text" /> 
            </b-form-group>
            <hr color="#999"/>
          <b-form-group>
            <label>ID Number</label>
            <input  max="70" v-model="bike.id_number" type="text" /> 
            </b-form-group>
          
        </div>
      </b-col>
      <b-col>
        <div class="widget">
          <h4>wheels</h4>
          <hr color="#999"/>
          <b-form-group>
            <label>Size</label>
            <input maxlength="3" size="6" max="70" v-model="bike.wheels.size" type="number" /> {{metric}}
            </b-form-group>

            <b-form-group>
            <label>ETRTO</label>
            <input maxlength="3" size="6" max="70" v-model="bike.wheels.etrto" type="number" /> {{metric}}
            </b-form-group>

             <b-form-group>
            <label>Tubeless ?</label>
            <input maxlength="3" size="6" max="70" v-model="bike.wheels.tubeless" type="number" /> {{metric}}
            </b-form-group>

            <b-form-group>
            <label>Max. Pressure</label>
            <input maxlength="3" size="6" max="70" v-model="bike.wheels.pressure" type="number" /> {{metric}}
            </b-form-group>
          
        </div>
      </b-col>
      
      <b-col>
        <div class="widget">
          <h4>Frame Size</h4>
          <hr color="#999"/>
          <b-form-group>
            
            <input maxlength="3" size="6" max="70" v-model="bike.size" type="number" /> 
            </b-form-group>
          
        </div>
      </b-col>

      <b-col>
        <div class="widget">
          <h4>Id Number</h4>
          <hr color="#999"/>
          <b-form-group>
            <label>Head size</label>
            <input maxlength="3" size="12" max="70" v-model="bike.id_number" type="number" /> {{metric}}
            </b-form-group>
          
        </div>
      </b-col>

      
    </b-row>
    </b-form>
  </b-container>
    <b-navbar toggleable="lg" type="dark" sticky="true" fixed="bottom" variant="dark">
    <b-navbar-nav>
        <b-nav-item class="btn btn-success" @click="save()">Save</b-nav-item>
        
      </b-navbar-nav>
      <b-navbar-nav class="pull-right">
         <b-nav-item href="/">body</b-nav-item>
        <b-nav-item  href="/bike">bike</b-nav-item>
      </b-navbar-nav>
     </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      bike:{
        brand:'',
        wheels: {
          size:'',
          etrto:'',
          pressure:'',
          tubeless: 0,
        },
        size:55,
        id_number:''
      },
    }
  },
  mounted () {
    this.getStorage()
  },
  computed: {
    ...mapState({
      metric: (state) => {
        return state.bike_metric
      },
      
    })
  },
  methods: {
    save() {
         this.$storage.setLocalStorage("bike", this.bike);
         this.$bvToast.toast('Saved', {
        id: 'offline',
        toaster: 'b-toaster-bottom-right',
        noCloseButton: true,
        solid: true,
        noAutoHide: false,
        variant: 'success',
      })
    },
    getStorage() {
      if (this.$storage.getLocalStorage("bike")) {
        this.bike = this.$storage.getLocalStorage("bike");
        this.$bvToast.toast('Local data loaded', {
          id: 'offline',
          toaster: 'b-toaster-bottom-right',
          noCloseButton: true,
          solid: true,
          noAutoHide: false,
          variant: 'info',
        })
      } 
    }
  }
}
</script>

<style>

header {
  margin:16px 0 14px 0;
}

.col {
margin:6px 0;
}

.widget {
  background-color: #000;
  padding:8px;
  border-radius:6px;
  width: 320px;
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
