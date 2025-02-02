// Hashtag templates and data
const hashtagTemplates = {
    instagram: {
        tech: ["#tech", "#technology", "#innovation", "#coding", "#programming", "#developer", "#software", "#techie"],
        fashion: ["#fashion", "#style", "#ootd", "#fashionista", "#trendy", "#fashionblogger", "#streetstyle"],
        food: ["#food", "#foodie", "#foodporn", "#instafood", "#foodphotography", "#foodblogger", "#yummy"],
        travel: ["#travel", "#wanderlust", "#travelgram", "#instatravel", "#adventure", "#traveling", "#explore"],
        fitness: ["#fitness", "#gym", "#workout", "#fit", "#health", "#training", "#motivation", "#fitnessmotivation"],
        business: ["#business", "#entrepreneur", "#success", "#marketing", "#startup", "#entrepreneurship", "#smallbusiness"]
    },
    tiktok: {
        tech: ["#techtok", "#coding", "#programmer", "#tech", "#learnontiktok", "#technology", "#computerscience"],
        fashion: ["#fashiontiktok", "#outfit", "#style", "#fashion", "#ootd", "#clothinghacks", "#fashionhacks"],
        food: ["#foodtiktok", "#recipe", "#cooking", "#food", "#foodie", "#chef", "#cookinghacks"],
        travel: ["#traveltiktok", "#travel", "#adventure", "#wanderlust", "#explore", "#tiktoktravel", "#vacation"],
        fitness: ["#fitnesstiktok", "#workout", "#gym", "#fitness", "#exercise", "#fitcheck", "#gains"],
        business: ["#smallbusiness", "#entrepreneur", "#business", "#sidehustle", "#marketing", "#businesstiktok", "#money"]
    },
    youtube: {
        tech: [
            "#tech", "#technology", "#techreview", "#technews", "#coding", 
            "#programming", "#developer", "#software", "#tutorial", "#howto",
            "#techyoutube", "#techtutorial", "#techguide", "#techeducation"
        ],
        gaming: [
            "#gaming", "#gamer", "#gameplay", "#gamingchannel", "#gamingyoutube",
            "#videogames", "#game", "#streamer", "#gaming2024", "#gamingcommunity",
            "#gaminghighlights", "#gaminglife", "#pcgaming", "#consolegaming"
        ],
        education: [
            "#education", "#learning", "#study", "#tutorial", "#onlinelearning",
            "#educational", "#teacher", "#student", "#learn", "#knowledge",
            "#educationalcontent", "#teaching", "#lessons", "#learnwithme"
        ],
        entertainment: [
            "#entertainment", "#funny", "#fun", "#comedy", "#youtuber",
            "#video", "#vlog", "#youtube", "#content", "#viral",
            "#trending", "#youtubechannel", "#subscribe", "#contentcreator"
        ],
        music: [
            "#music", "#musician", "#song", "#singer", "#musicvideo",
            "#artist", "#rap", "#hiphop", "#musicproducer", "#newmusic",
            "#musicchannel", "#musiccover", "#livemusic", "#musicartist"
        ],
        howto: [
            "#howto", "#tutorial", "#diy", "#tips", "#tricks",
            "#guide", "#learn", "#stepbystep", "#howtodo", "#educational",
            "#tutorialvideo", "#learning", "#education", "#skills"
        ],
        vlog: [
            "#vlog", "#vlogger", "#dailyvlog", "#vlogging", "#youtuber",
            "#vloglife", "#vlogchannel", "#dailylife", "#lifestyle", "#lifevlog",
            "#vlogmas", "#vlogsquad", "#vlogger2024", "#vloggingchannel"
        ],
        review: [
            "#review", "#productreview", "#honest", "#unboxing", "#testing",
            "#reviewer", "#honest", "#youtubereview", "#reviewchannel", "#newproduct",
            "#reviews", "#producttest", "#recommendation", "#buying guide"
        ]
    }
};

const trendingHashtags = {
    tech: ["#ai", "#chatgpt", "#web3", "#crypto", "#nft"],
    fashion: ["#sustainable", "#vintage", "#y2k", "#aesthetic"],
    food: ["#healthyrecipes", "#veganfood", "#homemade", "#foodhacks"],
    travel: ["#digitalnomad", "#traveltips", "#bucketlist", "#travellife"],
    fitness: ["#wellness", "#mentalhealth", "#selfcare", "#mindfulness"],
    business: ["#passiveincome", "#investing", "#personalfinance", "#sidehustle"],
    youtube: [
        "#shorts", "#youtubeshorts", "#newvideo", "#subscribe",
        "#viral", "#trending", "#youtubechannel", "#youtuber2024"
    ],
    gaming_youtube: [
        "#gaming", "#livestream", "#gamingcommunity", "#esports",
        "#gaminghighlights", "#gamingclips", "#gamingmoments"
    ],
    tech_youtube: [
        "#techreview", "#unboxing", "#newtech", "#technews",
        "#latesttech", "#techyoutube", "#techtutorial"
    ]
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hashtag slider
    const slider = document.getElementById('hashtagSlider');
    const countDisplay = document.getElementById('hashtagCount');
    
    slider.addEventListener('input', function() {
        countDisplay.textContent = this.value;
    });

    // Load initial trending hashtags
    loadTrendingHashtags();
});

function generateHashtags() {
    const topic = document.getElementById('postTopic').value.trim();
    if (!topic) {
        alert('Please enter a topic');
        return;
    }

    showLoading(true);

    setTimeout(() => {
        const platform = document.getElementById('platform').value;
        const industry = document.getElementById('industry').value;
        const count = parseInt(document.getElementById('hashtagSlider').value);

        const hashtags = generateHashtagSet(topic, platform, industry, count);
        displayHashtags(hashtags);
        updateAnalytics(hashtags);
        showLoading(false);
    }, 1000);
}

function generateHashtagSet(topic, platform, industry, count) {
    let hashtags = new Set();
    
    // Add base hashtags from templates
    const baseHashtags = hashtagTemplates[platform][industry];
    baseHashtags.forEach(tag => hashtags.add(tag));

    // Add trending hashtags if option is checked
    if (document.getElementById('includeTrending').checked) {
        const trending = trendingHashtags[industry];
        trending.forEach(tag => hashtags.add(tag));
        
        // Add YouTube-specific trending tags if platform is YouTube
        if (platform === 'youtube') {
            trendingHashtags.youtube.forEach(tag => hashtags.add(tag));
            
            // Add category-specific YouTube tags
            if (industry === 'tech') {
                trendingHashtags.tech_youtube.forEach(tag => hashtags.add(tag));
            } else if (industry === 'gaming') {
                trendingHashtags.gaming_youtube.forEach(tag => hashtags.add(tag));
            }
        }
    }

    // Add topic-specific hashtags
    hashtags.add(`#${topic.replace(/\s+/g, '')}`);
    hashtags.add(`#${platform}${topic.replace(/\s+/g, '')}`);
    
    // Add YouTube-specific format tags if platform is YouTube
    if (platform === 'youtube') {
        hashtags.add('#shorts');
        hashtags.add('#youtubeshorts');
        hashtags.add('#newvideo');
        hashtags.add('#subscribe');
        
        // Add category-specific format tags
        if (industry === 'howto') {
            hashtags.add('#howtovideo');
            hashtags.add('#tutorial');
        } else if (industry === 'vlog') {
            hashtags.add('#dailyvlog');
            hashtags.add('#vloglife');
        }
    }

    // Add location if checked
    if (document.getElementById('includeLocation').checked) {
        hashtags.add('#india');
        hashtags.add('#delhi');
        hashtags.add('#mumbai');
        if (platform === 'youtube') {
            hashtags.add('#indianyoutuber');
            hashtags.add('#indiancontent');
        }
    }

    // Convert to array and limit to requested count
    return Array.from(hashtags).slice(0, count);
}

function displayHashtags(hashtags) {
    const container = document.getElementById('hashtagsList');
    container.innerHTML = '';
    
    hashtags.forEach(hashtag => {
        const tag = document.createElement('div');
        tag.className = 'px-3 py-1 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 cursor-pointer';
        tag.textContent = hashtag;
        tag.onclick = () => copyHashtag(hashtag);
        container.appendChild(tag);
    });

    document.getElementById('hashtagResults').classList.remove('hidden');
}

function updateAnalytics(hashtags) {
    // Update reach potential
    const reach = Math.floor(Math.random() * 1000000);
    document.getElementById('reachPotential').textContent = `${(reach/1000).toFixed(1)}K`;

    // Update trending score
    const score = Math.floor(Math.random() * 40) + 60;
    document.getElementById('trendingScore').textContent = `${score}/100`;

    // Update competition level
    const levels = ['Low', 'Medium', 'High'];
    const competition = levels[Math.floor(Math.random() * levels.length)];
    document.getElementById('competitionLevel').textContent = competition;
}

async function copyHashtag(hashtag) {
    try {
        await navigator.clipboard.writeText(hashtag);
        showCopyFeedback();
    } catch (err) {
        alert('Failed to copy hashtag');
    }
}

async function copyAllHashtags() {
    const hashtags = Array.from(document.getElementById('hashtagsList').children)
        .map(div => div.textContent)
        .join(' ');
    
    try {
        await navigator.clipboard.writeText(hashtags);
        showCopyFeedback();
    } catch (err) {
        alert('Failed to copy hashtags');
    }
}

function showCopyFeedback() {
    const button = document.querySelector('#hashtagResults button');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('bg-green-100', 'text-green-600');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-100', 'text-green-600');
        button.classList.add('bg-purple-100', 'text-purple-600');
    }, 2000);
}

function loadTrendingHashtags() {
    const container = document.getElementById('trendingHashtags');
    const industry = document.getElementById('industry').value;
    
    trendingHashtags[industry].forEach(tag => {
        const element = document.createElement('span');
        element.className = 'px-2 py-1 bg-gray-100 text-gray-600 rounded';
        element.textContent = tag;
        container.appendChild(element);
    });
}

function showLoading(show) {
    const loader = document.getElementById('loadingIndicator');
    const results = document.getElementById('hashtagResults');
    
    loader.style.display = show ? 'block' : 'none';
    if (show) {
        results.classList.add('hidden');
    }
} 