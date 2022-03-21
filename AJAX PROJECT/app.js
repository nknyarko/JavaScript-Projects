document.getElementById('button').addEventListener('click',loadData());

function loadData(){
    // create an XHR object
    const xhr= new XMLHttpRequest();

    //OPEN
    xhr.open('GET','data.txt',true);

    // console.log('READYSTATE',xhr.readyState);

    //optional -used for spinnerss/loaders
    xhr.onprogress=function(){
        console.log('READYSTATE',xhr.readyState);
    }


    // xhr.onload=function(){
    //     if(this.status===200){
    //         console.log(this.responseText);
    //     }
    // }
  
    xhr.onload=function(){
        console.log('READYSTATE',xhr.readyState);
        if(this.status===200 && this.readyState===4){
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror=function(){
        console.log("request error");
    }

    xhr.send(); 

    // ready state values
    // 0- request not initialized 
    // 1- server connection etablished
    // 2= request recieved
    // 3= processing request
    // 4= request finished and response is ready
}