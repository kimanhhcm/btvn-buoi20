const products = [
  { id: 1, name: "Thiết bị giám hành trình GT-S8", price: 1515000 },
  { id: 2, name: "Thiết bị giám sát hình ảnh người lái xe MDVR-02", price: 2850000 },
  { id: 3, name: "Thiết bị giám sát hành trình tích hợp camera AI TLS Dashcam", price: 4380000 },
  { id: 4, name: "Thiết bị giám sát hành trình T88", price: 935000 },
];

let cart = [];

// Hiển thị danh sách sản phẩm
function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${p.name}</td>
        <td>${p.price.toLocaleString()} đ</td>
        <td>
          <input type="number" id="qty-${p.id}" min="1" value="1">
          <button class="btn btn-add" onclick="addToCart(${p.id})">Thêm</button>
        </td>
      </tr>
    `;
  });
}

// Thêm sản phẩm vào giỏ
function addToCart(id) {
  const qtyInput = document.getElementById(`qty-${id}`);
  const quantity = parseInt(qtyInput.value);
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  renderCart();
}

// Hiển thị giỏ hàng
function renderCart() {
  const tbody = document.querySelector("#cartTable tbody");
  const emptyMsg = document.getElementById("emptyMessage");
  const cartTable = document.getElementById("cartTable");
  const updateBtn = document.getElementById("updateCart");
  const clearBtn = document.getElementById("clearCart");

  tbody.innerHTML = "";

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    cartTable.style.display = "none";
    updateBtn.style.display = "none";
    clearBtn.style.display = "none";
  } else {
    emptyMsg.style.display = "none";
    cartTable.style.display = "table";
    updateBtn.style.display = "inline-block";
    clearBtn.style.display = "inline-block";

    cart.forEach((item, i) => {
      const subtotal = item.price * item.quantity;
      tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${item.name}</td>
          <td>${item.price.toLocaleString()} đ</td>
          <td>
            <input type="number" min="1" value="${item.quantity}" 
              onchange="changeQuantity(${item.id}, this.value)">
          </td>
          <td id="subtotal-${item.id}">${subtotal.toLocaleString()} đ</td>
          <td><button class="btn btn-delete" onclick="removeItem(${item.id})">Xóa</button></td>
        </tr>
      `;
    });
  }

  updateTotals();
}

// Khi thay đổi số lượng
function changeQuantity(id, newQty) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = parseInt(newQty);
    const newSubtotal = item.price * item.quantity;
    document.getElementById(`subtotal-${id}`).textContent = newSubtotal.toLocaleString() + " đ";
    updateTotals();
  }
}

// Cập nhật tổng số lượng và tổng tiền
function updateTotals() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.getElementById("totalQuantity").textContent = totalQuantity;
  document.getElementById("totalAmount").textContent = totalAmount.toLocaleString() + " đ";
}

// Xóa từng sản phẩm
function removeItem(id) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
  }
}

// Xóa toàn bộ giỏ hàng
document.getElementById("clearCart").addEventListener("click", () => {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng không?")) {
    cart = [];
    renderCart();
  }
});

//  Nút "Cập nhật giỏ hàng" – kiểm tra và làm mới toàn bộ giỏ hàng
document.getElementById("updateCart").addEventListener("click", () => {
  // Duyệt lại tất cả các sản phẩm trong giỏ
  cart.forEach(item => {
    const input = document.getElementById(`input-${item.id}`);
    if (input) {
      const newQty = parseInt(input.value);
      if (newQty > 0) item.quantity = newQty;
    }
  });

  // Làm mới lại toàn bộ bảng, tính lại thành tiền & tổng cộng
  renderCart();

  // Hiển thị thông báo kiểm tra lại
  alert(" Giỏ hàng đã được cập nhật");
});

// Khi tải trang
renderProducts();
renderCart();