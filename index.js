
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const customMenu = document.getElementById('custom-menu');
    const twitterButton = document.getElementById('twitter-button');
    let timeoutId = null;
    card.addEventListener('mouseup', (event) => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length > 0) {
        clearTimeout(timeoutId); 
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
  
        const topPosition = rect.top - customMenu.offsetHeight - 20; 
        const leftPosition = rect.left ;

        customMenu.style.top = topPosition + 'px';
        customMenu.style.left = leftPosition + 'px';
        customMenu.style.display = 'block';
  
        twitterButton.addEventListener('click', () => {
          const tweetText = encodeURIComponent(selectedText);
          const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
          window.open(tweetUrl, '_blank');
          customMenu.style.display = 'none'; 
        });
      } else {
        customMenu.style.display = 'none'; 
      }
    });
  
    
    document.addEventListener('click', (event) => {
      if (!event.target.closest('#custom-menu') && !event.target.closest('.card')) {
        customMenu.style.display = 'none';
        clearTimeout(timeoutId); 
      }
    });
  
    
    document.addEventListener('selectionchange', () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length === 0) {
        customMenu.style.display = 'none';
        clearTimeout(timeoutId);
      }
    });
  });
  
