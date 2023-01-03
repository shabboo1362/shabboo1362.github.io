import "../assets/styles/ProductTemp.css";
const url='https://fronttask.techeyeco.com';
const ProductTemp= ({ image, name,  price,discount ,dis}:{ image:any, name:any,  price:any,discount:any,dis:any }) => {
    return (
      <div className="col-sx-4 product">
        <div className=" product-image">
          <img src={url+image} alt={name} height="150" />
        </div>
        <div className=" product-detail" >
         <p >{name}</p>
        </div>
        <div className=" product-price">
         <span>{price} $</span>
          {(discount >0 || dis===1) && <span className="discount align-items-right">{discount}%  OFF</span>}
        </div>
      </div>
    );
  }
  export default ProductTemp;