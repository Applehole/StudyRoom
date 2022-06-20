import React from 'react';

function Hello({ style, name='이름없음' }) {
  return (
    <div style={{ style }}>
      안녕하세요 {name}
    </div>
  );
}


export default Hello;