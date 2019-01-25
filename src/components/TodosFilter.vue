<template>
  <v-select label="Show..."
            v-model="selectedFilter"
            @change="filterChanged"
            :items="filters"
            itemText="label"
            itemValue="name"
            ></v-select>
</template>

<script>
export default {
  props: {
    defaultFilter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedFilter: this.defaultFilter,
      filters: [{
        label: "all",
        name: "home"
      },{
        label: "checked",
        name: "checked"
      },{
        label: "non-checked",
        name: "nonchecked"
      }]
    }
  },
  methods: {
    filterChanged(a) {
      this.$router.push({name: a})
    }
  }
}
</script>
