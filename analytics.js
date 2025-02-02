// Chart.js setup
document.addEventListener('DOMContentLoaded', function() {
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart')?.getContext('2d');
    if (performanceCtx) {
        new Chart(performanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Views',
                    data: [1000, 2000, 3500, 2800, 4200, 5000],
                    borderColor: 'rgb(59, 130, 246)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

    // Growth Chart
    const growthCtx = document.getElementById('growthChart')?.getContext('2d');
    if (growthCtx) {
        new Chart(growthCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Subscribers',
                    data: [100, 250, 400, 600, 850, 1200],
                    backgroundColor: 'rgb(147, 51, 234)'
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    // Engagement Chart
    const engagementCtx = document.getElementById('engagementChart')?.getContext('2d');
    if (engagementCtx) {
        new Chart(engagementCtx, {
            type: 'doughnut',
            data: {
                labels: ['Likes', 'Comments', 'Shares'],
                datasets: [{
                    data: [65, 20, 15],
                    backgroundColor: [
                        'rgb(59, 130, 246)',
                        'rgb(147, 51, 234)',
                        'rgb(234, 88, 12)'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    }
}); 