<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <VueCompareImage leftImage="https://picsum.photos/1936/1088" rightImage="https://i.picsum.photos/id/135/1936/1088.jpg" />;
      </div>
    </div>
  </div>
</template>

<script>

import VueCompareImage from 'vue-compare-image';

export default {
  name: 'detail',
  components: { VueCompareImage },
}
</script>
