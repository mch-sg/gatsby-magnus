// gatsby-browser.js

exports.onRouteUpdate = ({ location }) => {
  // Check if the current environment is not server-side rendering (SSR)
  if (location.action === 'PUSH') {
    // Scroll to the top of the page on route update
    window.scrollTo(0, 0);
  }
};
