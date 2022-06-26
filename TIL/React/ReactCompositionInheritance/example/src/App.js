import React from 'react'
import WelcomeDialog from './WelcomeDialog';
import SplitPaneComponents from './SplitPane';

function App() {
  return (
    <div className="App">
      <WelcomeDialog /> {/*컴포넌트에서 다른 컴포넌트 담기*/}
      <SplitPaneComponents /> {/*컴포넌트에서 다른 컴포넌트 담기*/}
    </div>
  );
}

export default App;
