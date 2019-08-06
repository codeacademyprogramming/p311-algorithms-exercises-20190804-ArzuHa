let x,y,z=0; 
    x=parseInt(prompt("Reqem daxil edin ")); 
	
    for(y=2; y<=x/2; y++)
	{ 
        if(x%y==0)
			{   
				z++; 
			}
    } 
    if(z==0) 
	{ 
		document.write("Tek ededdir"); 
	}
    else 	
	{	
		document.write("Tek eded deyil.");  	
    } 
