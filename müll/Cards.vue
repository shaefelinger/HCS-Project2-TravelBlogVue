<template>
  <div class="bg-gray-100 flex flex-wrap justify-center pt-12 pl-30 pr-30" >

    <div @click="selectCharacter(character.char_id)" v-for="character in characterList" v-bind:key="character.char_id">
      <!-- single card  -->

      <div class="cursor-pointer w-80 bg-gray-50 text-gray-900 m-8  rounded-lg overflow-hidden shadow-lg  opacity-100 hover:opacity-90 hover:shadow-2xl hover:bg-white transform duration-200">
        <img class="h-96 w-full object-cover object-top " v-bind:src="character.img" alt="character"/>
        <div class="p-6">
          <h2 class="font-semibold text-xl text-gray-900">{{ character.name }}</h2>
          <h3 class="text-gray-500 uppercase text-sm font-semibold tracking-wide mt-1">{{ character.nickname }}</h3>
        </div>
      </div>
      <!-- end of card  -->
    </div>
  </div>

  <!-- {{characterList}} -->
</template>

<script>
  import { getCharacterList, to } from '../io.js';

  export default {
    name: 'Cards',

    methods: {
      selectCharacter(character_id) {
        console.log('selectCharacter was clicked: ' + character_id);
        this.$emit('selectionChanged', character_id);
      },
    },

    data() {
      return {
        characterList: [],
        selectedCharacterID: 0,
      };
    },

    async mounted() {
      console.log('😎mounted');
      const { data, error } = await to(getCharacterList());
      if (!error) {
        this.characterList = data;
      }
    },
  };
</script>
