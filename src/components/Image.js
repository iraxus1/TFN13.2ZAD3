const Image = ({ image }) => {
    return (
        <div>
            <div>Autor: {image.author}</div>
            <div>Data dodania: {image.date}</div>
            <img src={image.link} alt={image.title} />
        </div>
    );
}

export default Image;