---
id: rfx-res-harmonique-conforme
type: reflexe
situation: Trouver ou étudier une fonction harmonique avec des conditions au bord (problème de Dirichlet), ou envoyer conformément un domaine sur un domaine modèle
chapters: [1, 2, 3, 4]
---
## Situation

On a un domaine plan $\Omega$ (demi-plan, disque, secteur, bande, couronne, extérieur d'un disque) et des données au bord, souvent **constantes par morceaux** (température $T_0$ sur une partie du bord, $T_1$ sur l'autre ; potentiel imposé ; « le bord est une ligne de courant »). On veut une fonction $u$ harmonique ($\Delta u=0$) sur $\Omega$ qui prend ces valeurs au bord, sa formule explicite, son unicité, ses isothermes, sa valeur en un point, ou une application biholomorphe explicite de $\Omega$ sur $H=\{\Im z>0\}$, sur $D=D(0,1)$ ou sur une couronne centrée.

Mots-clés : *température stationnaire*, *potentiel*, *problème de Dirichlet*, *$u=\Re F$ / $\Im F$*, *transformation conforme*, *Cayley*, *Joukovski*, *homographie*, *isothermes*, *propriété de la moyenne*.

## Options

### [x] Partie réelle ou imaginaire d'une fonction holomorphe — [[ch04-harmonique-reelle-partie-reelle]]
**Quand.** On cherche $u$ sur un domaine modèle : les briques harmoniques sont $\Re z$, $\Im z$, $\ln|z|=\Re\,\mathrm{Log}\,z$, $\arg z=\Im\,\mathrm{Log}\,z$, $\Re z^{\alpha}$. Sur $H$, $\frac1\pi\arg(z-x_0)\in\,]0,1[$ est harmonique, tend vers $0$ sur $]x_0,+\infty[$ et vers $1$ sur $]-\infty,x_0[$ : c'est l'outil des données constantes par morceaux. Réciproquement, sur $\Omega$ **simplement connexe**, toute $u$ harmonique réelle est $\Re F$ avec $F\in\Hol(\Omega)$.
**Justification.** Les parties réelle et imaginaire d'une fonction holomorphe sont harmoniques ([[ch04-holomorphe-implique-harmonique]]) ; la réciproque est le Corollaire IV.2.4 (poly, Corollaire IV.2.4, p. 77).
**Pièges.** Sur un ouvert **non** simplement connexe, $u$ harmonique n'est pas toujours une partie réelle : $\ln|z|$ sur $\C^\times$ (sinon $\mathrm{Log}$ existerait sur $\C^\times$). Préciser la détermination de $\arg$ utilisée (sur $H$ : argument principal, à valeurs dans $]0,\pi[$).

### [x] Transport par une application conforme — [[ch04-reduction-demi-plan]]
**Quand.** Le domaine n'est pas un modèle, mais on dispose d'un biholomorphisme explicite $\varphi:\Omega\to H$ (ou $D$, ou une couronne centrée) qui envoie les morceaux du bord sur des morceaux du bord. On résout sur le modèle ($u_0$) et on pose $u=u_0\circ\varphi$.
**Justification.** $\Delta(u_0\circ\varphi)=(\Delta u_0)(\varphi)\,|\varphi'|^2=0$ ([[ch04-composition-harmonique-holomorphe]]) ; les valeurs au bord sont transportées si $\varphi$ se prolonge continûment au bord.
**Pièges.** Calculer **où va chaque arc** du bord (images de deux ou trois points, et le sens de parcours), et vérifier l'image de l'**intérieur** (un point test suffit pour une homographie). Les conditions de Dirichlet se transportent telles quelles ; ce sont les **rayons** (le module conforme d'une couronne) qui changent, pas les températures ([[ch04-chaleur-couronne]]).

### [x] Catalogue d'applications conformes explicites — [[ch01-cayley-disque-demi-plan]]
**Quand.** Il faut fabriquer $\varphi$. À connaître : Cayley $z\mapsto i\frac{1-z}{1+z}$ de $D$ sur $H$ (inverse $w\mapsto\frac{i-w}{i+w}$) ; automorphismes $z\mapsto\lambda\frac{z-a}{1-\bar az}$ de $D$ ([[ch01-automorphismes-disque]]) ; $z\mapsto z^{\pi/\theta_0}$ du secteur $\{0<\arg z<\theta_0\}$ sur $H$ ; $\exp$ de la bande $\{0<\Im z<\pi\}$ sur $H$ ; $\mathrm{Log}$ en sens inverse ; Joukovski $\frac12(z+\frac1z)$ de $\{|z|>1\}$ sur $\C\setminus[-1,1]$ ([[ch04-joukovski]]) ; homographies $\frac{az+b}{cz+d}$, qui envoient cercles et droites sur cercles et droites.
**Justification.** Chacune est holomorphe et bijective avec réciproque holomorphe explicite ; écrire la réciproque prouve la bijectivité.
**Pièges.** $z^{\alpha}$ demande une détermination ($\arg$ dans $]0,\theta_0[$ convient) ; Joukovski n'est pas injective sur $\C^\times$ ($J(z)=J(1/z)$) : la restreindre à $\{|z|>1\}$ ou à $D\setminus\{0\}$.

### [x] Principe du maximum, moyenne et unicité — [[ch04-maximum-unicite-bord]]
**Quand.** On demande l'**unicité** de la solution, un encadrement ($\min$ des données $\le u\le\max$ des données), ou la valeur au centre d'un disque (moyenne des valeurs au bord, [[ch04-harmonique-moyenne-maximum]]).
**Justification.** Si $u_1,u_2$ sont harmoniques sur $\Omega$ connexe **borné**, continues sur $\bar\Omega$ et égales au bord, $u_1-u_2$ atteint max et min sur le compact $\bar\Omega$, donc au bord, donc est nulle (poly, Remarque IV.2.6, p. 77).
**Pièges.** Sur un domaine **non borné**, l'unicité est fausse sans condition à l'infini : $u(x,y)=y$ est harmonique sur $H$ et nulle sur $\R$ ; exiger $u$ **bornée**. Avec des données **discontinues** (constantes par morceaux), $u$ n'est pas continue sur $\bar\Omega$ et la Remarque IV.2.6 ne s'applique pas telle quelle : dire honnêtement ce qui est démontré (existence, valeurs limites) et ce qui ne l'est pas.

### [ ] Théorème de représentation conforme de Riemann — [[ch03-riemann-representation-conforme]]
**Pourquoi ce n'est pas l'outil ici.** Il affirme l'**existence** d'un biholomorphisme sur $D$ pour tout ouvert simplement connexe distinct de $\C$, sans formule et sans information sur le comportement au bord : impossible d'y lire la solution d'un problème de Dirichlet concret.
**Quand il le serait.** Pour un énoncé **abstrait** (« ramener au cas du disque », « deux tels ouverts sont conformément équivalents ») ou pour justifier qu'une méthode de transport existe en principe.

### [ ] Théorème de Liouville — [[ch01-liouville]]
**Pourquoi ce n'est pas l'outil ici.** Il porte sur les fonctions holomorphes **sur $\C$ tout entier** ; « $u$ harmonique bornée sur $H$, nulle au bord, donc nulle par Liouville » n'est pas une preuve ($H\ne\C$).
**Quand il le serait.** Pour $u$ harmonique sur $\C$ et majorée : $u=\Re F$ avec $F$ entière, $e^{F}$ est bornée, donc constante, donc $u$ constante.

## Démarche

1. **Identifier le domaine et les données.** Dessiner le bord, repérer les points où la donnée saute.
2. **Domaine modèle ?**
   * $H$ avec sauts en $x_1<\dots<x_k$ et valeur $c_j$ sur $]x_j,x_{j+1}[$ ($x_0=-\infty$, $x_{k+1}=+\infty$) : $u(z)=c_k+\sum_{j=1}^{k}(c_{j-1}-c_j)\frac{\arg(z-x_j)}{\pi}$.
   * Couronne centrée, données constantes sur chaque cercle : $\alpha\ln|z|+\beta$ ([[ch04-harmoniques-radiales]]).
   * Bande, secteur : se ramener à $H$ par $\exp$ ou $z^{\pi/\theta_0}$.
3. **Sinon, transporter** : disque → $H$ par Cayley ; extérieur d'un disque → $D$ par $1/z$ ; couronne excentrée → couronne centrée par une homographie ; profil d'aile → disque par Joukovski. Suivre les arcs du bord.
4. **Composer** $u=u_0\circ\varphi$ ; vérifier : harmonique (composition), valeurs limites au bord, bornitude.
5. **Unicité** par le principe du maximum si $\Omega$ est borné et les données continues ; sinon, préciser la classe (bornée) et ce qui est admis.
6. **Contrôles** : la valeur au centre d'un disque est la moyenne des données ; les symétries du problème se retrouvent dans $u$ ; les isothermes de $\frac1\pi\arg(z-x_0)$ sont des demi-droites issues de $x_0$, leurs images par $\varphi^{-1}$ sont des arcs de cercles pour une homographie.

## Pièges

* Oublier de vérifier que $\varphi$ envoie **l'intérieur** sur l'intérieur (on peut obtenir $\{\Im w<0\}$ au lieu de $H$).
* Transporter les rayons d'une couronne excentrée au lieu de recalculer ceux de la couronne image.
* Utiliser une détermination de $\arg$ discontinue dans le domaine.
* Affirmer l'unicité sur $H$ sans condition de bornitude.
* Écrire $u=\Re F$ sur une couronne sans vérifier qu'il n'y a pas de terme en $\ln|z|$.

## Mini-exemple

*Énoncé.* Trouver $u$ harmonique sur $D=D(0,1)$ tendant vers $1$ sur l'arc supérieur $\{e^{i\theta},\,0<\theta<\pi\}$ et vers $0$ sur l'arc inférieur.

*Solution.* Cayley $\varphi(z)=i\frac{1-z}{1+z}$ envoie $D$ sur $H$, et pour $z=e^{i\theta}$, $\frac{1-e^{i\theta}}{1+e^{i\theta}}=-i\tan\frac\theta2$, donc $\varphi(e^{i\theta})=\tan\frac\theta2$ : l'arc supérieur va sur $]0,+\infty[$, l'arc inférieur sur $]-\infty,0[$. Sur $H$, $u_0(w)=1-\frac1\pi\arg w$ (argument dans $]0,\pi[$) est harmonique, tend vers $1$ sur $\R_+^*$ et vers $0$ sur $\R_-^*$. Donc $u=u_0\circ\varphi$ convient. Explicitement, $\zeta=\frac{1-z}{1+z}=\frac{1-|z|^2-2iy}{|1+z|^2}$ a une partie réelle $>0$, $\arg\varphi(z)=\frac\pi2+\arg\zeta$ et $\arg\zeta=-\arctan\frac{2y}{1-x^2-y^2}$, d'où
$$u(x,y)=\frac12+\frac1\pi\arctan\frac{2y}{1-x^2-y^2}.$$
Contrôle : $u(0)=\frac12$, moyenne des données sur le cercle, comme l'exige la propriété de la moyenne.
