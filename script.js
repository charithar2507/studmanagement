let form = document.getElementById("sms");
function display(){
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    if(name === "" || id === ""){
       documment.getElementById("error").innerHTML = "Please fill in all fields.";
        return;
    }
    document.getElementById("result").innerText = "Student Name: " + name + "\nStudent ID: " + id;
}