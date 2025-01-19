let imgSlider = document.querySelector(".slider img");
let icons = document.querySelectorAll(".slider i");
let imgArr = [
  "anhnen.jpg",
  "hinhnen4.png",
  "hinhnen6.png",
  "hinhnen7.png",
  "hinhnen8.png",
];
let index = 0;

function next() {
  index++;
  if (index >= imgArr.length) {
    index = 0;
  }
  imgSlider.src = `/HinhAnh/${imgArr[index]}`;
}

function previous() {
  index--;
  if (index < 0) {
    index = imgArr.length - 1;
  }
  imgSlider.src = `/HinhAnh/${imgArr[index]}`;
}

icons[1].addEventListener("click", next);
icons[0].addEventListener("click", previous);

setInterval(next, 2000);

// funtion thay doi vi tri theo toa do
function first() {
  index = 0;
  imgSlider.src = `/HinhAnh/${imgArr[index]}`;
}

function last() {
  index = imgArr.length - 1;
  imgSlider.src = `/HinhAnh/${imgArr[index]}`;
}

let inp = document.querySelectorAll(".btn-container input");
inp[0].addEventListener("click", first);
inp[inp.length - 1].addEventListener("click", last);

//khi con trỏ chuột di chuyển qua các phần tử thì hàm Display sẽ đc gọi
function display() {                                  
  if (
    icons[0].style.display === "block" &&
    icons[1].style.display === "block"
  ) {
    icons[0].style.display = "none";
    icons[1].style.display = "none";
  } else {
    icons[0].style.display = "block";
    icons[1].style.display = "block";
  }
}

imgSlider.addEventListener("mouseover", display); //onMouseOver thay đổi nội dung của nút khi người dùng di chuột vào nó.
imgSlider.addEventListener("mouseout", display); //onMouseOut khôi phục nội dung ban đầu khi chuột rời khỏi nút.
icons[0].addEventListener("mouseover", display);
icons[0].addEventListener("mouseout", display);
icons[1].addEventListener("mouseover", display);
icons[1].addEventListener("mouseout", display);
