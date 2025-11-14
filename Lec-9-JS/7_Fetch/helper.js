function throttling(fun, delay){
    let initialTime = 0;
    return function(){
        if(new Date().getTime() - initialTime >= delay){
            initialTime = new Date().getTime();
            fun();
        }
        else{
            console.log("Abhi click nhi hone dunga!!");
        }
    }
}