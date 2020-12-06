<template>
  <div>
    <img v-bind:src="member.imagen" class="card-img-top" alt="Miembro" />
    <div class="card-body">
      <h5 class="card-title">{{ member.nombre }}</h5>
      <p class="card-text">
          <span>Código: </span>{{ member.codigo }}<br>
          <p>{{ member.descripcion }}</p>
          <p>{{ member.rol }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ['member'],
};
</script>

<style scoped>
</style>
