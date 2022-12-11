const fs=require("fs");

//create function to generte a random number 9414 with 10 digit 
let phonenum=()=>{
    let numbers=[]; //empty array
    for(let i=1;i<100;i++){
        let number='9414';
        //generating random number
        let randomNumber=Math.floor(Math.random()*1000000);
        //concat number with random number to get 10 digit num
        number=number+randomNumber;
        //check if length is 10 or not
        if(number.length===10){
            numbers.push(number);   //pushing that number in numbers array
        }

    }
    storeData(`phone.txt`,`Mobile Number: ${numbers}`);
}


//storing the data to a text file and export that file
let storeData=(filename,data)=>{
    data= `${data}\n`;
    fs.appendFile(filename,data, 'utf-8',(err)=>{
        if(err) throw err;
        console.log("Data is stored successfuly");
    })
}

module.exports={
    phonenum,
}