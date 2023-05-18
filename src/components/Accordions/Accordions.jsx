import React from 'react'
import { Accordion } from 'react-bootstrap-accordion';
import './Accordions.css';

import { data } from '../../constants';


const Accordions = () => {

  return (

    <>
    { data.infoaccordion.map(info =>(

<Accordion title={info.title} show >  
<p>{info.descripcion}</p>
</Accordion>

    ))}

  





    </>
  )
}

export default Accordions