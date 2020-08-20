// questions array

const questions = [
  {question: 'Enter your First Name'},
  {question: 'Enter your Last Name'},
  // the below is looking for a string plus an @ symbol plus another string then a dot then a string(string@string.string)
  // called a regular expression or regex
  // this is a simple one, its for looking for an email address
  {question: 'Enter your Email', pattern: /\S+@\S+\.\S+/},
  {question: 'Create a Password', type: 'password'}
];

// transition times
const shakeTime = 100; // 1 second shake transition time (box shaking)
const switchTime = 200; // 2 second transition time between questions

// init the question array
let position = 0; //this will keep track of the current question

// init DOM elements
// two ways to do this: first we can use documentGetElementById(), 
//second is to use document.queryselector()
// with query selector you can use either class or id
const formBox = document.querySelector('#form-box');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// event listeners
// first we want to get our questions when the document is loaded
document.addEventListener('DOMContentLoader', getQuestion);

// functions!
// get question from array and add to mark-up
function getQuestion(){
  inputLabel.innerHTML = questions[position].question;
  // get current type/ this really only matters for the last element in the array
  inputField.type = questions[position].type || 'text';//default to text, otherwise it will read the type from the array
  // get our current answer adn store it
  inputField.value = questions[position].answer || '';
  // focus on element
  inputField.focus();

  // set the progress bar width - variable to the questions length
  progress.getElementsByClassName.width = (position * 100) / questions.length + '%';

  // add user icon or a back arrow depending on question
  prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

}


