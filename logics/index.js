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

// const addnew = [1, 2, 3, -1, -2, -3]
// var count = 0
// var add = 0
// for (let index = 0; index < addnew.length; index++) {
//   const element = addnew[index]
//   if (element >= 0) {
//     count++
//   } else {
//     add += element
//   }
// }
// console.log(count, '', add)
// const string = 'word'

// // Option 1
// const newarr = string
//   .split('')
//   .map((i) => i.repeat(2))
//   .join('')
// console.log(newarr)

// function squareRoot(arr) {
//   //   const arr = [6, 6, 4, 1, 2, 4]
//   var newwarr = []
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index]

//     const newaa = Math.sqrt(element)
//     if (Number.isInteger(newaa)) {
//       newwarr.push(newaa)
//     } else {
//       newwarr.push(element * element)
//     }
//   }
//   return newwarr
// }
// const newarr = squareRoot([3, 5, 7, 1, 2, 4])
// console.log(newarr)

// function countBy(params, param1) {
//   const newparams = []
//   for (var index = 0; index < param1; index++) {
//     newparams.push(params * param1)
//   }
//   console.log(newparams, 'LL')
// }

// countBy(1, 10)
// invert the number

// const arr = [-1, 2, -3, 4, -5]
// const newarr = []
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index]
//   if (element <= 0) {
//     newarr.push(-element)
//   } else if (element >= 0) {
//     newarr.push(-element)
//   }
// }
// console.log(newarr)
// const a = 14
// const b = 2
// console.log(a / b)

// function race(params) {
//   return Math.floor(params / 4)
// }
// const newrace = race(11.8)
// console.log(newrace)
// consvert number into String
// const numb = 4
// numb.toString()
// console.log(typeof numb.toString())
// const namemy = 'aliraza'
// console.log(namemy.charAt(0))

// const arr1 = ['ali', 'keep', 'ali', 'keep']
// var newarri = []
// var newemp = []
// arr1.map((newon1) =>
//   newon1 === 'ali' ? newarri.push(newon1) : newemp.push(newon1),
// )
// console.log(newarri)
// console.log(newemp)
// for (let index = 0; index < arr1.length; index++) {
//   const element = arr1[index]
//   if (element !== 'ali') {
//     newarri.push(element)
//   }
// }
// console.log(newarri)
// console.log(arr1)

// find the first elementin the array are not consecutive

// var mynumb = [1, 2, 3, 4, 5, 6, 7, 18, 19, 20]
// for (let index = 0; index < mynumb.length - 1; index++) {
//   if (mynumb[index + 1] - mynumb[index] == 1) {
//     console.log(mynumb[index])
//   } else {
//   }
// }

// background-color: #e5e5f7;
// opacity: 0.3;
// background-image:  linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
// background-position:  10px 0, 10px 0, 0 0, 0 0;
// background-size: 20px 20px;
// background-repeat: repeat;

// var mynumb = [1, 2, 3, 4, 5, 6, 7, 18, 19, 20]
// for (let index = 0; index < mynumb.length - 1; index++) {
//   if (mynumb[index + 1] - mynumb[index] == 1) {
//     console.log('all the array are  concecutive')
//   } else {
//     console.log('first', mynumb[index])
//   }
// }

// var num = 240
// const strnew = ''
// var str = String(num)
// const arr1 = [3, 4, 5]
// const arr2 = [3, 0, 8]
// console.log(arr1.concat(arr2))

// console.log(str.indexOf(0))
// for (let index = str.length; index >= 0; index--) {
//   const element = str[index]
//   if (element === 0) {
//   }
// }
// for (let index = 0; index < str.length; index++) {
//   const element = str[index]
//   console.log(str.lastIndexOf(element) !== 0)
//   console.log(first)
//   strnew += element
// }
// console.log(strnew)

// function quickSort(params) {
//   //   console.log(params.sort())
//   const sortass = []
//   //   console.log([4,])
//   const desce = []
//   //   console.log([5])
//   for (let index = 0; index < params.length; index++) {
//     const element = params[index]
//     const elementNew = params[params.length - 1]
//     console.log(element, '00', elementNew)
//     if (element < elementNew) {
//       desce.push(element)
//     } else {
//       sortass.push(elementNew)
//     }
//   }
//   return [...sortass, ...desce]
// }
// const arr = [4, 5, 6, 1, 10]
// // unshift from start ---- push from end
// console.log(quickSort(arr), '???')
//  hosting in javscript

// console.log(a)
// var a = 'ali'

// in hosting variable or function declairation in to the top but noe initialization
// const and let never hosted but var hosted
// myFunct()
// function myFunct() {
//   console.log('first')
// }
// function init() {
//   var name = 'Mozilla' // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name) // use variable declared in the parent function
//   }
//   return displayName
// }
// const mynew = init()
// mynew()
// call /bind /apply

// const myobj = {
//   name: 'aliraza',
//   designation: 'enginner',
// }

// let newobj = function () {
//   console.log(this.name)
// }
// newobj.call(myobj)

// function myFunction(a, n) {
//   return a.charAt(n - 1)
// }
// const mynumb = myFunction('abcd', 1)
// console.log(mynumb)

// function myFunction(a) {
//   return typeof a
// }
// const ch = myFunction(false)
// console.log(ch)
// function myFunction(a) {
//   return a.length === 7 ? a.slice(0, 3) : a.slice(0, 3)
// }
// const howto = myFunction('fgedcba')
// const howtohi = myFunction('1234')
// console.log(howto)
// console.log(howtohi)
// function myFunction(a) {
//   console.log(a.indexOf('is'))
// }
// myFunction('praise')
// function myFunction(a, b, c, d, e, f) {
//   //   const len = a.length / 2
//   //   console.log(a.slice(0, len))
//   //   console.log(a.slice(0, -3))
//   //   const per = (b * a) / 100
//   //   console.log(per)
//   const aad = a + b
//   const sub = aad - c
//   const mul = sub * d
//   const div = mul / e

//   console.log(Math.pow(div, 2))
//   console.log(Math.pow(((a + b - c) * d) / e, f))
// }
// myFunction(6, 2, 1, 4, 2, 3)

// function myFunction(a, b) {
//   //   console.log(b.length !== 1 ? `'${a + b}'` : `'${b + a}'`)
//   console.log(a.indexOf(b))
// }

// myFunction('cheese', 'cake')
// myFunction('lips', 's')
// myFunction(' think, therefore I am', 'I')
// myFunction('Java', 'script')

// function myFunction(a) {
//   console.log(a % 2 === 0)
// }
// myFunction(-4)
// function myFunction(a) {
//   a % 2 == 0 && a % 10 == 0 ? true : false
//   //   console.log(b.split(a).length - 1)
//   //   return b.split(a).length - 1
//   //   var count = 0
//   //   for (let index = 0; index < b.length; index++) {
//   //     const element = b[index]
//   //     if (element === a) {
//   //       count++
//   //     }
//   //   }
//   //   return count
// }
// const munu = myFunction(1.123)
// console.log(munu)
// const mynew = myFunction(
//   'm',
//   'how many times does the character occur in this sentence?',
// )
// console.log(mynew)
// myFunction('h', 'how many times does the character occur in this sentence?')
// const hid = myFunction(
//   'z',
//   'how many times does the character occur in this sentence?',
// )
// console.log(hid)
// function myFunction(a) {
//   const n = Math.floor(a)
//   console.log(a - Math.floor(a) == 0 ? true : false)
// }
// // myFunction(1.123)
// function myFunction(a, b) {
//   console.log(a < b ? a / b : a * b)
// }
// // myFunction(10, 100)
// function myFunction(a) {
//   console.log(a.toFixed(2))
// }
// myFunction(2.12397)
// myFunction(3.136)
// myFunction(1.12397)
// myFunction(26.1379)
// function myFunction(a) {
//   console.log(
//     a
//       .toString()
//       .split('')
//       .map((newnumb) => Number(newnumb)),
//   )
// }

// myFunction(10)
// function myFunction(a, n) {
//   console.log(a[n - 1])
// }
// myFunction([1, 2, 3, 4, 5], 3)
// myFunction([10, 9, 8, 7, 6], 5)
// myFunction([7, 2, 1, 6, 3], 1)

// function myFunction(a) {
//   console.log(a.splice(3))
// }
// myFunction([1, 2, 3, 4])

// myFunction([5, 4, 3, 2, 1, 0])
// // myFunction([99, 1, 1])
// function myFunction(a, b) {
//   console.log(a.filter((abc) => abc !== b))
// }
// myFunction([1, 2, 3], 2)
// function myFunction(a) {
//   console.log(a.filter((cur) => !(cur >= 0)).length)
// }

// myFunction([1, -2, 2, -4])
// myFunction([0, 9, 1])
// myFunction([4, -3, 2, 1, 0])

// function myFunction(arr) {
//   console.log(arr.sort((a, b) => b - a))
// }

// myFunction([1, 3, 2])
// arr.reduce((a, b) => a + b / arr.length)
// function myFunction(arr) {
//   console.log(Math.ceil(arr.reduce((a, b) => a + b)) / arr.length)
// }
// console.log(200 / 4)
// myFunction([10, 100, 40])
// myFunction([10, 100, 1000])
// myFunction([-50, 0, 50, 200])
// function myFunction(arr) {
//   //   console.log(
//   //     a.reduce(function (obj, v) {
//   //       obj[v] = v.length
//   //       return obj
//   //     }, {}),
//   //   )

//   var str = ''
//   for (let index = 0; index < arr.length; index++) {
//     const newstr = arr[index]

//     if (newstr.length > str.length) {
//       str = newstr
//     }
//   }
//   return str
// }
// myFunction(['help', 'me', 'aliraza'])
// // myFunction(['I', 'need', 'candy', 'tu'])
// function myFunction(arr) {
//   console.log(arr.every((a) => a))
// }ddfgdfgdf
// ddfgdfgfdg

// myFunction([true, true, true, true])
// myFunction(['test', 'test', 'test'])
// myFunction([1, 1, 1, 2])
// myFunction(['10', 10, 10, 10])
function myFunction(...arrays) {
  console.log([].concat(...arrays))
}
;<VStack>
  <UnorderedList>
    {livestock.map((dat, index) => (
      <ListItem
        fontSize="40px"
        textDecoration="none"
        cursor="pointer"
        listStyleType="none"
        key={index}
        onClick={openDropDown}
      >
        {' '}
        <Button> {dat}</Button>
      </ListItem>
    ))}
  </UnorderedList>
  <Flex gap="20px">
    <Text>Buffallo</Text>
    <Text>Lion</Text>
    <Text>Hen</Text>
  </Flex>
</VStack>
myFunction([1, 2, 3], [4, 5, 6])
myFunction(['a', 'b', 'c'], [4, 5, 6])
myFunction([true, true], [1, 2], ['a', 'b'])
