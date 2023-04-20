function foo() {
    return
    {
      message: "Hello"
    };
  }
  console.log(foo());

//Prints undefined
//as return statement followed by block creation (which is ignored in runtime).