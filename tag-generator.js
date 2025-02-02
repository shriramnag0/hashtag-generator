// Tag templates for different categories
const tagTemplates = {
    gaming: {
        base: ["gameplay", "gaming", "gamer", "game", "playthrough", "walkthrough", "lets play", "gaming channel"],
        brands: ["xbox", "playstation", "ps5", "nintendo switch", "pc gaming", "steam"],
        trending: ["gaming 2024", "viral gaming", "best games", "top games", "new games"],
        competitors: ["pewdiepie", "markiplier", "jacksepticeye", "ninja", "pokimane"]
    },
    tech: {
        base: ["tech", "technology", "gadgets", "review", "unboxing", "tutorial", "how to", "tech news"],
        brands: ["apple", "samsung", "google", "microsoft", "android", "iphone"],
        trending: ["tech 2024", "new tech", "latest technology", "future tech", "tech review"],
        competitors: ["mkbhd", "unbox therapy", "linus tech tips", "techlinked", "the verge"]
    },
    education: {
        base: ["education", "tutorial", "learn", "course", "study", "teaching", "lessons", "educational"],
        trending: ["study tips", "learning hacks", "education 2024", "online learning", "study with me"],
        academic: ["mathematics", "science", "history", "physics", "chemistry", "biology"]
    },
    entertainment: {
        base: ["entertainment", "fun", "funny", "comedy", "vlog", "reaction", "challenge", "prank"],
        trending: ["viral videos", "trending", "entertainment 2024", "best moments", "funny videos"],
        types: ["reaction video", "challenge video", "comedy skit", "prank video", "viral content"]
    },
    music: {
        base: ["music", "song", "singing", "cover", "musical", "artist", "musician", "concert"],
        genres: ["pop", "rock", "hip hop", "rap", "jazz", "classical", "indie"],
        trending: ["music 2024", "new music", "viral songs", "top hits", "music cover"]
    },
    howto: {
        base: ["how to", "tutorial", "guide", "tips", "tricks", "diy", "learn", "step by step"],
        trending: ["life hacks", "how to 2024", "tutorial", "best tips", "easy guide"],
        types: ["beginners guide", "advanced tutorial", "quick tips", "complete guide"]
    },
    vlog: {
        base: ["vlog", "daily vlog", "life", "lifestyle", "day in life", "vlogger", "daily life"],
        trending: ["vlog 2024", "lifestyle vlog", "daily routine", "life update", "vlog series"],
        types: ["travel vlog", "food vlog", "lifestyle vlog", "family vlog", "weekly vlog"]
    },
    review: {
        base: ["review", "product review", "honest review", "unboxing", "testing", "comparison"],
        trending: ["review 2024", "best products", "new products", "must have", "worth it"],
        types: ["detailed review", "comparison video", "first impressions", "long term review"]
    }
};

// Location-based tags
const locationTags = {
    en: ["USA", "UK", "Canada", "Australia"],
    hi: ["India", "Mumbai", "Delhi", "Bangalore", "Indian"],
    es: ["Spain", "Mexico", "Latin", "Hispanic"],
    fr: ["France", "French", "Paris", "Canadian French"]
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load initial suggested tags
    updateSuggestedTags();
    
    // Add event listeners for input changes
    document.getElementById('videoTitle').addEventListener('input', updateSuggestedTags);
    document.getElementById('category').addEventListener('change', updateSuggestedTags);
});

function generateTags() {
    const title = document.getElementById('videoTitle').value.trim();
    const description = document.getElementById('videoDescription').value.trim();
    
    if (!title) {
        alert('Please enter a video title');
        return;
    }

    showLoading(true);

    setTimeout(() => {
        const category = document.getElementById('category').value;
        const language = document.getElementById('language').value;
        const tags = generateTagSet(title, description, category, language);
        
        displayTags(tags);
        updateStats(tags);
        showLoading(false);
    }, 1000);
}

function generateTagSet(title, description, category, language) {
    let tags = new Set();
    const template = tagTemplates[category];
    
    // Add base tags
    template.base.forEach(tag => tags.add(tag));
    
    // Add title-based tags
    const titleWords = title.toLowerCase().split(' ');
    titleWords.forEach(word => {
        if (word.length > 3) tags.add(word);
    });
    
    // Add brand tags if enabled
    if (document.getElementById('includeBrand').checked && template.brands) {
        template.brands.forEach(tag => tags.add(tag));
    }
    
    // Add competitor tags if enabled
    if (document.getElementById('includeCompetitor').checked && template.competitors) {
        template.competitors.forEach(tag => tags.add(tag));
    }
    
    // Add trending tags
    if (document.getElementById('includeTrending').checked) {
        template.trending.forEach(tag => tags.add(tag));
    }
    
    // Add location tags if enabled
    if (document.getElementById('includeLocation').checked) {
        locationTags[language].forEach(tag => tags.add(tag.toLowerCase()));
    }
    
    // Add category-specific tags
    if (template.types) {
        template.types.forEach(tag => tags.add(tag));
    }
    
    // Add description-based tags
    if (description) {
        const descWords = description.toLowerCase().split(' ');
        descWords.forEach(word => {
            if (word.length > 4) tags.add(word);
        });
    }
    
    return Array.from(tags);
}

function displayTags(tags) {
    const container = document.getElementById('tagsList');
    container.innerHTML = '';
    
    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 cursor-pointer';
        tagElement.textContent = tag;
        tagElement.onclick = () => copyTag(tag);
        container.appendChild(tagElement);
    });

    document.getElementById('tagResults').classList.remove('hidden');
}

function updateStats(tags) {
    // Update total tags count
    document.getElementById('totalTags').textContent = tags.length;
    
    // Update character count
    const charCount = tags.join(', ').length;
    document.getElementById('charCount').textContent = `${charCount}/500`;
    
    // Calculate and update SEO score
    const seoScore = calculateSEOScore(tags);
    document.getElementById('seoScore').textContent = `${seoScore}%`;
}

function calculateSEOScore(tags) {
    let score = 0;
    
    // Check number of tags (ideal: 15-20 tags)
    if (tags.length >= 15 && tags.length <= 20) score += 30;
    else if (tags.length >= 10) score += 20;
    
    // Check average tag length
    const avgLength = tags.join('').length / tags.length;
    if (avgLength >= 5 && avgLength <= 15) score += 20;
    
    // Check for trending tags
    if (tags.some(tag => tag.includes('2024'))) score += 10;
    
    // Check for brand names
    if (document.getElementById('includeBrand').checked) score += 10;
    
    // Check for location tags
    if (document.getElementById('includeLocation').checked) score += 10;
    
    // Check total character count (max 500)
    const totalChars = tags.join(', ').length;
    if (totalChars <= 500) score += 20;
    
    return Math.min(100, score);
}

async function copyTag(tag) {
    try {
        await navigator.clipboard.writeText(tag);
        showCopyFeedback();
    } catch (err) {
        alert('Failed to copy tag');
    }
}

async function copyAllTags() {
    const tags = Array.from(document.getElementById('tagsList').children)
        .map(div => div.textContent)
        .join(', ');
    
    try {
        await navigator.clipboard.writeText(tags);
        showCopyFeedback();
    } catch (err) {
        alert('Failed to copy tags');
    }
}

function showCopyFeedback() {
    const button = document.querySelector('#tagResults button');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('bg-green-100', 'text-green-600');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-100', 'text-green-600');
        button.classList.add('bg-blue-100', 'text-blue-600');
    }, 2000);
}

function updateSuggestedTags() {
    const title = document.getElementById('videoTitle').value.trim();
    const category = document.getElementById('category').value;
    const container = document.getElementById('suggestedTags');
    
    container.innerHTML = '';
    
    if (title && tagTemplates[category]) {
        const suggestedTags = new Set([
            ...tagTemplates[category].base.slice(0, 3),
            ...tagTemplates[category].trending.slice(0, 3)
        ]);
        
        suggestedTags.forEach(tag => {
            const element = document.createElement('span');
            element.className = 'px-2 py-1 bg-gray-100 text-gray-600 rounded cursor-pointer hover:bg-gray-200';
            element.textContent = tag;
            element.onclick = () => copyTag(tag);
            container.appendChild(element);
        });
    }
}

function showLoading(show) {
    const loader = document.getElementById('loadingIndicator');
    const results = document.getElementById('tagResults');
    
    loader.style.display = show ? 'block' : 'none';
    if (show) {
        results.classList.add('hidden');
    }
} 