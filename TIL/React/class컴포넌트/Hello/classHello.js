import React, { Component } from 'react';

class Hello extends Component {
  render() {
    const { style, name } = this.props;
    return (
      <div style={{ style }}>
        안녕하세요 {name} 님
      </div>
    );
  }
}

Hello.defaultProps = {
  name: '이름없음'
};

export default Hello;