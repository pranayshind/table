const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const close= document.getElementById('close');

// Toggle Sidebar
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle the 'X' animation
    sidebar.classList.toggle('open'); // Slide the sidebar in or out
    overlay.classList.toggle('active'); // Show or hide the overlay
});

// Close Sidebar on Overlay Click
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active'); // Reset the hamburger to default
    sidebar.classList.remove('open'); // Slide the sidebar out
    overlay.classList.remove('active'); // Hide the overlay
});

close.addEventListener('click',()=>{

    hamburger.classList.remove('active'); // Reset the hamburger to default
    sidebar.classList.remove('open'); // Slide the sidebar out
    overlay.classList.remove('active'); // Hide the overlay

})
