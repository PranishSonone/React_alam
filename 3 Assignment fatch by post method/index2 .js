function users(){
    const URL='https://jsonplaceholder.typicode.com/users';
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
            <th>Sr no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
             </tr>`;
        
        // Loop to access all rows 
        for (let r of data) {
            tab += `<tr>
            <td>${r.id}</td> 
        <td>${r.name} </td>
        <td>${r.email}</td>         
        <td>${r.phone}</td>         
        <td>${r.website}</td>         
    </tr>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("result").innerHTML = tab;
    }