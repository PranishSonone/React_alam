function users(){
    const URL='https://jsonplaceholder.typicode.com/posts';
    const response=fetch(URL)
    
    .then(res=>res.json())
    .then(res=>{
        show(res);
        console.log(res);
    })
    .catch(err=>{
        console.log(err)
    })
    if (response) {
        hideloader();
    }
    
    }
    function hideloader() {
        document.getElementById('loading').style.display = 'none';
    }
    
    
    function show(data) {
        let tab = 
            `<tr>
            <th>Sr.no</th>
              <th>Title</th>
              <th>Body</th>
              
             </tr>`;
        
        // Loop to access all rows 
        for (let r of data) {
            tab += `<tr> 
            <td>${r.id}</td>
        <td>${r.title} </td>
        <td>${r.body}</td>         
    </tr>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("result").innerHTML = tab;
        
    }