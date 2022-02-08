const calculateTemp=()=>{
    const numberTemp=document.getElementById("temp").value;
    
    const tempSelected=document.getElementById("temp_diff");
   const valuetemp= temp_diff.options[tempSelected.selectedIndex ].value;
   
   const celTofah=(cel)=>{
       let fahrenheit=Math.round((cel*9/5)+32);
       return fahrenheit;
   }
   const FahTocel=(fah)=>{
       let celcius=Math.round((fah-32)*5/9);
       return celcius;
   }
   let result;
   if(valuetemp=='cel'){
       result=celTofah(numberTemp);
       document.getElementById("resultContainer").innerHTML=`=${result} °Fahreinheit`;

   }
   else{
       result=FahTocel(numberTemp);
       document.getElementById("resultContainer").innerHTML=`=${result} °Celcius`;
   }
}  