<template>
  <div>
    <b-container>
      <h4><fa :icon="['fas', 'child']" /> &nbsp;{{ $t('body') }}</h4>
      <b-form>
        <b-row>
          <b-col>
            <div class="widget">
              <h4>General</h4>
              <hr color="#999" />
              <b-form-group>
                <label>Weight</label>
                <input
                  maxlength="3"
                  size="6"
                  max="10"
                  v-model="body.weight"
                  type="number"
                />
                Kg
              </b-form-group>
              <b-form-group>
                <label>height</label>
                <input
                  maxlength="3"
                  size="6"
                  max="10"
                  v-model="body.height"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>a. waist size</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.waist"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>b. Chest</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.chest"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>c. Shoulder</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.shoulders"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
          </b-col>

          <b-col>
            <div class="widget">
              <h4>Head</h4>
              <hr color="#999" />
              <b-form-group>
                <label>d. Head size</label>
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
            <div class="widget">
              <h4>Hand</h4>
              <hr color="#999" />
              <b-form-group>
                <label>e. palm size</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.hand"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>f. hand length</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.handlength"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
            </div>
            <div class="widget">
              <h4>Arm</h4>
              <hr color="#999" />
              <b-form-group>
                <label>g. Arm length</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.arm"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>h. Biceps rest</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.biceps"
                  type="number"
                />
                flex<input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.bicepsflex"
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
                <label>i. Foot length</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.foot"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>j. Inseam</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.inseam"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>k. Thigh</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.thigh"
                  type="number"
                />
                {{ metric }}
              </b-form-group>
              <b-form-group>
                <label>l. Calves</label>
                <input
                  maxlength="3"
                  size="6"
                  max="70"
                  v-model="body.calves"
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
      checked: true,

      body: {
        head: '',
        hand: '',
        handlength: '',
        waist: '',
        chest: '',
        arm: '',
        biceps: '',
        leg: '',
        foot: '',
        thigh: '',
        calves: '',
        inseam: '',
        foot: '',
        weight: '',
        height: '',
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
    }),
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

<style></style>
