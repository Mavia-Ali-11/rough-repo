import React, { useState } from "react";
import car1 from '../assets/carbon-fiber-shelby-mustang-1600685276.jpg';
import car2 from '../assets/_118231104_evija-in-london_2.jpg';
import car3 from '../assets/rangerover.jpg';


function Slider() {

    const h1Beauty = { color:"#fff", backgroundColor: "#000" };

    let storyData = [
        {
            storyName: "Mustang", storyImage: car1, storyText: "This is story 1"
        },
        {
            storyName: "Ferrari", storyImage: car2, storyText: "This is story 2"
        },
        {
            storyName: "Rangerover", storyImage: car3, storyText: "This is story 3"
        }
    ];

    let [currentSlide, changeSlide] = useState(0);

    function nextStory() {
        currentSlide < 2 ?  currentSlide = currentSlide + 1 : currentSlide = 0;
        changeSlide(currentSlide);
    }

    function prevStory() {
        currentSlide > 0 ?  currentSlide = currentSlide - 1 : currentSlide = 2;
        changeSlide(currentSlide);
    }

    return (
        <div>
            <h1 style={h1Beauty}>
                {storyData[currentSlide].storyName}
            </h1>
            <img src= {storyData[currentSlide].storyImage} />
            <p>
                {storyData[currentSlide].storyText}
            </p>

            <button onClick={prevStory}>Back</button>
            <button onClick={nextStory}>Next</button>
        </div>
    )
}

export default Slider;