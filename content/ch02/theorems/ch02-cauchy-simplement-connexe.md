---
id: ch02-cauchy-simplement-connexe
type: corollary
chapter: 2
title: Théorème de Cauchy sur un ouvert simplement connexe
ref: Corollaire II.2.2
page: 39
importance: 3
depends: [ch02-invariance-homotopie-integrale, ch02-homotopie-simplement-connexe]
tags: [cauchy, simplement-connexe, integrale-nulle, lacet]
---
## Intuition

> 💡 Sur un ouvert **sans trou**, l'intégrale d'une fonction holomorphe le long de n'importe quelle courbe fermée vaut $0$. C'est la version globale du fait local « $f$ a une primitive, donc $\int_\gamma f=F(\text{fin})-F(\text{début})=0$ sur un lacet » : dans un ouvert simplement connexe, on peut contracter le lacet sur un point sans rencontrer de singularité, et l'intégrale, invariante au cours de la contraction, finit par valoir $0$.

C'est **le** théorème de Cauchy du cours, celui qu'on invoque à chaque fois qu'on veut déformer ou refermer un contour (calculs d'intégrales, [[ch02-formule-residus]], [[ch02-rouche]]). Il dit aussi que, sur un ouvert simplement connexe, le seul obstacle à l'annulation d'une intégrale sur un lacet est la présence de **singularités** de $f$ : c'est ce que mesurent les résidus.

Rappels : $\Omega$ est **simplement connexe** s'il est connexe et si tout lacet de $\Omega$ est homotope, par une homotopie de lacets dans $\Omega$, à un lacet constant ([[ch02-homotopie-simplement-connexe]]) ; les ouverts étoilés (disques, demi-plans, $\C$, $\C\setminus\R_-$) le sont ([[ch02-etoile-simplement-connexe]]). $\Hol(\Omega)$ désigne l'ensemble des fonctions holomorphes sur $\Omega$ ([[ch01-def-holomorphe]]).

## Énoncé

**Corollaire (poly, Corollaire II.2.2, p. 39).** On suppose $\Omega$ simplement connexe. Alors, pour tout lacet $\gamma$ de $\Omega$ et pour toute fonction holomorphe $f\in\Hol(\Omega)$, on a
$$
\int_\gamma f(z)\,dz=0 .
$$

## Hypothèses

### H1 — $\Omega$ est simplement connexe

**Rôle.** C'est ce qui fournit l'homotopie de lacets, dans $\Omega$, entre $\gamma$ et un lacet constant, à laquelle on applique [[ch02-invariance-homotopie-integrale]].

**Si on la retire.** $\Omega=\C\setminus\{0\}$ (connexe, non simplement connexe), $f(z)=1/z\in\Hol(\Omega)$, $\gamma(t)=e^{2i\pi t}$ :
$$
\int_\gamma\frac{dz}{z}=\int_0^1\frac{2i\pi e^{2i\pi t}}{e^{2i\pi t}}\,dt=2i\pi\ne0 .
$$
Cet exemple est aussi la preuve que $\C\setminus\{0\}$ n'est pas simplement connexe.

### H2 — $f$ est holomorphe sur **tout** $\Omega$

**Rôle.** Le théorème d'invariance exige $f\in\Hol(\Omega)$ sur l'ouvert où vit l'homotopie ; l'intégrale sur le lacet constant est nulle quel que soit $f$.

**Si on la retire.** $\Omega=\C$ (simplement connexe), $\gamma=C(0,1)$ et $f(z)=1/z$, holomorphe sur $\C\setminus\{0\}$ seulement : $\int_\gamma dz/z=2i\pi$. De même $f(z)=\bar z$ (continue, non holomorphe) : $\int_\gamma\bar z\,dz=\int_0^{2\pi}e^{-i\theta}\,ie^{i\theta}\,d\theta=2i\pi$. Il ne suffit pas que $f$ soit holomorphe au voisinage de $\gamma$ : il faut l'holomorphie sur un ouvert simplement connexe **contenant** $\gamma$.

### H3 — $\gamma$ est un lacet

**Rôle.** La contraction d'un lacet sur un point est la définition de la simple connexité ; pour un chemin non fermé, aucune homotopie de lacets n'existe.

**Si on la retire.** $f\equiv1$ sur $\C$ et $\gamma=[0,1]$ : $\int_\gamma dz=1\ne0$. Pour un chemin non fermé, la bonne conclusion est $\int_\gamma f=F(\gamma(b))-F(\gamma(a))$ avec $F$ une primitive, qui existe sur un ouvert simplement connexe ([[ch02-primitive-simplement-connexe]]).

## Idée de la preuve

Par simple connexité, $\gamma$ est homotope (homotopie de lacets dans $\Omega$) à un lacet constant $c$ ; le théorème d'invariance donne $\int_\gamma f=\int_c f$, et $\int_c f=0$ car $c'=0$.

## Preuve

Soit $\gamma$ un lacet de $\Omega$, que l'on paramètre par $[0,1]$ (un reparamétrage affine croissant ne change pas l'intégrale, [[ch01-integrale-reparametrage-oppose-concatenation]]). Comme $\Omega$ est simplement connexe, il existe par définition ([[ch02-homotopie-simplement-connexe]]) une homotopie de lacets $H:[0,1]^2\to\Omega$ entre $\gamma$ et un lacet constant $c:t\mapsto\omega$ ($\omega\in\Omega$). Puisque $f\in\Hol(\Omega)$, le théorème d'invariance par homotopie [[ch02-invariance-homotopie-integrale]] donne
$$
\int_\gamma f(z)\,dz=\int_c f(z)\,dz .
$$
Or $c$ est $C^1$ de dérivée nulle, donc ([[ch01-def-integrale-chemin]]) $\int_c f(z)\,dz=\int_0^1 f(\omega)\cdot0\,dt=0$. D'où $\int_\gamma f(z)\,dz=0$. $\square$

## Preuve à trous

Soit $\gamma$ un lacet de $\Omega$ paramétré par $[0,1]$. Par simple connexité, <trou indice="définition de simplement connexe">il existe une homotopie de lacets dans $\Omega$ entre $\gamma$ et un lacet constant $c\equiv\omega$</trou>. Comme $f\in\Hol(\Omega)$, <trou indice="Théorème II.2.1">le théorème d'invariance par homotopie donne $\int_\gamma f=\int_c f$</trou>. Enfin <trou indice="dérivée d'une constante">$\int_c f(z)\,dz=\int_0^1 f(\omega)\,c'(t)\,dt=0$ puisque $c'=0$</trou>. $\square$

## Exemples

1. **Fonctions entières.** Pour tout lacet $\gamma$ de $\C$ et toute fonction entière ($e^z$, $\cos z$, polynômes...), $\int_\gamma f(z)\,dz=0$. Par exemple $\int_{C(0,1)}e^{z}\,dz=0$, ce que confirme la primitive $e^z$ ([[ch01-integrale-primitive]]).

2. **$1/z$ sur un lacet qui n'entoure pas $0$.** Si $\gamma$ est un lacet contenu dans le demi-plan $\{\Re(z)>0\}$ (convexe, donc simplement connexe, [[ch02-etoile-simplement-connexe]]), alors $\int_\gamma dz/z=0$ car $1/z\in\Hol(\{\Re(z)>0\})$. Par exemple $\int_{C(2,1)}dz/z=0$. Comparer avec $\int_{C(0,1)}dz/z=2i\pi$ : la différence vient de ce que $C(0,1)$ n'est contenu dans aucun ouvert simplement connexe évitant $0$. En termes d'indice ([[ch02-indice-def]]) : $\Ind_0(C(2,1))=0$ et $\Ind_0(C(0,1))=1$.

3. **Déplacer un contour.** Soit $f$ holomorphe sur la bande $B=\{0<\Im(z)<2\}$ (convexe) et, pour $0<a<b<2$ et $R>0$, le rectangle $\gamma_R$ de sommets $-R+ia$, $R+ia$, $R+ib$, $-R+ib$. Le corollaire donne $\int_{\gamma_R}f=0$, c'est-à-dire
$$
\int_{-R}^{R}f(x+ia)\,dx-\int_{-R}^{R}f(x+ib)\,dx=-\int_{a}^{b}f(R+iy)\,i\,dy+\int_{a}^{b}f(-R+iy)\,i\,dy ,
$$
et si $f(\pm R+iy)\to0$ uniformément en $y\in[a,b]$ quand $R\to+\infty$ (avec intégrabilité sur les droites), on obtient $\int_\R f(x+ia)\,dx=\int_\R f(x+ib)\,dx$ : on peut « translater » le chemin d'intégration. C'est le mécanisme des calculs d'intégrales de Fourier ([[ch02-exemple-integrale-fourier]]).

## Pièges

* > ⚠️ Vérifier **les trois** hypothèses : $\Omega$ simplement connexe, $f$ holomorphe sur **tout** $\Omega$ (pas seulement près du lacet), $\gamma$ **fermé** et contenu dans $\Omega$. L'erreur classique : « $1/z$ est holomorphe sur le cercle, donc l'intégrale est nulle ».
* La réciproque « $\int_\gamma f=0$ pour tout lacet $\Rightarrow$ $\Omega$ simplement connexe » est hors de propos ici : le corollaire est une implication dans un seul sens. (Il est vrai en revanche que « $\int_\gamma f=0$ pour tout lacet » équivaut à « $f$ admet une primitive sur $\Omega$ », voir [[ch02-primitive-simplement-connexe]].)
* Le corollaire ne demande rien sur la régularité de l'homotopie : il suffit de **savoir** qu'elle existe (simple connexité) ; en pratique, on l'obtient par [[ch02-etoile-simplement-connexe]].
* Si $\Omega$ n'est pas simplement connexe, l'intégrale n'est pas forcément non nulle ! Dans $\C\setminus\{0\}$, $\int_{C(0,1)}z^n\,dz=0$ pour tout $n\in\Z\setminus\{-1\}$ (primitive $z^{n+1}/(n+1)$). Seules les fonctions sans primitive, comme $1/z$, voient le trou.
* Pour un lacet dans un ouvert non simplement connexe, on utilise à la place le théorème d'invariance par homotopie ou la formule des résidus ([[ch02-formule-residus]]).
