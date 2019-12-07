export const stripText = (text,stripLenght) => {
    if(stripLenght < text.length){
        return text.substr(0,stripLenght) + "...";
    }else{
        return text;
    }
}