var showModalButton = document.getElementById('show-modal');
var closeModalButton = document.getElementById('close-modal');
var modalLightbox = document.getElementById('modal-lightbox');
var modal = document.getElementById('modal');
var modalHeader = document.getElementById('modal-header');

showModalButton.addEventListener('click', showModal);
closeModalButton.addEventListener('click', closeModal);


function closeModal(e){
   closeModalAnimate();
}

function showModal(e){
   showModalAnimate();
}

window.onclick = function(event) {
  if (event.target == modalLightbox) {
      closeModal();
  }
}

function closeModalAnimate(){
      modalLightbox.classList.remove('appear');
      modal.classList.remove('appear');
      modalLightbox.classList.add('disappear');
      modal.classList.add('disappear');
      setTimeout(function(){
         modal.style.display = "none";
         modalLightbox.style.display = "none";
      },500);
}

function showModalAnimate(){
   modalLightbox.classList.remove('disappear');
   modal.classList.remove('disappear');
   modalLightbox.classList.add('appear');
   modal.classList.add('appear');
   modal.style.display = "block";
   modalLightbox.style.display = "block";
}
