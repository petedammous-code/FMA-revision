---
id: ch02-indice-cercle
type: proposition
chapter: 2
title: Indice d'un cercle : 1 à l'intérieur, 0 à l'extérieur
ref: Exemple II.3.3
page: 41
importance: 2
depends: [ch01-cauchy-formule-disque, ch02-indice-def, ch01-integrale-sur-cercle, ch01-cercle-sens-direct]
tags: [indice, cercle, serie geometrique, formule de cauchy]
---
## Intuition

> 💡 Un cercle parcouru une fois dans le sens trigonométrique fait **un tour** autour de chaque point intérieur et **aucun tour** autour d'un point extérieur : l'indice ([[ch02-indice-def]]) vaut $1$ dans le disque et $0$ dehors.

C'est le calcul de base de toute la théorie : on ramène ensuite l'indice d'un contour compliqué à celui d'un cercle par déformation continue ([[ch02-indice-invariance-homotopie]]). Deux outils suffisent : à l'intérieur, la formule intégrale de Cauchy ([[ch01-cauchy-formule-disque]]) appliquée à la fonction constante $1$ ; à l'extérieur, un développement en série géométrique, légitime parce que le rayon est plus petit que la distance du centre au point.

Notation : $C(a,r)$ désigne le cercle de centre $a$ et de rayon $r>0$, paramétré par $\theta\mapsto a+re^{i\theta}$, $\theta\in[0,2\pi]$, c'est-à-dire **parcouru dans le sens direct** ([[ch01-cercle-sens-direct]]) ; $D(a,r)$ est le disque ouvert et $\bar D(a,r)$ le disque fermé.

## Énoncé

**Proposition (poly, Exemple II.3.3, p. 41).** Soit $D=D(a,r)$ un disque (ouvert) de $\C$ et $C=\partial D=C(a,r)$ le bord de ce disque, parcouru dans le sens trigonométrique. Alors :

* pour tout $z_0\in D$, $\Ind_{z_0}(C)=1$ (la formule intégrale de Cauchy pour $f\equiv1$) ;
* pour tout $z_0\in\C\setminus\bar D$, $\Ind_{z_0}(C)=0$ (développement en série géométrique de $\theta\mapsto\dfrac1{1+\frac{re^{i\theta}}{a-z_0}}$).

## Hypothèses

### H1 — $C$ est parcouru dans le sens trigonométrique

**Rôle.** La formule de Cauchy du poly est énoncée pour le cercle parcouru dans le sens direct ; c'est elle qui donne la valeur $+1$.

**Si on la retire.** Si le cercle est parcouru dans le sens horaire, c'est le chemin opposé $C^{opp}$ et $\Ind_{z_0}(C^{opp})=-\Ind_{z_0}(C)$ ([[ch02-indice-def]]) : l'indice vaut $-1$ à l'intérieur (et toujours $0$ à l'extérieur). Vérification directe pour $a=z_0=0$, $r=1$, $\gamma(\theta)=e^{-i\theta}$ : $\dfrac1{2i\pi}\displaystyle\int_0^{2\pi}\frac{-ie^{-i\theta}}{e^{-i\theta}}\dd\theta=-1$.

### H2 — $z_0\notin C$, c'est-à-dire $z_0\in D$ ou $z_0\in\C\setminus\bar D$

**Rôle.** L'indice n'est défini que hors de l'image du lacet ([[ch02-indice-def]]). Les deux cas de l'énoncé recouvrent exactement $\C\setminus C$.

**Si on la retire.** Pour $z_0\in C$ l'intégrale $\int_0^{2\pi}\frac{ire^{i\theta}}{a+re^{i\theta}-z_0}\dd\theta$ diverge (l'intégrande a une singularité non intégrable en $1/|\theta-\theta_0|$ au point $\theta_0$ où $a+re^{i\theta_0}=z_0$).

## Idée de la preuve

Intérieur : la formule de Cauchy $f(z_0)=\frac1{2i\pi}\int_C\frac{f(z)}{z-z_0}\dd z$ avec $f\equiv1$ est exactement $\Ind_{z_0}(C)=1$. Extérieur : $\frac1{z-z_0}$ se développe en série géométrique normalement convergente en $\theta$ car $r<|a-z_0|$, et chaque terme $\int_0^{2\pi}e^{i(n+1)\theta}\dd\theta$, $n\ge0$, est nul.

## Preuve

**Cas $z_0\in D$.** La fonction constante $f\equiv1$ est holomorphe sur $\C$, donc sur un ouvert contenant $\bar D$. La formule intégrale de Cauchy sur le disque ([[ch01-cauchy-formule-disque]]) donne, pour tout $z_0\in D$,
$$
1=f(z_0)=\frac1{2i\pi}\int_{C}\frac{f(z)}{z-z_0}\,\dd z=\frac1{2i\pi}\int_C\frac{\dd z}{z-z_0}=\Ind_{z_0}(C).
$$

**Cas $z_0\in\C\setminus\bar D$.** On a $|a-z_0|>r$. Pour $z=a+re^{i\theta}\in C$,
$$
z-z_0=(a-z_0)+re^{i\theta}=(a-z_0)\left(1+\frac{re^{i\theta}}{a-z_0}\right),
$$
et $q:=\dfrac{r}{|a-z_0|}<1$. Comme $\left|\dfrac{re^{i\theta}}{a-z_0}\right|=q<1$, la série géométrique donne, pour tout $\theta\in[0,2\pi]$,
$$
\frac1{1+\frac{re^{i\theta}}{a-z_0}}=\sum_{n\ge0}(-1)^n\left(\frac{r}{a-z_0}\right)^n e^{in\theta},
$$
série **normalement convergente** en $\theta$ puisque le terme général est majoré en module par $q^n$, terme général d'une série convergente. Par la formule de l'intégrale sur un cercle ([[ch01-integrale-sur-cercle]]), $\dd z=ire^{i\theta}\dd\theta$, donc
$$
\Ind_{z_0}(C)=\frac1{2i\pi}\int_0^{2\pi}\frac{ire^{i\theta}}{(a-z_0)\big(1+\frac{re^{i\theta}}{a-z_0}\big)}\,\dd\theta
=\frac{1}{2\pi}\sum_{n\ge0}(-1)^n\frac{r^{n+1}}{(a-z_0)^{n+1}}\int_0^{2\pi}e^{i(n+1)\theta}\,\dd\theta ,
$$
l'interversion somme–intégrale étant justifiée par la convergence normale sur le segment $[0,2\pi]$. Or pour tout entier $k\ge1$, $\int_0^{2\pi}e^{ik\theta}\dd\theta=\left[\dfrac{e^{ik\theta}}{ik}\right]_0^{2\pi}=0$. Tous les termes sont nuls (ici $k=n+1\ge1$) : $\Ind_{z_0}(C)=0$. $\square$

*Variante du poly :* pour $z_0\notin\bar D$, la fonction $z\mapsto\frac1{z-z_0}$ est holomorphe sur le disque $D(a,|a-z_0|)$, qui contient $\bar D$ ; elle y admet une primitive holomorphe ([[ch01-primitive-locale]]), donc son intégrale sur le lacet $C$ est nulle ([[ch01-integrale-primitive]]). On peut aussi invoquer [[ch02-indice-entier-localement-constant]] : $z_0$ est dans la composante non bornée $\C\setminus\bar D$ de $\C\setminus C$.

## Preuve à trous

*Intérieur.* Pour $z_0\in D$, on applique <trou indice="quelle formule du chapitre I contient 1/(z−z0) sous une intégrale sur un cercle ?">la formule intégrale de Cauchy à la fonction constante $f\equiv1$</trou> : $1=\frac1{2i\pi}\int_C\frac{\dd z}{z-z_0}=\Ind_{z_0}(C)$.

*Extérieur.* Pour $z_0\notin\bar D$ et $z=a+re^{i\theta}$, on écrit $z-z_0=(a-z_0)\big(1+\frac{re^{i\theta}}{a-z_0}\big)$ et l'on développe <trou indice="pourquoi la série géométrique converge-t-elle ?">$\frac1{1+\frac{re^{i\theta}}{a-z_0}}=\sum_{n\ge0}(-1)^n\big(\frac{r}{a-z_0}\big)^ne^{in\theta}$, normalement convergente car $\frac{r}{|a-z_0|}<1$</trou>. Avec $\dd z=ire^{i\theta}\dd\theta$, on intervertit somme et intégrale et chaque terme contient <trou indice="intégrale d'une exponentielle sur une période">$\int_0^{2\pi}e^{i(n+1)\theta}\dd\theta=0$ puisque $n+1\ge1$</trou>. Donc $\Ind_{z_0}(C)=0$. $\square$

## Exemples

* **Calcul direct au centre.** Pour $C=C(0,1)$ et $z_0=0$ : $\Ind_0(C)=\dfrac1{2i\pi}\displaystyle\int_0^{2\pi}\frac{ie^{i\theta}}{e^{i\theta}}\dd\theta=\dfrac{2i\pi}{2i\pi}=1$. Pour $z_0=\tfrac12$, le calcul direct est moins agréable, mais la formule de Cauchy (ou la connexité du disque, [[ch02-indice-entier-localement-constant]]) donne encore $1$.
* **Un point extérieur, série explicite.** $C=C(0,1)$, $z_0=3$ : $\dfrac1{z-3}=-\dfrac13\cdot\dfrac1{1-z/3}=-\dfrac13\displaystyle\sum_{n\ge0}\frac{z^n}{3^n}$, normalement convergente sur $|z|=1$ (terme majoré par $3^{-n}$). Comme $\int_{C(0,1)}z^n\dd z=i\int_0^{2\pi}e^{i(n+1)\theta}\dd\theta=0$ pour $n\ge0$, on obtient $\Ind_3(C)=0$.
* **Point de vue « résidus ».** Pour $z_0\in D$, $\frac1{z-z_0}$ a un pôle simple en $z_0$ de résidu $1$ et aucune autre singularité : la formule des résidus ([[ch02-formule-residus]]) redonne $\int_C\frac{\dd z}{z-z_0}=2i\pi$, donc $\Ind_{z_0}(C)=1$. C'est circulaire en toute rigueur (la formule des résidus utilise l'indice), mais c'est le bon réflexe de calcul.

## Pièges

* > ⚠️ L'indice vaut $1$ à l'intérieur **seulement pour le sens direct** ; un paramétrage $\theta\mapsto a+re^{-i\theta}$ donne $-1$. Toujours vérifier l'orientation avant d'écrire « $\Ind=1$ ».
* Le développement en série géométrique n'est valable que si $r<|a-z_0|$, c'est-à-dire $z_0$ **strictement** à l'extérieur ; pour $z_0$ intérieur, on développerait plutôt en puissances de $\frac{z_0-a}{re^{i\theta}}$ et l'on retrouverait le terme $n=0$ qui vaut $1$.
* Ne pas confondre $\Ind_{z_0}(C)$ (une intégrale, un entier) avec $z_0\in D$ (une appartenance) : l'énoncé dit précisément que les deux coïncident pour un cercle, ce qui n'est plus vrai pour un lacet quelconque (indices $2$, $-1$, ou $0$ sur une composante bornée : voir [[ch02-indice-entier-localement-constant]]).
* Un cercle parcouru $k$ fois ($\theta\in[0,2k\pi]$) a pour indice $k$ à l'intérieur, pas $1$.
