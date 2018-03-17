let vendingMachine = {
  'money' : 0
}

let drinks = {
  콜라 : {cost: 1500, number: 1},
  커피 : {cost: 1000, number: 1},
  식혜 : {cost: 900, number: 5}
}

function insertCoin(money){
  vendingMachine['money'] += money;
  printAvailableDrinks();
}
  
function selectItem(drinkName){
  if(drinks[drinkName]['number'] === 0){
    console.log('선택하신 음료의 재고가 없습니다');
  }else{
    drinks[drinkName]['number'] -= 1;
    vendingMachine['money'] -= drinks[drinkName]['cost'];
  console.log(`${drinkName}가 나왔습니다. 현재 잔돈 : ${vendingMachine['money']}`);
  }
  printAvailableDrinks();
}
  
function returnMoney(){
  console.log(`잔돈 ${vendingMachine['money']}원이 나왔습니다`);
  vendingMachine['money'] = 0;
}

function printAvailableDrinks(){
  let result = [];
  for(drinkName in drinks){
    if(drinks[drinkName]['cost'] <= vendingMachine['money']){
        if(drinks[drinkName]['number'] === 0){
          result.push(drinkName + '(재고없음)');
        }else{
          result.push(drinkName + '(' + drinks[drinkName]['cost'] + ')');
        }
    }
  }
  console.log('사용가능한 음료수 목록 => ' + result.join());
}

insertCoin(3000);
selectItem("커피");
insertCoin(1000);
selectItem("콜라");
returnMoney();