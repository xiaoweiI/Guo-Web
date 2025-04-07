// Game Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Game data object containing details for each game
    const gameData = {
        'ai-adoption': {
            title: {
                en: 'AI Adoption Program',
                zh: 'AI领养计划'
            },
            category: {
                en: 'Game Jam, PC Game',
                zh: '游戏马拉松, PC游戏'
            },
            image: 'Ai Adoption.png',
            description: {
                en: 'Emotional interaction game about AI characters adopting humans. 2023 Game Jam Entry exploring dystopian themes. In this game, you play as an AI entity in a future where AI has become the dominant form of intelligence. You must select and "adopt" a human companion, making choices that affect their well-being and your relationship.\n\nWe designed a world where humans are treated as goods, similar to Promised Neverland, and are monitored by numerous cameras with a sign behind them. You take on the role of a rancher, running a ranch where humans are the "animals" of your ranch. Your task is to carefully develop them with strategies to make them into qualified goods.\n\nReflection: We had one week to create this game, and it was my first time participating in a game jam in Boston. The theme of this game jam was "Behind You." Since it was only a few days before Halloween, most of us considered horror-related content and themes when discussing game ideas. However, due to the broad nature of this theme, I thought about reducing the game\'s direct relevance to the theme to allow for more creative freedom. One of my team members suggested incorporating AI elements to enrich the game\'s content, so I needed to design how AI would combine with the horror aspect. I was reminded of how AI and robots often dominate humans in sci-fi movies, which frequently reflects humanity\'s fear of technological advancement.',
                zh: '关于AI角色领养人类的情感互动游戏。2023年游戏马拉松参赛作品，探索反乌托邦主题。在这个游戏中，你扮演未来世界中AI已成为主导智能形式的AI实体。你必须选择并"领养"一个人类伙伴，做出影响他们福祉和你们关系的选择。\n\n我们设计了一个人类被视为商品的世界，类似于《约定的梦幻岛》，他们被众多摄像头监控，背后有标志。你将扮演一名牧场主，经营一个以人类为"动物"的牧场。你的任务是用策略谨慎地培养他们，使他们成为合格的商品。\n\n反思：我们有一周的时间创建这个游戏，这是我第一次在波士顿参加游戏马拉松。这次游戏马拉松的主题是"在你身后"。由于距离万圣节只有几天，在讨论游戏创意时，我们大多数人都考虑了与恐怖相关的内容和主题。然而，由于这个主题的广泛性，我考虑减少游戏与主题的直接相关性，以允许更多的创作自由。我的一位团队成员建议融入AI元素来丰富游戏内容，所以我需要设计AI如何与恐怖方面结合。这让我想起了科幻电影中AI和机器人如何经常主宰人类，这经常反映了人类对技术进步的恐惧。'
            },
            features: {
                en: [
                    'Character-driven narrative with multiple endings',
                    'Emotional choice system that affects relationship development',
                    'Dystopian future setting with thought-provoking themes',
                    'Unique AI perspective on human relationships'
                ],
                zh: [
                    '以角色为驱动的叙事，拥有多种结局',
                    '影响关系发展的情感选择系统',
                    '发人深省的反乌托邦未来设定',
                    'AI视角下对人类关系的独特看法'
                ]
            },
            technologies: {
                en: ['Unity', 'C#', 'Ink Script', 'Procedural Animation'],
                zh: ['Unity', 'C#', 'Ink脚本', '程序化动画']
            },
            links: [
                {
                    text: {
                        en: 'Play on itch.io',
                        zh: '在itch.io上游玩'
                    },
                    url: 'https://itch.io/jam/jam-o-lantern-2023/rate/2349931',
                    icon: 'fas fa-gamepad'
                },
                {
                    text: {
                        en: 'Source Code',
                        zh: '源代码'
                    },
                    url: '#',
                    icon: 'fas fa-code'
                }
            ]
        },
        'quoted-out': {
            title: {
                en: 'Quoted Out!',
                zh: '引述出来！'
            },
            category: {
                en: 'Game Jam, PC Game',
                zh: '游戏马拉松, PC游戏'
            },
            image: 'Quated out.png',
            description: {
                en: 'Dialogue-based party game where players create humorous videos by editing interviews. 2024 Global Game Jam Winner. Players take turns being the interviewer and interviewee, with the goal of creating the most entertaining or absurd edited interview by selecting and rearranging dialogue snippets.\n\nIn this game, you play as a video editor. By editing the collected conversations, you create a video that makes people laugh out loud. Do your best to bring joy to the audience and make them laugh!\n\nReflection: The overall production time for this game was two weeks. Since I was also responsible for designing and planning two other game projects and continuing my studies, we mostly worked on the game during weekends and free time. The theme of this Game Jam was "Make Me Laugh," with a gameplay duration of around one minute. Since most of us had no experience making comedy games, we tried to interpret the theme from directions we were familiar with.\n\nAt the beginning of the game\'s production, I proposed three different ideas, interpreting the theme from three different angles: content, character traits, and gameplay. We ultimately adopted the gameplay direction, where the player needs to make others laugh. During our discussions, I thought of using montage editing techniques to swap responses, turning normal content into nonsensical, funny game content. Additionally, considering we only had one artist on the team, we needed to minimize art demands. I designed the player\'s role as an editor, with everything completed within the game\'s editing software, reducing the need for frequent scene changes.',
                zh: '基于对话的派对游戏，玩家通过编辑采访创建幽默视频。2024年全球游戏马拉松获奖作品。玩家轮流担任采访者和受访者，通过选择和重新排列对话片段来创建最有趣或荒谬的编辑采访。\n\n在这个游戏中，你扮演一名视频编辑。通过编辑收集到的对话，你创建一个让人们开怀大笑的视频。尽你所能为观众带来欢乐，让他们笑起来！\n\n反思：这个游戏的总制作时间为两周。由于我还负责设计和规划另外两个游戏项目并继续学习，我们主要在周末和空闲时间制作游戏。这次游戏马拉松的主题是"让我笑"，游戏时长约一分钟。由于我们大多数人都没有制作喜剧游戏的经验，我们尝试从熟悉的方向解释主题。\n\n在游戏制作初期，我提出了三种不同的想法，从三个不同角度解释主题：内容、角色特征和游戏玩法。我们最终采用了游戏玩法方向，玩家需要让其他人笑。在讨论过程中，我想到使用蒙太奇编辑技术来交换回答，将正常内容变成荒谬有趣的游戏内容。此外，考虑到团队中只有一名艺术家，我们需要最小化艺术需求。我将玩家的角色设计为编辑，所有内容都在游戏的编辑软件中完成，减少了频繁场景变化的需要。'
            },
            features: {
                en: [
                    'Multiplayer party game for 3-8 players',
                    'Intuitive dialogue editing system',
                    'Voting mechanism for best edited interviews',
                    'Hilarious results that can be shared on social media'
                ],
                zh: [
                    '适合3-8名玩家的多人派对游戏',
                    '直观的对话编辑系统',
                    '为最佳编辑采访投票的机制',
                    '可以在社交媒体上分享的搞笑结果'
                ]
            },
            technologies: {
                en: ['Unity', 'C#', 'Photon Networking', 'Video Processing'],
                zh: ['Unity', 'C#', 'Photon网络', '视频处理']
            },
            links: [
                {
                    text: {
                        en: 'Global Game Jam Page',
                        zh: '全球游戏马拉松页面'
                    },
                    url: 'https://globalgamejam.org/games/2024/funny-street-quiz-2',
                    icon: 'fas fa-gamepad'
                },
                {
                    text: {
                        en: 'Watch Demo Video',
                        zh: '观看演示视频'
                    },
                    url: 'https://www.youtube.com/watch?v=AJqIjL--6O8',
                    icon: 'fab fa-youtube'
                }
            ]
        },
        'party-paidui': {
            title: {
                en: 'Party! Paidui! Fiesta!',
                zh: '派对！排队！嘉年华！'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'party paidui.png',
            description: {
                en: 'A chaotic and fun party management game where players must organize the ultimate party while dealing with unexpected events and demanding guests. Balance resources, manage the queue, and ensure everyone has a good time in this fast-paced simulation game.',
                zh: '一款混乱而有趣的派对管理游戏，玩家必须在应对意外事件和要求苛刻的客人的同时组织终极派对。在这款快节奏的模拟游戏中，平衡资源，管理队列，确保每个人都玩得开心。'
            },
            features: {
                en: [
                    'Dynamic party management simulation',
                    'Resource balancing and guest satisfaction mechanics',
                    'Random events and challenges',
                    'Unlockable party themes and decorations',
                    'Multiple difficulty levels'
                ],
                zh: [
                    '动态派对管理模拟',
                    '资源平衡和客人满意度机制',
                    '随机事件和挑战',
                    '可解锁的派对主题和装饰',
                    '多种难度级别'
                ]
            },
            technologies: {
                en: ['Unity', 'C#', 'AI Behavior Systems', 'Procedural Generation'],
                zh: ['Unity', 'C#', 'AI行为系统', '程序化生成']
            },
            links: [
                {
                    text: {
                        en: 'Play on itch.io',
                        zh: '在itch.io上游玩'
                    },
                    url: 'https://valentinali.itch.io/party-paidui-fiesta',
                    icon: 'fas fa-gamepad'
                },
                {
                    text: {
                        en: 'Game Design Document',
                        zh: '游戏设计文档'
                    },
                    url: 'https://docs.google.com/document/d/1mYObztv9K2MpnWNcOTlbD0vit0fEi5UNTJSMXR29Y7Y/edit?usp=sharing',
                    icon: 'fas fa-file-alt'
                }
            ]
        },
        'back-home': {
            title: {
                en: 'Back Home',
                zh: '回家'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'BackHome.png',
            description: {
                en: 'Back Home is a life sim where a girl collects daily items with limited money. Your choices shape relationships and unlock multiple endings. Navigate through daily life challenges, manage your budget, and build meaningful connections with other characters in this heartwarming simulation game.',
                zh: '《回家》是一款生活模拟游戏，女孩在有限的金钱下收集日常物品。你的选择塑造关系并解锁多种结局。在这款温馨的模拟游戏中，应对日常生活挑战，管理预算，与其他角色建立有意义的联系。'
            },
            features: {
                en: [
                    'Immersive life simulation gameplay',
                    'Meaningful choices with lasting consequences',
                    'Relationship building with multiple characters',
                    'Economic management and budgeting',
                    'Multiple story paths and endings'
                ],
                zh: [
                    '沉浸式生活模拟游戏玩法',
                    '有持久影响的有意义选择',
                    '与多个角色建立关系',
                    '经济管理和预算',
                    '多条故事路径和结局'
                ]
            },
            technologies: {
                en: ['Unity', 'C#', 'Dialogue System', 'State Machine'],
                zh: ['Unity', 'C#', '对话系统', '状态机']
            },
            links: [
                {
                    text: {
                        en: 'Play on itch.io',
                        zh: '在itch.io上游玩'
                    },
                    url: 'https://xiaowei723.itch.io/backhome-final',
                    icon: 'fas fa-gamepad'
                },
                {
                    text: {
                        en: 'Game Design Document',
                        zh: '游戏设计文档'
                    },
                    url: 'https://docs.google.com/document/d/1KvKhpyxZNfu3qTfZFWq6XhXn9dfFgQJ2uG56p0Py3tc/edit?usp=sharing',
                    icon: 'fas fa-file-alt'
                }
            ]
        },
        'dorm-unpacking': {
            title: {
                en: 'Dorm Unpacking',
                zh: '宿舍整理'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'dorm unpacking.png',
            description: {
                en: 'Dorm Unpacking is a cozy puzzle game where you unpack and place items in a dorm room to earn points based on thoughtful organization. Create a comfortable living space while solving spatial puzzles and discovering the story of the room\'s occupant through their possessions.',
                zh: '《宿舍整理》是一款舒适的解谜游戏，玩家在宿舍中拆包并放置物品，根据周到的组织获得积分。在解决空间谜题的同时创造舒适的生活空间，并通过房间占用者的物品发现他们的故事。'
            },
            features: {
                en: [
                    'Relaxing unpacking and organization gameplay',
                    'Spatial puzzle solving',
                    'Narrative discovery through personal items',
                    'Customization options for the dorm room',
                    'Scoring system based on organization efficiency'
                ],
                zh: [
                    '轻松的拆包和组织游戏玩法',
                    '空间谜题解决',
                    '通过个人物品发现叙事',
                    '宿舍房间的自定义选项',
                    '基于组织效率的评分系统'
                ]
            },
            technologies: {
                en: ['Unity', 'C#', 'Physics System', 'Inventory Management'],
                zh: ['Unity', 'C#', '物理系统', '库存管理']
            },
            links: [
                {
                    text: {
                        en: 'Play on itch.io',
                        zh: '在itch.io上游玩'
                    },
                    url: 'https://xiaoweii.itch.io/final-project',
                    icon: 'fas fa-gamepad'
                }
            ]
        },
        'zombie-juice': {
            title: {
                en: 'Zombie Juice',
                zh: '僵尸果汁'
            },
            category: {
                en: 'Board Game',
                zh: '桌游'
            },
            image: 'Zombie Juice.png',
            description: {
                en: 'Match-3 board game with day/night cycle mechanics. Run a smoothie shop serving both humans and zombies. During the day, create refreshing smoothies for human customers, but at night, concoct special brain-flavored juices for your undead clientele. Balance your recipes and manage your inventory in this unique twist on match-3 gameplay.\n\nIn 2025, a zombie virus infected Earth, and humans and zombies went to war. After many years of conflict, humans and zombies finally found a way to coexist peacefully, and both were looking for delicious food. Welcome to Zomba Juice, a restaurant that serves tasty smoothies to both zombies and humans! Swap and match smoothie ingredients to fulfill human orders during the day and zombie orders at night. What? The zombies want brains in their smoothies? That\'s right! You can use poison to kill your human customers during the day to harvest their brains for the night shift when you serve the zombies delicious smoothies.\n\nReflection: This was my final game project for the game design course. It is a game based on the match-three mechanics, designed to adapt and conceptualize gameplay. I was one of the main designers for the rules and logic. During the design process, we first determined the theme and background to be a juice and milkshake shop in a fantasy world. This decision was made because the four members of my team and I all enjoy simulation management games, and a match-three game, with its numerous different elements, can perfectly integrate with simulation management gameplay. To enrich the game content, we designed a day-night cycle system. This system allows players to have two different choices when facing customers, adding a strategic layer to the game. Players need to adjust their strategies to maintain the balance between day and night.',
                zh: '带有昼夜循环机制的三消桌游。经营一家同时为人类和僵尸服务的冰沙店。白天，为人类顾客制作清爽的冰沙，但在晚上，为你的不死客户调制特殊的脑味果汁。在这种独特的三消游戏玩法中平衡你的配方并管理你的库存。\n\n2025年，僵尸病毒感染了地球，人类和僵尸开战。经过多年的冲突，人类和僵尸终于找到了和平共处的方式，双方都在寻找美味的食物。欢迎来到Zomba Juice，一家为僵尸和人类提供美味冰沙的餐厅！交换和匹配冰沙配料，白天满足人类订单，晚上满足僵尸订单。什么？僵尸想要脑子在他们的冰沙里？没错！你可以使用毒药在白天杀死人类顾客，收获他们的脑子，在夜班为僵尸提供美味的冰沙。\n\n反思：这是我游戏设计课程的最终游戏项目。它是一个基于三消机制的游戏，旨在适应和概念化游戏玩法。我是规则和逻辑的主要设计师之一。在设计过程中，我们首先确定主题和背景为奇幻世界中的果汁和奶昔店。之所以做出这个决定，是因为我和我的四位团队成员都喜欢模拟管理游戏，而三消游戏，凭借其众多不同元素，可以完美地与模拟管理游戏玩法结合。为了丰富游戏内容，我们设计了昼夜循环系统。这个系统允许玩家在面对顾客时有两种不同的选择，为游戏增加了战略层面。玩家需要调整策略，保持昼夜之间的平衡。'
            },
            features: {
                en: [
                    'Unique day/night cycle affecting gameplay',
                    'Match-3 mechanics with strategic depth',
                    'Resource management and recipe creation',
                    'Competitive multiplayer for 2-4 players',
                    'Thematic zombie apocalypse setting with humor'
                ],
                zh: [
                    '影响游戏玩法的独特昼夜循环',
                    '具有战略深度的三消机制',
                    '资源管理和配方创建',
                    '适合2-4名玩家的竞争性多人游戏',
                    '带有幽默的主题僵尸启示录设定'
                ]
            },
            technologies: {
                en: ['Physical Board Game', 'Card Design', 'Game Balance', 'Rule System'],
                zh: ['实体桌游', '卡牌设计', '游戏平衡', '规则系统']
            },
            links: [
                {
                    text: {
                        en: 'View Design Document',
                        zh: '查看设计文档'
                    },
                    url: 'https://www.canva.com/design/DAF_nJigNuY/_StFwFH1fXH1CLmLNF8Ww/edit',
                    icon: 'fas fa-file-alt'
                }
            ]
        },
        'beneath-ruins': {
            title: {
                en: 'Beneath the Ruins',
                zh: '废墟之下'
            },
            category: {
                en: 'Board Game',
                zh: '桌游'
            },
            image: 'Beneath the ruins.png',
            description: {
                en: 'Post-apocalyptic survival board game with resource management. Survive in a harsh environment after a catastrophic event. Players must explore the ruins of civilization, gather scarce resources, build shelters, and form alliances or rivalries with other survivors. Every decision could mean the difference between life and death in this tense survival experience.\n\nA catastrophe destroyed the city, leaving it in ruins. Several people are trapped in the buildings, and they must survive in the harsh environment. Food, water, medical supplies, weapons, and equipment—each is crucial for their survival.\n\nReflection: This was an independent project where I had to create an entire board game by myself. Prior to this, I had never made a complete board game, so I encountered some challenges in choosing materials and production methods. Eventually, I decided on a card game, with the primary gameplay focusing on resource management and survival. The creation of the game cards took some time because they needed to be shuffled and used frequently. It was best to choose professional card stock, which meant I couldn\'t simply cut and print the cards directly to make them.',
                zh: '后启示录生存桌游，具有资源管理元素。在灾难性事件后的恶劣环境中生存。玩家必须探索文明的废墟，收集稀缺资源，建造庇护所，并与其他幸存者形成联盟或竞争关系。在这种紧张的生存体验中，每个决定都可能意味着生死之差。\n\n一场灾难摧毁了城市，只留下废墟。几个人被困在建筑物中，他们必须在恶劣的环境中生存。食物、水、医疗用品、武器和装备——每一样都对他们的生存至关重要。\n\n反思：这是一个独立项目，我必须自己创建一个完整的桌游。在此之前，我从未制作过完整的桌游，所以在选择材料和制作方法方面遇到了一些挑战。最终，我决定做一个卡牌游戏，主要游戏玩法集中在资源管理和生存上。游戏卡牌的制作花了一些时间，因为它们需要经常洗牌和使用。最好选择专业的卡片纸，这意味着我不能简单地直接剪切和打印卡片来制作它们。'
            },
            features: {
                en: [
                    'Immersive post-apocalyptic setting',
                    'Complex resource management and survival mechanics',
                    'Dynamic map exploration and discovery',
                    'Character development and skill progression',
                    'Cooperative and competitive gameplay elements'
                ],
                zh: [
                    '身临其境的后启示录设定',
                    '复杂的资源管理和生存机制',
                    '动态地图探索和发现',
                    '角色发展和技能进阶',
                    '合作和竞争游戏元素'
                ]
            },
            technologies: {
                en: ['Physical Board Game', 'Modular Board Design', 'Card System', 'Dice Mechanics'],
                zh: ['实体桌游', '模块化板设计', '卡牌系统', '骰子机制']
            },
            links: [
                {
                    text: {
                        en: 'View Rules Document',
                        zh: '查看规则文档'
                    },
                    url: 'https://docs.google.com/document/d/1qnsKgKxGZD807CMnPaZ1Sj9cDMblbHPJocQRZWjhGZg/edit',
                    icon: 'fas fa-file-alt'
                }
            ]
        },
        'wallet-war': {
            title: {
                en: 'Wallet War',
                zh: '钱包战争'
            },
            category: {
                en: 'Board Game',
                zh: '桌游'
            },
            image: 'Wallet War.png',
            description: {
                en: 'Card game about managing finances and competing for wallet space. Adapted from the classic board game "Love Letter". Players strategically play cards representing different financial instruments and expenses, trying to optimize their wallet while sabotaging opponents\' financial plans. A quick-to-learn but deep game of financial strategy and bluffing.\n\nThe story takes place in modern society. A girl studying in a big city has her own wallet, but its capacity is limited. Meanwhile, various expenses are competing for space in her wallet, each aiming to get as much money from it as possible. And so, the wallet wars begin.\n\nReflection: This project is mainly an adaptation of the classic board game "Love Letter." Players can easily play a round by drawing and using cards. During the design process, I realized that it was not only necessary to adapt the concept and background but also to ensure that the functionality of the cards matched well with the game\'s concept, greatly affecting the game\'s playability. This gave me a small insight, even though I usually don\'t enjoy adaptations.',
                zh: '关于管理财务和争夺钱包空间的卡牌游戏。改编自经典桌游《情书》。玩家战略性地打出代表不同金融工具和支出的卡牌，试图优化自己的钱包，同时破坏对手的财务计划。一款易学但深度的金融策略和虚张声势游戏。\n\n故事发生在现代社会。一个在大城市学习的女孩有自己的钱包，但其容量有限。同时，各种支出正在争夺她钱包中的空间，每种支出都旨在从中获取尽可能多的钱。于是，钱包战争开始了。\n\n反思：这个项目主要是对经典桌游《情书》的改编。玩家可以通过抽牌和使用牌轻松地玩一轮。在设计过程中，我意识到不仅需要改编概念和背景，还需要确保卡牌的功能与游戏概念很好地匹配，这极大地影响了游戏的可玩性。这给了我一个小启示，尽管我通常不喜欢改编作品。'
            },
            features: {
                en: [
                    'Fast-paced card game with financial theme',
                    'Strategic decision making with limited information',
                    'Bluffing and deduction mechanics',
                    'Accessible rules with significant depth',
                    'Quick setup and play time (15-30 minutes)'
                ],
                zh: [
                    '以金融为主题的快节奏卡牌游戏',
                    '有限信息下的战略决策',
                    '虚张声势和推理机制',
                    '易于理解的规则但具有显著深度',
                    '快速设置和游戏时间（15-30分钟）'
                ]
            },
            technologies: {
                en: ['Card Game Design', 'Game Balance', 'Probability Analysis', 'Graphic Design'],
                zh: ['卡牌游戏设计', '游戏平衡', '概率分析', '图形设计']
            },
            links: [
                {
                    text: {
                        en: 'View Rules Document',
                        zh: '查看规则文档'
                    },
                    url: 'https://docs.google.com/document/d/18dWQ4Yt_3UwC83mGMStgjUxLmIV_rFY94Vv1zG62ZE/edit',
                    icon: 'fas fa-file-alt'
                }
            ]
        },
        'princess-lianan': {
            title: {
                en: 'Princess Lianan',
                zh: '莲安公主'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'Lianan.png',
            description: {
                en: 'Fantasy RPG adventure with princess protagonist. Features turn-based combat and multiple endings based on player choices. Play as Princess Lianan, who must embark on a journey to save her kingdom from a mysterious curse. Along the way, she\'ll encounter allies and enemies, develop her magical abilities, and make choices that determine the fate of her realm.\n\nReflection: This was one of my earlier game development projects, where I explored narrative-driven gameplay and character development. I wanted to create a traditional RPG experience but with a focus on meaningful player choices that would significantly impact the story and ending. The princess protagonist was designed to subvert typical damsel-in-distress tropes, instead being a proactive character who takes charge of her own destiny.',
                zh: '以公主为主角的奇幻RPG冒险。具有回合制战斗和基于玩家选择的多种结局。扮演莲安公主，她必须踏上旅程拯救她的王国免受神秘诅咒。在途中，她将遇到盟友和敌人，发展她的魔法能力，并做出决定她领域命运的选择。\n\n反思：这是我早期的游戏开发项目之一，我在其中探索了叙事驱动的游戏玩法和角色发展。我想创造一种传统的RPG体验，但注重有意义的玩家选择，这些选择会显著影响故事和结局。公主主角的设计是为了颠覆典型的落难少女形象，而是一个主动掌控自己命运的角色。'
            },
            features: {
                en: [
                    'Rich narrative with branching storylines',
                    'Turn-based combat system with strategic depth',
                    'Character progression and skill development',
                    'Meaningful choices affecting the game world',
                    'Multiple endings based on player decisions'
                ],
                zh: [
                    '丰富的叙事与分支故事线',
                    '具有战略深度的回合制战斗系统',
                    '角色进阶和技能发展',
                    '影响游戏世界的有意义选择',
                    '基于玩家决策的多种结局'
                ]
            },
            technologies: {
                en: ['RPG Maker', 'JavaScript', 'Custom Battle System', 'Narrative Design'],
                zh: ['RPG制作大师', 'JavaScript', '自定义战斗系统', '叙事设计']
            },
            links: [
                {
                    text: {
                        en: 'Play on 66RPG',
                        zh: '在66RPG上游玩'
                    },
                    url: 'https://www.66rpg.com/game/946423',
                    icon: 'fas fa-gamepad'
                }
            ]
        },
        'above-fountain': {
            title: {
                en: 'Above the Fountain',
                zh: '喷泉之上'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'Above the Fountain.png',
            description: {
                en: 'First-person narrative puzzle game where players explore surreal worlds. Features mind-bending puzzles and non-linear exploration. Journey through a series of interconnected dreamlike environments, each centered around a mysterious fountain. Solve environmental puzzles that challenge your perception and uncover the story of how these surreal worlds came to be.\n\nReflection: This project was inspired by my fascination with surrealist art and non-linear storytelling. I wanted to create an experience where the environment itself tells a story, and where players could piece together the narrative through exploration and puzzle-solving. The central motif of the fountain serves as both a visual anchor and a metaphorical element, representing the source of creativity and imagination that flows through the game\'s various dreamscapes.',
                zh: '第一人称叙事解谜游戏，玩家探索超现实世界。具有令人费解的谜题和非线性探索。穿越一系列相互连接的梦幻般环境，每个环境都以一个神秘的喷泉为中心。解决挑战你认知的环境谜题，揭示这些超现实世界如何形成的故事。\n\n反思：这个项目受到我对超现实主义艺术和非线性叙事的迷恋的启发。我想创造一种环境本身讲述故事的体验，玩家可以通过探索和解谜来拼凑叙事。喷泉的中心主题既是视觉锚点，也是一个隐喻元素，代表流经游戏各种梦境的创造力和想象力的源泉。'
            },
            features: {
                en: [
                    'Surreal, visually striking environments',
                    'Mind-bending environmental puzzles',
                    'Non-linear exploration and discovery',
                    'Atmospheric storytelling through the environment',
                    'Multiple interpretations of the narrative'
                ],
                zh: [
                    '超现实，视觉冲击力强的环境',
                    '令人费解的环境谜题',
                    '非线性探索和发现',
                    '通过环境进行的氛围叙事',
                    '对叙事的多种解释'
                ]
            },
            technologies: {
                en: ['Unity', 'C#', 'Shader Programming', 'Environmental Storytelling'],
                zh: ['Unity', 'C#', '着色器编程', '环境叙事']
            },
            links: [
                {
                    text: {
                        en: 'Play on 66RPG',
                        zh: '在66RPG上游玩'
                    },
                    url: 'https://www.66rpg.com/game/1280015',
                    icon: 'fas fa-gamepad'
                }
            ]
        },
        'silent-majority': {
            title: {
                en: 'The Silent Majority',
                zh: '沉默的大多数'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'The Silent Majority.png',
            description: {
                en: 'Social experiment visual novel exploring cyber violence and online mob mentality. Features moral dilemmas with no clear right answers. Experience the story from multiple perspectives as you navigate the aftermath of a viral social media incident. Your choices will influence public opinion, affect the lives of those involved, and reveal the complexities of online interactions.\n\nReflection: This project was born from my observations of how social media can amplify both positive and negative aspects of human interaction. I wanted to create a game that didn\'t preach or provide easy answers, but instead put players in difficult situations where they could experience the nuanced reality of online discourse and mob mentality. By allowing players to experience the story from multiple perspectives, I aimed to foster empathy and critical thinking about how we engage with others in digital spaces.',
                zh: '探索网络暴力和在线群体心理的社会实验视觉小说。具有没有明确正确答案的道德困境。当你应对病毒式社交媒体事件的后果时，从多个角度体验故事。你的选择将影响公众舆论，影响相关人员的生活，并揭示在线互动的复杂性。\n\n反思：这个项目源于我对社交媒体如何放大人类互动的积极和消极方面的观察。我想创造一个不说教或提供简单答案的游戏，而是将玩家置于困难的情境中，让他们体验在线话语和群体心理的细微现实。通过允许玩家从多个角度体验故事，我旨在培养对我们如何在数字空间中与他人互动的同理心和批判性思考。'
            },
            features: {
                en: [
                    'Multiple character perspectives',
                    'Branching narrative based on player choices',
                    'Social media simulation elements',
                    'Thought-provoking moral dilemmas',
                    'Commentary on digital age social dynamics'
                ],
                zh: [
                    '多角色视角',
                    '基于玩家选择的分支叙事',
                    '社交媒体模拟元素',
                    '发人深省的道德困境',
                    '对数字时代社会动态的评论'
                ]
            },
            technologies: {
                en: ['Visual Novel Engine', 'Narrative Design', 'Choice-Based Gameplay', 'Social Simulation'],
                zh: ['视觉小说引擎', '叙事设计', '基于选择的游戏玩法', '社会模拟']
            },
            links: [
                {
                    text: {
                        en: 'Play on 66RPG',
                        zh: '在66RPG上游玩'
                    },
                    url: 'https://www.66rpg.com/game/950049',
                    icon: 'fas fa-gamepad'
                }
            ]
        }
    };

    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Get current language
    function getCurrentLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        return savedLang && (savedLang === 'en' || savedLang === 'zh') ? savedLang : 'en';
    }

    // Function to update language
    function updateLanguage(lang) {
        // Update language attribute on html tag
        document.documentElement.setAttribute('lang', lang);
        
        // Update language switcher button text
        const langBtn = document.getElementById('langSwitcher');
        if (langBtn) {
            langBtn.textContent = lang === 'en' ? '中文' : 'English';
        }
        
        // Load game details in the selected language
        loadGameDetails(currentGameId, lang);
        
        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
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

    // Function to load game details
    function loadGameDetails(gameId, lang) {
        const game = gameData[gameId];
        
        if (!game) {
            // Handle case where game is not found
            document.getElementById('game-title').textContent = lang === 'en' ? 'Game Not Found' : '找不到游戏';
            document.getElementById('game-description').textContent = lang === 'en' ? 
                'Sorry, the requested game could not be found.' : 
                '抱歉，找不到请求的游戏。';
            return;
        }
        
        // Set page title
        document.title = `${game.title[lang]} - My Pixel Art Portfolio`;
        
        // Update game details
        document.getElementById('game-title').textContent = game.title[lang];
        document.getElementById('game-category').textContent = game.category[lang];
        document.getElementById('game-image').src = game.image;
        document.getElementById('game-image').alt = game.title[lang];
        document.getElementById('game-description').textContent = game.description[lang];
        
        // Update features list
        const featuresList = document.getElementById('game-features');
        featuresList.innerHTML = '';
        game.features[lang].forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Update technologies
        const techContainer = document.getElementById('game-technologies');
        techContainer.innerHTML = '';
        game.technologies[lang].forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag pixel-border';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });
        
        // Update links
        const linksContainer = document.getElementById('game-links');
        linksContainer.innerHTML = '';
        game.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'game-link pixel-btn';
            linkElement.target = '_blank';
            
            const icon = document.createElement('i');
            icon.className = link.icon;
            linkElement.appendChild(icon);
            
            const linkText = document.createTextNode(' ' + link.text[lang]);
            linkElement.appendChild(linkText);
            
            linksContainer.appendChild(linkElement);
        });
    }

    // Get game ID from URL parameter
    const currentGameId = getUrlParameter('id');
    const currentLang = getCurrentLanguage();
    
    // Load game details
    if (currentGameId) {
        loadGameDetails(currentGameId, currentLang);
    } else {
        // Redirect to games page if no ID is provided
        window.location.href = 'index.html#games';
    }
});
