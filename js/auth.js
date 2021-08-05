// get data from firebase to user
db.collection("marathonSports").get().then(snapshot =>{
    setupGuides(snapshot.docs);
});

// listen for auth status changes
auth.onAuthStateChanged(user=>{
    // console.log(user);
    if(user){
        // get data from firebase to user
        db.collection("marathonSports").get().then(snapshot =>{
            setupGuides(snapshot.docs);
            // show links if logged 
            setupUI(user);
        });

    }else{
        // hide icons
        setupUI();
        setupGuides([]);
    }

});
// create new Guides
const createForm=document.querySelector("#create-form");
createForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    db.collection("marathonSports").add({
       title:createForm["title"].value,
       content:createForm["content"].value
    }).then(()=>{
        // close the modal 
        const modal=document.querySelector("#modal-create");
        // use materilize for modal
        M.Modal.getInstance(modal).close();
        createForm.reset();
    });
});


// sign up
const signupForm=document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    // get user info
    var email=signupForm["signup-email"].value;
    var password=signupForm["signup-password"].value;
// confirming inputs entered
    console.log(email, password);


    // sign up the user into firebase using the auth variable declared in index.html
    auth.createUserWithEmailAndPassword(email, password).then(cred=>{
        console.log(cred.user);

        // now we want to grap the modal and close it
        const modal=document.querySelector("#modal-signup");
        alert("Proceed to Login Account successfully Created");
        // use materilize for modal
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }).catch(err=>{
        alert("The user of tha email address exist");
    });

});


// logout  the user
const logout=document.querySelector("#logout");
logout.addEventListener("click", (e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        confirm("About to Log out ");
    });
});

// login after success registration

const loginForm=document.querySelector("#login-form");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    // get user cred used to register
    const email=loginForm["login-email"].value;
    const password=loginForm["login-password"].value;

    // get details from firebase
    auth.signInWithEmailAndPassword(email, password).then(cred=>{
        // console.log(cred.user);
        // alert("successifully logged in")
        // close the login modal and reset the form
        const modal=document.querySelector("#modal-login");
        // use materilize for modal
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    }).catch(err=>{
        alert("Email or Password Mismatch!!!! Retry again later");
    })
})