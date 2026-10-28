---
id: ch02-invariance-homotopie-integrale
type: theorem
chapter: 2
title: Invariance par homotopie de l'intégrale d'une fonction holomorphe sur un lacet
ref: Théorème II.2.1
page: 37
importance: 3
depends: [ch02-homotopie-simplement-connexe, ch01-primitive-locale, ch02-nombre-de-lebesgue, ch01-integrale-primitive, ch01-integrale-reparametrage-oppose-concatenation, ch01-def-integrale-chemin]
tags: [homotopie, cauchy, integrale, lacet, grillage, primitive, compacite]
---
## Intuition

> 💡 L'intégrale $\int_\gamma f(z)\,dz$ d'une fonction holomorphe **ne change pas quand on déforme continûment le lacet** $\gamma$, tant que la déformation reste dans le domaine d'holomorphie. On peut donc remplacer un lacet compliqué par un lacet simple (un cercle, un point) sans toucher à la valeur de l'intégrale : c'est le cœur de toute la théorie des résidus.

Pourquoi ? Localement, $f$ a une primitive $F$ ([[ch01-primitive-locale]]), donc l'intégrale de $f$ sur un petit lacet est nulle ([[ch01-integrale-primitive]]). On découpe la surface balayée par la déformation en petits « carreaux » si fins que chacun tient dans un disque où $f$ a une primitive : l'intégrale sur le bord de chaque carreau est nulle, et en sommant, les côtés intérieurs se compensent deux à deux (parcourus dans les deux sens). Il ne reste que le bord extérieur : $\int_{\gamma_1}f-\int_{\gamma_0}f=0$.

Rappels. Une **homotopie de lacets** entre $\gamma_0$ et $\gamma_1$ dans $\Omega$ est une application continue $\gamma:[0,1]^2\to\Omega$ avec $\gamma(0,\cdot)=\gamma_0$, $\gamma(1,\cdot)=\gamma_1$ et $\gamma(s,0)=\gamma(s,1)$ pour tout $s$ ([[ch02-homotopie-simplement-connexe]]). L'intégrale $\int_\gamma f(z)\,dz=\int_a^b f(\gamma(t))\gamma'(t)\,dt$ est définie pour un chemin $\gamma$, c'est-à-dire $C^1$ par morceaux ([[ch01-def-integrale-chemin]]) ; les courbes intermédiaires $\gamma(s,\cdot)$ ne le sont pas forcément, d'où le remplacement par des chemins affines par morceaux dans la preuve. Pour $a,b\in\C$, on note $[a,b]$ le chemin $t\mapsto(1-t)a+tb$, $t\in[0,1]$ (segment orienté de $a$ vers $b$).

## Énoncé

**Théorème (poly, Théorème II.2.1, p. 37).** Soient $\Omega$ un ouvert de $\C$, $\gamma$ une homotopie de lacets entre $\gamma_0$ et $\gamma_1$ dans $\Omega$, et $f\in\Hol(\Omega)$. Alors
$$
\int_{\gamma_0}f(z)\,dz=\int_{\gamma_1}f(z)\,dz .
$$

## Hypothèses

### H1 — $f$ est holomorphe sur tout $\Omega$

**Rôle.** On utilise l'existence locale de primitives de $f$ sur chaque disque $D_\alpha\subset\Omega$ ([[ch01-primitive-locale]]), donc $f$ doit être holomorphe sur toute la zone balayée $\gamma([0,1]^2)\subset\Omega$.

**Si on la retire.** $f(z)=\bar z$ est continue sur $\C$ mais pas holomorphe. Dans $\C$, le cercle $\gamma_0(t)=e^{2i\pi t}$ est homotope (homotopie de lacets $\gamma(s,t)=(1-s)e^{2i\pi t}$) au lacet constant $\gamma_1\equiv0$. Or
$$
\int_{\gamma_0}\bar z\,dz=\int_0^1 e^{-2i\pi t}\cdot2i\pi e^{2i\pi t}\,dt=2i\pi\ne0=\int_{\gamma_1}\bar z\,dz .
$$
Autre exemple : $f(z)=1/z$ est holomorphe sur $\C\setminus\{0\}$ mais pas sur $\C$ ; la même homotopie, qui passe par $0$, n'est pas une homotopie dans $\C\setminus\{0\}$, et $\int_{\gamma_0}dz/z=2i\pi\ne0$.

### H2 — l'homotopie est une homotopie **de lacets** ($\gamma(s,0)=\gamma(s,1)$)

**Rôle.** Le bord de la surface $\gamma([0,1]^2)$ se décompose en $\gamma_0^{opp}\vee v\vee\gamma_1\vee v^{opp}$ où $v(s)=\gamma(s,0)=\gamma(s,1)$ ; les deux contributions de $v$ se détruisent, ce qui laisse exactement $\int_{\gamma_1}f-\int_{\gamma_0}f$.

**Si on la retire.** $\Omega=\C\setminus\{0\}$, $f(z)=1/z$, $\gamma_0(t)=e^{2i\pi t}$ (cercle unité) et $\gamma_1\equiv1$ (lacet constant). L'application $\gamma(s,t)=e^{2i\pi(1-s)t}$ est continue, à valeurs de module $1$ donc dans $\Omega$, vaut $\gamma_0$ en $s=0$ et $\gamma_1$ en $s=1$ : c'est une homotopie de chemins entre deux lacets, mais pas une homotopie de lacets car $\gamma(s,1)=e^{2i\pi(1-s)}\ne1=\gamma(s,0)$ pour $0<s<1$. Et $\int_{\gamma_0}dz/z=2i\pi\ne0=\int_{\gamma_1}dz/z$.

### H3 — l'homotopie reste dans $\Omega$ (et $\Omega$ est ouvert)

**Rôle.** Chaque petit carreau doit être envoyé dans un disque $D_\alpha\subset\Omega$ où $f$ a une primitive ; si $\gamma$ sortait de $\Omega$, $f$ n'y serait même pas définie. L'ouverture de $\Omega$ permet de recouvrir $\gamma([0,1]^2)$ par des disques ouverts contenus dans $\Omega$.

**Si on la retire.** $\Omega=\C\setminus\{0\}$, $f(z)=1/z$, $\gamma_0(t)=e^{2i\pi t}$, $\gamma_1\equiv1$ et $\gamma(s,t)=(1-s)e^{2i\pi t}+s$ : homotopie de lacets dans $\C$ (on a $\gamma(s,0)=\gamma(s,1)=1$), mais $\gamma(\tfrac12,\tfrac12)=-\tfrac12+\tfrac12=0\notin\Omega$. Conclusion fausse : $2i\pi\ne0$.

### H4 — $\gamma_0$ et $\gamma_1$ sont des lacets ($C^1$ par morceaux)

**Rôle.** C'est ce qui donne un sens aux deux intégrales ; la preuve utilise aussi que $\gamma_0$ restreint à chaque $[\tfrac jn,\tfrac{j+1}n]$ est un chemin. L'homotopie elle-même n'a besoin d'être que continue.

**Si on la retire.** Les intégrales ne sont plus définies. (On pourrait les définir par le procédé de la preuve, en remplaçant $\gamma_0$ par un chemin affine par morceaux inscrit, mais le poly ne le fait pas.)

## Idée de la preuve

Grillager le carré $K=[0,1]^2$ en $n^2$ petits carrés si fins (nombre de Lebesgue + Heine) que l'image de chacun tient dans un disque $D_\alpha\subset\Omega$ où $f$ a une primitive. Remplacer chaque carreau image par le quadrilatère affine $\Gamma_{i,j}$ de sommets $\gamma(\tfrac in,\tfrac jn)$, etc. : $\int_{\Gamma_{i,j}}f=0$. Sommer : les côtés intérieurs se détruisent, les côtés $v$ aussi (condition de lacet), et il reste $\int_{Q_1}f-\int_{Q_0}f=0$ où $Q_k$ est le chemin affine par morceaux inscrit dans $\gamma_k$ ; enfin $\int_{Q_k}f=\int_{\gamma_k}f$ par la primitive locale.

## Preuve

*Le poly signale que cette démonstration est technique : en première lecture, on peut se contenter de l'idée du grillage et admettre les détails (choix du pas $n$, remplacement par des chemins affines par morceaux).*

**Étape 0 : notations.** Soit $\gamma:K:=[0,1]^2\to\Omega$ une homotopie de lacets entre $\gamma_0$ et $\gamma_1$. On note $v$ le chemin continu $v(s):=\gamma(s,0)=\gamma(s,1)$. Pour $n\in\N^\times$ et $0\le i,j\le n-1$, soit $K^{(n)}_{i,j}:=[\tfrac in,\tfrac{i+1}n]\times[\tfrac jn,\tfrac{j+1}n]$ ; on a $K=\bigcup_{0\le i,j\le n-1}K^{(n)}_{i,j}$. Le bord $C:=\partial K$, parcouru dans le sens direct, a pour image $\Gamma:=\gamma(C)$, décrite par
$$
\Gamma=\gamma_0^{opp}\vee v\vee\gamma_1\vee v^{opp}
$$
(côté gauche $s=0$ parcouru de $t=1$ vers $t=0$, côté bas $t=0$, côté droit $s=1$, côté haut $t=1$ parcouru à l'envers). Si $v$ était $C^1$ par morceaux, l'additivité et le changement de signe par renversement ([[ch01-integrale-reparametrage-oppose-concatenation]]) donneraient la formule (II.2.1) du poly :
$$
\int_\Gamma f(z)\,dz=-\int_{\gamma_0}f(z)\,dz+\int_v f(z)\,dz+\int_{\gamma_1}f(z)\,dz-\int_v f(z)\,dz=\int_{\gamma_1}f(z)\,dz-\int_{\gamma_0}f(z)\,dz
$$
et il suffirait de montrer $\int_\Gamma f=0$. Comme $v$ n'est que continu, on va remplacer les chemins intermédiaires par des chemins affines par morceaux.

**Étape 1 : recouvrement et nombre de Lebesgue.** Pour tout $x\in\gamma(K)\subset\Omega$, il existe un disque ouvert $D_x\subset\Omega$ centré en $x$ ($\Omega$ est ouvert). D'après [[ch01-primitive-locale]], $f$ admet une primitive holomorphe $F_x$ sur $D_x$. Les disques $(D_\alpha)_{\alpha\in A}$ (avec $A=\gamma(K)$) recouvrent $\gamma(K)$, qui est compact comme image du compact $K$ par l'application continue $\gamma$. Soit $\delta>0$ un nombre de Lebesgue de ce recouvrement ([[ch02-nombre-de-lebesgue]]) : pour tout $x\in\gamma(K)$, il existe $\alpha\in A$ tel que $D(x,\delta)\subset\bar D(x,\delta)\subset D_\alpha$.

**Étape 2 : choix du pas $n$ (Heine).** L'application $\gamma$ est continue sur le compact $K$, donc uniformément continue (théorème de Heine) : il existe $\eta>0$ tel que $\|x-y\|<\eta\Rightarrow|\gamma(x)-\gamma(y)|<\delta$ pour $x,y\in K$. Choisissons $n$ tel que $\sqrt2/n<\eta$ (diamètre d'un carré de côté $1/n$). Alors deux points d'un même carré $K^{(n)}_{i,j}$ ont des images à distance $<\delta$ ; en particulier, en notant
$$
z_{i,j}:=\gamma\big(\tfrac in,\tfrac jn\big)\qquad(0\le i,j\le n),
$$
on a $\gamma(K^{(n)}_{i,j})\subset D(z_{i,j},\delta)\subset D_{\alpha(i,j)}$ pour un certain $\alpha(i,j)\in A$. Remarquons que $z_{i,0}=\gamma(\tfrac in,0)=\gamma(\tfrac in,1)=z_{i,n}$ par la condition de lacet.

**Étape 3 : les quadrilatères affines et leur intégrale nulle.** Pour $0\le i,j\le n-1$, soit $\Gamma_{i,j}$ le lacet affine par morceaux
$$
\Gamma_{i,j}:=[z_{i,j},z_{i+1,j}]\vee[z_{i+1,j},z_{i+1,j+1}]\vee[z_{i+1,j+1},z_{i,j+1}]\vee[z_{i,j+1},z_{i,j}],
$$
quadrilatère orienté de sommets $\gamma(\tfrac in,\tfrac jn)$, $\gamma(\tfrac{i+1}n,\tfrac jn)$, $\gamma(\tfrac{i+1}n,\tfrac{j+1}n)$, $\gamma(\tfrac in,\tfrac{j+1}n)$. Ces quatre sommets sont dans $\gamma(K^{(n)}_{i,j})\subset D_{\alpha(i,j)}$ ; le disque étant convexe, les quatre segments, donc $\Gamma_{i,j}$ tout entier, sont contenus dans $D_{\alpha(i,j)}$. Comme $f$ y admet la primitive $F_{\alpha(i,j)}$ et que $\Gamma_{i,j}$ est un lacet, [[ch01-integrale-primitive]] donne
$$
\int_{\Gamma_{i,j}}f(z)\,dz=0\qquad(0\le i,j\le n-1).
$$

**Étape 4 : sommation, destruction des côtés intérieurs.** Sommons ces $n^2$ égalités en utilisant l'additivité sur les chemins composés ([[ch01-integrale-reparametrage-oppose-concatenation]]) : $0=\sum_{i,j}\int_{\Gamma_{i,j}}f$ est une somme d'intégrales sur des segments orientés. Un segment « vertical » $[z_{i+1,j},z_{i+1,j+1}]$ avec $0\le i\le n-2$ apparaît dans $\Gamma_{i,j}$ (deuxième côté) et, parcouru en sens inverse, dans $\Gamma_{i+1,j}$ (quatrième côté, $[z_{i+1,j+1},z_{i+1,j}]$) : par le changement de signe par renversement, ces deux contributions s'annulent. De même un segment « horizontal » $[z_{i,j+1},z_{i+1,j+1}]$ avec $0\le j\le n-2$ apparaît dans $\Gamma_{i,j+1}$ (premier côté) et à l'envers dans $\Gamma_{i,j}$ (troisième côté). Il ne reste que les segments du bord de la grille :
* bas ($j=0$, premiers côtés) : $\int_{P}f$ où $P:=[z_{0,0},z_{1,0}]\vee\cdots\vee[z_{n-1,0},z_{n,0}]$ ;
* haut ($j=n-1$, troisièmes côtés, parcourus de droite à gauche) : $-\int_{P'}f$ où $P':=[z_{0,n},z_{1,n}]\vee\cdots\vee[z_{n-1,n},z_{n,n}]$ ;
* droite ($i=n-1$, deuxièmes côtés) : $\int_{Q_1}f$ où $Q_1:=[z_{n,0},z_{n,1}]\vee\cdots\vee[z_{n,n-1},z_{n,n}]$ ;
* gauche ($i=0$, quatrièmes côtés, parcourus de haut en bas) : $-\int_{Q_0}f$ où $Q_0:=[z_{0,0},z_{0,1}]\vee\cdots\vee[z_{0,n-1},z_{0,n}]$.

Or $z_{i,n}=z_{i,0}$ pour tout $i$ (étape 2) : $P'=P$. C'est le remplacement affine par morceaux du chemin $v$ et de $v^{opp}$ dans (II.2.1), et leurs contributions se détruisent. On obtient
$$
0=\int_{Q_1}f(z)\,dz-\int_{Q_0}f(z)\,dz .
$$

**Étape 5 : comparaison de $Q_0$ avec $\gamma_0$ (et de $Q_1$ avec $\gamma_1$).** Fixons $0\le j\le n-1$. La restriction $\gamma_0^{(j)}$ de $\gamma_0$ à $[\tfrac jn,\tfrac{j+1}n]$ est un chemin (car $\gamma_0$ est $C^1$ par morceaux) de $z_{0,j}$ à $z_{0,j+1}$, d'image contenue dans $\gamma(K^{(n)}_{0,j})\subset D_{\alpha(0,j)}$. Le segment $[z_{0,j},z_{0,j+1}]$ est aussi dans $D_{\alpha(0,j)}$ (convexité). Sur ce disque $f$ a la primitive $F:=F_{\alpha(0,j)}$, donc par [[ch01-integrale-primitive]]
$$
\int_{\gamma_0^{(j)}}f(z)\,dz=F(z_{0,j+1})-F(z_{0,j})=\int_{[z_{0,j},z_{0,j+1}]}f(z)\,dz .
$$
(Dans le poly, cela s'exprime en disant que le lacet $\Gamma_{-1,j}:=\gamma_0^{(j)}\vee[z_{0,j+1},z_{0,j}]$ est contenu dans $D_{\alpha(0,j)}$ et a donc une intégrale nulle.) En sommant sur $j$ (additivité) : $\int_{\gamma_0}f=\int_{Q_0}f$. Le même raisonnement sur le côté $s=1$ (lacets $\Gamma_{n,j}$ du poly, avec les disques $D_{\alpha(n-1,j)}\supset\gamma(K^{(n)}_{n-1,j})$) donne $\int_{\gamma_1}f=\int_{Q_1}f$.

**Conclusion.** $\int_{\gamma_1}f(z)\,dz-\int_{\gamma_0}f(z)\,dz=\int_{Q_1}f-\int_{Q_0}f=0$. $\square$

*Fidélité au poly :* le poly définit les lacets $\Gamma_{-1,j}$, $\Gamma_{n,j}$ (bord gauche et droit) et $\Gamma_{i,j}$ et écrit directement $\int_\Gamma f=\sum_{i=-1}^{n}\sum_{j=0}^{n-1}\int_{\Gamma_{i,j}}f=0$, avec $v$ remplacé par le chemin affine par morceaux $P$ dans (II.2.1) ; les étapes 4 et 5 ci-dessus explicitent ce calcul.

## Preuve à trous

Soit $\gamma:K=[0,1]^2\to\Omega$ l'homotopie de lacets, $v(s)=\gamma(s,0)=\gamma(s,1)$. On recouvre le compact $\gamma(K)$ par des disques ouverts $D_\alpha\subset\Omega$ sur lesquels <trou indice="Corollaire I.7.6">$f$ admet une primitive holomorphe</trou>, et l'on prend un nombre de Lebesgue $\delta$ de ce recouvrement : toute boule $D(x,\delta)$, $x\in\gamma(K)$, est dans un $D_\alpha$. Par <trou indice="$\gamma$ est continue sur un compact">continuité uniforme de $\gamma$ (Heine), on choisit $n$ tel que deux points d'un même carré $K^{(n)}_{i,j}$ de côté $1/n$ aient des images à distance $<\delta$</trou> ; ainsi $\gamma(K^{(n)}_{i,j})\subset D_{\alpha(i,j)}$. On pose $z_{i,j}=\gamma(\tfrac in,\tfrac jn)$ et l'on définit $\Gamma_{i,j}$ comme <trou indice="pourquoi pas l'image du bord du carré ?">le quadrilatère affine par morceaux de sommets $z_{i,j},z_{i+1,j},z_{i+1,j+1},z_{i,j+1}$ (l'image du bord du carré n'est pas forcément $C^1$ par morceaux)</trou>, contenu dans le disque convexe $D_{\alpha(i,j)}$, donc $\int_{\Gamma_{i,j}}f=0$. En sommant sur $i,j$, <trou indice="que deviennent les segments communs à deux quadrilatères ?">les côtés intérieurs, parcourus deux fois en sens opposés, se détruisent ; les côtés du bas et du haut aussi car $z_{i,0}=z_{i,n}$ (condition de lacet)</trou> ; il reste $0=\int_{Q_1}f-\int_{Q_0}f$ où $Q_k$ est la ligne brisée de sommets $\gamma(k,\tfrac jn)$. Enfin $\int_{Q_0}f=\int_{\gamma_0}f$ car <trou indice="sur chaque petit morceau, comparer deux chemins de mêmes extrémités">sur $[\tfrac jn,\tfrac{j+1}n]$, le morceau de $\gamma_0$ et le segment $[z_{0,j},z_{0,j+1}]$ sont deux chemins de mêmes extrémités dans un disque où $f$ a une primitive $F$ : leurs intégrales valent toutes deux $F(z_{0,j+1})-F(z_{0,j})$</trou> ; de même pour $\gamma_1$. D'où $\int_{\gamma_0}f=\int_{\gamma_1}f$. $\square$

## Exemples

1. **Déformer un cercle en un autre.** Soit $f(z)=\dfrac{1}{z}$ sur $\Omega=\C\setminus\{0\}$. Les cercles $\gamma_0(t)=e^{2i\pi t}$ et $\gamma_1(t)=Re^{2i\pi t}$ ($R>0$) sont homotopes dans $\Omega$ par $\gamma(s,t)=((1-s)+sR)e^{2i\pi t}$ (module $(1-s)+sR>0$, et $\gamma(s,0)=\gamma(s,1)$). Le théorème donne $\int_{\gamma_1}dz/z=\int_{\gamma_0}dz/z=\int_0^1\frac{2i\pi e^{2i\pi t}}{e^{2i\pi t}}dt=2i\pi$, ce que confirme le calcul direct $\int_0^1\frac{2i\pi Re^{2i\pi t}}{Re^{2i\pi t}}dt=2i\pi$. Plus généralement, tout lacet de $\C\setminus\{0\}$ homotope au cercle unité dans $\C\setminus\{0\}$ a une intégrale $2i\pi$ : c'est la notion d'indice ([[ch02-indice-def]], [[ch02-indice-invariance-homotopie]]).

2. **Un carré contre un cercle.** Toujours $f(z)=1/z$. Le bord du carré $\{\max(|x|,|y|)\le1\}$, parcouru dans le sens direct, se paramètre radialement par $\sigma(t)=\rho(t)e^{2i\pi t}$, $t\in[0,1]$, avec $\rho(t)=1/\max(|\cos2\pi t|,|\sin2\pi t|)\in[1,\sqrt2]$ (distance de $0$ au bord du carré dans la direction $e^{2i\pi t}$) ; $\sigma$ est continue et $C^1$ par morceaux, donc c'est un lacet. L'homotopie linéaire $\gamma(s,t)=(1-s)\gamma_0(t)+s\,\sigma(t)=\big((1-s)+s\rho(t)\big)e^{2i\pi t}$ a un module $\ge1$, donc est une homotopie de lacets dans $\C\setminus\{0\}$ entre le cercle $\gamma_0$ et le carré $\sigma$. Conclusion : $\int_\sigma dz/z=\int_{\gamma_0}dz/z=2i\pi$, sans aucun calcul sur les quatre côtés.

3. **Ce que le théorème ne dit pas.** Pour $f(z)=1/z$, le cercle unité et le lacet constant $1$ sont homotopes dans $\C$ mais pas dans $\C\setminus\{0\}$ ; le théorème ne s'applique pas et en effet $2i\pi\ne0$. C'est précisément l'obstruction qui mesure les résidus ([[ch02-formule-residus]]).

## Pièges

* > ⚠️ L'homotopie doit rester dans **le domaine d'holomorphie de $f$** : si $f$ a un pôle dans la zone balayée, le théorème est faux (exemple 3). Avant d'invoquer le théorème, toujours préciser l'ouvert $\Omega$ et vérifier que $f\in\Hol(\Omega)$ **et** que $\gamma([0,1]^2)\subset\Omega$.
* > ⚠️ Il faut une homotopie **de lacets** ($\gamma(s,0)=\gamma(s,1)$). Une homotopie à extrémités libres entre deux lacets ne suffit pas (H2).
* Les courbes intermédiaires $\gamma(s,\cdot)$ n'ont pas besoin d'être des chemins : on ne demande que la continuité de $\gamma$. C'est ce qui rend la preuve technique (chemins affines par morceaux) mais aussi le théorème très maniable.
* L'énoncé ne dit pas que les intégrales sont nulles, seulement qu'elles sont **égales**. Elles sont nulles si $\gamma_1$ est constant, d'où [[ch02-cauchy-simplement-connexe]] sur un ouvert simplement connexe.
* Dans le grillage, l'annulation des côtés intérieurs vient de l'orientation : chaque segment est parcouru dans les deux sens. Si l'on orientait les carreaux au hasard, rien ne se simplifierait.
* Le nombre de Lebesgue et le théorème de Heine sont les deux arguments de compacité ; ils ne servent qu'à garantir l'existence d'un pas $1/n$ uniforme. Sans compacité (par exemple une « homotopie » définie sur $[0,1[\,\times[0,1]$), l'argument s'effondre.
