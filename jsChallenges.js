 function challenge1(){
    if(document.getElementById ("subscribe").checked==true) {
        console.log ('this works');
        document.querySelector("#emailDiv").style.display = "initial";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    challenge2();
});

function challenge2() {
    const sameAddressCheckbox = document.getElementById('sameAddress');

    const labelForSameAddress = document.createElement('label');
    labelForSameAddress.htmlFor = 'sameAddress';
    labelForSameAddress.textContent = 'Same as above';

    const parentDiv = sameAddressCheckbox.parentNode;
    parentDiv.insertBefore(labelForSameAddress, sameAddressCheckbox);
}

function challenge3() {
    let bill = document.querySelector("#bill")
    let home = document.querySelector("#home")
    if (Element.checked){
        home.value=bill.value;
        home.disabled=true
    }

    else
        home.disabled=false
    }

document.getElementById('subscribe').addEventListener('change', function(){
    document.getElementById('emailDiv').style.display = this.checked ? "block" : "none";
});


let sameAddressCheckbox = document.getElementById('sameAddress');
    let billingAddress = document.getElementById('bill');
    let homeAddress = document.getElementById('home');

    sameAddressCheckbox.addEventListener('change', function() {
        if(this.checked) {
            homeAddress.value = billingAddress.value;
            homeAddress.setAttribute('readonly', true);
        } else {
            homeAddress.value = '';
            homeAddress.removeAttribute('readonly');
        }
    });

    billingAddress.addEventListener('input', function() {
        if(sameAddressCheckbox.checked) {
            homeAddress.value = this.value;
        }
    });


document.getElementById('ch3form').addEventListener('submit', function(event) {
    event.preventDefault();

    var standing = document.querySelector('input[name="standing"]:checked');
    var gradDate = document.querySelector('input[name="gradDate"]:checked');

        alert("Please ensure both boxes have radio buttons selected before proceeding.");
        return false;

    event.target.submit();

}, false);

/* Color of the Day: Coral */