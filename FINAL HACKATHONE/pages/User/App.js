function get(){
  firebase.database().ref("Restuarant Dish").on("child_added",function(data){
      a=data.val()
  console.log(a)
  document.getElementById("get").innerHTML+=
  `


  <div class="card" style="width: 100%; background-color: #C8792C;color: white;">
    <div style="display: flex;">
        <img src="${a.imageurl}" class="card-img-top" alt="..." style="width: 200px;">
        <div class="ml-3">
            <p>Category:    <b>${a.category}</b></p>
            <p>Price:    <b>${a.price}</b></p>
            <p>Delivery Type :    <b>${a.deliverytype}</b></p>
            <a href="#" class="btn btn-light" >Add</a>
        </div>
  
    </div>
    <div class="card-body">
      <h5 class="card-title">${a.item}</h5>
    </div>
  </div></br>
  `
  

})

}
get()
