fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-40 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2 text-teal-400">${project.title}</h3>
          <p class="text-gray-300 text-sm mb-4">${project.description}</p>
          <a href="${project.link}" target="_blank" class="text-teal-400 hover:underline">View Project</a>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(error => console.error('Failed to load projects', error));
