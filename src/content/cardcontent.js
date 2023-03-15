import Card from "./card";
import "./cardcontent.css"

function CartContent () {
    return (
        <>
            <h2>Propiedades destacadas</h2>
            <h3>Elegimos para vos lo mejor de nuestro catálogo, actualizado día a día.</h3>
            <div className="content">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}


export default CartContent