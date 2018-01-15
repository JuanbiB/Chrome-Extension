chrome.browserAction.onClicked.addListener(function(tab) {
  // Run the following code when the popup is opened
  document.getElementById("timeTable").innerHTML += "balls to the wall";
  console.log("AYYYY");
});
