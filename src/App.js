import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

	//local storage
	let citasIniciales = JSON.parse(localStorage.getItem('citas'));
	if(!citasIniciales){
		citasIniciales = [];
	}

	//arreglo de las citas
	const [citas, agregarCitas] = useState(citasIniciales);

	//funcion que tome las citas actuales y agregue la nueva
	const crearCita = cita => {
		agregarCitas([
			...citas,
			cita
		]);
	}

	useEffect( () => {
		if(citasIniciales){
		localStorage.setItem('citas', JSON.stringify(citas))
		} else{
			localStorage.setItem('citas', JSON.stringify([]));
		}
	
	},[citas] );
	
	//eliminar citas por id
	const eliminarCitas = id =>{
		const nuevasCitas = citas.filter(cita => cita.id !== id)
		agregarCitas(nuevasCitas); 
		
	}

		//mensaje adicional 
		const titulo = citas.length === 0 ? 'No hay citas'  :'Administra tus citas ';
		
  return (
    <Fragment>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
      	<div className='row'>
			<div className='one-half column'>
				<Formulario 
					crearCita={crearCita}
				/>
			</div>
			<div className='one-half column'>
				<h2>{titulo }</h2>
				{citas.map(cita=>(
					<Cita 
						key = {cita.id}
						cita = {cita}
						eliminarCitas = {eliminarCitas}
					/>
				))}
			</div>
      	</div>
      </div>
    </Fragment>
  );
}

export default App;
