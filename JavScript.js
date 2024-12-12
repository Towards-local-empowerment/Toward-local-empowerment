
    // Get the modal
var modal = document.getElementById('modal');

    // Get the images and bind the click event
var images = document.getElementsByClassName('thumbnail');
var modalImg = document.getElementById('modalImg');
var captionText = document.getElementById('caption');
const gallery = document.getElementById('gallery');
const Kenya = document.getElementById('firstpara');
const montkenya = document.getElementById('montkenya');

for (var i = 0; i < images.length; i++) {  //animations des images
    images[i].onclick = function() {
        modal.style.display = 'flex'; // Change to 'flex' to center the content
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

    // Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {  //gallery
    // JavaScript pour afficher les éléments
    document.getElementById("myButton").addEventListener("click", function() {
        gallery.style.display = 'block';
        gallery.style.display = 'flex';
        firstpara.style.display = 'none';
        montkenya.style.display = 'none';
        présentation.style.display = 'none';
        map.style.display = 'none';
        geo.style.display = 'none';
        Bigfives.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {  //page d'acueil
    document.getElementById('home1').addEventListener('click', function() {
        gallery.style.display = 'none';
        firstpara.style.display = 'block';
        montkenya.style.display = 'block';
        présentation.style.display = 'block';
        map.style.display = 'none';
        geo.style.display = 'none';
        Bigfives.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {  //tourism
    document.getElementById('tourisme').addEventListener('click', function() {
        gallery.style.display = 'none';
        firstpara.style.display = 'none';
        montkenya.style.display = 'none';
        présentation.style.display = 'none';
        map.style.display = 'none';
        geo.style.display = 'none';
        Bigfives.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {  //geographie
    document.getElementById('kenyamap').addEventListener('click',function() {
        gallery.style.display = 'none';
        firstpara.style.display = 'none';
        montkenya.style.display = 'none';
        présentation.style.display = 'none';
        map.style.display = 'block';
        geo.style.display = 'block';
        Bigfives.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {  //carte
    var map = L.map('map').setView([-1.2921, 36.8219], 10); // Coordonnées pour Nairobi, Kenya

    // Utiliser une source de tuiles gratuite comme OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 25,
        minZoom: 5
    }).addTo(map);

    // Ajouter un marqueur à Nairobi
    L.marker([-1.2921, 36.8219]).addTo(map)
        .bindPopup('Nairobi')
        .openPopup();
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 100,
            minZoom: 5,
            useCache: true,  // Utiliser le cache
            crossOrigin: true // Éviter les problèmes de CORS
        }).addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
            minZoom: 5,
            errorTileUrl: 'https://via.placeholder.com/256?text=Tile+Not+Found'
        }).addTo(map);
        
});

document.addEventListener("DOMContentLoaded", function() {  //tilesproblème
    var element = document.getElementById("map");
    element.style.display = "block"; 
    setTimeout(function() {
        element.style.display = "none"; 
        element.style.width = '700px'
    }, 1); 
});
