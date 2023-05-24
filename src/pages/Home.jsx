

import React from 'react'
import Cards from '../components/cards/Cards'
import {Container,Row} from "reactstrap"

const Home = () => {
  return (
   <section>
    <Container>
        <Row>

        
    <h2 className="heading">Practice of Redux Toolkit Store</h2>
    <div>
        <h3>Products</h3>
        
            <Cards/>
    
    </div>

    </Row>
    </Container>
   </section>
   
  )
}

export default Home