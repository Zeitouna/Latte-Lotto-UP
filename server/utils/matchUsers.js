const User = require("../models/User");

//shuffle array (targeted outcome: random order of users), Fischer Yates Algorithm
const shuffleNextRoundUsers = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

//loop through the array and get matches
const matchUsers = async () => {
  let userData = await User.findAll();
  userData = userData.map((user) => user.get({ plain: true }));
  const NextRoundUsers = userData.filter((user) => user.in_next_round);
  shuffleNextRoundUsers(NextRoundUsers);
  const matches = [];
  for (i = 0; i < NextRoundUsers.length - 1; i = i + 2) {
    const match1 = NextRoundUsers[i];
    const match2 = NextRoundUsers[i + 1];
    matches.push({ match1, match2 });
  }
  return matches;
};

/*const demo = async () => {
  const pairs = await matchPairs();
  console.log(pairs);
};

demo();*/
module.exports = matchUsers;
