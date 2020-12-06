<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row justify-content- mb-5">
        <div class="col mt-5" v-for="(item, index) of team" :key="index">
          <team-card v-bind:member="item"> </team-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from "./components/TeamCard.vue";

export default {
  name: "App",
  components: {
    TeamCard,
  },

  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "John Hollman Gómez",
          descripcion:
            "Experiencia en proyectos con alto grado de especialización y autonomía, Sistemas de gestión documental, Historia clínica sistematizada",
          rol: "desarrollador",
          imagen: "images/JHG.jpg",
        },
        {
          codigo: 2,
          nombre: "José Romero",
          descripcion:
            "Lic. en matemáticas  de la UPN, apasionado por la implementación de y creación de apletts o manipulables",
          rol: "desarrollador",
          imagen: "./images/joseyara.jpg",
        },
        {
          codigo: 3,
          nombre: "John Lopez",
          descripcion:
            "Ingeniero electrónico con énfasis en buenas prácticas de gestión de servicios y gestión de proyectos",
          rol: "desarrollador",
          imagen: "./images/johnlopez.jpg",
        },
        {
          codigo: 4,
          nombre: "German Ruiz",
          descripcion:"Estudiante de Matemáticas y Estadística de la Universidad del Tolima y apasionado por el conocimiento. Sus pasatiempos se destacan en leer, tocar guitarra, escuchar música y aprender cosas nuevas.",
          rol: "desarrollador",
          imagen: "./images/germanruiz.jpg",
        },
      ],
    };
  },
};
</script>

