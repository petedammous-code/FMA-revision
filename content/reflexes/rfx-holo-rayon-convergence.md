---
id: rfx-holo-rayon-convergence
type: reflexe
situation: Déterminer le rayon de convergence d'une série entière (ou la nature d'une série de fonctions) à partir des propriétés de la fonction somme
chapters: [1, 2, 3]
---
## Situation

On a une série entière $\sum a_n(z-z_0)^n$ dont on **ne connaît pas** les coefficients explicitement (ils viennent d'une récurrence, d'une équation différentielle, d'une fonction $f$ donnée par une formule : $1/\cos z$, $z/(e^z-1)$, $\tan z$, une fraction rationnelle, $\Gamma$), ou bien on connaît la fonction $f$ et ses **singularités**, et on demande le rayon de convergence $R$ de son développement de Taylor en $z_0$, ou l'allure des coefficients ($\limsup|a_n|^{1/n}$, « $|a_n|\le C\rho^{-n}$ »), ou la **nature** (convergence localement normale, holomorphie de la somme) d'une série de fonctions $\sum f_n$. Mots-clés : *rayon de convergence*, *développable en série entière sur*, *la série converge pour $|z|<\dots$ et diverge pour*, *estimer les coefficients*, *$\limsup$*.

## Options

### [x] Estimées de Cauchy : $R\ge$ distance au bord du domaine d'holomorphie — [[ch01-estimees-cauchy]]
**Quand.** $f$ est holomorphe sur un ouvert $\Omega\ni z_0$ : alors sa série de Taylor en $z_0$ converge (vers $f$) sur $D(z_0,\rho(z_0))$ avec $\rho(z_0)=\sup\{r:\bar D(z_0,r)\subset\Omega\}=\dist(z_0,\C\setminus\Omega)$. Donc $R\ge\dist(z_0,\C\setminus\Omega)$ ; en particulier $R=+\infty$ pour une fonction entière. Donne aussi la majoration $|a_n|\le\sup_{C(z_0,r)}|f|\,r^{-n}$ pour tout $r<\rho(z_0)$.
**Justification.** Formule de Cauchy sur $C(z_0,r)$ et développement de $1/(\omega-z)$ en série géométrique, uniformément en $\omega$ sur le cercle.
**Pièges.** C'est une **minoration** : $R$ peut dépasser $\dist(z_0,\C\setminus\Omega)$ si $f$ se prolonge au-delà de $\Omega$ (penser à $\Omega$ trop petit par choix). Pour l'**égalité**, il faut une singularité non effaçable sur le cercle (option 2).

### [x] Singularité la plus proche : $R=$ distance au premier pôle — [[ch02-laurent-developpement]]
**Quand.** $f$ est méromorphe sur un ouvert contenant $\bar D(z_0,d)$, holomorphe sur $D(z_0,d)$, avec un **pôle** $z_1$ sur le cercle $|z-z_0|=d$ (ou plus généralement un point où $f$ n'est pas bornée). Alors $R=d$ exactement. Forme typique : $f=g/h$ avec $g,h$ entières, $R=$ module du plus petit zéro de $h$ non compensé par $g$.
**Justification.** $R\ge d$ par l'option 1 ; si $R>d$, la somme $S$ de la série serait holomorphe sur $D(z_0,R)\ni z_1$, égale à $f$ sur $D(z_0,d)$ (unicité du développement), donc $f$ serait **bornée** près de $z_1$ (continuité de $S$ en $z_1$) : impossible pour un pôle ([[ch02-classification-singularites]]).
**Pièges.** Vérifier que la singularité **n'est pas effaçable** : $z/(e^z-1)$ ou $\sin z/z$ ont une singularité apparente en $0$ qui ne compte pas ([[ch02-singularite-effacable-riemann]]). Les zéros de $h$ compensés par des zéros de $g$ de multiplicité $\ge$ sont à exclure. Si la singularité la plus proche n'est pas un pôle mais une coupure ou un point de branchement (logarithme, racine), le même argument marche dès que $f$ n'est **pas prolongeable** holomorphiquement au voisinage de ce point.

### [x] Caractérisation du rayon et Cauchy–Hadamard — [[ch01-def-rayon-convergence]]
**Quand.** On a une **information sur les coefficients** : encadrement $c\rho^{-n}\le|a_n|\le C\rho^{-n}$, récurrence linéaire, $a_n$ donné par une intégrale ou une somme ; ou on veut traduire « $R\ge\rho$ » en « $(|a_n|\rho'^n)$ bornée pour tout $\rho'<\rho$ » et réciproquement. Formule : $R^{-1}=\limsup|a_n|^{1/n}$ ; critère de d'Alembert quand $|a_{n+1}/a_n|$ converge.
**Justification.** $R=\sup\{\rho:(|a_n|\rho^n)\text{ bornée}\}$ ; comparaison avec la série géométrique.
**Pièges.** D'Alembert exige que le quotient **converge** (et des coefficients non nuls) ; pour une série lacunaire ($\sum z^{2^n}$, $\sum z^{n!}$), seul Cauchy–Hadamard marche. Une borne $|a_n|\le C\rho^{-n}$ donne $R\ge\rho$ seulement : pour $R=\rho$, il faut aussi une minoration le long d'une sous-suite, ou un argument de singularité (option 2). Le **comportement sur le cercle** (convergence en certains points, divergence en d'autres) ne modifie pas $R$.

### [x] Séries de fonctions holomorphes (Weierstraß) — [[ch03-weierstrass-series]]
**Quand.** La série n'est pas entière mais une série de fonctions holomorphes $\sum f_n$ ($\sum 1/(z-n)^2$, $\sum z^n/(1-z^n)$, séries de Dirichlet $\sum a_nn^{-z}$, $\sum e^{-nz}$) : on cherche l'ouvert $\Omega$ où elle converge **localement normalement** ; la somme y est holomorphe et se dérive terme à terme. Pour une série de Dirichlet : demi-plan $\Re z>\sigma$ ; pour $\sum f_n(z)$ avec $f_n\sim$ géométrique : disque ou couronne.
**Justification.** Convergence localement normale $\Rightarrow$ localement uniforme $\Rightarrow$ holomorphie de la somme ([[ch03-weierstrass]]).
**Pièges.** Le domaine de convergence **normale** sur les compacts peut être strictement plus petit que le domaine de convergence simple, et c'est le premier qui donne l'holomorphie. Pour un compact $K\subset\Omega$, le majorant $M_n$ doit être indépendant de $z\in K$ : réduire $K$ à un disque fermé $\bar D(0,r)$, à une bande $\Re z\ge\sigma+\delta$, etc.

### [ ] Principe du prolongement analytique — [[ch01-prolongement-analytique]]
**Pourquoi ce n'est pas l'outil ici.** Le fait que $f$ se prolonge holomorphiquement **au-delà** du cercle $|z-z_0|=R$ (sur un ouvert non circulaire) ne change pas $R$ : $1/(1-z)$ est holomorphe sur $\C\setminus\{1\}$, mais sa série en $0$ a rayon $1$ car le prolongement n'existe pas sur un **disque** plus grand centré en $0$. Le rayon est une propriété de la fonction **sur des disques centrés en $z_0$**, pas du domaine maximal d'holomorphie.
**Quand il le serait.** Pour justifier que la somme de la série coïncide avec $f$ (ou avec une autre expression) partout où les deux sont définies et holomorphes sur un connexe — étape nécessaire dans l'argument de l'option 2.

### [ ] Principe du maximum — [[ch01-maximum-sur-le-bord]]
**Pourquoi ce n'est pas l'outil ici.** Une borne $|f|\le M$ sur $D(0,R)$ ou sur son bord n'augmente pas le rayon : $\sum z^n/n^2$ est bornée (et même continue) sur $\bar D(0,1)$ avec $R=1$. Les bornes de $|f|$ renseignent sur la **taille** des coefficients ($|a_n|\le M$), pas sur $R$ au-delà de ce que donne l'option 1.
**Quand il le serait.** Pour majorer $\sup_{C(0,r)}|f|$ avant d'appliquer les estimées de Cauchy, ou pour comparer les sup sur plusieurs cercles ([[ch01-trois-cercles-hadamard]]).

## Démarche

1. **$f$ est-elle donnée par une formule ?** Oui : localiser l'ouvert maximal $\Omega$ où $f$ est holomorphe (zéros du dénominateur, coupures, points où une intégrale cesse de converger), et vérifier les **singularités apparentes** (effaçables ? pôles ?). Alors $R\ge\dist(z_0,\C\setminus\Omega)$, avec égalité si la singularité la plus proche n'est pas effaçable (pôle : $|f|\to\infty$). Si $f$ est entière : $R=+\infty$.
2. **Les coefficients sont-ils donnés par une récurrence ou une formule ?** Oui : encadrer $|a_n|$ (récurrence par induction, comparaison à une suite géométrique) et appliquer la caractérisation « $(|a_n|\rho^n)$ bornée » ou Cauchy–Hadamard ; pour l'égalité, trouver une sous-suite où $|a_n|\ge c\rho^{-n}$, ou revenir à la fonction somme et ses singularités (option 2).
3. **$f$ est-elle définie par une équation différentielle ou fonctionnelle ?** Prouver d'abord l'holomorphie sur un ouvert (existence par le théorème de Cauchy–Lipschitz holomorphe, ou par une série majorante), puis revenir en 1.
4. **Série de fonctions quelconque** : fixer un compact type, majorer uniformément, obtenir la convergence localement normale sur $\Omega$ ; identifier ensuite la frontière de $\Omega$ par un point où la série diverge ou où la somme explose.
5. **Rédiger** : « $f\in\Hol(D(z_0,d))$ donc $R\ge d$ (estimées de Cauchy) ; si $R>d$, la somme serait bornée près de $z_1$, or ... ; donc $R=d$. »

## Pièges

* Compter une singularité **effaçable** comme vraie singularité ($\sin z/z$ est entière : $R=\infty$).
* Prendre la distance à la singularité la plus proche de **l'origine** au lieu de la plus proche de **$z_0$** quand $z_0\ne0$.
* Oublier qu'un zéro du dénominateur peut être compensé par le numérateur ($(e^z-1)/z$, $\sin(\pi z)/(z(z-1))$).
* Conclure « $R=\rho$ » d'une seule majoration $|a_n|\le C\rho^{-n}$.
* Appliquer d'Alembert à des coefficients nuls une fois sur deux ($\sum z^{2n}/n!$) ou à une suite de quotients non convergente.
* Confondre « la série converge en un point du cercle » et « $R$ plus grand » : la convergence au bord est sans effet sur $R$.
* Pour une série de Dirichlet ou de fonctions, confondre domaine de convergence simple et domaine de convergence localement normale ; seul le second donne l'holomorphie par Weierstraß.

## Mini-exemple

*Énoncé.* Soit $f(z)=\dfrac{z}{e^z-1}$, prolongée par $f(0)=1$. Déterminer le rayon de convergence $R$ de la série de Taylor de $f$ en $0$ et en déduire $\limsup|a_n|^{1/n}$, où $f(z)=\sum a_nz^n$.

*Solution.* Posons $h(z)=\dfrac{e^z-1}{z}=\sum_{n\ge0}\dfrac{z^n}{(n+1)!}$ : $h$ est entière et $h(0)=1$. Pour $z\ne0$, $h(z)=0\iff e^z=1\iff z\in2i\pi\Z^*$, et ces points ont un module $\ge2\pi$. Donc $h$ ne s'annule pas sur $D(0,2\pi)$ et $f=1/h\in\Hol(D(0,2\pi))$ ([[ch01-stabilite-operations]]) : par les estimées de Cauchy [[ch01-estimees-cauchy]], $R\ge2\pi$.
Au point $z_1=2i\pi$ : $e^z-1$ a un zéro **simple** (dérivée $e^{2i\pi}=1\ne0$) et le numérateur vaut $2i\pi\ne0$, donc $|f(z)|\to+\infty$ quand $z\to2i\pi$ ; par exemple $|f(it)|=\dfrac{t}{|e^{it}-1|}\to+\infty$ quand $t\to2\pi^-$, avec $it\in D(0,2\pi)$. Si $R>2\pi$, la somme $S$ de la série serait holomorphe sur $D(0,R)\ni2i\pi$ et coïnciderait avec $f$ sur $D(0,2\pi)$ (unicité du développement de Taylor) ; $S$ étant continue en $2i\pi$, $f$ serait bornée sur $D(0,2\pi)\cap D(2i\pi,\eps)$ : contradiction. Donc $R=2\pi$, et par Cauchy–Hadamard [[ch01-def-rayon-convergence]], $\limsup|a_n|^{1/n}=\dfrac1{2\pi}$ (les $a_n=B_n/n!$ sont les nombres de Bernoulli divisés par $n!$).
