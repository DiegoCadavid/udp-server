const dgram = require("node:dgram");
const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.error(`Server error \n${err.stack}`);
})

server.on("message", (msg, remote) => {
  console.log(`Client: ${msg} from ${remote.address}:${remote.port}`);
  server.send(Buffer.from("I receive your message! ^^"), remote.port, remote.address);
})

server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
})

server.bind(3000);