
window.initMap = function () {
    // PC용 매장 맵
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.5400456, lng: 126.9921017 },
        zoom: 10,
    });

    const malls = [
        { label: "L", name: "롯데월드몰 (4월말 오픈 예정)", lat: 37.5125585, lng: 127.1025353 },
    ];
    // const bounds = new google.maps.LatLngBounds();
    const infowindow = new google.maps.InfoWindow();

    malls.forEach(({ label, name, lat, lng }) => {
        let marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map,
        });
        // bounds.extend(marker.position);

        marker.addListener("click", () => {
            map.panTo(marker.position);
            infowindow.setContent(name);
            infowindow.open({
                anchor: marker,
                map,
            });
        });

        let storeMap1 = document.getElementById("storeMap1");
        storeMap1.addEventListener("click", changeMap1);

        // 매장 1: 롯데월드몰
        function changeMap1() {
            marker.position = {lat: 37.5125585, lng: 127.1025353};
            map.panTo(marker.position);
            map.setZoom(16);
        }
    });
    // map.fitBounds(bounds);


    // MO용 매장 맵
    // 매장 1: 롯데월드몰 (MO)
    const mapMo1 = new google.maps.Map(document.getElementById("mapMo1"), {
        center: { lat: 37.5125585, lng: 127.1025353},
        zoom: 16,
    });
    const markerMo1 = new google.maps.Marker({position: mapMo1.center, map: mapMo1})
};
