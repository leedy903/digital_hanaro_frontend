const Hong = { id: 1, name: "Hong" };
const Choi = { id: 5, name: "choi" };

const Lee = { id: 3, name: "Lee" };
const Kim = { id: 2, name: "Kim" };
const Park = { id: 4, name: "Park" };

const users = [Kim, Lee, Park];

function addUser(users, ...newUsers) {
    for (user of newUsers) {
        users.push(user);
    }
    return users;
}

function removeUser(users, ...newUsers) {}

function changeUser(users, ...newUsers) {}

console.log(addUser(users, Hong));
for (user in users) {
    console.log(users[user]);
}
