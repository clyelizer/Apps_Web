
### 🎮 **Défi 3 : Maestro du Clavier**
**Objectif :**  
Développer un **mini-jeu de réflexe et de rapidité** dans lequel l'utilisateur
doit **taper correctement une lettre affichée à l'écran** le plus rapidement possible.

---

### ⚙️ **Principe du jeu :**

1. Une **lettre aléatoire** s'affiche à l’écran dans une zone dédiée.
2. Le joueur doit **appuyer sur la touche correspondante** sur son clavier.
3. Si la touche est correcte :
   - La lettre est validée visuellement (animation ou effet de couleur).
   - Une **nouvelle lettre aléatoire** est générée automatiquement.
   - Un **score et  chrono(temps minim pour chaque foiss) seront mis à jour.

---

### 🔑 **Événements a utiliser :**

| Événement       | Rôle dans le jeu                                             |
|----------------|--------------------------------------------------------------|
| `keydown`      | Déclenché dès qu’une touche est enfoncée. <br>Utilisé pour vérifier si la touche appuyée correspond à la lettre cible affichée. |
| `keyup`        | Déclenché au relâchement de la touche. <br>Permet de générer une **nouvelle lettre aléatoire** à chaque réussite. |
| `focusin`      | Lorsqu'on entre dans le champ de jeu (zone ou input actif). <br>Ajoute un **effet visuel** (ex. : bordure lumineuse) pour indiquer que le jeu est prêt. |
| `focusout`     | Lorsqu'on quitte la zone de jeu. <br>Supprime l’effet visuel pour indiquer l’inactivité. |

---

### ✨ **Comportement visuel suggéré :**

- 🎯 Zone de jeu : un carré ou une boîte affichant la lettre cible.
- ✨ `focusin` : la bordure devient lumineuse ou colorée (par ex. bleu néon).
- 🛑 `focusout` : la bordure redevient grise ou neutre.
- ✅ Si bonne touche : fond ou lettre devient verte brièvement.
- ❌ Si mauvaise touche : animation rouge 
