console.log("1: i will execute first");

let value = "Hello world";

function doAsyncWork(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("2: Doing something in a timer") ;
            return "Asynchronous Result";
            },3000);

    });   
}

async function getAsyncResult(){
    try{
        let asyncresult = await doAsyncWork();
        console.log("3: i am second: "+ asyncresult);
    }catch(err){
        console.log(err);
    }
 
}

getAsyncResult();

console.log("4: Doing other work: "+ value);

