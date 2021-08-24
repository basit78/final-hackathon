let adddish = () => {
  var item = document.getElementById('itemname').value;
  var price = document.getElementById('price').value;
  var category = document.getElementById('category').value;
  var foodimage = document.getElementById('foodimage').files[0];
  var deliverytype = document.getElementById('deliverytype').value;
  var storageref = firebase.storage().ref(`Restuarant Dish/${foodimage.name}`)
  var obj = {
    item,
    price,
    category,
    foodimage,
    deliverytype,
  }
    // download url

    var uploadfile = storageref.put(foodimage)
    uploadfile.on('state_changed',
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      (error) => {

      },
      () => {
        uploadfile.snapshot.ref.getDownloadURL().then((downloadURL) => {
          var qwe = downloadURL
          obj.imageurl = qwe
          // console.log(obj);
        }).then(() => {
          firebase.database().ref(`Restuarant Dish`).push(obj)




        }).catch(() => {
          console.log("error")
        })



      });
    // download url

}
let getdata=()=>{
  document.getElementById('Pending').innerHTML+="karachi"

}
getdata()
ADD()

