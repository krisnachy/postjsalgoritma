// 1. a. Menentukan hari esok menggunakan if-else
let hari = prompt(`'Sekarang hari apa?'
*Huruf depan harus kapital`);

if (hari == 'Senin'){
    alert('Besok hari Selasa');
    console.log('Besok hari Selasa');
} else if (hari == 'Selasa'){
    alert('Besok hari Rabu');
    console.log('Besok hari Rabu');
} else if (hari == 'Rabu'){
    alert('Besok hari Kamis');
    console.log('Besok hari Kamis');
} else if (hari == 'Kamis'){
    alert('Besok hari Jumat');
    console.log('Besok hari Jumat');
} else if (hari == 'Jumat'){
    alert('Besok hari Sabtu');
    console.log('Besok hari Sabtu');
} else if (hari == 'Sabtu'){
    alert('Besok hari Minggu');
    console.log('Besok hari Minggu');
} else if (hari == 'Minggu'){
    alert('Besok hari Senin');
    console.log('Besok hari Senin');
} else {
    alert('Input tidak diketahui, gunakan huruf kapital pada awal kata');
    console.log('Input tidak diketahui, gunakan huruf kapital pada awal kata');
}

//1. b. Menggunakan switch case
switch (hari){
    case "Senin":
        alert('Besok hari Selasa');
        console.log('Besok hari Selasa');
        break;
    case "Selasa":
        alert('Besok hari Rabu');
        console.log('Besok hari Rabu');
        break;
    case "Rabu":
        alert('Besok hari Kamis');
        console.log('Besok hari Kamis');
        break;
    case "Kamis":
        alert('Besok hari Jumat');
        console.log('Besok hari Jumat');
        break;
    case "Jumat":
        alert('Besok hari Sabtu');
        console.log('Besok hari Sabtu');
        break;
    case "Sabtu":
        alert('Besok hari Minggu');
        console.log('Besok hari Minggu');
        break;
    case "Minggu":
        alert('Besok hari Senin');
        console.log('Besok hari Senin');
        break;
    default:
        alert('Input tidak diketahui, gunakan huruf kapital pada awal kata');
        console.log('Input tidak diketahui, gunakan huruf kapital pada awal kata');
        break;    
}

//Menampilkan deret bilangan genap
let bilangan = prompt('Masukkan Bilangan: ');
console.log('Bilangan genap dari inputan adalah: ');
for(i=0; i <= bilangan; i++) {
    if(i%2 == 0){
        console.log(i);
    };
};

//Menampilkan deret bilangan ganjil
console.log('Bilangan ganjil dari inputan adalah: ');
for(i=0; i <= bilangan; i++) {
    if(i%2 != 0){
        console.log(i);
    };
};

//Menampilkan deret bilangan prima
console.log('Bilangan prima dari inputan adalah: ');
for(i=0; i <= bilangan; i++){
    let pembagi = 0;
    for(j=1; j <= i; j++) {
        if(i%j == 0){
            pembagi++;
        };
    };
    if (pembagi == 2){
        console.log(i);
    };
};