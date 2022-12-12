import { useAuth } from "../authcof"
import { Publications } from "../componentes/posteos/posteos"
import { Publicar } from "../componentes/push"
import { useState } from "react"
import {database} from '../firebase'
import { collection, onSnapshot,query, orderBy,getDocs} from "firebase/firestore"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from '../imgs/user.png'
import './first.css'


export function First(){
    
    const {user,logOut} = useAuth()
    const [publi,setPubli] = useState([])
    const navigate = useNavigate();
    

    const handleLogOut=async()=>{
        await logOut()
    }
    const handleLogin=()=>{
        navigate('/login')
    }

    const getpubli=async()=>{
        
         const querySnapshots = collection(database, `post`)
        if(user){

            const qery =query(querySnapshots, orderBy('CREATE',"DESCRIPTION"))
            const Snapshot = onSnapshot(qery,(querySnapshot)=>{
                let publicaciones = [] 
                querySnapshot.forEach((doc)=>{
                    publicaciones.push({...doc.data()})
                })
                setPubli(publicaciones)
            })
            return Snapshot
        }else{
            const querySnapshot = collection(database, `post`);
            const Snapshot = await getDocs(querySnapshot)
            const result = Snapshot.docs.map(doc=> doc.data())
            setPubli(result)
            return Snapshot
        }

    }

    useEffect(()=>{
        getpubli()
    })

    return (
    <div>
        <header>
            <div  className="header-home">

            <div className="userinfo">
            {
                
                user && user.photoURL ?
                <img src={user.photoURL} alt="" />
                :
                 <img src={image} alt=""/> 
            }
            <h3>{user ? user.displayName ||user.email : "Welcome"}</h3>
            </div>            
            {
                user ? <button className="logout" onClick={handleLogOut}>Cerrar Session</button>
                : <button className="login" onClick={handleLogin}>iniciar Session</button>
            }

            </div>
        </header>
        <Publicar />
        <div className="post" >
            <Publications posts={publi}/>
        </div>
    
    </div>
    )
} 