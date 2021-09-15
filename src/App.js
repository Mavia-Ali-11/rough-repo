import React from 'react';
import Section from './My-Components/component';
import Counter from './My-Components/counter';
import Slider from './My-Components/slider';
import car1 from './assets/carbon-fiber-shelby-mustang-1600685276.jpg';
import car2 from './assets/_118231104_evija-in-london_2.jpg';
import car3 from './assets/rangerover.jpg';
import Google from './My-Components/google';
import Facebook from './My-Components/facebook'

function App() {
  return (
    <div>
      {/* <Section image={car1} heading="Story 1" story="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
      <Section image={car2} heading="Story 2" story="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
      <Section image={car3} heading="Story 3" story="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." /> */}
  
      <Counter />
      
      {/* <Slider /> */}

      {/* <Google /> */}

      {/* <Facebook /> */}
    </div>
  );
}

export default App;
