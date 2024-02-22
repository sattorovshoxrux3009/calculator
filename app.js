const display=document.getElementById('display')

const appendDisplay=(number)=>{
    display.value+=number;
}
const clearDisplay=()=>{
    display.value=''
}
const calculate=()=>{
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value='Error'
    }
       
}
document.addEventListener('keydown',(e)=>{
    if(e.key==1){
        appendDisplay(1)
    }
    else if(e.key==2){
        appendDisplay(2)
    }
    else if(e.key==3){
        appendDisplay(3)
    }
    else if(e.key==4){
        appendDisplay(4)
    }
    else if(e.key==5){
        appendDisplay(5)
    }
    else if(e.key==6){
        appendDisplay(6)
    }
    else if(e.key==7){
        appendDisplay(7)
    }
    else if(e.key==8){
        appendDisplay(8)
    }
    else if(e.key==9){
        appendDisplay(9)
    }
    else if(e.key==0){
        appendDisplay(0)
    }
    else if(e.key=='.'){
        appendDisplay('.')
    }
    else if(e.key=='+'){
        appendDisplay('+')
    }
    else if(e.key=='-'){
        appendDisplay('-')
    }
    else if(e.key=='*'){
        appendDisplay('*')
    }
    else if(e.key=='/'){
        appendDisplay('/')
    }
    else if(e.key=='Enter'){
        calculate()
    }
    else if(e.key=='Enter'){
        calculate()
    }
    else if(e.key=='Backspace'){
        const resultvalue=display.value;
        display.value=resultvalue.substring(0, display.value.length-1)
    }
})