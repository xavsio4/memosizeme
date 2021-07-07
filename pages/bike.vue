<template>
  <div>
    <b-container>
      <h4><fa :icon="['fas', 'bicycle']" /> &nbsp;Bike</h4>
      <b-form>
        <b-row>
          <b-col>
            <div class="widget">
              <h4>Brand & model</h4>
              <hr color="#999" />
              <b-form-group>
                <input max="80" v-model="bike.brand" type="text" />
              </b-form-group>
              <hr color="#999" />
              <b-form-group>
                <label>ID Number</label>
                <input max="80" v-model="bike.id_number" type="text" />
              </b-form-group>
              <b-form-group>
                <label>Frame Size</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="bike.size"
                  type="number"
                />
              </b-form-group>
              <b-form-group>
                <label>Factory weight</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="bike.wieght"
                  type="number"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col>
            <div class="widget">
              <h4>wheels</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Size</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="bike.wheels.size"
                  type="number"
                />
                {{ metric }}
              </b-form-group>

              <b-form-group>
                <label>ETRTO</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="bike.wheels.etrto"
                  type="number"
                />
                {{ metric }}
              </b-form-group>

              <b-form-group>
                <label>Tubeless ?</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="bike.wheels.tubeless"
                  type="checkbox"
                />
              </b-form-group>

              <b-form-group>
                <label>Max. Pressure</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="bike.wheels.pressure"
                  type="number"
                />
                bars/psi
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Frame metric</h4>
              <hr color="#999" />
              <b-form-group>
                <label>reach</label>
                <input
                  maxlength="3"
                  size="12"
                  max="70"
                  v-model="bike.reach"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Transmission</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Front</label>
                <input
                  maxlength="7"
                  size="12"
                  max="70"
                  v-model="bike.front_transmission"
                  type="text"
                  placeholder="46-30"
                />
                {{ metric }}
              </b-form-group>

              <b-form-group>
                <label>Rear</label>
                <input
                  maxlength="7"
                  size="12"
                  max="70"
                  v-model="bike.rear_transmission"
                  type="text"
                  placeholder="11-34"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
    <b-navbar
      toggleable="lg"
      type="dark"
      sticky="true"
      fixed="bottom"
      variant="dark"
    >
      <b-navbar-nav>
        <b-nav-item class="btn btn-success" @click="save()">Save</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="pull-right">
        <b-nav-item href="/">body</b-nav-item>
        <b-nav-item href="/bike">bike</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      bike: {
        brand: '',
        weight: '',
        reach: '',
        rear_transmission: '',
        front_transmission: '',
        wheels: {
          size: '',
          etrto: '',
          pressure: '',
          tubeless: 0,
        },
        size: 55,
        id_number: '',
      },
    }
  },
  mounted() {
    this.getStorage()
  },
  computed: {
    ...mapState({
      metric: (state) => {
        return state.bike_metric
      },
    }),
  },
  methods: {
    save() {
      this.$storage.setLocalStorage('bike', this.bike)
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
      if (this.$storage.getLocalStorage('bike')) {
        this.bike = this.$storage.getLocalStorage('bike')
        this.$bvToast.toast('Local data loaded', {
          id: 'offline',
          toaster: 'b-toaster-bottom-right',
          noCloseButton: true,
          solid: true,
          noAutoHide: false,
          variant: 'info',
        })
      }
    },
  },
}
</script>
