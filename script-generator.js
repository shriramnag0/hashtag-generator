// Script templates
const scriptTemplates = {
    tutorial: {
        intro: [
            "Hey everyone! Welcome back to [channel_name].",
            "In this tutorial, I'll show you exactly how to [topic].",
            "If you've been struggling with [topic], you're in the right place!"
        ],
        main: [
            "First, let's talk about why [topic] is important.",
            "Here are the key steps you need to follow:",
            "[key_points]",
            "Let me demonstrate each step in detail.",
            "A common mistake people make is [common_mistake]. Here's how to avoid it.",
            "Now, let's dive deeper into each step:",
            "1. [Step 1 Explanation]",
            "2. [Step 2 Explanation]",
            "3. [Step 3 Explanation]",
            "4. [Step 4 Explanation]",
            "5. [Step 5 Explanation]",
            "And finally, let's summarize what we've learned."
        ],
        outro: [
            "And that's how you [topic]!",
            "If you found this tutorial helpful, don't forget to like and subscribe.",
            "Drop a comment if you have any questions!",
            "Also, check out my other videos for more tips and tricks."
        ]
    },
    review: {
        intro: [
            "Today we're taking a detailed look at [topic].",
            "I've been using/testing this for [time_period], and here's what I think.",
            "Let's dive into the review!"
        ],
        main: [
            "Let's start with the pros:",
            "[pros]",
            "Now for the cons:",
            "[cons]",
            "Here's what you need to know about [key_feature].",
            "In this section, I'll also compare it with [competitor] to give you a better perspective.",
            "Finally, I'll share my personal experience and whether I recommend it."
        ],
        outro: [
            "Final verdict: [verdict]",
            "If you're interested in [topic], check the link in the description.",
            "Thanks for watching! Don't forget to subscribe for more reviews."
        ]
    },
    bugatti: {
        intro: [
            "Welcome to an exclusive look at the magnificent [topic].",
            "Today, we're exploring one of the most luxurious and powerful cars ever made.",
            "Get ready to experience pure automotive excellence!"
        ],
        main: [
            "Let's start with the breathtaking design:",
            "• Iconic Bugatti styling with modern sophistication",
            "• Handcrafted excellence in every detail",
            "• Exclusive materials and finishes",
            "\nUnder the hood:",
            "• Powerful W16 engine delivering incredible performance",
            "• State-of-the-art engineering",
            "• Cutting-edge technology",
            "\nThe driving experience:",
            "• Unmatched power and precision",
            "• Luxurious comfort meets racing performance",
            "• Exclusive features and customization options"
        ],
        outro: [
            "This Bugatti isn't just a car - it's a masterpiece of engineering and luxury.",
            "Make sure to subscribe for more exclusive supercar content!",
            "Leave a comment with your favorite Bugatti model!"
        ]
    },
    comedy: {
        intro: [
            "What's up everyone! 😂",
            "Get ready for the most hilarious take on [topic] you've ever seen!",
            "If you thought [topic] was serious business, think again!"
        ],
        main: [
            "Okay, picture this scenario:",
            "• The most ridiculous thing about [topic] is...",
            "• You won't believe what happens when...",
            "• Here's where it gets really funny...",
            "[key_points]",
            "\nBut wait, it gets even better!",
            "• The plot twist nobody expected",
            "• My hilarious experience with this",
            "• Epic fail moments and lessons learned 😅"
        ],
        outro: [
            "And that's how NOT to [topic] 😂",
            "If you enjoyed this comedic masterpiece, smash that like button!",
            "Comment below with your funny [topic] stories!"
        ]
    },
    romantic: {
        intro: [
            "Welcome to another beautiful day! ✨",
            "Today we're exploring the magical world of [topic]",
            "Get ready for some heartwarming moments and pure joy!"
        ],
        main: [
            "Let me share this beautiful journey with you:",
            "• The perfect setting for [topic]",
            "• Creating magical moments",
            "• Special touches that make it unforgettable",
            "[key_points]",
            "\nWhat makes this truly special:",
            "• The little details that matter",
            "• Adding personal touches",
            "• Making memories that last forever 💕"
        ],
        outro: [
            "I hope this inspired you to create your own magical moments!",
            "Share your beautiful [topic] experiences in the comments",
            "Don't forget to spread the love by liking and subscribing!"
        ]
    },
    dramatic: {
        intro: [
            "You won't BELIEVE what happened with [topic]!",
            "This could be the most INTENSE video I've ever made...",
            "What you're about to see will SHOCK you!"
        ],
        main: [
            "Here's the INCREDIBLE truth about [topic]:",
            "• The SHOCKING revelation",
            "• What they DON'T want you to know",
            "• The REAL story behind it all",
            "[key_points]",
            "\nBut that's not even the craziest part:",
            "• The MIND-BLOWING discovery",
            "• The UNBELIEVABLE outcome",
            "• The TRUTH finally revealed! 🤯"
        ],
        outro: [
            "This changes EVERYTHING we know about [topic]!",
            "Hit that subscribe button if you want more EXPLOSIVE content!",
            "Leave a comment with your reaction to this INCREDIBLE revelation!"
        ]
    }
};

// Add language templates
const languageTemplates = {
    hindi: {
        tutorial: {
            intro: [
                "नमस्कार दोस्तों! [channel_name] में आपका स्वागत है।",
                "आज हम सीखेंगे [topic] के बारे में।",
                "अगर आप [topic] से जूझ रहे हैं, तो यह वीडियो आपके लिए है!"
            ],
            main: [
                "सबसे पहले जानते हैं [topic] क्यों महत्वपूर्ण है।",
                "यहाँ कुछ महत्वपूर्ण बिंदु हैं:",
                "[key_points]",
                "चलिए हर स्टेप को डिटेल में समझते हैं।",
                "लोग अक्सर यह गलती करते हैं। आइए जानें कैसे बचें।"
            ],
            outro: [
                "तो यह था [topic] का पूरा गाइड!",
                "अगर वीडियो पसंद आई तो लाइक और सब्सक्राइब जरूर करें।",
                "कोई सवाल हो तो कमेंट्स में पूछें!"
            ]
        },
        bugatti: {
            intro: [
                "आज हम देखने जा रहे हैं शानदार [topic] को।",
                "यह है दुनिया की सबसे लग्जरी और पावरफुल कारों में से एक।",
                "तैयार हो जाइए ऑटोमोटिव एक्सीलेंस का अनुभव करने के लिए!"
            ],
            main: [
                "सबसे पहले देखते हैं इसका बेहतरीन डिज़ाइन:",
                "• बुगाट्टी का आइकॉनिक स्टाइल",
                "• हर डिटेल में परफेक्शन",
                "• एक्सक्लूसिव मटीरियल्स",
                "\nअब देखते हैं इंजन:",
                "• पावरफुल W16 इंजन",
                "• अत्याधुनिक इंजीनियरिंग",
                "• कटिंग-एज टेक्नोलॉजी"
            ],
            outro: [
                "यह बुगाट्टी सिर्फ एक कार नहीं, इंजीनियरिंग का मास्टरपीस है।",
                "ऐसी और एक्सक्लूसिव कारों के लिए चैनल को सब्सक्राइब करें!",
                "कमेंट्स में बताएं आपको कौन सी बुगाट्टी सबसे पसंद है!"
            ]
        }
    },
    spanish: {
        // Add Spanish templates
    },
    french: {
        // Add French templates
    }
};

// Generate script based on inputs
function generateScript() {
    const topic = document.getElementById('videoTopic').value;
    const type = document.getElementById('contentType').value;
    const duration = document.getElementById('duration').value;

    if (!topic) {
        alert('Please enter a video topic');
        return;
    }

    // Show results with animation
    showResults();

    // Generate title based on type and style
    let title = generateTitleByType(topic, type);
    let script = '';

    if (duration === 'long') {
        script = generateLongScript(topic, type);
    } else {
        script = generateShortScript(topic, type);
    }

    // Display title and script with typing effect
    const titleElement = document.getElementById('generatedTitle');
    typeText(titleElement, title);
    document.getElementById('generatedScript').textContent = script;
}

// Helper function to generate script section
function generateSection(templates, topic, keyPoints) {
    let section = templates.join('\n\n');
    
    // Replace placeholders
    section = section.replace(/\[topic\]/g, topic);
    section = section.replace(/\[channel_name\]/g, 'our channel');
    section = section.replace(/\[time_period\]/g, 'the past few weeks');
    
    // Handle key points
    if (section.includes('[key_points]') && keyPoints) {
        const points = keyPoints.split('\n')
            .filter(point => point.trim())
            .map(point => `• ${point.trim()}`)
            .join('\n');
        section = section.replace('[key_points]', points);
    }

    return section;
}

// Format script with proper spacing and styling
function formatScript(text) {
    return text.split('\n').map(line => {
        if (line.trim().startsWith('•')) {
            return `<div class="ml-4">${line}</div>`;
        }
        return `<div>${line}</div>`;
    }).join('');
}

// Copy script to clipboard
function copyScript() {
    const intro = document.getElementById('introText').innerText;
    const main = document.getElementById('mainContent').innerText;
    const outro = document.getElementById('outroText').innerText;
    
    const fullScript = `${intro}\n\n${main}\n\n${outro}`;
    
    navigator.clipboard.writeText(fullScript).then(() => {
        alert('Script copied to clipboard!');
    });
}

// Download script as text file
function downloadScript() {
    const intro = document.getElementById('introText').innerText;
    const main = document.getElementById('mainContent').innerText;
    const outro = document.getElementById('outroText').innerText;
    
    const fullScript = `VIDEO SCRIPT\n\nINTRODUCTION:\n${intro}\n\nMAIN CONTENT:\n${main}\n\nCALL TO ACTION:\n${outro}`;
    
    const blob = new Blob([fullScript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video-script.txt';
    a.click();
}

// Add these functions
function previewStyle(style) {
    document.getElementById('scriptStyle').value = style;
    generatePreview();
}

function generatePreview() {
    const style = document.getElementById('scriptStyle').value;
    const language = document.getElementById('scriptLanguage').value;
    const topic = document.getElementById('videoTopic').value || '[Your Topic]';
    
    let preview = '';
    switch(language) {
        case 'hindi':
            switch(style) {
                case 'comedy':
                    preview = `😂 तैयार हो जाइए ${topic} पर एक मज़ेदार वीडियो के लिए!`;
                    break;
                case 'romantic':
                    preview = `✨ ${topic} की खूबसूरत दुनिया में आपका स्वागत है`;
                    break;
                case 'dramatic':
                    preview = `🤯 ${topic} के बारे में एक चौंकाने वाला सच!`;
                    break;
                default:
                    preview = `${topic} का कंप्लीट गाइड`;
            }
            break;
        // Add other languages...
        default:
            // English previews...
            switch(style) {
                case 'comedy':
                    preview = `😂 Get ready for the most HILARIOUS take on ${topic}!`;
                    break;
                case 'romantic':
                    preview = `✨ Join me for a magical journey exploring ${topic}`;
                    break;
                case 'dramatic':
                    preview = `🤯 The SHOCKING truth about ${topic} revealed!`;
                    break;
                default:
                    preview = `How to master ${topic} - Complete Guide`;
            }
    }
    
    const previewElement = document.getElementById('stylePreview');
    if (previewElement) {
        previewElement.textContent = preview;
    }
}

function generateStyledSection(templates, topic, keyPoints, style, language) {
    let section = templates.join('\n\n');
    
    // Add style-specific formatting
    switch(style) {
        case 'comedy':
            section = addEmojis(section);
            break;
        case 'romantic':
            section = addHeartEmojis(section);
            break;
        case 'dramatic':
            section = addEmphasis(section);
            break;
    }
    
    // Replace placeholders based on language
    section = section.replace(/\[topic\]/g, topic);
    section = section.replace(/\[channel_name\]/g, getChannelName(language));
    section = section.replace(/\[key_points\]/g, formatKeyPoints(keyPoints, style, language));
    
    return section;
}

function addEmojis(text) {
    const emojis = ['😂', '🤣', '😅', '😆', '😊'];
    return text.split('\n').map(line => {
        if (Math.random() > 0.7) {
            return line + ' ' + emojis[Math.floor(Math.random() * emojis.length)];
        }
        return line;
    }).join('\n');
}

function addHeartEmojis(text) {
    const emojis = ['💕', '✨', '🌸', '💫', '💝'];
    return text.split('\n').map(line => {
        if (Math.random() > 0.7) {
            return line + ' ' + emojis[Math.floor(Math.random() * emojis.length)];
        }
        return line;
    }).join('\n');
}

function addEmphasis(text) {
    return text.split('\n').map(line => {
        if (Math.random() > 0.7) {
            return line.toUpperCase();
        }
        return line;
    }).join('\n');
}

// Helper function for channel name in different languages
function getChannelName(language) {
    switch(language) {
        case 'hindi':
            return 'हमारे चैनल';
        case 'spanish':
            return 'nuestro canal';
        case 'french':
            return 'notre chaîne';
        default:
            return 'our channel';
    }
}

// Helper function for formatting key points in different languages
function formatKeyPoints(keyPoints, style, language) {
    if (!keyPoints) return '';

    const points = keyPoints.split('\n').filter(point => point.trim());
    
    // Add language-specific bullet points
    const bullet = language === 'hindi' ? '•' : '•';
    
    return points.map(point => {
        let formattedPoint = `${bullet} ${point.trim()}`;
        if (style === 'dramatic') {
            formattedPoint = formattedPoint.toUpperCase();
        }
        return formattedPoint;
    }).join('\n');
}

function generateLongScript(topic, type) {
    // Use the scriptTemplates to generate a long script
    const template = scriptTemplates[type];
    const keyPoints = "1. Key Point 1\n2. Key Point 2\n3. Key Point 3"; // Example key points
    const commonMistake = "Not following the steps correctly"; // Example common mistake

    return `
        ${template.intro.join('\n')}
        
        ${template.main.join('\n').replace('[key_points]', keyPoints).replace('[common_mistake]', commonMistake)}
        
        ${template.outro.join('\n')}
    `;
}

function generateShortScript(topic, type) {
    // Use the scriptTemplates to generate a short script
    const template = scriptTemplates[type];
    return `
        ${template.intro.join('\n')}
        
        ${template.main.join('\n')}
        
        ${template.outro.join('\n')}
    `;
}

function generateTitleByType(topic, type) {
    // Implement the logic to generate a title based on the topic and type
    return `How to ${topic} - Complete Guide`;
}

function typeText(element, text) {
    let index = 0;
    const interval = 100; // Adjust the interval for typing effect

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, interval);
        }
    }

    type();
}

function showResults() {
    // Implement the logic to show results with animation
    // This is a placeholder and should be replaced with actual implementation
} 