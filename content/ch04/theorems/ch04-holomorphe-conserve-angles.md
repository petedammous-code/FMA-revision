---
id: ch04-holomorphe-conserve-angles
type: proposition
chapter: 4
title: Une fonction holomorphe à dérivée non nulle conserve les angles
ref: non numéroté, section IV.1, p. 75 (conservation des angles)
page: 75
importance: 2
depends: [ch01-c-derivable-ssi-df-c-lineaire, ch01-similitude-conforme, ch06-inversion-locale, ch05-composition-differentielles, ch04-transformation-conforme-def]
tags: [conforme, angles, similitude, tangente, jacobienne]
---
## Intuition

> 💡 Au premier ordre, $f(z_0+\omega)\approx f(z_0)+f'(z_0)\,\omega$ : près de $z_0$, $f$ agit comme la multiplication par le nombre complexe $f'(z_0)$, c'est-à-dire comme une **similitude directe** (zoom de rapport $|f'(z_0)|$ suivi d'une rotation d'angle $\arg f'(z_0)$). Une similitude tourne **tous** les vecteurs du même angle : l'angle entre deux d'entre eux ne change pas.

Un arc $\gamma$ passant par $z_0$ a pour vecteur tangent $\gamma'(0)$ ; l'arc image $f\circ\gamma$ a pour vecteur tangent $f'(z_0)\,\gamma'(0)$ (règle de dérivation des fonctions composées). Deux arcs se croisant en $z_0$ voient donc leurs deux tangentes multipliées par le **même** nombre complexe $f'(z_0)\neq0$ : le quotient des deux tangentes, dont l'argument est l'angle orienté ([[ch04-transformation-conforme-def]]), est inchangé.

Rappels : $f\in\Hol(\Omega)$ signifie que $f$ est holomorphe sur l'ouvert $\Omega$ ([[ch01-def-holomorphe]]) ; la différentielle réelle $df_{z_0}$ d'une fonction $\C$-dérivable en $z_0$ est la multiplication par $f'(z_0)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]) ; les notions d'**arc régulier** et d'**angle orienté** $\angle(u,v)=\arg(v/u)$ sont rappelées dans [[ch04-transformation-conforme-def]].

## Énoncé

**Proposition (poly, section IV.1, p. 75).** Soient $f\in\Hol(\Omega)$ et $z_0\in\Omega$ tel que $f'(z_0)\neq0$. Soient $\gamma_1,\gamma_2 : ]-1,1[\to\C$ deux arcs de classe $C^1$ qui passent par $z_0$ quand $t=0$ ($\gamma_j(0)=z_0$), réguliers au voisinage de $t=0$, c'est-à-dire $\gamma_j'(0)\neq0$ (on peut supposer $\gamma_j$ injectif pour $|t|$ assez petit d'après le théorème d'inversion locale). Alors :

1. pour $j=1,2$, l'arc image $f\circ\gamma_j$ (défini pour $|t|$ assez petit) est de classe $C^1$ et régulier en $t=0$, de vecteur tangent au point $f(z_0)$
$$
(f\circ\gamma_j)'(0) = f'(z_0)\,\gamma_j'(0)\neq0 ;
$$
2. l'angle orienté entre les tangentes à $\gamma_1$ et $\gamma_2$ en $z_0$ est égal à l'angle orienté entre les tangentes aux arcs images en $f(z_0)$ :
$$
\angle\big((f\circ\gamma_1)'(0),\,(f\circ\gamma_2)'(0)\big) = \angle\big(\gamma_1'(0),\,\gamma_2'(0)\big).
$$

En d'autres termes, la jacobienne de $f$ en $z_0$ est une similitude directe (la multiplication par $f'(z_0)$, Remarque I.2.5 du poly) : $f$ conserve les angles en $z_0$, c'est une **transformation conforme** au voisinage de $z_0$ ([[ch04-transformation-conforme-def]]).

## Hypothèses

### H1 — $f$ holomorphe (en fait : $\C$-dérivable en $z_0$)

**Rôle.** C'est ce qui fait de $df_{z_0}$ la multiplication par le nombre complexe $f'(z_0)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]), donc une similitude directe ([[ch01-similitude-conforme]]) : les deux tangentes sont multipliées par le même complexe. L'holomorphie sur tout $\Omega$ (continuité de $f'$) ne sert qu'à garantir que l'arc image est $C^1$ ; la seule $\C$-dérivabilité en $z_0$ suffit pour les tangentes en $t=0$.

**Si on la retire.** $F(x+iy)=x+2iy$ est $C^\infty$ et sa différentielle (la matrice $\mathrm{diag}(1,2)$) est inversible, mais elle n'est pas $\C$-linéaire. Les arcs $\gamma_1(t)=t$ et $\gamma_2(t)=t(1+i)$ ont des tangentes $1$ et $1+i$ d'angle $\pi/4$ ; les arcs images $t\mapsto t$ et $t\mapsto t(1+2i)$ ont des tangentes $1$ et $1+2i$ d'angle $\arctan2\approx1{,}107\neq\pi/4\approx0{,}785$. Et $F(z)=\bar z$ change $\angle(u,v)$ en $\angle(\bar u,\bar v)=-\angle(u,v)$ : les angles orientés sont renversés.

### H2 — $f'(z_0)\neq0$

**Rôle.** Deux usages : la tangente image $f'(z_0)\gamma_j'(0)$ est non nulle (l'arc image est régulier, l'angle est défini) et le facteur $f'(z_0)$ se **simplifie** dans le quotient $\dfrac{f'(z_0)\gamma_2'(0)}{f'(z_0)\gamma_1'(0)}$.

**Si on la retire.** $f(z)=z^2$ en $z_0=0$ : $(f\circ\gamma)'(0)=2\gamma(0)\gamma'(0)=0$ pour tout arc $\gamma$ passant par $0$, la tangente image dégénère. Géométriquement, la demi-droite d'angle $\theta$, $t\mapsto te^{i\theta}$ ($t>0$), est envoyée sur la demi-droite d'angle $2\theta$ : les angles sont doublés, et $z^n$ les multiplie par $n$. En un zéro de $f'$, $f$ n'est pas conforme.

### H3 — Arcs de classe $C^1$ et réguliers en $t=0$

**Rôle.** Hypothèse de définition : il faut des vecteurs tangents (classe $C^1$, ou au moins dérivabilité en $0$) non nuls pour parler d'angle entre les courbes. La régularité sert aussi à ce que la tangente image $f'(z_0)\gamma_j'(0)$ soit non nulle.

**Si on la retire.** Avec $\gamma_1(t)=t^3$ (trace $\R$, mais $\gamma_1'(0)=0$) et $\gamma_2(t)=it$, l'angle $\angle(\gamma_1'(0),\gamma_2'(0))$ n'est pas défini, et pas davantage celui des images. La conclusion garde un sens géométrique (la trace de $\gamma_1$ a pour tangente $\R$), mais il faut reparamétrer par un arc régulier ($t\mapsto t$) pour l'énoncer : l'hypothèse est de confort, pas de fond.

## Idée de la preuve

Dérivation des fonctions composées : $(f\circ\gamma_j)'(0)=df_{z_0}\big(\gamma_j'(0)\big)=f'(z_0)\,\gamma_j'(0)$. Le facteur commun $f'(z_0)\neq0$ se simplifie dans le quotient des deux tangentes, dont l'argument est l'angle orienté.

## Preuve

**Étape 0 : les arcs images sont définis.** $\Omega$ est ouvert et $\gamma_j$ est continu avec $\gamma_j(0)=z_0\in\Omega$ : il existe $\delta\in\,]0,1]$ tel que $\gamma_j(\,]-\delta,\delta[\,)\subset\Omega$ pour $j=1,2$. On travaille désormais sur $]-\delta,\delta[$ (quitte à reparamétrer par $t\mapsto\delta t$, ce qui multiplie les tangentes par le réel $\delta>0$ et ne change aucun angle, on retrouve un arc défini sur $]-1,1[$).

**Étape 1 : tangente de l'arc image.** Fixons $j$. Comme $f$ est $\C$-dérivable en $z_0$, elle est différentiable (au sens réel) en $z_0$ et sa différentielle est la multiplication par $f'(z_0)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]) :
$$
f(z_0+\omega) = f(z_0) + f'(z_0)\,\omega + |\omega|\,\eps(\omega),\qquad \eps(\omega)\xrightarrow[\omega\to0]{}0 .
$$
Par ailleurs $\gamma_j$ est dérivable en $0$ : $\gamma_j(t) = z_0 + t\,\gamma_j'(0) + t\,\eta(t)$ avec $\eta(t)\to0$. Posons $\omega(t):=\gamma_j(t)-z_0 = t\,(\gamma_j'(0)+\eta(t))$ ; alors $|\omega(t)|\le |t|\,(|\gamma_j'(0)|+|\eta(t)|)$ et $\omega(t)\to0$, donc
$$
f(\gamma_j(t)) - f(z_0) = t\,f'(z_0)\,\gamma_j'(0) + t\,\Big[f'(z_0)\,\eta(t) + \frac{|\omega(t)|}{t}\,\eps\big(\omega(t)\big)\Big],
$$
où le crochet tend vers $0$ quand $t\to0$ (le quotient $|\omega(t)|/t$ est borné et $\eps(\omega(t))\to0$). Ainsi $f\circ\gamma_j$ est dérivable en $0$ et
$$
(f\circ\gamma_j)'(0) = f'(z_0)\,\gamma_j'(0).
$$
C'est la règle de dérivation des fonctions composées ([[ch05-composition-differentielles]]) : $(f\circ\gamma_j)'(0)=df_{z_0}\big(\gamma_j'(0)\big)$. Le même calcul en tout $t\in\,]-\delta,\delta[$ donne $(f\circ\gamma_j)'(t)=f'(\gamma_j(t))\,\gamma_j'(t)$, fonction continue de $t$ car $f'$ et $\gamma_j'$ sont continues : l'arc image est de classe $C^1$.

**Étape 2 : régularité de l'arc image.** $f'(z_0)\neq0$ et $\gamma_j'(0)\neq0$, donc leur produit $(f\circ\gamma_j)'(0)$ est non nul : l'arc image est régulier en $t=0$, et l'angle entre les deux arcs images est bien défini.

**Étape 3 : conservation de l'angle.** Par définition de l'angle orienté ([[ch04-transformation-conforme-def]]),
$$
\angle\big((f\circ\gamma_1)'(0),(f\circ\gamma_2)'(0)\big) = \arg\frac{f'(z_0)\,\gamma_2'(0)}{f'(z_0)\,\gamma_1'(0)} = \arg\frac{\gamma_2'(0)}{\gamma_1'(0)} = \angle\big(\gamma_1'(0),\gamma_2'(0)\big),
$$
le facteur $f'(z_0)\neq0$ se simplifiant. Géométriquement, les deux tangentes ont été transformées par la même similitude directe $\omega\mapsto f'(z_0)\,\omega$, composée de l'homothétie de rapport $|f'(z_0)|$ et de la rotation d'angle $\arg f'(z_0)$ ([[ch01-similitude-conforme]]) : les longueurs sont multipliées par $|f'(z_0)|$ et les angles orientés sont conservés. $\square$

**Complément : la remarque du poly sur l'injectivité.** Si $\gamma'(0)\neq0$, l'une des deux coordonnées réelles de $\gamma'(0)$ est non nulle, disons $(\Re\gamma)'(0)\neq0$. La fonction réelle $\Re\gamma$ est de classe $C^1$ à dérivée non nulle en $0$ : par le théorème d'inversion locale en dimension $1$ ([[ch06-inversion-locale]]), elle est un $C^1$-difféomorphisme d'un voisinage de $0$ sur un intervalle ouvert, donc injective au voisinage de $0$, et $\gamma$ aussi. Un arc régulier ne « repasse » donc pas par le même point près de $t=0$ : sa trace est localement une vraie courbe, ce qui justifie de parler de « la » tangente à la courbe en $z_0$.

## Preuve à trous

Soit $\delta>0$ tel que $\gamma_j(\,]-\delta,\delta[\,)\subset\Omega$. Comme $f$ est $\C$-dérivable en $z_0$, elle est différentiable en $z_0$ et <trou indice="Proposition I.2.3 : que vaut $df_{z_0}$ ?">$df_{z_0}$ est la multiplication par $f'(z_0)$ : $f(z_0+\omega)=f(z_0)+f'(z_0)\omega+o(|\omega|)$</trou>. En composant avec $\gamma_j(t)=z_0+t\gamma_j'(0)+o(t)$, on obtient <trou indice="règle de dérivation des fonctions composées">$(f\circ\gamma_j)'(0)=df_{z_0}(\gamma_j'(0))=f'(z_0)\,\gamma_j'(0)$</trou>, et $(f\circ\gamma_j)'(t)=f'(\gamma_j(t))\gamma_j'(t)$ est continue : l'arc image est $C^1$. Il est régulier en $0$ car <trou>$f'(z_0)\neq0$ et $\gamma_j'(0)\neq0$, donc leur produit est non nul</trou>. Enfin
$$
\angle\big((f\circ\gamma_1)'(0),(f\circ\gamma_2)'(0)\big) = \arg\frac{f'(z_0)\gamma_2'(0)}{f'(z_0)\gamma_1'(0)},
$$
et <trou indice="que devient le facteur $f'(z_0)$ ?">le facteur commun $f'(z_0)\neq0$ se simplifie : il reste $\arg\big(\gamma_2'(0)/\gamma_1'(0)\big)=\angle(\gamma_1'(0),\gamma_2'(0))$</trou>. $\square$

## Exemples

* **$f(z)=z^2$ en $z_0=1$ et paraboles confocales.** $f'(1)=2$. Les arcs $\gamma_1(t)=1+t$ (tangente $1$) et $\gamma_2(t)=1+it$ (tangente $i$) ont pour images $1+2t+t^2$ et $1-t^2+2it$, de tangentes $2=f'(1)\cdot1$ et $2i=f'(1)\cdot i$ : l'angle droit est conservé. Globalement, la droite verticale $x=c$ ($c\neq0$) est envoyée sur la parabole $u=c^2-\dfrac{v^2}{4c^2}$ et la droite horizontale $y=c'$ ($c'\neq0$) sur la parabole $u=\dfrac{v^2}{4c'^2}-c'^2$ (avec $w=u+iv=f(z)$, car $u=x^2-y^2$, $v=2xy$). Ces deux familles de paraboles ont toutes le foyer $0$ et se coupent à angle droit : c'est l'image du grillage par une application conforme sur $\C^*$.
* **$f(z)=e^z$.** $f'(z)=e^z\neq0$ partout. Au point $z_0=x_0+iy_0$, les tangentes $1$ (horizontale) et $i$ (verticale) deviennent $e^{z_0}$ et $ie^{z_0}$, orthogonales. Les droites horizontales $y=c'$ sont envoyées sur les demi-droites $\arg w=c'$ et les droites verticales $x=c$ sur les cercles $|w|=e^c$ : rayons et cercles concentriques, orthogonaux.
* **$f(z)=1/z$ sur $\C^*$.** $f'(z)=-1/z^2\neq0$. La droite $x=c$ ($c\neq0$) a pour image le cercle de centre $\dfrac1{2c}$ et de rayon $\dfrac1{2|c|}$ : en effet, pour $z=c+iy$, $w=\dfrac{c-iy}{c^2+y^2}$ vérifie $|w|^2=\dfrac1{c^2+y^2}=\dfrac{\Re w}{c}$, soit $\big(u-\tfrac1{2c}\big)^2+v^2=\tfrac1{4c^2}$. De même $y=c'$ s'envoie sur le cercle de centre $-\dfrac{i}{2c'}$ et de rayon $\dfrac1{2|c'|}$. Les deux familles de cercles (tous passant par $0$, tangents aux axes) se coupent à angle droit aux images des points $c+ic'$, conformément à la proposition.

## Pièges

* > ⚠️ L'hypothèse $f'(z_0)\neq0$ est essentielle : en un point où $f-f(z_0)$ a un zéro d'ordre $m\ge2$, c'est-à-dire $f(z)-f(z_0)=a(z-z_0)^m+\dots$ avec $a\neq0$, les angles sont **multipliés par $m$** (car $f(z_0+te^{i\theta})-f(z_0)\sim a\,t^m e^{im\theta}$).
* Ce sont les angles **orientés** qui sont conservés ; $z\mapsto\bar z$ (non holomorphe) conserve les angles non orientés mais les renverse.
* Conforme n'est pas isométrique : les tangentes sont multipliées par $|f'(z_0)|$, qui dépend de $z_0$ ($|f'(z)|=e^x$ pour $\exp$).
* La conservation des angles est **ponctuelle**. Elle ne dit rien de l'injectivité globale : $\exp$ est conforme partout et non injective sur $\C$.
* Le vecteur tangent image est $f'(z_0)\gamma'(0)$, un **produit de nombres complexes** : ne pas le confondre avec $f'(\gamma'(0))$ ni avec $|f'(z_0)|\gamma'(0)$ (qui oublierait la rotation d'angle $\arg f'(z_0)$).
* « La jacobienne est une similitude » signifie que la matrice $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$ de $df_{z_0}$ (avec $f'(z_0)=\alpha+i\beta$) a pour déterminant $\alpha^2+\beta^2=|f'(z_0)|^2>0$ : l'orientation est préservée ([[ch01-similitude-conforme]]).
