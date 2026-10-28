---
id: ch06-diffeomorphisme-def
type: definition
chapter: 6
title: $C^k$-difféomorphisme
ref: Définition VI.3.1
page: 119
importance: 2
depends: [ch05-classe-ck-def, ch05-composition-differentielles]
tags: [diffeomorphisme, bijection, classe-ck, inversion-locale, definition]
---
## Intuition

> 💡 Un **difféomorphisme** est un « changement de coordonnées » régulier dans les deux sens : une bijection entre deux ouverts qui est $C^k$, **et dont la réciproque est aussi $C^k$**. On peut transporter toute la géométrie différentielle (courbes, tangentes, régularité des fonctions) d'un côté à l'autre sans rien perdre. Exemple typique : les coordonnées polaires $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ sur un domaine convenable.

Le point important : la régularité de $f^{-1}$ **ne découle pas** de celle de $f$ (penser à $x\mapsto x^3$, dont la réciproque $x^{1/3}$ a une tangente verticale en $0$). Le théorème d'inversion locale ([[ch06-inversion-locale]]) dit exactement quand on l'obtient gratuitement : quand $df_a$ est inversible.

La classe $C^k$ sur un ouvert est définie en [[ch05-classe-ck-def]] ; un **espace de Banach** est un evn complet.

## Énoncé

**Définition (poly, Définition VI.3.1, p. 119).** Soit $f$ une application de $U$ dans $V$, où $U$ est un ouvert d'un espace de Banach $E$ et $V$ un ouvert d'un espace de Banach $F$. On dit que $f$ est un **$C^k$-difféomorphisme** si $f$ est une bijection de $U$ dans $V$, de classe $C^k$, ainsi que $f^{-1}$.

**Conséquence immédiate (condition nécessaire), $k\ge1$.** Si $f:U\to V$ est un $C^k$-difféomorphisme, alors pour tout $x\in U$, $df_x$ est un isomorphisme bicontinu de $E$ sur $F$, et
$$
d(f^{-1})_{f(x)}=(df_x)^{-1}.
$$
*Preuve.* $f^{-1}\circ f=\id_U$ et $f\circ f^{-1}=\id_V$ ; par la règle de la chaîne ([[ch05-composition-differentielles]]), $d(f^{-1})_{f(x)}\circ df_x=\id_E$ et $df_x\circ d(f^{-1})_{f(x)}=\id_F$. Donc $df_x\in\mathcal L(E;F)$ est bijective, d'inverse $d(f^{-1})_{f(x)}\in\mathcal L(F;E)$ continu. $\square$

## Hypothèses

### H1 — $U$ et $V$ ouverts

**Rôle.** La classe $C^k$ (pour $f$ **et** pour $f^{-1}$) n'est définie que sur des ouverts : il faut donc que l'**image** $V=f(U)$ soit ouverte pour que la régularité de $f^{-1}$ ait un sens.

**Si on l'oublie.** $f:\R\to\R^2$, $t\mapsto(t,0)$ est une bijection $C^\infty$ de $\R$ sur la droite $\R\times\{0\}$, d'inverse $(t,0)\mapsto t$ « régulier », mais $\R\times\{0\}$ n'est pas ouvert dans $\R^2$ : ce n'est pas un difféomorphisme au sens de la définition (cette situation relève des plongements, cf. [[ch06-immersion-submersion-def]]).

### H2 — $f^{-1}$ de classe $C^k$ (pas automatique)

**Rôle.** C'est la moitié de la définition ; c'est elle qui assure la condition nécessaire « $df_x$ inversible ».

**Si on la retire.** $f(x)=x^3$ est une bijection $C^\infty$ de $\R$ sur $\R$ (et un homéomorphisme), mais $f^{-1}(y)=y^{1/3}$ n'est pas dérivable en $0$ ($\frac{h^{1/3}}{h}=h^{-2/3}\to+\infty$) : $f$ n'est un $C^k$-difféomorphisme de $\R$ sur $\R$ pour aucun $k\ge1$. Cohérent avec la condition nécessaire : $f'(0)=0$ n'est pas inversible.

## Exemples

* **Exponentielle.** $\exp:\R\to\,]0,+\infty[$ est un $C^\infty$-difféomorphisme, d'inverse $\ln$, $C^\infty$ sur l'ouvert $]0,+\infty[$ ; et $(\ln)'(e^x)=e^{-x}=1/\exp'(x)$, comme le veut la formule $d(f^{-1})_{f(x)}=(df_x)^{-1}$.
* **Coordonnées polaires.** $P(r,\theta)=(r\cos\theta,r\sin\theta)$ est un $C^\infty$-difféomorphisme de l'ouvert $U=\,]0,+\infty[\times\,]-\pi,\pi[$ sur l'ouvert $V=\R^2\setminus\big(]-\infty,0]\times\{0\}\big)$, d'inverse $(x,y)\mapsto\big(\sqrt{x^2+y^2},\,2\arctan\frac{y}{x+\sqrt{x^2+y^2}}\big)$ ($C^\infty$ sur $V$, où $x+\sqrt{x^2+y^2}>0$). Son jacobien est $\det\begin{pmatrix}\cos\theta&-r\sin\theta\\ \sin\theta&r\cos\theta\end{pmatrix}=r>0$. Sur $]0,+\infty[\times\R$, $P$ reste $C^\infty$ de jacobien $r\ne0$ mais **n'est pas injective** ($\theta$ et $\theta+2\pi$ ont même image) : différentielle partout inversible ne suffit pas pour être un difféomorphisme global.
* **Isomorphismes linéaires.** Si $L:E\to F$ est un isomorphisme linéaire continu entre Banach, $L^{-1}$ est continu ([[ch05-isomorphisme-banach]]) et $L$, $L^{-1}$, linéaires continues, sont $C^\infty$ ([[ch05-lineaire-c-infini]]) : $L$ est un $C^\infty$-difféomorphisme de $E$ sur $F$.

## Pièges

* > ⚠️ Une bijection $C^k$ n'est pas forcément un $C^k$-difféomorphisme ($x^3$). Il faut vérifier la régularité de l'inverse — ou, plus simplement, que $df_x$ est inversible **en tout point** et utiliser le théorème d'inversion globale ([[ch06-inversion-globale]]).
* > ⚠️ « $df_x$ inversible en tout point » donne seulement un difféomorphisme **local** (inversion locale), pas global : il faut en plus l'injectivité (exemple des polaires sur $]0,+\infty[\times\R$, ou $z\mapsto e^z$ de $\C$ dans $\C^*$).
* Pour $k\ge1$, un $C^k$-difféomorphisme impose $E\simeq F$ (isomorphes via $df_x$) ; en dimension finie, $\dim E=\dim F$.
* Un $C^0$-difféomorphisme est simplement un homéomorphisme entre ouverts.
