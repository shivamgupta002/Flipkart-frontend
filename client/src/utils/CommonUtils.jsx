
export const addEllipsis=(text)=>{
    if(text.length>50){
        return text.substring(0,55)+'...';
    }else{
        return text;
    }
}