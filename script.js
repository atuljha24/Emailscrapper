chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "extractEmails") {
      var emails = extractEmails();
      sendResponse({emails: emails});
    }
  });
  
  function extractEmails() {
    var emails = [];
    var regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    var matches = document.documentElement.innerHTML.match(regex);
    if (matches) {
      for (var i = 0; i < matches.length; i++) {
        if (emails.indexOf(matches[i]) === -1) {
          emails.push(matches[i]);
        }
      }
    }
    return emails;
  }
  