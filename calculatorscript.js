var input=document.getElementsByTagName("input")[0];
var buttons=document.getElementsByTagName("button");
var string="";
for(let i=0;i<buttons.length;i++){
	// buttons[i].addEventListener('click',function(){
	// 	buttons[i].style.transform="";
	// })
	buttons[i].addEventListener('click',function(){
		var value=this.innerText;
		if(value=='='){
			string=eval(string);
			input.value=string;

		}
		else if(value=='AC'){
			string="";
			
			input.value=string;
		}
		else if(value=='DEL'){
			string=string.substring(0,string.length-1);
			input.value=string;
		}
		else{
			string=string+value;
		    input.value=string;

		}
	})
}