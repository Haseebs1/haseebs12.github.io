// Video Modal Functionality
function openVideoModal(videoId) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeVideo');
    
    // Set the video source
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    
    // Show the modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeVideo');
    
    // Stop the video
    iframe.src = '';
    
    // Hide the modal
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for video modal
document.querySelector('.close-video-modal').addEventListener('click', closeVideoModal);
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

// Close with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('videoModal').classList.contains('active')) {
        closeVideoModal();
    }
});