console.log("Learn about Events in JavaScript");

// document.getElementById('heading').addEventListener('click',function(e){
//     let variable;
//     console.log("You have click the heading");
//     console.log(e);
//     variable = e.target;
//     variable = e.target.className;
//     variable = e.target.classList;
//     variable = Array.from(e.target.className);
//     variable = e.target.id;

//     // offset gives from element x = horizontally how far you click , y = vertically
//     variable = e.offsetX;
//     variable = e.offsetY;
//     // client gives location of click from element in webpage
//     variable = e.clientX;
//     variable = e.clientY;
//     console.log(variable);
// })

// when mouse wheel comes in range of heading the event get fired

document.getElementById('heading').addEventListener('mouseover',function(e){
    let variable;
    console.log("You have click the heading");
    console.log(e);
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.className);
    variable = e.target.id;

    // offset gives from element x = horizontally how far you click , y = vertically
    variable = e.offsetX;
    variable = e.offsetY;
    // client gives location of click from element in webpage
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
})