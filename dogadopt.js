
function handleclick(url){
   window.open(url," _blank")
}

  const modal = document.getElementById("communityModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  openBtn.onclick = () => {
    modal.style.display = "block";
  }

  closeBtn.onclick = () => {
    modal.style.display = "none";
  }

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

