// const myarr = [1, -4, 7, 12]
// var add = 0
// for (let index = 0; index < myarr.length; index++) {
//   const sum = myarr[index]

//   if (sum >= 0) {
//     add += sum
//   }
// }

// console.log(add)
// const higheast = []
// const lowest = []
// const arr = [10, 2, 4, 5, 1, 9, 23]
// let min = arr[0]
// let max = arr[0]
// var total = 0
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= min) {
//     min = arr[i]
//   }
//   if (arr[i] >= max) {
//     max = arr[i]
//   }
// }
// // console.log(arr, '???')
// console.log(min, '===', max)
// arr.pop(min)
// arr.pop(max)
// console.log(arr)
// for (var i in arr) {
//   total += arr[i]
// }
// console.log(total, 'ARR')

// repeat the String
// function repeatString(numbe, str) {
//   var strnew = ''
//   for (let index = 0; index < numbe; index++) {
//     strnew += str
//   }
//   return strnew
// }
// const func = repeatString(3, 'hello')
// console.log(func)

// const numb = 234324
// const arr = []
// newnumb = numb.toString().split('').reverse()
// const humn = newnumb.map((i) => Number(i))
// console.log(humn)
// function fuNam(params) {
//   return params > 0 ? -params : -params
// }
// console.log(fuNam(47))

// count the positive sum the negative

const addnew = [1, 2, 3, -1, -2, -3]
var count = 0
var add = 0
for (let index = 0; index < addnew.length; index++) {
  const element = addnew[index]
  if (element >= 0) {
    count++
  } else {
    add += element
  }
}
console.log(count, '', add)
