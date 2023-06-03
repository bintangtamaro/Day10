// const testimonialData = [
//     {
//         author: "bintang tamaro",
//         quote: "woke",
//         image: "https://w0.peakpx.com/wallpaper/741/299/HD-wallpaper-cristiano-ronaldo-2018-cristiano-ronaldo-sports-football-boys-male-celebrities.jpg",
//         rating: 5,
//     },
//     {
//         author: "bintang tamaro",
//         quote: "Keren cuys!!",
//         image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         rating: 4,
//     },
//     {
//         author: "wokee",
//         quote: "The Best Pelayanannya!",
//         image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         rating: 4,
//     },
//     {
//         author: "Suryaaa",
//         quote: "Oke lah!",
//         image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80",
//         rating: 3,
//     },
//     {
//         author: "Suryeah",
//         quote: "Apa apaan ini!",
//         image: "https://www.pinhome.id/blog/wp-content/uploads/2021/07/wallpaperaccess.jpg",
//         rating: 1,
//     },
// ];

// function allTestimonials() {
//     let testimonialHTML = "";

//     testimonialData.forEach(function (item) {
//         testimonialHTML += `<div class="testimonial">
//                             <img src="${item.image}" class="profile-testimonial"/>
//                             <p class="quote">${item.quote}</p>
//                             <p class="author">- ${item.author}</p>
//                             <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//                             </div>`;
//     });

//     document.getElementById("testimonials").innerHTML = testimonialHTML;
// }

// allTestimonials();

// function filterTestimonials(rating) {
//     let testimonialHTML = "";

//     const testimonialFiltered = testimonialData.filter(function (item) {
//         return item.rating === rating;
//     });

//     if (testimonialFiltered.length === 0) {
//         testimonialHTML += `<h1>Data not found!</h1>`;
//     } else {
//         testimonialFiltered.forEach(function (item) {
//             testimonialHTML += `<div class="testimonial">
//                                 <img
//                                     src="${item.image}"
//                                     class="profile-testimonial"
//                                 />
//                                 <p class="quote">${item.quote}</p>
//                                 <p class="author">- ${item.author}</p>
//                                 <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//                             </div>
//                         `;
//         });
//     }
//     document.getElementById("testimonials").innerHTML = testimonialHTML;
// }
