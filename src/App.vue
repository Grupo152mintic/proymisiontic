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
            "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
          rol: "Desarrollador Full-Stack",
          image: "./images/johnlopez.jpg",
        },
        {
          codigo: 2,
          nombre: "José Yara",
          descripcion:
            "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
          rol: "Desarrollador Full-Stack",
          image: "./images/joseyara.jpg",
        },
        {
          codigo: 3,
          nombre: "John López",
          descripcion:
            "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
          rol: "Desarrollador Full-Stack y Scrum Máster",
          image: "./images/johnlopez.jpg",
        },
        {
          codigo: 4,
          nombre: "Germán Ruiz",
          descripcion:
            "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
          rol: "Arquitecto de Software",
          image: "./images/germanruiz.jpg",
        },
      ],
    };
  },
};
</script>

