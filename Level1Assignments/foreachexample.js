let input =  [
    { id: 51, name: 'John', age: 30 },
    { id: 13, name: 'Alice', age: 35 },
    { id: 20, name: 'Jane', age: 25 }
  ]

//sorting based on id 
 input.sort((a,b) => a.id - b.id).forEach(function (item){
    console.log(`Hi My name is ${item.name} with id ${item.id}, with age  ${item.age}`);
  });