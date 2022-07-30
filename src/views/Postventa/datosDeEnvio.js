import React, { useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/fireBaseConfig";
import { Formik, Field, Form } from "formik";

import TextField from '@mui/material/TextField';
import { async } from "@firebase/util";

//------------ESTILOS--------------
import "./datosDeEnvios.css"

//------------COMPONENTS------------
import MessageOk from "../../components/MessageOk/MessageOk";




const initialState = {
    name: " ",
    direccion: " ",
    city: " ",
	telefono:" ",
	comentario: " ",
};


const DatosDeEnvio = () => {
    const [values, setValues] = useState(initialState);
    const [comprasId, setComprasId] = useState("");
         
     const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

    
    const onSubmit =  async (e) => {
        e.preventDefault();
        console.log(values);
        const docRef = await addDoc(collection(db, "compras"), {
            values,
          });
          console.log("Document written with ID: ", docRef.id); 
          setComprasId(docRef.id);
          setValues(initialState);
          alert("Gracias por tu compra! numero de Gestion:" + comprasId);
		  }
		  



    return (
    <div >
		<p className="textEnvio">Datos de Envio</p>
        <form className="form" onSubmit={onSubmit}>
			<input 
				placeholder="Nombre y Apellido"
				style={{ margin: 10, width: 350 }}
				name='name'
				value={values.name}
				onChange={handleOnChange}
				>
			</input>
			<input
				placeholder='Direccion'
				style={{ margin: 10, width: 350 }}
				name='direccion'
				value={values.direccion}
				onChange={handleOnChange}
				>
			</input>	
			<input
				placeholder='Ciudad/Localidad'
				style={{ margin: 10, width: 350 }}
				name='city'
				value={values.city}
				onChange={handleOnChange}
				>
			</input>
			<input
				placeholder='Telefono'
				style={{ margin: 10, width: 350 }}
				name='telefono'
				value={values.telefono}
				onChange={handleOnChange}
				>
			</input>
			<input
				placeholder='Comentarios'
				style={{ margin: 10, width: 350 }}
				name='comentario'
				value={values.comentario}
				onChange={handleOnChange}
				>
			</input>
			<button className="btnEnviar">Send</button>
			</form>
			{comprasId && <MessageOk comprasID={comprasId} /> }
        </div>)
        
};

export default DatosDeEnvio;