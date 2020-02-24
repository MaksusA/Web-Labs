	function disnediap(){
		var first=document.getElementById("f_first");
		var second=document.getElementById("f_second");
	if(t_field.value>=parseInt(f_first.value) && t_field.value<=parseInt(f_second.value))
       {alert('Дійсне число з діапазоном, ціла частина якого = '+Math.floor(t_field.value)+', а дробова частина = '+(t_field.value%1).toFixed(2));}
    else    
    {   alert('Число НЕ входить до діапазону, ціла частина якого = '+Math.floor(t_field.value)+', а дробова частина ='+(t_field.value%1).toFixed(2));}

}