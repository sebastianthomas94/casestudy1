$(document).ready(function()
{   

    var output='<div class="container"><table class="table" style="margin-top:9%"><thead><tr><th><b><h4>#</h4></b></th><th></th><th><b><h4>List</h4></b></th></tr></thead><tbody>';
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
                var j=1;

                for(var i in data)
                    {   //alert(data['articles'][i].title);
                        //console.log(data['articles'][i].title);
                        output+="<tr><td>"+j+++"</td><td><input type='checkbox'  value='true' id='box'"+count;
                        
                        if (data[i].completed==true)
                            output+=' checked disabled></td>';
                        else    
                            output+="></td>";
                        
                        
                        output+='<td><h4>'+data[i].title+'</h4></td></tr>';
                        count++;
                        
                    }

                    output+='</tbody></table></div>';
                    console.log(output);
                    
                    

                    for(var count1=1;count1<=200;count1++)
                    {
                        var idname="box"+count1;
                        console.log(idname); 
                
                    }
                     /* for(var i in data)
                        {
                            var status="";
                            status=document.getElementById(idname);
                            if(data[i].completed)
                                alert(status);
                                if(!status){
                                    status.checked = true; 
                                    alert("found1");} 
                        } */
                
                    


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
                                {resolve("Congrats. 5 Tasks have been Successfully Completed");
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