// Sample hashtag templates
const hashtagTemplates = [
    "#[topic] #trending #viral",
    "#[topic]life #awesome #trending",
    "#discover[topic] #amazing #viral",
    "#[topic]lover #instagood #trending",
    "#[topic]world #viral #mustwatch"
];

// Sample title templates
const titleTemplates = [
    "🔥 MIND-BLOWING [topic] That Will Change Your Life Forever!",
    "The SECRET [topic] Technique Nobody Talks About! 😱",
    "I Tried [topic] For 30 Days - Here's What Happened! 🚀",
    "You Won't Believe What This [topic] Can Do! 💫",
    "The Ultimate Guide to [topic] - REVEALED! ⭐"
];

// Add more title templates
titleTemplates.push(
    "WARNING: This [topic] Hack Is Taking Over The Internet! 🌐",
    "How I Mastered [topic] in Just 7 Days (NOT CLICKBAIT!) 💯",
    "Top 10 [topic] Secrets The Pros Don't Want You To Know! 🏆",
    "This [topic] Trick Will Blow Your Mind! 🤯",
    "[topic] Challenge Gone Wrong! (EMOTIONAL) 😱"
);

// Add more hashtag templates
hashtagTemplates.push(
    "#best[topic] #viral #trending2024",
    "#[topic]tips #viralvideo #trending",
    "#[topic]tutorial #howto #learn",
    "#[topic]secrets #mindblowing #awesome"
);

function generateContent(type) {
    const userInput = document.getElementById('userInput').value.trim();
    if (!userInput) {
        alert('Please enter a topic or keywords!');
        return;
    }

    showLoading(true);
    
    setTimeout(() => {
        if (type === 'hashtags') {
            generateHashtags(userInput);
        } else {
            generateTitle(userInput);
        }
        showLoading(false);
    }, 1000);
}

function generateHashtags(topic) {
    const hashtags = [];
    const numHashtags = 3; // Generate 3 random hashtag combinations
    
    for (let i = 0; i < numHashtags; i++) {
        const template = hashtagTemplates[Math.floor(Math.random() * hashtagTemplates.length)];
        hashtags.push(template.replace('[topic]', topic.toLowerCase().replace(/\s+/g, '')));
    }

    displayResults('hashtagsResult', hashtags.join(' '));
}

function generateTitle(topic) {
    const template = titleTemplates[Math.floor(Math.random() * titleTemplates.length)];
    const title = template.replace('[topic]', topic);
    
    displayResults('titleResult', title);
}

function showLoading(show) {
    const loader = document.getElementById('loadingIndicator');
    loader.style.display = show ? 'block' : 'none';
}

// Add copy function
async function copyContent(elementId) {
    const content = document.querySelector(`#${elementId} div:last-child`).textContent;
    try {
        await navigator.clipboard.writeText(content);
        
        // Show copy feedback
        const button = document.querySelector(`#${elementId} button`);
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('bg-green-100', 'text-green-600');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-100', 'text-green-600');
            if (elementId === 'hashtagsResult') {
                button.classList.add('bg-purple-100', 'text-purple-600');
            } else {
                button.classList.add('bg-pink-100', 'text-pink-600');
            }
        }, 2000);
    } catch (err) {
        alert('Failed to copy text');
    }
}

// Add history feature
let generationHistory = [];

function saveToHistory(type, input, output) {
    generationHistory.unshift({
        type,
        input,
        output,
        timestamp: new Date().toLocaleString()
    });
    
    // Keep only last 10 items
    if (generationHistory.length > 10) {
        generationHistory.pop();
    }
    
    // Save to localStorage
    localStorage.setItem('generationHistory', JSON.stringify(generationHistory));
}

// Modify displayResults function
function displayResults(elementId, content) {
    const element = document.getElementById(elementId);
    element.style.display = 'block';
    element.querySelector('div:last-child').textContent = content;
    
    // Save to history
    const type = elementId === 'hashtagsResult' ? 'hashtags' : 'title';
    const input = document.getElementById('userInput').value;
    saveToHistory(type, input, content);
}

// Load history on page load
window.addEventListener('load', () => {
    const savedHistory = localStorage.getItem('generationHistory');
    if (savedHistory) {
        generationHistory = JSON.parse(savedHistory);
    }
}); 