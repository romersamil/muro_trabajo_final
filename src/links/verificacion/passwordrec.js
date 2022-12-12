import { useState } from "react";
import { useAuth } from "../../authcof";

export function Passwordrec(){
    const [error,setError] = useState();
    const [email,setEmail] =useState();
    const {reset} = useAuth();

    const handleChange = ({target})=>{
        setEmail(target.value)
    }
    const handlerecoverpassword=async(e)=>{
        e.preventDefault()
        if(!email) setError("INTRODUZCA SU CORREO")
       try{
           await reset(email)
           setError('CONFIRME LA BANDEJA DEL CORREO DIGITADO')
        }catch(err){
            setError(err.message)
        }
    }
    return(
    <div className="container">
        {error && <p className="err">{error}</p>}

       <form onSubmit={handlerecoverpassword} className="form reset">
           <h1>Recuperar password</h1>
           <input type="email" name="email" placeholder="Ingrese su email" onChange={handleChange}/>
           <button >Send</button>
       </form> 
    </div>
    )
}