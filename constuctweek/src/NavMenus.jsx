import { Link } from "react-router-dom";

const NavMenus = () => {
  return (
    <div className="full-width">
      <Link to={"/"}>New</Link>
      <div className="sub-menu">
        <a href="">All New</a>
        <a href="">Just Dropped</a>
        <a href="">New Makeup</a>
        <a href="">New Skincare</a>
        <a href="">New Haircare</a>
        <a href="">New Fragrance</a>
        <a href="">New Bath & Body</a>
        <a href="">New Tools & Brushes</a>
      </div>
      <a href="">Brand</a>
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
  );
};

export default NavMenus;
