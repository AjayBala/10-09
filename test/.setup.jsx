require('babel-register')({
    ignore: /node_modules/
});

global.__SERVER__ = false; // for server side rendering
var jsdom = require('jsdom'),
    exposedProperties = ['window', 'navigator', 'document'];
const { JSDOM } = jsdom;
const { window } = new JSDOM('<html><body></body></html>', { url: 'http://localhost/' });
function copyProps(app, target) {
    const props = Object.getOwnPropertyNames(app)
      .filter(prop => typeof target[prop] === 'undefined')
      .reduce((result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(app, prop),
      }), {});
    Object.defineProperties(target, props);
  }
  
  global.window = window;
  window.scrollTo = () => { };
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
  
  copyProps(window, global);
  var Enzyme = require('enzyme');
  var Adapter = require('enzyme-adapter-react-16');
  Enzyme.configure({ adapter: new Adapter() });
