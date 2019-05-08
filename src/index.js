import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppWithProps from './AppWithProps';

/* Propsなし */

//  const h1 = React.createElement('h1', null, 'Hello World')
//  ReactDOM.render(
//    h1,
//    document.getElementById('root'));

/* Prpsなし、Appコンポーネントを呼び出す。 */

// const RootReactElement = createElement(App, null, null); //AppコンポーネントをReact要素にする。
// 
// ReactDOM.render(
//   RootReactElement,
//   document.getElementById('root'));

// Propsあり、AppWithPropsコンポーネントを呼び出す。

const RootReactElement = createElement(AppWithProps, { word: '世界"' }, null)
ReactDOM.render(
  RootReactElement, 
  document.getElementById('root'));
