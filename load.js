function addToCart(img, name, content, price) {
  // Lấy giỏ hàng hiện tại từ localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Tạo đối tượng sản phẩm
  const product = {
    img: img,
    name: name,
    content: content,
    price: price,
    quantity: 1, // Mặc định số lượng là 1
  };

  // Tìm sản phẩm trong giỏ hàng
  const existingProductIndex = cart.findIndex((p) => p.name === product.name);

  if (existingProductIndex > -1) {
    // Nếu sản phẩm đã tồn tại, tăng số lượng
    cart[existingProductIndex].quantity += 1;
  } else {
    // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
    cart.push(product);
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Hiển thị thông báo thành công
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
}
// Tạo mảng object
const dssp = [
  {
    img: "giay1.jpeg",
    name: "Nike Air Max",
    conten: "NIKE GAMMA FORCE Mã SP: DX9176 106",
    price: "1,500,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
  {
    img: "giay2.jpg",
    name: "Adidas Ultra Boost",
    conten: "NIKE GAMMA FORCE Mã SP: DX9176 106",
    price: "1,700,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
  {
    img: "giay3.jpeg",
    name: "Puma Suede Classic",
    conten: "ADIDAS NMD R1 REFINED Mã SP: H02334",
    price: "2,000,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
  {
    img: "giaysandal1.jpeg",
    name: "Reebok Classic Leather",
    conten: "Sandals F6 sport đen quai liền có thun Mã sản phẩm: F6S1111",
    price: "800,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
  {
    img: "giaysandal2.jpeg",
    name: "Converse Chuck Taylor",
    conten: "Sandals F6 sport xám rêu Mã sản phẩm: F6S2424",
    price: "850,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
  {
    img: "giaysandal3.jpeg",
    name: "Vans Old Skool",
    conten: "Sandals F6 sport vàng kem Mã sản phẩm: F6S5252",
    price: "900,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
  {
    img: "giay16.jpeg",
    name: "Asics Gel Kayano",
    conten: "Adidas Alphaboost V1 - Trắng",
    price: "1,800,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
  {
    img: "giay7.jpeg",
    name: "New Balance 990",
    conten: "Adidas Alphaboost V1 - Trắng",
    price: "1,900,000 VNĐ", // Thêm giá tiền
    button: "Thêm vào giỏ",
  },
];

const sanphamgiamGia = [
  {
    img: "giay4.jpeg",
    name: "Nike Air Max",
    originalPrice: "1.000.000d",
    salePrice: "800.000d",
    link: "ao_giam_gia1.html",
  },
  {
    img: "giay5.jpg",
    name: "Nike Air Force 1",
    originalPrice: "800.000đ",
    salePrice: "650.000đ",
    link: "ao_giam_gia2.html",
  },
  {
    img: "giay9.jpeg",
    name: "Nike Air Zoom Pegasus",
    originalPrice: "900.000đ",
    salePrice: "650.000đ",
    link: "ao_giam_gia3.html",
  },
  {
    img: "giay14.jpeg",
    name: "Nike React Infinity Run",
    originalPrice: "700.000đ",
    salePrice: "500.000đ",
    link: "ao_giam_gia4.html",
  },
];

const footerSections = [
  {
    title: "VỀ CHÚNG TÔI",
    content: `<p>Công ty TNHH MTV Thương Mại Thời Trang Tổng Hợp (GTF) Văn phòng: Số
      163, Phan Đăng Lưu, Phường 01, Phú Nhuận, Hồ Chí Minh, Việt Nam</p>`,
  },
  {
    title: "LIÊN HỆ",
    content: `
      <p>Địa chỉ kho: 14 Đường Phan Đăng Lưu, Khu phố 7, Phường Long Bình,
      TP. Biên Hòa, Tỉnh Đồng Nai</p>
      <p>Tổng đài: 1900 63 64 01</p>
      <p>Mã số Doanh Nghiệp: 0314635071, đăng ký thay đổi ngày 20 tháng 04
      năm 2020</p>
    `,
  },
  {
    title: "THÔNG TIN",
    content: `
      <ul>
        <li><a href="#">Giới thiệu</a></li>
        <li><a href="#">Hệ thống cửa hàng</a></li>
        <li><a href="#">Thông tin liên hệ</a></li>
        <li><a href="#">Các điều khoản và điều kiện</a></li>
      </ul>
    `,
  },
  {
    title: "HỖ TRỢ KHÁCH HÀNG",
    content: `
      <ul>
        <li><a href="#">Chính sách giao hàng</a></li>
        <li><a href="#">Chính sách đổi trả hàng - Bảo hành</a></li>
        <li><a href="#">Chính sách trả góp</a></li>
        <li><a href="#">Chính sách bảo mật</a></li>
      </ul>
    `,
  },
];

const menu = [
  { text: "Trang Chủ", link: "trang_chu.html" },
  { text: "Sản Phẩm", link: "san_pham.html" },
  { text: "Giỏ Hàng", link: "gio_hang.html" },
  { text: "Đăng Nhập", link: "dang_nhap.html" },
  { text: "Đăng Ký", link: "dang_ky.html" },
  { text: "Địa Chỉ", link: "bando.html" },
];

//load sanpham.html

function loadsp() {
  let kq = "";
  for (let i = 0; i < dssp.length; i++) {
    kq += `<div class="product-item">
               <img src="/HinhAnh/${dssp[i].img}">
               <h3>${dssp[i].name}</h3>
               <p>${dssp[i].conten}</p>
               <p>${dssp[i].price}</p>
               <button onclick="addToCart('${dssp[i].img}', '${dssp[i].name}', '${dssp[i].conten}', '${dssp[i].price}')">${dssp[i].button}</button>
           </div>`;
  }
  document.getElementById("id").innerHTML = kq;

  // Load sản phẩm giảm giá
  let xuat = "";
  for (let i = 0; i < sanphamgiamGia.length; i++) {
    xuat += `<div class="product">
               <a href="${sanphamgiamGia[i].link}">
                 <img src="/HinhAnh/${
                   sanphamgiamGia[i].img
                 }" style="width: 400px; height: 300px" alt="Sản phẩm ${i + 1}">
               </a>
               <div class="details">
                 <h2>${sanphamgiamGia[i].name}</h2>
                 <p>Giá gốc: <span class="original-price">${
                   sanphamgiamGia[i].originalPrice
                 }</span></p>
                 <p>Giá giảm: <span class="sale-price">${
                   sanphamgiamGia[i].salePrice
                 }</span></p>
               </div>
             </div>`;
  }
  document.getElementById("sale-form").innerHTML = xuat;

  // Load menu
  let menuhtml = "<ul>";
  for (let i = 0; i < menu.length; i++) {
    menuhtml += `<li><a href="${menu[i].link}">${menu[i].text}</a></li>`;
  }
  menuhtml += "</ul>";
  document.querySelector("nav ul").innerHTML = menuhtml;

  // Load footer
  let footerHTML = "";
  for (let i = 0; i < footerSections.length; i++) {
    footerHTML += `<div class="footer-section">
                    <h3>${footerSections[i].title}</h3>
                    <div>${footerSections[i].content}</div>
                  </div>`;
  }
  document.querySelector("footer").innerHTML = footerHTML;

  
}

window.onload = loadsp;
