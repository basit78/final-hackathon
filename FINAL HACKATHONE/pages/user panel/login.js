let Signup = ()=>{
    var first=document.getElementById('firstname').value;
    var lastname=document.getElementById('lastName').value;
    var Email=document.getElementById('Email').value;
    var Password=document.getElementById('Password').value;

      firebase.auth().createUserWithEmailAndPassword(Email,Password)
      .then((res) => {
        console.log(res)
        var Signup={
          first,
          lastname,
          Email,
          Password,

        }
        firebase.database().ref(`user`).push(Signup).then(()=>{
          window.location.href="./signin.html"
        })
        
      })
      .catch((err) => {
        console.log(err)

      });
    }





let Signin = ()=>{
    var Signinuser = document.getElementById('email').value;
    var Signinpassword=document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(Signinuser, Signinpassword)
  .then((res) => {
    firebase.database().ref(`users/${res.user.uid}`).on('value',(data)=>{console.log(data.val())})
    document.getElementById('email').style.border = "none"
    var A=res.user.email
    console.log("user==>",A)
    window.location.href="../User/index.html"
  })
  .catch((error) => {
    document.getElementById('email').style.border = "2px solid red"
    var errorMessage = error.message;
    console.log(errorMessage)
    
  });
  
}





