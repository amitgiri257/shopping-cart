import React, { useState, useEffect } from 'react';

function Cardview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


   function onAddToCartClick(){
    return ;
   }
  useEffect(() => {
    // Make an API request when the component mounts
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container ">
      {
        data.products.map((item) => (
            <div className="card-section m-4 ">
      <div className="card" style={{width:"18rem"}} >
  <img className="card-img-top img" src={item.images[0]} alt="Card image cap" />
  <div className="card-body">
    
    <p className="card-text">Title : {item.title} </p>
    <p className="card-text">Price : ${item.price} </p>
    <button onClick={() => onAddToCartClick(item)} href="#" className="btn btn-dark text-white btn-lg btn-block">Add To Cart</button>
  </div>
</div>
    </div>
      ))
      }
    </div>
  );
}

export default Cardview;
