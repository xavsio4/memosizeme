<template>
<div>
     cm <b-form-checkbox v-model="metric" name="check-button" switch> inch
      Switch Checkbox <b>(Checked: {{ metric }})</b>
    </b-form-checkbox>
  </div>

</template>
<script>
export default {
    props: {
        metric:''
    },
    method: {
        
    }
}
</script>
<style>
</style>