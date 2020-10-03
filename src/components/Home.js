import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.hortongroup.com/hs-fs/hubfs/Services%20Rework/backgrounds/websites%20and%20custom/ecommerce%20background.png?width=700&name=ecommerce%20background.png"
      />
      <div className="home__row">
        <Product
          id="00001"
          title="the best technology"
          price={4000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVl6BWuDXRNf_dkoA69Yr3XZ7_sM7pnS0-1g&usqp=CAU"
        />
        <Product
          id="00001"
          title="the best technology"
          price={4000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVl6BWuDXRNf_dkoA69Yr3XZ7_sM7pnS0-1g&usqp=CAU"
        />
      </div>
      <div className="home__row">
        <Product
          id="00001"
          title="the best technology"
          price={4000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVl6BWuDXRNf_dkoA69Yr3XZ7_sM7pnS0-1g&usqp=CAU"
        />
        <Product
          id="00001"
          title="the best technology"
          price={4000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVl6BWuDXRNf_dkoA69Yr3XZ7_sM7pnS0-1g&usqp=CAU"
        />
        <Product
          id="00001"
          title="the best technology"
          price={4000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVl6BWuDXRNf_dkoA69Yr3XZ7_sM7pnS0-1g&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
