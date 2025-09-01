import React, { useState, useEffect, useCallback } from 'react';
import { SKILLS_DATA, PROJECTS_DATA, RESOURCES_DATA_FRONTED,RESOURCES_DATA_BACKEND,CODER_ARMY, GALLERY_DATA } from './assets/constants';

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto ${className}`}>
    <h2 className="text-4xl font-bold text-center text-slate-100 mb-12">
      {title}
      <span className="block w-20 h-1 mx-auto mt-2 bg-teal-400"></span>
    </h2>
    {children}
  </section>
);

// --- NAVIGATION COMPONENTS ---
const NavLink = ({ page, activePage, onClick, children }) => (
  <button
    onClick={() => onClick(page)}
    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative ${
      activePage === page 
      ? 'text-teal-300' 
      : 'text-slate-300 hover:text-white'
    }`}
  >
    {children}
    {activePage === page && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 transform scale-x-100 transition-transform duration-300"></span>
    )}
  </button>
);


const Header = ({ activePage, setActivePage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { page: 'home', label: 'Home' },
        { page: 'skills', label: 'Skills' },
        { page: 'projects', label: 'Projects' },
        { page: 'resources', label: 'Resources' },
        { page: 'gallery', label: 'Gallery' },
        { page: 'contact', label: 'Contact' },
    ];
    
    const handleLinkClick = (page) => {
        setActivePage(page);
        setIsOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
                <div className="text-2xl font-bold text-white">
                    Jitendra <span className="text-teal-400">Kumar</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    {navItems.map(item => (
                        <NavLink key={item.page} page={item.page} activePage={activePage} onClick={handleLinkClick}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-slate-900/90 backdrop-blur-lg py-4">
                    {navItems.map(item => (
                        <a key={item.page} href={`#${item.page}`} onClick={(e) => { e.preventDefault(); handleLinkClick(item.page); }} className="block text-center py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

const Footer = () => (
    <footer className="bg-slate-900 border-t border-slate-800 text-center py-6">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} Jitendra Kumar. All Rights Reserved.</p>
    </footer>
);

// --- PAGE-SPECIFIC COMPONENTS ---

const HomePage = ({ onNavigate }) => {
    const roles = ["MERN Stack Developer", "B.Tech Final Year Student", "Problem Solver"];
    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [displayedRole, setDisplayedRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 75 : 150;
        const typingTimeout = setTimeout(() => {
            if (isDeleting) {
                setDisplayedRole(currentRole.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                setDisplayedRole(currentRole.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        }, typeSpeed);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, currentRole, roles]);

    useEffect(() => {
        setCurrentRole(roles[roleIndex]);
    }, [roleIndex, roles]);

    return (
        <div id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="text-center z-10 p-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
                    Jitendra Kumar
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 h-8 font-roboto-mono">
                    I am a <span className="text-teal-400 font-semibold">{displayedRole}</span>
                    <span className="inline-block w-1 h-7 bg-teal-400 animate-blink ml-1"></span>
                </p>
                <div className="space-x-4">
                    <button onClick={() => onNavigate('projects')} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300">
                        View My Work
                    </button>
                    <button onClick={() => onNavigate('contact')} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300">
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

// Fix: Corrected the icon prop type to React.ReactElement and removed the unsafe type assertion in cloneElement.
const SkillCard = ({ name, icon }) => (
  <div className="bg-slate-800 rounded-lg p-6 flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 shadow-lg">
    <div className="text-teal-400">{React.cloneElement(icon, { className: 'w-8 h-8' })}</div>
    <span className="text-slate-200 font-medium">{name}</span>
  </div>
);

const SkillsPage = () => (
    <Section id="skills" title="My Technical Skills">
        <div className="space-y-12">
            {SKILLS_DATA.map((category) => (
                <div key={category.title}>
                    <h3 className="text-2xl font-semibold text-slate-200 mb-6 text-center">{category.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {category.skills.map((skill) => (
                            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 shadow-lg hover:shadow-teal-500/20">
    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-slate-700 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
    <Section id="projects" title="My Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS_DATA.map(project => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    </Section>
);

const ResourceCard = ({ resource }) => (
    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-slate-800 rounded-lg transition-all duration-300 hover:bg-slate-700/50 hover:shadow-xl transform hover:-translate-y-1">
        <div className="flex items-start space-x-4">
            <div>{resource.icon}</div>
            <div>
                <h3 className="text-lg font-bold text-slate-100">{resource.title}</h3>
                <p className="text-slate-400 mt-1">{resource.description}</p>
            </div>
        </div>
    </a>
);

const ResourcesPage = () => (
    <>

    {/* Coder Army  */}
    <Section id="resources" title="CODER ARMY">
        <div className="grid md:grid-cols-2 gap-8">
            {CODER_ARMY.map(resource => (
                <ResourceCard key={resource.title} resource={resource} />
            ))}
        </div>
    </Section>

    {/* fronted learning resources  */}
    <Section id="resources" title="Fronted Development Learning Resources">
        <div className="grid md:grid-cols-2 gap-8">
            {RESOURCES_DATA_FRONTED.map(resource => (
                <ResourceCard key={resource.title} resource={resource} />
            ))}
        </div>
    </Section>
     
     {/* Backend learning resources  */}
    <Section id="resources" title="Backend Learning Resources">
        <div className="grid md:grid-cols-2 gap-8">
            {RESOURCES_DATA_BACKEND.map(resource => (
                <ResourceCard key={resource.title} resource={resource} />
            ))}
        </div>
    </Section>
    </>
);

const GalleryModal = ({ item, onClose }) => {
    if (!item) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-slate-800 rounded-lg max-w-3xl w-full p-4 relative animate-zoom-in" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                <img src={item.imageUrl} alt={item.title} className="w-full max-h-[70vh] object-contain rounded-md" />
                <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                    <p className="text-slate-400 mt-1">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

const GalleryPage = ({ onImageClick }) => (
    <Section id="gallery" title="Gallery">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_DATA.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer" onClick={() => onImageClick(item)}>
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                           <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const ContactPage = () => (
    <Section id="contact" title="Get In Touch">
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-slate-300 mb-8 text-lg">
                I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out via email or connect with me on social media.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-8 inline-block">
                <a href="mailto:jitendrasharma708097@gmail.com" className="text-2xl font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-300">
                    jitendrasharma708097@gmail.com
                </a>
            </div>
            <div className="mt-10 flex justify-center space-x-6">
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg></a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
        </div>
    </Section>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeGalleryItem, setActiveGalleryItem] = useState(null);

  const handlePageChange = useCallback((page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const handleImageClick = (item) => {
    setActiveGalleryItem(item);
  };
  
  const handleCloseModal = () => {
    setActiveGalleryItem(null);
  };

  const renderPage = () => {
    if (activePage === 'home') {
      return (
        <HomePage onNavigate={handlePageChange} />
      );
    }
    // For other pages, render them inside the main layout
    return (
      <main>
        {activePage === 'skills' && <SkillsPage />}
        {activePage === 'projects' && <ProjectsPage />}
        {activePage === 'resources' && <ResourcesPage />}
        {activePage === 'gallery' && <GalleryPage onImageClick={handleImageClick} />}
        {activePage === 'contact' && <ContactPage />}
      </main>
    );
  };

  return (
    <div className="bg-slate-900 text-slate-300 antialiased">
      <Header activePage={activePage} setActivePage={handlePageChange} />
      
      {renderPage()}

      {activePage !== 'home' && <Footer />}

      <GalleryModal item={activeGalleryItem} onClose={handleCloseModal} />
      
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }

        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }
        
        @keyframes zoom-in {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }

        .bg-grid-slate-800 {
            background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px);
            background-size: 4rem 4rem;
            opacity: 0.1;
        }
      `}</style>
    </div>
  );
}
