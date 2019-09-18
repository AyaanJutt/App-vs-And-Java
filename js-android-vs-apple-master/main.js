'use strict';

document.getElementById('android-btn').addEventListener('click', android);
document.getElementById('apple-btn').addEventListener('click', apple)

function android(){
    console.log('android wins')
    
    document.getElementById("And-vs-App").src="images/android-logo.jpg";
    document.getElementById("explore").innerHTML="Android Home"
    document.getElementById("explore").style.backgroundColor="#a4c93b"
    document.getElementById("explore").href="https://www.android.com/"
    document.getElementById("body").style.backgroundColor="#a4c93b"
}

function apple(){
    console.log('apple wins')

    document.getElementById("And-vs-App").src="images/apple-logo.jpg"
    document.getElementById("explore").innerHTML="Apple Home"
    document.getElementById('explore').style.backgroundColor="#b6bcca"
    document.getElementById("explore").href='https://www.apple.com/'
    document.getElementById("body").style.backgroundColor="#b6bcca"

}