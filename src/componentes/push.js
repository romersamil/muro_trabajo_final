import { useState } from "react"
import { collection,addDoc,Timestamp } from "firebase/firestore"; 
import {database} from '../firebase'
import { useAuth } from "../authcof";
import image from '../imgs/user.png'


export function Publicar(){
    const [publi,setPubli] = useState('')
    const {user} = useAuth()
    const handleChange=({target})=>{
        setPubli(target.value)
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
            if(publi!=='')
            {

                await addDoc(collection(database, "post"), {
                    nombre:user.displayName ? user.displayName: '',
                    email:user.email,
                    imagen:user.photoURL ? user.photoURL: image,
                    creado:Timestamp.now().toDate().toString(),
                    post:publi
              });
              setPubli('')
            }
        }catch(err){
            alert(err.message)
        }

    }

    return(
        <div>
        { user &&
        <form onSubmit={handleSubmit}>
        <textarea type="textarea" value={publi} placeholder="Que estas pensando?" onChange={handleChange}/>
        <button className="post">Publicar</button>
        </form>
        }
        </div>
    )
}
