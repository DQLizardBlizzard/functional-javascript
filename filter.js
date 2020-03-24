//map function first then filter

function getShortMessages(message) {
  return message.filter(function (message) {
    return message.message.length < 50
  }).map(function (object) {
    return object.message
  });
}

module.exports = getShortMessages;