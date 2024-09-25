// ini js

function askUserName() {
    let userName = window.prompt("Masukkan Nama Anda:", "");
    if (userName != null && userName.trim() !== "") {
        document.getElementById("User-name").innerHTML = userName;
    }
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("img-slideshow");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

setInterval(function() {
    plusDivs(1);
}, 5000);



function validateform() {
    var fullName = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (fullName == "") {
        alert("Nama harus diisi");
        return false;
    }

    // Validasi Tanggal Lahir
    if (birthDate == "") {
        alert("Tanggal lahir harus diisi");
        return false;
    }

    // Validasi Jenis Kelamin
    if (!document.getElementById("male").checked && !document.getElementById("female").checked) {
        alert("Silakan pilih jenis kelamin");
        return false;
    }

    // Validasi Pesan
    if (messages == "") {
        alert("Pesan tidak boleh kosong");
        return false;
    }

    // Jika semua validasi sukses, tampilkan data yang di-submit di output
    document.getElementById("sender-full-name").innerHTML = fullName;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("sender-messages").innerHTML = messages;

    // Tampilkan waktu dan tanggal terkini
    var now = new Date();
    var currentDateTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    document.getElementById("current-time").innerHTML = currentDateTime;

    // Return false untuk menghentikan pengiriman form ke server
    return false;
}

