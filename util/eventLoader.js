const kaz = (event) => require(`./${event}`);
module.exports = client => {
  client.on('message', kaz('message'));
};
