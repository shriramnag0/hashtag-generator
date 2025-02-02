const titleTemplates = {
    howto: [
        "How to [topic] Like a Pro in 2024 🔥",
        "The ULTIMATE [topic] Tutorial for [audience] 📚",
        "[number] Easy Steps to Master [topic] - Beginners Guide ✨",
        "Learn [topic] in [number] Minutes! Quick Tutorial 🚀",
        "COMPLETE [topic] Tutorial - From Beginner to Expert! 💯"
    ],
    listicle: [
        "Top [number] [topic] Tips That Will Blow Your Mind! 🤯",
        "[number] [topic] Secrets Pros Don't Want You to Know 🎯",
        "BEST [topic] Methods in 2024 - Ranked! ⭐",
        "[number] INSANE [topic] Hacks You Must Try! 😱",
        "The [number] Most POWERFUL [topic] Techniques 💪"
    ],
    review: [
        "I Tried [topic] for [number] Days - Here's What Happened! 😳",
        "HONEST [topic] Review - The Truth Revealed! ⚡",
        "[topic] - Is it Worth it in 2024? 🤔",
        "WARNING: Watch This Before Trying [topic]! ⚠️",
        "The TRUTH About [topic] Nobody Tells You! 🎯"
    ],
    reaction: [
        "You Won't Believe What Happened When I Tried [topic]! 😱",
        "REACTING to [topic] for the First Time! 🎬",
        "I Tested Viral [topic] Trends - SHOCKING RESULTS! 💥",
        "[topic] Challenge Gone Wrong! (EMOTIONAL) 😭",
        "MIND-BLOWING [topic] Experience! Must Watch! 🔥"
    ],
    news: [
        "BREAKING: New [topic] Update Changes Everything! 📢",
        "The Future of [topic] is Here! Game-Changing Update 🌟",
        "URGENT: Major [topic] Changes You Need to Know! ⚡",
        "Revolutionary [topic] Discovery in 2024! 🎉",
        "LEAKED: New [topic] Features Coming Soon! 🚨"
    ],
    viral: [
        "🔥 *VIRAL* [topic] Technique That's Taking Over YouTube!",
        "This [topic] Video Got [number]M Views in 24 Hours! 🚀",
        "VIRAL [topic] Hack Everyone is Talking About! 😱",
        "The [topic] Video That Broke The Internet! 💥",
        "Watch This [topic] Go Viral! (INSANE RESULTS) 🌟"
    ],
    seo: [
        "Best [topic] Tutorial [year] | Step by Step Guide",
        "[topic] Masterclass [year] - Complete [audience] Guide",
        "How to [topic] - Professional Tips & Tricks [year]",
        "[number] Best [topic] Methods | Tested & Ranked [year]",
        "Ultimate [topic] Guide [year] | From Beginner to Pro"
    ]
};

const rankingKeywords = {
    best: 10,
    top: 8,
    viral: 9,
    trending: 8,
    ultimate: 7,
    complete: 6,
    perfect: 5,
    professional: 7,
    expert: 6,
    beginners: 5
};

const powerWords = [
    "ultimate", "essential", "powerful", "incredible", "exclusive", 
    "proven", "guaranteed", "amazing", "revolutionary", "instant",
    "epic", "stunning", "remarkable", "sensational", "extraordinary"
];

const lsiKeywordMap = {
    "marketing": ["digital marketing", "social media", "content strategy", "branding", "advertising"],
    "programming": ["coding", "software development", "web development", "algorithms", "debugging"],
    "fitness": ["workout", "exercise", "health", "training", "gym"],
    // Add more mappings as needed
};

function getRandomNumber() {
    const numbers = [3, 5, 7, 10, 15, 20];
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function generateTitles() {
    const mainTopic = document.getElementById('mainTopic').value.trim();
    if (!mainTopic) {
        alert('Please enter a main topic!');
        return;
    }

    const titleStyle = document.getElementById('titleStyle').value;
    const audience = document.getElementById('targetAudience').value;
    const emotion = document.getElementById('emotionTone').value;

    showLoading(true);
    
    setTimeout(() => {
        const titles = generateTitleVariations(mainTopic, titleStyle, audience, emotion);
        displayTitles(titles);
        showLoading(false);
    }, 1000);
}

function generateTitleVariations(topic, style, audience, emotion) {
    const templates = titleTemplates[style];
    const titles = [];
    const selectedKeywords = Array.from(document.getElementById('rankingKeywords').selectedOptions)
        .map(option => option.value);
    
    const useYear = document.getElementById('includeYear').checked;
    const useNumbers = document.getElementById('includeNumbers').checked;
    const useBrackets = document.getElementById('includeBrackets').checked;
    const useEmojis = document.getElementById('includeEmojis').checked;
    
    const includePowerWords = document.getElementById('includePowerWords').checked;
    const includeQuestion = document.getElementById('includeQuestion').checked;
    const includeLSI = document.getElementById('includeLSI').checked;
    const includeMetrics = document.getElementById('includeMetrics').checked;
    
    for (let i = 0; i < 5; i++) {
        let template = templates[i];
        
        // Replace basic placeholders
        template = template
            .replace('[topic]', topic)
            .replace('[audience]', audience)
            .replace('[year]', useYear ? '2024' : '')
            .replace('[number]', useNumbers ? getRandomNumber() : '');
            
        // Add ranking keywords
        if (selectedKeywords.length > 0) {
            const keyword = selectedKeywords[Math.floor(Math.random() * selectedKeywords.length)];
            template = `${keyword.toUpperCase()} ${template}`;
        }
        
        // Add brackets if enabled
        if (useBrackets) {
            template = template.replace(topic, `[${topic}]`);
        }
        
        // Remove emojis if disabled
        if (!useEmojis) {
            template = template.replace(/[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}]/gu, '');
        }
        
        // Add power words
        if (includePowerWords) {
            const powerWord = powerWords[Math.floor(Math.random() * powerWords.length)];
            template = `${powerWord.toUpperCase()} ${template}`;
        }

        // Add question format
        if (includeQuestion && !template.includes('?')) {
            template = template.replace('!', '?');
        }

        // Add metrics
        if (includeMetrics && !template.includes('[number]')) {
            template = `[number]+ ${template}`;
        }
        
        titles.push(template);
    }
    
    return titles;
}

function calculateSEOScore(title) {
    let score = 0;
    
    // Length check (ideal: 50-60 characters)
    const length = title.length;
    if (length >= 50 && length <= 60) score += 30;
    else if (length >= 40 && length <= 70) score += 20;
    else if (length >= 30 && length <= 80) score += 10;
    
    // Keyword presence
    const keywords = Object.keys(rankingKeywords);
    const presentKeywords = keywords.filter(keyword => 
        title.toLowerCase().includes(keyword.toLowerCase())
    );
    
    score += presentKeywords.length * 5;
    
    // Year presence
    if (title.includes('2024')) score += 10;
    
    // Numbers presence
    if (/\d+/.test(title)) score += 10;
    
    // Emoji presence
    if (/[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}]/gu.test(title)) score += 5;
    
    return Math.min(100, score);
}

function analyzeSEO(title) {
    const analysis = {
        keywordDensity: calculateKeywordDensity(title),
        readabilityScore: calculateReadability(title),
        ctrPrediction: predictCTR(title),
        lsiKeywords: generateLSIKeywords(title)
    };

    updateSEOMetrics(analysis);
    return analysis;
}

function calculateKeywordDensity(title) {
    const primaryKeyword = document.getElementById('primaryKeyword').value.trim().toLowerCase();
    if (!primaryKeyword) return 0;

    const words = title.toLowerCase().split(' ');
    const keywordCount = words.filter(word => word.includes(primaryKeyword)).length;
    return Math.round((keywordCount / words.length) * 100);
}

function calculateReadability(title) {
    // Simple readability score based on length and complexity
    const words = title.split(' ');
    const avgWordLength = words.join('').length / words.length;
    const complexityPenalty = avgWordLength > 6 ? (avgWordLength - 6) * 5 : 0;
    
    let score = 100;
    if (title.length > 60) score -= (title.length - 60) * 0.5;
    score -= complexityPenalty;
    
    return Math.max(0, Math.min(100, Math.round(score)));
}

function predictCTR(title) {
    let score = 60; // Base CTR score

    // Factors that might increase CTR
    if (title.includes('?')) score += 5;
    if (/\d+/.test(title)) score += 5;
    if (powerWords.some(word => title.toLowerCase().includes(word))) score += 10;
    if (title.includes('!')) score += 5;
    if (/[\u{1F300}-\u{1F6FF}]/u.test(title)) score += 5; // Emoji presence

    return Math.min(100, score);
}

function generateLSIKeywords(title) {
    const words = title.toLowerCase().split(' ');
    let lsiKeywords = new Set();

    words.forEach(word => {
        if (lsiKeywordMap[word]) {
            lsiKeywordMap[word].forEach(keyword => lsiKeywords.add(keyword));
        }
    });

    return Array.from(lsiKeywords);
}

function updateSEOMetrics(analysis) {
    document.getElementById('keywordDensity').textContent = `${analysis.keywordDensity}%`;
    document.getElementById('readabilityScore').textContent = `${analysis.readabilityScore}/100`;
    document.getElementById('ctrScore').textContent = `${analysis.ctrPrediction}%`;

    // Update LSI keywords
    const lsiContainer = document.getElementById('lsiKeywords');
    lsiContainer.innerHTML = analysis.lsiKeywords
        .map(keyword => `<span class="px-2 py-1 bg-red-100 text-red-600 rounded">${keyword}</span>`)
        .join('');
}

function displayTitles(titles) {
    const titlesList = document.getElementById('titlesList');
    titlesList.innerHTML = '';
    
    titles.forEach(title => {
        const seoScore = calculateSEOScore(title);
        const seoAnalysis = analyzeSEO(title);
        const titleElement = document.createElement('div');
        titleElement.className = 'p-4 bg-gray-50 rounded-lg';
        
        titleElement.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="flex-grow">${title}</span>
                <button onclick="copyTitle(this)" 
                    class="ml-4 px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                    Copy
                </button>
            </div>
            <div class="text-sm text-gray-500">
                Length: ${title.length}/100 | SEO Score: 
                <span class="px-2 py-1 rounded text-white ${
                    seoScore >= 80 ? 'bg-green-500' : 
                    seoScore >= 60 ? 'bg-yellow-500' : 
                    'bg-red-500'
                }">${seoScore}/100</span>
            </div>
        `;
        
        titlesList.appendChild(titleElement);
    });
    
    document.getElementById('titleResults').classList.remove('hidden');
}

async function copyTitle(button) {
    const title = button.parentElement.querySelector('span').textContent;
    
    try {
        await navigator.clipboard.writeText(title);
        
        // Show copy feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('bg-green-100', 'text-green-600');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-100', 'text-green-600');
            button.classList.add('bg-red-100', 'text-red-600');
        }, 2000);
    } catch (err) {
        alert('Failed to copy text');
    }
}

function showLoading(show) {
    const loader = document.getElementById('loadingIndicator');
    const results = document.getElementById('titleResults');
    
    loader.style.display = show ? 'block' : 'none';
    if (show) {
        results.classList.add('hidden');
    }
} 