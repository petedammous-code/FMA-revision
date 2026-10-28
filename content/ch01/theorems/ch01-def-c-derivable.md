---
id: ch01-def-c-derivable
type: definition
chapter: 1
title: Dérivée au sens complexe ($\C$-dérivabilité) en un point
ref: non numéroté, section I.1, p. 5
page: 5
importance: 2
depends: []
tags: [derivee, c-derivable, taux-accroissement, definition]
---
## Intuition

> 💡 C'est **exactement** la définition de la dérivée vue au lycée, mais où la variable et l'accroissement sont des nombres complexes : on regarde le taux d'accroissement $\dfrac{f(z+\omega)-f(z)}{\omega}$ et on demande qu'il ait une limite quand $\omega\to0$.

Toute la différence avec le cas réel est cachée dans « $\omega\to0$ » : en réel, $t$ ne peut tendre vers $0$ que par la gauche ou par la droite ; en complexe, $\omega$ peut arriver vers $0$ **de toutes les directions du plan** (le long de l'axe réel, de l'axe imaginaire, d'une diagonale, en spirale...). Exiger que la limite soit la même dans toutes ces directions est une contrainte très forte : c'est elle qui rendra les fonctions holomorphes si rigides.

Image mentale : près de $z$, $f(z+\omega)\approx f(z)+f'(z)\,\omega$ ; multiplier par le nombre complexe $f'(z)$, c'est tourner d'un angle $\arg f'(z)$ et dilater d'un facteur $|f'(z)|$. Une fonction $\C$-dérivable se comporte donc, à l'échelle microscopique, comme une rotation suivie d'une homothétie (voir [[ch01-similitude-conforme]]).

Notations : $\Omega$ désigne un **ouvert** de $\C$ (pour tout $z\in\Omega$ il existe $r>0$ tel que le disque ouvert $D(z,r)=\{w\in\C,\ |w-z|<r\}$ soit contenu dans $\Omega$).

## Énoncé

**Définition (poly, section I.1, p. 5, non numérotée).** Soit $\Omega$ un ouvert non vide de $\C$ et $f:\Omega\to\C$ une fonction continue. On dit que $f$ est **$\C$-dérivable**, ou encore **dérivable au sens complexe**, en un point $z\in\Omega$ si
$$
\lim_{\omega\to 0}\frac{f(z+\omega)-f(z)}{\omega}
$$
existe (dans $\C$). Si tel est le cas, on note $f'(z)$ cette limite, la **dérivée au sens complexe** de $f$ au point $z$.

Précision : la limite est prise pour $\omega\in\C\setminus\{0\}$ avec $z+\omega\in\Omega$, et $\omega\to0$ **dans $\C$** ; autrement dit, $f$ est $\C$-dérivable en $z$, de dérivée $\ell=f'(z)$, si et seulement si
$$
\forall\eps>0,\ \exists\delta>0,\ \forall\omega\in\C,\quad 0<|\omega|<\delta\ \Longrightarrow\ \left|\frac{f(z+\omega)-f(z)}{\omega}-\ell\right|\le\eps .
$$

## Hypothèses

### H1 — $\Omega$ est ouvert

**Rôle.** Si $z\in\Omega$ et $\Omega$ est ouvert, il existe $r>0$ avec $D(z,r)\subset\Omega$ : le taux d'accroissement est alors défini pour **tous** les $\omega$ tels que $0<|\omega|<r$, donc on peut réellement faire tendre $\omega$ vers $0$ dans toutes les directions. Sur une partie non ouverte (un segment, par exemple), « $\omega\to0$ » ne testerait que certaines directions et la notion perdrait son sens.

### H2 — $f$ est continue

**Rôle.** C'est le cadre fixé par le poly. Cette hypothèse n'est en fait pas nécessaire pour définir la $\C$-dérivabilité en un point, et elle est **automatique en ce point** : si la limite $\ell$ existe, alors $f(z+\omega)-f(z)=\omega\cdot\frac{f(z+\omega)-f(z)}{\omega}\to 0\cdot\ell=0$, donc $f$ est continue en $z$.

### H3 — la limite est prise dans toutes les directions

**Rôle.** C'est le cœur de la définition. Restreindre $\omega$ à des réels $t$ donnerait seulement l'existence de la dérivée partielle $\frac{\partial f}{\partial x}(z)$ ; restreindre à $\omega=it$ donnerait $\frac{1}{i}\frac{\partial f}{\partial y}(z)$. La $\C$-dérivabilité impose que ces deux quantités soient égales : ce sont les conditions de Cauchy–Riemann ([[ch01-cauchy-riemann]]).

## Exemples

* **Les monômes.** Pour $f(z)=z^n$ ($n\ge1$), la formule du binôme donne, pour $\omega\ne0$,
$$
\frac{(z+\omega)^n-z^n}{\omega}=\sum_{k=1}^{n}\binom nk z^{n-k}\omega^{k-1}= n z^{n-1}+\omega\sum_{k=2}^{n}\binom nk z^{n-k}\omega^{k-2}\xrightarrow[\omega\to0]{} n z^{n-1}.
$$
Donc $z\mapsto z^n$ est $\C$-dérivable en tout point, de dérivée $nz^{n-1}$, exactement comme en réel.
* **La conjugaison $f(z)=\bar z$ n'est $\C$-dérivable nulle part.** Le taux vaut $\dfrac{\overline{z+\omega}-\bar z}{\omega}=\dfrac{\bar\omega}{\omega}$. Pour $\omega=t\in\R^*$ il vaut $1$ ; pour $\omega=it$, $t\in\R^*$, il vaut $\dfrac{-it}{it}=-1$. Deux limites différentes selon la direction : pas de limite. Pourtant $\bar z$ est, vue comme $(x,y)\mapsto(x,-y)$, une application linéaire de $\R^2$, donc aussi régulière que possible au sens réel.
* **$f(z)=|z|^2$ est $\C$-dérivable en $0$ et seulement en $0$.** En $0$ : $\dfrac{|\omega|^2}{\omega}=\bar\omega\to0$, donc $f'(0)=0$. En $z\ne0$ : $|z+\omega|^2-|z|^2=\bar z\omega+z\bar\omega+|\omega|^2$, donc le taux vaut $\bar z+z\,\dfrac{\bar\omega}{\omega}+\bar\omega$ ; il tend vers $\bar z+z$ le long de l'axe réel et vers $\bar z-z$ le long de l'axe imaginaire, deux valeurs distinctes car $z\ne0$. (Poly, Exemple I.2.7, p. 9 : [[ch01-exemple-zbar-rez-module]].)

## Pièges

* > ⚠️ La limite $\omega\to0$ se prend dans $\C$, pas seulement sur $\R$. Vérifier la limite le long de l'axe réel ne prouve **rien** (cf. $\bar z$, pour laquelle le taux vaut $1$ sur tout l'axe réel).
* Tester quelques directions permet de **réfuter** la $\C$-dérivabilité (deux directions, deux limites différentes), jamais de la **prouver**.
* $\C$-dérivable en un point n'est pas « holomorphe » : l'holomorphie demande la $\C$-dérivabilité en **tout point d'un ouvert** (et $f'$ continue), voir [[ch01-def-holomorphe]]. Ainsi $|z|^2$ est $\C$-dérivable en $0$ mais holomorphe sur aucun ouvert.
* $\C$-dérivable est beaucoup plus fort que « différentiable au sens réel » ([[ch01-def-differentiable-r2]]) : le lien exact est donné par [[ch01-c-derivable-ssi-df-c-lineaire]].
* On divise par le **nombre complexe** $\omega$, pas par $|\omega|$ : $\frac{f(z+\omega)-f(z)}{|\omega|}$ n'a en général pas de limite même pour $f(z)=z$ (il vaut $\omega/|\omega|$).
