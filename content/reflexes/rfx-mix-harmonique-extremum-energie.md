---
id: rfx-mix-harmonique-extremum-energie
type: reflexe
situation: Utiliser l'harmonicité et le principe du maximum dans un problème d'extremum, d'unicité ou de minimisation d'énergie (Dirichlet, Euler–Lagrange)
chapters: [4, 1, 8, 9]
---
## Situation

On a une fonction réelle $u$ sur un ouvert $\Omega\subset\R^2$ (disque, couronne, carré, demi-plan) qui est harmonique ($\Delta u=0$), ou qui est donnée comme $\Re f$, $\Im f$, $\ln|f|$, ou comme solution d'une EDP avec données au bord, ou comme minimiseur d'une **énergie** $E(v)=\iint_\Omega|\nabla v|^2$. On veut : le maximum ou le minimum de $u$ sur $\bar\Omega$, l'unicité de la solution d'un problème aux limites, une comparaison $u\le v$, ou montrer que la solution harmonique minimise l'énergie (et la calculer, souvent dans un cas radial).

Mots-clés : *extremum sur le disque fermé*, *température stationnaire*, *problème de Dirichlet*, *unicité*, *énergie*, *fonctionnelle*, *minimiser*, *solution radiale*.

## Options

### [x] Principe du maximum et propriété de la moyenne — [[ch04-harmonique-moyenne-maximum]]
**Quand.** $u$ harmonique sur $\Omega$ **connexe**, continue sur $\bar\Omega$ **compact** : ses extrema sur $\bar\Omega$ (qui existent par compacité) sont atteints sur $\partial\Omega$, et seulement là si $u$ n'est pas constante. Unicité du problème de Dirichlet et comparaison : appliquer cela à $u_1-u_2$ ([[ch04-maximum-unicite-bord]]). Valeur au centre d'un disque = moyenne sur le cercle.
**Justification.** Corollaire IV.2.5 et Remarque IV.2.6 (poly, p. 77). Pour $|f|$ avec $f$ holomorphe : [[ch01-principe-maximum]], ou $e^{u}=|e^{f}|$ si $u=\Re f$.
**Pièges.** Domaine **borné** indispensable ($u=y$ sur le demi-plan $\{y>0\}$ est nulle au bord sans être nulle). Rédiger « $\bar\Omega$ compact et $u$ continue, donc le max est atteint ; il ne peut l'être à l'intérieur sans que $u$ soit constante ».

### [x] Extremum sur le bord : paramétrage ou multiplicateurs de Lagrange — [[ch09-multiplicateurs-lagrange]]
**Quand.** Après réduction au bord : $\partial\Omega$ est une courbe $\{F=0\}$ avec $\nabla F\ne0$ (cercle, ellipse). Aux extrema de $u|_{\partial\Omega}$, $\nabla u=w\,\nabla F$ (Proposition IX.7.35, poly, p. 168). Sur un cercle, on préfère souvent paramétrer par $\theta$ et étudier une fonction d'une variable.
**Justification.** Le bord est une sous-variété de dimension $1$ ([[ch09-sous-variete-equation-valeur-reguliere]]) ; la restriction de $u$ y atteint ses extrema en des points critiques.
**Pièges.** Comparer les valeurs en **tous** les points critiques trouvés ; un bord avec des coins (carré) n'est pas une sous-variété aux coins : les traiter à part.

### [x] Écrire $u$ comme partie réelle d'une holomorphe — [[ch04-harmonique-reelle-partie-reelle]]
**Quand.** Il faut une formule pour $u$, ou passer à un énoncé holomorphe : sur $\Omega$ simplement connexe, $u=\Re f$ ; $u\circ h$ reste harmonique pour $h$ holomorphe ([[ch04-composition-harmonique-holomorphe]]), ce qui transporte le problème sur un domaine modèle ([[rfx-res-harmonique-conforme]]).
**Justification.** Corollaire IV.2.4 (poly, p. 77) ; les briques $\Re z^n$, $\Im z^n$, $\ln|z|$, $\arg z$.
**Pièges.** Sur une couronne, $u$ peut contenir un terme $\alpha\ln|z|$ qui n'est pas une partie réelle.

### [x] Énergie de Dirichlet et équation d'Euler–Lagrange — [[ch08-euler-lagrange]]
**Quand.** On minimise $E(v)=\iint_\Omega|\nabla v|^2$ parmi les $v$ de valeurs au bord fixées. **Cas radial** sur une couronne $\{r_1\le|z|\le r_2\}$ : pour $v(z)=\varphi(|z|)$, $E(v)=2\pi\int_{r_1}^{r_2}r\,\varphi'(r)^2\,dr$, fonctionnelle de courbe de Lagrangien $L(r,q,p)=2\pi rp^2$ ; (E.L) donne $\frac{d}{dr}(4\pi r\varphi')=0$, donc $\varphi=a\ln r+b$, les harmoniques radiales de [[ch04-harmoniques-radiales]].
**Justification.** Cas général : pour $h$ nulle sur $\partial\Omega$, $E(u+h)=E(u)+2\iint\nabla u\cdot\nabla h+E(h)$, et la formule de Green ([[ch02-lien-green-riemann]]) donne $\iint\nabla u\cdot\nabla h=-\iint h\,\Delta u$. Si $u$ est harmonique, $E(u+h)=E(u)+E(h)\ge E(u)$ : **la solution harmonique minimise l'énergie** ; réciproquement un minimiseur $C^2$ vérifie $\iint h\,\Delta u=0$ pour tout $h$, d'où $\Delta u=0$ (analogue de [[ch08-du-bois-reymond]]).
**Pièges.** Le chapitre VIII du poly traite des **courbes** (une variable) : en dimension $2$, refaire le calcul avec Green et le dire. Euler–Lagrange n'est qu'une condition **nécessaire** ; la minimalité vient de l'identité de convexité ci-dessus. Sur $[r_1,r_2]$ au lieu de $[0,1]$ : même preuve.

### [ ] Conditions d'ordre 2 en un point critique intérieur — [[ch09-hessienne-extrema-ordre-deux]]
**Pourquoi ce n'est pas l'outil ici.** Pour $u$ harmonique, la trace de la hessienne vaut $\Delta u=0$ : en un point critique intérieur, la hessienne est nulle ou a deux valeurs propres de signes opposés (point col). Chercher les extrema parmi les points critiques intérieurs est du temps perdu : le principe du maximum les exclut.
**Quand il le serait.** Pour une fonction non harmonique ($u+|z|^2$, $|f|^2$), ou pour étudier la restriction de $u$ au bord au second ordre.

### [ ] Théorème de Liouville — [[ch01-liouville]]
**Pourquoi ce n'est pas l'outil ici.** Le domaine est borné ou différent de $\C$ ; Liouville ne dit rien d'une fonction sur un disque ou un demi-plan.
**Quand il le serait.** Pour $u$ harmonique sur $\R^2$ entier et majorée : $u=\Re f$, $f$ entière, $|e^{f}|=e^{u}$ bornée, donc $u$ constante.

## Démarche

1. **Reconnaître l'harmonicité** : calcul de $\Delta u$, ou $u=\Re f$, $\Im f$, $\ln|f|$ ($f\ne0$), ou $u\circ h$. Si l'EDP a un second membre constant, $\Delta u=c$, se ramener à $u-\frac c4|z|^2$, harmonique (car $\Delta|z|^2=4$).
2. **Extremum sur $\bar\Omega$ compact** : il existe ; par le principe du maximum, il est sur $\partial\Omega$ ; se ramener à une fonction d'une variable sur le bord (paramétrage, Lagrange). Ne pas étudier la hessienne à l'intérieur.
3. **Unicité ou comparaison** : la différence est harmonique, nulle (ou de signe connu) au bord ⇒ principe du maximum. Domaine non borné : exiger une borne et le dire.
4. **Énergie** : identité $E(u+h)=E(u)+E(h)$ via Green si $u$ est harmonique ; cas radial : Lagrangien d'une variable et Euler–Lagrange, puis constantes fixées par les données au bord.
5. **Contrôles** : valeur au centre = moyenne ; symétries ; l'encadrement $\min_{\partial\Omega}\le u\le\max_{\partial\Omega}$.

## Pièges

* Chercher le maximum d'une fonction harmonique parmi les points critiques intérieurs.
* Oublier la continuité sur $\bar\Omega$ ou la bornitude de $\Omega$ dans l'unicité.
* Appliquer tel quel le chapitre VIII (courbes) à une fonctionnelle sur des fonctions de deux variables, sans refaire l'intégration par parties.
* Croire qu'une solution d'Euler–Lagrange est automatiquement un minimum.
* Oublier un coin du bord dans la recherche d'extremum.

## Mini-exemple

*Énoncé.* Trouver le maximum et le minimum de $u(x,y)=x^2-y^2+x$ sur le disque fermé $\bar D(0,1)$.

*Solution.* $u=\Re(z^2+z)$ est harmonique, continue sur le compact $\bar D(0,1)$ : ses extrema sont atteints sur le cercle unité (son unique point critique $(-\frac12,0)$, où $\nabla u=(2x+1,-2y)$ s'annule, est un col de hessienne $\mathrm{diag}(2,-2)$). Sur le cercle, $u(\cos\theta,\sin\theta)=\cos2\theta+\cos\theta=2c^2+c-1$ avec $c=\cos\theta\in[-1,1]$. Cette fonction de $c$ est maximale en $c=1$ (valeur $2$) et minimale en $c=-\frac14$ (valeur $\frac18-\frac14-1=-\frac98$). Donc $\max u=2$, atteint en $(1,0)$, et $\min u=-\frac98$, atteint en $\big(-\frac14,\pm\frac{\sqrt{15}}4\big)$. Contrôle par Lagrange en $(1,0)$ : $\nabla u=(3,0)=\frac32\nabla(x^2+y^2)$. Contrôle par la moyenne : $u(0)=0=\frac1{2\pi}\int_0^{2\pi}(\cos2\theta+\cos\theta)\,d\theta$.
