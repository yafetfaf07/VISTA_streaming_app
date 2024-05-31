import '../App.css'
import backgroundImage from "../assets/images/backgroundImage.webp"
function App() {
  return (
    <>
    <div className='image-container'>
    <img src={backgroundImage} className='backImage'/>
    <div className="overlay"></div>
   
    <div className='content'>
      <h1>Welcome to Movlixs</h1>
 <p>The best movie website you could get in 21st century</p>
      <button className='start-btn' ><a style={{color:"white", textDecoration:"none"}} href='/signin'>Get started </a></button>
    </div>
    
  
    </div>
    </>

  )
}

export default App
