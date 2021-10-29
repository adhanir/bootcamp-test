<template>
  <div class="Home">
    <navbar />

      <div class="row mt-4">
        <div class="col">
          <h2>
            Best
            <strong>Menu</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Navbar.vue";
export default {
  name: "Home",
  components: {
    navbar,
  },
};
</script>