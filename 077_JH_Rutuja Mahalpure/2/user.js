const mysql = require("mysql");
const promise = require("bluebird");
promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbc = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
};

async function addmsg() {
    const Connection = mysql.createConnection(dbc);
    await Connection.connectAsync();
    console.log("hi");
    let sql = 'insert into user (message) values(?)';

    await Connection.queryAsync(sql, [user.message]);

    await Connection.endAsync();

};


async function getmsg() {
    const Connection = mysql.createConnection(dbc);
    await Connection.connectAsync();
    console.log("hi");
    let sql = 'select * from user';

    const list = await Connection.queryAsync(sql, []);

    await Connection.endAsync();
    return list;

}
const user = { message: "hello" };

addmsg(user);
getmsg();

module.exports = { addmsg, getmsg };



