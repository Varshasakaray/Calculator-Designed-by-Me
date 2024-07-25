
function ln(number) {
    return Math.log(number);
}
let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML =='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='pi'){
            string=3.14*eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='log'){
            string=Math.log10(eval(string));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='ln'){
            string=ln(eval(string));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='1/x'){
            string=1/(eval(string));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='x^2'){
            string=(eval(string)*eval(string));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='sin'){
            string=Math.sin(eval(string) * (Math.PI / 180));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='cos'){
            string=Math.cos(eval(string) * (Math.PI / 180));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='tan'){
            string=Math.tan(eval(string) * (Math.PI / 180));
            document.querySelector('input').value=string;
        }else if(e.target.innerHTML =='sqrt(x)'){
            string=Math.sqrt(eval(string));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='sqrt(x)'){
            string=Math.sqrt(eval(string));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='10^x'){
            string=Math.pow(10,(eval(string)));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML =='2^x'){
            string=Math.pow(2,(eval(string)));
            document.querySelector('input').value=string;
        }
        
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
            
        }
    })
})
