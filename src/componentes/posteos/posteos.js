import './Publicaciones.css'
import { Post } from '../post/post'

export function Publications({posts}){


    return(
        <div className='containerpost'>
            {
                posts.map((post)=>(
                    <Post key={post.creado} post={post}/>
                ))
            }
        </div>
    )
}