let jacrys_tempFilterBtn = document.createElement("span");
let jacrys_tempBtnText = document.createElement("span");

jacrys_tempFilterBtn.className = "btn btn-primary";
jacrys_tempFilterBtn.id = "jacrys_filter-locations-btn";

jacrys_tempBtnText.innerHTML = "Filter List to Available Appts";

let jacrys_parentElement = document.getElementById("entity-list-map-options");

jacrys_tempFilterBtn.appendChild(jacrys_tempBtnText);

jacrys_parentElement.appendChild(jacrys_tempFilterBtn);

jacrys_filterBtn = document.getElementById("jacrys_filter-locations-btn");

jacrys_filterBtn.addEventListener("click", filter, false);

function filter() {
    var jacrys_locations = document.querySelectorAll('#entity-list-map-locations > table > tbody > tr > td');

    for (var jacrys_vaxlocation of jacrys_locations) {
        var jacrys_availCheck = jacrys_vaxlocation.getElementsByTagName('p')[0].innerHTML;
        var jacrys_locationRow = jacrys_vaxlocation.parentElement;

        if (jacrys_availCheck === 'No available booking slots at this location') {
            jacrys_locationRow.style.display = 'none';
        }
    };
};