let Signup = ()=>{
    var Restaurant=document.getElementById('RestaurantName').value;
    var Email=document.getElementById('Email').value;
    var country =document.getElementById('country').value;
    var city=document.getElementById('city').value;
    var Password=document.getElementById('Password').value;

    var Signup={
      Restaurant,
      Email,
      country,
      city,
      Password, 
    }
    firebase.auth().createUserWithEmailAndPassword(Email,Password)
    .then((data) => {
      console.log(data)
      firebase.database().ref(`Restaurant`).push(Signup).then((res)=>{
        console.log(res)
        window.location.href="./signin.html"
      })
 
    })
    .catch((err) => {
      console.log(err)

    });
    }





let Signin = ()=>{
    var Signinuser = document.getElementById('Signinuser').value;
    var Signinpassword=document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(Signinuser, Signinpassword)
  .then((res) => {
    document.getElementById('Signinuser').style.border = "none";
    window.location.href="../resturant/index.html"
    })
  .catch((error) => {
    document.getElementById('Signinuser').style.border = "2px solid red"
    var errorMessage = error.message;
    console.log(errorMessage)
    
  });
  
}






