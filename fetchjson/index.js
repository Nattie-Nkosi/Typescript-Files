"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todos = response.data;
    var id = todos.id, title = todos.title, completed = todos.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    Has a Title of: " + title + "\n    Is it Finished: " + completed + "\n  ");
};
