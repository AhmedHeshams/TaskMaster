const initTrack = async () => {
    while(typeof window.onAuthStateChanged !== "function"){
        await new Promise(r => setTimeout(r, 500));
    }
    const unsubAuth = onAuthStateChanged(window.auth, (user) => {
        setupUI(user);
        if (user){
            
            console.log('user logged in', user);
            // queries
            //const q = query(colRef, where("author", "==", "patrick rothfuss"), orderBy('createdAt'))

            // realtime collection data
            const unsubCol = onSnapshot(colRef, (snapshot) => {
            window.tasks = [];
            snapshot.docs.forEach(doc => {
                tasks.push({ ...doc.data(), id: doc.id })
            })
            setupTasks(tasks);
            }, (err) => console.log(err.message) )
        

        }else{
            console.log('user logged out');
            setupTasks([]);
        }
        
    }, (err) => console.log(err.message) )
    
    
    
  };

initTrack();




const signupForm = document.querySelector("#signup-form") ;

async function setUserData(cred) {
    const bioValue = document.querySelector('#signup-bio').value;
    await setDoc(doc(db, 'users', cred.user.uid), {
      bio: bioValue
    });
}
signupForm.addEventListener( "submit",(e)=>{
    e.preventDefault();
    const email = document.querySelector("#signup-email");
    const pass = document.querySelector("#signup-password");
    createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then(cred => {
                  
                    return setUserData(cred);
    })
    .then(()=>{
                    modal = document.querySelector("#modal-signup");
                    M.Modal.getInstance(modal).close();
                    signupForm.reset();
        
    })
    .catch(err => {
                    console.log(err.message);
    })
    }
)
const logout=document.querySelector("#logout");
logout.addEventListener("click",(e)=>{
    e.preventDefault();
    signOut(auth)
    .catch(err => {
      console.log(err.message)
    })
})


const loginForm = document.querySelector("#login-form") ;
loginForm.addEventListener( "submit",(e)=>{
    e.preventDefault();
    const email = document.querySelector("#login-email");
    const pass = document.querySelector("#login-password");
    signInWithEmailAndPassword(auth, email.value, pass.value)
    .then(cred => {
      console.log('user logged in:', cred.user);
      modal = document.querySelector("#modal-login");
        M.Modal.getInstance(modal).close();
      loginForm.reset();
    })
    .catch(err => {
      console.log(err.message)
    })
    }
)



createForm = document.querySelector("#create-form")
createForm.addEventListener( "submit",(e)=>{
    e.preventDefault();
    const title = document.querySelector("#title");
    const content = document.querySelector("#content");
    addDoc(colRef, {
        title: title.value,
        content: content.value,
        createdAt: serverTimestamp()
      })
      .then(() => {
        modal = document.querySelector("#modal-create");
        M.Modal.getInstance(modal).close();
        createForm.reset();
      })
    
    }
)