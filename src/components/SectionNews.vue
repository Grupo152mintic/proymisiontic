<template>
  <div class="row row-cols-1 row-cols-md-2">
    <div class="col mb-4 d-flex justify-content-center align-items-center" v-for="(advice, index) of news" :key="index">
      <div class="card text-white bg-primary mb-3">
        <div>
          <img
            v-bind:src="advice.urlToImage"
            class="card-img-top"
            alt="Noticia"
            style="max-height: 600px"
          />
          <div class="card-body">
            <h5 class="card-title text-dark">
              {{ advice.title }}
            </h5>
            <small class="text-dark">{{ advice.publishedAt }}</small>
            <p class="card-text">
              {{ advice.content }}
            </p>
            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
              <button type="button" class="btn btn-outline-info btn-dark">
                <a
                  v-bind:href="advice.url"
                  target="_blank"
                  >Info</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SectionNews",
  data() {
    return {
      news: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2020-12-05&to=2020-12-05&sortBy=popularity&apiKey=457873f7198240158fb42646e412713f"
      )
      .then((response) => {
        this.news = response.data.articles.slice(0, 4);
      });
  },
};
</script>

<style scoped>
</style>