const app = new Vue({
    el:'#app',
    data:{
        grupos:[
        {
            grupo: 'C',
            equipo1:'Argentina',
            equipo2:'Polonia',
            equipo3:'México',
            puntos1:7,
            puntos2:7,
            puntos3:4,
            clasificado1:true,
            clasificado2:true,
            clasificado3:false,
            clases: "table table-striped-columns"
        },
        {
            grupo: 'D',
            equipo1:'Francia',
            equipo2:'Australia',
            equipo3:'Túnez',
            puntos1:6,
            puntos2:6,
            puntos3:4,
            clasificado1:true,
            clasificado2:true,
            clasificado3:false,
            clases: "table table-striped"
        },
        {
            grupo: 'E',
            equipo1:'España',
            equipo2:'Japón',
            equipo3:'Alemania',
            puntos1:4,
            puntos2:3,
            puntos3:1,
            clasificado1:true,
            clasificado2:true,
            clasificado3:false,
            clases: "table table-success"
        }
    ]},
    methods:{

    },
});