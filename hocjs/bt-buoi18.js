// =====Bài tập 1=====
//   Tạo mảng mới chứa bình phương của từng phần tử.
const arr = [1, 2, 3, 4, 5, 6];
const squares = arr.map(function(num) {
return num * num;
});
console.log(squares);

// Tạo mảng mới chứa các số chẵn trong mảng.
const arr1 = [1, 2, 3, 4, 5, 6];
const evens = arr1.filter(function(num1) {
    if (num1 % 2 === 0) {
        return num1;
    }
}
) ;
console.log(evens);

// Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ.
const arr2 = [1, 2, 3, 4, 5, 6];
const oddSquares = arr2.map(function(num2) {
    return num2 * num2;
    } )
.filter(function(num2) {
        return num2 % 2 !== 0 ;
}
);
console.log(oddSquares);

// ======Bài tập 2 =======

const names = ["   hoang ", "AN", "  f8   ", "Education"];
// Tạo mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ.
const cleaned = names.map(function(name) {
    return name.trim().toLowerCase();
}
);
console.log(cleaned);

// Tạo mảng mới viết chữ cái đầu hoa (Hoang, An, F8, Education)

const names1 = ["   hoang ", "AN", "  f8   ", "Education"];
const capitalized = cleaned.map(function(name1) {
    return name1.charAt(0).toUpperCase() + name1.slice(1);
}
);
console.log(capitalized);

// ========Bài tập 3========

// Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10.

const nums = [3, 7, 2, 9, 12, 15, 18];

const greaterOrEqual10 = nums.filter(function(nums1) {
    return nums1 >= 10;
}
);
console.log(greaterOrEqual10);

// Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3.

const nums2 = [12, 15, 18];
const divisibleBy3 = nums2.filter(function(nums3) {
    return nums3 % 3 === 0;
}
);
console.log(divisibleBy3);

// Với mảng ban đầu, tạo mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ.

const nums4 = [3, 7, 2, 9, 12, 15, 18];
const doubleOdds = nums4.filter(function(nums5) {
    return nums5 % 2 !== 0;
})
.map(function(nums5) {
    return nums5 * 2;
}
);
console.log(doubleOdds);

// =======Bài tập 4=========
const words = ["javascript", "php", "css", "html", "python", "java"];

//  Lọc ra các từ có độ dài >= 5.
const longWords = words.filter(function(word) {
  return word.length >= 5;
});

console.log(longWords);

//  Tạo mảng mới viết hoa toàn bộ.
const upperWords = words.map(function(word) {
  return word.toUpperCase();
});

console.log(upperWords);

// Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...)
const reversedWords = words.map(function(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
});

console.log(reversedWords);


// ======== Bài Tập 5==========


// Tạo mảng chứa tổng từng hàng => [6, 15, 24]

const myArr = [ 

  [1, 2, 3], 

  [4, 5, 6], 

  [7, 8, 9] 

];

const rowSums = myArr.map(function(row) {
    let sum = 0;
     for(let i = 0; i < row.length; i++) {
        sum += row [i];
     }
     return sum;
}
);
console.log(rowSums);

// Tạo mảng chứa tổng từng cột => [12, 15, 18]

const myArr1 = [ 

  [1, 2, 3], 

  [4, 5, 6], 

  [7, 8, 9] 

];
let colSums = [0, 0, 0];

for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    colSums[j] += myArr[i][j];
  }
};
console.log(colSums);
 
//  Lọc ra các hàng có tổng > 10.

const rowsGreaterThan10 = myArr.filter(function(row) {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    sum += row[i];
  }
  return sum > 10;
});

console.log(rowsGreaterThan10);

// ====== Bài tập 6 =====

const myArr4 = [ 
  ["hello", "world"], 
  ["javascript", "php"], 
  ["css", "html"] 
];

// Tạo mảng mới viết hoa tất cả từ.
const upperCaseArr = myArr4.map(function(row) {
  return row.map(function(word) {
    return word.toUpperCase();
  });
});

console.log(upperCaseArr);

// Lọc ra các từ có độ dài > 4.

const filteredArr = myArr4.map(function(row) {
  return row.filter(function(word) {
    return word.length > 4;
  });
});

console.log(filteredArr);

// Ghép tất cả thành 1 mảng 1 chiều.

let oneDimArr = [];
for (let i = 0; i < myArr4.length; i++) {
  oneDimArr = oneDimArr.concat(myArr4[i]);
}

console.log(oneDimArr);

// =======Bài tập 7=======

const myArr5 = [ 

  [2, 4, 6], 

  [8, 10, 12], 

  [14, 16, 18] 

]

// Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].

const mainDiagonal = [];
for (let i = 0; i < myArr5.length; i++) {
  mainDiagonal.push(myArr5[i][i]);
}

console.log(mainDiagonal); 

// Lấy ra các phần tử trên đường chéo phụ => [6, 10, 14].

const secondaryDiagonal = [];
let n = myArr5.length;
for (let i = 0; i < n; i++) {
  secondaryDiagonal.push(myArr5[i][n - 1 - i]);
}
console.log(secondaryDiagonal);

// Tính tổng của đường chéo chính và phụ.
let sumMain = 0;
let sumSecondary = 0;

for (let i = 0; i < myArr5.length; i++) {
  sumMain += myArr5[i][i];
  sumSecondary += myArr5[i][myArr5.length - 1 - i];
}

console.log("Tổng chéo chính:", sumMain);  
console.log("Tổng chéo phụ:", sumSecondary);   

// =====Bài tập 8========


// Tính điểm trung bình của từng học sinh => [8, 6, 9].

const scores = [ 

  [8, 9, 7],   // học sinh 1 

  [6, 5, 7],   // học sinh 2 

  [10, 9, 8]   // học sinh 3 

]
const averages = scores.map(function(student) {
  let sum8 = 0;
  for (let i = 0; i < student.length; i++) {
    sum8 += student[i];
  }
  return sum8 / student.length;
});

console.log(averages); 


//  Lọc ra những học sinh có điểm trung bình >= 8.

const goodStudents = averages.filter(function(avg) {
  return avg >= 8;
});

console.log(goodStudents);

// Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10).
const increasedScores = scores.map(function(student) {
  return student.map(function(score) {
    if (score < 10) {
      return score + 1;
    } else {
      return score;
    }
  });
});

console.log(increasedScores);