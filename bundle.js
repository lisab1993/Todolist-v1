(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let input_add_task = document.querySelector('#inputAddTask')
let btn_add_task = document.querySelector('#btnAddTask')
let incomplete_output = document.querySelector('#incomplete_output')
let complete_output = document.querySelector('#complete_output')
let btn_show_all = document.querySelector('#show_all')
let btn_show_incomplete = document.querySelector('#show_incomplete')
let btn_show_complete = document.querySelector('#show_complete')


//add a new item
btn_add_task.addEventListener("click", function (event) {
    //add the item to the incomplete list
    //and reset the value of the form
    let new_item = document.createElement("div")
    new_item.innerText = input_add_task.value
    input_add_task.value = ""

    //completion buttons for incomplete items
    var btn_complete = document.createElement("button")
    btn_complete.innerText = "Done"
    btn_complete.classList.add("btn", "btn-primary")

    //delete buttons for incomplete items
    var btn_delete = document.createElement("button")
    btn_delete.innerText = "Delete"
    btn_delete.classList.add("btn", "btn-danger")

    //add the item and buttons to the html
    incomplete_output.appendChild(new_item)
    incomplete_output.appendChild(btn_complete)
    incomplete_output.appendChild(btn_delete)


    //mark an item as complete
    btn_complete.addEventListener("click", function (event) {
        //create a div to hold the complete item
        let complete_item = document.createElement("div")
        complete_item.innerText = new_item.innerText

        //delete button for completed items
        let btn_delete_complete = document.createElement("button")
        btn_delete_complete.innerText = "Delete"
        btn_delete_complete.classList.add("btn", "btn-danger")

        //add the completed item and delete button
        complete_output.appendChild(complete_item)
        complete_output.appendChild(btn_delete_complete)
        incomplete_output.removeChild(new_item)
        incomplete_output.removeChild(btn_complete)
        incomplete_output.removeChild(btn_delete)

        //delete a complete item
        btn_delete_complete.addEventListener("click", function () {
            complete_output.removeChild(complete_item)
            complete_output.removeChild(btn_delete_complete)
        })
    })

    //delete an incomplete item
    btn_delete.addEventListener("click", function () {
        incomplete_output.removeChild(new_item)
        incomplete_output.removeChild(btn_complete)
        incomplete_output.removeChild(btn_delete)
    })

    //view complete, incomplete, or all tasks
    btn_show_all.addEventListener("click", function(){
        complete_output.style.display = "block"
        incomplete_output.style.display = "block"
    })
    
    btn_show_incomplete.addEventListener("click", function(){
        complete_output.style.display = "none"
        incomplete_output.style.display = "block"
    })

    btn_show_complete.addEventListener("click", function(){
        complete_output.style.display = "block"
        incomplete_output.style.display = "none"
    })


})



},{}]},{},[1]);
