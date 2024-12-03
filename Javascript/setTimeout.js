setTimeout(() => {
    console.log("This is a setTimeout method")
}, 1000);

setTimeout((name) => {
    console.log(`This is a ${name} method`)
}, 1000, "setTimeout")


function greet(msg){
    console.log(`The message is ${msg}`);
}

setTimeout(greet, 2000, "very clear");

const object = {
    name: "Philips",
    greet(){
        console.log(`This is a ${this.name} method call`);
    }
}

setTimeout(object.greet.bind(object), 5000);

const object2 = {
    name: "Philips",
    greet(msg){
        console.log(`This is a ${msg} method call`);
    }
}

setTimeout(object2.greet.bind(object2, "setTimeout"), 5000);