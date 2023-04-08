# React 수업\_1일차

# React 오전 수업

- js es5까지는 표준화가 안됨 , es6부터 크로스브라우징 가능

## 일반적 구조

1. 랜더링
2. html - 마크업
3. JS - DOM객체를 찾음 - DOM의 환경을 읽어들임

## Vue : MVC구조로 이루어짐

MVC (model view controllor)
모델 -> view -> 사용자
-> controllor -> 사용자

## React : 유지보수의 안정화

MVC 중 view만 존재

dom - section - div - p 중 p만 수정이 가능하고 주변 요소에 영향을 미치지않도록 개발됨

- 프레임워크가 아닌 라이브러리에 해당
- 데이터가 계속 변화하는 사이트는 리엑트로 작업하는 것이 효율적
- 성능상 최적화를 가능하게 하는 구조를 가짐

## 프레임워크 라이브라러 차이

### frameWork : 틀 (영역안에서만 사용)

-> 이 환경만 이해하면됨

### library : 끼우기만 하는것 (넣기만하면 작동)

-> 끼우려하는 추가적인 속성을 모두 알고있어야함

### component (조각)

- 끼우기만하면됌
- 재사용 가능
- 리액트는 컴포넌트기반으로 만들어짐

### 초기렌더링

: 처음 들어갔을 때 처음 보여지는 부분

#### 렌더링 함수

    ``` javascript
    render(){...}
    ```

### 리렌더링

: 변화된 부분만 감지하는 렌더링
: 변화가 없으면 그냥 보여줌
: 달라진 부분있다면 바로 랜더링하지않고 비교를 먼저 함

#### DOM (document object model)

: 객체로 문서 구조를 표현하는 방법 (xml, html)

DOM <=== 자바스크립트 css 적용
DOM <=== 트리형태 (DOM의 단점 : 정적 (동적 부분은 따로 처리해주어야함))

### virtual DOM (가상돔)

: 실제 돔에 접근하는 것이아니고, 가상돔을 복사하여(돔의 사본이라고 생각하면됨) 만들어서 3가지의 절차를 밟음
: 성능상 최적화를 가능하게 하는 구조를 가짐 (장점 / 리액트를 사용하는 이유)

**_ 업데이트할때 밟는 3가지 절차 _**

1. 데이터를 업데이트를 하면 전체 ui를 virtual dom에 리렌더링 한다.
2. 이전 virtual dom에 있던 내용과 현재 내용을 비교
3. 바뀐 부분만 실제 DOM에 적용

## 바벨(babel) : es6 -> es5 변환 (상위버전을 하위버전으로 변환) / 크로스브라우징 떄문

: 웹팩(webpack) 모듈화된 코드를 한 파일로 합치는(번들링) 코드를 수정할 때마다 웹 브라우저를 리로딩하는 등

### npm

: node 패키지 매니저 도구
: npm으로 개발자가 만든 패키지(재사용 가능한 코드)를 설치 패키지의 버전을 관리할 수도 있음.

### MAC 설치

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm —version

```

## yarn

: npm을 대체할 수 있는 도구
: npm보다 더 빠르고 효율적으로 캐시 시스템 기타 부가 가능 제공

### MAC에서 yarn 설치

터미널에서 하기 코드 입력
` npm install —global yarn`
`yarn --version`

### yarn 설치 참고 사이트

https://classic.yarnpkg.com/en/docs/install#windows-stable

## VS Code 확장프로그램 설치 리스트

- ESLint : 자바스크립트 문법 및 코드 스타일을 검사해주는 도구
- Reactjs code snippets : 리액트 컴포넌트 및 라이프사이클 함수를 작성할 때 단축 단어를 사용하여 간편하게 코드를 자동 생성할 수 있는 코드 스니펫 모음 (리액트 사용할때 무조건설치!)
- Prettier - Code formatter : 코드 스타일을 자동으로 정리해주는 도구.
- Korean Language Pack for Visual Studio Code : 한국어 지원

## git 설치

### MAC

https://git-scm.com/download/mac

### window

https://git-scm.com/download/

download > 64-bit Git for Windows Setup. 클릭 > 설치 진행하기

git bash 설치됨 -> mac이나 rinux에서도 사용환경이 같음

---

## setting

1. vs code에서 리포지토리 폴더 열기
2. 최상위 폴더에서 터미널 열기
3. 터미널 우측 플러스 옆에 아래화살표 에서 git bash 선택 (mac이랑 환경 동일해짐)
4. `yarn create react-app hello-react` 입력 실행 -> 설치됨
   - cmd 창에서 실행할 떄 : `npm create-react-app hello-react` 입력 실행
5. `cd hello-react` 입력
6. `yarn start` 혹은 `npm start` 입력
7. `webpack compiled successfully` 나오면 성공! >브라우저 local경로로 열림

---

## react version

: 새로운 프로젝트할 때 version 16버전이상으로 작업해야함
: 버전이 중요함!!
: 버전파악해서 수정하기

- 16버전 이하는 **_컴포넌트형 _**
- 16버전 이상은 **_함수형_**

---

- package.json 내부에 "dependencies" 는 객체(object)

  - 중괄호로 이루어진 구조 = 객체

- package.json은 객체 안의 객체 구조

---

# React 오후 수업

---

## npm과 npx 차이 설명 블로그 (선생님추천 글)

https://hanamon.kr/npm-npx-%ec%b0%a8%ec%9d%b4/

- 현재 npm 설치시 npx까지 설치됨
- npm은 패키지를 관리만 하고 실행은 할 수 없다.
- yarn은 모두 가능함
- npx는 npm 패키지 실행기이다.

---

## 라이브러리 폴더 살펴보기

1. `src > App.js`

   ```javascript
   import logo from "./logo.svg"; //파일연결  from +( 경로 )
   import "./App.css"; // css 연결 (바로 경로 연결해주면됨)

   function App() {
     // APP함수안에서 {코드블럭} 안의 코드 사용해라
   }

   export default App; // 함수 호출하기 (호출해야만 사용가능)
   ```

   - import는 자바스크립트 언어가 아닌 node.js에서 지원하는 언어
   - node_mudules가 있어야지 작동가능함

   - bundler도구 중 webpack 대신 parcel을 사용하는 회사도 있음
   - react에서는 webpack 많이 사용

   ### jsx (javascript xml) 문법

   : 정식 자바스크립트 문법 이 아니기 때문에 es5의 형태로 변환.
   (ecmascript 협회에서 2015년도에 es6 만듦 )
   : jsx는 자바스크립트의 확장문법
   2016년 - es7

   ```javascript
   function App() {
   return (
       <div className="App"> // <div>태그속 html과 유사해보이지만 jsx문법에 해당
       <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />  // className으로 class 대체 / css와 겹치기 때문
           <p>
           Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
           >
           Learn React
           </a>
       </header>
       </div>
   );
   }
   ```

   ### 브라우저에 보여지는 순서

   1. 브라우저에서 실행되기 전에
   2. 코드가 번들링되고
   3. 바벨에 사용
   4. 일반자바스크립트 코드로 변환

2. `scr > index.js`

   `export default App;`했기 때문에 `index.js`에서 불러올 수 있음

   ```javascript
   const root = ReactDOM.createRoot(document.getElementById("root")); // 소괄호()  : 함수
   // . : 접근 기호 ("객체에 접근해서 실행해라"의 의미)
   root.render(
     //root에 접근해서 render 함수를 실행하라
     <React.StrictMode>
       {" "}
       // 정확히 토시하나 틀리지말고 체크해라! (엄격모드 - 2번 렌더링해서 체크함)
       // 개발자 환경에서만 보여지는 것, 배포할 때는 제외해야함
       <App /> //시작태그와 마감태그가 있을 때 자식노드를 가지려고 '컴포넌트'
       라고 함
     </React.StrictMode>
   );
   ```

`StrictMode` 사용시 레거시 사용하지 못하도록 막아줌

3. `public > index.html`

   ```html
   <div id="root"></div>
   <!-- const root = ReactDOM.createRoot(document.getElementById('root')); 를 HTML에 연결함 -->
   <!--  
       id="root"영역만 리엑트에 해당 
       다른부분은 html로 작성가능 
     -->
   ```

---

## `App.js`

### server 켜기

`yarn start`

- fornt : port 번호 **:3000**
- back : port 번호 **:8080**

- live server로 켜지않음!!

### jsx규칙

1.  절대 실행되지 못할 때는 빨간색 줄 생성됨

- 빨간색 줄 뜨는 이유는 `index.js`의`<React.StrictMode>`때문

2.  retun 메서드 안에 부모가 하나 있어야함!
3.  부모 `<div></div>` 태그이름 없이 사용해도 됨

    > ex. `<> </>` - **_Fragment_**

4.  트리구조에서 자식이 변화할 떄 부모가 변화함을 감지해야하기 때문에 트리구조를 유지하기 위해 부모가 반드시 있어야함!

5.  id명 중 `root`는 리액트 약속어로 암묵적으로 사용됨

6.  reat는 함수 스코프기 때문에 전역에서 선언한 변수는 지역에서 끌어다가 사용할 수 있음

    ```js
    function App() {
      const name = "react";
      return (
        <>
          <h1>{name}야 안녕?</h1>
          <h2>잘 작동하니?</h2>
        </>
      );
    }
    ```

    > **javascript 문법 짚고넘어가기 ( const 나오면서 추가설명한 부분 )**  
    > hoisting : 자바스크립트에서 끌어다가 사용할 수 있는지  
    > es5/6의 variable의 차이는 호이스팅 차이!

    - 호이스팅 : 변수명을 값과 상관없이 먼저 인식함
      ( ex. var a = 0 ; var b = ... ; var c = 1 ; ... 중 a,b,c 인식 )
    - null : 값을 비운것
    - undefined : 값이 애초에 없는 것

    > **`let`보다 `const`를 많이 사용하는 이유**

    - 잘 만들어진 함수는 수정이 적기 때문에 변화할일이없음
    - `const`는 따로 정리해두고 가져다가 사용하는 형태로 많이 사용

7.  삼항연산자 : **`조건? 참:거짓`**

    > `=` : 대입

        `==` : 값만 같으면 true
        `===` : 값과 타입이 같아야 true

    ```javascript
    function App() {
      const name = "react";
      return (
        <>
          {name === "리액트" ? (
            <h1>리액트입니다</h1>
          ) : (
            <h2>리액트가 아닙니다.</h2>
          )}
        </>
      );
    }

    // 리액트가 아닙니다. 출력
    ```

    ```javascript
    function App() {
      const name = "react";
      return <>{name === "리액트" && <h1>리액트입니다</h1>}</>;
    }
    // 브라우저에 아무것도 출력되지않음
    ```

8.  boolean에서 falsy 값인 `0`은 예외적으로 화면에 출력됨

    > true = 1 / false = 0

    ```javascript
    function App() {
      const number = 0;
      return <>{number && <h1>리액트입니다</h1>}</>;
    }

    // 0 출력
    ```

9.  `undefined`의 처리 (react 문법 권장사항)
    : undefined은 기본 false값 (0)

        ```javascript
        function App() {
            const name = undefined;

            return name; // 지양하는 방법
        }
        ```
        ```javascript
        function App() {
            const name = undefined;

            return name || '값이 undefined 입니다.';  //지향하는 방법
        }

        // 값이 undefined 입니다. 출력

        // undefined 사용하지 않는 것을 권고하고 있으며
        // 사용해야할 때는 or 기호 (||) 사용하여 위이 방법처럼 표기
        ```

> javascript test 해보기

    ```javascript
        let a;
        console.log(Boolean(a));  //false
        console.log(typeof a);  // "undefined"
    ```

10. 스타일 적용방법
    : css와 다르게 하이픈(-)이 아닌 카멜표기법으로 단어조합에 대문자 사용

    - **_inline-style_**

    ```javascript
    function App() {
      const name = "리액트";
      const style = {
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16, //쓰지않으면 "px"가 기본값
        // 실무에선 정확한 단위 표기가 좋을듯
      };

      return <div style={style}>{name}</div>;
    }
    ```

    - **_외부링크 style_**
      :

    ```css
    .react {
      background-color: aqua; /* 따옴표 쓰지말기!*/
      color: black;
      font-size: 48px;
      font-weight: bold;
      padding: 16px;
    }
    ```

    ```javascript
    function App() {
      const name = "리액트";

      return <div className="react">{name}</div>;
    }
    ```

11. 자식 요소를 갖지않을 떄, `< />`로 작성하기

    > <input>는 html에서 닫는 태그가 없음  
    >  react에서 틀린문법으로 나옴  
    >  단독으로 사용 시 `< />`로 시작태그-종료태그 함께 작성해주어야함

    > > `<input>` X
    > > `<input />` O

12. 주석 : `ctrl + /`

    - 함수안에서 `//`로 작성
    - return 안에서 `{/* */}` 로 작성

    ```javascript
    function App() {
      const name = "리액트";
      // 주석은 이렇게 작성합니다 //js문법영역

      return (
        <div className="react">
          {name}
          {/* 주석은 이렇게 작성합니다 */} //jsx문법영역
          <input />
        </div>
      );
    }
    ```

13. `.prettierrc`
    : 파일명앞에 `.`을 작성하는 것은 접근해서 실행하라는 뜻  
    ex) .gitignore 도 접근해서 실행하라는 파일

    1. 파일 명 `.prettierrc` 로 새파일 생성
    2. 파일 내부에 하기 코드 입력
       ```
       {
           "singleQuote": true, //작은따옴표 사용
           "semi": true, //세미콜론 자동으로 생성
           "useTabs": false, // 탭 사용 안함
           "tabWidth": 2 //탭 뎁스 2칸
       }
       ```
    3. 실행

**`.prettierrc` 적용 안되는 경우**

1. ctrl + , > 설정열기
2. formatter 검색
3. Editor: Default Formatter 에서 `prettier` 선택
4. format on save 검색
5. format on save 체크

   ```javascript
   function App() {
     const name = "리액트";
     // ""로 작성했을 때, ctrl + s 하면 자동으로 작은따옴표로 변경됨
     // 큰따옴표로 설정 변경하고 싶을 시 : single > Double로 변경
     // 주석은 이렇게 작성합니다

     return (
       <div className="react">
         {name}
         {/* 주석은 이렇게 작성합니다 */}
         <input />
       </div>
     );
   }
   ```

===========================================

## 컴포넌트

### JS 복기 - 함수

- ~ ES5 : 프로토타입 사용
- ES6 ~ : 클래스 사용

> ES5 - prototype

    ```javascript
    //외부에서 내부로 전달할 때 => 매개변수
    //내부에서 외부로 전달할 때 => return
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.say = function(){ //Dog의 원형에 say를 추가하겠다.
        console.log(this.name + ' : 멍멍');
    }

    const dog = new Dog('흰둥이'); //new 함수명 : 생성자함수
    dog.say(); //함수호출 (dog에 접근해서 say 실행)
    ```

> ES6 - class

    ```javascript
    class Dog {
        constructor(name) { // 규약 :  constructor(매개변수) - 생략가능
            this.name = name;
        }

        say() {
            console.log(this.name + " : 멍멍");
        }
    }

    const dog = new Dog("흰둥이");
    dog.say();
    ```

### 리액트 컴포넌트

**컴포넌트 퍄일 생성시 파일명의 첫글자는 반드시 대문자사용**

- **클래스형**
  : 클래스형 컴포넌트를 가지고 있고 더 향상하기 위해 클래스 사용
  : 기능을 계속해서 추가 확장가능하다는 장점을 가짐
  : render 함수 사용

```javascript
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  // Component를 App에 끌어다 사용
  render() {
    const name = "리액트";
    return <div className="react">{name}</div>;
  }
}

export default App;

//함수형과 동일한 결과 출력됨
```

- **함수형**
  : function 사용
  : import로 컴포넌트 불러오지 않음

```javascript
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;
```

### 험수형 컴포넌트의 장점

1. 클래스형보다 선언하기 쉽다.
2. 메모리 자원을 클래스형보다 덜 사용한다. >> 속도가 빠르다.
3. 프로젝트를 완성하여 빌드한 후 배포할 때도 함수 컴포넌트를 사용하는 것이 결과물 파일이 더 작다.

### 함수형 컴포넌트의 치명적 단점

: api를 가지고 끌어다가 사용하기 어려움 -> 일일이 다붙여야함  
: 클래스형은 부모가 가지고 있어 api사용면에서는 더 좋았음  
: 16버전 이상부터 hoock이 생김 >> 함수형에서 hook 사용으로 인해 api가져오는 데 보완되어 개선이 확실해짐

**리액트 버전에 따른 컴포넌트 변화**

- 리액트는 16버전 이상부터 불변성의 규칙을 두고있음(지향)
- 변화 감지 하면 삭제 후 새로 삽입
- 업데이트하지않는 이유는 업데이트하기위해서는 변화된 부분을 읽어야야 하기때문
- 리액트는 변화 감지하면 들어가서 읽지않고, 삭제 후 삽입
- 메모리 절감 효과

### 컴포넌트 만들기

1. 파일명 생성 `MyComponent.js`
2. rsc + tap 입력
3. 하단 코드 자동 생성됨

```javascript
import React from "react";

const MyComponent = () => {
  return <div></div>;
};

export default MyComponent;
```

4. tip) 코드 줄은 곧 메모리이기때문에 간단한 함수는 줄여쓰자^^

```javascript
import React from "react";

const MyComponent = () => {
  return <div>나의 첫 컴포넌트</div>;
};

export default MyComponent;
```

### JS 복기

> 일반함수 vs 화살표함수 차이 : `this`차이
> 화살표 함수 : 최상위함수 선택 못하게 막음

#### 일반함수

: **자기를 가리키고있는 포괄적인 객체를 가리킴**

```javascript
function BlackDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    back: function () {
      console.log(this); //하단 this 확인하기 위해 바로 위에서 console.log 실행
      console.log(this.name + " : 멍멍");
    },
  };
}

const blackDog = new BlackDog(); //blackDog 은 최상위 객체
//BlackDog는 하위 인스턴스

blackDog.back();

// 출력내용
// [object Object] {
//   back: function(){
//       window.runnerWindow.proxyConsole.log(this);
//       window.runnerWindow.proxyConsole.log(this.name + ' : 멍멍');
//     },
// ---> blackDog(객체) 가리킴

//   name: "검둥이"
// }
```

> 인스턴스 : 기존에 객체를 가지고 변형을 줌 (new 함수명)

**리액트에서는 this사용하지 못하게 규약되어있음**
**this로 윈도우선택가능한 것(최상위선택)은 보안의 취약성문제**

#### 화살표함수

: **자기를 감사고있는 인스턴스를 가리킴**

```javascript
function WhiteDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: () => {
      console.log(this);
      console.log(this.name + " : 멍멍");
    },
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark();

// 출력내용
//[object Object] {
//  name: "흰둥이"
//}
// "흰둥이 : 멍멍"

//
```

#### JS 함수 비교 정리

: 일반 함수는 자신이 종속된 객체를 this로 가리키고
화살표함수는 자신이 종속된 인스턴스(new로 생성된 객체)를 가리킴

---

```
나의 첫 컴포넌트

app.js 영역

import './App.css';

function App() {
    const name = '리액트';
    return <div className="react">{name}</div>;
  }

export default App;

```
