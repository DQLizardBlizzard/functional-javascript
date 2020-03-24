function doubleAll(numbers) {
  let result = numbers.map(function(i){
      return i * 2
  })
  return result
  }
  
  module.exports = doubleAll

/*
   module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
*/