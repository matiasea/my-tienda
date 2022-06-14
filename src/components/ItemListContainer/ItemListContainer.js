import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return <div className="greetings">
        <h1>Bienvenidos al e-comerce de:</h1>
        <h2>{props.nombre}</h2>

    </div>
}

export default ItemListContainer;
