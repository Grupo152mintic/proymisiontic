
<template>

<div class="card  border-info mb-3 bg-light">
                <div class="d-flex justify-content-center p-2 card-header">
                    <img v-bind:src="member.imagen" alt="" width="180" height="200" >
                </div>
                <div class="card-body text-info" style="height: 300px;"> 
                    <h5 class="card-title">{{member.nombre}}</h5>
                    <p class="card-text">{{member.descripcion}}</p>
                    <h6 class="card-subtitle">{{member.rol}}</h6>
                    <p class="card-text"><span>Código: </span>{{member.codigo}}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<style scoped>
</style>
