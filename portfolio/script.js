function submitForm() {
    var Yourname = document.getElementById('Yourname').value;
    var Email = document.getElementById('Email').value;
    var Impression = document.getElementById('Impression').value;
    if (Yourname === '' || Email === '' || Impression === '') {
        alert('Please fill all the fields.');
    } else {
        alert('Thank you for viewing my profile.');
    }
}