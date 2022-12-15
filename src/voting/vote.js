
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
  
  
 let votingPerson=function(req,res){

   let votes=req.query.age
   //console.log(votes)
   let age= []
   for(let i=0;i<persons.length;i++){

   if(persons[i].age>votes){

      persons[i].votingStatus=true
      age.push(persons[i])
      
}
   }
res.send({age})
   
   
 }
 module.exports.votingPerson=votingPerson