import React from 'react'
import logo from '../corazon.png'
import swal from 'sweetalert'
import ReactPlayer from 'react-player'

const Pag = () => {


    const mostrar = () =>{
        swal({
            title:"Me encantas demasiado, mi amor",
           
            text: "Eres Increiblemente hermosa en todos de los sentidos de la palabra, y estoy dispuesto a ir de cabeza contigo!",
            timer: "5000",
            button: null
        })
        }


  return (
<div>
  <h1 class="text-primary" align="center">HOLA, MI BONITA <img src={logo} alt="" /></h1>
  <br />
  <br />

  <div class="form-row">
    <div class="form-group col-md-6">
        <p align="center">
           Es Increibe todo lo que has hecho causar en mi.
        </p>
    </div>

    <div class="form-group col-md-6">
        <p align="center">
           Tanto, que has ocasionado que me convierta en un man cursi; cosa donde no lo era antes y que no era muy de mi agrado.
        </p>
    </div >
    
  
    </div>

    
    <p align="center">
           y mira hasta donde ha llegado el coco JAJAJAJA
        </p>

   
        <p align="center">Tocame aqui! JAJAJAJ</p>
    <div class="card text-center">
      
         <button class="btn btn-secondary btn-lg" type="sumit" onClick={(mostrar)} >Esta veeeee</button>
     </div>

    <br />
    <div style={{width:'25%', height:'500px',margin:"auto"}} >   
     
    <ReactPlayer url={require('../july.mp4')}
    width='100%'
    height='100%'
    controls
    playing
    volume='0.9'
    /> 
    </div>
     <br />
    <div class="p-3 mb-2 bg-info">
          <h1 class="text-white" align="center">TE ESPERO EN COLOMBIA</h1>
        </div>

  </div>
  
  )
}

export default Pag
