import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 tag that says Users', (done) => {
    // index will hold the contents of our html file in memory
    const index = fs.readFileSync('./src/index.html', "utf-8");
    // jsdom.env will create a virtual DOM in memory using index
    // then callback will run with window as a virtual window
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      // report test results only when done (handles async calls like jsdom.env)
      done();
      window.close();
    });
  });
});
