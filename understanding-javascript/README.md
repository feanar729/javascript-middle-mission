- 비트연산자 보수 이해하기
  - 비트 연산자는 피연산자를 2의 보수 형식으로 저장된 32비트 부호 붙은 정수로 간주한다. 
  - 숫자는 모두 double 형식이므로 자바스크립트는 연산 전 먼저 32비트 정수로 변환하고 연산 후 다시 더블로 변환해 반환.
  - ~는 보수 연산자. NOT var 를 반환. n = 22; ~n === -23
- 10을 2진표현으로 변경하려면 어떤 순서로 계산해야 하는지 설명하기.
  - 10 / 2 = 5...0  //0
  - 5 / 2 = 2...1 //10
  - 2 / 2 = 1...0 //010
  - 1 //1010
  - 계속 2로 나누면서 나머지를(0 or 1) 아랫단 비트부터 쌓는다. 더이상 자연수로 나눠질 수 없으면 최상위에 1을 더한다.
- hoisting 에 대해서 설명하기
  - 변수가 함수내에서 정의되었을 경우 선언이 함수의 최상위로, 함수 바깥에서 정의되었을 경우는 선언이 전역 컨텍스트의 최상위로 끌어올려지는 것. 
  - 변수와 함수 이름이 같을 경우 선언 우선 순위: 값이 있는 변수 < 함수 < 값이 없는 변수 
  - strict mode라면 선언 없이 변수에 값을 할당하려할 때 오류가 발생한다.
- !! 은 무엇을 의미하는가? 어떻게 활용할 수 있을까?
  - 부정의 부정. 부정 연산자를 사용하면 '참 같은 값'은 false로 바뀐다. 한 번 더 쓰면 true를 얻을 수 있다. null, undefined같은 거짓같은 값들을 확실하게 확인하는 게 가능하다.
  - 거짓 같은 값
    - undefined
    - null
    - false
    - 0
    - NaN
    - ''
    - [].length()
  - 참 같은 값
    - 모든 객체
    - 배열(빈 배열 포함)
    - ' '
    - "false"
- 3개이상의 switch 문을 어떻게 3항연산자로 대체할 수 있을까? 코드로 예시를 들라.
  - a === 1 ? b = 1 : a === 2 ? b = 2 : b = 3
- ==와 ===의 차이는 정확히 무엇인가?
  - ==은 동등함, ===은 일치함. 
  - ===은 같은 객체를 가리키거나, 같은 타입이고 값도 같다면 true
  - ==은 같은 객체를 가리키거나, 같은 값을 *갖도록 변환*할 수 있다면 true
- const value = a || b; 코드의 의미는 무엇인가?
  - value 변수를 읽기 전용으로 생성하고, a가 거짓 같은 값일 경우 b를 넣는다
- eval 은 무엇인가?
  - 문자열을 받아, 문자열이 표현식이라면 표현식을 실행한다.
  - 보안에 취약하고 속도가 느려 사용하지 않는 게 좋다
  - 대괄호 표기법을 사용하거나 json파서를 따로 활용하거나 Function('')으로 래핑하는 등의 방법으로 대체할 수 있다.
- 변수값을 출력할때 null, undefined, is not defined으로 출력되는 차이점은 무엇인가?
  - null: 선언되고, 빈 값이 설정된 경우
  - undefined: 선언되었으나 값이 설정되지 않았을 경우
  - is not defined: 선언되지 않았을 경우
- Function.prototype.bind 에 대해서 설명하기
  - Function.prototype 은 모든 함수의 프로토타입 메서드를 지시한다
  - Function.prototype.bind는 인수를 this로 사용하는 함수를 만든다
- this가 가리키는 건 언제 결정되는가?
  - 메서드 호출 시점
  - 메서드를 호출할 때, this는 호출 당시에 해당 메서드를 소유하고 있는 객체로 결정된다.
  - 스트릭트 모드에서는 전역에서 호출할 때 undefined가 된다
  - 생성자 실행에서는 새롭게 만들어진 객체를 가리킨다
  - call과 apply, bind를 사용한다면 사용자에 의해 주어진 값으로 설정된다
- call과 apply의 차이점은?
  - call은 인수를 나열 식으로, apply는 배열로 전달한다.
- add(10)(2) //12 가 되도록 구현해보기
  - var add = function (a) {
  -   return function (b) {
  -     return a + b;
  -   }
  - };
- 함수의 인자갯수와 파라미터가 일치하지 않으면 어떤일이 생기는가 설명하기
  - 적으면 전달되지 않은 인수는 undefined로 설정되고 많으면 arguments에 배열 형태로 전달된다.
- 함수의 반환값이 없을때 어떻게 되는가?
  - undefined 반환
- 익명함수는 무엇인가?
