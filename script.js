const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

result.style.display = "none";

checkButton.addEventListener("click", () => {
  if (textInput.value === ""){
    alert("Please input a value");
  }

  if (textInput.value){
    palindrome(textInput.value);
  }
});

const palindrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cleanStr);
  const textInputReversed = cleanStr.split('').reverse().join('');
  

  if (textInputReversed === cleanStr){
    result.innerText = `${str} is a palindrome`;
    result.style.display = "block"; 
  }
  else{
    result.innerText = `${str} is not a palindrome`;
    result.style.display = "block"; 
  }
};

