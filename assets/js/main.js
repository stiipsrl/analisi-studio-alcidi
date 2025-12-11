document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to tab buttons
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Remove active class from all tabs
            document.querySelectorAll('.tab-btn').forEach(btn => 
                btn.classList.remove('active')
            );
            document.querySelectorAll('.tab-content').forEach(content => 
                content.classList.remove('active')
            );
            
            // Add active class to clicked tab
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});