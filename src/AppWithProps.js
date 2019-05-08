import { createElement, Component } from 'react'

class AppWithProps extends Component {

  render() {
    const word = this.props.word // 親要素から渡されたPropsからwordプロパティを読み込む。
    return createElement('h1', null, `Hello ${word}`);
  }
}

export default AppWithProps;