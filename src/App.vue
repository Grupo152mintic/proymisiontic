<template>
  <div id="app">
    <header-comp></header-comp>
    <main>
      <section-services></section-services>
      <div id="news" class="container-fluid">
        <section-news></section-news>
      </div>
      <div id="team">
        <div class="card-deck">
          <div
            class="card text-white bg-primary mb-4"
            v-for="(item, index) of team"
            :key="index"
          >
            <team-card v-bind:member="item"></team-card>
          </div>
        </div>
      </div>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "./components/PageFooter.vue";
import TeamCard from "./components/TeamCard.vue";
import SectionNews from "./components/SectionNews.vue";
import SectionServices from "./components/SectionServices.vue";
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "App",
  components: {
    PageFooter,
    TeamCard,
    SectionNews,
    SectionServices,
    HeaderComp,
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
          imagen: "./images/JHG.jpg",
        },
        {
          codigo: 2,
          nombre: "José Romero",
          descripcion:
            "Lic. en matemáticas  de la UPN, apasionado por la implementación de y creación de apletts o manipulables",
          rol: "desarrollador",
          imagen: "./images/joseromero.jpg",
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
          descripcion:
            "Estudiante de Matemáticas y Estadística de la Universidad del Tolima y apasionado por el conocimiento. Sus pasatiempos se destacan en leer, tocar guitarra, escuchar música y aprender cosas nuevas.",
          rol: "desarrollador",
          imagen: "./images/germanruiz.jpg",
        },
      ],
    };
  },
};
</script>

