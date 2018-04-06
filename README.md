# Gully [![Build Status](https://travis-ci.org/BuonOmo/gully.svg?branch=master)](https://travis-ci.org/BuonOmo/gully)

Le site du gully-sound!

Il est possible d'utiliser `yarn` ou `npm` pour les dépendences.  Les contributions sont bienvenues.
Vous pouvez me contacter par mail à buonomo.ulysse@gmail.com.

## Developpement

Il suffit de lancer la tâche suivante et d'observer le résultat (réactualisé durant le développement) sur
[localhost:8080](http://localhost:8080) :

    yarn run dev

## Déploiement

Celui-ci se fait automatiquement via `travis` lors des push sur la branche `master`. Il est aussi possible d'en
déclencher un avec :

    yarn run deploy
    
## Git Pre-Commit

Afin que la date de modification du site indiquée sur le fichier 'humans.txt' reste à jour. Il est conseillé d'ajouter
un fichier éxécutable `.git/hooks/pre-commit` contenant le code suivant:

    #!/bin/sh
    
    sed -i '' -e  "s/last update:.*/last update: $(date +%Y-%m-%d)/" humans.txt 
    git add humans.txt

