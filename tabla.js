Vue.component('tabla',{
    data:function(){
        return {
            name:'Jorge'
        }
    },
    // esta prop lo que hace es asignar una variable dentro del componente que en html se bindea con la variable propia del app.js. Solo se puede pasar la data del padre (App) hacia el hijo (componente)
    props:['grupo','equipo1','equipo2','equipo3','puntos1','puntos2','puntos3','clasificado1','clasificado2','clasificado3','clase'], 
    template: /*html*/`
    <div>
        <h2>Grupo {{ grupo }}</h2>
        <table :class=clase>
            <tr>
                <th>
                    Equipo
                </th>
                <th>
                    Puntos
                </th>
                <th>
                    Clasificado a octavos
                </th>
            </tr>
            <tr>
                <td>
                    {{ equipo1 }}
                </td>
                <td>
                    {{ puntos1 }}
                </td>
                <td>    
                    {{ clasificado1 }}
                </td>
            </tr>
            <tr>
                <td>
                    {{ equipo2 }}
                </td>
                <td>
                    {{ puntos2 }}
                </td>
                <td>    
                    {{ clasificado2 }}
                </td>
            </tr>
            <tr>
                <td>
                    {{ equipo3 }}
                </td>
                <td>
                    {{ puntos3 }}
                </td>
                <td>    
                    {{ clasificado3 }}
                </td>
            </tr>
        </table>
    </div>
    `
})