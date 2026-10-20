// Game Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Game data object containing details for each game
    const gameData = {
        'ai-adoption': {
            title: {
                en: 'AI Adoption Program',
                zh: 'AI领养计划'
            },
            role: {
                en: 'Main Designer + Team Leader',
                zh: '主设计师 + 团队领导'
            },
            category: {
                en: 'Game Jam, PC Game',
                zh: '游戏马拉松, PC游戏'
            },
            image: 'assets/img/ai-adoption.jpg',
            gallery: ['assets/img/ai-adoption.jpg'],
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
                        en: 'Download Game',
                        zh: '下载游戏'
                    },
                    url: 'Download/AI Adoption Program Unseen.zip',
                    icon: 'fas fa-download'
                }
            ]
        },
        'quoted-out': {
            title: {
                en: 'Quoted Out!',
                zh: '引述出来！'
            },
            role: {
                en: 'Main Designer + Team Leader',
                zh: '主设计师 + 团队领导'
            },
            category: {
                en: 'Game Jam, PC Game',
                zh: '游戏马拉松, PC游戏'
            },
            image: 'assets/img/quoted-out.jpg',
            gallery: ['assets/img/quoted-out.jpg'],
            facts: [
                { label: { en: 'Role', zh: '职位' }, value: { en: 'Main Designer · Team Lead', zh: '主设计师 · 队长' } },
                { label: { en: 'Event', zh: '赛事' }, value: { en: 'Global Game Jam 2024', zh: '2024 全球游戏马拉松' } },
                { label: { en: 'Timeframe', zh: '时间' }, value: { en: 'Two weekends', zh: '两周（周末开发）' } },
                { label: { en: 'Team', zh: '团队' }, value: { en: 'Small team · one artist', zh: '小团队 · 一名美术' } }
            ],
            challenge: {
                en: 'The 2024 Global Game Jam theme was "Make Me Laugh" — but nobody on the team had made a comedy game before, we only had weekends across two weeks, and just one artist. The design had to reliably produce player-made humor instead of scripted jokes, within those constraints.',
                zh: '2024 全球游戏马拉松的主题是"让我笑"——但团队没人做过喜剧游戏，我们只有两周里的周末时间，美术只有一个人。设计必须在这些约束下让幽默由玩家自己创造，而不是依赖写死的笑点。'
            },
            designed: {
                en: [
                    { t: 'Theme direction', d: 'pitched three interpretations (content, character, gameplay); led the team to "players make each other laugh"' },
                    { t: 'Montage-editing core mechanic', d: 'swap interview answers so ordinary lines cut into absurd, hilarious videos' },
                    { t: 'Single-screen framing', d: 'the player is a video editor — one editing-UI screen, minimal art load for a single artist' },
                    { t: 'One-minute rounds', d: 'fast interviewer/interviewee rotation keeps every player in the loop' }
                ],
                zh: [
                    { t: '主题方向', d: '提出内容、角色、玩法三种解读，带队选定"让玩家彼此逗笑"' },
                    { t: '蒙太奇剪辑核心机制', d: '交换采访回答，让正常对话剪出荒谬爆笑的视频' },
                    { t: '单屏框定', d: '玩家是视频剪辑师——全部玩法在一个剪辑软件界面里，为唯一美术压缩工作量' },
                    { t: '一分钟一局', d: '采访者/受访者快速轮换，所有玩家持续参与' }
                ]
            },
            outcome: {
                en: '🏆 Winner at Global Game Jam 2024. Playable build and demo video below.',
                zh: '🏆 2024 全球游戏马拉松获奖作品。可玩版本与演示视频见下方链接。'
            },
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
                },
                {
                    text: {
                        en: 'Download Game',
                        zh: '下载游戏'
                    },
                    url: 'Download/Quated Out!Exe.zip',
                    icon: 'fas fa-download'
                }
            ]
        },
        'party-paidui': {
            title: {
                en: 'Party! Paidui! Fiesta!',
                zh: '派对！排队！嘉年华！'
            },
            role: {
                en: 'Co-designer & Developer',
                zh: '联合设计师 & 开发者'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'assets/img/party-paidui.jpg',
            gallery: ['assets/img/party-paidui.jpg'],
            description: {
                en: 'A chaotic and fun party management game where players must organize the ultimate party while dealing with unexpected events and demanding guests. Balance resources, manage the queue, and ensure everyone has a good time in this fast-paced simulation game.',
                zh: '一款混乱而有趣的派对管理游戏，玩家必须在应对意外事件和要求苛刻的客人的同时组织终极派对。在这款快节奏的模拟游戏中，平衡资源，管理队列，确保每个人都玩得开心。如果无法点开itch.io的链接，可以点击最后的下载按钮。'
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
                },
                {
                    text: {
                        en: 'Download Game',
                        zh: '下载游戏'
                    },
                    url: 'https://pan.baidu.com/s/1J9IwgQwitRc8VcBPdQRyPA?pwd=8ibs',
                    icon: 'fas fa-download'
                }
            ]
        },
        'back-home': {
            title: {
                en: 'Back Home',
                zh: '回家'
            },
            role: {
                en: 'Sole Developer',
                zh: '独立开发者'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'assets/img/back-home.jpg',
            gallery: ['assets/img/back-home.jpg'],
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
                },
                {
                    text: {
                        en: 'Download Game',
                        zh: '下载游戏'
                    },
                    url: 'Download/Back Home.zip',
                    icon: 'fas fa-download'
                }
            ]
        },
        'dorm-unpacking': {
            title: {
                en: 'Dorm Unpacking',
                zh: '宿舍整理'
            },
            role: {
                en: 'Sole Developer',
                zh: '独立开发者'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'assets/img/dorm-unpacking.jpg',
            gallery: ['assets/img/dorm-unpacking.jpg'],
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
                },
                {
                    text: {
                        en: 'Download Game',
                        zh: '下载游戏'
                    },
                    url: 'Download/Dorm Unpack.zip',
                    icon: 'fas fa-download'
                }
            ]
        },
        'zombie-juice': {
            title: {
                en: 'Zombie Juice',
                zh: '僵尸果汁'
            },
            role: {
                en: 'Co-designer & Developer',
                zh: '联合设计师 & 开发者'
            },
            category: {
                en: 'Board Game',
                zh: '桌游'
            },
            image: 'assets/img/zombie-juice.jpg',
            gallery: ['assets/img/zombie-juice.jpg'],
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
            role: {
                en: 'Sole Developer',
                zh: '独立开发者'
            },
            category: {
                en: 'Board Game',
                zh: '桌游'
            },
            image: 'assets/img/beneath-ruins.jpg',
            gallery: ['assets/img/beneath-ruins.jpg'],
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
            role: {
                en: 'Sole Developer',
                zh: '独立开发者'
            },
            category: {
                en: 'Board Game',
                zh: '桌游'
            },
            image: 'assets/img/wallet-war.jpg',
            gallery: ['assets/img/wallet-war.jpg'],
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
            links: []
        },
        'princess-lianan': {
            title: {
                en: 'Princess Lianan',
                zh: '莲安公主'
            },
            role: {
                en: 'Sole Developer',
                zh: '独立开发者'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'assets/img/princess-lianan.jpg',
            gallery: ['assets/img/princess-lianan.jpg'],
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
            role: {
                en: 'Sole Developer',
                zh: '独立开发者'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'assets/img/above-fountain.jpg',
            gallery: ['assets/img/above-fountain.jpg'],
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
            role: {
                en: 'Sole Developer',
                zh: '独立开发者'
            },
            category: {
                en: 'PC Game',
                zh: 'PC游戏'
            },
            image: 'assets/img/silent-majority.jpg',
            gallery: ['assets/img/silent-majority.jpg'],
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
        },
        'petch': {
            title: {
                en: 'Petch',
                zh: 'Petch'
            },
            role: {
                en: 'Game Designer',
                zh: '游戏设计师'
            },
            category: {
                en: 'AI Social Platform, Social PvP',
                zh: 'AI社交平台，社交PvP'
            },
            image: 'assets/img/petch.jpg',
            gallery: ['assets/img/petch.jpg'],
            facts: [
                { label: { en: 'Role', zh: '职位' }, value: { en: 'Game Designer', zh: '游戏设计师' } },
                { label: { en: 'Studio', zh: '公司' }, value: { en: 'Petch · Irvine, CA', zh: 'Petch · 加州' } },
                { label: { en: 'When', zh: '时间' }, value: { en: 'Jul 2025 – Present', zh: '2025.7 – 至今' } },
                { label: { en: 'Worked with', zh: '协作' }, value: { en: 'PMs · engineers · UI/UX', zh: '产品 · 工程 · UI/UX' } }
            ],
            challenge: {
                en: 'Pet personality data is fun to read but hard to play. The challenge: turn MBTI-style personality into actual gameplay — builds, matchups, and social PvP — while staying light enough for a pet-owner audience.',
                zh: '宠物性格数据读起来有趣，玩起来却很难。挑战在于把 MBTI 式性格变成真正的玩法——构筑、对位与社交 PvP——同时保持宠物主人群体能接受的轻量感。'
            },
            designed: {
                en: [
                    { t: 'Pet personality (MBTI) systems', d: '16 personality archetypes architected to drive builds and matchups' },
                    { t: 'Roguelike social PvP mode', d: '16-tile match-style mechanic with strategic trait pairing and high replayability' },
                    { t: 'Playable prototypes', d: 'Unity, React Native, C#; UI/UX flows in Figma and Canvas' },
                    { t: 'Feedback-driven iteration', d: 'systems iterated continuously with PMs, gameplay engineers, and UI/UX designers' }
                ],
                zh: [
                    { t: '宠物性格（MBTI）系统', d: '架构 16 种性格原型，驱动构筑与对位' },
                    { t: 'Roguelike 社交 PvP 模式', d: '16 格消除式机制，特质搭配策略与高重玩性' },
                    { t: '可玩原型', d: 'Unity、React Native、C#；Figma 与 Canvas 设计 UI/UX 流程' },
                    { t: '反馈驱动迭代', d: '与产品经理、玩法工程师、UI/UX 设计师持续协作迭代' }
                ]
            },
            tradeoff: {
                en: 'Depth vs. lightness: 16 personality archetypes could carry a full roguelike PvP, but pet owners wanted something light, so builds stayed at trait pairs and the match-style board carried the depth.',
                zh: '深度还是轻量：16 种性格原型足够撑起完整的 roguelike PvP，但宠物主人要的是轻量，所以构筑只留性格配对，深度交给消除式棋盘。'
            },
            outcome: {
                en: 'In active development (Jul 2025 – present) — playtested by roughly 1,000 players to date, iterating on live feedback.',
                zh: '开发进行中（2025.7 至今）——累计约 1000 名玩家参与测试，基于真实反馈持续迭代。'
            },
            description: {
                en: 'Petch is an AI-powered social platform for pets and pet lovers. We use AI chatbots, pet personality tests, and behavioral data to help pet owners better understand their pets, connect with like-minded owners, and unlock services across insurance, e-commerce, and beyond. By deepening the bond between humans and animals, Petch creates unique data and service value in the pet care ecosystem.\n\nAs the Game Designer (Pet Personality & Social Interaction), I build the interactive experiences that reflect pet personalities and foster owner engagement — playful, gamified systems that make discovering your pet\'s traits and forming community bonds fun and meaningful.\n\nThe pet economy is experiencing rapid growth, with the global pet industry market size having exceeded hundreds of billions of dollars. Petch was born as an innovative product in this context, focusing on "understanding pets" through artificial intelligence technology, filling the gap left by traditional pet social platforms that lack personalized interaction and data support.\n\nReflection: Working on Petch gave me valuable experience in designing gamification systems for social platforms. The challenge was to create engaging mechanics that would encourage user participation while maintaining the authenticity of pet-owner relationships. I learned how to balance entertainment value with meaningful social connections, and how AI can be used to enhance rather than replace genuine human-pet bonds.',
                zh: 'Petch是一家基于人工智能技术的宠物社交平台，致力于打造一个连接宠物与宠物主人的智能互动社区。通过AI宠物性格测试、AI聊天机器人、宠物主人社群互动等核心功能，Petch帮助主人更深入地了解宠物行为与情绪，并基于数据推动宠物保险、电商、健康咨询等延伸服务的发展。\n\n作为游戏设计师（宠物性格与社交互动方向），我负责构建反映宠物性格并促进主人参与的互动体验——用有趣的游戏化系统，让发现宠物特质、建立社区纽带变得好玩且有意义。\n\n宠物经济正在高速增长，全球宠物行业市场规模已突破数千亿美元。Petch正是在此背景下诞生的创新型产品，聚焦于"懂宠物"的人工智能技术，填补传统宠物社交平台缺乏个性化互动与数据支持的空白。\n\n反思：在Petch的工作让我在为社交平台设计游戏化系统方面获得了宝贵经验。挑战在于创建引人入胜的机制，既能鼓励用户参与，又能保持宠物-主人关系的真实性。我学会了如何平衡娱乐价值与有意义的社交连接，以及如何使用AI来增强而不是取代真正的人宠纽带。'
            },
            features: {
                en: [
                    'AI-powered pet personality analysis system',
                    'Gamified pet personality testing flows and reward systems',
                    'Social interaction layers with daily quests and pet compatibility',
                    'AI pet dialogue assistant for medical consultation',
                    'Pet owner social connections through personality matching',
                    'Integration with pet insurance, e-commerce, and health services'
                ],
                zh: [
                    'AI驱动的宠物性格分析系统',
                    '游戏化的宠物性格测试流程和奖励系统',
                    '带有每日任务和宠物兼容性的社交互动层',
                    '用于医疗咨询的AI宠物对话助手',
                    '通过性格匹配的宠物主人社交连接',
                    '与宠物保险、电商和健康服务的整合'
                ]
            },
            technologies: {
                en: ['Unity', 'Godot', 'AI Chatbots', 'Behavioral Data Analysis', 'Mobile Game Mechanics', 'Social Platform Design'],
                zh: ['Unity', 'Godot', 'AI聊天机器人', '行为数据分析', '移动游戏机制', '社交平台设计']
            },
            links: [
                {
                    text: {
                        en: 'Visit Petch Website',
                        zh: '访问Petch网站'
                    },
                    url: 'https://www.petchapp.com/',
                    icon: 'fas fa-external-link-alt'
                },
                {
                    text: {
                        en: 'Company Information',
                        zh: '公司信息'
                    },
                    url: 'https://www.petchapp.com/',
                    icon: 'fas fa-building'
                }
            ]
        },
        'dramai-ai': {
            title: {
                en: 'Dramai.AI',
                zh: 'Dramai.AI'
            },
            role: {
                en: 'AI Game Designer — Cuboid.AI',
                zh: 'AI 游戏设计师 — Cuboid.AI'
            },
            category: {
                en: 'AI Social Platform, Interactive Drama, Startup',
                zh: 'AI社交平台，互动戏剧，创业公司'
            },
            image: 'assets/img/dramai.jpg',
            gallery: ['assets/img/dramai.jpg', 'assets/img/dramai-1.jpg', 'assets/img/dramai-2.jpg', 'assets/img/dramai-3.jpg', 'assets/img/dramai-4.jpg', 'assets/img/dramai-5.jpg', 'assets/img/dramai-6.jpg', 'assets/img/dramai-7.jpg'],
            facts: [
                { label: { en: 'Role', zh: '职位' }, value: { en: 'AI Game Designer', zh: 'AI 游戏设计师' } },
                { label: { en: 'Studio', zh: '公司' }, value: { en: 'Cuboid.AI · Burlingame, CA', zh: 'Cuboid.AI · 加州' } },
                { label: { en: 'When', zh: '时间' }, value: { en: 'Apr – Jul 2025', zh: '2025.4 – 2025.7' } },
                { label: { en: 'Worked with', zh: '协作' }, value: { en: 'AI developer team', zh: 'AI 开发团队' } }
            ],
            challenge: {
                en: 'Multi-agent LLM stories drift by default: agents forget goals, contradict each other, and produce walls of text nobody wants to read. The design problem was keeping AI-generated drama legible and playable — giving players real agency without scripting away the surprise.',
                zh: '多智能体 LLM 叙事默认会失控：智能体忘记目标、互相矛盾、产出没人想读的大段文字。设计问题在于让 AI 生成的戏剧保持可读、可玩——给玩家真实的参与感，又不用剧本扼杀意外性。'
            },
            designed: {
                en: [
                    { t: 'Multi-agent narrative systems', d: 'emotional logic, role constraints, and conflict rules for a cast of ~10 agents' },
                    { t: 'Prompt guardrails', d: 'reduced hallucination and out-of-character behavior, keeping narration aligned with gameplay goals' },
                    { t: 'Storytelling & gameplay foundation', d: 'core features built together with the AI developer team' },
                    { t: 'Visual & UX pipeline', d: 'image/art via Lovart, Veo3, Keling, GPT; flowcharts and UX planning in Figma' }
                ],
                zh: [
                    { t: '多智能体叙事系统', d: '为约 10 个智能体定义情绪逻辑、角色约束与冲突规则' },
                    { t: 'Prompt 护栏', d: '降低幻觉与 OOC（出戏）行为，保证叙事与玩法目标一致' },
                    { t: '叙事与玩法基础', d: '与 AI 开发团队共同搭建核心功能' },
                    { t: '视觉与 UX 管线', d: 'Lovart、Veo3、可灵、GPT 产出图像美术；Figma 梳理流程与 UX' }
                ]
            },
            tradeoff: {
                en: 'Guardrails vs. surprise: I chose hard role constraints and conflict rules in the prompts, trading some agent spontaneity for fewer hallucinations and out-of-character lines.',
                zh: '护栏还是惊喜：我选了在提示词里写死角色约束和冲突规则，用一部分智能体的即兴换来更少的幻觉和出戏台词。'
            },
            outcome: {
                en: 'Shipped as the platform\'s core experience — around 10 AI agents across two live scenes at dramai.world.',
                zh: '成为平台核心体验——约 10 个 AI 智能体分布在两个上线场景，见 dramai.world。'
            },
            description: {
                en: 'Dramai.AI is an Interactive Social AGI Playground - Building a Digital Civilization Sandbox for AI-Human Co-evolution with multi-agent storytelling. This innovative platform creates a virtual world where AI agents and humans can interact, collaborate, and co-create stories in real-time.\n\nThe platform represents a breakthrough in AI-human interaction, where multiple AI agents with distinct personalities, backgrounds, and motivations interact with each other and with human users in a persistent virtual world. Each AI agent has its own goals, relationships, and evolving storylines that create an ever-changing narrative landscape.\n\nAs a key contributor to this project, I was involved in designing the interaction systems that govern how AI agents behave, make decisions, and form relationships with both other agents and human participants. The challenge was to create believable, engaging characters that could maintain consistency while adapting to unexpected situations and user inputs.\n\nThe project explores themes of digital consciousness, artificial society, and the future of human-AI collaboration. It serves as both an entertainment platform and a research environment for studying emergent behaviors in multi-agent systems.\n\nReflection: Working on Dramai.AI gave me invaluable experience in designing complex AI behavior systems and understanding the nuances of human-AI interaction. The project challenged me to think about AI not just as a tool, but as potential collaborators in creative processes. I learned about the importance of creating AI personalities that feel authentic while maintaining the flexibility to respond to dynamic storytelling scenarios. This project opened my eyes to the potential of AI as creative partners rather than just functional assistants.',
                zh: 'Dramai.AI是一个互动社交AGI游乐场 - 构建AI-人类共同进化的数字文明沙盒，具有多智能体叙事功能。这个创新平台创建了一个虚拟世界，AI智能体和人类可以实时互动、协作和共同创作故事。\n\n该平台代表了AI-人类交互的突破，多个具有不同个性、背景和动机的AI智能体在持续的虚拟世界中相互交互，并与人类用户互动。每个AI智能体都有自己的目标、关系和不断发展的故事线，创造了一个不断变化的叙事景观。\n\n作为这个项目的重要贡献者，我参与设计了控制AI智能体行为、决策制定以及与其他智能体和人类参与者形成关系的交互系统。挑战在于创造可信、引人入胜的角色，这些角色能够保持一致性，同时适应意外情况和用户输入。\n\n该项目探索了数字意识、人工社会和人类-AI协作未来的主题。它既是一个娱乐平台，也是研究多智能体系统中涌现行为的研究环境。\n\n反思：在Dramai.AI的工作让我在设计复杂AI行为系统和理解人类-AI交互的细微差别方面获得了宝贵经验。这个项目挑战我不仅将AI视为工具，而且视为创意过程中的潜在合作者。我学会了创造感觉真实的AI个性的重要性，同时保持响应动态叙事场景的灵活性。这个项目让我看到了AI作为创意伙伴而不仅仅是功能助手的潜力。'
            },
            features: {
                en: [
                    'Multi-agent AI system with distinct personalities and goals',
                    'Real-time interactive storytelling with emergent narratives',
                    'Persistent virtual world with evolving relationships',
                    'Human-AI collaborative content creation',
                    'Dynamic character development and story branching',
                    'Social simulation with complex behavioral patterns',
                    'Cross-platform accessibility for diverse user engagement'
                ],
                zh: [
                    '具有不同个性和目标的多智能体AI系统',
                    '具有涌现叙事的实时互动叙事',
                    '具有不断发展关系的持续虚拟世界',
                    '人类-AI协作内容创作',
                    '动态角色发展和故事分支',
                    '具有复杂行为模式的社会模拟',
                    '跨平台可访问性，促进多样化用户参与'
                ]
            },
            technologies: {
                en: ['Large Language Models', 'Multi-Agent Systems', 'Real-time Communication', 'Behavioral AI', 'Natural Language Processing', 'Social Simulation', 'Interactive Storytelling'],
                zh: ['大型语言模型', '多智能体系统', '实时通信', '行为AI', '自然语言处理', '社会模拟', '互动叙事']
            },
            links: [
                {
                    text: {
                        en: 'Visit Dramai.AI Platform',
                        zh: '访问Dramai.AI平台'
                    },
                    url: 'https://dramai.world/scene?sceneId=4',
                    icon: 'fas fa-external-link-alt'
                },
                {
                    text: {
                        en: 'Experience the Demo',
                        zh: '体验演示'
                    },
                    url: 'https://dramai.world/scene?sceneId=4',
                    icon: 'fas fa-play'
                },
                {
                    text: {
                        en: 'Learn More',
                        zh: '了解更多'
                    },
                    url: 'https://dramai.world/',
                    icon: 'fas fa-info-circle'
                }
            ]
        },
        'life-portal': {
            title: {
                en: 'Life Portal',
                zh: 'Life Portal'
            },
            role: {
                en: 'Solo designer & builder',
                zh: '独立设计与实现'
            },
            category: {
                en: 'AI life OS · Agents · Base-building game',
                zh: 'AI 生活系统 · 智能体 · 基建游戏'
            },
            image: 'assets/img/life-portal.jpg',
            gallery: ['assets/img/life-portal.jpg'],
            facts: [
                { label: { en: 'Role', zh: '职位' }, value: { en: 'Solo designer & builder', zh: '独立设计与实现' } },
                { label: { en: 'Studio', zh: '公司' }, value: { en: 'Personal product · in daily use', zh: '个人产品 · 每天在用' } },
                { label: { en: 'When', zh: '时间' }, value: { en: '2026 – present', zh: '2026 至今' } },
                // solo: the "My role" line joins it without "with"
                { label: { en: 'Worked with', zh: '协作' }, value: { en: 'No team — product, systems, backend, frontend, agents, art pipeline', zh: '无团队——产品、系统、后端、前端、智能体、美术管线' }, solo: true }
            ],
            challenge: {
                en: 'I needed a life-management system I would actually keep using, so I built one that runs like a game: health, money, habits, work and wants are stats, finished tasks earn coins, coins buy real rewards and feed a base-building game.',
                zh: '我需要一个自己真的会一直用的生活管理系统，所以把它做成了一场游戏：健康、钱、习惯、工作、想要的东西是属性，做完的事换金币，金币换现实奖励，也养一个基建游戏。'
            },
            tradeoff: {
                en: 'Prompts vs. code: after the butler agent kept breaking its own rules, I moved every invariant — permissions, undo, idempotency — out of the prompt and into code gates.',
                zh: '提示词还是代码：管家智能体反复违反自己的规则之后，我把所有不变量——权限、撤销、幂等——从提示词里挪进了代码闸门。'
            },
            designed: {
                en: [
                    { t: 'Stat bindings', d: 'energy bar = last night\'s sleep score; habit check-ins log events and earn points; coin modifier ×0.8 on sleep debt, ×1.2 when health is good' },
                    { t: 'Two agents with different jobs', d: 'a companion that can read real data and a butler that creates tasks and reminders behind a permission gate' },
                    { t: 'Invariants in code, not prompts', d: 'tool narrowing, input validation, idempotent writes, undo stack, program gates' },
                    { t: 'Own eval and trace', d: 'invariant tests for permissions and persona, per-turn token and cost tracing to SQLite, no external service' },
                    { t: 'Base-building game fed by real tasks', d: 'data-driven event engine, relationships, survival systems, chunked world' }
                ],
                zh: [
                    { t: '属性绑定', d: '精力条=昨晚睡眠分；习惯打卡入账得分；睡眠债金币 ×0.8，状态好 ×1.2' },
                    { t: '两个分工不同的智能体', d: '能看真实数据的陪伴者，和过权限门才能建任务提醒的管家' },
                    { t: '不变量进代码而非提示词', d: '工具收窄、拒收校验、幂等、撤销栈、程序闸' },
                    { t: '自研评测与追踪', d: '权限与人设不变量测试，逐轮 token 与花费写入 SQLite，不依赖外部服务' },
                    { t: '由真实任务驱动的基建游戏', d: '数据驱动事件引擎、人际关系、生存系统、分块世界' }
                ]
            },
            outcome: {
                en: 'In daily use. 46 systems and 377 concepts mapped in the systems atlas; 919 backend tests; prompt caching cut API cost by 60–80%.',
                zh: '每天在用。系统图谱覆盖 46 个系统、377 个概念；后端 919 项测试；提示词缓存把 API 成本降了 60–80%。'
            },
            description: {
                en: 'Life Portal is a life-management system I designed and built on my own, and use every day. It treats a life like a character sheet: health, money, habits, work and wants are stats fed by real data, finished tasks earn coins, and coins buy real-world rewards or feed a base-building game.\n\nTwo AI agents live inside it: a companion that reads the data and talks it through, and a butler that creates tasks and reminders only after passing a permission gate. I built it because no productivity app ever stuck; making it play like a game did. Product, systems design, backend, frontend, agents, evals and the art pipeline are all my own work.',
                zh: 'Life Portal 是我独立设计并实现、自己每天在用的生活管理系统。它把生活当成一张角色卡：健康、钱、习惯、工作和想要的东西是由真实数据驱动的属性；做完的事换金币，金币换现实奖励，也养一个基建游戏。\n\n系统里有两个 AI 智能体：能读数据、陪你把事情聊清楚的陪伴者，和必须先过权限门才能建任务、设提醒的管家。做它是因为没有一个效率工具让我坚持用下去，而做成游戏之后，我坚持下来了。产品、系统设计、后端、前端、智能体、评测和美术管线，全部由我一人完成。'
            },
            features: {
                en: [],
                zh: []
            },
            technologies: {
                en: ['FastAPI', 'SQLite', 'Claude API', 'Prompt caching', 'Streaming TTS', 'Vanilla JS', 'Playwright'],
                zh: ['FastAPI', 'SQLite', 'Claude API', 'Prompt caching', 'Streaming TTS', 'Vanilla JS', 'Playwright']
            },
            links: [
                {
                    text: {
                        en: 'Systems atlas',
                        zh: '系统图谱'
                    },
                    url: 'systems/',
                    icon: 'fas fa-project-diagram'
                }
            ]
        },
        'got-winter-is-coming': {
            title: {
                en: 'Game of Thrones: Winter is Coming',
                zh: '权力的游戏：凛冬将至'
            },
            role: {
                en: 'AI Designer — NetEase Games',
                zh: 'AI 设计师 — 网易游戏'
            },
            category: {
                en: 'Strategy MMO, Combat AI, NetEase Games',
                zh: '策略MMO，战斗AI，网易游戏'
            },
            image: 'assets/img/got-1.jpg',
            gallery: ['assets/img/got-1.jpg', 'assets/img/got-2.jpg'],
            facts: [
                { label: { en: 'Role', zh: '职位' }, value: { en: 'AI Designer', zh: 'AI 设计师' } },
                { label: { en: 'Studio', zh: '公司' }, value: { en: 'NetEase Games · Hangzhou', zh: '网易游戏 · 杭州' } },
                { label: { en: 'When', zh: '时间' }, value: { en: 'Aug – Sept 2024', zh: '2024.8 – 2024.9' } },
                { label: { en: 'Worked with', zh: '协作' }, value: { en: 'AI engineers · combat designers', zh: 'AI 工程师 · 战斗设计师' } }
            ],
            challenge: {
                en: 'NPC and bot combat had to feel intentional — reading threats, choosing targets, pacing aggression — across very different encounter types, without hand-scripting every fight.',
                zh: 'NPC 与机器人的战斗必须"像有想法"——识别威胁、选择目标、控制进攻节奏——还要覆盖差异很大的遭遇战类型，而不是逐场手写脚本。'
            },
            designed: {
                en: [
                    { t: 'Combat AI decision-making', d: 'threat evaluation, target selection, and combat pacing for NPCs and bots' },
                    { t: 'Encounter-type tuning', d: 'behavior tuned and balanced across multiple encounter types' },
                    { t: 'In-engine implementation', d: 'AI behaviors built in Unity with C#' },
                    { t: 'Cross-team communication', d: 'feature flows and design artifacts mapped in Figma, reviewed with project leads' }
                ],
                zh: [
                    { t: '战斗 AI 决策', d: 'NPC 与机器人的威胁评估、目标选择与战斗节奏' },
                    { t: '遭遇战类型调校', d: '针对多种遭遇战类型调整并平衡行为表现' },
                    { t: '引擎内实现', d: '使用 Unity + C# 实现 AI 行为' },
                    { t: '跨团队沟通', d: '用 Figma 梳理功能流程与设计文档，与项目负责人评审' }
                ]
            },
            tradeoff: {
                en: 'Scripted vs. systemic: instead of hand-scripting each encounter, I built one threat-evaluation and pacing model and tuned it per encounter type.',
                zh: '脚本还是系统：不逐场手写脚本，而是做一套威胁评估和节奏模型，再按遭遇战类型分别调参。'
            },
            outcome: {
                en: 'Delivered combat AI behaviors and tuning across multiple encounter types, reviewed and signed off with project leads.',
                zh: '交付覆盖多种遭遇战类型的战斗 AI 行为与调校，并与项目负责人完成评审确认。'
            },
            description: {
                en: 'Game of Thrones: Winter is Coming is a strategy MMO set in the Game of Thrones universe — players rule a house of Westeros, forge alliances, and fight for the Iron Throne. I joined the project at NetEase Games as an AI Designer, focused on making NPC and bot combat feel intentional.\n\nThe game combines city-building, resource management, and tactical combat in a persistent online world where thousands of players compete. Combat encounters range from PvE storyline fights to bot-backed PvP — each type needing its own AI behavior and pacing, which is where my work lived.',
                zh: '《权力的游戏：凛冬将至》是权力的游戏宇宙中的策略 MMO——玩家统领维斯特洛的家族，结成联盟，争夺铁王座。我以 AI 设计师身份在网易游戏加入该项目，专注于让 NPC 与机器人的战斗"像有想法"。\n\n游戏在持续在线世界中结合了城市建设、资源管理与战术战斗，数千名玩家同场竞争。战斗遭遇从 PvE 剧情战到机器人参与的 PvP 各不相同——每种类型都需要专属的 AI 行为与节奏设计，这正是我的工作所在。'
            },
            features: {
                en: [
                    'Authentic Game of Thrones universe with iconic characters and locations',
                    'Strategic city-building and resource management gameplay',
                    'Large-scale PvP alliance wars and political intrigue',
                    'Legendary commander recruitment system with unique abilities',
                    'Cross-server tournaments and competitive events',
                    'Rich PvE storylines following the series narrative',
                    'Real-time strategy combat with tactical depth',
                    'Alliance system for diplomatic and military cooperation'
                ],
                zh: [
                    '真实的权力的游戏宇宙，包含标志性角色和地点',
                    '战略城市建设和资源管理游戏玩法',
                    '大规模PvP联盟战争和政治阴谋',
                    '具有独特能力的传奇指挥官招募系统',
                    '跨服务器锦标赛和竞技活动',
                    '遵循系列叙事的丰富PvE故事线',
                    '具有战术深度的实时策略战斗',
                    '用于外交和军事合作的联盟系统'
                ]
            },
            technologies: {
                en: ['Browser-based MMO Architecture', 'Real-time Strategy Systems', 'Multiplayer Networking', 'Database Management', 'Server Load Balancing', 'Cross-platform Compatibility', 'Social Systems'],
                zh: ['基于浏览器的MMO架构', '实时策略系统', '多人网络', '数据库管理', '服务器负载均衡', '跨平台兼容性', '社交系统']
            },
            links: [
                {
                    text: {
                        en: 'Play Game of Thrones: Winter is Coming',
                        zh: '游玩权力的游戏：凛冬将至'
                    },
                    url: 'https://got.gtarcade.com/#home',
                    icon: 'fas fa-gamepad'
                },
                {
                    text: {
                        en: 'Game Guide',
                        zh: '游戏指南'
                    },
                    url: 'https://got.gtarcade.com/#home',
                    icon: 'fas fa-book'
                }
            ]
        },
        'revelation': {
            title: {
                en: 'Revelation',
                zh: '天谕'
            },
            role: {
                en: 'Game Narrative Designer — NetEase Games',
                zh: '游戏叙事设计师 — 网易游戏'
            },
            category: {
                en: 'Mobile MMO RPG, Narrative Design',
                zh: '移动MMORPG，叙事设计'
            },
            image: 'assets/img/revelation.jpg',
            gallery: ['assets/img/revelation.jpg', 'assets/img/revelation-2.jpg'],
            facts: [
                { label: { en: 'Role', zh: '职位' }, value: { en: 'Game Narrative Designer', zh: '游戏叙事设计师' } },
                { label: { en: 'Studio', zh: '公司' }, value: { en: 'NetEase Games · Hangzhou', zh: '网易游戏 · 杭州' } },
                { label: { en: 'When', zh: '时间' }, value: { en: 'Jan – Mar 2021', zh: '2021.1 – 2021.3' } },
                { label: { en: 'Worked with', zh: '协作' }, value: { en: 'narrative directors · gameplay designers', zh: '叙事总监 · 玩法设计师' } }
            ],
            description: {
                en: 'Revelation is NetEase\'s mobile MMO RPG, bringing the Revelation Online world to mobile. I worked on the narrative team during the game\'s launch window, developing character kits and narrative arcs that align story, abilities, and worldbuilding.',
                zh: '《天谕》是网易旗下移动 MMORPG，将端游天谕的世界带到移动端。我在游戏上线窗口期加入叙事团队，开发角色配套叙事与故事线，让剧情、技能与世界观设定保持一致。'
            },
            designed: {
                en: [
                    { t: 'Character kits', d: 'character concepts and backstories aligned with abilities and worldbuilding' },
                    { t: 'Narrative arcs', d: 'storylines built to fit mechanics and the established world' },
                    { t: 'Narrative documentation', d: 'authored and maintained in Excel, Twine, and in-house scripting tools' }
                ],
                zh: [
                    { t: '角色叙事包', d: '角色概念与背景故事，与技能及世界观设定对齐' },
                    { t: '故事线设计', d: '围绕玩法机制与既有世界观构建剧情' },
                    { t: '叙事文档', d: '使用 Excel、Twine 与内部脚本工具编写并维护' }
                ]
            },
            outcome: {
                en: 'Contributed narrative content during the mobile version\'s China launch window in early 2021.',
                zh: '在手游版国服上线窗口期（2021 年初）参与叙事内容开发。'
            },
            features: {
                en: ['Character kits and narrative arcs', 'Story aligned with abilities and worldbuilding'],
                zh: ['角色叙事包与故事线', '剧情与技能、世界观对齐']
            },
            technologies: {
                en: ['Excel', 'Twine', 'In-house scripting tools'],
                zh: ['Excel', 'Twine', '内部脚本工具']
            },
            links: []
        },
        'falling-kingdom': {
            title: {
                en: 'Falling Kingdom',
                zh: 'Falling Kingdom'
            },
            role: {
                en: 'Sole Designer',
                zh: '独立设计'
            },
            category: {
                en: 'Physical Board Game, Solo Project',
                zh: '实体桌游，个人项目'
            },
            image: 'assets/img/falling-kingdom.svg',
            gallery: ['assets/img/falling-kingdom.svg'],
            description: {
                en: 'Physical board game designed and produced independently.',
                zh: '独立设计并制作的实体桌游。'
            },
            features: {
                en: ['Independent physical game design', 'Physical prototyping and playtesting'],
                zh: ['独立实体桌游设计', '实体原型制作与游戏测试']
            },
            technologies: {
                en: ['Physical prototyping', 'Playtesting'],
                zh: ['实体原型', '游戏测试']
            },
            links: []
        }
    };

    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Function to get current language from localStorage
    function getCurrentLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        return savedLang && (savedLang === 'en' || savedLang === 'zh') ? savedLang : 'en';
    }

    // Listen for language change events from pixel-script.js
    document.addEventListener('languageChanged', function(event) {
        const lang = event.detail.language;
        loadGameDetails(currentGameId, lang);
    });

    // Update all elements with data-i18n attribute
    function updateI18nElements(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            // Get translations from pixel-script.js if available
            const translations = window.translations || {};
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Render the description: first paragraph visible, the rest collapsed behind a toggle
    function renderDescription(text, lang) {
        const container = document.getElementById('game-description');
        container.innerHTML = '';

        const paragraphs = text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
        if (paragraphs.length === 0) return;

        const lead = document.createElement('p');
        lead.textContent = paragraphs[0];
        container.appendChild(lead);

        if (paragraphs.length === 1) return;

        const more = document.createElement('div');
        more.className = 'desc-more';
        more.hidden = true;
        paragraphs.slice(1).forEach(pText => {
            const p = document.createElement('p');
            p.textContent = pText;
            more.appendChild(p);
        });

        const labels = {
            more: { en: 'Read more ▼', zh: '展开全文 ▼' },
            less: { en: 'Show less ▲', zh: '收起 ▲' }
        };
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'desc-toggle';
        toggle.textContent = labels.more[lang];
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', function() {
            const expanded = more.hidden;
            more.hidden = !expanded;
            toggle.textContent = expanded ? labels.less[lang] : labels.more[lang];
            toggle.setAttribute('aria-expanded', String(expanded));
        });

        container.appendChild(more);
        container.appendChild(toggle);
    }

    // Share/SEO tags derived from the game entry: description = first sentence of the overview
    const SITE_ROOT = 'https://pumpkinscone.com/Guo-Web/';
    function setMeta(attr, key, content) {
        let el = document.head.querySelector(`meta[${attr}="${key}"]`);
        if (!el) {
            el = document.createElement('meta');
            el.setAttribute(attr, key);
            document.head.appendChild(el);
        }
        el.setAttribute('content', content);
    }
    function updateShareMeta(game, lang) {
        const firstPara = String(game.description[lang] || '').split('\n')[0];
        const match = firstPara.match(/^.*?(?:[。！？]|[.!?](?=\s|$))/);
        const summary = (match ? match[0] : firstPara).trim();
        const title = `${game.title[lang]} · Violet Guo`;
        const pageUrl = `${SITE_ROOT}game-detail.html?id=${encodeURIComponent(currentGameId)}`;
        setMeta('name', 'description', summary);
        setMeta('property', 'og:type', 'article');
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', summary);
        setMeta('property', 'og:url', pageUrl);
        setMeta('property', 'og:image', new URL(game.image, SITE_ROOT).href);
        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = pageUrl;
    }

    // ---- "At a glance": problem / my role / trade-off / outcome, always open at the top of the page.
    // Derived from the entry's own fields (challenge, facts, tradeoff, outcome); a row without data is left out.
    const ROLE_FACTS = ['Role', 'Worked with'];
    const GLANCE = {
        title: { en: 'at_a_glance.txt', zh: '一眼看完.txt' },
        problem: { en: 'Problem', zh: '问题' },
        role: { en: 'My role', zh: '我的角色' },
        tradeoff: { en: 'Trade-off', zh: '取舍' },
        outcome: { en: 'Outcome', zh: '结果' }
    };
    const PROBLEM_MAX = { en: 220, zh: 160 };

    // Leading whole sentences of the challenge, within the length limit. A first sentence that is already over the limit
    // ends at its last clause break (colon / semicolon) before the limit instead, closed with a full stop.
    function glanceProblem(text, lang) {
        const max = PROBLEM_MAX[lang] || 220;
        const sentences = String(text || '').match(lang === 'zh' ? /[^。！？]+[。！？]?/g : /[\s\S]+?(?:[.!?](?=\s|$)|$)\s*/g) || [];
        let out = '';
        for (const s of sentences) {
            if ((out + s).trim().length > max) break;
            out += s;
        }
        out = out.trim();
        if (out) return out;
        const first = (sentences[0] || '').trim();
        const head = first.slice(0, max);
        const cut = Math.max(head.lastIndexOf(lang === 'zh' ? '：' : ': '), head.lastIndexOf(lang === 'zh' ? '；' : '; '));
        return cut > 0 ? head.slice(0, cut) + (lang === 'zh' ? '。' : '.') : first;
    }

    function glanceRole(game, lang) {
        const facts = game.facts || [];
        const role = facts.find(fact => fact.label.en === 'Role');
        const team = facts.find(fact => fact.label.en === 'Worked with');
        const roleText = role ? role.value[lang] : (game.role ? game.role[lang] : '');
        if (!roleText) return '';
        if (!team) return roleText;
        if (team.solo) return `${roleText} · ${team.value[lang]}`;
        return lang === 'zh' ? `${roleText} · 与${team.value[lang]}协作` : `${roleText} · with ${team.value[lang]}`;
    }

    function renderGlance(game, lang) {
        const box = document.getElementById('game-glance');
        const list = document.getElementById('game-glance-list');
        if (!box || !list) return;
        list.innerHTML = '';
        const rows = [
            ['problem', game.challenge ? glanceProblem(game.challenge[lang], lang) : ''],
            ['role', glanceRole(game, lang)],
            ['tradeoff', game.tradeoff ? game.tradeoff[lang] : ''],
            ['outcome', game.outcome ? game.outcome[lang] : '']
        ].filter(row => row[1]);
        rows.forEach(([key, text]) => {
            const row = document.createElement('div');
            row.className = 'glance-row';
            row.setAttribute('data-row', key);
            const dt = document.createElement('dt');
            dt.textContent = GLANCE[key][lang];
            const dd = document.createElement('dd');
            dd.textContent = text;
            row.appendChild(dt);
            row.appendChild(dd);
            list.appendChild(row);
        });
        box.setAttribute('data-win', GLANCE.title[lang]);
        box.hidden = rows.length < 2;
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
        
        // Set page title and share metadata (the gameData entry is the source of truth)
        document.title = `${game.title[lang]} · Violet Guo`;
        updateShareMeta(game, lang);
        
        // Update game details
        document.getElementById('game-title').textContent = game.title[lang];
        document.getElementById('game-category').textContent = game.category[lang];
        document.getElementById('game-image').src = game.image;
        document.getElementById('game-image').alt = game.title[lang];
        renderDescription(game.description[lang], lang);
        
        // Update role if it exists
        if (game.role && game.role[lang]) {
            document.getElementById('role-value').textContent = game.role[lang];
        }

        // At-a-glance fact tiles: only shown when the game provides them. Role and Worked with already lead the
        // at-a-glance block ("My role"), so the tiles keep the rest (studio, dates) instead of repeating them
        const factsSection = document.getElementById('section-facts');
        const factsGrid = document.getElementById('game-facts');
        if (factsSection && factsGrid) {
            factsGrid.innerHTML = '';
            const roleLine = glanceRole(game, lang);
            const tiles = (game.facts || []).filter(fact => !(roleLine && ROLE_FACTS.includes(fact.label.en)));
            if (tiles.length) {
                tiles.forEach(fact => {
                    const tile = document.createElement('div');
                    tile.className = 'fact-tile';
                    const label = document.createElement('span');
                    label.className = 'fact-label';
                    label.textContent = fact.label[lang];
                    const value = document.createElement('span');
                    value.className = 'fact-value';
                    value.textContent = fact.value[lang];
                    tile.appendChild(label);
                    tile.appendChild(value);
                    factsGrid.appendChild(tile);
                });
                factsSection.style.display = '';
            } else {
                factsSection.style.display = 'none';
            }
        }

        renderGlance(game, lang);

        // Optional case-study sections: only shown when the game provides them
        [
            { data: game.team, sectionId: 'section-team', textId: 'game-team' },
            { data: game.challenge, sectionId: 'section-challenge', textId: 'game-challenge' }
        ].forEach(({ data, sectionId, textId }) => {
            const section = document.getElementById(sectionId);
            if (!section) return;
            if (data && data[lang]) {
                document.getElementById(textId).textContent = data[lang];
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });

        // "What I Designed" list — falls back to the legacy features list.
        // Items are either strings or { t: 'short title', d: 'short note' } pairs.
        const featuresList = document.getElementById('game-features');
        featuresList.innerHTML = '';
        const designedItems = (game.designed && game.designed[lang]) || game.features[lang];
        designedItems.forEach(feature => {
            const li = document.createElement('li');
            if (typeof feature === 'object' && feature.t) {
                const strong = document.createElement('strong');
                strong.textContent = feature.t;
                li.appendChild(strong);
                if (feature.d) {
                    li.appendChild(document.createTextNode(' — ' + feature.d));
                }
            } else {
                li.textContent = feature;
            }
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
        
        // Update links (hide the whole section when a game has none)
        const linksContainer = document.getElementById('game-links');
        linksContainer.innerHTML = '';
        const linksSection = linksContainer.closest('.game-info-section');
        if (linksSection) {
            linksSection.style.display = (game.links && game.links.length) ? '' : 'none';
        }
        (game.links || []).forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.className = 'game-link pixel-btn';
            if (link.url.startsWith('systems/')) {
                linkElement.href = `systems/?lang=${lang}`;
            } else {
                linkElement.href = link.url;
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
            }
            
            const icon = document.createElement('i');
            icon.className = link.icon;
            linkElement.appendChild(icon);
            
            const linkText = document.createTextNode(' ' + link.text[lang]);
            linkElement.appendChild(linkText);
            
            linksContainer.appendChild(linkElement);
        });
        
        // Update gallery: only show images beyond the main preview
        const galleryContainer = document.getElementById('game-gallery');
        const extraImages = (game.gallery || []).filter(src => src !== game.image);
        if (extraImages.length > 0) {
            galleryContainer.style.display = 'block';
            const galleryImages = galleryContainer.querySelector('.gallery-images');
            galleryImages.innerHTML = '';

            extraImages.forEach((imageSrc, index) => {
                const imageContainer = document.createElement('div');
                imageContainer.className = 'gallery-item';
                
                const img = document.createElement('img');
                // Only the first gallery image loads up front; the rest wait until they are near the viewport
                if (index > 0) {
                    img.loading = 'lazy';
                    img.decoding = 'async';
                }
                img.src = imageSrc;
                img.alt = `${game.title[lang]} Gallery Image`;
                img.className = 'gallery-image';
                
                imageContainer.appendChild(img);
                galleryImages.appendChild(imageContainer);
            });
        } else {
            galleryContainer.style.display = 'none';
        }
    }

    // Define game order for navigation
    const gameOrder = [
        'dramai-ai',
        'life-portal',
        'got-winter-is-coming',
        'petch',
        'revelation',
        'quoted-out',
        'ai-adoption',
        'party-paidui',
        'back-home',
        'dorm-unpacking',
        'zombie-juice',
        'beneath-ruins',
        'wallet-war',
        'princess-lianan',
        'above-fountain',
        'silent-majority'
    ];

    // Function to get next game ID
    function getNextGameId(currentId) {
        const currentIndex = gameOrder.indexOf(currentId);
        if (currentIndex === -1 || currentIndex === gameOrder.length - 1) {
            return gameOrder[0]; // Return to first game if current is last or not found
        }
        return gameOrder[currentIndex + 1];
    }

    // Get game ID from URL parameter
    const currentGameId = getUrlParameter('id');
    const currentLang = getCurrentLanguage();
    
    // Load game details
    if (currentGameId) {
        loadGameDetails(currentGameId, currentLang);
        
        // Set up next button functionality
        const nextBtn = document.getElementById('nextGameBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                const nextGameId = getNextGameId(currentGameId);
                window.location.href = `game-detail.html?id=${nextGameId}`;
            });
        }
    } else {
        // Redirect to games page if no ID is provided
        window.location.href = 'index.html#games';
    }
});
