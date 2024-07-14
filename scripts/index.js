const loggedInLinks  = document.querySelectorAll( ".logged-in");
const loggedOutLinks = document.querySelectorAll( ".logged-out");
const ulEle = document.querySelector(".guides");
const accountDetails = document.querySelector(".account-details");
async function getDocumentById(docId) {
   // Reference to the document
  const docRef = doc(db, 'users', docId);

  // Get the document
  const docSnap = await getDoc(docRef);
  return docSnap;

}



const setupUI = (user) => {
  if (user){
    //show account info
    // Call the function with the specific document ID
    userInfo = getDocumentById(user.uid).then((doc)=>{
          const html = `<div> Logged in as ${user.email} </div>
          
          <div> Bio: ${doc.data().bio} </div>`
          accountDetails.innerHTML = html;
    })
    
    
    //toggle nav UI elements
    loggedInLinks.forEach((link)=>{
          link.style.display= "block";
    })
    loggedOutLinks.forEach((link)=>{
          link.style.display= "none";
    })
  }else{
    //hide account info
    accountDetails.innerHTML = ``;

    //toggle nav UI elements
    loggedOutLinks.forEach((link)=>{

          link.style.display= "block";
    })
    loggedInLinks.forEach((link)=>{
          link.style.display= "none";
    })
  }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

//setup tasks
const setupTasks = (tasks) => {
let html = "";
tasks.forEach(i => {
  const taskLi = document.createElement("li");
  const titleDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  titleDiv.classList.add("collapsible-header", "grey", "lighten-4");
  contentDiv.classList.add("collapsible-body", "white");
  titleDiv.textContent = i.title;
  contentDiv.textContent = i.content;
  taskLi.appendChild(titleDiv);
  taskLi.appendChild(contentDiv);
  html += taskLi.outerHTML;
    
})
if (html === ""){
  html = `<h5 class="center-align">Login to view guides</h5>`
}
  ulEle.innerHTML = html;
}