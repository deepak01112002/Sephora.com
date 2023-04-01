import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Productlist.module.css'
function Productlist({title,price,id,category,type,image,rating}) {
  return   <Link to={`/Makeup/${id}`} style={{textDecoration:"none",color:"black"}}><div className={styles.card}>
    <img src={image} alt={title} />
   <h6>{title}</h6>
    <p>Category : {category}</p>
    <p>{type}</p>
    <p>Rating : {rating}</p>
    <h6>Price: ${price} <strike>1299</strike>25% off</h6>

</div></Link>
}

export default Productlist