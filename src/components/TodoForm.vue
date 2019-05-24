<template>
  <v-card>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-text-field
          class="mt-0" 
          label="Title"
          data-vv-name="title"
          :counter=40
          v-model="title"
          v-validate="'required|max:40'"
          :error-messages="errors.collect('title')"
          required
        />
        <v-textarea
          label="Description" 
          v-model="content"
          :autoGrow=true
          :rows=3
        />
        <v-btn
          @click="submit" 
          @keyup.enter="submit"
          color="primary"
        >
          create
        </v-btn>
        <v-btn
          @click="clearForm" 
          color="error" 
          v-show="title || content" 
          flat
        >
          clear
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data() {
    return {
      valid: true,
      title: '',
      content: ''
    }
  },
  methods: {
    ...mapActions([
      'addTodo'
    ]),
    async submit() {
      await this.$validator.validateAll();
      if(!this.valid) return;


      this.addTodo({
        title: this.title,
        content: this.content,
        checked: false
      });
      this.clearForm();
    },
    clearForm() {
      this.title = this.content = ''
    }
  }
}
</script>
