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
    images: ["./assets/images/PROTOTYPE.png"],
    description: `
      <h4>Overview:</h4>
      <p>The Millet Dehusking Machine is an innovative device designed to streamline the process of removing the tough outer husk from millet grains. Millet, a vital cereal grain consumed widely in regions like Nepal, requires dehusking before it can be used for consumption or further processing. Traditionally, this process has been labor-intensive, time-consuming, and inefficient, often leading to significant grain loss. The Millet Dehusking Machine addresses these challenges by 
      offering a modern solution that enhances productivity, improves grain quality, and reduces manual labor. By developing the Millet Dehusking Machine, I aim to provide a solution that enhances the efficiency and quality of millet processing. This innovation not only improves the productivity of millet farmers but also contributes to the overall economic development of the region by enabling the production of high-quality millet for domestic consumption and export.</p>
      
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
    title: "Auto Plastic Recycling Machine",
    category: "Machine Development",
    images: ["./assets/images/recycler.png"],
    description: `
      <h4>Overview:</h4>
      <p>This automated plastic recycling machine is designed to transform plastic waste into functional products like brooms. Its fully automated process ensures efficiency, precision, and minimal manual intervention, making it ideal for industrial or small-scale recycling operations. 
      The automation integrates pressing, heating, extruding, cooling, and assembly seamlessly into a single workflow.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Fully Automated Workflow: Reduces the need for manual operation while maintaining precision.</li>


<li>High Production Efficiency: Capable of processing large volumes of plastic in shorter timeframes.</li>
<li>Energy Optimization: Automated mechanisms are designed to minimize energy usage.</li>
<li>Customizable Output Settings: Allows adjustments to thread size, extrusion speed, and broom dimensions.
</li>
        <li>Smart Temperature Control: Ensures uniform melting without overheating or degradation of plastic.</li>
        <li>Integrated Thread Spooling: Automatically collects and stores threads for consistent output.</li>

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
      <p>The Coffee Roasting Machine is a state-of-the-art innovation designed to automate and enhance the coffee roasting process. Developed with precision and efficiency in mind, this machine caters to the growing demand for high-quality roasted coffee in Nepal and beyond. Its primary function is to transform green coffee beans into roasted beans, unlocking the rich flavors and aromas essential for brewing. It is equipped with advanced temperature control sensors, allowing operators to achieve precise roast profiles ranging from light to dark, depending on customer preferences. The user-friendly interface provides real-time data on temperature, roast duration, and bean development stages, making it accessible to both novice and expert roasters.
The machine is designed to handle small to medium batch sizes, making it ideal for local coffee producers, cafes, and cooperatives looking to scale their operations. Its durable construction, energy efficiency, and ease of maintenance further enhance its appeal as a practical and reliable solution for Nepal’s burgeoning coffee industry. By offering greater control over the roasting process, this machine empowers coffee producers to deliver consistently high-quality coffee, contributing to the growth of Nepal's coffee sector and positioning local producers in competitive domestic and international markets.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Precise Temperature Control: Enables manual adjustment of roasting temperature for optimal flavor development.</li>
<li>Durable Drum Design: Ensures even heat distribution for consistent roasting.</li>
<li>Adjustable Drum Speed: Allows control over the rotation speed to achieve desired roast profiles.</li>
<li>Efficient Heat Source: Designed for energy-efficient roasting while maintaining consistent heat.</li>
<li>Cooling System: Manual cooling tray or mechanism to cool beans immediately after roasting.</li>
<li>Chaff Collection: Integrated system to collect husks and debris during the roasting process.</li>
<li>Compact and Portable: Lightweight design for small-scale or home-based roasting operations.</li>
<li>User-Friendly Interface: Easy-to-use controls for beginners and experts alike.</li>
       
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
      <p>The Khuwa-Making Machine is an innovative solution developed at Nepal's National Innovation Center to 
      revolutionize the process of producing Khuwa, a staple dairy product in South Asian cuisine.
       Traditionally made through labor-intensive methods involving wood-fired stoves and constant stirring,
        Khuwa production faced challenges such as high costs, low efficiency, resource scarcity, and environmental impact.
        This machine automates the process, featuring an efficient LPG-based heating mechanism, continuous stirring for uniform thickening, and precise temperature controls to prevent burning. Made from durable, food-grade materials, the machine processes up to 120 liters of milk per batch and incorporates a semi-rotational stirring system for enhanced consistency. Addressing the issues of traditional production, the machine reduces operational costs, improves productivity, and ensures eco-friendliness. This innovation has already transformed Khuwa production for many, supporting local businesses and preserving cultural culinary practices.</p>
      
      <h4>Key Features:</h4>
      <ul>
      
        <li>1.Heating Mechanism: Efficient heating systems, using LPG gas often to rapidly evaporate water from the milk.</li>
        <li>2.Stirring Mechanism: Continuous stirring to prevent milk from sticking to the vessel and to ensure even thickening.</li>
        <li>3.Temperature Control: Precise temperature control to maintain optimal conditions for thickening milk without burning it.</li>
        </ul>
        <li>4.Material: Made from food-grade materials, often mild steel, to ensure hygiene and durability.</li>
        
        <li>5.Capacity: Effective processing from 50-120 liters of milk in one go.
<li>6.Semi-rotation: The bearing feature in the Khuwa making machine allows for the semi-rotation of the pot.</li>
        
      
        
    `,
    technologies: ["Automation", "IoT","Digital Timer and Display","Overload Protection Technology"]
  },
  Paperplate: {
    title: "Paperplate Making Machine",
    category: "Machine Development",
    images: [
      "./assets/images/paper.png",
    
    ],
    description: `
      <h4>Overview:</h4>
      <p>The <i>Duna Tapari</i>(paper plate)Making Machine is a cutting-edge solution designed to revolutionize the production of Nepal’s traditional leaf plates, Duna and Tapari. Crafted with precision, the machine seamlessly integrates modern technology with cultural heritage, ensuring the mass production of eco-friendly, biodegradable plates while preserving their traditional value. Powered by a hydraulic pressure system, the machine molds and presses sal tree leaves into durable, uniform shapes, guaranteeing consistent quality in every batch. Its innovative double molding mechanism enhances efficiency, allowing for a higher production rate compared to traditional manual methods.
Designed for sustainability and scalability, the machine simplifies the labor-intensive process of leaf plate production. It ensures that the cultural authenticity of Duna and Tapari is maintained, while addressing the growing demand for environmentally friendly alternatives to plastic. With its user-friendly operation and emphasis on quality, the Duna Tapari Making Machine is empowering local communities, supporting eco-conscious businesses, and contributing to global efforts in reducing plastic pollution.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Temperature control system</li>
        <li>Manual Operation: Operates without automation, suitable for small-scale production.</li>
<li>Die Molding System: Includes replaceable dies for creating various plate sizes and designs.</li>
<li>High-Quality Press Mechanism: Provides consistent pressure to form sturdy plates.</li>
<li>Energy-Efficient Heating: Integrated heating system for molding biodegradable paper or leaves.</li>
<li>Adjustable Plate Thickness: Allows flexibility in producing plates of varying thickness.</li>
<li>Compact and Portable Design: Easy to set up and transport, ideal for rural and small business use.</li>
<li>Eco-Friendly Material Compatibility: Supports the use of biodegradable and eco-friendly materials such as leaves or recycled paper.</li>
<li>Durable Build: Made with robust materials to ensure longevity and reliability in demanding conditions.</li>
      </ul>
    `,
    technologies: ["Temperature Control", "Automation", "IoT"]
  },
  educationalToolkits: {
    title: "Plant Cell & Animal Cell",
  category: "Educational Toolkits",
  images: [
    "./assets/images/plant.png"
  ],
    description: `
   
    <h4>Overview:</h4>
    <p>This toolkit is a 3D interactive model designed for teaching and visualizing the structure of animal and plant cells. It provides students and educators with a hands-on approach to exploring cellular components, making complex biological concepts easier to understand.</p>
    
  `
    ,
    technologies: ["Education", "Instructional Design", "Practical Learning"]
  }
};

//Educational Toolkits

projectData.clockperiodictable = {
  title: "Clock Periodic Table",
  category: "Educational Toolkits",
  images: [
    "./assets/images/periodic.png"
  ],
  description: `
    <h4>Overview:</h4>
    <p>The Periodic Table Clock is a unique educational tool and timepiece that creatively integrates the periodic table of elements into its design. It serves as both a functional clock and a visually engaging way to learn about chemical elements.</p>
    
    
  ` ,
  technologies: ["Education", "Instructional Design", "Practical Learning"]
};


// Computing Project Example


projectData.diabetes = {
  title: "Diabetes Prediction System",
  category: "Computing",
  images: [
    "./assets/images/diabetes.png"
  ],
  description: `
    <h4>Overview:</h4>
    <p>The Diabetes Prediction System is designed to predict the likelihood of an individual having diabetes based on key health metrics. Built using Python, the system utilizes machine learning algorithms to analyze parameters like glucose levels, blood pressure, BMI, and more. By processing medical data, it provides early warnings and insights to support preventive healthcare.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>Deep learning architecture</li>
      <li>Real-time processing</li>
      <li>98% accuracy rate</li>
    </ul>

     <a href="https://github.com/anupamnyaupane4/Diabetes-Prediction-system" target="_blank" class="github-link">
      <button class="github-button">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="github-logo">
        View on GitHub
      </button>
    </a>
  `,
  technologies: ["Python", "Pandas", "Numpy"] 
};

projectData.ecommerce = {
  title: "Purano Kapda E-commerce Website",
  category: "Computing",
  images: [
    "./assets/images/purano.png"
  ],
  description: `
    <h4>Overview:</h4>
    <p>The Purano Kapda E-commerce Website is a platform dedicated to promoting sustainable fashion by enabling users to buy, sell, or donate pre-loved clothes.
     The website encourages the reuse of clothing, reducing waste and supporting an eco-friendly lifestyle.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>User-friendly interface for seamless browsing and transactions.
</li>
      <li>Integrated donation option for charitable organizations.</li>
      <li>
Secure payment gateway and real-time order tracking.</li>
    </ul>
    <a href="https://github.com/anupamnyaupane4/Purano-Kapda-Eccomerce-Website-for-second-hand-clothes" target="_blank" class="github-link">
      <button class="github-button">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="github-logo">
        View on GitHub
      </button>
    </a>
  `,
  technologies: ["HTML", "Javascript", "CSS"]
};

projectData.socialbook = {
  title: "Socialbook",
  category: "Computing",
  images: [
    "./assets/images/socialbook.png"
  ],
  description: `
    <h4>Overview:</h4>
    <p>SocialBook is a mock social networking platform inspired by Facebook, created as a learning project to master full-stack web development. 
    The website simulates core social media functionalities, offering a hands-on experience in building and managing dynamic web applications.</p>
    
    <h4>Key Features:</h4>
    <ul>
      <li>User authentication with secure login and registration.

</li>
      <li>Newsfeed displaying user posts with like and comment features.</li>
      <li>Profile creation, friend connections, and real-time messaging.</li>
    </ul>
    <a href="https://github.com/anupamnyaupane4/Socialbook" target="_blank" class="github-link">
      <button class="github-button">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="github-logo">
        View on GitHub
      </button>
    </a>
  `,
  technologies: ["Python", "TensorFlow", "OpenCV"]
};
// Art & Dance Project Example
/* 
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
*/
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
  
  if (!project) {
    console.log('Project not found:', projectId); // Debug line
    return;
  }

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
    title: "Sikhara Style Temple Architecture of Kathmandu",
    date: "March 15, 2023",
    category: "Education",
    thumbnail: "./assets/images/sikhar.png",
    content: `
      <div class="blog-article">
        <h1>Sikhara Style Temple Architecture of Kathmandu</h1>
        <div class="blog-meta">
          <span>March 15, 2023</span>
          <span>Education</span>
        </div>
        
        <div class="blog-content">
           <h2> Background of Kathmandu valley</h2>
          <p>Nepal is a country which has more temples than houses, more gods and goddesses than people, and
more festivals than days in a year (Kirkpatrick, 1793: 153). Based on extensive research by scholars such
as Satya Mohan Joshi, D.R. Regmi, Sudarshan Raj Tiwari, Mary Slusser, Niels Gutschow, William J.
Kirkpatrick, and Toni Hagen, Nepal has garnered worldwide recognition for both its tangible and
intangible cultural heritage. Kathmandu is the capital city of Nepal. Kathmandu Valley, situated in the
central hilly region of Nepal, represents a bowl-shaped terrain with an extraordinary legacy of art,
architecture, religion, and civilization. The traditional architectural heritage of the valley particularly its
temple architecture, has long captivated researchers and scholars globally. Among its distinctive
architectural styles, the multi-tiered and Shikhara styles stand prominently. This article examines the
Shikhara style temple architecture of Kathmandu Valley, exploring its historical development,
architectural characteristics, and cultural significance. While the Shikhara style originated from the
southern influence, local artisans and craftsmen incorporated indigenous elements, creating a unique
architectural identity. These temples, abundantly found at river banks, junctions, palace complexes, and
ancient residential areas, serve not only as centers of socio-religious activities but also enhance the
aesthetic value of their surroundings. The existence of these age-old practices and monuments bears
witness to valleys rich cultural heritage and especially the valley's architectural ingenuity.</p>

          <h2>Background of Kathmandu Valley</h2>
          <p>The valley's formation during the Pleistocene period resulted in successive terraces visible today,
identified through varying water levels of the ancient lake and east-west oriented ridges (Gutschow,
2011:35). Its unique geographical isolation, protected by rugged topography, allowed it to flourish as a
cultural and architectural center, largely undisturbed by external invasions (Tiwari, 2013:6).
The architectural evolution of Kathmandu Valley was significantly enriched by cultural exchanges
through trade routes and pilgrimages. Waves of migration from both northern and southern regions
brought diverse architectural influences, including the Shikhara style from the south, which was
masterfully integrated with local building traditions (Regmi, 2058:24). This synthesis is particularly
evident in the valley's Shikhara temples, where indigenous craftsmanship and local materials were
combined with the southern architectural form to create a distinctive Nepalese interpretation. The
intermingling of these architectural traditions has created a unique heritage landscape where Shikhara
temples stand as testament to the valley's cultural and architectural adaptability.</p>

          <h2>Shikhara Architecture</h2>
          <p>Architecture, in its essence, embodies multiple dimensions - simultaneously existing as art and science,
process and product, concept and reality. As Shukla (2008:53) articulates, it represents one of
civilization's fundamental hallmarks, evolving alongside human development. The complexity of Nepali
temple architecture, particularly, reflects the intricate interweaving of religious and cultural elements
into a cohesive architectural expression (Bernier, 1978:8). Temple architecture holds sacred significance,characterized in the Taittirya Brahmana as "the place for the meeting and marriage of heaven and
earth," where cosmic dimensions materialize in human scale (Kramrish, 1967:7).
Nepal's Hindu temple architecture traditionally manifests in three distinct forms: the indigenous
'Pagoda' style, the 'Shikhara' style influenced by Indian architecture of the 13-14th century CE, and the
later 'Gumbaj' style, adopted during the Rana period in the 19th century, reflecting Mausoleum
architectural influences. The term 'Shikhara,' derived from Sanskrit, literally translates to "pointed tops,"
drawing parallel to the Himalayan peaks and divine abodes in Hindu cosmology. The architectural style,
also known as 'roofless' architecture, evolved from rudimentary bamboo structures to sophisticated
stone and brick edifices. Korn (2014:11) defines a Shikhara as a "four-sided pyramid with parabolic
instead of straight edges," positioned above the garbhagriha (main sanctum). Notably, historical records
in the Gopal Raj Bamsawali suggest that this architectural form may have developed in response to
heavy snowfall in the Kathmandu Valley.
While the precise origins of Shikhara temples in the Kathmandu Valley remain debatable, archaeological
evidence, including semi-ruined stone Shikharas in the Pashupati compound, suggests their existence
during the Licchavi period. The oldest documented Shikhara, dating to the 15th century AD during
Yaksha Malla's reign (1428-82 AD), stands in Bhaktapur (Slusser 1982:147-148). Gutschow (2011:51)
notes that the brick towers of Jaganath and Narasimha Temples marked a significant revival of this
architectural style in the 16th century.
A critical examination reveals distinct regional variations. The Karnali zone's Shikhara temples,
constructed by the Khasa Dynasty's Malla Kings (13-14th century AD), demonstrate stronger Indian
influences through their 'ardha mandapas' (Sharma, 2012:253). In contrast, the Kathmandu Valley's
later temples exhibit a more localized interpretation, incorporating indigenous materials, craftsmanship,
and philosophical elements. The style's popularity peaked between 1637-1742, with approximately two-
thirds of known Shikharas constructed during this period (Korn, 2014:20). Gutschow (2011:516)
documents nearly 100 Shikhara temples in the Valley and its vicinity, representing various evolutionary
stages of this architectural form.
The Evolution of Sikhara Temple Architecture in the Kathmandu Valley reveals distinct developmental
stages, characterized by structures predominantly constructed of brick with partial plastering. The
fundamental architectural elements of early Nepali Sikhara temples comprise several distinctive
features:
The temple's foundation consists of a modest platform supporting the garbhagriha (main sanctum),
which is characterized by its compact, cubic form. This sanctum is notably austere, featuring a
windowless design and unadorned surfaces. Access to the deity chamber is limited to a single entrance,
leading into an equally modest square interior space. Rising above the garbhagriha, the defining
element of these temples is the Sikhara - a tapering tower with distinctive parabolic contours. The
transition between the spire and the cella is articulated through horizontal decorative elements. The
Sikhara's façade exhibits a sophisticated system of vertical divisions known as rathas, occurring in
configurations of three (tri-ratha), five (pancha-ratha), seven (sapta-ratha), or nine (nava-ratha) vertical
planes. The structure culminates in a finial (gajur) crafted from copper or gilt bronze, comprising several
elements: an amalaka (ribbed circular disc), surmounted by a ghanta (bell-shaped component),
occasionally featuring a kalasa-shaped element positioned above a secondary, smaller amalaka, and
ultimately crowned by the ratna (jewel).The architectural evolution of Nepali Sikhara temples can be categorized into six distinct typologies, with
an additional special variant:
Type I: Exemplified by the Talasimath temple at Kirtipur and the Ganesh temple at Bholachen Tole,
Bhaktapur, this represents the most fundamental expression of Sikhara architecture.
Type II: This variant enhances the basic form with a projecting portico, supported by wooden or stone
pillars, emphasizing the temple entrance. A distinctive feature is the addition of a burja (turret) in the
form of a miniature shrine above the portico. The Anantapur and Pratapur shrines at Syambhunath
exemplify this architectural development.
Type III: This form introduces four cardinal porticos, creating a cruciform ground plan. Each portico is
crowned with a burja, extending the façade's vertical articulation. The entrance sequence is enhanced
by guardian lions positioned on the approaching steps. The Mahadev temple at Durbar Square,
Bhaktapur, stands as a quintessential example.
Type IV: Distinguished by its elevated stepped plinth, this type incorporates all elements of Type III while
adding a circumambulatory passage (pradakshinapatha). This covered arcade, supported by decorative
stone columns, represents an integration of indigenous Nepalese pagoda architectural elements,
marking a departure from Indian influences. Notable examples include the Narayan temple at Ikhalakhu
tole, Patan, and the Vatsala Durga Temple at Durbar Square, Bhaktapur.
Type V: This variant elaborates upon Type IV through two distinct modifications:
 The addition of four miniature towers at the Sikhara's base corners, complementing the existing
burjas
 An alternative version featuring an octagonal plinth supporting the garbhagriha, as exemplified
by the Gandharvesvar temple at the Adinath complex, Chobhar.
Type VI: Often termed the 'composite style,' this mid-medieval development incorporates Mughal-
Rajput architectural elements, specifically the gumbaj (domed structure). This integration results in a
shorter profile than traditional Sikharas, featuring a semi-circular dome above the garbhagriha. The
Krishna temple at Durbar Square, Patan, exemplifies this synthesis, characterized by a two-storied
arcade and multiple turrets.
A further ‘special type’ of Shikhara also needs a mention here. The Mahaboudha temple of Patan
represents a unique architectural achievement, distinguished by its material composition, stylistic
elements, and decorative program. Its façades feature an elaborate schema of Buddha images housed in
numerous niches. Additional distinctive elements include corner miniature towers, diverse animal
figurines, and decorated tympana (toranas) adorning both functional and blind doorways. The temple's
terracotta construction further emphasizes its architectural significance within the corpus of Nepali
Sikhara temples.</p>

          <h2>Building Materials and Construction Techniques</h2>
          <p>The architectural manifestation of Shikhara temples in the Kathmandu Valley demonstrates a pragmatic
adaptation to locally available resources, primarily utilizing brick, stone, and wood. This material
selection reflects both regional availability and technological capabilities during the Malla period.Brick Construction and Innovation The predominant use of brick in early Malla-period Shikharas
represents a significant technological achievement. Of particular note is the development of specialized
conical bricks, engineered specifically for these structures. These precisely manufactured components
were laid with minimal mortar exposure, creating a sophisticated bonding pattern that enhanced both
structural integrity and aesthetic refinement. The technique demonstrates advanced understanding of
both material properties and construction methodologies.
Hierarchical Material Application A clear hierarchy exists in material selection relative to temple scale:
 Larger Shikhara temples predominantly feature brick construction, with notable exceptions
being the two Krishna temples at Patan's Durbar Square
 Smaller Shikhara structures typically employ stone as the primary building material
 High-quality terracotta was reserved for architectural details, particularly door and window
lintels, indicating a sophisticated understanding of material properties and decorative potential
The wooden elements, including posts, doors, and windows, exhibit distinctive characteristics:
 Geometric patterns dominate the carved decorative schemes
 Notably absent are narrative reliefs or painted embellishments, contrasting with other
contemporary architectural traditions
 This approach suggests a deliberate aesthetic choice rather than technical limitation
Material Evolution and Historical Modifications A significant transformation in the temples' material
appearance occurred during the 19th century under Rana administration. The introduction of stucco and
white paint, particularly evident in the Anantapur and Pratapur Shikharas at Syambhunath,
fundamentally altered the original brick-red aesthetic (Korn, 2014:60). This modification represents not
merely a cosmetic change but reflects shifting architectural preferences and possibly political-cultural
influences of the period.
This adaptability in material usage and construction techniques illustrates the dynamic nature of Nepali
architectural tradition, demonstrating both technological sophistication and responsiveness to changing
cultural contexts. The evolution from exposed brick to plastered surfaces marks a significant shift in
architectural expression, though it raises important questions about authenticity and preservation of
original architectural intent.</p>
<h2>Construction Techniques and Structural Elements</h2>
<p>While definitive documentation of foundational systems remains limited, scholarly analyses suggest a
sophisticated construction methodology for Shikhara temples. The foundational layer likely consisted of
strategically placed coarse stones and boulders, overlaid with successive courses of brick that seamlessly
integrated with the temple's vertical walls. The plinth edges exhibit distinct material variations - brick
temples feature stone reinforcement at horizontal and vertical edges, while stone temples employ
comprehensive stone plinth construction. In some cases, external surfaces received uniform stone
casing for enhanced durability and aesthetic consistency.The structural support systems demonstrate careful material selection based on temple typology. Stone
temples utilize integrated stone columns, beams, and lintels, while brick Shikharas employ a composite
system of stone columns complemented by wooden beams and lintels. The garbhagriha demonstrates
remarkable geometric versatility, being constructed on plinths of varying shapes - square, rectangular,
octagonal, or circular - adapting to specific ritual requirements and site conditions.
A notable engineering feature is the hollow construction of most Shikhara towers, employing a single-
layer construction of brick or stone that creates a tapering void structure. This space is typically crowned
with an amalaka, a ribbed circular stone disc that serves both functional and decorative purposes.</p>
<h2>Conclusion</h2>
<p>The Sikhara temples of the Kathmandu Valley represent a remarkable synthesis of architectural
innovation, indigenous craftsmanship, and cultural adaptation. While their basic form originated in
Indian temple architecture, these structures evolved into a distinctly Nepali architectural expression
through several key developments: the innovative use of local materials, particularly in brick technology;
the integration of indigenous decorative elements; and the progressive evolution through six distinct
topological variants. The temples demonstrate sophisticated engineering solutions, from their carefully
planned foundations to their hollow tower construction, while their refined decorative programs reflect
the high level of artistic achievement in medieval Nepal.
Additionally, these temples illustrate broader historical patterns in Kathmandu Valley's architectural
development, particularly the transition from Malla to Rana period modifications, as evidenced by
changes in surface treatments and decorative approaches. Their continued preservation and World
Heritage status not only acknowledges their architectural significance but also ensures their role as
valuable resources for understanding the development of South Asian temple architecture.</p>
        </div>
      </div>
    `
  },
  blog2: {
    title: "Hyper Connected museum",
    date: "Dec 15, 2022",
    category: "Technology",
    thumbnail: "./assets/images/hyper.png",
    content: `
      <div class="blog-article">
        <h1>Hyper Connected Museum</h1>
        <div class="blog-meta">
          <span>Dec 15, 2022</span>
          <span></span>
        </div> 
        
        <div class="blog-content">
          <p>
Museum is an institution which has always been a part of the society since its inception and public to stay connected. Therefore, it is vital for museum to continue being a valuable centre of knowledge and recreation to the community. Thus, it is necessary for the museum and community to be in constant contact with each other adopting newer methods that can bring the closer to it. Currently technology plays a vital role in keeping people connected with each other through various means and is the heart of connectivity. Similarly, museum should be able to agility to adopt these forms of technology so as to stay in constant contact with the public as well as to add value to its service.  <br> <br>
‘‘A museum is a non-profit, permanent institution in the service of the society and its development, open to the public, which acquires, conserves, researches, communicates and exhibits the tangible and intangible heritage of humanity and its environment for the purposes of education, study and enjoyment.’’ (Cited in Park, 2014, p. 94) <br> <br>
 Museums are dynamic institutions that respond to societal trends, beliefs and cultural paradigms and also created by public interests. (Latham and Simmons 2014).In this modern and scientific era museum consists of numerous functions such as collection, research, conservation, preservation, education, entertainment and exhibition. (Nyaupane, 2017).To stay relevant in the modern and scientific era museum should incorporate technology to continue its numerous functions.   <br> <br>
The concept of museum emerged in this world from a desire to collect and keep safe the objects attached to human sentiments for the present and future viewers.(Burcaw,E.G.). The world history of museum too is based on this basic principle. With the progress in time, the functions of museum too progressed dynamically. At present, the best museums of the world have been capable to give outstanding performance in skills to collect, preserve, promote, exhibit, educate and economize, all in outstanding way, all with an intention to serve society (UNESCO, 1960).<br> <br>
Hyper connectivity was invented in 2001 to design the multiple means of communication. We all are connected through a number of ways, such as face-to-face contact, email, instant messaging, telephone or the Internet. This global network of connections becomes each day more complex, diverse and integrated. In the hyper connected world of today, museums join the trend. This is the reason why the International Council of Museums (ICOM) has chosen the theme “Hyper connected museums: New approaches, new publics” for the International Museum Day 2018. This is the age of hyper connection. It means multiple system of connection, staying constantly connected. Hyper connectivity means everything is in communication with other, person to person, person to machine, machine and machine. In this universe there was no such connection like them in the past. In this modern era, we can connect any part of the world easily and fast. Hyper connected the world definitely becomes easier to live in. Possibilities of hyper connection are fast. The right time, right place, right context, right information, transmitted can lead to proper utilization of multiple chain relation. Through the development of technology, communication and applications, devices make the connection easier, flexible and faster. At the same time the global network of connections have made today’s world more integrated as well as complex. <br> <br>

In the initial stage of establishment of museum, it primarily focused on collection of art and artefacts. With time the purpose of museum expanded to form public institution (Ambrose T. and Paine C. 1960).  In late 17th century the first public museums opened they were not many educated people in society therefore museum created only educated and elite. Down the years the education popularity grows in number and therefore museums have grown in large number and have opened their doors to general public. ( Tiwari U. R. and Pandey A. 2011) At current times when we are living in a hyper connected world it because vital for museums to also fill into this hyper connection with their public. Thus, giving birth to the modern museum. The need of museum to be an integrated part of education was realized hence forth the developed to be informal centre of learning by the mid 20th century. Change is a universal truth in this world. So, accordingly there have been changes in the concept in museum. Museums initial concept of being static has now changed into dynamic concept. From being closed institution, museum’s opens its door to the public as a centre of knowledge. Technology has helped to bring the world close also contributing to exchange and globalization. And museum has also been affected by technology. This is the age of development and advancement of technology and museum development is taking place simultaneously. Hyper connectivity is the process of decentralizing its power to the community. And reaching out to public in a clear and concise manner to spread knowledge to the community. Today’s generation cannot be separated from technology to make museum relevant to the new generation it has thus become necessary for museum to incorporate technology. Today’s young generation or new generation it is the need of museum being connected with new technology. <br> <br>
Virtual museum is called an online museum, electronic museum, hyper museum, cyber museum, digital museum or a web museum. Virtual museum, a collection of digitally recorded images, sound files, text documents and other data about an objects and layout. Many virtual museums have their roots in web sites or home pages maintain on the internet by museums in order to disseminate information about themselves (ICOM News, 2004). Museum homepages usually contain administrative information such as opening hours, policies, facilities and services.<br> <br>

In this regard, the emerging concept and designs of virtual museums throughout the world, the online or offline particular museum tour guide apps for smart phones and other devices, the language based headphones that will guide the visitors about museum sites, the smart technology based museum infrastructure facilities are some of the examples of various aspects that are included in a hyper connected museum. The understanding to ‘Hyper connected Museums - New Approaches, New Publics’ is that besides the use of latest information technologies,  it includes other aspects too. There should be special regular information sharing talk programs related to the museum exhibitions by the museum experts, local experts etc. Museums can be turned to best educational centres of the world. Also there are aspects like how to make museum tours more interesting and more fun to the visitors as expressed herein.
Due to globalization the museums audience at present time are culturally as well as demographically very diverse. Furthermore the young generations having been born in the technology era are inseparable from it .These are the major challenges that museums face today. This has compelled museums authorities to learn and think digitally.  Similarly, Imaging and creating different relation between objects and viewers. The responsibility of museum is to be able to communicate with the audiences providing information in an accessible manner that is appreciated and easily assimilated by the audience. Therefore, it becomes necessary for museum to adopt with changing international trends and technologies. <br> <br>
Digital technology has now become the prime factor for the several of any service industry just as the heart is to a human body. The airlines industry is connected to its passengers and theirs family through various ways like facilities for ticketing from anywhere in the world, tracking flight etc. By incorporating digital technologies banks have made transactions locally, regionally, as well as internationally for their clients. Hospitals have also incorporated to better their customer service. A patient can make appointment and access the reports without having to go to the hospital. Through the use of information technology, institutions can operate manage, control and deliver their services. Similarly, through the incorporation of digital technology museums can fulfil its various functions like collection, documentation, conservation, exhibition, display, publication and education. All of them for the service of the society and its development. Here, it is important to stress that society and its development is an ever evolving phenomena.<br> <br>
Hyper connectivity for museum, based on ICOM, embodies two new approaches- ‘the application of technology and relevance of society.’ 
This approach can be broadened to encompasses security, accessibility of publication for audiences globally, collections, new approaches to 
education and interpretation, connection museum with the global audiences. These multiple layers of connectivity in various way mention 
above aims towards the theme to make museum relevant to society through use of technology. Due to innovation, creation and advancement of 
technology, museums have extended its responsibilities beyond their core audience to find new public. Museum has been success able to grab the 
attention of local community and diverse groups by integrating technology to broaden their scope. New public include otherwise able, children, 
new visitors, rikshaws, farmers, shopkeepers, minority communities, taxidrivers and so on. <br> <br> <ul>
<li>
Strategic Agility:	museum should have the ability to adopt the new technology. </li>
<li>

Getting Personal: The museum should have one to one connection with every visitor through the use of technology. They should be able to inform their visitors about new activity, exhibitions, workshops, café update, special deals in museum shops as well as other topics of visitor interest.</li>
<li>
Communication: Without communication visitors don’t get any information. Information and communication should have good quality, regular, consistency, honesty and frequency.   </li>
<li>

 Data Fluency: Museum leaders must make informed and strategic decisions about collecting, sharing and prioritizing and interoperating data.</li>
<li>

Rapid and Rigorous Prototyping: museum leader should implement model programs to determine the viability, efficiency and scalability of new programs.</li>
<li>

Systems Leadership: Inter connection between different museums help to create potential partnership to foster significant social and cultural impacts. This will enable the leaders to see a broader picture to engage in generative conversation to provide additional value to its audience.  
</li>
<br>
The developing concept of ethnographical museum to be build at Champadevi in Kathmandu has a broad vision. It aims to centralise the
information about various ethnic communities of Nepal at one place preserve their culture and present them in an attractive and informative way. 
Since today’s audience are very connected to technology. Thus incorporation of new methods of technology to disseminative
 knowledge would be advisable. The museum should connect not only to their physical audience but also to those far away and who cannot
  physically visit the museums. It should also connect also to the various communities represented museum that have lost knowledge about 
  their history and their past.<br></p>
         
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