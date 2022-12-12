import './post.css'
import image from '../../imgs/user.png'

export function Post({post}){
    return(
        <div className='individualpost'>
            <div className='user-post'>
            <img className='img' src={post.imagen ? post.imagen: image} alt="" />
            { post.nombre ?
            <div className='user-data'>
                <h2>{post.nombre}</h2>
                <h3>{post.email}</h3>
            </div>
            :
            <div className='user-data'>
                <h2>{post.email}</h2>
            </div>
            }
            <p className='creado'>{post.creado}</p>
            </div>

            <p className='content'>{post.post}</p>
        </div>
    )
}