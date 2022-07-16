import React, { useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/fireBaseConfig";




const initialState = {
    name: "",
    lastName: "",
    city: "",
};


const Postventa = () => {
    const [values, setValues] = useState(initialState);
     console.log(values)
    
const handleOnChange = (e) =>{
        const { value, name } = e.target;
        setValues({...values, [name]: value });
    }

    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        const docRef = await addDoc(collection(db, "compras"), {
            values,
          });
          console.log("Document written with ID: ", docRef.id);
    }



    return <div>
        <form onSubmit={onSubmit}>
        <input name="name" value={values.name} onChange={handleOnChange}></input>
        
        <input name="name" value={values.lastName} onChange={handleOnChange}></input>
        <input city="city" value={values.city} onChange={handleOnChange}></input>
        
        <button>send</button>
        </form>
        </div>;
        
};

export default Postventa;