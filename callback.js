// The callback assisgnment

function asyn_add(a,b,callback){
    setTimeout(()=>{callback(a+b);},1000)
}

function asyn_mul(a,callback){
    setTimeout(()=>{callback(a*a);},1000)
}

function call_asyn_callbacks(a,b,callback){
    asyn_add(a,b,(sum)=>{
        asyn_mul(sum,(result)=>{
            callback(result);
        })
    })
}

call_asyn_callbacks(5,5,(result)=>{
    console.log("The response is",result);
})
