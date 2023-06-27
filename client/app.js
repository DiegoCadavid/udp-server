const dgram = require("node:dgram");
const client = dgram.createSocket("udp4");

const message = Buffer.from("Holaaa!!!");

client.on("message", (msg, remote) => {
  console.log(`${msg}`);
})

client.send(message,3000,"0.0.0.0");
