function prinTable(){
    let num = document.getElementById("Tb1").value
    for(let i=1;i<=10;i++){
        document.writeln(num*i)
    }
}