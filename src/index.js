import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {  //action은 redux의 function을 부를때 쓰는 두번째 parameter
  switch (action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }  
}; //오직 counterModifier(Reducer) 만이 data를 바꿀 수 있음.

const countStore = createStore(countModifier); //store는 data를 저장하는곳임. reducer가 store에 값을 저장

const onChange = () => {
  number.innerText = countStore.getState();
}
//state값의 변경을 store가 감지하고 싶다면, store.subscribe()함수를 사용.
countStore.subscribe(onChange); //subscribe 함수안의 콜백함수가 변화를 감지하면 이를 바꿔줌

const handleAdd = () => {
  countStore.dispatch({type: ADD}) //dispatch 안의 action은 반드시 {type: "object"}여야 함. string은 될 수 없음.
} //action은 reducer와 communication함. reducer(state, action) 형태이기 떄문
const handleMinus = () => {
  countStore.dispatch({type: MINUS})
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

/* 
let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  count = count + 1; 
  updateText();
}

const handleMinus = () => {
  count = count - 1;
  updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus); */