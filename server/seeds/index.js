const User = require("../models/User");
const sequelize = require("../config/connection");
const Admin = require("../models/Admin");

const userData = [
  {
    first_name: "user1",
    last_name: "last1",
    email: "niko.desilva@esmt.org",
    user_group: 1,
    cadence: 1,
    in_next_round: 1,
    login_token: "abcd1234",
  },
  {
    first_name: "user2",
    last_name: "last2",
    email: "eulerlars@gmail.com",
    user_group: 1,
    cadence: 1,
    in_next_round: 1,
    login_token: "abcd1235",
  },
  {
    first_name: "user3",
    last_name: "last3",
    email: "olivierrmeasson@gmail.com",
    user_group: 1,
    cadence: 1,
    in_next_round: 1,
    login_token: "abcd1236",
  },
  {
    first_name: "user4",
    last_name: "last4",
    email: "sgaikwad@bootcampspot.com",
    user_group: 1,
    cadence: 1,
    in_next_round: 1,
    login_token: "abcd1237",
  },
];

//ADD SEED DATA FOR ADMINS
const adminData = [
  {
    username: "admin1",
    password: "rootpass",
  },
];

const seedUsers = async () =>
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

const seedAdmin = async () =>
  await Admin.bulkCreate(adminData, {
    individualHooks: true,
    returning: true,
  });

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedAdmin();
  await sequelize.close();
};

seedAll();
