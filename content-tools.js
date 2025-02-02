// Quick generate functions
function generateTitle() {
    const topic = document.getElementById('videoTopic').value;
    const type = document.getElementById('contentType').value;
    const style = document.getElementById('contentStyle').value;
    
    if (!topic) {
        alert('Please enter a video topic');
        return;
    }

    // Show results with animation
    showResults();
    
    // Generate title based on type and style
    const title = generateTitleByType(topic, type, style);
    
    // Display title with typing effect
    const titleElement = document.getElementById('generatedTitle');
    typeText(titleElement, title);
}

function generateDescription() {
    const topic = document.getElementById('videoTopic').value;
    const type = document.getElementById('contentType').value;
    
    if (!topic) {
        alert('Please enter a video topic');
        return;
    }

    // Show results section
    document.getElementById('resultsSection').classList.remove('hidden');
    
    // Generate description
    const description = generateDescriptionByType(topic, type);
    
    // Display description
    document.getElementById('generatedDescription').textContent = description;
}

function generateTags() {
    const topic = document.getElementById('videoTopic').value;
    const type = document.getElementById('contentType').value;
    
    if (!topic) {
        alert('Please enter a video topic');
        return;
    }

    // Show results section
    document.getElementById('resultsSection').classList.remove('hidden');
    
    // Generate tags
    const tags = generateTagsByType(topic, type);
    
    // Display tags
    const tagsContainer = document.getElementById('generatedTags');
    tagsContainer.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'px-2 py-1 bg-gray-100 text-gray-600 rounded';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
}

// Helper functions for generating content
function generateTitleByType(topic, type, style) {
    // Add your title generation logic here
    const titles = {
        howto: [
            `How to ${topic} (Complete Guide 2024)`,
            `${topic} Tutorial for Beginners`,
            `Master ${topic} in 10 Minutes!`,
            `${topic} Tips & Tricks You Need to Know`
        ],
        review: [
            `${topic} Review - Is it Worth It?`,
            `Honest Review of ${topic} in 2024`,
            `${topic} - The Truth Revealed!`,
            `Everything You Need to Know About ${topic}`
        ],
        // Add more types...
    };

    const options = titles[type] || titles.howto;
    return options[Math.floor(Math.random() * options.length)];
}

function generateDescriptionByType(topic, type) {
    const language = document.getElementById('language').value;
    const templates = {
        hindi: {
            howto: [
                `🎯 ${topic} की पूरी जानकारी

नमस्कार दोस्तों! आज हम जानेंगे ${topic} के बारे में। इस वीडियो में मैं आपको step by step सब कुछ समझाऊंगा।

✨ इस वीडियो में सीखें:
• ${topic} की बेसिक जानकारी
• स्टेप बाय स्टेप गाइड
• प्रो टिप्स और ट्रिक्स
• कॉमन मिस्टेक्स

⏰ टाइमस्टैम्प्स:
00:00 - इंट्रोडक्शन
02:15 - बेसिक जानकारी
05:30 - स्टेप बाय स्टेप गाइड
10:45 - एडवांस टिप्स
15:30 - प्रो टिप्स
18:45 - कन्क्लूजन

👍 अगर वीडियो अच्छी लगे तो लाइक और सब्सक्राइब जरूर करें!
🔔 बेल आइकन दबाना न भूलें ताकि नई वीडियो की नोटिफिकेशन मिले

#Tutorial #HowTo #Learning #Hindi`,

                `📚 ${topic} सीखें बिल्कुल शुरू से

दोस्तों, इस वीडियो में मैं आपको ${topic} के बारे में पूरी जानकारी दूंगा। बिल्कुल बेसिक से एडवांस तक!

🎯 वीडियो में क्या है:
- बिल्कुल बेसिक से शुरुआत
- आसान भाषा में समझें
- प्रैक्टिकल एग्जाम्पल्स
- एक्सपर्ट टिप्स

⌚ टाइमलाइन:
0:00 शुरुआत
2:00 बेसिक कॉन्सेप्ट
5:00 स्टेप बाय स्टेप गाइड
12:00 प्रैक्टिकल एग्जाम्पल्स
15:00 फाइनल टिप्स

💡 ऐसी और जानकारी के लिए चैनल को सब्सक्राइब करें!
📱 सोशल मीडिया पर फॉलो करें

#Education #Tutorial #Hindi`
            ],
            review: [
                `🔍 ${topic} का सच्चा रिव्यू

नमस्कार दोस्तों! आज हम करेंगे ${topic} का डिटेल्ड रिव्यू। मैंने इसे कई हफ्तों तक टेस्ट किया है।

⭐ क्या देखेंगे:
• अनबॉक्सिंग और फर्स्ट इम्प्रेशन
• फीचर्स और स्पेसिफिकेशन्स
• रियल टेस्टिंग
• फायदे और नुकसान
• फाइनल वर्डिक्ट

⏱️ टाइमस्टैम्प्स:
00:00 - इंट्रोडक्शन
03:15 - अनबॉक्सिंग
07:30 - फीचर्स
12:45 - टेस्टिंग
18:30 - प्रोस और कॉन्स
22:15 - फाइनल थॉट्स

💰 कीमत: [प्राइस]
✅ खरीदने के लिए: [लिंक]

👍 ऐसे और रिव्यू के लिए चैनल को सब्सक्राइब करें!
🔔 हर हफ्ते नए रिव्यू

#Review #ProductReview #Hindi`
            ],
            gaming: [
                `🎮 ${topic} गेमप्ले वीडियो!

दोस्तों, आज खेलेंगे ${topic}! तैयार हो जाइए मजेदार गेमप्ले और प्रो टिप्स के लिए।

🎯 वीडियो हाइलाइट्स:
• एपिक गेमप्ले मोमेंट्स
• स्ट्रैटजी गाइड
• प्रो टिप्स और ट्रिक्स
• बेस्ट सेटिंग्स

⏰ टाइमस्टैम्प्स:
00:00 - शुरुआत
03:00 - सेटअप और स्ट्रैटजी
08:00 - मेन गेमप्ले
15:00 - प्रो टिप्स
20:00 - बेस्ट मोमेंट्स

🎵 बैकग्राउंड म्यूजिक: [ट्रैक नेम्स]
🎮 मेरा गेमिंग सेटअप: [सेटअप डिटेल्स]

👊 लाइक और सब्सक्राइब करना न भूलें!
🔔 नोटिफिकेशन स्क्वाड में शामिल हों!

#Gaming #Gameplay #${topic.replace(/\s+/g, '')} #Hindi`
            ]
        },
        english: {
            howto: [
                `🎯 Complete Tutorial on ${topic}

In this comprehensive guide, I'll show you everything you need to know about ${topic}. Whether you're a beginner or advanced user, this tutorial has something for everyone!

✨ What You'll Learn:
• Basic concepts of ${topic}
• Step-by-step instructions
• Pro tips and tricks
• Common mistakes to avoid

⏰ Timestamps:
00:00 - Introduction
02:15 - Getting Started
05:30 - Basic Tutorial
10:45 - Advanced Techniques
15:30 - Tips & Tricks
18:45 - Conclusion

👍 If you found this helpful, please like and subscribe for more tutorials!
🔔 Hit the bell icon to never miss an update

#Tutorial #HowTo #Learning`
            ],
            review: [
                `🔍 Honest Review: ${topic}

Today we're taking a detailed look at ${topic}. After testing it for several weeks, here's my complete, unbiased review.

⭐ What We'll Cover:
• Unboxing & First Impressions
• Features & Specifications
• Real-world Testing
• Pros & Cons
• Final Verdict

⏱️ Timestamps:
00:00 - Introduction
03:15 - Unboxing
07:30 - Features Overview
12:45 - Testing & Results
18:30 - Pros & Cons
22:15 - Final Thoughts

💰 Price: [Insert Price]
✅ Where to Buy: [Insert Link]

👍 Like & Subscribe for more honest reviews!
🔔 New reviews every week

#Review #ProductReview #Honest`
            ],
            gaming: [
                `🎮 Epic ${topic} Gameplay!

Watch as we explore ${topic} in this exciting gameplay video! Get ready for some amazing moments and pro tips.

🎯 Video Highlights:
• Epic Gameplay Moments
• Strategy Guide
• Pro Tips & Tricks
• Best Loadouts/Settings

⏰ Timestamps:
00:00 - Intro
03:00 - Setup & Strategy
08:00 - Main Gameplay
15:00 - Pro Tips
20:00 - Best Moments

🎵 Background Music: [Insert Track Names]
🎮 My Gaming Setup: [Insert Setup Details]

👊 Don't forget to LIKE and SUBSCRIBE!
🔔 Join the notification squad!

#Gaming #Gameplay #${topic.replace(/\s+/g, '')}`
            ],
            vlog: [
                `📸 A Day in the Life: ${topic}

Join me for an exciting vlog about ${topic}! Let's make this journey together and create some amazing memories.

🎥 Today's Adventures:
• Morning Routine
• Behind the Scenes
• Special Moments
• Exciting Surprises

⏰ Vlog Timeline:
0:00 - Good Morning!
3:00 - Starting the Day
8:00 - Main Activity
15:00 - Evening Fun
20:00 - Final Thoughts

🎵 Music Credits: [Insert Track Names]
📱 Social Media Links Below!

❤️ Like & Subscribe for daily vlogs!
🔔 Never miss an upload!

#Vlog #DailyLife #Lifestyle`
            ]
        }
    };

    const languageTemplates = templates[language] || templates.english;
    const options = languageTemplates[type] || languageTemplates.howto;
    return options[Math.floor(Math.random() * options.length)];
}

function generateTagsByType(topic, type) {
    const language = document.getElementById('language').value;
    const commonTags = [
        topic.toLowerCase(),
        topic.toLowerCase().replace(/\s+/g, ''),
        '2024',
        'youtube',
        'viral',
        'trending'
    ];

    // Add Hindi-specific tags if Hindi is selected
    if (language === 'hindi') {
        commonTags.push(
            'hindi',
            'hinditutorial',
            'hindivlog',
            'hindiyoutube',
            'hindichannel'
        );
    }

    const typeSpecificTags = {
        hindi: {
            howto: ['tutorial', 'howto', 'सीखें', 'शिक्षा', 'गाइड', 'टिप्स', 'ट्रिक्स', 'हिंदी'],
            review: ['review', 'समीक्षा', 'अनबॉक्सिंग', 'परीक्षण', 'प्रोडक्ट', 'खरीदारी'],
            gaming: ['gaming', 'गेमिंग', 'गेमर', 'गेमप्ले', 'हिंदीगेमिंग', 'गेमिंग2024'],
            vlog: ['vlog', 'व्लॉग', 'लाइफस्टाइल', 'डेली', 'यूट्यूबर', 'हिंदीव्लॉग']
        },
        english: {
            howto: ['tutorial', 'howto', 'learn', 'education', 'guide', 'tips', 'tricks', 'diy'],
            review: ['review', 'honest', 'unboxing', 'testing', 'product', 'comparison', 'buying guide'],
            gaming: ['gaming', 'gameplay', 'gamer', 'walkthrough', 'playthrough', 'gaming2024', 'gamingtips'],
            vlog: ['vlog', 'dailyvlog', 'lifestyle', 'daily', 'vlogger', 'life', 'routine'],
            educational: ['education', 'learning', 'study', 'knowledge', 'educational', 'academy', 'course']
        }
    };

    const languageTags = typeSpecificTags[language] || typeSpecificTags.english;
    return [...commonTags, ...(languageTags[type] || languageTags.howto)];
}

// Copy functions
async function copyTitle() {
    const title = document.getElementById('generatedTitle').textContent;
    await copyToClipboard(title);
    showCopyFeedback('titleResult');
}

async function copyDescription() {
    const description = document.getElementById('generatedDescription').textContent;
    await copyToClipboard(description);
    showCopyFeedback('descriptionResult');
}

async function copyTags() {
    const tags = Array.from(document.getElementById('generatedTags').children)
        .map(span => span.textContent)
        .join(', ');
    await copyToClipboard(tags);
    showCopyFeedback('tagsResult');
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        alert('Failed to copy text');
    }
}

function showResults() {
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.classList.remove('hidden');
    
    // Add animation classes to results
    const results = resultsSection.querySelectorAll('.generated-content');
    results.forEach((result, index) => {
        result.style.animationDelay = `${index * 0.2}s`;
    });
}

// Add typing animation
function typeText(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add copy feedback animation
function showCopyFeedback(elementId) {
    const button = document.querySelector(`#${elementId} button`);
    const originalText = button.textContent;
    
    button.classList.add('scale-110', 'transform');
    button.textContent = 'Copied!';
    
    setTimeout(() => {
        button.classList.remove('scale-110', 'transform');
        button.textContent = originalText;
    }, 2000);
}

// Language-specific AI responses
const languageResponses = {
    hindi: {
        title: "शीर्षक में पावर वर्ड्स, नंबर्स या इमोशनल ट्रिगर्स का उपयोग करें। उदाहरण: 'टॉप 10 सीक्रेट्स...' या 'कैसे मैंने बदला...'",
        description: "अपने डिस्क्रिप्शन को आकर्षक बनाएं - एक हुक से शुरू करें, टाइमस्टैम्प्स का उपयोग करें, और रिलेवेंट लिंक्स और कॉल टू एक्शन शामिल करें।",
        tags: "ब्रॉड और स्पेसिफिक टैग्स का मिश्रण करें। अपना मुख्य कीवर्ड, वैरिएशन्स और रिलेटेड टर्म्स शामिल करें।",
        ideas: "अपनी निश में ट्रेंडिंग टॉपिक्स पर विचार करें, कॉमन प्रॉब्लम्स को सॉल्व करें, या अपने यूनीक एक्सपीरियंस शेयर करें।",
        views: "SEO पर फोकस करें, एंगेजिंग थंबनेल बनाएं और कंसिस्टेंटली पोस्ट करें। अन्य क्रिएटर्स के साथ कोलैबोरेशन भी करें।",
        greeting: "नमस्ते! मैं आपका AI कंटेंट असिस्टेंट हूं। मैं आपकी कैसे मदद कर सकता हूं?",
        default: "मैं आपको वीडियो टाइटल, डिस्क्रिप्शन, टैग्स, कंटेंट आइडियाज और ग्रोथ स्ट्रैटेजीज में मदद कर सकता हूं। आप किस बारे में और जानना चाहेंगे?"
    },
    gujarati: {
        title: "શીર્ષકમાં પાવર વર્ડ્સ, નંબર્સ અથવા ઇમોશનલ ટ્રિગર્સનો ઉપયોગ કરો. ઉદાહરણ: 'ટોપ 10 સીક્રેટ્સ...' અથવા 'કેવી રીતે મેં બદલ્યું...'",
        description: "તમારા વર્ણનને આકર્ષક બનાવો - એક હુક સાથે શરૂ કરો, ટાઇમસ્ટેમ્પ્સનો ઉપયોગ કરો, અને સંબંધિત લિંક્સ અને કૉલ ટુ એક્શન શામેલ કરો.",
        tags: "વ્યાપક અને વિશિષ્ટ ટૅગ્સનું મિશ્રણ કરો. તમારા મુખ્ય કીવર્ડ, વેરિએશન્સ અને સંબંધિત શબ્દો શામેલ કરો.",
        ideas: "તમારી નિશમાં ટ્રેન્ડિંગ ટોપિક્સ વિચારો, સામાન્ય સમસ્યાઓનું સમાધાન કરો, અથવા તમારા અનન્ય અનુભવો શેર કરો.",
        views: "SEO પર ધ્યાન કેન્દ્રિત કરો, આકર્ષક થંબનેલ્સ બનાવો અને નિયમિત પોસ્ટ કરો. અન્ય ક્રિએટર્સ સાથે સહયોગ પણ કરો.",
        greeting: "નમસ્તે! હું તમારો AI કન્ટેન્ટ આસિસ્ટન્ટ છું. હું તમારી કેવી રીતે મદદ કરી શકું?",
        default: "હું તમને વિડિઓ ટાઇટલ, ડિસ્ક્રિપ્શન, ટૅગ્સ, કન્ટેન્ટ આઇડિયાઝ અને ગ્રોથ સ્ટ્રેટેજીસમાં મદદ કરી શકું છું. તમે શું વધુ જાણવા માંગો છો?"
    },
    // Add more languages...
};

// Update generateAIResponse to use selected language
function generateAIResponse(message) {
    const language = document.getElementById('language').value;
    const responses = languageResponses[language] || languageResponses.english;
    
    message = message.toLowerCase();
    
    if (message.includes('title')) return responses.title;
    if (message.includes('description')) return responses.description;
    if (message.includes('tag')) return responses.tags;
    if (message.includes('idea')) return responses.ideas;
    if (message.includes('view')) return responses.views;
    
    return responses.default;
}

// Update addChatMessage to handle initial greeting in selected language
function addInitialGreeting() {
    const language = document.getElementById('language').value;
    const greeting = languageResponses[language]?.greeting || languageResponses.english.greeting;
    addChatMessage(greeting, 'bot');
}

// Update toggleAIChat to use new greeting function
function toggleAIChat() {
    const chatbox = document.getElementById('aiChatbox');
    chatbox.classList.toggle('hidden');
    
    if (!chatbox.classList.contains('hidden')) {
        document.getElementById('userMessage').focus();
        
        // Add initial message if chat is empty
        const messages = document.getElementById('chatMessages');
        if (messages.children.length === 0) {
            addInitialGreeting();
        }
    }
}

// Add language change listener
document.getElementById('language')?.addEventListener('change', function() {
    const messages = document.getElementById('chatMessages');
    if (messages) {
        messages.innerHTML = '';
        addInitialGreeting();
    }
});

// Content Ideas Generator
function generateContentIdeas() {
    const niche = document.getElementById('contentNiche').value;
    const ideasContainer = document.getElementById('ideaResults');
    ideasContainer.innerHTML = '';
    
    showIdeaLoading(true);
    
    setTimeout(() => {
        const ideas = getContentIdeas(niche);
        displayContentIdeas(ideas);
        showIdeaLoading(false);
    }, 1000);
}

function getContentIdeas(niche) {
    const ideas = {
        tech: [
            "10 Hidden Features in [Latest Gadget]",
            "Budget vs Premium: Is it Worth the Upgrade?",
            "How to Speed Up Your [Device] in 5 Minutes",
            "The Truth About [Tech Trend] - Explained",
            "5 Must-Have Apps for [Specific Task]"
        ],
        lifestyle: [
            "Day in the Life: [Specific Routine]",
            "5 Life-Changing Habits I Learned",
            "Room/House Tour & Organization Tips",
            "How I Stay Productive Working from Home",
            "Honest Review: [Popular Product] After 6 Months"
        ],
        gaming: [
            "Top 10 Tips for [Popular Game]",
            "Hidden Easter Eggs in [Game]",
            "Pro vs Noob: [Game] Strategies",
            "Best Settings for [Game] in 2024",
            "How to Level Up Fast in [Game]"
        ],
        education: [
            "Understanding [Complex Topic] Simply",
            "Study With Me - Real Time",
            "5 Memory Techniques for Better Learning",
            "Common Mistakes in [Subject]",
            "Quick Tips for [Academic Skill]"
        ]
    };
    
    return ideas[niche] || ideas.tech;
}

function displayContentIdeas(ideas) {
    const container = document.getElementById('ideaResults');
    
    ideas.forEach(idea => {
        const ideaCard = document.createElement('div');
        ideaCard.className = 'p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer';
        
        const ideaText = document.createElement('p');
        ideaText.className = 'text-gray-800 font-medium';
        ideaText.textContent = idea;
        
        const useButton = document.createElement('button');
        useButton.className = 'mt-2 text-sm text-purple-600 hover:text-purple-800';
        useButton.textContent = 'Use This Idea';
        useButton.onclick = () => useContentIdea(idea);
        
        ideaCard.appendChild(ideaText);
        ideaCard.appendChild(useButton);
        container.appendChild(ideaCard);
    });
}

function useContentIdea(idea) {
    document.getElementById('videoTopic').value = idea;
    document.getElementById('videoTopic').scrollIntoView({ behavior: 'smooth' });
}

function showIdeaLoading(show) {
    const container = document.getElementById('ideaResults');
    if (show) {
        container.innerHTML = `
            <div class="flex justify-center items-center py-8">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
            </div>
        `;
    }
}

// Add this to your existing content-tools.js
document.getElementById('mobileMenuBtn')?.addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (!mobileMenuBtn?.contains(event.target) && !mobileMenu?.contains(event.target)) {
        mobileMenu?.classList.add('hidden');
    }
});

// Dark mode toggle functionality
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'fixed top-20 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg';
darkModeToggle.innerHTML = '🌙';
document.body.appendChild(darkModeToggle);

let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    updateTheme();
}

function updateTheme() {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        darkModeToggle.innerHTML = '☀️';
    } else {
        document.documentElement.classList.remove('dark');
        darkModeToggle.innerHTML = '🌙';
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);
updateTheme();

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + / to toggle AI chat
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        toggleAIChat();
    }
    
    // Ctrl/Cmd + D to toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleDarkMode();
    }
    
    // Ctrl/Cmd + G to quick generate
    if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        generateAll();
    }
});

// Show shortcuts helper
const shortcutsHelper = document.createElement('div');
shortcutsHelper.className = 'fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg hidden';
shortcutsHelper.innerHTML = `
    <h3 class="font-bold mb-2">Keyboard Shortcuts</h3>
    <div class="space-y-1 text-sm">
        <div>Ctrl + / : Toggle AI Chat</div>
        <div>Ctrl + D : Toggle Dark Mode</div>
        <div>Ctrl + G : Quick Generate</div>
    </div>
`;
document.body.appendChild(shortcutsHelper);

// Progress tracking
const progressTracker = {
    saveProgress() {
        const progress = {
            videosCreated: parseInt(localStorage.getItem('videosCreated') || '0'),
            totalViews: parseInt(localStorage.getItem('totalViews') || '0'),
            completedTasks: JSON.parse(localStorage.getItem('completedTasks') || '[]'),
            streak: parseInt(localStorage.getItem('streak') || '0'),
            lastActive: localStorage.getItem('lastActive')
        };
        
        // Update streak
        const today = new Date().toDateString();
        if (progress.lastActive !== today) {
            if (isConsecutiveDay(progress.lastActive)) {
                progress.streak++;
            } else {
                progress.streak = 1;
            }
            progress.lastActive = today;
        }
        
        // Save updated progress
        Object.entries(progress).forEach(([key, value]) => {
            localStorage.setItem(key, JSON.stringify(value));
        });
        
        return progress;
    },
    
    updateStats(type) {
        const progress = this.saveProgress();
        if (type === 'video') {
            localStorage.setItem('videosCreated', progress.videosCreated + 1);
        }
        this.displayProgress();
    },
    
    displayProgress() {
        const progress = this.saveProgress();
        const statsContainer = document.getElementById('progressStats');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="grid grid-cols-4 gap-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold">${progress.videosCreated}</div>
                        <div class="text-sm text-gray-600">Videos Created</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold">${progress.totalViews}</div>
                        <div class="text-sm text-gray-600">Total Views</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold">${progress.completedTasks.length}</div>
                        <div class="text-sm text-gray-600">Tasks Completed</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold">${progress.streak}</div>
                        <div class="text-sm text-gray-600">Day Streak</div>
                    </div>
                </div>
            `;
        }
    }
};

// Settings management
const settingsManager = {
    async exportSettings() {
        const settings = {
            language: localStorage.getItem('language'),
            darkMode: localStorage.getItem('darkMode'),
            templates: localStorage.getItem('savedTemplates'),
            progress: {
                videosCreated: localStorage.getItem('videosCreated'),
                totalViews: localStorage.getItem('totalViews'),
                completedTasks: localStorage.getItem('completedTasks'),
                streak: localStorage.getItem('streak')
            }
        };
        
        const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'content-tools-settings.json';
        a.click();
    },
    
    async importSettings(file) {
        try {
            const text = await file.text();
            const settings = JSON.parse(text);
            
            // Apply imported settings
            Object.entries(settings).forEach(([key, value]) => {
                if (typeof value === 'object') {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        localStorage.setItem(subKey, subValue);
                    });
                } else {
                    localStorage.setItem(key, value);
                }
            });
            
            // Refresh UI
            updateTheme();
            progressTracker.displayProgress();
            showNotification('Settings imported successfully!');
        } catch (error) {
            showNotification('Error importing settings', 'error');
        }
    }
}; 

// Template management
const thumbnailTemplates = {
    gaming: {
        background: 'gradient',
        gradientColors: ['#ff0000', '#9333ea'],
        textPosition: 'center',
        elements: [
            {
                type: 'emoji',
                content: '🎮',
                position: { x: 50, y: 50 },
                size: 48
            },
            {
                type: 'text',
                content: 'EPIC GAMEPLAY',
                position: { x: 640, y: 200 },
                style: {
                    font: 'bold 72px Arial',
                    color: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 4
                }
            }
        ]
    },
    tech: {
        background: 'solid',
        backgroundColor: '#1e293b',
        textPosition: 'left',
        elements: [
            {
                type: 'text',
                content: 'ULTIMATE REVIEW',
                position: { x: 640, y: 150 },
                style: {
                    font: 'bold 64px Arial',
                    color: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 3
                }
            },
            {
                type: 'rating',
                value: 4.5,
                position: { x: 640, y: 300 }
            }
        ]
    },
    tutorial: {
        background: 'gradient',
        gradientColors: ['#22c55e', '#14b8a6'],
        textPosition: 'center',
        elements: [
            {
                type: 'text',
                content: 'COMPLETE GUIDE',
                position: { x: 640, y: 180 },
                style: {
                    font: 'bold 68px Arial',
                    color: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 3
                }
            },
            {
                type: 'emoji',
                content: '📚',
                position: { x: 640, y: 300 },
                size: 64
            }
        ]
    }
};

function useTemplate(templateName) {
    const template = thumbnailTemplates[templateName];
    if (!template) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply background
    if (template.background === 'gradient') {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, template.gradientColors[0]);
        gradient.addColorStop(1, template.gradientColors[1]);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = template.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Add template elements
    template.elements.forEach(element => {
        switch (element.type) {
            case 'text':
                ctx.font = element.style.font;
                ctx.fillStyle = element.style.color;
                ctx.strokeStyle = element.style.stroke;
                ctx.lineWidth = element.style.strokeWidth;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.strokeText(element.content, element.position.x, element.position.y);
                ctx.fillText(element.content, element.position.x, element.position.y);
                break;

            case 'emoji':
                ctx.font = `${element.size}px serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(element.content, element.position.x, element.position.y);
                break;

            case 'rating':
                drawRating(element.value, element.position.x, element.position.y);
                break;
        }
    });
}

function drawRating(value, x, y) {
    const starCount = 5;
    const starSize = 30;
    const starSpacing = 40;
    const startX = x - (starCount * starSpacing) / 2;

    for (let i = 0; i < starCount; i++) {
        const starX = startX + i * starSpacing;
        const fillAmount = Math.max(0, Math.min(1, value - i));
        
        // Draw star outline
        ctx.font = `${starSize}px serif`;
        ctx.fillStyle = '#666666';
        ctx.textAlign = 'center';
        ctx.fillText('★', starX, y);

        // Draw filled portion
        if (fillAmount > 0) {
            ctx.fillStyle = '#ffd700';
            ctx.fillText('★', starX, y);
        }
    }
}

// Add download functionality
function downloadThumbnail() {
    const link = document.createElement('a');
    link.download = 'thumbnail.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
} 