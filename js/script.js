// hiding links
const loggedOutLinks= document.querySelectorAll(".logged-out");
const loggedInLinks= document.querySelectorAll(".logged-in");
const acountDetails=document.querySelector(".account-details");
const setupUI=(user)=>{
  if(user){

    // account information to display on Account
    const html=`
    
    <div orange>Logged in as ${user.email}</div>
    `
    acountDetails.innerHTML=html;
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display ='block');
    loggedOutLinks.forEach(item => item.style.display ='none');
  }else{
    // hide accounts info
    acountDetails.innerHTML=" ";
    // toggle ui elements
    loggedInLinks.forEach(item => item.style.display ='none');
    loggedOutLinks.forEach(item => item.style.display ='block');
  }
};
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });
// output the data to user
  const guideList=document.querySelector(".guides");
  // set guides for marathon
  const setupGuides=(data)=>{
     
    if(data.length){

      let html="";
      data.forEach(doc => {
        const guide=doc.data();
        // display
        const li=`
        <li>
        <div class="collapsible-header orange lighten-4">${guide.title}</div>
          <div class="collapsible-body white"><span>${guide.title}</span></div>
          <div class="collapsible-body white"><span>${guide.content}</span></div>
        </li>     
        
        `;
        html +=li
      });
      guideList.innerHTML=html;
    }else{
      guideList.innerHTML=`<h5 class="center-align">Login to access Marathon Tips</h5>`
    }
  }
