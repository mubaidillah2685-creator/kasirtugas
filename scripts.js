let totalBelanja = 0;

function tambahBelanja() {
    const menu = document.getElementById("menuBakso");
    const jumlah = parseInt(document.getElementById("jumlahBeli").value);
    const harga = parseInt(menu.value);
    const namaMenu = menu.options[menu.selectedIndex].text.split(" - ")[0];

    if (jumlah <= 0 || isNaN(jumlah)) {
        alert("Jumlah beli tidak valid");
        return;
    }

    const subtotal = harga * jumlah;
    totalBelanja += subtotal;

    const baris = document.createElement("tr");
    baris.innerHTML = `
        <td>${namaMenu}</td>
        <td>${jumlah}</td>
        <td>Rp ${subtotal}</td>
        <td>
            <button onclick="hapusBelanja(this, ${subtotal})">Hapus</button>
        </td>
    `;

    document.getElementById("daftarBelanja").appendChild(baris);
    document.getElementById("totalBelanja").innerText = totalBelanja;
}

function hapusBelanja(tombol, subtotal) {
    tombol.parentElement.parentElement.remove();
    totalBelanja -= subtotal;
    document.getElementById("totalBelanja").innerText = totalBelanja;
}

function hitungKembalian() {
    const uang = parseInt(document.getElementById("uangBayar").value);

    if (isNaN(uang) || uang < totalBelanja) {
        alert("Uang bayar tidak mencukupi");
        return;
    }

    const kembalian = uang - totalBelanja;
    document.getElementById("uangKembalian").innerText = kembalian;
}

function resetTransaksi() {
    document.getElementById("daftarBelanja").innerHTML = "";
    document.getElementById("totalBelanja").innerText = 0;
    document.getElementById("uangBayar").value = "";
    document.getElementById("uangKembalian").innerText = 0;
    totalBelanja = 0;
}
