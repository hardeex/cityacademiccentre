var slideImage = document.getElementById("slider-img");
var storeSliderImages = new Array(
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/@UnSiHH4WBGNyltc-200x300.jpg",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/@UnSig1Kr4Ozfoac-300x200.jpg",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/@UnSilUaaKCUANVI-300x200.jpg",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-8-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-7-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-5-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-6-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-4-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-3-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-2-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/mentor-1-300x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/Banner-2-Positive-Smiling-Girl-Jim-Fahad-Digital-257x300.png",
    "https://cityacademiccentre.com/wp-content/uploads/2023/12/Banner-Positive-Smiling-Girl-233x300.png"
);

var len = storeSliderImages.length;
var i = 0;

function slider(){
    if(i > len - 1){
        i = 0;
    }

    slideImage.src = storeSliderImages[i];
    i++;
    setTimeout('slider()', 3000)
}