import React, { useEffect, useState } from 'react'
import styles from '../Components/Product.module.css'
import Accordion from 'react-bootstrap/Accordion';
import { getProducts } from '../redux/productReducer/action';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Productlist from "./Productlist";
import { useSearchParams } from 'react-router-dom';
function Product() {
    const [data,setdata] = useState([])
    const [searchParams,setParams] = useSearchParams()
    const [rate,setrate] = useState([])
    const [color,setcolor] = useState([])
    const [pricefilter,setpricefilter] = useState([])
    const [pricesort,setpricesort] = useState("")
    const obj = {
      params:{
        rate:searchParams.getAll("rate"),
        color:searchParams.getAll("color")
      }
    }
  useEffect(()=>{
    
    axios.get("http://localhost:8080/products",obj)
    .then((res)=>{
      if(!pricesort){
        setdata((res.data))
        }else{
           pricesort == "asc" ? setdata(res.data.sort((a,b)=>a.price - b.price)) : setdata(res.data.sort((a,b)=>b.price - a.price)) 
        }
    })
  },[pricesort])
  useEffect(()=>{
    const params = {
     Rating : rate ,
     color
     }
    setParams(params)
  },[rate,color])
  const handleChange = (e)=>{
    let data = [...rate]
       let value = e.target.value;
       if(data.includes(value)){
         data = data.filter(el=>el!==value)
       }else{
         data.push(value)
       }
       setrate(data)
  }
  const handleColorChange = (e)=>{
     let data = [...color]
     let value = e.target.value;
     if(data.includes(value)){
      data = data.filter((el)=>el!==value)
     }else{
      data.push(value)
     }
     setcolor(data)
  }
   // sorting
  const handlepricesort = (e)=>{
    setpricesort(e.target.value)
   
   }
   
  return (
     
    <div className={styles.mainsection}>
        <div className={styles.sidebar}>
         <h1>Makeup</h1> 
         <h6 className={styles.heading}>Sort</h6>
         <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Sort By Price</b></Accordion.Header>
          <Accordion.Body className={styles.rating}>
              <input onChange={handlepricesort} name="price"  id='asc' value={"asc"} type="radio" />  
              <label > <b>Low to Hight</b> </label><br />
              <input  onChange={handlepricesort} name='price'  id='dsc' value={"dsc"} type="radio" />  
              <label ><b>High to Low</b></label><br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion> 
       <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Sort By Name</b></Accordion.Header>
          <Accordion.Body className={styles.rating}>
              <input type="checkbox" />  
              <label > <b>A-Z</b> </label><br />
              <input type="checkbox" />  
              <label ><b>Z-A</b></label><br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion>     
         <h6 className={styles.heading}>Filter the data</h6>
        <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Rating</b></Accordion.Header>
          <Accordion.Body className={styles.rating}>
              <input value={4} onChange={handleChange} type="checkbox" />  
              <label > <b>4 Stars & above</b> </label><br />
              <input value={3} onChange={handleChange} type="checkbox" />  
              <label ><b>3 Stars</b></label><br />
              <input value={2} onChange={handleChange} type="checkbox" />  
              <label ><b>1 & 2 Stars </b></label> <br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion>
        <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Price</b></Accordion.Header>
          <Accordion.Body className={styles.price}>
              <input type="checkbox" />  
              <label value={24} > <b>Under $25 </b> </label><br />
              <input type="checkbox" />  
              <label value={30} ><b>$25 to $50</b></label><br />
              <input type="checkbox" />  
              <label ><b>$50 to $100</b></label> <br />
              <input value={100} type="checkbox" />  
              <label ><b>$100 and above </b></label> <br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion> 
       <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Color</b></Accordion.Header>
          <Accordion.Body className={styles.color}>
              <input value={"pink"}  onChange={handleColorChange} type="checkbox" />  
              <label > <b>Pink</b> </label><br />
              <input value={"red"} onChange={handleColorChange} type="checkbox" />  
              <label ><b>Red</b></label><br />
              <input value={"brown"} onChange={handleColorChange} type="checkbox" />  
              <label ><b>Brown</b></label> <br />
              <input value={"grey"} onChange={handleColorChange} type="checkbox" />  
              <label ><b>Grey</b></label> <br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion>       
        </div>
        
        <div className={styles.gridsection}>
          
          {
           data && data.length ? 
           
           data.map((el)=>(
             
            <Productlist
            key={el.id}
            {...el}
            />
           
           ))
           : <span className={styles.spinner}>
            <h1>Data Not Found...</h1>
           <Spinner animation="grow" variant="success" />
           <Spinner animation="grow" variant="danger" />
           <Spinner animation="grow" variant="warning" />
           <Spinner animation="grow" variant="info" />
           </span> 
          }
        </div>
    </div>
  )
}

export default Product