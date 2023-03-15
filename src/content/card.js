
import imagenes from '../assets/imagenes'
import './card.css'


function Card () 
{
    return (
        <>
        <div class="card" >
           <img src={imagenes.img1} alt="sape"/>

            <div className="card-body">
                <h5 className="title"><i class="bi bi-bag-dash"></i> Monoambiente </h5>
                <h5 className="descripcion"><i class="bi bi-border-outer"></i> 2 ambientes </h5>  
                <p className="text"><i class="bi bi-geo-alt"></i> Rafael castillo</p>
                <p className="price"> <i class="bi bi-currency-dollar"></i>  200.000</p>
                
            </div>
        </div>          
        </>
    )

}

export default Card