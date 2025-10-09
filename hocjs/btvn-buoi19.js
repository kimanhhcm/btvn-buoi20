// =======Bài tập 1 =========

function hasNegative(numbers) {
  return numbers.filter(num => num < 0).length > 0;
}
console.log(hasNegative([1, 2, 3]));    
console.log(hasNegative([1, -2, 3]));   
console.log(hasNegative([-5, -10, 0])); 
console.log(hasNegative([]));   

// ======Bài tập 2 =======

function isAllEven(numbers) {
  return numbers.filter(num => num % 2 !== 0).length === 0;
}
console.log(isAllEven([2, 4, 6]));   
console.log(isAllEven([2, 3, 6])); 
console.log(isAllEven([]));    

// =====Bài tập 3=====

function findDivisibleBy5(numbers) {
  return numbers.find(num => num % 5 === 0);
}

console.log(findDivisibleBy5([1, 2, 3, 10, 15]));
console.log(findDivisibleBy5([2, 7, 8, 9]));      
console.log(findDivisibleBy5([5, 20, 25]));       

// =======Bài tập 4========
function findLastNegative(numbers) {
  const negatives = numbers.filter(num => num < 0);
  return negatives.length > 0 ? negatives[negatives.length - 1] : undefined;
}
console.log(findLastNegative([1, -2, 3, -5, 7, -9])); 
console.log(findLastNegative([1, 2, 3]));             
console.log(findLastNegative([-1, -3, -5]));  

// =======Bài tập 5=========

function findFirstOddIndex(numbers) {
  // Tìm phần tử lẻ đầu tiên
  const firstOdd = numbers.find(num => num % 2 !== 0);

  // Nếu tìm thấy thì trả về index, không thì trả về -1
  return firstOdd !== undefined ? numbers.indexOf(firstOdd) : -1;
}
console.log(findFirstOddIndex([2, 4, 6, 7, 8])); // 3
console.log(findFirstOddIndex([2, 4, 6, 8]));    // -1
console.log(findFirstOddIndex([1, 2, 3]));       // 0  

// =======Bài tập 6 =========

function findLastGreaterThan50(numbers) {
  // Lấy ra tất cả phần tử > 50
  const greater = numbers.filter(num => num > 50);
  // Nếu có ít nhất 1 phần tử > 50 thì tìm vị trí cuối cùng của nó
  return greater.length > 0 ? numbers.lastIndexOf(greater[greater.length - 1]) : -1;
}
console.log(findLastGreaterThan50([10, 60, 30, 70, 80])); 
console.log(findLastGreaterThan50([10, 20, 30]));         
console.log(findLastGreaterThan50([55, 40, 60]));  

// ========Bài tập 7========
function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum([1, 2, 3, 4, 5])); 
console.log(sum([10, -5, 20]));    
console.log(sum([]));              

// ====== Bài tập 8======

function multiplyAll(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

console.log(multiplyAll([1, 2, 3, 4])); 
console.log(multiplyAll([5, 10]));      
console.log(multiplyAll([]));           

// =====Bài tập 9======
function longestStringLength(strings) {
  return strings.reduce((max, str) => 
    str.length > max ? str.length : max
  , 0);
}
console.log(longestStringLength(["a", "ab", "abc"]));        
console.log(longestStringLength(["hello", "hi", "good"]));  
console.log(longestStringLength([])); 

// ===== Bài tập 10=====
function hasPrime(numbers) {
  return numbers.filter(num => isPrime(num)).length > 0;
}






