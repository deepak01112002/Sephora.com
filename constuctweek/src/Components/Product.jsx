import React from 'react'
import styles from '../Components/Product.module.css'
import Accordion from 'react-bootstrap/Accordion';
function Product() {
  return (
    <div className={styles.mainsection}>
        <div className={styles.sidebar}>
         <h1>Filter Products</h1>    
        <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Rating</b></Accordion.Header>
          <Accordion.Body className={styles.rating}>
              <input type="checkbox" />  
              <label > <b>4 Stars & above</b> </label><br />
              <input type="checkbox" />  
              <label ><b>3 Stars</b></label><br />
              <input type="checkbox" />  
              <label ><b>1 & 2 Stars </b></label> <br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion>
        <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Rating</b></Accordion.Header>
          <Accordion.Body className={styles.rating}>
              <input type="checkbox" />  
              <label > <b>4 Stars & above</b> </label><br />
              <input type="checkbox" />  
              <label ><b>3 Stars</b></label><br />
              <input type="checkbox" />  
              <label ><b>1 & 2 Stars </b></label> <br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion>    
        </div>
        <div className={styles.gridsection}>
           
        </div>
    </div>
  )
}

export default Product