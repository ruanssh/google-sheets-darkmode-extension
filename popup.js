const STORAGE_KEY = "darkModeEnabled";
const toggleBtn = document.getElementById("toggleBtn");

const setButtonLabel = (enabled) => {
  toggleBtn.textContent = enabled
    ? "Desativar modo escuro"
    : "Ativar modo escuro";
};

chrome.storage.sync.get({ [STORAGE_KEY]: true }, (result) => {
  setButtonLabel(Boolean(result[STORAGE_KEY]));
});

toggleBtn.addEventListener("click", () => {
  chrome.storage.sync.get({ [STORAGE_KEY]: true }, (result) => {
    const nextValue = !Boolean(result[STORAGE_KEY]);
    chrome.storage.sync.set({ [STORAGE_KEY]: nextValue }, () => {
      setButtonLabel(nextValue);
    });
  });
});
