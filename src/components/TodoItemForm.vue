<template>
  <v-card :dark="themeIsDark" 
          :light="!themeIsDark">
    <v-card-text>
      <v-form @submit.prevent="addItem">
        <v-text-field class="mt-0" 
                      label="Title"
                      data-vv-name="title"
                      :counter=40
                      v-model="blankItem.title"
                      v-validate="'required|max:40'"
                      :error-messages="errors.collect('title')"
                      required
                      >
        </v-text-field>
        <v-textarea label="Description" 
                    v-model="blankItem.content"
                    :autoGrow=true
                    :rows=3
                    >
        </v-textarea>
        <v-btn @click="addItem" 
                color="primary">create</v-btn>
        <v-btn @click="clearForm" 
                color="error" 
                v-show="blankItem.title || blankItem.content" 
                flat
                >clear
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      blankItem: { title: '', content: '' }
    }
  },
  computed: {
    ...mapState([
      'themeIsDark'
    ]),
    ...mapMutations([
      'ADD_TODO_ITEM'
    ])
  },
  methods: {
    ...mapActions([
      'addTodoItem'
    ]),
    addItem() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.addTodoItem({
            title: this.blankItem.title,
            content: this.blankItem.content,
            checked: false
          });
          this.clearForm();
        }
      })
    },
    clearForm() {
      this.blankItem.title = this.blankItem.content = ''
    }
  }
}
</script>
