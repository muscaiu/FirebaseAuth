(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB67dRWntq35QqS-New6cd7fx7qpzIKI48",
    authDomain: "fir-auth-2688f.firebaseapp.com",
    databaseURL: "https://fir-auth-2688f.firebaseio.com",
    storageBucket: "fir-auth-2688f.appspot.com",
    messagingSenderId: "609164363796"
  };
  firebase.initializeApp(config);


    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogOut = document.getElementById('btnLogout');

    //Login
    btnLogin.addEventListener('click', e =>{
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        //console.log('logged in as: ' + email)
        //alert("logged")            
    })
    //SignUp
    btnSignUp.addEventListener('click', e => {
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //console.log(email)       
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            //.then(user => console.log(user)) //use instead  firebase.auth().onAuthStateChange.....
            .catch(e => console.log(e.message));
    })
    //Logout
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut()
    })
    
    
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log('auth trigger')
        if(firebaseUser){
            console.log('registred and logged as: ' + email)
            btnLogOut.classList.remove('hide')
        }
        else{
            console.log('not logged')
            btnLogOut.classList.add('hide')
        }
    })

}())