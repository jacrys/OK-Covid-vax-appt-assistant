$(document).ready(function() {
    if ($('#entity-list-map-distance').val != 400) {
        setTimeout(function () {$('#entity-list-map-distance').val('400');},500);
        setTimeout(function () {$('#entity-list-map-search').click();},8000);

        setTimeout(filter,20000);
    };

    function filter() {
        var locations = document.querySelectorAll('#entity-list-map-locations > table > tbody > tr > td');

        for (var vaxlocation of locations) {
            var availCheck = vaxlocation.getElementsByTagName('p')[0].innerHTML;
            var locationRow = vaxlocation.parentElement;

            if (availCheck === 'No available booking slots at this location') {
                locationRow.style.display = 'none';
            }
        };
    };
});