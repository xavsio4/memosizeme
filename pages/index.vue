<template>
  <div>
  
    <b-container>
      <h4><fa :icon="['fas', 'child']" /> &nbsp;Body</h4>
      <b-form>
        <b-row>
          <b-col>
            <div class="widget">
              <h4>Head</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Head size</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.head"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Hand</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Head size</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.hand"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Waist</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Head size</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.waist"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Arm</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Arm</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.arm"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Chest</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Chest</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.chest"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Legs</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Leg length</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.leg"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>Inseam</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.inseam"
                  type="number"
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
      checked:true,
      
      body: {
        head: '',
        hand: '',
        waist: '',
        chest: '',
        arm: '',
        leg: '',
        inseam: '',
        foot: '',
        negative_flexibility: '',
        shoulders: '',
        inseam_length: '',
      },
    }
  },

  mounted() {
    this.getStorage()
  },
  computed: {
    ...mapState({
      metric: (state) => {
        return state.body_metric
      },
      
    })
  },
  methods: {
    save() {
      this.$storage.setLocalStorage('body', this.body)
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
      if (this.$storage.getLocalStorage('body')) {
        this.body = this.$storage.getLocalStorage('body')
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

<style>
header {
  margin: 16px 0 14px 0;
}

.col {
  margin: 6px 0;
}

.widget {
  background-color: #000;
  padding: 8px;
  border-radius: 6px;
  width: 320px;
}

.widget h4 {
  margin-bottom: -14px;
}

input {
  padding-left: 6px;
  background-color: dimgray;
  border-radius: 4px;
  color: white;
  font-weight: 600;

  -webkit-box-flex: 1;
  width: 25%;
  min-width: 10%;
}
</style>
