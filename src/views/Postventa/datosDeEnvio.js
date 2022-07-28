import React, { useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/fireBaseConfig";

import TextField from '@mui/material/TextField';
import { async } from "@firebase/util";

//------------COMPONENTS------------
import MessageOk from "../../components/MessageOk/MessageOk";




const initialState = {
    name: " ",
    lastName: " ",
    city: " ",
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
    <div>
        <form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='City'
					style={{ margin: 10, width: 400 }}
					name='city'
					value={values.city}
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Send</button>
			</form>
			{comprasId && <MessageOk comprasID={comprasId} /> }
        </div>)
        
};

export default DatosDeEnvio;