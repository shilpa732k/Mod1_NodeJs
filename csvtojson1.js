//require the csvtojson converter class 
var Converter = require("csvtojson").Converter;
// create a new converter object
var converter = new Converter({})
converter.fromFile("customer-data.csv",function(error,result){

    if(error){
        console.log("An Error Has Occured")
        console.log(error)
    } 
    // create a variable called json and store
    // the result of the conversion
    var json = result
    console.log(json)
    console.log('done')
});