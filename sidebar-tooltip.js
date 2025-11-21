document.addEventListener('DOMContentLoaded', function() {
  const tooltipData = {
    DEV: {
      title: 'DEV Community',
      desc: 'A place for programmers to share ideas and grow.',
      img: 'imgs/devimg.png'
    },
    gamerforem: {
      title: 'Gamers Forem',
      desc: 'An inclusive community for gaming enthusiasts.',
      img: 'imgs/gamerforemimg.png'
    },
    future: {
      title: 'Future',
      desc: 'Discuss and keep up with software development.',
      img: 'imgs/futureimg.png'
    },
    openforem: {
      title: 'Open Forem',
      desc: 'Open source platform for building communities.',
      img: 'imgs/openforemimg.png'
    },
    musicforem: {
      title: 'Music Forem',
      desc: 'A space for music lovers and creators.',
      img: 'imgs/musicforemimg.png'
    },
    vibecodingforem: {
      title: 'Vibe Coding Forem',
      desc: 'Share your coding vibes and connect.',
      img: 'imgs/vibeimg.png'
    },
    popcornmoviestv: {
      title: 'Popcorn Movies TV',
      desc: 'For movie and TV enthusiasts.',
      img: 'imgs/moviesimg.png'
    },
    desingcommunity: {
      title: 'Design Community',
      desc: 'A place for designers to collaborate.',
      img: 'imgs/desingimg.png'
    },
    golfforem: {
      title: 'Golf Forem',
      desc: 'Community for golf lovers.',
      img: 'imgs/golfimg.png'
    },
    securityforem: {
      title: 'Security Forem',
      desc: 'Discuss cybersecurity and best practices.',
      img: 'imgs/securityimg.png'
    },
    scaleforem: {
      title: 'Scale Forem',
      desc: 'Scaling software and infrastructure.',
      img: 'imgs/scaleforem.png'
    },
    foremcore: {
      title: 'Forem Core',
      desc: 'Core community for Forem platform.',
      img: 'imgs/scaleforem.png'
    },
    cryptoforem: {
      title: 'Crypto Forem',
      desc: 'All about cryptocurrencies and blockchain.',
      img: 'imgs/scaleforem.png'
    }
  };

  const iconItems = document.querySelectorAll('.sidebar-left .icon-item');
  const tooltip = document.getElementById('sidebar-tooltip');

  iconItems.forEach(item => {
    item.addEventListener('mouseenter', e => {
      const name = item.getAttribute('data-name');
      if (name === 'plus' || name === 'dots') {
        tooltip.style.display = 'none';
        return;
      }
      const data = tooltipData[name] || { title: name, desc: '', img: '' };
      tooltip.innerHTML = `
        ${data.img ? `<img src="${data.img}" alt="${data.title}" style="width:100%;height:110px;object-fit:cover;display:block;margin:0;padding:0;border-radius:0;">` : ''}
        <div class="tooltip-title">${data.title}</div>
        <button class="tooltip-follow">Follow</button>
        <div class="tooltip-desc">${data.desc}</div>
      `;
      const rect = item.getBoundingClientRect();
      tooltip.style.top = rect.top + window.scrollY + 'px';
      tooltip.style.left = rect.right + 10 + 'px';
      tooltip.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
});
