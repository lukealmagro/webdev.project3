//question button alert
document.addEventListener("DOMContentLoaded", function () {
    var questionsButton = document.getElementById("questionbutton");
    if (questionsButton) {
      questionsButton.addEventListener("click", function () {
        alert("If you have questions, contact me at: lalmagro@hawk.illinoistech.edu");
      });
    }
});

function initMap() {
  const myLatLng = { lat: 41.833, lng: -87.628 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: { lat: 41.833, lng: -87.628 },
    map,
    title: "Paul V. Galvin Library",
    animation: google.maps.Animation.BOUNCE,
    icon: {
      url: "images/galvinlibrary.png",
      scaledSize: new google.maps.Size(50, 50)
    }
  });

  new google.maps.Marker({
    position: { lat: 41.832, lng: -87.627 },
    map,
    title: "IIT Tower",
    animation: google.maps.Animation.BOUNCE,
    icon: {
      url: "images/iittower_overall_mg.jpg",
      scaledSize: new google.maps.Size(50, 50)
    }
  });
}