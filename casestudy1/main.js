$(document).ready(function()
{   

    var output='<div class="container"><table class="table">';
$("#loader").hide();

        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",

            beforeSend: function()
               { $("#loader").show();},
            
           success:function(data)
            {   $("#loader").hide();
                console.log(data);
                //alert(data['articles'][1].title);
                var count=1;

                for(var i in data)
                    {   //alert(data['articles'][i].title);
                        //console.log(data['articles'][i].title);
                        output+="<tr><td><input type='checkbox'  value='true' id='box'"+count+"></td>";
                        output+='<td><h4>'+data[i].title+'</h4></td></tr>';
                        count++;
                        
                    }

                    output+='</table></div>';
                    console.log(output);
                    
                    

                    for(var count1=1;count1<=200;count1++)
                    {
                        var idname="box"+count1;
                        console.log(idname); 
                
                
                        /* for(var i=0; i<=200;i++)
                        {
                            var status="";
                            status=document.getElementById(idname);
                            if(data[i].completed== true)
                            status.checked = true;
                        } */
                
                    }


                $("#todo").html(output);
                
                   /* check();  */

                    var count2=0;
                    $('input[type="checkbox"]').click(function()
                    { 
                        
                       
                        if($(this).prop("checked") == true){
                            count2++;
                        
                            
                        }
                        else 
                            count2--;
                        
                        var mypromis=new Promise((resolve, reject)=>{ 
                            if (count2>=5)
                                {resolve("competed 5!");
                                count2=0;}
            
                            else
                                reject("");
            
                        });
                        
                        mypromis.then((msg)=>{
                            alert(msg);console.log(msg);
                        }) .catch((msg)=>{
                            ;console.log(msg);
                        }) ;
                
                    });
            }
        });



     
    
        
});

/*  function check()
{   
    
    for(var count1=1;count1<=200;count1++)
    {
        var idname="box"+count1;
        console.log(idname); 


        for(var i=0; i<=200;i++)
        {

        }


        var status="";
        status=document.getElementById("idname");
        if(status)
        {
            status=status.value;
            if(status==true)
                alert("true");
        
        }
        $()
        if(status == "true")
            alert("got"); 
    }
 
}
  */