exports.shouldUpdateScroll = () => {
    return false;
  };

  exports.onInitialClientRender = () => {
    window.scrollTo(0, 0);
  };