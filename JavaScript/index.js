function setTimeoutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms));
}

function greet()
{
    console.log("Hello Anudeep!");
}

setTimeoutPromisified(3000).then(greet);
