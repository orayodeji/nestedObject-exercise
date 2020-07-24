

// #1
    var nestedData = newFunction()  var nestedData = {
        innerData: {
          order: ["first", "second", "third"],
          snacks: ["chips", "fruit", "crackers"],
          numberData: {
              primeNumbers: [2,3,5,7,11],
              fibonnaci: [1,1,2,3,5,8,13]
          },
          addSnack: function(snack){
              this.snacks.push(snack);
              return this;
          }
        }
      }
      
      
//use the loop, console.log all the numbers in the primeNumbers array
var primeArray = nestedData.innerData.numberData.primeNumbers;
for(i = 0; i < primeArray.length; i++)
{console.log(primeArray[i])};

//Using a for loop, console.log all of the even Fibonnaci numbers.
var ordinaryArray = nestedData.innerData.numberData.fibonnaci;
for(i=0;i < ordinaryArray.length; i++)
{console.log(ordinaryArray[i])};

//Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1]);

//Invoke the addSnack function and add the snack "chocolate".
console.log(nestedData.innerData.addSnack("chocolate"));

//Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

/*
The JavaScript this keyword refers to the object it belongs to. ... In a method, this refers to the owner object. Alone, this refers to the global object. In a function, this refers to the global object. */



//#2
var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
  

function newFunction() {
    return {
        innerData: {
            order: ["first", "second", "third"],
            snacks: ["chips", "fruit", "crackers"],
            numberData: {
                primeNumbers: [2, 3, 5, 7, 11],
                fibonnaci: [1, 1, 2, 3, 5, 8, 13]
            },
            addSnack: function (snack) {
                this.snacks.push(snack);
                return this;
            }
        }
    };
}

// addSpeaker function
  function addSpeaker (value){
    return nestedObject.speakers.push({key:value});
     };
     console.log(addSpeaker("tunji"));


//addLanguages function
  function addLanguages(newlanguage,value){
     return nestedObject.data.languages[newlanguage] = {Hello:value}
      };
      console.log(addLanguages("Hausa", "Sannu"));
    
      //addCountry function
  function addCountry(state,head,census)
    {return nestedObject.data.continents.europe.countries[state]={capital:head,
  population:census}
  };
  console.log(addCountry("Norway", "Oslo", 5,432,580));


  //#3 
  //function which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

  function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}

 //#4 
 //function which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray.


 function makeXOGrid(rows,amount){
  var newArr = []
  var startWithX = true
  for(var i=0; i<rows; i++){
      var newRow = []
      for(var j=0; j<amount; j++){
          if(startWithX){
              newRow.push("X")
          }
          else {
              newRow.push("O")
          }
          startWithX = !startWithX
      }
      newArr.push(newRow)
  }
  return newArr;
}