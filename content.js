document.documentElement.classList.add("darkmode");

(() => {
  const STORAGE_KEY = "darkModeEnabled";

  const setDarkMode = (enabled) => {
    if (enabled) {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.remove("darkmode");
    }
  };

  chrome.storage.sync.get({ [STORAGE_KEY]: true }, (result) => {
    setDarkMode(Boolean(result[STORAGE_KEY]));
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes[STORAGE_KEY]) {
      setDarkMode(Boolean(changes[STORAGE_KEY].newValue));
    }
  });
})();
