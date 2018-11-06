function data1(state,action){
    console.log(action)
    if(action.type=='update'){
        return action.payload
    }
    return 100
}
function data2(state,action){
    if(action.type=='update'){
        return action.payload+'hhh'
    }
}
export default function(init={
    data1:1,
    data2:2
},action){
    return {
        data1:data1(init.data1,action),
        data2:data2(init.data2,action)
    }
}