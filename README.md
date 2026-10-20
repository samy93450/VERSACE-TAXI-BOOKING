# ASM Taxi Booking — publication GitHub Pages

Application HTML pour iPhone et iPad. Aucun logiciel à compiler et aucune dépendance à installer.

## Publication en quelques étapes

1. Décompressez le ZIP sur votre ordinateur.
2. Connectez-vous à https://github.com et créez un dépôt nommé `asm-taxi` avec **New repository**. Un dépôt public permet GitHub Pages avec GitHub Free.
3. Dans ce dépôt, choisissez **Add file → Upload files**. Déposez le CONTENU du dossier `ASM_TAXI_GITHUB`, notamment `index.html`, `sw.js`, `manifest.webmanifest`, `favicon.ico` et le dossier `icons`. Conservez l'arborescence du dossier `icons`. Ne déposez pas simplement le ZIP, et ne placez pas `index.html` dans un sous-dossier supplémentaire. Validez avec **Commit changes**. Avec un envoi via le navigateur, les fichiers cachés comme `.nojekyll` peuvent être omis ; les fichiers de cette application restent compatibles.
4. Ouvrez **Settings → Pages**.
5. Dans **Build and deployment**, choisissez **Deploy from a branch**, branche **main**, dossier **/(root)**, puis **Save**.
6. Attendez la fin de la publication. GitHub indiquera l'adresse, généralement `https://VOTRE-PSEUDO.github.io/asm-taxi/`.

Documentation officielle : https://docs.github.com/fr/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Vos données existantes

AVANT de changer d'adresse, ouvrez votre ancienne application et utilisez sa touche de sauvegarde pour télécharger le fichier JSON. Ouvrez ensuite la nouvelle adresse GitHub et restaurez ce fichier depuis l'application. Faites la même opération sur chaque appareil si nécessaire.

L'adresse GitHub a son propre stockage : les données de l'ancien site n'y apparaissent pas automatiquement. Les réservations, destinations personnalisées et commissions restent dans le navigateur utilisé ; aucune synchronisation automatique entre iPhone et iPad. Le stockage est partagé entre pages d'une même origine GitHub : évitez plusieurs copies indépendantes de cette application sous le même domaine si elles doivent avoir des données différentes.

Conservez régulièrement une sauvegarde JSON dans Fichiers ou sur votre ordinateur. Effacer les données du navigateur peut effacer l'historique local. Ne mettez jamais vos sauvegardes ou données clients dans le dépôt : GitHub Pages publie un site accessible sur Internet. La tête qui ouvre les commissions n'est pas un mot de passe.

## Installer sur iPhone et iPad

1. Ouvrez l'adresse GitHub publiée dans Safari.
2. Touchez **Partager → Sur l'écran d'accueil**, puis **Ajouter**.
3. L'icône noire et dorée ASM Taxi sera utilisée. Si une ancienne icône reste affichée, retirez le raccourci et ajoutez-le de nouveau après avoir sauvegardé vos données.

Les icônes 180, 192 et 512 pixels, ainsi que l'original 1024 pixels, sont incluses.

## WhatsApp

Le bouton de partage prépare une image. Choisissez ensuite WhatsApp et le destinataire dans la feuille de partage de l'appareil. L'application n'envoie pas automatiquement la réservation à un chauffeur. Si le navigateur ne permet pas le partage de fichiers, téléchargez l'image et joignez-la dans WhatsApp. Utilisez l'adresse HTTPS publiée, pas un aperçu du fichier sur GitHub.

## Hors connexion et mises à jour

Après une première visite en ligne et la mise en cache réussie, le formulaire peut s'ouvrir hors connexion. Le partage via WhatsApp demande une connexion pour l'envoi. Pour actualiser l'application, remplacez les fichiers modifiés dans le dépôt et changez la version `asm-taxi-shell-v1` dans `sw.js` à chaque livraison. Fermez puis rouvrez les fenêtres de l'application pour activer une nouvelle version.

## Fonctions conservées

- Réservataire MOURAD par défaut, appartement, date et heure séparées, départ Citadines Paris la Défense, véhicule, passagers, observation et urgence.
- Aéroports, gares parisiennes, Disneyland Paris, Parc Astérix et destinations personnalisées.
- Historique, compteurs du mois et grand total, ajouts manuels et remises à zéro.
- Commissions par destination, commissions manuelles et compteurs en euros.
- Fiches de réservation et bilan des destinations en images partageables, avec choix d'afficher les commissions sur le bilan.
- Sauvegarde et restauration JSON, présentation noire et dorée avec compteurs flip 3D.

## Vérifications après publication

Sur votre iPhone et votre iPad, créez une réservation de test, vérifiez les compteurs, produisez une fiche et essayez le partage WhatsApp. Vérifiez aussi la sauvegarde/restauration et l'icône sur l'écran d'accueil. Supprimez ensuite votre réservation de test. Le fonctionnement réel du partage dépend du navigateur et des applications installées.

## Contenu technique

`index.html` est l'entrée complète de l'application et conserve le logo intégré. `manifest.webmanifest` définit l'installation. `sw.js` met les fichiers de l'interface en cache et ne contient aucune réservation. Les chemins relatifs permettent un hébergement dans un sous-dossier GitHub Pages.

Les contrôles de préparation portent sur la syntaxe JavaScript, les chemins locaux, le manifeste et l'intégrité du ZIP. Ils ne remplacent pas une vérification du partage sur un appareil Apple réel.
