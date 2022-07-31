import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/fireBaseConfig";
//-------Context---------------
import { ItemsCartContext } from "../../components/Context/ItemCartContext"
//------------ESTILOS--------------
import "./datosDeEnvios.css"

//------------COMPONENTS------------
import MessageOk from "../../components/MessageOk/MessageOk";
import { toast } from "react-toastify";




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
	const { setItemsCart} = useContext(ItemsCartContext);
	const cartDelete = [];
         
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
                    setComprasId(docRef.id);
          setValues(initialState);
          toast.success(' Pocesando datos', {
			position: "bottom-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});
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
			<button 
			className="btnEnviar"
			onClick={() => setItemsCart(cartDelete)}
			>Send</button>
			</form>
			{comprasId && <MessageOk comprasID={comprasId} /> }
        </div>)
        
};

export default DatosDeEnvio;