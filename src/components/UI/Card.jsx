function Card(props) {
    return (
        <div>
            <img src={props.image} alt={props.text} />
            <h1>{props.text}</h1>
        </div>
    )
}

export default Card;