import { 
    GET_VIDEOGAMES,
    GET_GENRES,
    FILTER_BY_GENRE
    //GET_VIDEOGAMES_NAME
} from '../actions/actionTypes.js';
const juegos = [
    {
    "id": 12536,
    "name": "Hellblade: Senua's Sacrifice",
    "img": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
    "genres": [
    "Action",
    "Adventure",
    "Indie"
    ]
    },
    {
    "id": 430,
    "name": "Grand Theft Auto: Vice City",
    "img": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 10243,
    "name": "Company of Heroes 2",
    "img": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
    "genres": [
    "Strategy",
    "Simulation"
    ]
    },
    {
    "id": 12447,
    "name": "The Elder Scrolls V: Skyrim Special Edition",
    "img": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 11935,
    "name": "Half-Life Deathmatch: Source",
    "img": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
    "genres": [
    "Action"
    ]
    },
    {
    "id": 58812,
    "name": "Control",
    "img": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Adventure"
    ]
    },
    {
    "id": 50738,
    "name": "Death Stranding",
    "img": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 4166,
    "name": "Mass Effect",
    "img": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 3747,
    "name": "Metal Gear Solid V: Ground Zeroes",
    "img": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 3387,
    "name": "Bloodborne",
    "img": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 3543,
    "name": "Borderlands: The Pre-Sequel",
    "img": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
    "genres": [
    "Action",
    "Shooter",
    "RPG"
    ]
    },
    {
    "id": 3017,
    "name": "Just Cause 3",
    "img": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 864,
    "name": "Dishonored 2",
    "img": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 257201,
    "name": "Star Wars Jedi: Fallen Order",
    "img": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 9882,
    "name": "Don't Starve Together",
    "img": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg",
    "genres": [
    "Action",
    "Simulation",
    "Indie"
    ]
    },
    {
    "id": 108,
    "name": "Mortal Kombat X",
    "img": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg",
    "genres": [
    "Action",
    "Fighting"
    ]
    },
    {
    "id": 11934,
    "name": "Counter-Strike: Source",
    "img": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
    "genres": [
    "Shooter"
    ]
    },
    {
    "id": 613,
    "name": "Bastion",
    "img": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
    "genres": [
    "Action",
    "Adventure",
    "RPG",
    "Indie"
    ]
    },
    {
    "id": 3254,
    "name": "Journey",
    "img": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
    "genres": [
    "Adventure",
    "Family",
    "Indie"
    ]
    },
    {
    "id": 4513,
    "name": "Just Cause 2",
    "img": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 4828,
    "name": "Borderlands",
    "img": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
    "genres": [
    "Action",
    "Shooter",
    "RPG"
    ]
    },
    {
    "id": 18080,
    "name": "Half-Life",
    "img": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Puzzle",
    "Platformer"
    ]
    },
    {
    "id": 29177,
    "name": "Detroit: Become Human",
    "img": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 4514,
    "name": "L.A. Noire",
    "img": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 39,
    "name": "Prey",
    "img": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
    "genres": [
    "Action",
    "Shooter",
    "RPG"
    ]
    },
    {
    "id": 3144,
    "name": "Super Meat Boy",
    "img": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
    "genres": [
    "Indie",
    "Platformer"
    ]
    },
    {
    "id": 10533,
    "name": "Path of Exile",
    "img": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
    "genres": [
    "Action",
    "RPG",
    "Massively Multiplayer",
    "Indie"
    ]
    },
    {
    "id": 4570,
    "name": "Dead Space",
    "img": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 17540,
    "name": "Injustice: Gods Among Us Ultimate Edition",
    "img": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
    "genres": [
    "Action",
    "Arcade",
    "Fighting"
    ]
    },
    {
    "id": 13633,
    "name": "Sid Meier's Civilization V",
    "img": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
    "genres": [
    "Strategy"
    ]
    },
    {
    "id": 4806,
    "name": "Mass Effect 2",
    "img": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 654,
    "name": "Stardew Valley",
    "img": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    "genres": [
    "RPG",
    "Simulation",
    "Indie"
    ]
    },
    {
    "id": 9721,
    "name": "Garry's Mod",
    "img": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
    "genres": [
    "Action",
    "Adventure",
    "Simulation",
    "Casual",
    "Indie"
    ]
    },
    {
    "id": 362,
    "name": "For Honor",
    "img": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
    "genres": [
    "Action",
    "Massively Multiplayer"
    ]
    },
    {
    "id": 3841,
    "name": "Assassin’s Creed IV: Black Flag",
    "img": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
    "genres": [
    "Action"
    ]
    },
    {
    "id": 3636,
    "name": "The Last Of Us Remastered",
    "img": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 10142,
    "name": "PlayerUnknown’s Battlegrounds",
    "img": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Massively Multiplayer"
    ]
    },
    {
    "id": 5563,
    "name": "Fallout: New Vegas",
    "img": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Adventure",
    "RPG"
    ]
    },
    {
    "id": 4248,
    "name": "Dishonored",
    "img": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
    "genres": [
    "Action",
    "Adventure",
    "RPG"
    ]
    },
    {
    "id": 5583,
    "name": "Hitman: Absolution",
    "img": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 10035,
    "name": "Hitman",
    "img": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Simulation"
    ]
    },
    {
    "id": 19709,
    "name": "Half-Life 2: Episode Two",
    "img": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Puzzle"
    ]
    },
    {
    "id": 4252,
    "name": "Mirror's Edge",
    "img": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
    "genres": [
    "Action"
    ]
    },
    {
    "id": 9767,
    "name": "Hollow Knight",
    "img": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
    "genres": [
    "Action",
    "Indie",
    "Platformer"
    ]
    },
    {
    "id": 3612,
    "name": "Hotline Miami",
    "img": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Arcade",
    "Indie"
    ]
    },
    {
    "id": 290856,
    "name": "Apex Legends",
    "img": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Adventure",
    "Massively Multiplayer"
    ]
    },
    {
    "id": 2551,
    "name": "Dark Souls III",
    "img": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 1447,
    "name": "Deus Ex: Mankind Divided",
    "img": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 3790,
    "name": "Outlast",
    "img": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
    "genres": [
    "Action",
    "Adventure",
    "Indie"
    ]
    },
    {
    "id": 41,
    "name": "Little Nightmares",
    "img": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
    "genres": [
    "Action",
    "Platformer"
    ]
    },
    {
    "id": 4332,
    "name": "Spec Ops: The Line",
    "img": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 4161,
    "name": "Far Cry 3",
    "img": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 58134,
    "name": "Marvel's Spider-Man",
    "img": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 10754,
    "name": "BioShock Remastered",
    "img": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
    "genres": [
    "Shooter"
    ]
    },
    {
    "id": 19487,
    "name": "Alan Wake",
    "img": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Adventure"
    ]
    },
    {
    "id": 13668,
    "name": "Amnesia: The Dark Descent",
    "img": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
    "genres": [
    "Action",
    "Adventure",
    "Indie"
    ]
    },
    {
    "id": 4386,
    "name": "Saints Row: The Third",
    "img": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 2462,
    "name": "Uncharted 4: A Thief’s End",
    "img": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 11936,
    "name": "Half-Life 2: Deathmatch",
    "img": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
    "genres": [
    "Action"
    ]
    },
    {
    "id": 3696,
    "name": "Wolfenstein: The New Order",
    "img": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 3939,
    "name": "PAYDAY 2",
    "img": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 278,
    "name": "Horizon Zero Dawn",
    "img": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    "genres": [
    "Action",
    "Adventure",
    "RPG"
    ]
    },
    {
    "id": 4459,
    "name": "Grand Theft Auto IV",
    "img": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 3272,
    "name": "Rocket League",
    "img": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
    "genres": [
    "Sports",
    "Racing",
    "Indie"
    ]
    },
    {
    "id": 10213,
    "name": "Dota 2",
    "img": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
    "genres": [
    "Action",
    "Massively Multiplayer"
    ]
    },
    {
    "id": 422,
    "name": "Terraria",
    "img": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
    "genres": [
    "Action",
    "Indie",
    "Platformer"
    ]
    },
    {
    "id": 29028,
    "name": "Metro 2033",
    "img": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 41494,
    "name": "Cyberpunk 2077",
    "img": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    "genres": [
    "Action",
    "Adventure",
    "RPG"
    ]
    },
    {
    "id": 766,
    "name": "Warframe",
    "img": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Massively Multiplayer"
    ]
    },
    {
    "id": 3192,
    "name": "Metal Gear Solid V: The Phantom Pain",
    "img": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 7689,
    "name": "Rise of the Tomb Raider",
    "img": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
    "genres": [
    "Action"
    ]
    },
    {
    "id": 3287,
    "name": "Batman: Arkham Knight",
    "img": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
    "genres": [
    "Action"
    ]
    },
    {
    "id": 23027,
    "name": "The Walking Dead: Season 1",
    "img": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 16944,
    "name": "The Witcher 2: Assassins of Kings Enhanced Edition",
    "img": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
    "genres": [
    "RPG"
    ]
    },
    {
    "id": 416,
    "name": "Grand Theft Auto: San Andreas",
    "img": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 11973,
    "name": "Middle-earth: Shadow of Mordor",
    "img": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 19103,
    "name": "Half-Life 2: Lost Coast",
    "img": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
    "genres": [
    "Action"
    ]
    },
    {
    "id": 17822,
    "name": "The Witcher: Enhanced Edition Director's Cut",
    "img": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 4427,
    "name": "BioShock 2",
    "img": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 19710,
    "name": "Half-Life 2: Episode One",
    "img": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 3498,
    "name": "Grand Theft Auto V",
    "img": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 3328,
    "name": "The Witcher 3: Wild Hunt",
    "img": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "genres": [
    "Action",
    "Adventure",
    "RPG"
    ]
    },
    {
    "id": 4200,
    "name": "Portal 2",
    "img": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    "genres": [
    "Shooter",
    "Puzzle"
    ]
    },
    {
    "id": 5286,
    "name": "Tomb Raider (2013)",
    "img": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 4291,
    "name": "Counter-Strike: Global Offensive",
    "img": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 5679,
    "name": "The Elder Scrolls V: Skyrim",
    "img": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 13536,
    "name": "Portal",
    "img": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "genres": [
    "Adventure",
    "Puzzle"
    ]
    },
    {
    "id": 12020,
    "name": "Left 4 Dead 2",
    "img": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 4062,
    "name": "BioShock Infinite",
    "img": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 802,
    "name": "Borderlands 2",
    "img": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    "genres": [
    "Action",
    "Shooter",
    "RPG"
    ]
    },
    {
    "id": 3439,
    "name": "Life is Strange",
    "img": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    "genres": [
    "Adventure"
    ]
    },
    {
    "id": 28,
    "name": "Red Dead Redemption 2",
    "img": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 13537,
    "name": "Half-Life 2",
    "img": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 4286,
    "name": "BioShock",
    "img": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 1030,
    "name": "Limbo",
    "img": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    "genres": [
    "Adventure",
    "Indie",
    "Puzzle",
    "Platformer"
    ]
    },
    {
    "id": 2454,
    "name": "DOOM (2016)",
    "img": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 3070,
    "name": "Fallout 4",
    "img": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 58175,
    "name": "God of War (2018)",
    "img": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    "genres": [
    "Action",
    "Adventure",
    "RPG"
    ]
    },
    {
    "id": 32,
    "name": "Destiny 2",
    "img": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    "genres": [
    "Action",
    "Shooter",
    "Adventure",
    "Massively Multiplayer"
    ]
    },
    {
    "id": 11859,
    "name": "Team Fortress 2",
    "img": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    "genres": [
    "Action",
    "Shooter"
    ]
    }
]
const initialState = {
    videogames: juegos,
    genres: [{id: 1, name:"Action"}, {id: 2, name:"Indie"}, {id: 3, name:"Adventure"}]
}



function rootReducer( state = initialState, action ) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
        case FILTER_BY_GENRE:
            //const allVideogames = state.videogames;
            //const genres = action.payload;
            return {
                ...state
            }     
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;

