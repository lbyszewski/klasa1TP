// var - variable , let , const 
console.log("witaj w skrypcie !!!")
document.writeln("witaj świecie !!!")

function onStep(){
    var a = parseInt(document.getElementById('first').value)
    
    var b = parseInt(document.getElementById('last').value)
   


    // 4 , 8, 12
    for(var x = a;x<=b;x++){
        document.writeln('<h1>' + x + '</h1>') 
    }

}