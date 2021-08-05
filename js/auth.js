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