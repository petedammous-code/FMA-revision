---
id: rfx-holo-montrer-holomorphe
type: reflexe
situation: Montrer qu'une fonction est holomorphe (définie par une formule, une intégrale, une série ou une limite)
chapters: [1, 3]
---
## Situation

On a une fonction $f$ définie sur un ouvert $\Omega$ par une **formule explicite** ($f=P+iQ$ avec $P,Q$ réelles), une **intégrale à paramètre** ($f(z)=\int_XF(z,x)\,dx$, $\int_\gamma F(z,u)\,du$, transformée de Fourier ou de Laplace), une **série** ($\sum f_n$, série entière, série de Dirichlet $\sum a_nn^{-z}$), une **limite** $\lim f_n$, un **produit infini**, ou seulement par ses intégrales sur des triangles/cercles. On veut montrer « $f\in\Hol(\Omega)$ », et souvent calculer $f'$ (dérivation sous $\int$ ou $\sum$). C'est presque toujours la **question 1** d'un exercice de contrôle : elle rapporte peu si on la bâcle, mais elle conditionne tout le reste.

## Options

### [x] Conditions de Cauchy réelles sur une fonction $C^1$ — [[ch01-holomorphe-ssi-c1-et-dzbar-nul]]
**Quand.** $f$ est donnée par ses parties réelle et imaginaire $P(x,y)$, $Q(x,y)$ explicites, ou par une expression en $z,\bar z$ (polynôme en $z$ et $\bar z$, $|z|^2$, $\Re z$...). On vérifie que $f$ est $C^1$ au sens réel et que $\partial f/\partial\bar z=0$, c'est-à-dire $P_x=Q_y$ et $P_y=-Q_x$ ([[ch01-cauchy-riemann]]).
**Justification.** Holomorphe $\Leftrightarrow$ $C^1$ et $df_z$ $\C$-linéaire ([[ch01-c-derivable-ssi-df-c-lineaire]]) ; les formules [[ch01-formulaire-dz-dzbar]] permettent de calculer $\partial/\partial\bar z$ sans repasser en coordonnées.
**Pièges.** Cauchy réelles en un **seul point** ne donne que la $\C$-dérivabilité en ce point ($|z|^2$ en $0$, [[ch01-exemple-zbar-rez-module]]). La régularité $C^1$ doit être vérifiée (ou remplacée par Goursat [[ch01-goursat]] : $\C$-dérivable partout $\Rightarrow$ holomorphe). Pour une fonction « sans $\bar z$ » obtenue par sommes, produits, quotients à dénominateur non nul, composées : citer directement [[ch01-stabilite-operations]], pas Cauchy réelles.

### [x] Holomorphie sous le signe intégrale — [[ch01-holomorphie-sous-integrale]]
**Quand.** $f(z)=\int_XF(z,x)\,dx$ avec $X\subset\R^N$ mesurable (souvent $\R$, $]0,+\infty[$, $[0,1]$). Trois vérifications **à écrire** : (i) $F$ mesurable sur $\Omega\times X$ (continue suffit) et $z\mapsto F(z,x)$ holomorphe pour chaque $x$ ; (ii) **domination locale** : pour tout $z_0$, un disque $D(z_0,r_0)\subset\Omega$ et $g_{z_0}\in L^1(X)$ avec $|F(z,x)|\le g_{z_0}(x)$ pour $z\in D(z_0,r_0)$ — le majorant ne doit **pas dépendre de $z$**. Conclusion : $f\in\Hol(\Omega)$ et $f^{(k)}(z)=\int_X\partial_z^kF(z,x)\,dx$. Si $X$ est un chemin compact et $F$ continue, pas de domination à écrire : [[ch01-integrale-chemin-parametre]].
**Justification.** Formule de Cauchy pour $F(\cdot,x)$ sur un petit cercle, puis Fubini : $f$ est localement une intégrale de Cauchy, donc une série entière.
**Pièges.** Domination **locale** seulement : sur une bande $|\Re z|<M$ ou un disque, jamais sur tout $\Omega$ (par exemple $e^{-t}t^{z-1}$ n'a pas de majorant intégrable uniforme en $\Re z>0$, mais en a un sur $a\le\Re z\le b$). Quand la domination n'est valable que pour $\Re z>a$, on l'obtient pour tout $a>0$ puis on conclut « pour tout $a$ » : écrire cette phrase. Le correcteur attend la **constante explicite** du majorant.

### [x] Théorème de Weierstraß (limite ou série localement uniforme) — [[ch03-weierstrass]]
**Quand.** $f=\lim f_n$ avec $f_n\in\Hol(\Omega)$ et convergence **localement uniforme** (= uniforme sur tout compact, [[ch03-convergence-uniforme-compacts]]) ; ou $f=\sum f_n$ avec convergence **localement normale** : sur tout compact $K$, $\sum\sup_K|f_n|<\infty$ ([[ch03-weierstrass-series]]). Conclusion : $f\in\Hol(\Omega)$ et $f^{(k)}=\lim f_n^{(k)}$, resp. $f'=\sum f_n'$ (dérivation terme à terme).
**Justification.** Formule de Cauchy sur un disque : la limite uniforme de $\frac1{2i\pi}\int\frac{f_n(\omega)}{\omega-z}d\omega$ est encore une intégrale de Cauchy. Ou Morera : les intégrales sur les triangles passent à la limite.
**Pièges.** La convergence **simple** ne suffit pas (il existe des suites de polynômes convergeant simplement vers des fonctions non continues). Pour une série, ne jamais invoquer la convergence absolue ponctuelle : il faut un majorant **indépendant de $z\in K$**. Astuce standard : pour $K$ compact de $D(0,1)$, prendre $r<1$ avec $K\subset\bar D(0,r)$ et majorer par des termes en $r^n$.

### [x] Théorème de Morera — [[ch01-morera]]
**Quand.** $f$ est seulement **continue** et on sait que $\int_{\partial T}f=0$ pour tout triangle plein $T\subset\Omega$ : typiquement $f$ holomorphe de part et d'autre d'un segment ou d'une droite et continue à travers ([[ch02-schwarz-reflexion]], question 1), ou $f$ limite de fonctions pour lesquelles ces intégrales sont nulles.
**Justification.** Les intégrales nulles sur les triangles donnent une primitive locale $F(z)=\int_{[z_0,z]}f$, holomorphe de dérivée $f$ ; $f=F'$ est holomorphe car $F$ est $C^\infty$ ([[ch01-holomorphe-analytique]]).
**Pièges.** Il faut la nullité pour **tous** les triangles contenus dans $\Omega$, y compris ceux qui traversent la ligne de recollement : c'est là qu'est le travail (découper le triangle, laisser une marge $\eps$, utiliser la continuité uniforme sur le compact pour faire tendre $\eps\to0$).

### [ ] Principe du prolongement analytique — [[ch01-prolongement-analytique]]
**Pourquoi ce n'est pas l'outil ici.** Il affirme l'**unicité** d'une fonction holomorphe coïncidant avec une fonction donnée sur un ensemble à point d'accumulation ; il ne fabrique aucune fonction holomorphe et ne prouve l'holomorphie de rien.
**Quand il le serait.** Une fois $f$ holomorphe établie par un autre outil, pour montrer qu'une identité vraie sur $\R$ (équation fonctionnelle, formule) reste vraie sur $\Omega$.

### [ ] Théorème de Montel — [[ch03-montel]]
**Pourquoi ce n'est pas l'outil ici.** Montel donne l'existence d'une **sous-suite** convergente d'une famille bornée ; il ne dit pas que **la** limite simple d'une suite donnée est holomorphe, ni même que la suite converge. Si $f_n\to f$ simplement et $(f_n)$ localement uniformément bornée, Montel plus l'unicité de la limite simple montrent que $f_n\to f$ localement uniformément, puis Weierstraß conclut : c'est un détour qu'il faut savoir rédiger, pas un outil direct.
**Quand il le serait.** Quand $f$ est donnée comme limite **simple** d'une suite localement uniformément bornée (détour ci-dessus, qu'il faut alors rédiger) ; et pour les problèmes d'extraction et d'existence d'extrémaux (voir [[rfx-holo-suites-familles]]).

## Démarche

1. **Comment $f$ est-elle donnée ?**
   * *Formule algébrique en $z$* (polynômes, fractions, $\exp$, $\log$ sur un ouvert où il est défini, composées) : [[ch01-stabilite-operations]] et les exemples du poly ([[ch01-exp-trigo-hyperboliques]]) ; vérifier que les dénominateurs ne s'annulent pas et que les logarithmes/puissances sont définis sur $\Omega$ ([[ch02-logarithme-determination-principale-def]]).
   * *Formule en $(x,y)$ ou avec $\bar z$* : calculer $\partial f/\partial\bar z$ ; si non nul quelque part, $f$ n'est pas holomorphe là.
   * *Intégrale à paramètre* : aller en 2.
   * *Série ou limite* : aller en 3.
   * *Fonction recollée, continue, holomorphe par morceaux* : Morera (ou réflexion de Schwarz).
   * *Fonction définie hors d'un point ou d'un ensemble discret et bornée près de ces points* : théorème de Riemann [[ch02-singularite-effacable-riemann]] (voir [[rfx-holo-prolonger]]).
2. **Intégrale.** Fixer $z_0$, choisir un disque ou une bande **compacte en la variable utile** autour de $z_0$, majorer $|F(z,x)|$ par $g(x)$ indépendant de $z$ et vérifier $\int g<\infty$ (comparaison, intégrabilité en $0$ et en $\infty$ séparément). Si le paramètre est sur un chemin compact et $F$ continue : Corollaire I.9.4 sans domination. Puis conclure et écrire la formule de $f'$.
3. **Série/limite.** Fixer un compact $K$ (ou un disque fermé $\bar D(z_0,r)\subset\Omega$), trouver $M_n$ avec $\sup_K|f_n|\le M_n$ et $\sum M_n<\infty$ (ou $\sup_K|f_n-f|\to0$). Pour une série entière, c'est automatique sur $D(0,R)$ ([[ch01-serie-entiere-holomorphe]]) : donner $R$ ([[rfx-holo-rayon-convergence]]). Pour un produit infini, le critère est $\sum\sup_K|f_n|<\infty$ avec $g_n=1+f_n$ ([[ch03-produits-infinis]]).
4. **Si on ne sait rien faire de tout cela** : chercher une représentation alternative de $f$ (équation fonctionnelle, formule de Cauchy, primitive sur un ouvert simplement connexe [[ch02-primitive-simplement-connexe]]).

## Pièges

* Majorant **dépendant de $z$** dans la domination : « $|F(z,t)|\le e^{-t}t^{\Re z-1}$ » n'est pas une domination ; il faut $\le e^{-t}(t^{a-1}+t^{b-1})$ pour $a\le\Re z\le b$.
* Oublier la mesurabilité/continuité en $(z,x)$ et l'holomorphie en $z$ **pour $x$ fixé** (les deux hypothèses (i)).
* Vouloir une convergence normale sur **tout $\Omega$** : elle est en général fausse (série géométrique sur $D(0,1)$) ; la convergence localement normale suffit et c'est elle qu'il faut rédiger.
* Dériver sous le signe somme ou intégrale sans avoir d'abord établi l'holomorphie (ou une domination des dérivées) : avec Weierstraß et I.9.1, la dérivation est **gratuite** une fois l'holomorphie acquise — le dire.
* Cauchy réelles sur les seules **dérivées partielles**, sans différentiabilité : insuffisant ($f(z)=e^{-1/z^4}$, $f(0)=0$, vérifie Cauchy réelles en tout point mais n'est pas continue en $0$ : $f(re^{i\pi/4})=e^{1/r^4}$). Si l'on sait $f$ $\C$-dérivable en tout point (sans $C^1$), c'est Goursat [[ch01-goursat]] qu'il faut citer.
* Confondre « holomorphe sur $\Omega$ » et « holomorphe au voisinage de chaque point de $\Omega$ » : c'est la même chose, et c'est pourquoi toutes les vérifications sont **locales**.

## Mini-exemple

*Énoncé.* Soit $\Omega=\C\setminus\,]-\infty,0]$ et $f(z)=\displaystyle\int_0^{+\infty}\frac{e^{-t}}{t+z}\,dt$. Montrer que $f\in\Hol(\Omega)$ et calculer $f'$.

*Solution.* Posons $F(z,t)=e^{-t}/(t+z)$ sur $\Omega\times\,]0,+\infty[$. (i) $F$ est continue donc mesurable, et pour $t>0$ fixé, $z\mapsto F(z,t)$ est holomorphe sur $\Omega$ car $t+z\ne0$ ($-t\notin\Omega$ mais $z\in\Omega$, donc $z\ne-t$). (ii) Soit $z_0\in\Omega$ et $d=\dist(z_0,\,]-\infty,0])>0$. Pour $z\in D(z_0,d/2)$ et $t>0$ : $|t+z|\ge|t+z_0|-|z-z_0|\ge d-d/2=d/2$, d'où
$$|F(z,t)|\le\frac{2}{d}\,e^{-t}=:g_{z_0}(t),\qquad\int_0^{+\infty}g_{z_0}(t)\,dt=\frac2d<+\infty.$$
Le théorème d'holomorphie sous le signe intégrale [[ch01-holomorphie-sous-integrale]] s'applique : $f\in\Hol(\Omega)$ et $f'(z)=\int_0^{+\infty}\partial_zF(z,t)\,dt=-\int_0^{+\infty}\frac{e^{-t}}{(t+z)^2}\,dt$.
