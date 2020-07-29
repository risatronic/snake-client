const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541,
  });
  conn.on('connect', (connect) => {
    console.log('Successfully connected to game server');
  });
  conn.on('connect', (connect) => {
    conn.write("Name: MCR");
    // setInterval(()=>{conn.write("Move: up")}, 100);
  });

  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };