<template>
    <div class="col-md-3">
        <div class="card mb-4 shadow-sm">
            <img v-bind:src="this.img" class="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <router-link :to="{ name: 'detail', params: { imageName: 'test' }}" class="btn btn-sm btn-outline-secondary" role="button">View</router-link>
                </div>
                <small class="text-muted"></small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    img: String
  }
}
</script>

