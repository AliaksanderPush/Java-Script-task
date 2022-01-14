// Сортировки

const arr1 = [9, 8, 11, 2, 4, 7];
const arr2 = [9, 8, 11, 5, 3];

function arrSort1(arr) {
	return arr.sort((a,b) => a-b);
}
//console.log(arrSort1(arr1))
// сортировка выбором
function arrSort2(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++ ) {
            if (arr[j] < arr[min]) {
				min = j;
			}
			let temp = arr[min];
			arr[min] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}
//console.log(arrSort2(arr1));
// найбольшее и найменьшее значение 
function arrayMin(arr) {
	let min = arr[0];
	for (let i = 0; i< arr.length;i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}
//console.log(arrayMin(arr1));

// пересечение  массивов
function arrayCommon(arr1, arr2) {
 return	arr1.filter(item => arr2.includes(item));
}
//console.log(arrayCommon(arr1, arr2))

// разность массивов
function arrayCommon(arr1, arr2) {
	const arr = [...arr1, ...arr2];
	return	arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
   }
//console.log(arrayCommon(arr1, arr2))

//глубокий клон массива 

const arr3 = [1, 2, [1, 9]];

function deepClone(arr) {
	let newArr = [];
	for (const elem of arr) {
		if (Array.isArray(elem)) {
			newArr.push(deepClone(elem)) 
		} else {
			newArr.push(elem); 
		}
	}
	return newArr;
}
//console.log(deepClone(arr3))

// нахождение чаще всего встречающегося элемента массива
const  arr4 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function countElemInArray(arr)  {
	let obj = {};
  for (let i =0; i<arr.length; i++) {
	  let elem = arr[i];
      if (!(elem in obj)) {
		obj[elem] = 0;
	  } else {
		obj[elem]++; 
	  }
  }
  return obj;
}

function maxelemInObject(arr) {
   let obj = countElemInArray(arr);
   let newObj = {};
   let max = -Infinity;
   let key = '';
   for (let elem in obj) {
	   if (obj[elem]> max ) {
           max = obj[elem];
		   key = elem;
	   }
   }
   newObj[key] = max; 
   return newObj;
}
//console.log(maxelemInObject(arr4))

// убрать дубликаты в массиве глубокой вложенности
const arr5 = [[1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5,6]]];

function flatten2(arr,res) {
	if (!res) res = [];
	 for (const elem of arr) {
		if (Array.isArray(elem)) {
			flatten2(elem,res);
		} else {
            res.push(elem);
		}
	}  
	  const result = new Set(res);
      return  [...result];
 }
 console.log(flatten2(arr5))

 function move(arr,from, to) {
	 const elem = arr.splice(from, 1);
	 const res = elem[0];
	 arr.splice(to, 0, res)
	 return arr;
 }


 //console.log (move ([10, 20, 30, 40, 50], 0, 2));

 let promise = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('error')), 2000);
	setTimeout(() => resolve('ignored'), 1000);
});