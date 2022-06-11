const InfinityScroll = () => {
    console.log('inside', page);
    if (page >= 100) {
      return;
    }
    const ScrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const ScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;
    // console.log("ScrollHeight",ScrollHeight)
    // console.log("ScrollTop",ScrollTop)
    // console.log("Client", clientHeight)
    if (ScrollTop + clientHeight === ScrollHeight) {
      if (page < 100) {
        increasePage();
        console.log('inner', page);
      }
    }
  };

  window.addEventListener('scroll', InfinityScroll);