// ini js

function askUserName() {
    // Memunculkan jendela prompt untuk meminta nama pengguna
    let userName = window.prompt("Masukkan Nama Anda:", "");
    if (userName != null && userName.trim() !== "") {
        // Jika pengguna memasukkan nama, tampilkan di elemen dengan ID 'User-name'
        document.getElementById("User-name").innerText = userName;
    }
}


var slideIndex = 1;
showDivs(slideIndex);

// Function to control manual slide navigation
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Function to display the appropriate slide
function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("img-slideshow");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Auto slide every 3 seconds
setInterval(function() {
    plusDivs(1);
}, 5000); // 3000 milliseconds = 3 seconds



function validateform() {
    // Ambil nilai input dari form
    var fullName = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    // Validasi Nama
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

