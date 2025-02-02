// Canvas setup
const canvas = document.getElementById('thumbnailCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// Set canvas size for YouTube thumbnail (1280x720)
canvas.width = 1280;
canvas.height = 720;

// Thumbnail templates
const templates = {
    gaming: {
        background: 'gradient',
        textPosition: 'center',
        effects: ['glow', 'shadow'],
        colors: ['#ff0000', '#000000']
    },
    tech: {
        background: 'blur',
        textPosition: 'left',
        effects: ['overlay', 'depth'],
        colors: ['#0066ff', '#ffffff']
    },
    vlog: {
        background: 'image',
        textPosition: 'bottom',
        effects: ['filter', 'text-shadow'],
        colors: ['#ff6600', '#ffffff']
    }
};

// Add these new templates
const thumbnailTemplates = {
    // Existing templates...
    
    // Cooking/Recipe Template
    cooking: {
        background: 'gradient',
        gradientColors: ['#ff6b6b', '#ffd93d'],
        textPosition: 'center',
        elements: [
            {
                type: 'emoji',
                content: '👨‍🍳',
                position: { x: 100, y: 100 },
                size: 72
            },
            {
                type: 'text',
                content: 'DELICIOUS RECIPE',
                position: { x: 640, y: 200 },
                style: {
                    font: 'bold 72px "Montserrat"',
                    color: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 4
                }
            }
        ]
    },

    // Fitness Template
    fitness: {
        background: 'gradient',
        gradientColors: ['#4f46e5', '#06b6d4'],
        textPosition: 'center',
        elements: [
            {
                type: 'emoji',
                content: '💪',
                position: { x: 100, y: 100 },
                size: 72
            },
            {
                type: 'text',
                content: 'WORKOUT GUIDE',
                position: { x: 640, y: 200 },
                style: {
                    font: 'bold 72px "Bebas Neue"',
                    color: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 4
                }
            }
        ]
    },

    // Travel Template
    travel: {
        background: 'gradient',
        gradientColors: ['#0ea5e9', '#14b8a6'],
        textPosition: 'center',
        elements: [
            {
                type: 'emoji',
                content: '✈️',
                position: { x: 100, y: 100 },
                size: 72
            },
            {
                type: 'text',
                content: 'TRAVEL VLOG',
                position: { x: 640, y: 200 },
                style: {
                    font: 'bold 72px "Oswald"',
                    color: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 4
                }
            }
        ]
    },

    // Education Template
    education: {
        background: 'gradient',
        gradientColors: ['#8b5cf6', '#d946ef'],
        textPosition: 'center',
        elements: [
            {
                type: 'emoji',
                content: '📚',
                position: { x: 100, y: 100 },
                size: 72
            },
            {
                type: 'text',
                content: 'STUDY TIPS',
                position: { x: 640, y: 200 },
                style: {
                    font: 'bold 72px "Anton"',
                    color: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 4
                }
            }
        ]
    },

    // Bugatti Template
    bugatti: {
        background: 'gradient',
        gradientColors: ['#000000', '#1a1a1a'],
        textPosition: 'center',
        elements: [
            {
                type: 'text',
                content: 'BUGATTI',
                position: { x: 640, y: 150 },
                style: {
                    font: 'bold 84px "Bebas Neue"',
                    color: '#ffffff',
                    stroke: '#c4a484',  // Gold color for luxury feel
                    strokeWidth: 4
                }
            },
            {
                type: 'text',
                content: 'LUXURY & POWER',
                position: { x: 640, y: 250 },
                style: {
                    font: 'bold 48px "Montserrat"',
                    color: '#c4a484',  // Gold color
                    stroke: '#000000',
                    strokeWidth: 2
                }
            },
            {
                type: 'emoji',
                content: '🏎️',
                position: { x: 100, y: 100 },
                size: 72
            }
        ]
    }
};

// Text styling state
const textStyle = {
    bold: true,
    italic: false,
    stroke: true,
    shadow: false
};

// Drawing functions
function addText(text, x, y, size = '48px', color = '#ffffff') {
    ctx.font = `bold ${size} Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    
    // Add stroke for better visibility
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
}

function addImage(imageUrl) {
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = imageUrl;
}

function addEmoji(emoji, x, y, size = 48) {
    ctx.font = `${size}px serif`;
    ctx.fillText(emoji, x, y);
}

// Effects
function applyEffect(effectName) {
    switch(effectName) {
        case 'glow':
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#ffffff';
            break;
        case 'blur':
            ctx.filter = 'blur(5px)';
            break;
        case 'brightness':
            ctx.filter = 'brightness(120%)';
            break;
    }
}

// Export functions
async function exportThumbnail() {
    const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
    
    // Create download link
    const link = document.createElement('a');
    link.download = 'thumbnail.jpg';
    link.href = dataUrl;
    link.click();
}

// Event listeners
document.getElementById('addTextBtn')?.addEventListener('click', () => {
    const text = prompt('Enter text:');
    if (text) {
        addText(text, canvas.width/2, canvas.height/2);
    }
});

document.getElementById('addImageBtn')?.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            addImage(event.target.result);
        };
        reader.readAsDataURL(file);
    };
    input.click();
});

// Template application
function applyTemplate(templateName) {
    const template = templates[templateName];
    if (!template) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Apply template settings
    if (template.background === 'gradient') {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, template.colors[0]);
        gradient.addColorStop(1, template.colors[1]);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Apply template effects
    template.effects.forEach(effect => applyEffect(effect));
}

// Clear canvas function
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f3f4f6'; // Light gray background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Initialize canvas
function initCanvas() {
    canvas.width = 1280;  // YouTube thumbnail width
    canvas.height = 720;  // YouTube thumbnail height
    clearCanvas();
}

// Toggle text style
function toggleTextStyle(style) {
    textStyle[style] = !textStyle[style];
    const btn = document.getElementById(`${style}Btn`);
    if (textStyle[style]) {
        btn.classList.add('bg-blue-200');
    } else {
        btn.classList.remove('bg-blue-200');
    }
}

// Update addText function
function addText() {
    const text = document.getElementById('textInput').value;
    const color = document.getElementById('textColor').value;
    const size = document.getElementById('fontSize').value;
    const fontFamily = document.getElementById('fontFamily').value;
    
    if (!text) return;
    
    // Build font string
    let fontString = '';
    if (textStyle.italic) fontString += 'italic ';
    if (textStyle.bold) fontString += 'bold ';
    fontString += `${size}px "${fontFamily}"`;
    
    ctx.font = fontString;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add shadow if enabled
    if (textStyle.shadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
    } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }
    
    // Add stroke if enabled
    if (textStyle.stroke) {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = size / 12; // Proportional stroke width
        ctx.strokeText(text, canvas.width/2, canvas.height/2);
    }
    
    // Draw text
    ctx.fillText(text, canvas.width/2, canvas.height/2);
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
}

// Add text drag functionality
let isDragging = false;
let dragText = null;
let dragOffset = { x: 0, y: 0 };

canvas.addEventListener('mousedown', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    // Check if click is on text
    if (ctx.isPointInPath(x, y)) {
        isDragging = true;
        dragText = {
            text: document.getElementById('textInput').value,
            x: x,
            y: y
        };
        dragOffset.x = x - dragText.x;
        dragOffset.y = y - dragText.y;
    }
});

canvas.addEventListener('mousemove', function(e) {
    if (isDragging && dragText) {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width) - dragOffset.x;
        const y = (e.clientY - rect.top) * (canvas.height / rect.height) - dragOffset.y;
        
        // Clear and redraw
        clearCanvas();
        dragText.x = x;
        dragText.y = y;
        redrawCanvas();
    }
});

canvas.addEventListener('mouseup', function() {
    isDragging = false;
    dragText = null;
});

// Add text effects
function addTextEffect(effect) {
    const text = document.getElementById('textInput').value;
    if (!text) return;
    
    switch(effect) {
        case 'outline':
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 8;
            ctx.strokeText(text, canvas.width/2, canvas.height/2);
            break;
            
        case 'glow':
            ctx.shadowColor = '#ffff00';
            ctx.shadowBlur = 20;
            ctx.fillText(text, canvas.width/2, canvas.height/2);
            ctx.shadowColor = 'transparent';
            break;
            
        case 'gradient':
            const gradient = ctx.createLinearGradient(
                canvas.width/2 - 100,
                canvas.height/2 - 50,
                canvas.width/2 + 100,
                canvas.height/2 + 50
            );
            gradient.addColorStop(0, '#ff0000');
            gradient.addColorStop(1, '#00ff00');
            ctx.fillStyle = gradient;
            ctx.fillText(text, canvas.width/2, canvas.height/2);
            break;
    }
}

// Handle image upload
document.getElementById('imageInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Calculate scaling to cover the canvas while maintaining aspect ratio
                const scale = Math.max(
                    canvas.width / img.width,
                    canvas.height / img.height
                );
                
                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;
                
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Update font size display
document.getElementById('fontSize').addEventListener('input', function(e) {
    document.getElementById('fontSizeValue').textContent = e.target.value;
});

// Initialize canvas when page loads
document.addEventListener('DOMContentLoaded', initCanvas); 