// Сортировка объекта по числовому признаку

const m=[
	{ fio:'Иванов', zp:1000 },
	{ fio:'Петров', zp:800 },
	{ fio:'Сидоров', zp:1100 },
	{ fio:'Егоров', zp:850 }
  ];

  function compareZP(obj) {
	return  onj.sort((a,b) => a.zp - b.zp)
  }
//console.log(compareZP(m));

//  Сортировка по алфавиту

 function compareFIO(obj) {
  return obj.sort((a,b) =>  a.fio.localeCompare(b.fio));
 }
//console.log(compareFIO(m));

// Подсчет кол-ва значений в обьекте

let users = [
	{ id: 11, name: 'Adam', age: 23, group: 'editor' },
	{ id: 47, name: 'John', age: 28, group: 'admin' },
	{ id: 85, name: 'William', age: 34, group: 'editor' },
	{ id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

  function countValue(obj) {
	let groupByAge = obj.reduce((acc, it) =>
	({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
  {});
  return groupByAge;
  }
  //console.log(countValue(users));

  //сумма в age
  function summaValue(obj) {
	let groupByAge = obj.reduce((acc, it) => acc + it.age, 0);
  return groupByAge;
  }
  //console.log(summaValue(users))

  //преобразование массива с обьектами В ОЪЕКТ типа {id:{name:'s', age:23}}

  function serilizeObj(obj) {
      let res = obj.reduce((acc, item) => {
         return ({...acc, [item.id]:{name:item.name, age:item.age}})
		  },{});
	  return res;
  }
//console.log(serilizeObj(users));

//преобразование массива с обьектами В ОЪЕКТ типа {name:'s', age:23}
function serelizeObj(obj) {
	let res = obj.reduce((acc, item) => {
		return ({...acc, name:item.name, age:item.age})
		 },{});
	 return res;
}
//console.log(serelizeObj(users));
