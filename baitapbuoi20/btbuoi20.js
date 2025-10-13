// ===== Bài tập 1=====
// In ra tên của tất cả người dùng.
const users = [ 

  { name: "An", age: 25 }, 

  { name: "Bình", age: 30 }, 

  { name: "Chi", age: 22 }, 

];
const names = users.map(user => user.name);
console.log(names);

// Tìm người có tuổi lớn nhất.
const oldest = users.reduce((max, user) => user.age > max.age ? user : max);
console.log(oldest);

// Tính tuổi trung bình của tất cả người dùng.
const averageAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;
console.log("Tuổi trung bình:", averageAge);

// ===== Bài tập 2=====

const products = [ 

  { name: "Laptop", price: 15000000 }, 

  { name: "Mouse", price: 250000 }, 

  { name: "Keyboard", price: 800000 }, 

];

// Tạo mảng mới chỉ chứa tên sản phẩm.
// Mảng tên sản phẩm
const productNames = products.map(p => p.name);
console.log("Tên sản phẩm:", productNames);

// Tổng giá trị
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Tổng giá trị:", totalPrice);

// Lọc sản phẩm > 1 triệu
const expensiveProducts = products.filter(p => p.price > 1000000);
console.log("Sản phẩm > 1 triệu:", expensiveProducts);

// ===== Bài tập 3=====

const students = [ 

  { name: "Lan", scores: [8, 9, 7] }, 

  { name: "Huy", scores: [6, 5, 7] }, 

  { name: "Minh", scores: [9, 8, 10] }, 

];
// 1. Tính điểm trung bình
const studentsWithAverage = students.map(s => {
  const avg = s.scores.reduce((sum, score) => sum + score, 0) / s.scores.length;
  return { ...s, average: avg };
});

// 2. Lọc học sinh giỏi
const goodStudents = studentsWithAverage.filter(s => s.average >= 8);

// 3. Sắp xếp giảm dần theo điểm trung bình
const sortedStudents = [...studentsWithAverage].sort((a, b) => b.average - a.average);

console.log("Danh sách có điểm TB:", studentsWithAverage);
console.log("Học sinh giỏi:", goodStudents);
console.log("Sắp xếp giảm dần:", sortedStudents);

// ===== Bài tập 4=====

const posts = [ 

  { 

    id: 1, 

    title: "JavaScript cơ bản", 

    tags: ["js", "basic"], 

    comments: [ 

      { user: "An", text: "Hay quá!" }, 

      { user: "Bình", text: "Rất dễ hiểu" }, 

    ], 

  }, 

  { 

    id: 2, 

    title: "Học React không khó", 

    tags: ["react", "js"], 

    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }], 

  }, 

];

// 1. In title + số lượng bình luận
posts.forEach(post => {
  console.log(`${post.title} - Số bình luận: ${post.comments.length}`);
});

// 2. Mảng tags không trùng lặp
const allTags = [...new Set(posts.flatMap(post => post.tags))];
console.log("Tất cả tags:", allTags);

// 3. Bình luận của user "An"
const commentsByAn = posts.flatMap(post => post.comments.filter(c => c.user === "An"));
console.log("Bình luận của An:", commentsByAn);


