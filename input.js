let connection;

const handleUserInput = (input) => {
  switch (input) {
  case '\u0003':
    process.exit();
    break;
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'd':
    connection.write("Move: right");
    break;
  case 'q':
    connection.write("Say: Help I'm a snake");
    break;
  case 'e':
    connection.write("Say: I got a good colour");
    break;
  case 'f':
    connection.write("Say: This colour sucks")
  default:
    break;
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };