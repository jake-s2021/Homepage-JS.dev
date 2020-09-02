
let alerted = false;

tinymce.init({
    selector: '#email-text-edit',
    plugins: 'legacyoutput nonbreaking',
    height: '100%',
    width: '100%',
    nonbreaking_force_tab: true,
    menubar: false,
    toolbar: "undo redo | fontselect | fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify |",
    toolbar_mode: "scrolling",
    content_style: "body{font-size: 12pt; font-family: 'Times New Roman', Times, serif;}"
});



document.getElementById("email-add").addEventListener("change", function(event){

    const email = document.getElementById("email-add");
    const check = /^\S+@\S+\.\S+$/;

    if(!check.test(email.value) && email.value.length != 0){
        email.style.backgroundColor = "rgb(204, 70, 70)";
    }
    else if(email.value.length == 0){
        email.style.backgroundColor = "rgb(187, 212, 211)";
    }
    else{
        email.style.backgroundColor = "rgb(187, 212, 211)";
    }
});

document.getElementById("email-add").addEventListener("invalid", (function(){
    

    return function(e){
        e.preventDefault();
        if(!alerted){
        
        const email = document.getElementById("email-field");
        const child = document.createElement("p", );

        child.style.color = "white";
        child.textContent = "Please enter a valid email!";
        child.style.fontSize = "1.5em";
        child.style.alignSelf = "center";

        email.appendChild(child);

        alerted = true;
        }

        document.getElementById("email-add").focus();
    }

})(), true);

