// Typing effect for hero text
document.addEventListener('DOMContentLoaded', function() {
    // Get the elements that will have the typing effect
    const homePage = document.getElementById('home-page');
    const helloTextElement = document.querySelector('.hero-content h1 span[data-i18n="hero_hello"]');
    const nameElement = document.querySelector('.hero-content h1 .highlight');
    if (!homePage || !helloTextElement || !nameElement) return;
    
    // Store original text content for both languages
    const originalTexts = {
        en: {
            hello: "Hello, I'm Violet"
        },
        zh: {
            hello: "你好，我是Violet"
        }
    };
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Runtime state for this page load only (deliberately not persisted)
    let typingInterval = null;  // the typing run in progress, if any
    let startTimeout = null;    // the delayed first run, while it is still waiting
    let hasTyped = false;       // the heading is typed out once per page load
    let homeWasActive = homePage.classList.contains('active');
    
    // Split the text at the name part
    function splitText(text) {
        if (text.includes("Violet")) {
            const parts = text.split("Violet");
            parts[1] = "Violet";
            return parts;
        }
        return [text, ""];
    }
    
    // Stop the run in progress, and a first run that has not started yet
    function cancelTyping() {
        if (typingInterval !== null) clearInterval(typingInterval);
        typingInterval = null;
        if (startTimeout !== null) clearTimeout(startTimeout);
        startTimeout = null;
    }
    
    // Show the finished heading at once (the state a typing run ends in)
    function showFullText(text) {
        cancelTyping();
        const parts = splitText(text);
        helloTextElement.textContent = parts[0].trim();
        nameElement.textContent = parts[1];
    }
    
    // Function to create typing effect
    function typeText(text, speed) {
        // A new run always replaces the previous one
        cancelTyping();
        
        // Clear both elements first
        helloTextElement.textContent = '';
        nameElement.textContent = '';
        
        const parts = splitText(text);
        let fullText = parts[0] + parts[1];
        let currentPosition = 0;
        
        typingInterval = setInterval(function() {
            if (currentPosition < fullText.length) {
                // Determine which element to update
                if (currentPosition < parts[0].length) {
                    // Add to the hello element
                    helloTextElement.textContent += fullText.charAt(currentPosition);
                } else {
                    // First character of name - clear the hello element of any trailing space
                    if (currentPosition === parts[0].length) {
                        helloTextElement.textContent = parts[0].trim();
                    }
                    // Add to the name element
                    nameElement.textContent += fullText.charAt(currentPosition);
                }
                currentPosition++;
            } else {
                cancelTyping();
            }
        }, speed);
    }
    
    // Show the heading in the current language: typed out the first time,
    // in full on every later call and whenever reduced motion is requested
    function showHeading() {
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const fullText = (originalTexts[currentLang] || originalTexts.en).hello;
        
        if (hasTyped || reducedMotion.matches) {
            hasTyped = true;
            showFullText(fullText);
            return;
        }
        
        hasTyped = true;
        // Type the full text with slower speed (150ms between characters)
        typeText(fullText, 150);
    }
    
    // Listen for page navigation: renderPage() in pixel-script.js owns the 'active' class,
    // so watch that state (covers nav links, footer links, buttons and back/forward alike)
    new MutationObserver(function() {
        const homeIsActive = homePage.classList.contains('active');
        if (homeIsActive && !homeWasActive) {
            showHeading();
        }
        homeWasActive = homeIsActive;
    }).observe(homePage, { attributes: true, attributeFilter: ['class'] });
    
    // Listen for language change (dispatched by updateLanguage() in pixel-script.js).
    // Before the first run there is nothing to redo: that run reads the language when it starts
    document.addEventListener('languageChanged', function() {
        if (hasTyped) {
            showHeading();
        }
    });
    
    // Start typing animation on initial load if on home page
    if (homeWasActive) {
        if (reducedMotion.matches) {
            showHeading();
        } else {
            // Start with a slight delay to ensure everything is loaded
            startTimeout = setTimeout(function() {
                startTimeout = null;
                if (homePage.classList.contains('active')) {
                    showHeading();
                }
            }, 500);
        }
    }
});
