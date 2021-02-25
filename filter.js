var locations = document.querySelectorAll('#entity-list-map-locations > table > tbody > tr > td');

for (var vaxlocation of locations) {
    var availCheck = vaxlocation.getElementsByTagName('p')[0].innerHTML;
    var locationRow = vaxlocation.parentElement;

    if (availCheck === 'No available booking slots at this location') {
        locationRow.style.display = 'none';
    }
}

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.message == "backcolor") {
        alert("yay");
        chrome.tabs.executeScript({
            code: 'document.body.style.backgroundColor="orange"'
          });
    }
  });