<template>
  <div id="app">
    
  <div class= "container-fluid">
    <div class= "row justify-content- mb-5" v-for="(item, index) of equipo" :key="index">
      <team-card v-bind: member="item" >


      </team-card>
  
  </div>
  </div>


  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue';

export default {
  components: { TeamCard },
  name: "App",

  data() {
    return;
    equipo[
      ({
        codigo: 1,
        nombre: "John Hollman Gómez",
        descripcion:
          "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
        rol: "desarrollador",
        imagen: "./images/jhg.jpg",
      },
      {
        codigo: 2,
        nombre: "Jose Yara",
        descripcion:
          "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
        rol: "desarrollador",
        imagen: "./images/joseyara.jpg",
      },
      {
        codigo: 3,
        nombre: "John Lopez",
        descripcion:
          "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
        rol: "desarrollador",
        imagen: "./images/johnlopez.jpg",
      },
      {
        codigo: 4,
        nombre: "German Ruiz",
        descripcion:
          "|IT |Gerencia de Proyectos| Ingeniero de Sistemas| Director de Sistemas| Gestión de Proyectos| Planificación Estratégica | Liderazgo de Equipos | Innovación Tecnológica| Jefe de Sistemas|Manejo de Indicadores|",
        rol: "desarrollador",
        imagen: "./images/germanruiz.jpg",
      })
    ];
  },
};
</script>

