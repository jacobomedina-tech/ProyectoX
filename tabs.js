const articlesData = {
  relevant: [
    {
      title: 'Building a Lightweight Camunda Monitoring Dashboard: From Enterprise Pain to Open Source Solution',
      author: 'Jane Doe',
      date: '2024-06-01',
      tag: 'UI/UX',
      time: '7 min read',
      desc: 'Learn how to design a dashboard with dark mode and responsive layout using CSS Grid and Flexbox.',
      featured: true
    },
    {
      title: 'Flexbox vs Grid: When to Use Each',
      author: 'John Smith',
      date: '2024-05-20',
      tag: 'CSS',
      time: '5 min read',
      desc: 'Comparing Flexbox and Grid for modern web layouts. Pros, cons, and practical tips.'
    },
    {
      title: 'Semantic HTML for Accessibility',
      author: 'Alex Lee',
      date: '2024-05-15',
      tag: 'Accessibility',
      time: '4 min read',
      desc: 'How semantic tags improve accessibility and SEO. Best practices for developers.'
    }
  ],
  latest: [
    {
      title: 'Latest: AI in Web Development',
      author: 'Sam Green',
      date: '2024-06-05',
      tag: 'AI',
      time: '6 min read',
      desc: 'How AI is changing the way we build websites.'
    },
    {
      title: 'Latest: CSS Tricks for 2024',
      author: 'Lily Brown',
      date: '2024-06-04',
      tag: 'CSS',
      time: '5 min read',
      desc: 'New CSS features and how to use them.'
    }
  ],
  top: [
    {
      title: 'Top: JavaScript Performance Tips',
      author: 'Chris Blue',
      date: '2024-05-30',
      tag: 'JavaScript',
      time: '8 min read',
      desc: 'Make your JS code run faster with these tips.'
    },
    {
      title: 'Top: Accessibility Matters',
      author: 'Pat Red',
      date: '2024-05-28',
      tag: 'Accessibility',
      time: '7 min read',
      desc: 'Why accessibility should be a priority for developers.'
    }
  ]
};

const tabs = document.querySelectorAll('.tab');
const articlesList = document.querySelector('.articles-list');

function renderArticles(type) {
  const articles = articlesData[type] || [];
  articlesList.innerHTML = articles.map(article => `
    <article class="article-card${article.featured ? ' featured' : ''}">
      ${article.featured ? `<section class="featured-overlay">` : ''}
      <h2>${article.title}</h2>
      <section class="card-meta">
        <span>by <a href="#">${article.author}</a></span>
        <span>· ${article.date}</span>
        <span>· <a href="#" class="tag">${article.tag}</a></span>
        <span>· ${article.time}</span>
      </section>
      <p>${article.desc}</p>
      ${article.featured ? `</section>` : ''}
    </article>
  `).join('');
}

// Inicializa con Relevant
renderArticles('relevant');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderArticles(tab.textContent.trim().toLowerCase());
  });
});
