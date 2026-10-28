---
id: rfx-holo-identifier
type: reflexe
situation: Identifier une fonction holomorphe (unicité, zéros isolés, coïncidence sur un ensemble ayant un point d'accumulation)
chapters: [1, 2]
---
## Situation

On connaît $f\in\Hol(\Omega)$ **partiellement** : ses valeurs sur $\R\cap\Omega$, sur une suite $(z_n)$ convergente, sur un petit disque, sur un segment ; ou une relation fonctionnelle vraie sur une partie ($f(x+1)=xf(x)$ pour $x>0$, $f(2z)=2f(z)f'(z)$ pour $z$ réel) ; ou ses dérivées en un point ; ou une égalité au bord. On veut **déterminer** $f$ (« montrer que $f(z)=\dots$ pour tout $z\in\Omega$ »), montrer que **deux** fonctions holomorphes sont égales, étendre une **identité** de $\R$ à $\C$, ou montrer qu'**aucune** fonction holomorphe ne vérifie la contrainte. Mots-clés : *unique*, *coïncide*, *pour tout $n$*, *sur un voisinage*, *en déduire que l'égalité est vraie pour tout $z$*.

## Options

### [x] Principe du prolongement analytique (unicité) — [[ch01-prolongement-analytique]]
**Quand.** $f,g\in\Hol(\Omega)$ avec $\Omega$ **connexe**, et $f=g$ sur une partie $X\subset\Omega$ ayant un **point d'accumulation dans $\Omega$** : un intervalle réel, un ouvert non vide, une suite convergente $z_n\to a\in\Omega$ avec $z_n\ne a$, un segment, un arc de cercle. Alors $f=g$ sur $\Omega$. Pour une identité $\Phi(f,g,\dots)=0$ vraie sur $\R$ : l'appliquer à $h=\Phi(f,g,\dots)$, holomorphe, nulle sur $\R\cap\Omega$.
**Justification.** $f-g$ est holomorphe, ses zéros ne sont pas isolés, donc $f-g\equiv0$ par [[ch01-zeros-isoles]].
**Pièges.** Le point d'accumulation doit être **dans $\Omega$** : $\sin(\pi/z)$ s'annule en tous les $1/n$ sans être nulle sur $\C^\times$ (le point $0$ n'est pas dans $\C^\times$). $\Z$ ou $\N$ n'ont **pas** de point d'accumulation : $\sin(\pi z)$ s'annule sur $\Z$ ([[ch01-isole-ne-signifie-pas-fini]]). Connexité de $\Omega$ obligatoire.

### [x] Zéros isolés appliqué à une relation fonctionnelle — [[ch01-zeros-isoles]]
**Quand.** On veut montrer qu'une **relation** $R(z)=0$ vérifiée pour $z$ réel (ou sur un ouvert) est vraie partout : $e^{z+w}=e^ze^w$, $\cos^2+\sin^2=1$, $\Gamma(z+1)=z\Gamma(z)$, $f(\bar z)=\overline{f(z)}$ pour $f$ réelle sur $\R$ ; ou qu'une fonction qui s'annule sur un ensemble « gros » est identiquement nulle ; ou pour une identité à **deux** variables : fixer $w$ réel, prolonger en $z$, puis fixer $z$ quelconque et prolonger en $w$.
**Justification.** La fonction $R$ construite à partir de fonctions holomorphes est holomorphe ([[ch01-stabilite-operations]]) et nulle sur un ensemble à point d'accumulation.
**Pièges.** Vérifier que **chaque membre** de l'identité est bien holomorphe en la variable que l'on prolonge ($\overline{f(z)}$ ne l'est pas : on écrit plutôt $\overline{f(\bar z)}$, qui l'est). Pour $\Gamma$, l'identité se prolonge sur $\{\Re z>0\}$ connexe, pas directement sur $\C$.

### [x] Unicité des coefficients (Taylor / Laurent) — [[ch01-holomorphe-analytique]]
**Quand.** On connaît toutes les dérivées $f^{(n)}(z_0)$ (par une équation différentielle, une récurrence, « $f^{(n)}(0)=0$ pour tout $n$ ») ou deux développements en série de la même fonction, ou un développement de Laurent ([[ch02-laurent-developpement]], unique). Alors $f$ coïncide avec $\sum f^{(n)}(z_0)(z-z_0)^n/n!$ sur le plus grand disque $D(z_0,\rho(z_0))\subset\Omega$, puis sur $\Omega$ connexe par prolongement analytique.
**Justification.** Holomorphe $\Leftrightarrow$ analytique, et les coefficients de la série de Taylor sont imposés par les dérivées ([[ch01-estimees-cauchy]]).
**Pièges.** L'identification des coefficients n'est valable qu'entre deux séries **convergentes** sur un même disque de rayon $>0$ ; un développement asymptotique formel ne suffit pas. Le passage du disque à $\Omega$ demande la connexité.

### [x] Égalité au bord et principe du maximum — [[ch01-maximum-sur-le-bord]]
**Quand.** $f,g$ continues sur $\bar\Omega$ **compact**, holomorphes sur $\Omega$ connexe, et $f=g$ sur $\partial\Omega$ (ou $|f-g|\le\eps$ sur le bord) : alors $f=g$ sur $\bar\Omega$ (resp. $|f-g|\le\eps$ partout). C'est l'**unicité pour les problèmes aux limites** (voir aussi la version harmonique [[ch04-maximum-unicite-bord]]). Déclencheur : « montrer que $f$ est déterminée par ses valeurs sur le cercle ».
**Justification.** $\sup_{\bar\Omega}|f-g|=\sup_{\partial\Omega}|f-g|=0$.
**Pièges.** Le bord d'un ouvert non borné ne suffit pas ($f(z)=\sin z$ est nulle sur le bord de la bande $0<\Re z<\pi$ sans être nulle). Si on ne connaît que $|f|=|g|$ au bord, on **n'identifie pas** $f$ (facteur $e^{i\theta}$, ou produits de Blaschke) : passer par $f/g$ et sa constance éventuelle ([[rfx-holo-constante]]).

### [ ] Théorème de Rouché — [[ch02-rouche]]
**Pourquoi ce n'est pas l'outil ici.** Rouché compte des zéros dans un domaine ; savoir que $f-g$ a autant de zéros qu'une fonction de référence ne force jamais $f=g$. On ne « compare » pas deux fonctions par Rouché, on compte.
**Quand il le serait.** Pour localiser les zéros ou les solutions de $f(z)=w$ quand on veut montrer que $f$ est **surjective** ou **injective** ([[rfx-holo-injective-ouverte]]).

### [ ] Théorème de Weierstraß — [[ch03-weierstrass]]
**Pourquoi ce n'est pas l'outil ici.** Si $f=\lim f_n$, Weierstraß dit que $f$ est holomorphe et que $f'=\lim f_n'$ ; il ne dit pas **qui** est $f$. Identifier la limite demande de reconnaître $f$ sur un ensemble à point d'accumulation (par exemple sur $\R$, où l'on sait calculer), puis de conclure par prolongement analytique.
**Quand il le serait.** Comme préalable : établir l'holomorphie de $f$ et de ses dérivées avant d'invoquer l'unicité ; ou pour justifier qu'une identité entre séries dérivées terme à terme est licite.

## Démarche

1. **Sur quelle partie $X$ connaît-on $f$ (ou la relation) ?** Intervalle, ouvert, suite convergente avec limite dans $\Omega$, segment : $X$ a un point d'accumulation dans $\Omega$ → prolongement analytique. Ensemble discret ($\Z$, $\{n\}$, $\{1/n\}$ dans $\C^\times$) : **pas** de conclusion d'unicité ; chercher une contrainte supplémentaire (croissance, bornitude : Liouville [[ch01-liouville]] ; par exemple $f$ entière bornée avec $f(n)=0$ pour tout $n$ n'est pas forcément nulle — $\sin\pi z$ ne l'est pas, mais elle n'est pas bornée). Bord d'un compact : maximum sur le bord.
2. **Deviner le candidat $g$.** Calculer sur $X$ (valeurs réelles, formule connue), ou résoudre la récurrence des coefficients de Taylor, ou lire la relation fonctionnelle. Vérifier que $g$ est **holomorphe sur tout $\Omega$** (sinon la conclusion sera « $f=g$ là où $g$ est définie », et parfois une contradiction, voir mini-exemple).
3. **Former $h=f-g$ (ou la relation $R$)**, vérifier $h\in\Hol(\Omega)$, $\Omega$ connexe, $h=0$ sur $X$ avec point d'accumulation dans $\Omega$. Conclure $h\equiv0$.
4. **Pour une identité à plusieurs variables** : prolonger variable par variable, en précisant à chaque étape l'ouvert connexe et l'ensemble de coïncidence.
5. **Pour montrer qu'aucune $f$ ne convient** : supposer $f$ existe, l'identifier à $g$ par 1–3, puis exhiber une contradiction (pôle de $g$ dans $\Omega$, non-bornitude, $g$ non holomorphe en un point de $\Omega$, valeur incompatible).

## Pièges

* Point d'accumulation **hors** de $\Omega$ (le cas $\{1/n\}$ sur $\C^\times$) ou absent ($\Z$).
* Oublier la connexité : sur $\Omega=D(0,1)\cup D(3,1)$, $f=g$ sur $D(0,1)$ n'impose rien sur $D(3,1)$.
* Membre non holomorphe dans une relation ($\bar z$, $|f|$, $\Re f$) : la relation ne se prolonge pas telle quelle.
* Croire que « $f=g$ sur $\R$ » impose $f=g$ **sur $\C$** quand $f$ et $g$ ne sont holomorphes que sur des ouverts différents : la conclusion vaut sur la composante connexe de l'intersection des domaines contenant $\R$.
* « $f(n)=g(n)$ pour tout entier $n$ » ne donne rien sans hypothèse de croissance.
* Confondre unicité et existence : le prolongement analytique ne construit pas $g$, il dit qu'il n'y en a qu'un.

## Mini-exemple

*Énoncé.* Déterminer toutes les fonctions $f\in\Hol(D(0,1))$ telles que $f(1/n)=\dfrac1{n^2+1}$ pour tout entier $n\ge2$. Existe-t-il une fonction **entière** vérifiant cette condition ?

*Solution.* Candidat : $g(z)=\dfrac{z^2}{1+z^2}$ vérifie $g(1/n)=\dfrac{1/n^2}{1+1/n^2}=\dfrac1{n^2+1}$. Comme $1+z^2\ne0$ sur $D(0,1)$ (zéros $\pm i$ de module $1$), $g\in\Hol(D(0,1))$. Soit $f$ une solution : $h=f-g$ est holomorphe sur $D(0,1)$, connexe, et s'annule sur $X=\{1/n,\ n\ge2\}$, qui a le point d'accumulation $0\in D(0,1)$. Par le principe du prolongement analytique [[ch01-prolongement-analytique]], $h\equiv0$ : $f=g$ est l'**unique** solution.
Supposons maintenant $f$ entière vérifiant la condition. Sur $D(0,1)$, $f=g$ d'après ce qui précède. Les fonctions $f$ et $g$ sont holomorphes sur $\Omega'=\C\setminus\{i,-i\}$, connexe, et coïncident sur l'ouvert $D(0,1)\subset\Omega'$ : donc $f=g$ sur $\Omega'$. Mais $f$ est continue en $i$, donc bornée près de $i$, alors que $|g(z)|=\dfrac{|z|^2}{|z-i|\,|z+i|}\to+\infty$ quand $z\to i$ (pôle simple). Contradiction : **aucune** fonction entière ne convient.
