import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriaContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    //Definiendo el state local
    const[busqueda, guardarBusqueda] = useState({
       nombre: '',
       categoria: '' 
    })

    //Usando el context
    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsulta} = useContext(RecetasContext);

    //funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    console.log(categorias)

    return ( 
        <form
            className="col-12"
            onSubmit={e=>{
                e.preventDefault()
                buscarRecetas(busqueda)
                guardarConsulta(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                     name="nombre"
                     className="form-control"
                     type="text"
                     placeholder="Buscar por Ingrediente"
                     onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {categorias.map(categoria => (
                            <option
                             key={categoria.strCategory}
                             value={categoria.strCategory}
                            >{categoria.strCategory} </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                     type="submit"
                     className="btn btn-block btn-primary"
                     value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;