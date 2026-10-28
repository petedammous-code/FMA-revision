---
id: rfx-diff-isomorphisme-bicontinu
type: reflexe
situation: Vérifier qu'une différentielle (ou une différentielle partielle) est un isomorphisme bicontinu, en particulier entre espaces de fonctions
chapters: [5, 6, 7]
---
## Situation

On veut appliquer l'inversion locale ou les fonctions implicites, et il reste **l'hypothèse clé** : « $df_{x_0}$ (ou $\frac{\partial F}{\partial y}(x_0,y_0)$) est un isomorphisme bicontinu ». En dimension finie c'est un calcul de déterminant ; en dimension infinie c'est souvent **la** question difficile : $L=\frac{d^2}{dt^2}$ de $\{u\in C^2([0,1]),\ u(0)=u(1)=0\}$ dans $C^0([0,1])$, $L(h)=h'+a(t)h$ de $\{h\in C^1,\ h(0)=0\}$ dans $C^0$, $L=\mathrm{Id}-K$ avec $K$ opérateur intégral, $L(H)=AH+HA$ sur $\mathrm M_n(\R)$. On veut : $L$ linéaire **continue**, **bijective**, d'inverse **continu**.

## Options

### [x] Perturbation d'un isomorphisme connu (série de Neumann) — [[ch05-inversion-c-infini]]
**Quand.** $L=L_0+P$ avec $L_0\in\mathrm{Iso}(E;F)$ connu et $\|L_0^{-1}P\|<1$ (souvent : $L=\mathrm{Id}-K$ avec $\|K\|<1$, ou $L$ proche de $df$ en un point où l'on sait inverser). Alors $L=L_0(\mathrm{Id}+L_0^{-1}P)$ est un isomorphisme bicontinu, d'inverse $\sum_{n\ge0}(-L_0^{-1}P)^nL_0^{-1}$ (poly, Théorème V.5.7, p. 109 ; série de Neumann [[ch05-serie-neumann]]).
**Justification.** $\mathrm{Iso}(E;F)$ est **ouvert** dans $\mathcal L(E;F)$ quand $E$, $F$ sont des Banach.
**Pièges.** La norme de $L_0^{-1}P$ est une **norme d'opérateur** $E\to E$ : majorer $\|L_0^{-1}\|_{\mathcal L(F;E)}\cdot\|P\|_{\mathcal L(E;F)}$ avec les **bonnes** normes de $E$ et $F$. Conséquence utile : si $df_{x_0}$ est inversible, $df_x$ l'est pour $x$ proche de $x_0$.

### [x] Bijectivité par résolution explicite + théorème d'isomorphisme de Banach — [[ch05-isomorphisme-banach]]
**Quand.** On sait **résoudre** $Lh=k$ pour tout $k$ (double intégration pour $h''=k$, variation de la constante pour $h'+ah=k$, formule de Duhamel) et prouver l'unicité (solution de l'équation homogène nulle). Si $E$, $F$ sont des **Banach** et $L$ est continue bijective, alors $L^{-1}$ est automatiquement continue (poly, Théorème V.2.3, p. 97).
**Justification.** Théorème de l'application ouverte (Baire). En pratique, la formule explicite donne souvent **directement** une borne $\|L^{-1}k\|_E\le C\|k\|_F$, ce qui évite d'invoquer Banach.
**Pièges.** Les deux espaces doivent être **complets** pour les normes choisies, et $L$ **continue** pour ces normes : sur $C^2$, prendre $\|u\|_{C^2}=\|u\|_\infty+\|u'\|_\infty+\|u''\|_\infty$ ; avec $\|\cdot\|_\infty$ sur $C^2$, ni la complétude ni la continuité de $u\mapsto u''$ n'ont lieu. Les conditions au bord (sous-espace fermé) font partie de $E$ : elles rendent $L$ injective.

### [x] Dimension finie : noyau nul (ou déterminant non nul) — [[ch05-matrice-jacobienne]]
**Quand.** $E=F$ de dimension finie (ou $\dim E=\dim F<\infty$) : toute application linéaire est continue, et injective ⇔ bijective. Montrer $\ker L=\{0\}$ (souvent plus simple qu'un déterminant : « si $AH+HA=0$ alors... ») ou $\mathrm{Jac}\ne0$.
**Justification.** Théorème du rang.
**Pièges.** Vérifier l'**égalité des dimensions** (par exemple $L:\mathrm M_n(\R)\to\Sym_n$ n'est pas injective : il faut restreindre la source à un supplémentaire du noyau, comme dans la preuve du lemme de Morse, [[ch06-lemme-de-morse]]).

### [x] Seulement surjective : restreindre à un supplémentaire fermé du noyau — [[ch06-submersion-ouverte]]
**Quand.** $L=df_a$ est **surjective** mais a un noyau (plus d'inconnues que d'équations : $d\Psi_0=\frac{d}{dt}$ de $C^1$ sur $C^0$, de noyau les constantes). Si $\ker L$ admet un supplémentaire **fermé** $E_2$, alors $L|_{E_2}:E_2\to F$ est un isomorphisme bicontinu (Banach), et l'on applique l'inversion locale à $f$ restreinte à $a+E_2$ (poly, Exercice VI.4.5, p. 124).
**Justification.** $E_2$ fermé dans un Banach est un Banach ; $L|_{E_2}$ est bijective continue.
**Pièges.** Il faut exhiber $E_2$ et prouver qu'il est **fermé** (par exemple $\{h\in C^1,\ h(0)=0\}$, noyau d'une forme linéaire continue).

### [ ] Injectivité seule, comme en dimension finie — [[ch05-application-ouverte]]
**Pourquoi ce n'est pas l'outil ici.** En dimension infinie, injectif n'entraîne pas surjectif : $V:h\mapsto\big(t\mapsto\int_0^th\big)$ est injective de $C^0([0,1])$ dans lui-même, mais son image est contenue dans $C^1$ et son inverse (la dérivation) n'est pas continu pour $\|\cdot\|_\infty$. Et l'application ouverte requiert la **surjectivité**.
**Quand il le serait.** En dimension finie à dimensions égales (option précédente), ou si l'on sait par ailleurs que l'image est **tout** $F$.

### [ ] Théorème du graphe fermé — [[ch05-graphe-ferme]]
**Pourquoi ce n'est pas l'outil ici.** Il sert à prouver la **continuité** d'une application linéaire définie partout ; ici $L$ est en général manifestement continue, et ce qui manque est la **bijectivité**. Pour la continuité de $L^{-1}$, le théorème d'isomorphisme de Banach (équivalent) est plus direct.
**Quand il le serait.** Pour montrer qu'un opérateur défini abstraitement (projecteur, solution d'un problème linéaire) est continu entre Banach, quand une majoration directe est hors de portée.

## Démarche

1. **Fixer les espaces et les normes** : source $E$ (conditions au bord incluses, sous-espace fermé), but $F$ ; vérifier qu'ils sont **complets** et que $L$ est **continue** ($\|Lh\|_F\le C\|h\|_E$).
2. Si dimension finie alors noyau nul (ou déterminant), avec $\dim E=\dim F$.
3. Si $L$ est une petite perturbation d'un isomorphisme connu alors Neumann ; donner la constante.
4. Sinon **résoudre** $Lh=k$ explicitement : existence pour tout $k\in F$ (et vérifier que la solution est dans $E$), unicité ; puis borne $\|h\|_E\le C\|k\|_F$ (ou théorème d'isomorphisme de Banach).
5. Si $L$ est surjective non injective alors chercher un supplémentaire fermé du noyau ; si $L$ est injective non surjective alors changer d'espace d'arrivée ou de stratégie.
6. Revenir au théorème visé (inversion locale [[rfx-diff-diffeomorphisme]], implicites [[rfx-diff-fonctions-implicites]]).

## Pièges

* Oublier la continuité de l'inverse (« bicontinu ») en dimension infinie, ou la complétude des espaces.
* Choisir des normes qui rendent $L$ discontinue ou les espaces incomplets.
* Oublier de vérifier que la solution construite de $Lh=k$ satisfait les **conditions au bord** de $E$.
* Croire qu'injectif ⇒ bijectif hors de la dimension finie.

## Mini-exemple

*Énoncé.* $E=\{u\in C^2([0,1]),\ u(0)=u(1)=0\}$ avec $\|u\|_E=\|u\|_\infty+\|u'\|_\infty+\|u''\|_\infty$, $F=C^0([0,1])$ avec $\|\cdot\|_\infty$. Montrer que $L_c(u)=u''-cu$ est un isomorphisme bicontinu de $E$ sur $F$ pour $|c|<\frac27$.

*Solution.* $E$ est fermé dans le Banach $C^2$, donc complet. Pour $c=0$ : $u''=g$ avec $u(0)=u(1)=0$ a l'unique solution $u(t)=\int_0^t(t-s)g(s)\,ds-t\int_0^1(1-s)g(s)\,ds$ (unicité : $u''=0$ et $u(0)=u(1)=0$ ⇒ $u=0$). Bornes : $|u|\le\frac12\|g\|+\frac12\|g\|$, $|u'|=\big|\int_0^tg-\int_0^1(1-s)g\big|\le\frac32\|g\|$, $|u''|=|g|$, donc $\|L_0^{-1}\|\le\frac72$. Ensuite $L_c=L_0-cJ$ où $J:E\to F$, $u\mapsto u$, vérifie $\|J\|\le1$ ; donc $L_c=L_0(\mathrm{Id}-cL_0^{-1}J)$ avec $\|cL_0^{-1}J\|_{\mathcal L(E)}\le\frac72|c|<1$ : par Neumann [[ch05-inversion-c-infini]], $L_c$ est un isomorphisme bicontinu. (C'est l'hypothèse clé pour résoudre $u''=\lambda f(u)$, $u(0)=u(1)=0$ par les fonctions implicites, [[ch06-probleme-aux-limites-non-lineaire]].)
