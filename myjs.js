        
    var i = 0;
	     function typeWriter() {
            
		    var txt = 'Hi, nice too meet you !!!';
				document.getElementById("demo1").innerHTML += txt.charAt(i);
				i++;
                if(i>txt.length){
                    document.getElementById("demo1").innerHTML="";
                    i=0;
                }
                
               
		}
        setInterval(typeWriter, 100);
		
