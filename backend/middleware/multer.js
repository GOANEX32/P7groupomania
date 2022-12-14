// ---Importation---
const multer = require("multer"); // multer : permet de gérer les fichiers entrants dans les requêtes HTTP.

//---le dictionnaire de MINE TYPES---
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
    "image/bmp": "bmp",
    "image/webp": "webp",
};

//---La méthode diskStorage() configure le chemin et le nom de fichier pour les fichiers entrants---
const storage = multer.diskStorage({
    // ---objet de configuration a besoin de 2elements: destination et filename---
    destination: (req, file, fonctionCallBack) => {
        //---la fonction destination indique à multer d'enregistrer les fichiers dans le dossier images---
        fonctionCallBack(null, "images");
    },
    filename: (req, file, fonctionCallBack) => {
        const name = req.body.posterId; // le nom d'origine en eliminant espace et on donne _ à la place d'espace
        const extension = MIME_TYPES[file.mimetype]; //la constante dictionnaire de type MIME pour résoudre l'extension de fichier appropriée.
        fonctionCallBack(null, name + Date.now() + "." + extension); //d'ajouter un timestamp Date.now() comme nom de fichier.
    },
});

//---La méthode single()crée un middleware qui capture les fichiers d'un certain type (passé en argument),et les enregistre au système de fichiers du serveur à l'aide du storage configuré.
module.exports = multer({ storage }).single("file");
