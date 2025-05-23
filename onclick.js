// DOM--> Document Object Model--> is a tree like structure in html
// Tree like structure in  which javascript dynamatically can change on the html css

function DOM(){
    //console.log("okk")
    //alert ("okk")
    document.write("welcome to DOM")  // document.write() is used to display on screen but remove the html css from documents
}
//DOM()-->we will call it in button by onclick(eventlistner)

// (1)-->document.write()-->it is used to display on screen but remove the html css from documents.
// (2)-->document.getElementById("id-name")--> only used for specific id
// (3)-->document.getElemengtByClassName("class-name")-->only used for specific class
// (4)-->document.querySelector("#-for id", ". for class")--> it can be used for id as well as class name.

let callme=()=>{
    let mytag=document.querySelector("#text")
    let mytag2=document.querySelector("#text2")
    //mytag.textContent=""   // only change in contect not in html or css
    mytag.innerHTML="<p>vaishali gupta</p>"  // used to chnage inner html
    mytag2.innerHTML="<p>From Lnct</p>"

    mytag.style.backgroundColor="Red"
    mytag.style.color="yellow"
}
