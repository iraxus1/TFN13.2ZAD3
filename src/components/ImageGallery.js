import React, {Component} from "react";
import Image from "./Image";
import Rating from "./Rating";
import ImageDetails from "./ImageDetails";
import images from "../data/images.json";

class ImageGallery extends Component {
    state = {
        currentImage: null,
        images: [],
    };

    componentDidMount() {
        // pobierz listę zdjęć z bazy, data/images.json
        // wylosuj pierwsze zdjęcie i ustaw jako currentImage w stanie
        images.sort(() => Math.random() - 0.5);
        this.setState({ images, currentImage: images[0] });
    }

    handleNextClick = () => {
        // zwiększ indeks currentImage i ustaw nowe zdjęcie jako currentImage
        const { currentImage, images } = this.state;
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = currentIndex + 1;
        this.setState({ currentImage: images[nextIndex] });
    };

    handlePrevClick = () => {
        // zmniejsz indeks currentImage i ustaw nowe zdjęcie jako currentImage
        const { currentImage, images } = this.state;
        const currentIndex = images.indexOf(currentImage);
        const prevIndex = currentIndex - 1;
        this.setState({ currentImage: images[prevIndex] });
    };

    handleRatingChange = (newRating) => {
        // zaktualizuj ocenę currentImage i zaktualizuj bazę danych
        const { currentImage } = this.state;
        currentImage.rating = newRating;
        this.setState({ currentImage });
    };

    render() {
        const { currentImage, images } = this.state;
        return (
            <div>
                {currentImage && (
                    <>
                        <Image image={currentImage} />
                        <Rating value={currentImage.rating} onChange={this.handleRatingChange} />
                        <ImageDetails link={currentImage.details} />
                        {images.indexOf(currentImage) !== 0 && <button onClick={this.handlePrevClick}>{"<"}</button>}
                        {images.indexOf(currentImage) !== images.length - 1 && <button onClick={this.handleNextClick}>{">"}</button>}
                    </>
                )}
            </div>
        );
    }
}

export default ImageGallery;