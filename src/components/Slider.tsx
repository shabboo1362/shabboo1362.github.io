import React,{ useState,useEffect  } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getImage } from '../api/index';
import "../assets/styles/Slider.css"
const url='https://fronttask.techeyeco.com';


const Slider = () => {
    const [slideImages, setSlideImages] = useState<any[]>([]);
    const fetchData = async () => {
        await getImage()
        .then((data) => {
            setSlideImages(data);
          console.log(data);
        })
        .catch((e) => {
          console.error(e);
        });
      };
    useEffect(() => {
        fetchData();
      }, []);
    return (
      <div className="slide-container slidwidth ">
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide " key={index}>
                 <img src={url+slideImage.attachment} alt={slideImage.name} height="300" className='image' />
              {/* <div style={{'backgroundImage': `url(${url+slideImage.attachment})`}}>
                <span>{slideImage.name}</span>
              </div> */}
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slider;