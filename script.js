const questions = [
    { question: "Quelle est la capitale de la France ?", answers: ["Londres", "Berlin", "Paris", "Madrid"], correct: 2 },
    { question: "Quelle est la couleur du ciel ?", answers: ["Rouge", "Bleu", "Vert", "Jaune"], correct: 1 },
    { question: "Combien de continents y a-t-il sur Terre ?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "Quel est l'élément chimique avec le symbole O ?", answers: ["Or", "Oxygène", "Osmium", "Fer"], correct: 1 },
    { question: "Quel est le plus grand océan du monde ?", answers: ["Atlantique", "Indien", "Arctique", "Pacifique"], correct: 3 },
    { question: "Qui a écrit 'Les Misérables' ?", answers: ["Balzac", "Hugo", "Zola", "Dumas"], correct: 1 },
    { question: "Quelle est la langue la plus parlée dans le monde ?", answers: ["Anglais", "Chinois", "Espagnol", "Français"], correct: 1 },
    { question: "Quel est le plus grand pays du monde ?", answers: ["Canada", "Russie", "Chine", "États-Unis"], correct: 1 },
    { question: "Quelle est la monnaie du Japon ?", answers: ["Yen", "Won", "Dollar", "Euro"], correct: 0 },
    { question: "Qui a peint la Joconde ?", answers: ["Van Gogh", "Da Vinci", "Picasso", "Monet"], correct: 1 },
    { question: "Quel est le pays d'origine de la pizza ?", answers: ["France", "Italie", "Espagne", "Grèce"], correct: 1 },
    { question: "Quelle planète est connue comme la planète rouge ?", answers: ["Mars", "Vénus", "Jupiter", "Saturne"], correct: 0 },
    { question: "Quel est le plus petit pays du monde ?", answers: ["Monaco", "Vatican", "Nauru", "Saint-Marin"], correct: 1 },
    { question: "Quelle est la formule chimique de l'eau ?", answers: ["H2O", "CO2", "O2", "NaCl"], correct: 0 },
    { question: "Quel est le nom du roi des animaux ?", answers: ["Tigre", "Lion", "Ours", "Éléphant"], correct: 1 },
    { question: "Quel est l'instrument de musique à cordes ?", answers: ["Piano", "Batterie", "Violon", "Saxophone"], correct: 2 },
    { question: "Quelle est la distance entre la Terre et le Soleil ?", answers: ["150 millions de km", "50 millions de km", "250 millions de km", "100 millions de km"], correct: 0 },
    { question: "Quel est le symbole chimique de l'or ?", answers: ["Ag", "Au", "Fe", "Pb"], correct: 1 },
    { question: "Qui a découvert la pénicilline ?", answers: ["Fleming", "Pasteur", "Curie", "Hippocrate"], correct: 0 },
    { question: "Quel est l'organe principal de la respiration ?", answers: ["Cœur", "Foie", "Poumons", "Reins"], correct: 2 },
    { question: "Quelle est la plus grande montagne du monde ?", answers: ["K2", "Everest", "Kilimandjaro", "Mont Blanc"], correct: 1 },
    { question: "Quel est le sport le plus populaire au monde ?", answers: ["Football", "Basketball", "Tennis", "Rugby"], correct: 0 },
    { question: "Quel est le nom de la première femme dans l'espace ?", answers: ["Sally Ride", "Valentina Terechkova", "Mae Jemison", "Eileen Collins"], correct: 1 },
    { question: "Quelle est la capitale de l'Espagne ?", answers: ["Barcelone", "Madrid", "Valence", "Séville"], correct: 1 },
    { question: "Quel est le premier président des États-Unis ?", answers: ["Lincoln", "Washington", "Jefferson", "Adams"], correct: 1 },
    { question: "Quel est le pays le plus peuplé du monde ?", answers: ["Inde", "Chine", "États-Unis", "Indonésie"], correct: 1 },
    { question: "Quel type de mammifère peut voler ?", answers: ["Oiseau", "Chauve-souris", "Souris", "Serpent"], correct: 1 },
    { question: "Quel océan se trouve à l'ouest des États-Unis ?", answers: ["Atlantique", "Pacifique", "Indien", "Arctique"], correct: 1 },
    { question: "Quelle est la langue officielle du Brésil ?", answers: ["Espagnol", "Anglais", "Portugais", "Français"], correct: 2 },
    { question: "Quelle est la capitale de l'Italie ?", answers: ["Milan", "Venise", "Rome", "Florence"], correct: 2 },
    { question: "Quel est le plus long fleuve du monde ?", answers: ["Amazon", "Nil", "Yangtsé", "Mississippi"], correct: 1 },
    { question: "Quel est le symbole chimique du fer ?", answers: ["Fe", "Au", "Ag", "Pb"], correct: 0 },
    { question: "Quel animal est connu pour sa grande mémoire ?", answers: ["Chien", "Éléphant", "Chat", "Dauphin"], correct: 1 },
    { question: "Quel est l'organe responsable de la circulation sanguine ?", answers: ["Cœur", "Foie", "Poumons", "Reins"], correct: 0 },
    { question: "Qui a écrit 'Roméo et Juliette' ?", answers: ["Hugo", "Shakespeare", "Dumas", "Zola"], correct: 1 },
    { question: "Quelle est la plus grande forêt tropicale du monde ?", answers: ["Amazonie", "Congo", "Daintree", "Taïga"], correct: 0 },
    { question: "Quel est le symbole de la paix ?", answers: ["Dove", "Oiseau", "Cercle", "Croix"], correct: 0 },
    { question: "Quel pays est célèbre pour ses kangourous ?", answers: ["Nouvelle-Zélande", "Australie", "Afrique du Sud", "Canada"], correct: 1 },
    { question: "Qui a inventé le téléphone ?", answers: ["Edison", "Bell", "Einstein", "Tesla"], correct: 1 },
    { question: "Quel est le plus grand mammifère terrestre ?", answers: ["Éléphant", "Giraffe", "Rhinocéros", "Bison"], correct: 0 },
    { question: "Quelle est la capitale de la Grèce ?", answers: ["Athènes", "Rome", "Berlin", "Madrid"], correct: 0 },
    { question: "Qui est l'auteur de 'Harry Potter' ?", answers: ["Tolkien", "Rowling", "Lewis", "Meyer"], correct: 1 },
    { question: "Quel est le plus grand désert du monde ?", answers: ["Sahara", "Gobi", "Kalahari", "Antarctique"], correct: 3 },
    { question: "Quel est l'instrument de musique le plus ancien ?", answers: ["Flûte", "Guitare", "Piano", "Violoncelle"], correct: 0 },
    { question: "Quelle est la planète la plus proche du Soleil ?", answers: ["Vénus", "Terre", "Mercure", "Mars"], correct: 2 },
    { question: "Quel animal est considéré comme le meilleur ami de l'homme ?", answers: ["Chat", "Chien", "Perroquet", "Lapin"], correct: 1 },
    { question: "Quel est le nom de la première mission spatiale habitée ?", answers: ["Apollo 11", "Vostok 1", "Gemini", "Shuttle"], correct: 1 },
    { question: "Quelle est la couleur des smurfs ?", answers: ["Rouge", "Jaune", "Bleu", "Vert"], correct: 2 },
    { question: "Quel est l'élément chimique avec le symbole Na ?", answers: ["Natrium", "Argent", "Sodium", "Calcium"], correct: 2 },
    { question: "Quel est le pays des pharaons ?", answers: ["Grèce", "Égypte", "Rome", "Mésopotamie"], correct: 1 },
    { question: "Quel est le symbole chimique du plomb ?", answers: ["Pb", "Pt", "Pd", "Pm"], correct: 0 },
    { question: "Quel est le plus grand lac d'eau douce du monde ?", answers: ["Lac Supérieur", "Lac Baïkal", "Lac Victoria", "Lac Michigan"], correct: 1 },
    { question: "Quel est le pays des tulipes ?", answers: ["Belgique", "Pays-Bas", "France", "Allemagne"], correct: 1 },
    { question: "Qui a peint 'La Nuit étoilée' ?", answers: ["Monet", "Van Gogh", "Picasso", "Dali"], correct: 1 },
    { question: "Quel est le nom du héros de 'Le Petit Prince' ?", answers: ["Antoine", "St-Exupéry", "Le Petit Prince", "Fox"], correct: 2 },
    { question: "Quelle est la langue officielle de la Chine ?", answers: ["Chinois", "Mandarin", "Cantonais", "Tibétain"], correct: 1 },
    { question: "Quelle est la monnaie utilisée en Europe ?", answers: ["Dollar", "Yen", "Euro", "Livre"], correct: 2 },
    { question: "Quel est le plus grand continent ?", answers: ["Asie", "Europe", "Amérique", "Afrique"], correct: 0 },
    { question: "Quel est le nom de la voiture la plus vendue au monde ?", answers: ["Toyota Corolla", "Ford Focus", "Volkswagen Golf", "Honda Civic"], correct: 0 },
    { question: "Quel pays est connu pour ses châteaux de conte de fées ?", answers: ["France", "Allemagne", "Royaume-Uni", "Italie"], correct: 1 },
    { question: "Quel est le nom du premier homme sur la Lune ?", answers: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"], correct: 1 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["Orwell", "Huxley", "Bradbury", "Dick"], correct: 0 },
    { question: "Quelle est la capitale du Canada ?", answers: ["Toronto", "Vancouver", "Ottawa", "Montréal"], correct: 2 },
    { question: "Quel est l'élément chimique avec le symbole H ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 0 },
    { question: "Quel animal vit le plus longtemps ?", answers: ["Tortue", "Éléphant", "Baleine", "Aigle"], correct: 2 },
    { question: "Quel est le pays où se trouve la Grande Muraille ?", answers: ["Japon", "Chine", "Corée", "Vietnam"], correct: 1 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Hedy Lamarr", "Ada Lovelace"], correct: 0 },
    { question: "Quelle est la température de l'eau bouillante ?", answers: ["100°C", "90°C", "80°C", "70°C"], correct: 0 },
    { question: "Quel est le nom de l'organe de la vue ?", answers: ["Oreille", "Nez", "Œil", "Langue"], correct: 2 },
    { question: "Quelle est la plus grande ville du monde ?", answers: ["Tokyo", "New York", "Shanghai", "Sao Paulo"], correct: 0 },
    { question: "Quel est le pays d'origine du sushi ?", answers: ["Chine", "Japon", "Corée", "Thaïlande"], correct: 1 },
    { question: "Quel est le nom de l'auteur de 'Le Seigneur des Anneaux' ?", answers: ["Tolkien", "Rowling", "Lewis", "Martin"], correct: 0 },
    { question: "Quel est le principal gaz à effet de serre ?", answers: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"], correct: 1 },
    { question: "Quel est l'animal le plus rapide sur terre ?", answers: ["Guepard", "Léopard", "Loup", "Antilope"], correct: 0 },
    { question: "Quelle est la capitale de l'Australie ?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
    { question: "Quel est le plus gros mammifère marin ?", answers: ["Orque", "Dauphin", "Baleine bleue", "Requin"], correct: 2 },
    { question: "Quel est le nom du système d'exploitation de Microsoft ?", answers: ["Windows", "MacOS", "Linux", "Unix"], correct: 0 },
    { question: "Quel est le pays le plus petit du monde ?", answers: ["Monaco", "Vatican", "Nauru", "Saint-Marin"], correct: 1 },
    { question: "Quel est le nom du héros de 'Don Quichotte' ?", answers: ["Sancho Panza", "Cervantes", "Quichotte", "Rocinante"], correct: 2 },
    { question: "Quel est le sport où l'on utilise une raquette et une balle ?", answers: ["Tennis", "Football", "Basketball", "Baseball"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente du Chili ?", answers: ["Bachelet", "Allende", "Pinochet", "Frei"], correct: 0 },
    { question: "Quel est le principal pays producteur de café ?", answers: ["Brésil", "Colombie", "Éthiopie", "Vietnam"], correct: 0 },
    { question: "Quel est le nom du héros de 'Moby Dick' ?", answers: ["Ishmael", "Ahab", "Queequeg", "Starbuck"], correct: 1 },
    { question: "Quel est le nom du roi des dieux dans la mythologie grecque ?", answers: ["Zeus", "Hercule", "Poséidon", "Hadès"], correct: 0 },
    { question: "Quel est le principal gaz de l'atmosphère terrestre ?", answers: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"], correct: 1 },
    { question: "Quel est le nom de la plus grande chaîne de montagnes du monde ?", answers: ["Himalaya", "Andes", "Alpes", "Rocaille"], correct: 0 },
    { question: "Quel est le principal matériau utilisé pour construire une maison ?", answers: ["Brique", "Bois", "Acier", "Verre"], correct: 1 },
    { question: "Quel est le nom de la première femme à avoir remporté le prix Nobel de la paix ?", answers: ["Marie Curie", "Malala", "Mother Teresa", "Aung San Suu Kyi"], correct: 2 },
    { question: "Quel est le nom du premier homme à avoir fait le tour du monde ?", answers: ["Magellan", "Columbus", "Cook", "Darwin"], correct: 0 },
    { question: "Quel est le nom du fleuve qui traverse Paris ?", answers: ["Seine", "Loire", "Rhin", "Garonne"], correct: 0 },
    { question: "Quel est le nom du célèbre parc d'attractions de France ?", answers: ["Parc Astérix", "Disneyland", "Futuroscope", "Puy du Fou"], correct: 1 },
    { question: "Quel est le nom de la chanson emblématique de Michael Jackson ?", answers: ["Billie Jean", "Thriller", "Beat It", "Black or White"], correct: 1 },
    { question: "Quel est le nom de la plus grande ville des États-Unis ?", answers: ["Los Angeles", "Chicago", "New York", "Houston"], correct: 2 },
    { question: "Quelle est la capitale de l'Allemagne ?", answers: ["Munich", "Berlin", "Francfort", "Hambourg"], correct: 1 },
    { question: "Quel est le nom du phénomène qui cause des tremblements de terre ?", answers: ["Tectonique", "Érosion", "Sismologie", "Géologie"], correct: 0 },
    { question: "Quel est le nom de la célèbre chanteuse britannique connue pour 'Rolling in the Deep' ?", answers: ["Adele", "Amy Winehouse", "Dua Lipa", "Sia"], correct: 0 },
    { question: "Quel est le pays d'origine du chocolat ?", answers: ["Suisse", "Belgique", "France", "Mexique"], correct: 3 },
    { question: "Quel est le nom de l'outil utilisé pour mesurer le temps ?", answers: ["Montre", "Horloge", "Chronomètre", "Calendrier"], correct: 1 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci représentant une femme souriante ?", answers: ["La Nuit étoilée", "La Cène", "La Joconde", "Le Cri"], correct: 2 },
    { question: "Quel est le nom de l'auteur de 'Les Fables' ?", answers: ["La Fontaine", "Rousseau", "Voltaire", "Hugo"], correct: 0 },
    { question: "Quel est le nom du volcan actif le plus célèbre d'Italie ?", answers: ["Etna", "Vésuve", "Stromboli", "Kilauea"], correct: 1 },
    { question: "Quel est le nom du célèbre architecte de la cathédrale de Notre-Dame à Paris ?", answers: ["Gustave Eiffel", "Victor Hugo", "Eugène Viollet-le-Duc", "Le Corbusier"], correct: 2 },
    { question: "Quel est le nom de la planète connue pour ses anneaux ?", answers: ["Saturne", "Jupiter", "Uranus", "Neptune"], correct: 0 },
    { question: "Quel est le nom de la célèbre montagne française qui attire les alpinistes du monde entier ?", answers: ["Mont Blanc", "Mont Ventoux", "Mont Aiguille", "Mont Everest"], correct: 0 },
    { question: "Quel est le nom de la célèbre œuvre de Shakespeare qui parle de la guerre entre deux familles ?", answers: ["Hamlet", "Roméo et Juliette", "Macbeth", "Othello"], correct: 1 },
    { question: "Quel est le nom de l'artiste qui a créé la célèbre sculpture de 'David' ?", answers: ["Michel-Ange", "Bernin", "Rodin", "Donatello"], correct: 0 },
    { question: "Quel est le nom du plus célèbre cocktail à base de tequila ?", answers: ["Margarita", "Daiquiri", "Mojito", "Pina Colada"], correct: 0 },
    { question: "Quel est le nom de l'inventeur du microscope ?", answers: ["Leeuwenhoek", "Einstein", "Newton", "Galilée"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique qui a lieu chaque année à Coachella Valley ?", answers: ["Lollapalooza", "Glastonbury", "Coachella", "Woodstock"], correct: 2 },
    { question: "Quel est le nom du célèbre roman de George Orwell qui dépeint une société dystopique ?", answers: ["1984", "Fahrenheit 451", "Brave New World", "The Handmaid's Tale"], correct: 0 },
    { question: "Quel est le nom de la série télévisée sur un groupe de amis vivant à New York ?", answers: ["How I Met Your Mother", "Friends", "The Office", "Seinfeld"], correct: 1 },
    { question: "Quel est le nom de la célèbre danse espagnole ?", answers: ["Samba", "Flamenco", "Tango", "Bachata"], correct: 1 },
    { question: "Quel est le nom du célèbre parc naturel en Afrique connu pour ses safaris ?", answers: ["Serengeti", "Yosemite", "Yellowstone", "Grand Canyon"], correct: 0 },
    { question: "Quel est le nom de la célèbre émission de télévision qui met en scène un groupe de survivants sur une île déserte ?", answers: ["Survivor", "Lost", "Survivant", "Fear the Walking Dead"], correct: 1 },
    { question: "Quel est le nom du célèbre écrivain américain connu pour ses romans de science-fiction ?", answers: ["Philip K. Dick", "Isaac Asimov", "Ray Bradbury", "Arthur C. Clarke"], correct: 1 },
    { question: "Quel est le nom de la célèbre peinture de Grant Wood représentant une ferme américaine ?", answers: ["American Gothic", "The Scream", "Starry Night", "The Persistence of Memory"], correct: 0 },
    { question: "Quel est le nom du célèbre roman de Jane Austen sur la vie sociale et romantique des femmes ?", answers: ["Pride and Prejudice", "Emma", "Sense and Sensibility", "Mansfield Park"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de cinéma qui a lieu chaque année à Cannes ?", answers: ["Sundance", "Cannes", "Toronto", "Venise"], correct: 1 },
    { question: "Quel est le nom de l'organe qui pompe le sang dans le corps ?", answers: ["Cœur", "Foie", "Reins", "Poumons"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Pride and Prejudice' ?", answers: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"], correct: 0 },
    { question: "Quel est le nom de la chanson emblématique de Whitney Houston ?", answers: ["I Will Always Love You", "My Heart Will Go On", "Like a Prayer", "Billie Jean"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique en France qui attire des artistes du monde entier ?", answers: ["Lollapalooza", "Eurockéennes", "Vieilles Charrues", "Hellfest"], correct: 1 },
    { question: "Quel est le nom du célèbre tableau de Vincent van Gogh représentant des tournesols ?", answers: ["Les Tournesols", "La Nuit étoilée", "Les Nymphéas", "Le Cri"], correct: 0 },
];

let currentQuestionIndex = 0;
let score = 0;
let audio; // Déclarez audio ici pour l'utiliser plus tard

function initializeAudio() {
    audio = new Audio('ASCENSEUR.mp3'); // Remplacez par le nom de votre fichier musical
    audio.loop = true; // Pour jouer la musique en boucle
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("loss").style.display = "none";
    audio.play(); // Commencer à jouer la musique
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionElement = document.getElementById("question");
        const answersElement = document.getElementById("answers");
        const counterElement = document.getElementById("counter");
        
        questionElement.innerText = questions[currentQuestionIndex].question;
        answersElement.innerHTML = "";
        counterElement.innerText = `Question ${currentQuestionIndex + 1} sur ${questions.length}`; // Compteur de questions

        questions[currentQuestionIndex].answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.innerText = answer;
            button.onclick = () => checkAnswer(index);
            answersElement.appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showLoss();
    }
}

function showLoss() {
    audio.pause(); // Arrêter la musique
    document.getElementById("quiz").style.display = "none";
    const lossElement = document.getElementById("loss");
    lossElement.style.display = "block";
    lossElement.innerHTML = `
        <h1 style="color: white;">Non, tu as perdu !</h1>
        <p style="color: white;">L'explication : La réponse correcte est "${questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct]}".</p>
        <button onclick="restartQuiz()">Recommencer</button>
    `;
}

function showResult() {
    audio.pause(); // Arrêter la musique
    document.getElementById("quiz").style.display = "none";
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.innerText = `Votre score est : ${score} / ${questions.length}`;
}

function restartQuiz() {
    startQuiz();
}

// Démarrer l'audio et le quiz lorsque l'utilisateur interagit
document.addEventListener('click', function() {
    initializeAudio();
    startQuiz();
}, { once: true }); // Assurez-vous que cela ne se produit qu'une seule fois