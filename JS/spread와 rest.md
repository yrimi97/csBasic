## spread
> 반복적인 값을 퍼뜨려주는 것

<br><br>

**객체**
```js
const toy = {
    type : "bear",
    price: 10000
};

const btoy = {
    ...toy,
    color: "blue"
}

console.log(btoy);
```
```
{ type: 'bear', price: 10000, color: 'blue' }
```
<br><br>

**배열**
```js
const color1 = ["red","orange","yellow"];
const color2 = ["navy","purple"];

const rainbow = [...color1, "green", "blue", ...color2];

console.log(rainbow);
```
```
[
  'red',    'orange',
  'yellow', 'green',
  'blue',   'navy',
  'purple'
]
```
<br><br>

## rest
> 하나의 배열이나 객체로 묶어주는 것

<br><br>

**객체**
```js
const btoy = {
    type : "bear",
    price: 10000,
    color: "blue"
};

const {type, ...rest} = btoy;
console.log(rest); // { price: 10000, color: 'blue' }
```

- 아래와 같이 코드 작성 시 에러가 발생한다
- rest는 코드의 가장 마지막에 작성되어야 한다
```js
//const {...res, type} = btoy;
```

<br><br>

**배열**
```js
const color = ["red","orange","yellow","green"];

const [c1, c2, ...rest2] = color;
console.log(rest2) //[ 'yellow', 'green' ]
```
<br><br>

**함수**
```js
const print = (a,b,...rest) => {
    console.log(a,b)
    console.log(rest);
}

print(1,2,3,4,5,6);
```
```
1 2
[ 3, 4, 5, 6 ]
```

<br><br>
```js
const print = (...rest) => {
    console.log(rest);
}

const arr = [1,2,3,4,5,6]
print(...arr);
```
```
[ 1, 2, 3, 4, 5, 6 ]
```













