document.addEventListener('DOMContentLoaded', () => {
    const counterDiv = document.getElementById('counter');
    const addButton = document.getElementById('addButton');
    const drinkButton = document.getElementById('drinkButton');
  
    // Load current beer count
    chrome.storage.sync.get('beerCount', (data) => {
      counterDiv.textContent = data.beerCount || 0;
    });
  
    // Add Beercel button click
    addButton.addEventListener('click', () => {
      chrome.storage.sync.get('beerCount', (data) => {
        const newCount = (data.beerCount || 0) + 1;
        chrome.storage.sync.set({ beerCount: newCount });
        counterDiv.textContent = newCount;
      });
    });
  
    // Drink Beercel button click
    drinkButton.addEventListener('click', () => {
      chrome.storage.sync.get('beerCount', (data) => {
        const newCount = Math.max((data.beerCount || 0) - 1, 0);
        chrome.storage.sync.set({ beerCount: newCount });
        counterDiv.textContent = newCount;
      });
    });
  });