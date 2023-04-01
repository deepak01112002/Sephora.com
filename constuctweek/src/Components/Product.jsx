import React, { useEffect, useState } from 'react'
import styles from '../Components/Product.module.css'
import Accordion from 'react-bootstrap/Accordion';
import { getProducts } from '../redux/productReducer/action';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Productlist from "./Productlist";
import { useLocation, useSearchParams } from 'react-router-dom';
function Product() {
  
    const [data,setdata] = useState([])
    const [searchParams,setParams] = useSearchParams()
    const Rate = searchParams.getAll("rating")
   const Color = searchParams.getAll("color")
    const [rating,setrating] = useState(Rate|| [])
    const [color,setcolor] = useState(Color||[])
    const {search} = useLocation()
    const [page,setpage] = useState(1)
    const [pricesort,setpricesort] = useState("")
   
    const obj = {
      params:{
        rating:searchParams.getAll("rating"),
        color:searchParams.getAll("color"),
        _limit:10,
        _page:searchParams.get("page")
      }
    }
    console.log(search)
  useEffect(()=>{
    
    axios.get("http://localhost:8080/products",obj)
    .then((res)=>{
      
      if(!pricesort){
        setdata((res.data))
        }else{
        pricesort == "asc" ? setdata(res.data.sort((a,b)=>a.price - b.price)) : setdata(res.data.sort((a,b)=>b.price - a.price)) 
        }
    })
  },[pricesort,search,page])
  useEffect(()=>{
    const params = {
     rating,
     color,
     page
     }
    setParams(params)
  },[rating,color,page])
  const handleChange = (e)=>{
    let data = [...rating]
       let value = e.target.value;
       if(data.includes(value)){
         data = data.filter(el=>el!==value)
       }else{
         data.push(value)
       }
       setrating(data)
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
   console.log(Rate,Color)
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
        
        <h6 className={styles.heading}>Filter the data</h6>
        <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Rating</b></Accordion.Header>
          <Accordion.Body className={styles.rating}>
              <input value={4} checked={Rate.includes("4")} onChange={handleChange} type="checkbox" />  
              <label > <b>4 Stars & above</b> </label><br />
              <input value={3} 
              checked={Rate.includes("3")} onChange={handleChange} type="checkbox" />  
              <label ><b>3 Stars</b></label><br />
              <input value={2} checked={Rate.includes("2")} onChange={handleChange} type="checkbox" />  
              <label ><b>1 & 2 Stars </b></label> <br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion>
        
       <Accordion >
         <Accordion.Item >
        <Accordion.Header><b>Color</b></Accordion.Header>
          <Accordion.Body className={styles.color}>
              <input value={"pink"}  onChange={handleColorChange} type="checkbox" checked={Color.includes("pink")} />  
              <label > <b>Pink</b> </label><br />
              <input value={"red"} checked={Color.includes("red")} onChange={handleColorChange} type="checkbox" />  
              <label ><b>Red</b></label><br />
              <input checked={Color.includes("brown")} value={"brown"} onChange={handleColorChange} type="checkbox" />  
              <label ><b>Brown</b></label> <br />
              <input checked={Color.includes("grey")} value={"grey"} onChange={handleColorChange} type="checkbox" />  
              <label ><b>Grey</b></label> <br />
          </Accordion.Body>
       </Accordion.Item>
       </Accordion> 
       <p className={styles.page}>Let's Change the Page</p>
        <div className={styles.pagination}>
        <button disabled={page==1} onClick={()=>setpage(page-1)}>Prev</button>
        <button disabled>{page}</button>
        <button onClick={()=>setpage(page+1)}>Next</button>
        </div>      
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