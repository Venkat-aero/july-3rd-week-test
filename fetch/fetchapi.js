const source = "https://jsonplaceholder.typicode.com/users";

let x = async(source) =>{
    let res = await fetch(source);
    let data = await res.json();
    answer(data)
    for(let i =0 ; i<data.length;i++){
    console.log( data[i].id + "." +data[i].name  );
 
}

}
x(source)


let answer = (data) =>{

   
   alert("Check the console for the id number and enter it when it's required  ")

    button.addEventListener("click", () => {
      
                              
    let newData = document.getElementById("box")
   
    newData.style = "line-height: 30px;font-weight:bold; margin-bottom:10px;"
       let a = prompt("enter the id number from 1-10 to know their basic details")
  
    newData.innerHTML = `<p id="para">${"Name: "+ data[a-1].name}</br>
                                 ${ "E-mail: "+ data[a-1].email}</br>
                                ${ "City: "+ data[a-1].address.city}</br>
                                ${ "Website: "+ data[a-1].website}</br>
                               
                               
<button id="button">Updated Data</button>

 `;
 button.style ="color:white;margin-top:30px;margin-left:30px; background-color:black;"
 
    });
}

