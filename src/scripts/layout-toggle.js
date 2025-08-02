document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-layout-btn');
  const postList = document.getElementById('post-list');

  // Check for saved layout preference
  const savedLayout = localStorage.getItem('blogLayout');
  if (savedLayout) {
    postList.classList.remove('layout-single', 'layout-multi');
    postList.classList.add(savedLayout);
  } else {
    // Default to single layout if no preference is saved
    postList.classList.add('layout-single');
  }

  toggleButton.addEventListener('click', () => {
    if (postList.classList.contains('layout-single')) {
      postList.classList.remove('layout-single');
      postList.classList.add('layout-multi');
      localStorage.setItem('blogLayout', 'layout-multi');
    } else {
      postList.classList.remove('layout-multi');
      postList.classList.add('layout-single');
      localStorage.setItem('blogLayout', 'layout-single');
    }
  });
});