import Profilepic from './assets/students.jpg';


export default function Card(){


    return (
        <div className="card" >

            <img className='card-image' src="{Profilepic }" alt="Profile picture"></img>
            <h1 className='card-title'>SamTech</h1>
            <p className='card-text'>I am a fullstack software engineer and a tech enthusiant</p>
        </div>
    )
}