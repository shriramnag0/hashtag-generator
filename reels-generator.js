// Short video templates and ideas
const shortTemplates = {
    trending: {
        transitions: [
            "Zoom Transition",
            "Spin Effect",
            "Quick Cut",
            "Slide Effect",
            "Flash Transition"
        ],
        effects: [
            "Text Pop-up",
            "Floating Emojis",
            "Screen Split",
            "Glitch Effect",
            "Color Flash"
        ],
        music: [
            "Trending Song 1",
            "Viral Beat 2",
            "Popular Track 3",
            "Hit Music 4",
            "Trending Sound 5"
        ]
    },
    story: {
        structure: [
            "Hook → Problem → Solution",
            "Before → After → Result",
            "Question → Story → Answer",
            "Challenge → Process → Success"
        ],
        hooks: [
            "POV: When...",
            "Watch till the end...",
            "You won't believe...",
            "Here's what happened..."
        ]
    },
    tutorial: {
        steps: [
            "Quick Intro (3 sec)",
            "Problem Statement (5 sec)",
            "Solution Steps (20-25 sec)",
            "Final Result (2 sec)"
        ],
        captions: [
            "Step 1: Start with...",
            "Next up...",
            "Here's how...",
            "Final step..."
        ]
    }
};

// Generate short video script
function generateShort() {
    const topic = document.getElementById('topic').value;
    const category = document.getElementById('category').value;
    const contentType = document.querySelector('div[data-selected="true"]')?.getAttribute('data-type') || 'trending';
    
    if (!topic) {
        alert('Please enter a topic');
        return;
    }

    showLoading(true);
    setTimeout(() => {
        const script = generateScript(topic, contentType, category);
        const visuals = generateVisualGuide(contentType);
        const music = suggestMusic(category);
        
        displayResults(script, visuals, music);
        showLoading(false);
    }, 1000);
}

function generateScript(topic, type, category) {
    let script = '';
    
    switch(type) {
        case 'trending':
            script = `🎥 Trending Short Script: ${topic}

📱 Opening Hook (0-3s):
"Wait for it..." or "You need to see this..."

🎬 Main Content (4-25s):
• Start with attention-grabbing visual
• Show key moments/transitions
• Add trending music overlay
• Include text pop-ups for emphasis

🔥 Ending (26-30s):
• Show final reveal/result
• Call-to-action overlay
• Use viral sound effect

💡 Tips:
• Keep transitions quick and smooth
• Use trending effects
• Add engaging text overlays
• Match music beats with transitions`;
            break;
            
        case 'story':
            script = `📖 Story Format Script: ${topic}

🎬 Opening (0-5s):
"Let me tell you about ${topic}..."

📝 Story Structure (6-25s):
1. Set up the situation
2. Present the challenge
3. Show the journey
4. Reveal the outcome

🎯 Ending (26-30s):
• Emotional payoff
• Key lesson/message
• Call to action

💡 Storytelling Tips:
• Build suspense
• Use emotional music
• Add personal touch
• Keep viewers engaged`;
            break;
            
        case 'tutorial':
            script = `📝 Tutorial Script: ${topic}

👋 Intro (0-3s):
"Here's how to ${topic} in 30 seconds!"

📚 Steps (4-25s):
1. Quick overview
2. Key steps breakdown
3. Important tips
4. Common mistakes to avoid

✨ Finale (26-30s):
• Show final result
• Quick recap
• Call to action

💡 Tutorial Tips:
• Keep instructions clear
• Use text overlays
• Show close-up shots
• Add helpful arrows/markers`;
            break;
    }
    
    return script;
}

function generateVisualGuide(type) {
    const visuals = [];
    const transitions = shortTemplates.trending.transitions;
    const effects = shortTemplates.trending.effects;
    
    // Generate 3 random visual suggestions
    for (let i = 0; i < 3; i++) {
        visuals.push({
            transition: transitions[Math.floor(Math.random() * transitions.length)],
            effect: effects[Math.floor(Math.random() * effects.length)]
        });
    }
    
    return visuals;
}

function suggestMusic(category) {
    const musicSuggestions = [
        {
            name: "Trending Beat 1",
            duration: "30s",
            type: "Upbeat",
            mood: "Energetic"
        },
        {
            name: "Viral Sound 2",
            duration: "30s",
            type: "Electronic",
            mood: "Exciting"
        },
        {
            name: "Popular Track 3",
            duration: "30s",
            type: "Pop",
            mood: "Fun"
        }
    ];
    
    return musicSuggestions;
}

function displayResults(script, visuals, music) {
    // Display script
    document.getElementById('scriptText').textContent = script;
    
    // Display visual guide
    const visualGuide = document.getElementById('visualGuide');
    visualGuide.innerHTML = '';
    visuals.forEach(visual => {
        const visualElement = document.createElement('div');
        visualElement.className = 'p-4 bg-white rounded-lg shadow';
        visualElement.innerHTML = `
            <h4 class="font-bold text-gray-800 mb-2">Visual Suggestion</h4>
            <p class="text-gray-600">Transition: ${visual.transition}</p>
            <p class="text-gray-600">Effect: ${visual.effect}</p>
        `;
        visualGuide.appendChild(visualElement);
    });
    
    // Display music suggestions
    const musicContainer = document.getElementById('musicSuggestions');
    musicContainer.innerHTML = '';
    music.forEach(track => {
        const musicElement = document.createElement('div');
        musicElement.className = 'p-4 bg-white rounded-lg shadow';
        musicElement.innerHTML = `
            <h4 class="font-bold text-gray-800 mb-2">${track.name}</h4>
            <p class="text-gray-600">Duration: ${track.duration}</p>
            <p class="text-gray-600">Type: ${track.type}</p>
            <p class="text-gray-600">Mood: ${track.mood}</p>
        `;
        musicContainer.appendChild(musicElement);
    });
    
    // Show results
    document.getElementById('shortResult').classList.remove('hidden');
}

function selectContentType(type) {
    // Remove selection from all cards
    document.querySelectorAll('[data-type]').forEach(card => {
        card.setAttribute('data-selected', 'false');
        card.classList.remove('border-red-500');
        card.classList.add('border-red-200');
    });
    
    // Select clicked card
    const selectedCard = document.querySelector(`[data-type="${type}"]`);
    selectedCard.setAttribute('data-selected', 'true');
    selectedCard.classList.remove('border-red-200');
    selectedCard.classList.add('border-red-500');
}

async function copyScript() {
    const script = document.getElementById('scriptText').textContent;
    try {
        await navigator.clipboard.writeText(script);
        const button = document.querySelector('#shortResult button');
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy Script';
        }, 2000);
    } catch (err) {
        alert('Failed to copy script');
    }
}

function showLoading(show) {
    const loader = document.getElementById('loadingIndicator');
    const results = document.getElementById('shortResult');
    
    loader.style.display = show ? 'block' : 'none';
    if (show) {
        results.classList.add('hidden');
    }
} 