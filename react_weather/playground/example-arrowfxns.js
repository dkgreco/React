let friends = ['Yuyuko', 'Youmu', 'Yukari', '9'];
/*
names.forEach(function (name) {
   console.log('forEach ', name);
});

names.forEach((name) => {
    "use strict";
    console.log('arrowFunc ', name);
});

names.forEach((name) => console.log(name));

names.forEach(name => console.log(name));

let returnMe = name => name + '!';
console.log(returnMe('Cirno'));*/

let person = {
    name: 'Dustin',
    greet: function () {
        "use strict";
        friends.forEach(name => {
            console.log(this.name + ' says Hi to ' + name);
        });
    }
};

person.greet();