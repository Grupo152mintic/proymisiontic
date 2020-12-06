
<template>
  <!-- <div class="card text-white bg-danger"> -->
  <!-- <div class="row row-cols-1 row-cols-md-3"> -->
    <div class="card border-info mb-3">
      <div class="d-flex justify-content-center p-2">
        <img
          src="member.imagen"
          class="card-img-top"
          alt="Fotogarfia del Equipo"
        />
      </div>
      <div class="card-body text-info">
        <h5 class="card-title">{{ member.nombre}}</h5>
        <p class="card-text">{{ member.descripcion }}</p>
        <p class="card-text"><span>Rol: </span>{{ member.rol }}</p>
        <p class="card-text"><span>Código: </span>{{ member.codigo }}</p>
      </div>
      <div class="card-footer bg-white">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<style scoped>
</style>
