import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';


const Formulario = ({crearCita}) => {
    //crear state de cita
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, actualizarError] = useState(false);
    

            //extraer los valores. estos se ponen en value de cada input
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //cuanto el usuario presiona el boton
    const submitCita = e =>{
        e.preventDefault();
        
        
        //validar
        if (mascota.trim()===''||propietario.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()===''){
            actualizarError(true);
            return;
        }
        //eliminar msj previo de validacion
        actualizarError(false);
        
        //asignar un id
        cita.id = uuid();
        //crear la cita
        crearCita(cita);

        //resetear form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''            
        });

    }

    const actualizarState =(e)=>{
        //console.log(e.target.value);
        actualizarCita({
            ...cita,
           [ e.target.name] : e.target.value
        })
        
    }




    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error? <p className='alerta-error'>Todos los campos son obligatorios</p>
            :null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota '
                    onChange={actualizarState }
                    value={mascota}

                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre dueño de la Mascota '
                    onChange={actualizarState }
                    value={propietario}

                />
                <label>Fecha</label>
                <input
                    type="text"
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState }
                    value={fecha}

                />  
                  <label>Hora</label>
                <input
                    type="text"
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState }
                    value={hora}
                />  
                <label>Síntomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={actualizarState }
                    value={sintomas}
                ></textarea>    
                <button
                     type='submit'
                     className='u-full-width button-primary'
                >Agregar Cita</button>                                                       
            </form>

        </Fragment>
     );
}
 
export default Formulario;