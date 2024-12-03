/*It uses await to pause the execution of the function until the fetch operation is complete. 
This allows you to work with the result once it's available. The response is obtained in the 
form of a Response object, which needs to be converted to JSON using response.json() to extract
 the actual data.*/

 async function fetchData(){
     try{
         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
         //if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
         const data = await response.json();
         console.log(data);
     } catch(error){
         console.error('There has been a problem with fetch operation:', error);
     }
 }