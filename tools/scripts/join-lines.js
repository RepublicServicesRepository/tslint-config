const { Transform } = require('stream');

const joinLines = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().replace('\n', ','));
    callback();
  }
});

process.stdin.pipe(joinLines).pipe(process.stdout);
