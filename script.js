//object map
const skillProficiencies = {
    "AWS": 4,
    "GCP": 5,
    "Azure": 3,
    "Terraform": 5,
    "Terragrunt": 5,
    "Crossplane": 3,
    "Vagrant": 5,
    "Docker": 5,
    "Kubernetes": 4,
    "Helm": 5,
    "containerd": 4,
    "Keda": 3,
    "Karpenter": 4,
    "Istio": 4,
    "Linkerd": 4,
    "Emissary Ingress": 5,
    "NGINX Ingress": 4,
    "KrakenD": 3,
    "Trivy": 5,
    "Terrascan": 5,
    "Jenkins": 4,
    "GitLab": 4,
    "ArgoCD": 5,
    "Cloud Build": 5,
    "GitHub Actions": 5,
    "Prometheus": 4,
    "Grafana": 4,
    "Datadog": 3,
    "RabbitMQ": 3,
    "Elasticsearch": 2,
    "Redis": 4,
    "Linux": 4,
    "Windows": 4,
    "Bash": 3,
    "Python": 2,
    "Git": 4,
    "KubeGreen": 5
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill proficiency visualizer
const skills = document.querySelectorAll('.skill-category li');
skills.forEach(skill => {
    const skillName = skill.textContent.trim().split(',')[0];  // Get the first skill if multiple are listed
    const proficiency = skillProficiencies[skillName] || 0;  // Default to 0 if not found
    const stars = '★'.repeat(proficiency) + '☆'.repeat(5 - proficiency);
    skill.innerHTML += ` <span class="skill-stars">${stars}</span>`;
});

// Light/Dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '🌓';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.zIndex = '1000';
toggleButton.style.padding = '10px';
toggleButton.style.borderRadius = '50%';
toggleButton.style.border = 'none';
toggleButton.style.backgroundColor = '#f0f0f0';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.zIndex = '1000';
backToTopButton.style.padding = '10px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.border = 'none';
backToTopButton.style.backgroundColor = '#4a86e8';
backToTopButton.style.color = 'white';
backToTopButton.style.display = 'none';
backToTopButton.style.cursor = 'pointer';

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});