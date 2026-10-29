function fn_ValForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umurStr = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;
    
    var sMsg = "";
    
    if (nama == "") {
        sMsg += "\n* Nama tidak boleh kosong";
    }
    if (email == "") {
        sMsg += "\n* Email tidak boleh kosong";
    } else {
        var emailPattern = /^[a-z0-9][a-z0-9\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
        if (!emailPattern.test(email)) {
            sMsg += "\n* Format email salah (harus huruf kecil)";
        }
    }
    
    if (umurStr == "") {
        sMsg += "\n* Umur tidak boleh kosong";
    } else if (isNaN(umurStr)) {
        sMsg += "\n* Umur harus berupa angka";
    } else {
        var umur = parseInt(umurStr);
        if (umur < 15 || umur > 60) {
            sMsg += "\n* Umur harus di antara 15 sampai 60 tahun";
        }
    }
    
    if (kategori == "") {
        sMsg += "\n* Jenis acara harus dipilih";
    }
    
    if (sMsg != "") {
        alert("Peringatan:" + sMsg);
        return false;
    } else {
        var umur = parseInt(umurStr);
        var info = "";
        if (umur <= 25) {
            info = "Peserta Mahasiswa";
        } else {
            info = "Peserta Umum";
        }
        
        var pilihan = "";
        switch (kategori) {
            case "W":
                pilihan = "Workshop";
                break;
            case "S":
                pilihan = "Seminar";
                break;
            case "L":
                pilihan = "Lomba Coding";
                break;
        }
        
        alert("Terima kasih " + nama + "! Anda terdaftar di acara " + pilihan + " (" + info + ").");
        return true;
    }
}