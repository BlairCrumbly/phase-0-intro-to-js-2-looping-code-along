function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

function countDown(start) {
    while (start >= 0) {
      console.log(start);
      start--;
    }
}


