function Card(props) {
    return (
        <div className = "Card">
            <div className = "ImageContainer">
                <img src={props.img.src} alt={props.img.alt}/>
            </div>
            <div className = "Text">
                <div className="Location">
                    <div className="Icon">
                        <img src ='src\assets\marker.png' />
                        <p>{props.country}</p>
                    </div>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p id='date'>{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </div>
        
    )
}

export default Card;