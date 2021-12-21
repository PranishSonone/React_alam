let users=[
    {"name":"anuj"},
    {"name":"anil"},
    {"name":"sunil"},
    {"name":"xyz"},
    {"name":"abc"},
    {"name":"bca"},
    {"name":"zxc"}
]
// map test
let resultDetails=users.map(user=>{
   user.marks=Math.random()*100;
   return user;
})
console.log(resultDetails)
//filter select candidate above 60% 
let selectedCandidate=resultDetails.filter(user=>{
   if(user.marks>60){
       return user;
   }
})
console.log(selectedCandidate)
//rdeuce create team for selected candidates 
let teamMembers=selectedCandidate.reduce((teamMembers,user)=>{
   teamMembers.push(user);
   return teamMembers;
},[]);
console.log(teamMembers)