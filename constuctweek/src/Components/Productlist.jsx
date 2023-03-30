import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Productlist.module.css'
function Productlist({name,price,id,category,type,avatar}) {
  return   <Link to={`/Makeup/${id}`} style={{textDecoration:"none",color:"black"}}><div className={styles.card}>
    <img src={avatar[0]||null} alt={name} />
   <h6>{name}</h6>
    <p>{category}</p>
    <p>{type}</p>
    <h6>${price} <strike>1299</strike> </h6>

</div></Link>
}

export default Productlist