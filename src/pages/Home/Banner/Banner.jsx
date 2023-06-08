import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://i.ibb.co/yVvMbXW/drums.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">We admire everyone who want o become an musician</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/RDrVpRj/drums2.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">Exploring Vocals music</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/z5q5Q6t/gitter1.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">EveryOne can play the guiter just 4 month</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/sv6YFQV/gitter2.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">How folk music vary country to country</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/z2MKR63/piano.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">When you play never mind who listen to you</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/p1zG8Ln/violine.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">Music is for life</span></p>
                </div>
            </Carousel>
    );
};

export default Banner;