import React, { useEffect, useState } from 'react'
import photo1 from '../Images/photo1.png'
import photo2 from '../Images/photo2.png'
import photo3 from '../Images/photo3.png'
import styled from 'styled-components';
import styles from '../Components/SinglePage.module.css'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SinglePage() {
  const {id }= useParams()
  const [data,setdata] = useState()
  const handleaddtocart = async ()=>{
    try {
      return axios({
        method : "post",
        url : "http://localhost:8080/cart",
        data:{
          ...data,
          "Quantity" : 1
        }
      }).then((res)=>{
        alert("Added to cart")
        
      })
    } catch (error) {
    console.log("errro is ", error)
    }
     
  }
  console.log(id)
  useEffect(()=>{
    axios.get(`http://localhost:8080/products/${id}`)
    .then((res)=>{
       setdata(res.data)
    })
  },[])
  console.log(data)
  return (
  <MAINDIV >
    <DIV className={styles.mainsection}>
        <div className='imagesection'>
          <img className='mainimage' src="https://www.sephora.com/productimages/sku/s2518934-main-zoom.jpg?imwidth=930" alt="lipstick" />
        </div>
        <div>
           <h2>Rare Beauty by Selena Gamez</h2>
           <h3>Warm Wishes Effortless Bronzer Sticks</h3>
           <img src={photo1} alt="" />
           <p><b>$26.00</b> get it for $24.70 (5% off) with Auto-Replenish</p>
           <p>or 4 payments of $6.50 with <b>Klarna</b>, or <b>afterpay</b></p>
           <p>Color: Happy - dewy cool pink</p>
           <img src={photo2} alt="color" />
           <div className='shippart'>
              <h6>Get it shipped</h6>
              <a href="">Shopping & Returns</a> 
           </div>
           <div id={styles.grey} className='grey'>
              <input type="checkbox" required />
              <label><b>Standard</b> Beauty Insiders enjoy <b>FREE standard shipping</b> on all orders.</label>
              <br />
              <input type="checkbox"  />
              <label><b>Same-Day Delivery</b> Same-Day Delivery not available for you location</label>
           </div>
           <button onClick={handleaddtocart} className='addtobasket'
           id={styles.addcart}>Add to Basket</button>
        </div>
      </DIV>
      <h2>Highlights</h2>
      <img className='highlights' src={photo3} alt="highlight" />
      <h2>About the Product</h2>
      <div id={styles.aboutproduct} className='aboutproduct'>
        <p>Item 2362085</p>
        <div>
        <p><b>What it is:</b> A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes.</p>
        <p><b>Ingredient Callouts:</b> Free of sulfates SLS and SLES, parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, hydroquinone, triclosan, and triclocarban, and contains less than one percent of synthetic fragrances. This product is also vegan and cruelty-free.</p>
        </div>
    </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Ingredient</b></Accordion.Header>
        <Accordion.Body>
             Hydrogenated Polyisobutene, Hydrogenated Poly(C6-14 Olefin), Mica, Octyldodecanol, Ethylene/Propylene/Styrene Copolymer, Trimethylsiloxysilicate, Isododecane, 1,2-Hexanediol, Disteardimonium Hectorite, Sorbitan Sesquioleate, Propylene Carbonate, Triethoxycaprylylsilane, Aluminum Hydroxide, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract. [+/- May Contain/Peut Contenir: Iron Oxides (CI 77491), Red 7 Lake (CI 15850), Yellow 6 Lake (CI 15985), Titanium Dioxide (CI 77891), Yellow 5 Lake (CI 19140), Red 28 Lake (CI 45410)].
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>How to Use</b></Accordion.Header>
        <Accordion.Body>
             <p><b>Suggested Usage:</b></p>
             <ul>
                <li>Gently remove excess product from applicator.</li>
                <li>Use the doe-foot applicator and place one or two dots on each cheek.</li>
                <li>Use fingertips and gently pat into skin for a seamless finish.</li>
             </ul>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>  
     <div className='Likemainsection'>
        <h1>You May Also Like</h1>
        <div className='mainmoreproduct'>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
            <div className='moreproduct'>
               <img src="https://www.sephora.com/productimages/sku/s2363844-main-zoom.jpg?imwidth=160" alt="" />
               <p>Patrick TA</p>
               <p>Major Beauty Headlines-DOuble-Take Creame</p>
               <p><b>$36.00</b></p>
            </div>
        </div>
         
      </div> 
      <div className='adimage'>
        <img src="https://pubsaf.global.ssl.fastly.net/prmt/9cd18988fd8ff79faa6c5da837542ae1" alt="ad" />
      </div>
      <Accordion className='question' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Question & Answer</b></Accordion.Header>
        <Accordion.Body>
               <p><b>Q1.can i bring this on a plane?</b></p>
               <p className='grey'>Asked 21 Feb 2023 by EllieArtz</p>
               <p><b>A:</b>Yes</p>
               <p><b>Q1.can i bring this on a plane?</b></p>
               <p className='grey'>Asked 21 Feb 2023 by EllieArtz</p>
               <p><b>A:</b>Yes</p>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>  
    </MAINDIV>      
  )
}

export default SinglePage

const DIV = styled.div`
  display:flex;
  margin:50px;
  width:100%;
  margin:auto;
  justify-content:space-around;
  .imagesection{
    width:40%;
    height:70vh;
    
  }
  .mainimage{
    width:100%;
    height:100%;
    
  }
  .shippart{
    display:flex;
    justify-content:space-between;
    background-color:#E0E0E0;
    padding:5px;
  }
  .grey{
    background-color:#E0E0E0;
    padding:10px;
    line-height:30px;
    width:100%;
  }
  .grey input{
    width:15px;
    height:15px;
    accent-color:black;
  }
  .addtobasket{
    display:block;
    margin-left:20px;
    margin-top:20px;
    width:250px;
    height:40px;
    border-radius:20px;
    color:white;
    border-color:white;
    background-color:red;
  }
`
const MAINDIV = styled.div`
  width:85%;
  margin:auto;
  padding:5px;
  .highlights{
    width:70%;
    margin-left:180px;
  }
  .aboutproduct{
    display:flex;
    padding:10px;
    justify-content:space-between;
  }
  .aboutproduct div{
    width:80%;
  }
  .ingredient button{
    width:100%;
    height:35px;
    border:none;
  }
  .mainmoreproduct{
    display: flex;
    width:100%;
    overflow:auto;
   }
  .moreproduct{
    width:80%;
    height:350px;
    padding:10px;
    margin:5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .moreproduct:hover{
    width : 90%;
    transition: 1s ease-in;
  }
  .moreproduct img{
    height:50%;
    margin-bottom:10px;
    
    
  }
  .Likemainsection{
    margin:10px;
  }
  .adimage{
    width:70%;
  
    margin:auto;
  }
  .adimage img{
    width:100%;
  }
  .question {
    margin:10px;
  }
  .grey{
    color:#616161
  }
  
`

