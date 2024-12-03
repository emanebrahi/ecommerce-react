// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../../style/sliderhome.css";
// import ProductsShape from "../ProductsShape";
// import TimerComponent from "./Timercomponent";
// import Titlehome from "../../Titlehome";
// import { Timercomponentdataone } from "../../../data/TimerComponent/Timercomponentdataone";

// function Sliderproducts() {

//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState(()=>{
//     const savedItem = localStorage.getItem("cart")
//     return savedItem ? JSON.parse(savedItem) : []
//   })

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products`)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(()=>{
//     localStorage.setItem("cart" ,JSON.stringify(cart)) 
//   },[cart])

//   const addToCart = (id) =>{
//     const product  =  data.find((item) => item.id === id);
//     if(product){
//       const existingProduct  = cart.find((item)=>item.id == id)
    
//     if (existingProduct){
//       setCart(
//         cart.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }

//     }
//   }
//   let settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };


//   const styleContainerImage = {
//     height: "380px",
//     backgroundColor: "#f5f5f5",
//   };

//   return (
//     <div className="container m-auto" style={{ height: "639px" }}>
//       <div className="d-flex">
//         <Titlehome title="today's" secondTitle="Flash Sales" />
//         <div className="mt-5">
//         <TimerComponent seperatorClass="seperator" dataGenerator={Timercomponentdataone} />

//         </div>
//       </div>
//       <div style={styleContainerImage}>
//         <Slider {...settings}>
//           {data &&
//             data.map((element, index) => (
//              <div  className="slider-products-container">
//                <ProductsShape key={index} element={element} index={index} />
//               <div className="text-center">
//               <button className="btn btn-dark w-100 add-to-cart" onClick={()=>addToCart(element.id)}>add to cart</button>
//             </div>
//              </div>
//             ))}
//         </Slider>
//       </div>

     

//       <div className="text-center mt-3">
//         <button className="btn btn-danger ps-5 pe-5 mb-4">
//           view all products
//         </button>
//       </div>
//       <hr />
//     </div>
//   );
// }

// export default Sliderproducts;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../../style/sliderhome.css";
// import ProductsShape from "../ProductsShape";
// import TimerComponent from "./Timercomponent";
// import Titlehome from "../../Titlehome";
// import { Timercomponentdataone } from "../../../data/TimerComponent/Timercomponentdataone";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../store/CartSlice";

// function Sliderproducts() {
//   const [data, setData] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products`)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   let settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const styleContainerImage = {
//     height: "380px",
//     backgroundColor: "#f5f5f5",
//   };

//   return (
//     <div className="container m-auto" style={{ height: "639px" }}>
//       <div className="d-flex">
//         <Titlehome title="today's" secondTitle="Flash Sales" />
//         <div className="mt-5">
//           <TimerComponent seperatorClass="seperator" dataGenerator={Timercomponentdataone} />
//         </div>
//       </div>
//       <div style={styleContainerImage}>
//         <Slider {...settings}>
//           {data &&
//             data.map((element, index) => (
//               <div className="slider-products-container" key={index}>
//                 <ProductsShape element={element} index={index} />
//                 <div className="text-center">
//                   <button
//                     className="btn btn-dark w-100 add-to-cart"
//                     onClick={() => handleAddToCart(element)}
//                   >
//                     add to cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </Slider>
//       </div>
//       <div className="text-center mt-3">
//         <button className="btn btn-danger ps-5 pe-5 mb-4">view all products</button>
//       </div>
//       <hr />
//     </div>
//   );
// }

// export default Sliderproducts;








import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../style/sliderhome.css";
import ProductsShape from "../ProductsShape";
import TimerComponent from "./Timercomponent";
import Titlehome from "../../Titlehome";
import { Timercomponentdataone } from "../../../data/TimerComponent/Timercomponentdataone";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/CartSlice";  // Correct import path

function Sliderproducts() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);  
    dispatch(addToCart(product));  
  };

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const styleContainerImage = {
    height: "380px",
    backgroundColor: "#f5f5f5",
  };

  return (
    <div className="container m-auto" style={{ height: "639px" }}>
      <div className="d-flex">
        <Titlehome title="today's" secondTitle="Flash Sales" />
        <div className="mt-5">
          <TimerComponent seperatorClass="seperator" dataGenerator={Timercomponentdataone} />
        </div>
      </div>
      <div style={styleContainerImage}>
        <Slider {...settings}>
          {data &&
            data.map((element, index) => (
              <div className="slider-products-container" key={index}>
                <ProductsShape element={element} index={index} />
                <div className="text-center">
                  <button
                    className="btn btn-dark w-100 add-to-cart"
                    onClick={() => handleAddToCart(element)} 
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-danger ps-5 pe-5 mb-4">view all products</button>
      </div>
      <hr />
    </div>
  );
}

export default Sliderproducts;
