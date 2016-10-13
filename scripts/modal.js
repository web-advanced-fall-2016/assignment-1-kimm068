// function myModal(modalContent) {
//   /* Code goes here */
// }



// let modalContent = <div>
//                       <p> Hello! I am content of the modal</p>
//                       <img src="data/cat1.jpg">
//                   </div`;
// myModal(modalContent);


// let button = document.querySelector('.close-button');
// button.addEventListener('click', myModal(modal-content),false);



let modal = document.getElementById('myModal');
// let video1 = document.getElementById('video1');

//span for closing the modal
let span = document.getElementsByClassName("open")[0];

// let btn3 = document.getElementById("closeBtn");

let images = document.querySelectorAll('.image');
let videos = document.querySelectorAll('.video');




for(let i=0; i < images.length ; i++){
		images[i].addEventListener('click',function(){
			for(let j=0; j<videos.length; j++){
				videos[j].style.display="none";
			}
			// console.log( this );
			console.log("image click!", i, images[i], videos[i])
			modal.style.display = "block";
			videos[i].style.display = "block";
		});

}


// images[0].addEventListener('click',function(){
// 	modal.style.display = "block";
// });


// When the user clicks on (x), close the modal
span.addEventListener('click',function(){
 	modal.style.display = "none";
});

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// let button = document.querySelector('.close-button');
// button.addEventListener('click', myModal(modal-content),false);



// **********--------DO NOT USE ONCLICK--------**********
// btn1.onclick = function() {
//     modal.style.display = "block";
// }

