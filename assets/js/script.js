'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Project Modal functionality
const projectData = {
  project1: {
    title: "Millet Dehusking Machine",
    category: "Machine Development",
    images: ["./assets/images/prototype.png"],
    description: `
      <h4>Overview:</h4>
      <p>An innovative machine designed to automate the dehusking process of millet.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Automated dehusking mechanism</li>
        <li>Processing capacity: 50kg/hour</li>
        <li>Energy-efficient operation</li>
      </ul>
    `,
    technologies: ["Mechanical Engineering", "AutoCAD"]
  },
 
  project3: {
    title: "Auto Recycling Machine",
    category: "Machine Development",
    images: ["./assets/images/project-3.jpg"],
    description: `
      <h4>Overview:</h4>
      <p>Automated system for processing recyclable materials.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Automated sorting mechanism</li>
        <li>High-capacity processing</li>
        <li>Sustainable design</li>
      </ul>
    `,
    technologies: ["Automation", "Sustainable Engineering"]
  },
  coffeeRoaster: {
    title: "Coffee Roasting Machine",
    category: "Machine Development",
    images: [
      "./assets/images/coffee.png",
    ],
    description: `
      <h4>Overview:</h4>
      <p>Automated coffee roasting machine for small-scale producers.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Temperature control system</li>
        <li>2kg batch capacity</li>
        <li>Digital monitoring interface</li>
        <li>Energy-efficient design</li>
      </ul>
    `,
    technologies: ["Temperature Control", "Automation", "IoT"]
  },
 Khuwamaker: {
    title: "Khuwa Making Machine",
    category: "Machine Development",
    images: [
      "./assets/images/khuwa.png",
     
    ],
    description: `
      <h4>Overview:</h4>
      <p>Automated coffee roasting machine for small-scale producers.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Temperature control system</li>
        <li>2kg batch capacity</li>
        <li>Digital monitoring interface</li>
        <li>Energy-efficient design</li>
      </ul>
    `,
    technologies: ["Temperature Control", "Automation", "IoT"]
  },
  Paperplate: {
    title: "Paperplate Making Machine",
    category: "Machine Development",
    images: [
      "./assets/images/paper.png",
    
    ],
    description: `
      <h4>Overview:</h4>
      <p>Automated coffee roasting machine for small-scale producers.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Temperature control system</li>
        <li>2kg batch capacity</li>
        <li>Digital monitoring interface</li>
        <li>Energy-efficient design</li>
      </ul>
    `,
    technologies: ["Temperature Control", "Automation", "IoT"]
  }

};

//Educational Toolkits
projectData.plantcell = {
  title: "Plant Cell & Animal Cell",
  category: "Educational Toolkits",
  images: [
    "./assets/images/plant.png"
  ],
  description: `
    <h4>Overview:</h4>
    <p>Machine learning model for image classification and recognition.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>Deep learning architecture</li>
      <li>Real-time processing</li>
      <li>98% accuracy rate</li>
    </ul>
  `,
  technologies: ["Python", "TensorFlow", "OpenCV"]
};
projectData.clockperiodictable = {
  title: "Clock Periodic Table",
  category: "Educational Toolkits",
  images: [
    "./assets/images/periodic.png"
  ],
  description: `
    <h4>Overview:</h4>
    <p>Machine learning model for image classification and recognition.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>Deep learning architecture</li>
      <li>Real-time processing</li>
      <li>98% accuracy rate</li>
    </ul>
  `,
  technologies: ["Python", "TensorFlow", "OpenCV"]
};


// Computing Project Example


projectData.diabetes = {
  title: "Diabetes Prediction System",
  category: "Computing",
  images: [
    "./assets/images/ml-project-1.jpg",
    "./assets/images/ml-project-2.jpg"
  ],
  description: `
    <h4>Overview:</h4>
    <p>Machine learning model for image classification and recognition.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>Deep learning architecture</li>
      <li>Real-time processing</li>
      <li>98% accuracy rate</li>
    </ul>

     <a href="https://github.com/your-username/diabetes-prediction" target="_blank" class="github-link">
      <button class="github-button">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="github-logo">
        View on GitHub
      </button>
    </a>
  `,
  technologies: ["Python", "TensorFlow", "OpenCV"]
};

projectData.ecommerce = {
  title: "Purano Kapda E-commerce Website",
  category: "Computing",
  images: [
    "./assets/images/ml-project-1.jpg",
    "./assets/images/ml-project-2.jpg"
  ],
  description: `
    <h4>Overview:</h4>
    <p>Machine learning model for image classification and recognition.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>Deep learning architecture</li>
      <li>Real-time processing</li>
      <li>98% accuracy rate</li>
    </ul>
  `,
  technologies: ["Python", "TensorFlow", "OpenCV"]
};

projectData.mlProject = {
  title: "Socialbook",
  category: "Computing",
  images: [
    "./assets/images/ml-project-1.jpg",
    "./assets/images/ml-project-2.jpg"
  ],
  description: `
    <h4>Overview:</h4>
    <p>Machine learning model for image classification and recognition.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>Deep learning architecture</li>
      <li>Real-time processing</li>
      <li>98% accuracy rate</li>
    </ul>
  `,
  technologies: ["Python", "TensorFlow", "OpenCV"]
};
// Art & Dance Project Example
projectData.dancePerformance = {
  title: "Contemporary Dance Performance",
  category: "Art & Dance",
  images: [
    "./assets/images/dance-1.jpg",
    "./assets/images/dance-2.jpg"
  ],
  description: `
    <h4>Event Details:</h4>
    <p>Solo contemporary dance performance at National Theater.</p>
    
    <h4>Highlights:</h4>
    <ul>
      <li>Choreographed original piece</li>
      <li>Featured in national dance festival</li>
      <li>Fusion of traditional and modern styles</li>
    </ul>
  `,
  technologies: ["Contemporary Dance", "Choreography", "Performance Arts"]
};

// Other Projects (NGO/Government) Example
projectData.navigoNepal = {
  title: "Navigo Nepal Initiative",
  category: "Other Projects",
  images: [
    "./assets/images/navigo-1.jpg",
    "./assets/images/navigo-2.jpg"
  ],
  description: `
    <h4>Overview:</h4>
    <p>Educational initiative bridging equity in exposure and opportunities.</p>
    
    <h4>Achievements:</h4>
    <ul>
      <li>Trained 1,200+ students</li>
      <li>Established 50+ school clubs</li>
      <li>Conducted training for 400+ teachers</li>
      <li>Launched digital classrooms</li>
    </ul>
  `,
  technologies: ["Education", "Social Impact", "Community Development"]
};

// Function to generate project cards
function generateProjectCards() {
  const projectList = document.querySelector('.project-list');
  if (!projectList) return; // Safety check
  
  // Clear existing content
  projectList.innerHTML = '';
  
  // Generate cards for each project
  Object.keys(projectData).forEach(projectId => {
    const project = projectData[projectId];
    const projectCard = `
      <li class="project-item active" data-filter-item data-category="${project.category.toLowerCase()}">
        <div class="project-card" onclick="openProjectModal('${projectId}')">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${project.category}</p>
        </div>
      </li>
    `;
    projectList.innerHTML += projectCard;
  });

  // Setup filter buttons after generating cards
  setupFilterButtons();
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', generateProjectCards);

// Modal functions
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const project = projectData[projectId];
  
  if (!project) return;

  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h3>${project.title}</h3>
    <div class="project-gallery">
      ${project.images.map(img => `
        <img src="${img}" alt="${project.title}" loading="lazy">
      `).join('')}
    </div>
    <div class="project-details">
      <div class="project-description">
        ${project.description}
      </div>
      <div class="project-tech">
        ${project.technologies.map(tech => `
          <span class="tech-tag">${tech}</span>
        `).join('')}
      </div>
    </div>
  `;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target == modal) {
    closeProjectModal();
  }
}

// Add this to your existing JavaScript file
function setupFilterButtons() {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const projectItems = document.querySelectorAll('[data-filter-item]');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');

      // Get the filter category from button text
      const filterCategory = this.textContent.toLowerCase().trim();

      // Filter projects
      projectItems.forEach(item => {
        const itemCategory = item.dataset.category.toLowerCase();
        
        if (filterCategory === 'all') {
          item.classList.add('active');
        } else {
          if (itemCategory === filterCategory) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });
    });
  });
}

// Add this to your existing JavaScript
const blogPosts = {
  blog1: {
    title: "The Impact of AI in Education",
    date: "March 15, 2024",
    category: "Education",
    thumbnail: "./assets/images/blog-1.jpg",
    content: `
      <div class="blog-article">
        <h1>The Impact of AI in Education</h1>
        <div class="blog-meta">
          <span>March 15, 2024</span>
          <span>Education</span>
        </div>
        
        <div class="blog-content">
          <p>In recent years, artificial intelligence has transformed the way we approach education...</p>

          <h2>1. Personalized Learning</h2>
          <p>AI-powered systems can adapt to each student's learning pace and style...</p>

          <h2>2. Automated Assessment</h2>
          <p>Teachers can now focus more on individual student needs...</p>

          <h2>3. Future Implications</h2>
          <p>As we look ahead, the integration of AI in education will continue to evolve...</p>
        </div>
      </div>
    `
  },
  blog2: {
    title: "Sustainable Machine Development",
    date: "March 20, 2024",
    category: "Technology",
    thumbnail: "./assets/images/blog-2.jpg",
    content: `
      <div class="blog-article">
        <h1>Sustainable Machine Development</h1>
        <div class="blog-meta">
          <span>March 20, 2024</span>
          <span>Technology</span>
        </div>
        
        <div class="blog-content">
          <p>Your article content here...</p>
          <h2>Key Points</h2>
          <p>More content...</p>
        </div>
      </div>
    `
  },
  blog3: {
    title: "Hi",
    date: "March 20, 2024",
    category: "Technology",
    thumbnail: "./assets/images/blog-2.jpg",
    content: `
      <div class="blog-article">
        <h1>On process</h1>
        <div class="blog-meta">
          <span>March 20, 2024</span>
          <span>Technology</span>
        </div>
        
        <div class="blog-content">
          <p>Your article content here...</p>
          <h2>Key Points</h2>
          <p>More content...</p>
        </div>
      </div>
    `
  }
};


// Function to open blog post
function openBlogPost(postId) {
  const post = blogPosts[postId];
  if (!post) return;

  // Create a new window with the blog content
  const blogWindow = window.open('', '_blank');
  
  blogWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${post.title}</title>
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #1e1e1e;
          color: #ffffff;
        }
        
        h1 {
          color: #ffdb70;
          font-size: 2.5em;
          margin-bottom: 20px;
        }
        
        h2 {
          color: #ffdb70;
          margin-top: 30px;
        }
        
        .blog-meta {
          color: #cccccc;
          margin-bottom: 30px;
        }
        
        .blog-meta span {
          margin-right: 20px;
        }
        
        .blog-content {
          font-size: 1.1em;
        }
        
        p {
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      ${post.content}
    </body>
    </html>
  `);
}

// Update your blog post HTML to use this function
document.querySelectorAll('.blog-post-item a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const postId = this.getAttribute('data-post-id');
    openBlogPost(postId);
  });
});