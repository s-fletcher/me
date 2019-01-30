function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


function numberWithoutCommas(x)
{
  return x.split(",").join("");
}

function number(num)
{
  var answerRef = document.getElementById('calc-answer');
  if((answerRef.textContent % 1 == 0 && answerRef.textContent.length < 12) || (answerRef.textContent % 1 != 0 && answerRef.textContent.length < 13))
  {
    if(answerRef.textContent == "0")
    {
      answerRef.textContent = num;
    }
    else {
      answerRef.textContent = numberWithoutCommas(answerRef.textContent) + num;
    }
    answerRef.textContent = numberWithCommas(answerRef.textContent);
  }
}

function decimal()
{
  var answerRef = document.getElementById('calc-answer');
  if(!answerRef.textContent.includes("."))
  {
    if(answerRef.textContent == "0")
    {
      answerRef.textContent = "0.";
    }
    else {
      answerRef.textContent += ".";
    }
  }
}

function reset()
{
  var answerRef = document.getElementById('calc-answer');
  answerRef.textContent = 0;
}

function negative()
{
  var answerRef = document.getElementById('calc-answer');
  answerRef.textContent = numberWithoutCommas(answerRef.textContent) * -1;
  answerRef.textContent = numberWithCommas(answerRef.textContent);
}

function percent()
{
  var answerRef = document.getElementById('calc-answer');
  var temp = numberWithoutCommas(answerRef.textContent);
  answerRef.textContent = numberWithoutCommas(answerRef.textContent) / 100;
  if(answerRef.textContent.length > 12)
  {
    answerRef.textContent = temp;
  }
  answerRef.textContent = numberWithCommas(answerRef.textContent);
}

function addAction()
{
  var answerRef = document.getElementById('calc-answer');
}

function equals()
{
  var answerRef = document.getElementById('calc-answer');
}

/*
- make operators work
*/
