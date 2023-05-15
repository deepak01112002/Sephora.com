import { Link } from "react-router-dom";


const NavMenus=()=>{
    return (
      <div>
        <div className="full-width">
          <Link to={"/"}>Home</Link>
          <Link to={"/Makeup"}>Makeup</Link>
          <a href="">Skincare</a>
          <a href="#">Hair</a>
          <a href="">Fragrance</a>
          <a href="">Tools & Brushes</a>
          <a href="">Bath & Body</a>
          <a href="">Mini Size</a>
          <a href="">Gifts</a>
          <a href="">Beauty Under $20</a>
          <a href="">Sale & Offers</a>
          
        </div>
        <div className="half-width">
        <Link to={"/"}> <button>Home</button></Link>
        <Link to={"/Makeup"}> <button>Makeup</button></Link>
          <button>Skincare</button>
          <button>Hair</button>
          <button>Fragrance</button>
          <button >Tools & Brushes</button>
          <button >Bath & Body</button>
          <button >Mini Size</button>
          <button >Gifts</button>
          <button >Beauty Under $20</button>
          <button >Sale & Offers</button>
        </div>
    </div>
      );
}


export default NavMenus;