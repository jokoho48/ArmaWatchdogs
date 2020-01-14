<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <GalleryItem v-for="(item, index) in items" v-bind:key="index" v-bind:img="item.message" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GalleryItem from '@/components/GalleryItem.vue'

export default {
  name: 'home',
  components: {
    GalleryItem
  },
  data: function() {
    return {
      items: [
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' },
        { message: 'https://picsum.photos/1936/1088' }
      ]
    }
  },
}
</script>
