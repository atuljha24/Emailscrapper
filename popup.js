function extractEmails() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "extractEmails"}, function(response) {
        document.getElementById("output").innerText = response.emails.join(", ");
      });
    });
  }
  
  document.getElementById("extractButton").addEventListener("click", extractEmails);
  