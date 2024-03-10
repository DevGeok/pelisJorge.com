export function verifyData(newMovie){
    const isDataComplete = Object.values(newMovie).every(value => {
     return value});
      
     if(isDataComplete === false){
       confirm("Hay campos sin llenar, todos los campos son obligatorios")
     };   
     return isDataComplete;
 };