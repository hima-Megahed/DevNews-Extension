chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.create({ url: 'https://dev.to/' });
  chrome.tabs.create({ url: 'https://dzone.com/web-development-programming-tutorials-tools-news/list' });
  chrome.tabs.create({ url: 'https://www.giftegwuenu.com/' });
  chrome.tabs.create({ url: 'https://hackernoon.com/tagged/programming' });
  chrome.tabs.create({ url: 'https://mail.google.com/mail/u/0/?tab=rm0&ogbl#inbox' });
  chrome.tabs.create({ url: 'https://outlook.live.com/mail/0/inbox' });
  chrome.tabs.create({ url: 'https://www.linkedin.com/feed/' });
});