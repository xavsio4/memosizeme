<template>
  <div>
    inch
    <b-form-checkbox v-model="metric" name="check-button" switch>
      cm Switch Checkbox <b>(Checked: {{ metric }})</b>
    </b-form-checkbox>
    cm
  </div>
</template>
<script>
export default {
  props: {
    metric: '',
  },
  method: {},
}
</script>
<style></style>
