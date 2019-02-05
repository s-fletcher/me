var operations = {
  operator: '',
  number: null,
  operatorForEqual: '',
  lastUsedOperator: '',
  lastUsedNumber: null,
  numberPressed: false,
  changed(from)
  {
    // Changing old operator to regular color
    if(from == '+')
    {
      document.getElementById('calc-add').className = "calc-color3";
    }
    else if(from == '-')
    {
      document.getElementById('calc-sub').className = "calc-color3";
    }
    else if(from == '*')
    {
      document.getElementById('calc-times').className = "calc-color3";
    }
    else if(from == '/')
    {
      document.getElementById('calc-divide').className = "calc-color3";
    }

    // New operator, then set as selected
    if(this.operator == '+')
    {
      document.getElementById('calc-add').className = "calc-selected";
    }
    else if(this.operator == '-')
    {
      document.getElementById('calc-sub').className = "calc-selected";
    }
    else if(this.operator == '*')
    {
      document.getElementById('calc-times').className = "calc-selected";
    }
    else if(this.operator == '/')
    {
      document.getElementById('calc-divide').className = "calc-selected";
    }
    else if(this.operator == '=')
    {
      this.operatorForEqual = '';
    }
  },
  get op()
  {
    return this.operator;
  },
  get opForEqual()
  {
    return this.operatorForEqual;
  },
  set opForEqual(operator)
  {
    this.operatorForEqual = operator;
  },
  set lastUsedOp(val)
  {
    this.lastUsedOperator = val;
  },
  get lastUsedOp()
  {
    return this.lastUsedOperator;
  },
  set lastUsedNum(val)
  {
    this.lastUsedNumber = val;
  },
  get lastUsedNum()
  {
    return this.lastUsedNumber;
  },
  get numPressed()
  {
    return this.numberPressed;
  },
  set numPressed(val)
  {
    this.numberPressed = val;
  },
  set op(operator)
  {
    var old = this.operator;
    this.operator = operator;
    this.changed(old);
    if(operator != '')
      this.operatorForEqual = operator;
    if(operator != '=' && operator != '')
      this.lastUsedOperator = operator;
  },
  get num()
  {
    return this.number;
  },
  set num(number)
  {
    this.number = number;
  }
}

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
  // If user previously clicked the =
  if(operations.op == '=')
  {
    answerRef.textContent = "0";
    operations.num = null;
    operations.op = '';
  }
  // If user previously clicked an operator
  else if(operations.op == '+' || operations.op == '-' || operations.op == '*' || operations.op == '/')
  {
    answerRef.textContent = "0";
    operations.op = '';
  }
  // Telling system that a number has been chosen and can no longer change operator
  operations.numPressed = true;
  if((answerRef.textContent % 1 == 0 && answerRef.textContent.length < 12) || (answerRef.textContent % 1 != 0 && answerRef.textContent.length < 13))
  {
    if(num == '.')
    {
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
    else
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
}

function reset()
{
  var answerRef = document.getElementById('calc-answer');
  answerRef.textContent = 0;
  operations.op = '';
  operations.opForEqual = '';
  operations.num = null;
  operations.numPressed = false;
  operations.lastUsedNum = null;
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

function operatorAction(x)
{
  var answerRef = document.getElementById('calc-answer');
  // If user changes mind on operation
  if(operations.numPressed == true && operations.op != '' && x != '=')
  {
    operations.op = x;
    return;
  }
  // If user switches operators mid calculation
  if(operations.opForEqual == '+' && x != '=')
  {
    operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
    operations.num = parseFloat(operations.num) + parseFloat(numberWithoutCommas(answerRef.textContent));
    answerRef.textContent = numberWithCommas(operations.num);
  }
  else if(operations.opForEqual == '-' && x != '=')
  {
    operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
    operations.num = parseFloat(operations.num) - parseFloat(numberWithoutCommas(answerRef.textContent));
    answerRef.textContent = numberWithCommas(operations.num);
  }
  else if(operations.opForEqual == '*' && x != '=')
  {
    operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
    operations.num = parseFloat(operations.num) * parseFloat(numberWithoutCommas(answerRef.textContent));
    answerRef.textContent = numberWithCommas(operations.num);
  }
  else if(operations.opForEqual == '/' && x != '=')
  {
    operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
    operations.num = parseFloat(operations.num) / parseFloat(numberWithoutCommas(answerRef.textContent));
    answerRef.textContent = numberWithCommas(operations.num);
  }
  // If user clicks an operator
  if(x == '+' || x == '-' || x == '*' || x == '/')
  {
    operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
    operations.num = numberWithoutCommas(answerRef.textContent);
    operations.op = x;
  }
  // If user clicks the =
  else if(x == '=')
  {
    // Checks if user previously clicked the +
    if(operations.opForEqual == '+')
    {
      operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
      operations.num = parseFloat(operations.num) + parseFloat(numberWithoutCommas(answerRef.textContent));
      answerRef.textContent = numberWithCommas(operations.num);
    }
    // Checks if user previously clicked the -
    else if(operations.opForEqual == '-')
    {
      operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
      operations.num = parseFloat(operations.num) - parseFloat(numberWithoutCommas(answerRef.textContent));
      answerRef.textContent = numberWithCommas(operations.num);
    }
    // Checks if user previously clicked the *
    else if(operations.opForEqual == '*')
    {
      operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
      operations.num = parseFloat(operations.num) * parseFloat(numberWithoutCommas(answerRef.textContent));
      answerRef.textContent = numberWithCommas(operations.num);
    }
    // Checks if user previously clicked the *
    else if(operations.opForEqual == '/')
    {
      operations.lastUsedNum = numberWithoutCommas(answerRef.textContent);
      operations.num = parseFloat(operations.num) / parseFloat(numberWithoutCommas(answerRef.textContent));
      answerRef.textContent = numberWithCommas(operations.num);
    }
    else if(operations.lastUsedNum != null) {
      if(operations.lastUsedOp == "+")
      {
        answerRef.textContent = numberWithCommas(parseFloat(numberWithoutCommas(answerRef.textContent)) + parseFloat(operations.lastUsedNum))
      }
      else if(operations.lastUsedOp == "-")
      {
        answerRef.textContent = numberWithCommas(parseFloat(numberWithoutCommas(answerRef.textContent)) - parseFloat(operations.lastUsedNum))
      }
      else if(operations.lastUsedOp == "*")
      {
        answerRef.textContent = numberWithCommas(parseFloat(numberWithoutCommas(answerRef.textContent)) * parseFloat(operations.lastUsedNum))
      }
      else if(operations.lastUsedOp == "/")
      {
        answerRef.textContent = numberWithCommas(parseFloat(numberWithoutCommas(answerRef.textContent)) / parseFloat(operations.lastUsedNum))
      }
    }
    operations.op = '=';
    operations.num = null;
    operations.numPressed = false;
  }
  if(!((answerRef.textContent % 1 == 0 && answerRef.textContent.length < 12) || (answerRef.textContent % 1 != 0 && answerRef.textContent.length < 13)))
  {
    answerRef.textContent = numberWithoutCommas(answerRef.textContent).substring(0, 13);
    answerRef.textContent = numberWithCommas(answerRef.textContent);
  }
}
