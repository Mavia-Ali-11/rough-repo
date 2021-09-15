import React from "react"

function Section(props){
    return(
      <div>
          <h1>
            { props.heading }
          </h1>
          <img src={ props.image } />
          <p>
            { props.story }
          </p>
      </div>
    );
  }

export default Section;