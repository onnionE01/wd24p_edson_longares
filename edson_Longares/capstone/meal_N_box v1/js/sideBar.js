const body =document.querySelector("body"),
      sidebar=body.querySelector(".sideBar"),
      toggle=body.querySelector(".toggle"),
      searchBtn=body.querySelector(".search-box"),
      modeSwitch=body.querySelector(".toggle-switch"),
      modeText=body.querySelector(".mood-text");

const loginSub = document.getElementById("subMenu");

      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
        loginSub.style.display = 'none';
      })

      modeSwitch.addEventListener("click", ()=>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText="Light Mode"
        } else{
            modeText.innerText="Dark Mode"
        }

      })

loginSubMenu();

function loginSubMenu(){

  if (loginSub.style.display === 'none'){
    loginSub.style.display = 'block';
    sidebar.classList.toggle("close");
  } else {
    loginSub.style.display = 'none';
  }

  if (loginSub.style.display === 'block'){
    sidebar.classList.toggle("close");
  }

}