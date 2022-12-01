const movies = [
  {
    "isSeries": true,
    "titre": "ERASED",
    "realisateur": "Tomoshiko It" + "\u014D",
    "dureeEpisode": 24,
    "nombreEpisodesTotal": 12,
    "nombreEpisodesVues": 12,
    "genre": "Un thriller avec des élements fantastiques.",
    "description": "Basé sur le manga de Kei Sanbe du même nom ERASED raconte l'histoire d'un homme de 29 ans Satoru Fujinuma qui se retrouve projeté dans le passé lorsqu'il est sur le point de mourir. Quand sa mère est assassiné devant lui il est envoyé dans le passé 18 ans en arrière et obtient l'oppotrtunité de sauver sa mère mais également des victimes de kidnappings qui se trouve être 3 amis d'enfance.",
    "imageUrl" : "erased.png"
  },

  {
    "isSeries": true,
    "titre": "Breaking Bad",
    "realisateur": "Vince Gilligan",
    "dureeEpisode": 48,
    "nombreEpisodesTotal": 62,
    "nombreEpisodesVues": 30,
    "genre": "Une comédie noire avec des élements de thriller d'histoire de gang et de drogue.",
    "description": "Walter White est un professeur de chimie dans un lycée d'Albuquerque. Quand un jour on lui diagnostique un cancer, dont il ne peut pas payer le traitement, il décide de passer le temps qu'il lui reste à gagner beacoup d'argent pour mettre sa famille à l'abri. Il s'associe à un ancien élève devenu délinquant Jessie Pinkman pour commencer à produire et vendre de la méthamphétamine.",
    "imageUrl" : "breakingbad.png"
  },
  
  {
    "isSeries": true,
    "titre": "Rick et Morty",
    "realisateur": "Dan Harmond et Justin Roiland",
    "dureeEpisode": 22,
    "nombreEpisodesTotal": 61,
    "nombreEpisodesVues": 51,
    "genre": "De la science-fiction avec beaucoup d'humour noir.",
    "description": "Les aventures de Rick Sanchez, un scientifique cynique et extravagant, et de son petit-fils Morty Smith, adolescent facilement influencable.",
    "imageUrl" : "ricketmorty.png"
  },
  
  {
    "isSeries": true,
    "titre": "Sherlock",
    "realisateur": "Mark Gatiss et Steven Moffat",
    "dureeEpisode": 90,
    "nombreEpisodesTotal": 14,
    "nombreEpisodesVues": 12,
    "genre": "Mystère policier et résolutions de crimes.",
    "description": "Série basé sur l'oeuvre de Sir Arthur Conan Doyle. Sherlock Holmes est un détective privé particulièrement brillant et le Docteur Watson est un médecin militaire. Ils aident Scotland Yard à résoudre les enquêtes les plus difficiles grâce au don d'observation et de déduction de Sherlock.",
    "imageUrl" : "sherlock.png"
  },
  
  {
    "isSeries": true,
    "titre": "Fullmetal Alchemist Brotherood",
    "realisateur": "Yasuhiro Irie",
    "dureeEpisode": 24,
    "nombreEpisodesTotal": 64,
    "nombreEpisodesVues": 64,
    "genre": "Mystère militaire dans un univers uchronique avec des pays imaginaires et de nombreux élements fantastiques.",
    "description": "Deux frères Edward et Alphonse Elric sont alchimistes, une science qui permet de transformer de la matière en respectant le principe de l'échange équivalent. Un jour suite à la mort traumatique de leur mère alors qu'ils sont encore enfants ils décident de braver l'interdit : tenter de ressusciter leur mère grâce à l'alchimie. L'échec de cette expérience prive edward d'un bras et une jambe et Alphonse de son corps entier, il sera contraint de vivre dans une armure vide.",
    "imageUrl" : "fmab.png"
  },
  
  {
    "isSeries": true,
    "titre": "The Walking Dead",
    "realisateur": "Frank Darabont",
    "dureeEpisode": 45,
    "nombreEpisodesTotal": 177,
    "nombreEpisodesVues": 1,
    "genre": "Apocalypse zombie.",
    "description": "L'histoire suit Rick Grimes, l'adjoint du shérif local, alors qu'il se réveille d'un coma de plusieurs semaines pour découvrir un monde ravagé par une épidémie de zombie. Aprés avoir retrouvé sa famille il devient rapidement le chef d'une bande de survivants. Ils devront faire face aux morts-vivants, au manque de ressources et aux autres survivants parfois mal intentionnés.",
    "imageUrl" : "thewalkingdead.png"
  },

  {
    "isSeries": false,
    "titre":"Les Affranchis",
    "realisateurs":"Martin Scorcese",
    "dureeFilmTotal": 145,
    "dureeFilmVue": 100,
    "genre":"Thriller avec histoire de gangsters.",
    "description":"Henry Hill, un citoyen américain d'origine italo-irlandaise, parle de son enfance à New York en 1955 et raconte : « Autant que je me souvienne, j'ai toujours rêvé d'être gangster ». Gamin, Henry est fasciné par le train de vie des truands de la mafia, notamment celui de la famille Lucchese, une équipe de maffieux qui évolue dans son quartier ouvrier de Brooklyn, alors majoritairement peuplé d'habitants d'origine italienne.Rêvant de leur ressembler, Henry décide d'embrasser une carrière de criminel. Il abandonne l'école et intègre l’équipe des mafieux de son quartier leur rendant de petits services. Mais le père d'Henry, qui connaît la véritable nature de la mafia, bat régulièrement son fils quand il apprend par des lettres de l'école qu'Henry ne va plus en classe. L'enfant est cependant aidé par les « Affranchis » (le surnom que les mafieux utilisent entre eux pour se désigner), qui interviennent en menaçant le postier du quartier et font par la même occasion interrompre la distribution des lettres de l'école.",
    "imageUrl" : "lesaffranchis.jpg",
  },

  {
    "isSeries": false,
    "titre":"Kimi No Nawa",
    "realisateurs":"Makoto Shinkai",
    "dureeFilmTotal": 110,
    "dureeFilmVue": 110,
    "genre":"Vie ordinaire avec élements fantastiques.",
    "description":"Mitsuha, dix-sept ans, est lycéenne dans le petit village d’Itomori. Ayant perdu sa mère, elle vit avec sa petite sœur, Yotsuha, et sa grand-mère, Hitoha, son père ayant quitté le foyer pour devenir maire. Partageant son temps entre les études, ses amis, et son rôle de miko, dont le savoir lui est transmis par sa grand-mère, elle étouffe, et rêve d’une autre vie en tant que beau jeune homme à Tokyo. Taki, de son côté, est un lycéen tokyoïte timide et doué en dessin. Lorsqu’il ne traîne pas avec ses amis au lycée ou au café, il travaille dans un restaurant italien comme serveur, où il est amoureux d’une collègue plus âgée, Miki, sans avoir jamais osé se déclarer. Alors qu’une comète passe dans le ciel d’Itomori, leur destin va basculer lorsqu’ils se rendent compte qu’ils se retrouvent chacun dans le corps de l’autre à raison de deux ou trois jours par semaine.",
    "imageUrl" : "kiminonawa.jpg",
  },

  {
    "isSeries": false,
    "titre":"La Liste de Schindler",
    "realisateurs":"Steven Spielberg",
    "dureeFilmTotal": 195,
    "dureeFilmVue": 50,
    "genre":"Historique militaire",
    "description":"À Cracovie, durant la Seconde Guerre mondiale, les soldats allemands forcent les juifs à être parqués dans le ghetto de Cracovie. Oskar Schindler, industriel allemand et membre du parti nazi. Ne pensant tout d'abord qu'à son profit, il corrompt des membres de la Wehrmacht et des officiers SS pour acquérir une usine de métal émaillé. Dès lors, pour l'aider dans la direction de son entreprise, il engage un comptable juif, Itzhak Stern. Celui-ci est par ailleurs un représentant local de la communauté juive et a des contacts parmi le marché noir et la communauté juive des affaires. Stern aide alors Schindler à trouver des financements pour lancer son entreprise. Schindler entretient des relations amicales avec les nazis, profite de sa fortune, de son statut de « Herr Direktor » et a Stern comme bras droit. Il emploie une main d'œuvre juive bon marché dans son usine. De son côté, Stern convainc Schindler d'engager le plus possible d'employés essentiels à l'effort de guerre allemand : ainsi, celui-ci les sauve de la déportation dans les camps de concentration ou d'une exécution sommaire.",
    "imageUrl" : "lalistedeschindler.jpg",
  },

  {
    "isSeries": false,
    "titre":"No Country for Old Men",
    "realisateurs":"les frères Cohen",
    "dureeFilmTotal": 122,
    "dureeFilmVue": 61,
    "genre":"Thriller avec des élements de Western",
    "description":"Texas, 1980. Alors qu'il chasse près de la frontière du Mexique, Llewelyn Moss  découvre par hasard les cadavres d'une bande de trafiquants de drogue et une mallette contenant deux millions de dollars, dont il s'empare. Il se retrouve poursuivi par des complices des trafiquants mexicains et prend la fuite, tandis que sa femme Carla Jean se réfugie chez sa mère à Odessa...",
    "imageUrl" : "nocountryforoldmen.jpg",
  }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}