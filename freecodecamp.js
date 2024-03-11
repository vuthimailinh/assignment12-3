// 1
function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    return str === str.split('').reverse().join('');
  }
  
  palindrome("eye");
  
 //2 
  function convertToRoman(num) {
    const romanMap = [
      {value: 1000, symbol: 'M'},
      {value: 900, symbol: 'CM'},
      {value: 500, symbol: 'D'},
      {value: 400, symbol: 'CD'},
      {value: 100, symbol:'C'},
      {value: 90, symbol: 'XC'},
      {value: 50, symbol: 'L'},
      {value: 40, symbol: 'XL'},
      {value: 10, symbol: 'X'},
      {value: 9, symbol: 'IX'},
      {value: 5, symbol: 'V'},
      {value: 4, symbol: 'IV'},
      {value: 1, symbol: 'I'}
    ];
    let tmpnum = '';
    for(let i = 0; i < romanMap.length; i++){
      while(romanMap[i].value <= num){
        tmpnum += romanMap[i].symbol;
        num -= romanMap[i].value;
      }
    }
   return tmpnum;
  }
  
  convertToRoman(36);
  
  
  //3
  function rot13(str) {
    let tmp = '';
    let tmpstr = '';
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z'){
        if(str.charAt(i) < 'N'){
         tmp = String.fromCharCode(str.charCodeAt(i) + 13);
        }else{
          tmp = String.fromCharCode(str.charCodeAt(i) - 13);
        }
        tmpstr += tmp;
      }else{
        tmpstr += str.charAt(i);
      }
    }
    return tmpstr;
  }
  
  rot13("SERR PBQR PNZC");
  
  //4
  function telephoneCheck(str) {
    let checkUS = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;
    return checkUS.test(str)
  }
  
  telephoneCheck("555-555-5555");
  
  
  //5
  function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    const currencyUnit = [
      {name: "PENNY", value: 0.01},
      {name: "NICKEL", value: 0.05},
      {name: "DIME", value: 0.1},
      {name: "QUARTER", value: 0.25},
      {name: "ONE", value: 1},
      {name: "FIVE", value: 5},
      {name: "TEN", value: 10},
      {name: "TWENTY", value: 20},
      {name: "ONE HUNDRED", value: 100}
    ];
  
    let total = 0;
    for(let currency of cid){
      total += currency[1];
    }
    if(total < change){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }else {
      if(total === change){
        return {status: "CLOSED", change: cid};
      }else{
        let changeAr  = [];
        for(let i = currencyUnit.length -1; i >= 0; i--){
           const { name, value } = currencyUnit[i];
            let currencyAmount = 0;
          while(cid[i][1] > 0 && change >= value){
            change -= value;
            cid[i][1] -= value;
            currencyAmount += value;
            change = Math.round(change * 100) / 100;
          }
          if(currencyAmount > 0){
            changeAr.push([name, currencyAmount]);
          }
        }
        if(change > 0){
          return {status: "INSUFFICIENT_FUNDS", change: []};
        }else {
          return {status: "OPEN", change: changeAr};
        }
      }
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);