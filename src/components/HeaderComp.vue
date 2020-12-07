<template>
  <header id="start">
    <!-- Menú de navegación -->
    <nav
      class="navbar navbar-expand-lg sticky-top navbar-dark"
      style="background-color: #4034e3"
    >
      <a class="navbar-brand" href="#">Servicios de Tecnología 1A</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#start"
              >Inicio<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#news">Noticias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#team" tabindex="-1">Equipo</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Carrousel -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://placeimg.com/800/300/tech"
            class="d-block w-100"
            alt="First Slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Tecnología</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://placeimg.com/800/300/arch"
            class="d-block w-100"
            alt="Second Slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Entorno</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://placeimg.com/800/300/people"
            class="d-block w-100"
            alt="Third Slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Gente</h3>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp"
};
</script>

<style scoped>
</style>