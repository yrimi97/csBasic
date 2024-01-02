let arr = ["green","blue","apple"]
console.log(arr.join(" "));

arr.sort();
console.log(arr);

/*
양수값은 반환하는 경우에 두 요소의 순서를 바꾼다
*/

//1. 문자열 내림차순 정렬
let compare = (a,b) => { 
    if(a>b) return -1;
    else if(a<b) return 1;  // b가 더 큰 값인 경우에 순서를 뒤집는다
    else return 0;
}

arr.sort(compare);
console.log(arr);


//2. 숫자 내림차순 정렬
let nums = [20,125,1,30];

compare = (a,b) => {
    return b-a;  // b가 더 큰 값인 경우(b-a가 양수)에 순서를 뒤집는다 
}
nums.sort(compare);
console.log(nums);


//3. 누적합 계산
let sum = nums.reduce((acc,cur,i)=>{
   console.log(acc,cur,i);
   return acc + cur;
},0); // 0이라는 accumulator에 반환값을 누적해서 더해준다

console.log(sum);
 
