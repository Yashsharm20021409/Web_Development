console.log("Practice set");
let str = 'harry';
let links = document.links;

for(i in Array.from(links)){
    if(document.links[i].href.includes(str)){
        console.log(document.links[i].href);
    }
}