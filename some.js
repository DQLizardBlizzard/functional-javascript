function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(submittedUser => {
          return goodUsers.some(goodUser => {
              return goodUser.id === submittedUser.id
          })
      })
    };
  }

  module.exports = checkUsersValid

  let goodUsers = [1,2,3,4,5,5,6,6,7]
  let submittedUsers = [333,2,4456,54,6,7]
  let validUsers = checkUsersValid(goodUsers)(submittedUsers)