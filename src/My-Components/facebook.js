import React from 'react';
import car1 from '../assets/carbon-fiber-shelby-mustang-1600685276.jpg';
import car2 from '../assets/_118231104_evija-in-london_2.jpg';
import car3 from '../assets/rangerover.jpg';


function Facebook() {

    const searchResult = [
        {
            src: car1,
            title: "Muhammad Hammad",
        },
        {
            src: car2,
            title: "Mavia Ali",
        },
        {
            src: car3,
            title: "Muhammad Saif",
        },
    ]

    return (
        <div>
            {
                searchResult.map((search, index) => {
                    return (
                        <div className="container">
                            <h3>{search.title}</h3>
                            <img src={search.src} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Facebook;