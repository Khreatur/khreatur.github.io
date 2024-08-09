
let currentWordIndex = 0;
const vocabulary = {
    nourriture: [
        ["Pomme", "Mela"],
        ["Pain", "Pane"],
        ["Fromage", "Formaggio"],
        ["Tomate", "Pomodoro"],
        ["Lait", "Latte"],
        ["Viande", "Carne"],
        ["Poisson", "Pesce"],
        ["Poulet", "Pollo"],
        ["Salade", "Insalata"],
        ["Riz", "Riso"],
        ["Pâtes", "Pasta"],
        ["Beurre", "Burro"],
        ["Œuf", "Uova"],
        ["Soupe", "Zuppa"],
        ["Carotte", "Carote"],
        ["Pommes de terre", "Patate"],
        ["Oignon", "Cipolla"],
        ["Ail", "Aglio"],
        ["Huile", "Olio"],
        ["Miel", "Miele"],
        ["Chocolat", "Cioccolato"],
        ["Café", "Caffè"],
        ["Thé", "Tè"],
        ["Jus de fruit", "Succo di frutta"],
        ["Yaourt", "Yogurt"],
        ["Crème", "Crema"],
        ["Vin", "Vino"],
        ["Bière", "Birra"],
        ["Biscuit", "Biscotto"],
        ["Gâteau", "Torta"],
        ["Glace", "Gelato"],
        ["Fruits", "Frutta"],
        ["Légumes", "Verdure"],
        ["Saumon", "Salmone"],
        ["Crevette", "Gamberi"],
        ["Herbes", "Erbe"],
        ["Épices", "Spezie"],
        ["Moutarde", "Senape"],
        ["Sauce", "Salsa"],
        ["Amande", "Mandorle"],
        ["Noix", "Noci"],
        ["Avocat", "Avocado"],
        ["Courgette", "Zucchine"],
        ["Aubergine", "Melanzane"],
        ["Champignon", "Funghi"],
        ["Poire", "Pera"],
        ["Pêche", "Pesca"],
        ["Cerise", "Ciliegia"],
        ["Raisin", "Uva"],
        ["Fraise", "Fragola"],
        ["Orange", "Arancia"],
        ["Citron", "Limone"],
        ["Banane", "Banana"],
        ["Mangue", "Mango"],
        ["Ananas", "Ananas"],
        ["Pastèque", "Anguria"],
        ["Melon", "Melone"],
        ["Framboise", "Lampone"],
        ["Myrtille", "Mirtillo"],
        ["Abricot", "Albicocca"],
        ["Figues", "Fichi"],
        ["Pamplemousse", "Pompelmo"],
        ["Kiwi", "Kiwi"],
        ["Concombre", "Cetriolo"],
        ["Brocoli", "Broccolo"],
        ["Chou-fleur", "Cavolfiore"],
        ["Épinards", "Spinaci"],
        ["Pois", "Piselli"],
        ["Poivron", "Peperone"],
        ["Maïs", "Mais"],
        ["Artichaut", "Carciofo"],
        ["Radis", "Ravanello"],
        ["Céleri", "Sedano"],
        ["Betterave", "Barbabietola"],
        ["Navet", "Rapa"],
        ["Laitue", "Lattuga"],
        ["Asperge", "Asparagi"],
        ["Persil", "Prezzemolo"],
        ["Romarin", "Rosmarino"],
        ["Basilic", "Basilico"],
        ["Origan", "Origano"],
        ["Thym", "Timo"],
        ["Laurier", "Alloro"],
        ["Sauge", "Salvia"],
        ["Cannelle", "Cannella"],
        ["Vanille", "Vaniglia"],
        ["Safran", "Zafferano"],
        ["Menthe", "Menta"],
        ["Coriandre", "Coriandolo"],
        ["Gingembre", "Zenzero"],
        ["Noix de muscade", "Noce moscata"],
        ["Clou de girofle", "Chiodi di garofano"],
        ["Paprika", "Paprica"],
        ["Curcuma", "Curcuma"],
        ["Piment", "Peperoncino"],
        ["Muscade", "Noce moscata"]
    ],    
    maison: [
        ["Le salon", "La mostra"],
        ["La pièce", "La stanza"],
        ["La cuisine", "La cucina"],
        ["La chambre", "La stanza da letto"],
        ["Les toilettes", "La toiletta"],
        ["La salle de bain", "Il bagno"],
        ["La table", "Il tavolo"],
        ["La chaise", "La sedia"],
        ["Le lit", "Il letto"],
        ["Le canapé", "Il divano"],
        ["L'armoire", "L'armadio"],
        ["La commode", "Il comò"],
        ["L'étagère", "La mensola"],
        ["Le bureau", "La scrivania"],
        ["L'évier", "Il lavello"],
        ["Le frigo", "Il frigorifero"],
        ["Le four", "Il forno"],
        ["Le micro-ondes", "Il microonde"],
        ["Le lave-vaisselle", "La lavastoviglie"],
        ["Le dressing", "La guardaroba"],
        ["Le rideau", "La tenda"],
        ["Les luminaires", "Le lampade"],
        ["Le tapis", "Il tappeto"],
        ["Le miroir", "Lo specchio"],
        ["La table basse", "Il tavolino"],
        ["La console", "La consolle"],
        ["Le pouf", "Il pouf"],
        ["La chaise longue", "La sdraio"],
        ["Le bureau", "La scrivania"],
        ["La cheminée", "Il camino"],
        ["La penderie", "L'armadio"],
        ["La lampe", "La lampada"],
        ["Le plaid", "La coperta"],
        ["La table de nuit", "Il comodino"],
        ["L'oreiller", "Il cuscino"],
        ["La couette", "La coperta"],
        ["Le matelas", "Il materasso"],
        ["Le tiroir", "Il cassetto"],
        ["La bibliothèque", "La libreria"],
        ["La housse", "La copertura"],
        ["Le climatiseur", "Il condizionatore"],
        ["Le ventilateur", "Il ventilatore"],
        ["La tapisserie", "La tappezzeria"],
        ["Le parquet", "Il parquet"],
        ["Le carrelage", "Le piastrelle"],
        ["La plaque de cuisson", "Il piano cottura"],
        ["L'étagère", "La mensola"],
        ["Le sèche-linge", "L'asciugatrice"],
        ["Le tabouret", "Lo sgabello"],
        ["Le buffet", "La credenza"]
    ],

    métiers: [
        ["Médecin", "Dottore"],
        ["Ingénieur", "Ingegnere"],
        ["Professeur", "Professore"],
        ["Avocat", "Avvocato"],
        ["Architecte", "Architetto"],
        ["Artiste", "Artista"],
        ["Journaliste", "Giornalista"],
        ["Infirmier", "Infermiere"],
        ["Pharmacien", "Farmacista"],
        ["Vétérinaire", "Veterinario"],
        ["Électricien", "Elettricista"],
        ["Plombier", "Idraulico"],
        ["Chauffeur", "Autista"],
        ["Couturier", "Sarta"],
        ["Chef cuisinier", "Cuoco"],
        ["Pilote", "Pilota"],
        ["Directeur", "Direttore"],
        ["Informaticien", "Informatico"],
        ["Scientifique", "Scienziato"],
        ["Musicien", "Musicista"],
        ["Photographe", "Fotografo"],
        ["Graphiste", "Grafico"],
        ["Écrivain", "Scrittore"],
        ["Traducteur", "Traduttore"],
        ["Conseiller", "Consulente"],
        ["Gestionnaire", "Manager"],
        ["Designer", "Designer"],
        ["Agriculteur", "Agricoltore"],
        ["Ébéniste", "Ebanista"],
        ["Méchanicien", "Meccanico"]
    ],
    corps: [
        ["La tête", "La testa"],
        ["Le bras", "Il braccio"],
        ["La main", "La mano"],
        ["Le doigt", "Il dito"],
        ["L'épaule", "La spalla"],
        ["Le coude", "Il gomito"],
        ["Le poignet", "Il polso"],
        ["Le pied", "Il piede"],
        ["La cheville", "La caviglia"],
        ["Le genou", "Il ginocchio"],
        ["La cuisse", "La coscia"],
        ["La jambe", "La gamba"],
        ["Le bassin", "Il bacino"],
        ["Le ventre", "La pancia"],
        ["Le dos", "La schiena"],
        ["La poitrine", "Il petto"],
        ["Le cœur", "Il cuore"],
        ["Le poumon", "Il polmone"],
        ["L'estomac", "Lo stomaco"],
        ["Le foie", "Il fegato"],
        ["Le rein", "Il rene"],
        ["Le colon", "Il colon"],
        ["Le système nerveux", "Il sistema nervoso"],
        ["L'œil", "L'occhio"],
        ["L'oreille", "L'orecchio"],
        ["Le nez", "Il naso"],
        ["La bouche", "La bocca"],
        ["La dent", "Il dente"],
        ["La langue", "La lingua"],
        ["Les cheveux", "I capelli"],
        ["La peau", "La pelle"]
    ],
    animaux: [
        ["Le chat", "Il gatto"],
        ["Le chien", "Il cane"],
        ["Le cheval", "Il cavallo"],
        ["La vache", "La mucca"],
        ["Le cochon", "Il maiale"],
        ["Le mouton", "La pecora"],
        ["La poule", "La gallina"],
        ["Le canard", "L'anatra"],
        ["Le lapin", "Il coniglio"],
        ["Le poisson", "Il pesce"],
        ["Le serpent", "Il serpente"],
        ["La tortue", "La tartaruga"],
        ["Le perroquet", "Il pappagallo"],
        ["Le singe", "La scimmia"],
        ["L'éléphant", "L'elefante"],
        ["Le lion", "Il leone"],
        ["La tigre", "La tigre"],
        ["Le girafe", "La giraffa"],
        ["L'ours", "L'orso"],
        ["Le panda", "Il panda"],
        ["Le kangourou", "Il canguro"],
        ["Le zèbre", "La zebra"],
        ["Le rhinocéros", "Il rinoceronte"],
        ["L'hippopotame", "L'ippopotamo"],
        ["Le crocodile", "Il coccodrillo"],
        ["Le dauphin", "Il delfino"],
        ["La baleine", "La balena"],
        ["Le requin", "Lo squalo"],
        ["Le phoque", "La foca"],
        ["La mouette", "Il gabbiano"],
        ["Le corbeau", "Il corvo"],
        ["L'aigle", "L'aquila"],
        ["Le hibou", "Il gufo"],
        ["Le pigeon", "Il piccione"],
        ["La chauve-souris", "Il pipistrello"],
        ["Le renard", "La volpe"],
        ["Le loup", "Il lupo"],
        ["Le cerf", "Il cervo"],
        ["La biche", "La cerva"],
        ["Le sanglier", "Il cinghiale"],
        ["La mouette", "Il gabbiano"],
        ["La grenouille", "La rana"],
        ["Le lézard", "Il lucertola"],
        ["La libellule", "La libellula"],
        ["Le papillon", "La farfalla"],
        ["L'abeille", "L'ape"],
        ["La fourmi", "La formica"],
        ["Le scarabée", "Il scarabeo"]
    ],

    vêtements: [
        ["Le t-shirt", "La maglietta"],
        ["Le pantalon", "I pantaloni"],
        ["La chemise", "La camicia"],
        ["La veste", "La giacca"],
        ["Le pull", "Il maglione"],
        ["Le short", "I pantaloni corti"],
        ["La jupe", "La gonna"],
        ["Le manteau", "Il cappotto"],
        ["Le costume", "Il completo"],
        ["La robe", "Il vestito"],
        ["Le blouson", "Il giubbotto"],
        ["Le pyjama", "Il pigiama"],
        ["Le gilet", "Il gilet"],
        ["Les chaussettes", "I calzini"],
        ["Les chaussures", "Le scarpe"],
        ["Les bottes", "Gli stivali"],
        ["Le bonnet", "Il cappello"],
        ["La ceinture", "La cintura"],
        ["Les gants", "I guanti"],
        ["Le foulard", "Il foulard"],
        ["Les lunettes de soleil", "Gli occhiali da sole"],
        ["Le pull-over", "Il maglione"],
        ["La veste en cuir", "La giacca di pelle"],
        ["Le débardeur", "Il canottiera"],
        ["Les sandales", "I sandali"],
        ["La chemisette", "La camicia a maniche corte"],
        ["Le sweat-shirt", "La felpa"],
        ["La parka", "La parka"],
        ["Le jogging", "Il tuta sportiva"],
        ["Le chapeau", "Il cappello"]
    ],

    sport : [
        ["Football", "Calcio"],
        ["Basketball", "Basket"],
        ["Tennis", "Tennis"],
        ["Natation", "Nuoto"],
        ["Cyclisme", "Ciclismo"],
        ["Rugby", "Rugby"],
        ["Volleyball", "Pallavolo"],
        ["Handball", "Pallamano"],
        ["Golf", "Golf"],
        ["Boxe", "Pugilato"],
        ["Judo", "Judo"],
        ["Karate", "Karate"],
        ["Athlétisme", "Atletica"],
        ["Escrime", "Scherma"],
        ["Hockey", "Hockey"],
        ["Baseball", "Baseball"],
        ["Badminton", "Badminton"],
        ["Ski", "Sci"],
        ["Patinage", "Pattinaggio"],
        ["Surf", "Surf"],
        ["Rugby", "Rugby"],
        ["Lutte", "Lotta"],
        ["Aviron", "Canottaggio"],
        ["Équitation", "Equitazione"],
        ["Alpinisme", "Alpinismo"],
        ["Patinage artistique", "Pattinaggio artistico"],
        ["Marathon", "Maratona"],
        ["Triathlon", "Triathlon"],
        ["Karaté", "Karate"],
        ["Voile", "Vela"],

    ],
    art: [
        ["La peinture", "La pittura"],
        ["Le dessin", "Il disegno"],
        ["La sculpture", "La scultura"],
        ["La photographie", "La fotografia"],
        ["La musique", "La musica"],
        ["Le ballet", "Il balletto"],
        ["Le théâtre", "Il teatro"],
        ["La danse", "La danza"],
        ["Le cinéma", "Il cinema"],
        ["L'architecture", "L'architettura"],
        ["La littérature", "La letteratura"],
        ["La poésie", "La poesia"],
        ["Le roman", "Il romanzo"],
        ["Le conte", "Il racconto"],
        ["La pièce de théâtre", "Il dramma"],
        ["Le chef-d'œuvre", "Il capolavoro"],
        ["Le musée", "Il museo"],
        ["La galerie", "La galleria"],
        ["Le portrait", "Il ritratto"],
        ["La fresque", "L'affresco"],
        ["Le paysage", "Il paesaggio"],
        ["Le nu", "Il nudo"],
        ["La tapisserie", "L'arazzo"],
        ["La gravure", "L'incisione"],
        ["Le collage", "Il collage"],
        ["La céramique", "La ceramica"],
        ["Le vitrail", "La vetrata"],
        ["La mosaïque", "Il mosaico"],
        ["La lithographie", "La litografia"],
        ["La photographie artistique", "La fotografia artistica"],
        ["Le design", "Il design"],
        ["L'illustration", "L'illustrazione"],
        ["La performance", "La performance"],
        ["La vidéo", "Il video"],
        ["Le film", "Il film"],
        ["L'opéra", "L'opera"],
        ["La symphonie", "La sinfonia"],
        ["Le concert", "Il concerto"],
        ["La composition", "La composizione"],
        ["Le scénario", "La sceneggiatura"],
        ["Le critique d'art", "Il critico d'arte"],
        ["L'exposition", "La mostra"],
        ["Le festival", "Il festival"],
        ["La toile", "La tela"],
        ["La palette", "La tavolozza"],
        ["Le pinceau", "Il pennello"],
        ["La baguette", "Il bastone del direttore"]
    ],

    nombres: [
        ["0", "Zero"],
        ["1", "Uno"],
        ["2", "Due"],
        ["3", "Tre"],
        ["4", "Quattro"],
        ["5", "Cinque"],
        ["6", "Sei"],
        ["7", "Sette"],
        ["8", "Otto"],
        ["9", "Nove"],
        ["10", "Dieci"],
        ["11", "Undici"],
        ["12", "Dodici"],
        ["13", "Tredici"],
        ["14", "Quattordici"],
        ["15", "Quindici"],
        ["16", "Sedici"],
        ["17", "Diciassette"],
        ["18", "Diciotto"],
        ["19", "Diciannove"],
        ["20", "Venti"],
        ["21", "Ventuno"],
        ["22", "Ventidue"],
        ["23", "Ventitré"],
        ["24", "Ventiquattro"],
        ["25", "Venticinque"],
        ["26", "Ventisei"],
        ["27", "Ventisette"],
        ["28", "Ventotto"],
        ["29", "Ventotto"],
        ["30", "Trenta"],
        ["31", "Trentuno"],
        ["32", "Trentadue"],
        ["33", "Trentatré"],
        ["34", "Trentaquattro"],
        ["35", "Trentacinque"],
        ["36", "Trentasei"],
        ["37", "Trentasette"],
        ["38", "Trentotto"],
        ["39", "Trentanove"],
        ["40", "Quaranta"],
        ["41", "Quarantuno"],
        ["42", "Quarantadue"],
        ["43", "Quarantatré"],
        ["44", "Quarantaquattro"],
        ["45", "Quarantacinque"],
        ["46", "Quarantasei"],
        ["47", "Quarantasette"],
        ["48", "Quarantotto"],
        ["49", "Quarantanove"],
        ["50", "Cinquanta"],
        ["51", "Cinquantuno"],
        ["52", "Cinquantadue"],
        ["53", "Cinquantatré"],
        ["54", "Cinquantaquattro"],
        ["55", "Cinquantacinque"],
        ["56", "Cinquantasei"],
        ["57", "Cinquantasette"],
        ["58", "Cinquantotto"],
        ["59", "Cinquantanove"],
        ["60", "Sessanta"],
        ["61", "Sessantuno"],
        ["62", "Sessantadue"],
        ["63", "Sessantatré"],
        ["64", "Sessantaquattro"],
        ["65", "Sessantacinque"],
        ["66", "Sessantasei"],
        ["67", "Sessantasette"],
        ["68", "Sessantotto"],
        ["69", "Sessantanove"],
        ["70", "Settanta"],
        ["71", "Settantuno"],
        ["72", "Settantadue"],
        ["73", "Settantatré"],
        ["74", "Settantaquattro"],
        ["75", "Settantacinque"],
        ["76", "Settantasei"],
        ["77", "Settantasette"],
        ["78", "Settantotto"],
        ["79", "Settantanove"],
        ["80", "Ottanta"],
        ["81", "Ottantuno"],
        ["82", "Ottantadue"],
        ["83", "Ottantatré"],
        ["84", "Ottantaquattro"],
        ["85", "Ottantacinque"],
        ["86", "Ottantasei"],
        ["87", "Ottantasette"],
        ["88", "Ottantotto"],
        ["89", "Ottantanove"],
        ["90", "Novanta"],
        ["91", "Novantuno"],
        ["92", "Novantadue"],
        ["93", "Novantatré"],
        ["94", "Novantaquattro"],
        ["95", "Novantacinque"],
        ["96", "Novantasei"],
        ["97", "Novantasette"],
        ["98", "Novantotto"],
        ["99", "Novantanove"],
        ["100", "Cento"],
        ["1000", "Mille"],
    ],
    
    prépositions : [
        ["à", "a"],
        ["avant", "prima"],
        ["avec", "con"],
        ["chez", "da"],
        ["contre", "contro"],
        ["dans", "dentro"],
        ["de", "di"],
        ["depuis", "da"],
        ["derrière", "dietro"],
        ["devant", "davanti"],
        ["en", "in"],
        ["entre", "tra"],
        ["envers", "verso"],
        ["sur", "su"],
        ["sous", "sotto"],
        ["près de", "vicino a"],
        ["loin de", "lontano da"],
        ["à côté de", "accanto a"],
        ["au-dessus de", "sopra"],
        ["au-dessous de", "sotto"],
        ["avant de", "prima di"],
        ["après", "dopo"],
        ["à travers", "attraverso"],
        ["par", "per"],
        ["pour", "per"],
        ["sans", "senza"],
        ["sauf", "eccetto"],
        ["malgré", "nonostante"],
        ["selon", "secondo"],
        ["grâce à", "grazie a"],
        ["à cause de", "a causa di"],
        ["en raison de", "a causa di"],
        ["au sujet de", "riguardo a"],
        ["en face de", "di fronte a"],
        ["autour de", "intorno a"],
        ["en dehors de", "fuori da"],
        ["à l'intérieur de", "all'interno di"],
        ["vers", "verso"],
        ["contre", "contro"],
        ["parmi", "tra"],
        ["en dépit de", "nonostante"],
        ["auprès de", "presso"],
        ["à travers", "attraverso"],
        ["par rapport à", "rispetto a"],
        ["parmi", "tra"],
        ["au-dessous de", "sotto"],
        ["en haut de", "in cima a"],
        ["en bas de", "in basso a"],
        ["à la place de", "al posto di"],
        ["avant", "prima"],
        ["à partir de", "a partire da"]
    ],

    verbes : [
        ["manger", "mangiare"],
        ["boire", "bere"],
        ["aller", "andare"],
        ["venir", "venire"],
        ["voir", "vedere"],
        ["entendre", "sentire"],
        ["parler", "parlare"],
        ["écouter", "ascoltare"],
        ["aimer", "amare"],
        ["détester", "odiare"],
        ["comprendre", "capire"],
        ["apprendre", "imparare"],
        ["écrire", "scrivere"],
        ["lire", "leggere"],
        ["travailler", "lavorare"],
        ["jouer", "giocare"],
        ["chercher", "cercare"],
        ["trouver", "trovare"],
        ["perdre", "perdere"],
        ["attendre", "aspettare"],
        ["demander", "chiedere"],
        ["répondre", "rispondere"],
        ["payer", "pagare"],
        ["acheter", "comprare"],
        ["vendre", "vendere"],
        ["aider", "aiutare"],
        ["marcher", "camminare"],
        ["courir", "correre"],
        ["sauter", "saltare"],
        ["laver", "lavare"],
        ["nettoyer", "pulire"],
        ["cuisiner", "cucinare"],
        ["préparer", "preparare"],
        ["voyager", "viaggiare"],
        ["dormir", "dormire"],
        ["se réveiller", "svegliarsi"],
        ["se coucher", "andare a letto"],
        ["se lever", "alzarsi"],
        ["se laver", "lavarsi"],
        ["se habiller", "vestirsi"],
        ["se déshabiller", "svestirsi"],
        ["se brosser", "spazzolarsi"],
        ["se maquiller", "truccarsi"],
        ["se coiffer", "pettinarsi"],
        ["se reposer", "riposarsi"],
        ["se détendre", "rilassarsi"],
        ["se souvenir", "ricordarsi"],
        ["oublier", "dimenticare"],
        ["changer", "cambiare"],
        ["réparer", "riparare"],
        ["je joue", "io gioco"],
        ["tu étais", "tu eri"],
        ["il mange", "lui mangia"],
        ["nous lisons", "noi leggiamo"],
        ["vous avez vu", "voi avete visto"],
        ["ils écriront", "loro scriveranno"],
        ["je parle", "io parlo"],
        ["tu chantes", "tu canti"],
        ["elle danse", "lei balla"],
        ["nous travaillions", "noi lavoravamo"],
        ["vous dormez", "voi dormite"],
        ["ils finiront", "loro finiranno"],
        ["je comprends", "io capisco"],
        ["tu regardes", "tu guardi"],
        ["il court", "lui corre"],
        ["nous apprenons", "noi impariamo"],
        ["vous sortez", "voi uscite"],
        ["elles écoutaient", "loro ascoltavano"],
        ["je vois", "io vedo"],
        ["tu écris", "tu scrivi"],
        ["elle dessine", "lei disegna"],
        ["nous jouons", "noi giochiamo"],
        ["vous parliez", "voi parlavate"],
        ["ils cuisinent", "loro cucinano"],
        ["je pense", "io penso"],
        ["tu construisais", "tu costruivi"],
        ["il attend", "lui aspetta"],
        ["nous cherchons", "noi cerchiamo"],
        ["vous couriez", "voi correvate"],
        ["elles nageaient", "loro nuotavano"],
        ["je cuisinerai", "io cucinerò"],
        ["tu prépares", "tu prepari"],
        ["il étudie", "lui studia"],
        ["nous jouions", "noi giocavamo"],
        ["vous étiez", "voi eravate"],
        ["ils voyageront", "loro viaggeranno"],
        ["je découvre", "io scopro"],
        ["tu choisis", "tu scegli"],
        ["elle chante", "lei canta"],
        ["nous écrivions", "noi scrivevamo"],
        ["vous dansiez", "voi ballavate"],
        ["ils liront", "loro leggeranno"],
        ["je dessine", "io disegno"],
        ["tu regarderas", "tu guarderai"],
        ["il prendra", "lui prenderà"],
        ["nous ferons", "noi faremo"],
        ["vous jouiez", "voi giocavate"],
        ["elles étaient", "loro erano"],
        ["je finirai", "io finirò"],
        ["tu vendais", "tu vendevi"],
        ["elle regardait", "lei guardava"],
        ["je marche", "io cammino"],
        ["tu parlais", "tu parlavi"],
        ["il habite", "lui abita"],
        ["nous allons", "noi andiamo"],
        ["vous avez pris", "voi avete preso"],
        ["elles joueront", "loro giocheranno"],
        ["je ris", "io rido"],
        ["tu étudies", "tu studi"],
        ["elle écoute", "lei ascolta"],
        ["nous chantions", "noi cantavamo"],
        ["vous mangez", "voi mangiate"],
        ["ils courent", "loro corrono"],
        ["je nage", "io nuoto"],
        ["tu dors", "tu dormi"],
        ["il apprend", "lui impara"],
        ["nous écrivons", "noi scriviamo"],
        ["vous venez", "voi venite"],
        ["elles lisent", "loro leggono"],
        ["je dessinais", "io disegnavo"],
        ["tu partais", "tu partivi"],
        ["elle attend", "lei aspetta"],
        ["nous finissons", "noi finiamo"],
        ["vous regardiez", "voi guardavate"],
        ["ils choisissent", "loro scelgono"],
        ["je vis", "io vivo"],
        ["tu courras", "tu correrai"],
        ["il prépare", "lui prepara"],
        ["nous travaillons", "noi lavoriamo"],
        ["vous faites", "voi fate"],
        ["elles prennent", "loro prendono"],
        ["je cuis", "io cucino"],
        ["tu as lu", "tu hai letto"],
        ["il voyagera", "lui viaggerà"],
        ["nous jouions", "noi giocavamo"],
        ["vous marchiez", "voi camminavate"],
        ["ils regardent", "loro guardano"],
        ["je sortirai", "io uscirò"],
        ["tu ris", "tu ridi"],
        ["elle travaillait", "lei lavorava"],
        ["nous marchons", "noi camminiamo"],
        ["vous avez bu", "voi avete bevuto"],
        ["ils écoutent", "loro ascoltano"],
        ["je chantais", "io cantavo"],
        ["tu as fini", "tu hai finito"],
        ["il part", "lui parte"],
        ["nous courions", "noi correvamo"],
        ["vous jouiez", "voi giocavate"],
        ["elles écrivent", "loro scrivono"],
        ["je cuisinerai", "io cucinerò"],
        ["tu étudieras", "tu studierai"]
        
    ]  

};
let currentCategory = '';
let currentWordList = [];
let showingTranslation = false;
let wordElement, translationElement;
let notOkWords = [];
let startX = 0;  // Position de départ du swipe

const colors = [
    '#FFC0CB', // Rose clair
    '#F5F8DE', // Beige
    '#361134', // Violet foncé
    '#883955', // Pourpe/rose
    '#DA2C38'  // Corail
];

function getColorForWord(word) {
    const key = word.charCodeAt(0);
    return colors[key % colors.length];
}

function selectCategory(category) {
    console.log(`Catégorie sélectionnée : ${category}`);
    
    if (category === 'aléatoire') {
        currentCategory = 'aléatoire';
        selectRandomWord();
    } else {
        currentCategory = category;
        const categoryData = vocabulary[currentCategory];

        if (categoryData) {
            currentWordList = shuffleArray(categoryData.slice()); // Copier et mélanger les mots
            showingTranslation = false;
            updateDisplay();
        } else {
            console.error(`La catégorie ${category} n'existe pas.`);
        }
    }
}

function selectRandomWord() {
    const allWords = [];
    for (const category in vocabulary) {
        allWords.push(...vocabulary[category]);
    }

    if (allWords.length > 0) {
        currentWordList = shuffleArray(allWords.slice()); // Copier et mélanger les mots
        showingTranslation = false;
        updateDisplay();
    } else {
        console.error("Aucun mot disponible pour la catégorie aléatoire.");
    }
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function updateDisplay() {
    if (currentCategory && (currentCategory === 'aléatoire' || vocabulary[currentCategory])) {
        if (currentWordList.length === 0) {
            if (currentCategory === 'aléatoire') {
                selectRandomWord();
            } else {
                currentWordList = shuffleArray(vocabulary[currentCategory].slice());
            }
        }

        const [frWord, itWord] = currentWordList[0];
        currentWordList.shift();

        wordElement = document.getElementById('vocab-word');
        translationElement = document.getElementById('translation');
        backButton = document.getElementById('back-button');

        wordElement.classList.remove('slide-up');
        wordElement.classList.remove('fade-out');
        translationElement.classList.remove('fade-in');

        setTimeout(() => {
            wordElement.textContent = frWord;
            translationElement.textContent = itWord;
            document.getElementById('translation').style.display = 'none';
            showingTranslation = false;

            const backgroundColor = getColorForWord(frWord);
            document.documentElement.style.backgroundColor = backgroundColor;

            if (backgroundColor === '#DA2C38' || backgroundColor === '#361134' || backgroundColor === '#883955') {
                wordElement.classList.add('white-text');
                translationElement.classList.add('white-text');
                backButton.classList.add('white-text');
                wordElement.classList.remove('black-text');
                translationElement.classList.remove('black-text');
                backButton.classList.remove('black-text');
            } else {
                wordElement.classList.add('black-text');
                translationElement.classList.add('black-text');
                backButton.classList.add('black-text');
                wordElement.classList.remove('white-text');
                translationElement.classList.remove('white-text');
                backButton.classList.remove('white-text');
            }

            document.getElementById('category-page').style.display = 'none';
            document.getElementById('vocabulary-page').style.display = 'flex';

            setTimeout(() => {
                wordElement.classList.add('slide-up');
                document.getElementById('content').onclick = nextWord; // Réactiver le clic pour afficher la traduction
                removeSwipeListeners();  // Désactiver les swipes
            }, 50);

        }, 200);
    } else {
        console.error(`La catégorie ${currentCategory} n'existe pas dans updateDisplay.`);
    }
}

function speakTranslation(text) {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';
    utterance.pitch = 1;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
}

function handleOk() {
    
    nextWord();
}

function handleNotOk() {
    
    notOkWords.push([wordElement.textContent, translationElement.textContent]);
    nextWord();
}

function processNotOkWords() {
    if (notOkWords.length > 0) {
        const wordToReappear = notOkWords.shift();
        let insertIndex = 3;
        if (currentWordList.length < 3) {
            insertIndex = currentWordList.length;
        }
        currentWordList.splice(insertIndex, 0, wordToReappear);
    }
}

function nextWord() {
    if (showingTranslation) {
        wordElement.classList.remove('slide-up');
        wordElement.classList.remove('fade-out');
        translationElement.classList.remove('fade-in');
        setTimeout(() => {
            updateDisplay();
            processNotOkWords();
        }, 200);
    } else {
        document.getElementById('translation').style.display = 'block';
        wordElement.classList.add('fade-out');
        translationElement.classList.add('fade-in');
        showingTranslation = true;
        const itWord = translationElement.textContent;
        speakTranslation(itWord);
        // Désactiver le clic global une fois que la traduction est visible
        document.getElementById('content').onclick = null;
        addSwipeListeners();  // Ajouter les écouteurs de swipe
    }
}

function goBack() {
    showingTranslation = false;
    currentCategory = '';
    currentWordList = [];
    notOkWords = [];
    document.getElementById('category-page').style.display = 'flex';
    document.getElementById('vocabulary-page').style.display = 'none';
    document.getElementById('content').onclick = nextWord; // Réactiver le clic global pour la prochaine session
    removeSwipeListeners();  // Désactiver les écouteurs de swipe
}

// Fonction pour détecter les gestes de swipe
function handleSwipe(event) {
    const endX = event.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (Math.abs(diffX) > 50) {  // Seulement si le swipe est suffisamment long
        if (diffX > 0) {
            handleOk();  // Swipe vers la droite
            showSwipeIcon('/icones/ok.svg');
        } else {
            
            handleNotOk();  // Swipe vers la gauche
            showSwipeIcon('/icones/nok.webp');
        }
    }
}

// Ajouter les événements de touche pour détecter les swipes
function addSwipeListeners() {
    document.getElementById('content').addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    document.getElementById('content').addEventListener('touchend', handleSwipe);
}

function removeSwipeListeners() {
    document.getElementById('content').removeEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    document.getElementById('content').removeEventListener('touchend', handleSwipe);
}

// Fonction pour afficher l'icône de swipe
function showSwipeIcon(iconSrc) {
    const iconElement = document.getElementById('icon');
    const iconContainer = document.getElementById('icon-container');

    iconElement.src = iconSrc;
    iconContainer.style.display = 'block'; // Afficher le conteneur
    iconContainer.classList.add('animate'); // Ajouter une classe pour l'animation

    // La classe 'animate' sera retirée automatiquement après l'animation grâce à la durée de l'animation CSS
    setTimeout(() => {
        iconContainer.style.display = 'none'; // Cacher le conteneur après l'animation
        iconContainer.classList.remove('animate'); // Retirer la classe d'animation
    }, 800); // Correspond à la durée de l'animation en CSS
}
