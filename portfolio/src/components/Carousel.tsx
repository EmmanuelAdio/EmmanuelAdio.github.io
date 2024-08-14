import Carousel from 'react-bootstrap/Carousel';

interface CarouselProp{
    images : string[]
}

export default function ImageCarousel(prop : CarouselProp) {
    let text = ""
    return (
        <Carousel>
            {prop.images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img className = "carousel-image" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}