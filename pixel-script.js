// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Page Navigation System
    const pages = {
        'home': document.getElementById('home-page'),
        'about': document.getElementById('about-page'),
        'games': document.getElementById('games-page'),
        'archive': document.getElementById('archive-page'),
        'skills': document.getElementById('skills-page'),
        'contact': document.getElementById('contact-page')
    };
    
    // Set home page as active by default
    let currentPage = 'home';
    
    // Function to navigate to a page
    function navigateTo(pageId) {
        // Hide all pages
        Object.values(pages).forEach(page => {
            if (page) page.classList.remove('active');
        });
        
        // Show the selected page
        if (pages[pageId]) {
            pages[pageId].classList.add('active');
            currentPage = pageId;
            
            // Scroll to top when changing pages
            window.scrollTo(0, 0);
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${pageId}`);
            
            // Create floating pixel boxes for the current page
            createFloatingBoxes();
        }
    }
    
    // Set up navigation event listeners
    document.querySelectorAll('.nav-links a, .page-nav-btn').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                navigateTo(pageId);
            }
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const pageId = window.location.hash.substring(1) || 'home';
        navigateTo(pageId);
    });
    
    // Initialize based on URL hash or default to home
    const initialPage = window.location.hash.substring(1) || 'home';
    navigateTo(initialPage);
    
    // Floating Pixel Boxes - Disabled
    function createFloatingBoxes() {
        // Remove any existing floating boxes
        document.querySelectorAll('.pixel-box').forEach(box => box.remove());
        
        // Floating boxes functionality has been disabled to improve readability
        // No new floating boxes will be created
    }
    
    // Language translations (from original script.js)
    const translations = {
        en: {
            // Navigation
            "nav_home": "Home",
            "nav_about": "About",
            "nav_games": "Game Portfolio",
            "nav_archive": "Archive",
            "nav_skills": "Skills",
            "nav_contact": "Contact",
            
            // Hero section
            "hero_hello": "Hello, I'm",
            "hero_title": "Game Developer & Designer",
            "hero_welcome": "Welcome to my personal portfolio website showcasing my work and passion for game development.",
            "hero_view_work": "View My Work",
            "hero_contact": "Contact Me",
            
            // About section
            "about_title": "About Me",
            "about_p1": "Hello! I'm a passionate game developer with a strong background in both design and programming. I love creating immersive experiences that engage players and tell compelling stories.",
            "about_p2": "With several years of experience in the gaming industry, I've worked on a variety of projects ranging from mobile games to PC titles. My expertise includes game mechanics design, level design, and implementing engaging gameplay systems.",
            "about_p3": "When I'm not coding or designing games, you can find me exploring new game releases, participating in game jams, or experimenting with new technologies and tools in the game development space.",
            "info_name": "Name:",
            "info_email": "Email:",
            "info_location": "Location:",
            "info_experience": "Experience:",
            "experience_years": "5+ Years",
            
            // Game Portfolio section
            "games_title": "Game Portfolio",
            "filter_all": "All",
            "filter_business": "Business",
            "filter_pc": "PC Games",
            "filter_board": "Board Games",
            "filter_jam": "Game Jam",
            
            // Game cards
            "game_ai_adoption_title": "AI Adoption Program",
            "game_ai_adoption_desc": "Emotional interaction game about AI characters adopting humans. 2023 Game Jam Entry exploring dystopian themes.",
            "game_quoted_out_title": "Quoted Out!",
            "game_quoted_out_desc": "Dialogue-based party game where players create humorous videos by editing interviews. 2024 Global Game Jam Winner.",
            "game_party_paidui_title": "Party! Paidui! Fiesta!",
            "game_party_paidui_desc": "New project in development. Details will be announced soon.",
            "game_back_home_title": "Back Home",
            "game_back_home_desc": "Back Home is a life sim where a girl collects daily items with limited money. Your choices shape relationships and unlock multiple endings.",
            "game_dorm_unpacking_title": "Dorm Unpacking",
            "game_dorm_unpacking_desc": "Dorm Unpacking is a cozy puzzle game where you unpack and place items in a dorm room to earn points based on thoughtful organization.",
            "game_zombie_juice_title": "Zombie Juice",
            "game_zombie_juice_desc": "Match-3 board game with day/night cycle mechanics. Run a smoothie shop serving both humans and zombies.",
            "game_beneath_ruins_title": "Beneath the Ruins",
            "game_beneath_ruins_desc": "Post-apocalyptic survival board game with resource management. Survive in a harsh environment after a catastrophic event.",
            "game_wallet_war_title": "Wallet War",
            "game_wallet_war_desc": "Card game about managing finances and competing for wallet space. Adapted from the classic board game \"Love Letter\".",
            "game_princess_lianan_title": "Princess Lianan",
            "game_princess_lianan_desc": "Fantasy RPG adventure with princess protagonist. Features turn-based combat and multiple endings based on player choices.",
            "game_above_fountain_title": "Above the Fountain",
            "game_above_fountain_desc": "First-person narrative puzzle game where players explore surreal worlds. Features mind-bending puzzles and non-linear exploration.",
            "game_silent_majority_title": "The Silent Majority",
            "game_silent_majority_desc": "Social experiment visual novel exploring cyber violence and online mob mentality. Features moral dilemmas with no clear right answers.",
            
            // Business projects
            "game_dramai_title": "Dramai.AI",
            "game_dramai_desc": "Interactive Social AGI Playground - Building a Digital Civilization Sandbox for AI-Human Co-evolution with multi-agent storytelling.",
            "game_got_title": "Game of Thrones: Winter is Coming",
            "game_got_desc": "Strategic browser-based MMO set in the Game of Thrones universe. Build your house, forge alliances, and fight for the Iron Throne in this epic strategy game.",
            "game_petch_title": "Petch",
            "game_petch_desc": "AI-powered social platform for pets and pet lovers. Game Designer Intern role focusing on pet personality testing and social interaction systems.",
            
            // Featured work descriptions
            "featured_dramai_desc": "Interactive Social AGI Playground - Building a Digital Civilization Sandbox for AI-Human Co-evolution",
            "featured_got_desc": "Strategic browser-based MMO set in the Game of Thrones universe. Build your house and fight for the Iron Throne",
            "featured_petch_desc": "AI-powered social platform for pets and pet lovers. Game Designer Intern focusing on pet personality systems",
            "featured_ai_adoption_desc": "An emotional journey exploring dystopian themes through AI-human relationships",
            
            // Archive section
            "archive_title": "Other Archive",
            "archive_gdd": "Game Design Documents",
            "archive_art": "Art & Concept Work",
            "archive_publications": "Publications & Talks",
            "archive_view": "View",
            "archive_back_home_gdd": "Back Home - Game Design Document",
            "archive_party_paidui_gdd": "Party! Paidui! Fiesta! - Game Design Document",
            "archive_space_explorers": "Coming Soon",
            "archive_character_concept": "Coming Soon",
            "archive_environment_sketches": "Coming Soon",
            "archive_uiux_portfolio": "Coming Soon",
            "archive_procedural_generation": "The Future of Procedural Generation in Games - GDC Talk 2023",
            "archive_balancing_complexity": "Balancing Complexity and Accessibility in Puzzle Games - Article",
            "archive_narrative_design": "Narrative Design in Open World Games - Conference Panel",
            "archive_uiux": "UI/UX Design",
            "archive_ecodemand": "EcoDemand System",
            "archive_cozy_ui": "Cozy Game UI Design",
            "archive_coming_soon": "Coming Soon",
            
            // Skills section
            "skills_title": "Skills & Expertise",
            "skills_p1": "I've developed a diverse set of skills throughout my career in game development. Below you can see my proficiency in various technologies and disciplines relevant to game creation.",
            "skills_p2": "Click on any skill to see more details about my experience with that technology or discipline.",
            "skills_demo": "Interactive Skill Demo",
            "skills_start": "Start Demo",
            "skills_reset": "Reset",
            
            // Skill cards
            "skill_unity_title": "Unity Engine",
            "skill_unity_desc": "7+ years of experience developing games with Unity. Proficient in C# programming, shader development, and performance optimization.",
            "skill_unreal_title": "Unreal Engine",
            "skill_unreal_desc": "4+ years working with Unreal Engine. Experience with Blueprint visual scripting, C++ programming, and material creation.",
            "skill_programming_title": "C# / C++",
            "skill_programming_desc": "Strong programming skills in C#, C++, and JavaScript. Experience with game AI, physics systems, and networking.",
            "skill_gameplay_title": "Gameplay Design",
            "skill_gameplay_desc": "Expert in game mechanics design, level design, and balancing gameplay systems for player engagement and retention.",
            "skill_mechanics_title": "Gameplay Mechanics",
            "skill_mechanics_desc": "Experienced in designing and implementing complex gameplay mechanics and systems.",
            "skill_level_design_title": "Level Design",
            "skill_level_design_desc": "Skilled in creating engaging and balanced level designs that enhance player experience.",
            "skill_multiplayer_title": "Multiplayer games",
            "skill_multiplayer_desc": "Experience in designing and implementing multiplayer game systems and networking solutions.",
            "skill_storytelling_title": "Storytelling",
            "skill_storytelling_desc": "Proficient in crafting compelling narratives and story arcs for games.",
            "skill_interactive_storytelling_title": "Interactive Storytelling",
            "skill_interactive_storytelling_desc": "Skilled in creating branching narratives and player-driven story experiences.",
            "skill_mission_title": "Mission and dialogue creation",
            "skill_mission_desc": "Experience in designing engaging missions and writing compelling dialogue for games.",
            "skill_prototyping_title": "Prototyping",
            "skill_prototyping_desc": "Skilled in rapidly creating functional prototypes to test gameplay concepts and mechanics.",
            "skill_content_title": "Content Creation",
            "skill_content_desc": "Experience in creating various game content including assets, levels, and systems.",
            "skill_3d_title": "Mechanics design",
            "skill_3d_desc": "Skilled in designing balanced and engaging game mechanics that enhance player experience.",
            "skill_organization_title": "Organizational Skill",
            "skill_organization_desc": "Strong ability to organize projects, manage tasks, and coordinate team efforts efficiently.",
            "skill_communication_title": "Communication",
            "skill_communication_desc": "Excellent verbal and written communication skills for effective team collaboration.",
            "skill_analytical_title": "Analytical Skills",
            "skill_analytical_desc": "Strong ability to analyze game data, player behavior, and system performance.",
            "skill_photoshop_title": "Photoshop",
            "skill_photoshop_desc": "Proficient in using Photoshop for game art, UI design, and asset creation.",
            "skill_midjourney_title": "Midjourney",
            "skill_midjourney_desc": "Experience using Midjourney for concept art and visual inspiration in game development.",
            "skill_documentation_title": "Documentation",
            "skill_documentation_desc": "Skilled in creating comprehensive game design documents and technical documentation.",
            "skill_motivation_title": "Self-Motivation",
            "skill_motivation_desc": "Highly self-motivated with strong initiative and ability to work independently.",
            "skill_ai_title": "AI",
            "skill_ai_desc": "Experience with AI systems in games, including behavior trees, pathfinding, and decision making.",
            
            // Contact section
            "contact_title": "Contact Me",
            "contact_email": "Email",
            "contact_phone": "Phone",
            "contact_location": "Location",
            "contact_name": "Name",
            "contact_subject": "Subject",
            "contact_message": "Message",
            "contact_send": "Send Message",
            
            // Footer
            "footer_dev": "Game Developer & Designer",
            "footer_rights": "All Rights Reserved.",
            
            // Navigation buttons
            "nav_prev": "Previous",
            "nav_next": "Next",
            
            // Game Detail Page
            "back_to_portfolio": "Back to Portfolio",
            "game_description": "Description",
            "game_features": "Features",
            "game_technologies": "Technologies",
            "game_links": "Links",
            "game_gallery": "Gallery",
            "gallery_coming_soon": "Gallery images coming soon!"
        },
        zh: {
            // Navigation
            "nav_home": "首页",
            "nav_about": "关于我",
            "nav_games": "游戏作品",
            "nav_archive": "档案",
            "nav_skills": "技能",
            "nav_contact": "联系方式",
            
            // Hero section
            "hero_hello": "你好，我是",
            "hero_title": "游戏开发者 & 设计师",
            "hero_welcome": "欢迎来到我的个人作品集网站，这里展示了我的作品和对游戏开发的热情。",
            "hero_view_work": "查看作品",
            "hero_contact": "联系我",
            
            // About section
            "about_title": "关于我",
            "about_p1": "你好！我是一位热情的游戏开发者，在设计和编程方面都有扎实的背景。我喜欢创造能够吸引玩家并讲述引人入胜故事的沉浸式体验。",
            "about_p2": "凭借在游戏行业多年的经验，我参与过从手机游戏到PC游戏的各种项目。我的专长包括游戏机制设计、关卡设计和实现引人入胜的游戏系统。",
            "about_p3": "当我不在编码或设计游戏时，你可以看到我在探索新游戏发布、参与游戏开发马拉松，或者在游戏开发领域尝试新技术和工具。",
            "info_name": "姓名：",
            "info_email": "邮箱：",
            "info_location": "地点：",
            "info_experience": "经验：",
            "experience_years": "5年以上",
            
            // Game Portfolio section
            "games_title": "游戏作品集",
            "filter_all": "全部",
            "filter_business": "商业项目",
            "filter_pc": "PC游戏",
            "filter_board": "桌游",
            "filter_jam": "游戏马拉松",
            
            // Game cards
            "game_ai_adoption_title": "AI领养计划",
            "game_ai_adoption_desc": "关于AI角色领养人类的情感互动游戏。2023年游戏马拉松参赛作品，探索反乌托邦主题。",
            "game_quoted_out_title": "引述出来！",
            "game_quoted_out_desc": "基于对话的派对游戏，玩家通过编辑采访创建幽默视频。2024年全球游戏马拉松获奖作品。",
            "game_party_paidui_title": "派对！排队！嘉年华！",
            "game_party_paidui_desc": "正在开发的新项目。详情将很快公布。",
            "game_back_home_title": "回家",
            "game_back_home_desc": "《回家》是一款生活模拟游戏，女孩在有限的金钱下收集日常物品。你的选择塑造关系并解锁多种结局。",
            "game_dorm_unpacking_title": "宿舍整理",
            "game_dorm_unpacking_desc": "《宿舍整理》是一款舒适的解谜游戏，玩家在宿舍中拆包并放置物品，根据周到的组织获得积分。",
            "game_zombie_juice_title": "僵尸果汁",
            "game_zombie_juice_desc": "带有昼夜循环机制的三消桌游。经营一家同时为人类和僵尸服务的冰沙店。",
            "game_beneath_ruins_title": "废墟之下",
            "game_beneath_ruins_desc": "后启示录生存桌游，具有资源管理元素。在灾难性事件后的恶劣环境中生存。",
            "game_wallet_war_title": "钱包战争",
            "game_wallet_war_desc": "关于管理财务和争夺钱包空间的卡牌游戏。改编自经典桌游《情书》。",
            "game_princess_lianan_title": "莲安公主",
            "game_princess_lianan_desc": "以公主为主角的奇幻RPG冒险。具有回合制战斗和基于玩家选择的多种结局。",
            "game_above_fountain_title": "喷泉之上",
            "game_above_fountain_desc": "第一人称叙事解谜游戏，玩家探索超现实世界。具有令人费解的谜题和非线性探索。",
            "game_silent_majority_title": "沉默的大多数",
            "game_silent_majority_desc": "探索网络暴力和在线群体心理的社会实验视觉小说。具有没有明确正确答案的道德困境。",
            
            // Business projects
            "game_dramai_title": "Dramai.AI",
            "game_dramai_desc": "互动社交AGI游乐场 - 构建AI-人类共同进化的数字文明沙盒，具有多智能体叙事功能。",
            "game_got_title": "权力的游戏：凛冬将至",
            "game_got_desc": "设定在权力的游戏宇宙中的战略浏览器MMO。建立你的家族，结成联盟，为铁王座而战的史诗策略游戏。",
            "game_petch_title": "Petch",
            "game_petch_desc": "面向宠物和宠物爱好者的AI驱动社交平台。游戏设计师实习生角色，专注于宠物性格测试和社交互动系统。",
            
            // Featured work descriptions
            "featured_dramai_desc": "互动社交AGI游乐场 - 构建AI-人类共同进化的数字文明沙盒",
            "featured_got_desc": "设定在权力的游戏宇宙中的战略浏览器MMO。建立你的家族，为铁王座而战",
            "featured_petch_desc": "面向宠物和宠物爱好者的AI驱动社交平台。游戏设计师实习生专注于宠物性格系统",
            "featured_ai_adoption_desc": "探索AI-人类关系中反乌托邦主题的情感之旅",
            
            // Archive section
            "archive_title": "其他档案",
            "archive_gdd": "游戏设计文档",
            "archive_art": "艺术与概念作品",
            "archive_publications": "出版物与演讲",
            "archive_view": "查看",
            "archive_back_home_gdd": "回家 - 游戏设计文档",
            "archive_party_paidui_gdd": "派对！排队！嘉年华！- 游戏设计文档",
            "archive_space_explorers": "即将更新",
            "archive_character_concept": "即将更新",
            "archive_environment_sketches": "即将更新",
            "archive_uiux_portfolio": "即将更新",
            "archive_procedural_generation": "游戏中程序生成的未来 - GDC演讲2023",
            "archive_balancing_complexity": "平衡解谜游戏中的复杂性和可访问性 - 文章",
            "archive_narrative_design": "开放世界游戏中的叙事设计 - 会议小组讨论",
            "archive_uiux": "UI/UX设计",
            "archive_ecodemand": "生态需求系统",
            "archive_cozy_ui": "舒适游戏UI设计",
            "archive_coming_soon": "即将更新",
            
            // Skills section
            "skills_title": "技能与专长",
            "skills_p1": "在我的游戏开发职业生涯中，我培养了多样化的技能。以下是我在与游戏创作相关的各种技术和学科中的熟练程度。",
            "skills_p2": "点击任何技能，查看有关我在该技术或学科方面的经验的更多详细信息。",
            "skills_demo": "互动技能演示",
            "skills_start": "开始演示",
            "skills_reset": "重置",
            
            // Skill cards
            "skill_unity_title": "Unity引擎",
            "skill_unity_desc": "7年以上使用Unity开发游戏的经验。精通C#编程、着色器开发和性能优化。",
            "skill_unreal_title": "虚幻引擎",
            "skill_unreal_desc": "4年以上使用虚幻引擎的经验。熟悉蓝图可视化脚本、C++编程和材质创建。",
            "skill_programming_title": "C# / C++",
            "skill_programming_desc": "在C#、C++和JavaScript方面有扎实的编程技能。有游戏AI、物理系统和网络方面的经验。",
            "skill_gameplay_title": "游戏玩法设计",
            "skill_gameplay_desc": "游戏机制设计、关卡设计和平衡游戏系统以提高玩家参与度和留存率方面的专家。",
            "skill_mechanics_title": "游戏机制",
            "skill_mechanics_desc": "有设计和实现复杂游戏机制和系统的经验。",
            "skill_level_design_title": "关卡设计",
            "skill_level_design_desc": "擅长创建引人入胜且平衡的关卡设计，以提升玩家体验。",
            "skill_multiplayer_title": "多人游戏",
            "skill_multiplayer_desc": "有设计和实现多人游戏系统和网络解决方案的经验。",
            "skill_storytelling_title": "讲故事",
            "skill_storytelling_desc": "精通为游戏创作引人入胜的叙事和故事情节。",
            "skill_interactive_storytelling_title": "互动叙事",
            "skill_interactive_storytelling_desc": "擅长创建分支叙事和玩家驱动的故事体验。",
            "skill_mission_title": "任务和对话创作",
            "skill_mission_desc": "有设计引人入胜的任务和为游戏编写引人入胜的对话的经验。",
            "skill_prototyping_title": "原型设计",
            "skill_prototyping_desc": "擅长快速创建功能原型以测试游戏概念和机制。",
            "skill_content_title": "内容创作",
            "skill_content_desc": "有创建各种游戏内容的经验，包括资产、关卡和系统。",
            "skill_3d_title": "机制设计",
            "skill_3d_desc": "擅长设计平衡且引人入胜的游戏机制，以提升玩家体验。",
            "skill_organization_title": "组织能力",
            "skill_organization_desc": "有强大的项目组织、任务管理和团队协调能力。",
            "skill_communication_title": "沟通能力",
            "skill_communication_desc": "出色的口头和书面沟通技巧，有效促进团队协作。",
            "skill_analytical_title": "分析能力",
            "skill_analytical_desc": "有强大的游戏数据、玩家行为和系统性能分析能力。",
            "skill_photoshop_title": "Photoshop",
            "skill_photoshop_desc": "精通使用Photoshop进行游戏美术、UI设计和资产创建。",
            "skill_midjourney_title": "Midjourney",
            "skill_midjourney_desc": "有使用Midjourney进行游戏开发中概念艺术和视觉灵感的经验。",
            "skill_documentation_title": "文档编写",
            "skill_documentation_desc": "擅长创建全面的游戏设计文档和技术文档。",
            "skill_motivation_title": "自我激励",
            "skill_motivation_desc": "高度自我激励，有强烈的主动性和独立工作的能力。",
            "skill_ai_title": "人工智能",
            "skill_ai_desc": "有游戏中AI系统的经验，包括行为树、寻路和决策制定。",
            
            // Contact section
            "contact_title": "联系我",
            "contact_email": "邮箱",
            "contact_phone": "电话",
            "contact_location": "地点",
            "contact_name": "姓名",
            "contact_subject": "主题",
            "contact_message": "留言",
            "contact_send": "发送留言",
            
            // Footer
            "footer_dev": "游戏开发者 & 设计师",
            "footer_rights": "版权所有。",
            
            // Navigation buttons
            "nav_prev": "上一页",
            "nav_next": "下一页",
            
            // Game Detail Page
            "back_to_portfolio": "返回作品集",
            "game_description": "描述",
            "game_features": "特点",
            "game_technologies": "技术",
            "game_links": "链接",
            "game_gallery": "画廊",
            "gallery_coming_soon": "画廊图片即将推出！"
        }
    };
    
    // Function to get current language from localStorage
    function getCurrentLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        return savedLang && (savedLang === 'en' || savedLang === 'zh') ? savedLang : 'en';
    }
    
    // Function to update text content based on selected language
    function updateLanguage(lang) {
        // Update language attribute on html tag
        document.documentElement.setAttribute('lang', lang);
        
        // Update language switcher button text
        const langBtn = document.getElementById('langSwitcher');
        if (langBtn) {
            langBtn.textContent = lang === 'en' ? '中文' : 'English';
        }
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // Dispatch a custom event for other scripts to listen to
        const event = new CustomEvent('languageChanged', { detail: { language: lang } });
        document.dispatchEvent(event);
    }
    
    // Language switcher button click event
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            const currentLang = getCurrentLanguage();
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            updateLanguage(newLang);
        });
    }
    
    // Initialize language based on localStorage or default to English
    updateLanguage(getCurrentLanguage());
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Game Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gameCards = document.querySelectorAll('.game-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide game cards based on filter
            gameCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category').includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Skill Cards Interaction
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle skill details visibility
            const details = this.querySelector('.skill-details');
            if (details) {
                details.style.opacity = details.style.opacity === '1' ? '0' : '1';
            }
        });
    });

    // Interactive Skill Demo Canvas
    const canvas = document.getElementById('skillCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const startBtn = document.getElementById('startDemo');
        const resetBtn = document.getElementById('resetDemo');
        
        // Define particles array and animation variables
        let particles = [];
        let animationId;
        let isAnimating = false;
        
        // Particle class
        class Particle {
            constructor(x, y, size, color, speedX, speedY) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speedX = speedX;
                this.speedY = speedY;
                this.alpha = 1;
            }
            
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Bounce off walls
                if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                    this.speedY = -this.speedY;
                }
                
                // Fade out slowly
                this.alpha -= 0.002;
                
                this.draw();
            }
        }
        
        // Initialize canvas
        function initCanvas() {
            ctx.fillStyle = '#f5f6fa';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw text
            ctx.fillStyle = '#9376e0';
            ctx.font = '16px "Press Start 2P"';
            ctx.textAlign = 'center';
            
            const lang = getCurrentLanguage();
            if (lang === 'en') {
                ctx.fillText('Click Start Demo', canvas.width / 2, canvas.height / 2 - 10);
                ctx.fillText('to see skills in action!', canvas.width / 2, canvas.height / 2 + 20);
            } else {
                ctx.fillText('点击开始演示', canvas.width / 2, canvas.height / 2 - 10);
                ctx.fillText('查看技能展示！', canvas.width / 2, canvas.height / 2 + 20);
            }
        }
        
        // Create particles
        function createParticles() {
            const lang = getCurrentLanguage();
            let skillNames;
            
            if (lang === 'en') {
                skillNames = ['Unity', 'Unreal', '3D', 'Design', 'Code', 'Art'];
            } else {
                skillNames = ['Unity', '虚幻', '3D', '设计', '编程', '艺术'];
            }
            
            const colors = ['#5f85db', '#9376e0', '#ff9eaa', '#5f85db', '#9376e0', '#ff9eaa'];
            
            for (let i = 0; i < 50; i++) {
                const size = Math.random() * 20 + 5;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const speedX = (Math.random() - 0.5) * 3;
                const speedY = (Math.random() - 0.5) * 3;
                const colorIndex = Math.floor(Math.random() * colors.length);
                
                particles.push(new Particle(x, y, size, colors[colorIndex], speedX, speedY));
                
            // Add text to some particles
            if (i % 8 === 0) {
                const textParticle = new Particle(x, y, 30, colors[colorIndex], speedX * 0.5, speedY * 0.5);
                textParticle.text = skillNames[i % skillNames.length];
                textParticle.draw = function() {
                    ctx.save();
                    ctx.globalAlpha = this.alpha;
                    ctx.fillStyle = this.color;
                    ctx.font = '16px "Press Start 2P"';
                    ctx.textAlign = 'center';
                    ctx.fillText(this.text, this.x, this.y);
                    ctx.restore();
                };
                particles.push(textParticle);
            }
            }
        }
        
        // Animate particles
        function animate() {
            ctx.fillStyle = 'rgba(245, 246, 250, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                
                // Remove particles with low alpha
                if (particles[i].alpha <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            
            // Add new particles if needed
            if (particles.length < 10 && isAnimating) {
                createParticles();
            }
            
            if (isAnimating) {
                animationId = requestAnimationFrame(animate);
            }
        }
        
        // Start demo button
        if (startBtn) {
            startBtn.addEventListener('click', function() {
                if (!isAnimating) {
                    isAnimating = true;
                    particles = [];
                    createParticles();
                    animate();
                    this.textContent = getCurrentLanguage() === 'en' ? 'Pause Demo' : '暂停演示';
                } else {
                    isAnimating = false;
                    cancelAnimationFrame(animationId);
                    this.textContent = getCurrentLanguage() === 'en' ? 'Start Demo' : '开始演示';
                }
            });
        }
        
        // Reset demo button
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                isAnimating = false;
                if (startBtn) startBtn.textContent = getCurrentLanguage() === 'en' ? 'Start Demo' : '开始演示';
                cancelAnimationFrame(animationId);
                particles = [];
                initCanvas();
            });
        }
        
        // Initialize canvas on load
        initCanvas();
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (name === '' || email === '' || subject === '' || message === '') {
                alert(getCurrentLanguage() === 'en' ? 'Please fill in all fields' : '请填写所有字段');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert(getCurrentLanguage() === 'en' ? 'Please enter a valid email address' : '请输入有效的电子邮件地址');
                return;
            }
            
            // If validation passes, show success message
            // In a real application, you would send the form data to a server here
            alert(getCurrentLanguage() === 'en' ? 'Thank you for your message! I will get back to you soon.' : '感谢您的留言！我会尽快回复您。');
            contactForm.reset();
        });
    }

    // Pixel Art Effect for Images
    document.querySelectorAll('.image-placeholder').forEach(placeholder => {
        placeholder.classList.add('pixel-border');
    });
    
    // Create initial floating boxes
    createFloatingBoxes();
    
    // Featured Works Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.featured-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselTrack = document.getElementById('featuredCarousel');
    
    if (slides.length > 0) {
        // Initialize carousel
        function updateCarousel() {
            // Update slide visibility
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
            
            // Move carousel track
            if (carouselTrack) {
                const translateX = -currentSlide * 25; // 25% per slide
                carouselTrack.style.transform = `translateX(${translateX}%)`;
            }
        }
        
        // Next slide function
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        }
        
        // Previous slide function
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        }
        
        // Event listeners for navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        // Auto-play carousel (optional)
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        // Start auto-play when page loads
        startAutoPlay();
        
        // Pause auto-play on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoPlay);
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
        }
        
        // Initialize carousel on page load
        updateCarousel();
    }
});
