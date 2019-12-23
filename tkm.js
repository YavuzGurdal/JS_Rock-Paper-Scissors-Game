
let pcSayi1;

function pcSecimDeger () {
pcSayi1 = Math.random() * 3;
pcSayi1 = Math.floor( pcSayi1 ); // pcSayi1 bilgisayarin rastgele ürettiği sayi
console.log(pcSayi1); 
// bu kontrol için commentli değil

document.getElementById('pc-secim').src = liste[pcSayi1];
// bilgisayarin ürettiği sayiya göre liste arrayinde bu sayiya karsilik gelen degeri seciyor ve pc-secim id li divde gösteriyor
return pcSayi1;
}


// bununla resimlerin data değerlerini aliyorum
let tas = document.getElementById('tas');
let tasDeger = tas.getAttribute('data-tas');
console.log(tasDeger);

let kagit = document.getElementById('kagit');
let kagitDeger = kagit.getAttribute('data-kagit');
console.log(kagitDeger);

let makas = document.getElementById('makas');
let makasDeger = makas.getAttribute('data-makas');
console.log(makasDeger);


// bilgisayarin sectigi sayinin karsiligi olan resmi ekranda göstermek icin bu arrayi olusturdum
let liste=["tas.jpg","kagit.jpg","makas.jpg"];

// emojiler icin array
let listeEmoji=["smiley.jpg","sadsmiley.jpg","belirsiz1.jpg"]
// bu degiskeni emojileri emoji id li image e gondermek icin olusturdum

let yaziRenk=["#53901d","#7476e7","#b43024"]

// resimlere tiklayinca bu fonksiyonlari calistiriyor
tas.onclick = oyunSonuc;
kagit.onclick = oyunSonuc1;
makas.onclick = oyunSonuc2; 

// tas = 0
// kagit = 1
// makas = 2

// document.getElementById('sonuc').src = 'smile.png';

// document.getElementById('text').innerHTML = 'Tebrikler Bildiniz';

// document.body.style.backgroundColor = 'lightgreen';



function oyunSonuc() {
    pcSayi1 = pcSecimDeger();
    
    if ( tasDeger == 0 && pcSayi1 == 0 ) {
        document.getElementById("sonuc1").innerHTML = 'Tüh berabere kaldik... İkimizde Tas secmisiz.';
        document.getElementById('emoji').src = listeEmoji[2];
        document.getElementById("sonuc1").style.color = yaziRenk[1];
    
    } else if ( tasDeger == 0 && pcSayi1 == 1 ) {
        document.getElementById("sonuc1").innerHTML = 'Malesef kaybettin... Elimdeki Kagit ile senin Tasini Sardim.';
        document.getElementById('emoji').src = listeEmoji[1];
        document.getElementById("sonuc1").style.color = yaziRenk[2];
    
    } else if ( tasDeger == 0 && pcSayi1 == 2 ) {
        document.getElementById("sonuc1").innerHTML = 'Tebrikler Kazandin... Benim Makasimi Tasla kirdin.';
        document.getElementById('emoji').src = listeEmoji[0];
        document.getElementById("sonuc1").style.color = yaziRenk[0];
    
    }
    
    document.getElementById('oyuncu-secim').src = liste[tasDeger];
         
}



function oyunSonuc1() {
    pcSayi1 = pcSecimDeger();
    
    if ( kagitDeger == 1 && pcSayi1 == 0 ) {
        document.getElementById("sonuc1").innerHTML = 'Tebrikler Kazandin... Benim Tasimi Kagitla sardin.';
        document.getElementById('emoji').src = listeEmoji[0];
        document.getElementById("sonuc1").style.color = yaziRenk[0];
        
    } else if ( kagitDeger == 1 && pcSayi1 == 1 ) {
        document.getElementById("sonuc1").innerHTML = 'Tüh berabere kaldik... İkimizde Kagit secmisiz.';
        document.getElementById('emoji').src = listeEmoji[2];
        document.getElementById("sonuc1").style.color = yaziRenk[1];
        
    } else if ( kagitDeger == 1 && pcSayi1 == 2 ) {
        document.getElementById("sonuc1").innerHTML = 'Malesef kaybettin... Elimdeki Makas ile senin Kagidini kestim.';
        document.getElementById('emoji').src = listeEmoji[1];
        document.getElementById("sonuc1").style.color = yaziRenk[2];
               
    }  
    
    document.getElementById('oyuncu-secim').src = liste[kagitDeger];
    
}


function oyunSonuc2() {
    pcSayi1 = pcSecimDeger();
    
    if ( makasDeger == 2 && pcSayi1 == 0 ) {
        document.getElementById("sonuc1").innerHTML = 'Malesef kaybettin... Elimdeki Tas ile senin Makasini kirdim.';
        document.getElementById('emoji').src = listeEmoji[1];
        document.getElementById("sonuc1").style.color = yaziRenk[2];
        
    } else if ( makasDeger == 2 && pcSayi1 == 1 ) {
        document.getElementById("sonuc1").innerHTML = 'Tebrikler Kazandin... Benim Kagidimi Makasla kestin.';
        document.getElementById('emoji').src = listeEmoji[0];
        document.getElementById("sonuc1").style.color = yaziRenk[0];
        
    } else if ( makasDeger == 2 && pcSayi1 == 2 ) {
        document.getElementById("sonuc1").innerHTML = 'Tüh berabere kaldik... İkimizde Makas secmisiz.';
        document.getElementById('emoji').src = listeEmoji[2];
        document.getElementById("sonuc1").style.color = yaziRenk[1];
        
    }  
    
    document.getElementById('oyuncu-secim').src = liste[makasDeger];

}
