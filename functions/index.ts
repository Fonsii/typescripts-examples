function display(name:string) : void;
function display(name:string, age:number) : void;

function display(name:string, age?:number){
    if( age != undefined){
        console.log("Name: " + name + " Age: " + age);
    }else{
        console.log("Name: " + name);
    }
};

display("Luis");
display("Luis", 30);