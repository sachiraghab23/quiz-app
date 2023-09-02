const questions = [{
  "quest": 'Which of the following is a markup language?',
  'a':'HTML',
  'b':'CSS',
  'c':'JavaScript',
  'd':'PHP',
  'correct':'a',  
},
  {
  "quest": 'What year was Javascript launched?',
  'a':'1996',
  'b':'1995',
  'c':'1994',
  'd':'none of the above',
  'correct':'b',  
},
  {
  "quest": 'What does CSS stands for?',
  'a':'Hyper Text Markup Language',
  'b':'Circular Style Set',
  'c':'Json Objection Notation',
  'd':'Cascading Style Sheet',
  'correct':'d',  
}];
console.log(questions.length)
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const questBox = document.getElementById('question-box');
const optionInputs = document.querySelectorAll(".option-input");
const loadQuestion = () =>{
  if(index === total){
    return endQuiz()
  }
  reset()
  const data = questions[index];
  questBox.innerText = `${index+1}) ${data.quest}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz=()=>{
  const data = questions[index];
  const ans = getAnswer()
  if(ans==data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  console.log(index);
  loadQuestion();
  return;
}
const getAnswer=()=>{
  let answer;
  optionInputs.forEach((input)=>{
    if(input.checked){
      answer = input.value;
    }
  })
  return answer;
}
const reset = ()=>{
  optionInputs.forEach((input)=>{
    input.checked = false;
  });
}
const endQuiz = ()=>{
  document.getElementsByClassName("box")[0].innerHTML = `<div style="text-align:center"><h3> Thank you for playing </h3><h2>${right}/${total} are correct</h2></div>`;    
}
//initial call
loadQuestion();