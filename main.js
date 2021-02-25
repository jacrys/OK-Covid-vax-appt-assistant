var CONTEXT_MENU_CONTENTS = {
    forWindows : [
      'filter'
    ]
}

function setUpContextMenus() {
    CONTEXT_MENU_CONTENTS.forWindows.forEach(function(commandId) {
      chrome.contextMenus.create({
        title: 'Filter Vaccination Sites',
        type: 'normal',
        id: commandId,
        contexts: ['all']
      });
    });
}

chrome.runtime.onInstalled.addListener(function() {
    // When the app gets installed, set up the context menus
    setUpContextMenus();
  });

chrome.contextMenus.onClicked.addListener(function(itemData) {
    if (itemData.menuItemId == "filter") {
        chrome.tabs.executeScript({
            code: "var locations=document.querySelectorAll('#entity-list-map-locations > table > tbody > tr > td');for(var vaxlocation of locations){var availCheck=vaxlocation.getElementsByTagName('p')[0].innerHTML,locationRow=vaxlocation.parentElement;'No available booking slots at this location'===availCheck&&(locationRow.style.display='none')}"
        })
    }
});