// Description templates for different categories and styles
const descriptionTemplates = {
    gaming: {
        professional: `🎮 Welcome to another exciting gaming video! Today we're exploring [TITLE].

[DESCRIPTION]

📌 KEY TIMESTAMPS:
[TIMESTAMPS]

🔥 FEATURED CONTENT:
- Game: [GAME_NAME]
- Platform: [PLATFORM]
- Mode: [MODE]

💡 QUICK LINKS:
- Full Playlist: [PLAYLIST_LINK]
- Gaming Gear: [GEAR_LINK]

[SOCIAL_LINKS]

[HASHTAGS]

[DISCLAIMER]`,
        casual: `Hey gamers! 👋 Back with another awesome video!

Let's dive into [TITLE] - you're gonna love this one! 🎮

[DESCRIPTION]

⏰ COOL MOMENTS:
[TIMESTAMPS]

[SOCIAL_LINKS]

Don't forget to smash that like button and subscribe! 🔔
[HASHTAGS]`,
    },
    tech: {
        professional: `📱 Welcome to this comprehensive review/tutorial of [TITLE]

[DESCRIPTION]

⌚ TIMESTAMPS:
[TIMESTAMPS]

🔍 SPECIFICATIONS:
[SPECS]

📦 WHERE TO BUY:
[PURCHASE_LINKS]

[SOCIAL_LINKS]

[HASHTAGS]

[DISCLAIMER]`,
        informative: `Tech enthusiasts, welcome back! 🚀

Today we're diving deep into [TITLE]. Let's explore everything you need to know!

[DESCRIPTION]

📍 CHAPTER MARKERS:
[TIMESTAMPS]

[SOCIAL_LINKS]

[HASHTAGS]`
    }
};

// Hashtag templates for different categories
const hashtagTemplates = {
    gaming: ["#Gaming", "#GamePlay", "#Gamer", "#Gaming2024", "#GamingCommunity"],
    tech: ["#Tech", "#Technology", "#Review", "#TechNews", "#TechReview"],
    education: ["#Education", "#Learning", "#Tutorial", "#HowTo", "#LearnOnline"],
    entertainment: ["#Entertainment", "#Fun", "#Viral", "#Trending", "#YouTube"],
    music: ["#Music", "#MusicVideo", "#Musician", "#NewMusic", "#MusicCover"],
    howto: ["#HowTo", "#Tutorial", "#DIY", "#Tips", "#Tricks"],
    vlog: ["#Vlog", "#DailyVlog", "#VlogLife", "#Lifestyle", "#YouTuber"],
    review: ["#Review", "#ProductReview", "#Unboxing", "#Testing", "#Honest"]
};

// Disclaimer templates
const disclaimerTemplates = {
    standard: "⚠️ DISCLAIMER: This video is created for informational purposes only.",
    affiliate: "⚠️ DISCLAIMER: Some links provided are affiliate links. I may earn a small commission at no extra cost to you.",
    sponsored: "⚠️ DISCLAIMER: This video contains sponsored content. All opinions expressed are my own.",
    gaming: "⚠️ DISCLAIMER: This is a gaming video for entertainment purposes.",
    educational: "⚠️ DISCLAIMER: Educational content. Please consult professionals for specific advice."
};

let timestampCount = 0;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add initial timestamp fields
    addTimestamp();
    addTimestamp();
    
    // Add event listeners for category changes
    document.getElementById('category').addEventListener('change', updateTemplateOptions);
});

function addTimestamp() {
    const timestampsList = document.getElementById('timestampsList');
    const timestampDiv = document.createElement('div');
    timestampDiv.className = 'flex gap-4';
    timestampDiv.innerHTML = `
        <input type="text" placeholder="00:00" 
            class="w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
        <input type="text" placeholder="Section title" 
            class="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
        <button onclick="removeTimestamp(this)" 
            class="px-3 py-2 text-red-600 hover:bg-red-100 rounded-lg transition">
            ✕
        </button>
    `;
    timestampsList.appendChild(timestampDiv);
    timestampCount++;
}

function removeTimestamp(button) {
    if (timestampCount > 1) {
        button.parentElement.remove();
        timestampCount--;
    }
}

function generateDescription() {
    const title = document.getElementById('videoTitle').value.trim();
    if (!title) {
        alert('Please enter a video title');
        return;
    }

    showLoading(true);

    setTimeout(() => {
        const category = document.getElementById('category').value;
        const style = document.getElementById('style').value;
        const description = generateDescriptionText(title, category, style);
        
        displayDescription(description);
        updateSEOAnalysis(description);
        showLoading(false);
    }, 1000);
}

function generateDescriptionText(title, category, style) {
    let template = descriptionTemplates[category]?.[style] || descriptionTemplates.gaming.professional;
    
    // Replace basic placeholders
    template = template.replace(/\[TITLE\]/g, title);
    
    // Add timestamps if enabled
    if (document.getElementById('includeTimestamps').checked) {
        const timestamps = generateTimestamps();
        template = template.replace('[TIMESTAMPS]', timestamps);
    } else {
        template = template.replace(/📌 KEY TIMESTAMPS:.*?\n\n/s, '');
        template = template.replace('[TIMESTAMPS]', '');
    }
    
    // Add social links if enabled
    if (document.getElementById('includeLinks').checked) {
        const socialLinks = generateSocialLinks();
        template = template.replace('[SOCIAL_LINKS]', socialLinks);
    } else {
        template = template.replace('[SOCIAL_LINKS]', '');
    }
    
    // Add hashtags if enabled
    if (document.getElementById('includeHashtags').checked) {
        const hashtags = generateHashtags(category);
        template = template.replace('[HASHTAGS]', hashtags);
    } else {
        template = template.replace('[HASHTAGS]', '');
    }
    
    // Add disclaimer if enabled
    if (document.getElementById('includeDisclaimer').checked) {
        const disclaimer = disclaimerTemplates[category] || disclaimerTemplates.standard;
        template = template.replace('[DISCLAIMER]', disclaimer);
    } else {
        template = template.replace('[DISCLAIMER]', '');
    }
    
    return template;
}

function generateTimestamps() {
    let timestamps = '';
    const timestampInputs = document.querySelectorAll('#timestampsList > div');
    
    timestampInputs.forEach(div => {
        const time = div.querySelector('input[type="text"]:first-child').value;
        const title = div.querySelector('input[type="text"]:last-of-type').value;
        if (time && title) {
            timestamps += `${time} - ${title}\n`;
        }
    });
    
    return timestamps;
}

function generateSocialLinks() {
    let links = '\n📱 FOLLOW ME ON SOCIAL MEDIA:\n';
    const instagram = document.getElementById('instagramLink').value;
    const twitter = document.getElementById('twitterLink').value;
    
    if (instagram) links += `Instagram: ${instagram}\n`;
    if (twitter) links += `Twitter: ${twitter}\n`;
    
    return links + '\n';
}

function generateHashtags(category) {
    const tags = hashtagTemplates[category] || hashtagTemplates.gaming;
    return '\n' + tags.join(' ') + '\n';
}

function displayDescription(description) {
    const container = document.getElementById('descriptionText');
    container.textContent = description;
    document.getElementById('descriptionResult').classList.remove('hidden');
}

function updateSEOAnalysis(description) {
    // Update character count
    const charCount = description.length;
    document.getElementById('charCount').textContent = `${charCount}/5000`;
    
    // Calculate keyword density
    const keywords = document.getElementById('keywords').value.split(',')
        .map(k => k.trim().toLowerCase())
        .filter(k => k.length > 0);
    
    if (keywords.length > 0) {
        const words = description.toLowerCase().split(/\s+/);
        const keywordCount = words.filter(word => 
            keywords.some(k => word.includes(k))
        ).length;
        const density = Math.round((keywordCount / words.length) * 100);
        document.getElementById('keywordDensity').textContent = `${density}%`;
    }
    
    // Calculate SEO score
    const seoScore = calculateSEOScore(description, keywords);
    document.getElementById('seoScore').textContent = `${seoScore}%`;
}

function calculateSEOScore(description, keywords) {
    let score = 0;
    
    // Length check (ideal: 500-1500 characters)
    if (description.length >= 500 && description.length <= 1500) score += 30;
    else if (description.length > 1500) score += 20;
    else if (description.length > 200) score += 10;
    
    // Keyword usage
    if (keywords.length > 0) {
        const words = description.toLowerCase().split(/\s+/);
        const hasKeywords = keywords.some(k => 
            words.some(w => w.includes(k))
        );
        if (hasKeywords) score += 20;
    }
    
    // Has timestamps
    if (description.includes('TIMESTAMPS') || description.includes('⏰')) score += 10;
    
    // Has social links
    if (description.includes('FOLLOW ME') || description.includes('📱')) score += 10;
    
    // Has hashtags
    if (description.includes('#')) score += 10;
    
    // Has formatting (emojis, line breaks)
    if (/[^\x00-\x7F]/.test(description) && description.includes('\n')) score += 20;
    
    return Math.min(100, score);
}

async function copyDescription() {
    const description = document.getElementById('descriptionText').textContent;
    
    try {
        await navigator.clipboard.writeText(description);
        showCopyFeedback();
    } catch (err) {
        alert('Failed to copy description');
    }
}

function showCopyFeedback() {
    const button = document.querySelector('#descriptionResult button');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('bg-green-200', 'text-green-700');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-200', 'text-green-700');
        button.classList.add('bg-green-100', 'text-green-600');
    }, 2000);
}

function showLoading(show) {
    const loader = document.getElementById('loadingIndicator');
    const results = document.getElementById('descriptionResult');
    
    loader.style.display = show ? 'block' : 'none';
    if (show) {
        results.classList.add('hidden');
    }
} 