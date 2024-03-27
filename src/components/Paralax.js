// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "../styles/Paralax.css";
// // import images from "./images"; // Assuming you have an images.js file exporting the images array
// const images = [
//     {
//       path: "../assets/DallasMavs",
//       position: { top: "-5%", left: "5%" },
//       speed: 0.08
//     },
//     {
//       path: "../assets/SF.png",
//       position: { top: "25%", left: "20%" },
//       speed: 0.03
//     },
//     {
//       path: "../assets/SF.png",
//       position: { top: "60%", left: "40%" },
//       speed: 0.065
//     },
//     {
//       path: "../assets/SF.png",
//       position: { top: "70%", left: "10%" },
//       speed: 0.04
//     },
//     {
//       path: "../assets/SF.png",
//       position: { top: "-10%", left: "65%" },
//       speed: 0.025
//     }

//   ];
// const ParallaxEffect = () => {
//     const galleryRef = useRef(null);
//     const heroRef = useRef(null);

//     useEffect(() => {
//       const gallery = galleryRef.current;
//       const hero = heroRef.current;

//       if (gallery && hero) {
//         images.forEach((item) => {
//           const imageWrapper = document.createElement("div");
//           imageWrapper.classList.add("image-wrapper");
//           imageWrapper.style.top = item.position.top;
//           imageWrapper.style.left = item.position.left;

//           const img = document.createElement("img");
//           img.src = item.path;
//           imageWrapper.appendChild(img);

//           gallery.appendChild(imageWrapper);
//         });

//         hero.addEventListener("mousemove", (e) => {
//           const imageWrappers = gallery.querySelectorAll(".image-wrapper");
//           imageWrappers.forEach((image, index) => {
//             const x = (e.clientX - window.innerWidth / 2) * images[index].speed;
//             const y = (e.clientY - window.innerHeight / 2) * images[index].speed;
//             gsap.to(image, { x, y, duration: 0.75 });
//           });
//         });
//       }
//     }, []);

//     return (
//       <div className="hero-section" ref={heroRef}>
//         <div id="gallery" ref={galleryRef}></div>
//         {/* Your existing content goes here */}
//       </div>
//     );
//   };

//   export default ParallaxEffect;
