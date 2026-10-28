---
id: ch01-exemple-zbar-rez-module
type: proposition
chapter: 1
title: "$\bar z$ et $\Re z$ ne sont $\C$-dérivables nulle part ; $|z|^2$ l'est en $0$ seulement"
ref: Exemple I.2.7
page: 9
importance: 2
depends: [ch01-cauchy-riemann, ch01-formulaire-dz-dzbar, ch01-def-holomorphe]
tags: [contre-exemple, conjugaison, partie-reelle, module, c-derivable]
---
## Intuition

> 💡 Ce sont **les contre-exemples de référence** du cours. La conjugaison $z\mapsto\bar z$ est une symétrie (par rapport à l'axe réel) : elle **renverse l'orientation**, alors qu'une fonction $\C$-dérivable agit localement comme une similitude **directe** (rotation + homothétie, [[ch01-similitude-conforme]]). Elle est donc infiniment régulière au sens réel mais jamais $\C$-dérivable.

Concrètement, le taux d'accroissement de $\bar z$ en $z$ est $\dfrac{\overline{z+\omega}-\bar z}{\omega} = \dfrac{\bar\omega}{\omega}$ : il vaut $1$ si $\omega$ est réel et $-1$ si $\omega$ est imaginaire pur. La limite quand $\omega\to0$ dépend de la direction : pas de dérivée complexe.

Le test rapide : une fonction différentiable (au sens réel) est $\C$-dérivable en $z$ si et seulement si $\frac{\partial f}{\partial\bar z}(z) = 0$ ([[ch01-cauchy-riemann]]), où $\frac{\partial}{\partial\bar z} = \frac12(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y})$. Et $|z|^2$ montre qu'**être $\C$-dérivable en un point** est bien plus faible qu'**être holomorphe sur un ouvert** ([[ch01-def-holomorphe]]).

## Énoncé

**Proposition (poly, Exemple I.2.7, p. 9).** On a, en tout point de $\C$,
$$
\frac{\partial\bar z}{\partial\bar z} = 1, \qquad \frac{\partial (z\bar z)}{\partial\bar z} = z, \qquad \frac{\partial}{\partial\bar z}\Re z = \frac{\partial}{\partial\bar z}\Bigl(\frac{z+\bar z}{2}\Bigr) = \frac12.
$$
Par conséquent :

1. les fonctions $z\mapsto\bar z$ et $z\mapsto \Re z$ ne sont $\C$-dérivables en aucun point de $\C$ ;
2. la fonction $z\mapsto |z|^2 = z\bar z$ est $\C$-dérivable en $0$ (avec dérivée $0$), et en aucun autre point ; elle n'est donc holomorphe sur aucun ouvert non vide.

La $\C$-dérivabilité en un point isolé est une propriété bien plus faible que l'holomorphie sur un ouvert.

## Hypothèses

### H1 — Les fonctions testées sont différentiables au sens réel

**Rôle.** Le critère « $\C$-dérivable en $z$ $\Leftrightarrow$ $\frac{\partial f}{\partial \bar z}(z) = 0$ » du [[ch01-cauchy-riemann|Corollaire I.2.4]] ne vaut que pour $f$ **différentiable** en $z$. Ici $\bar z = x - iy$, $\Re z = x$ et $|z|^2 = x^2+y^2$ sont des polynômes en $(x,y)$, donc $C^\infty$, et le critère s'applique.

**Si on la retire.** Le critère devient faux : $f(z) = \exp(-z^{-4})$, $f(0) = 0$, vérifie $\frac{\partial f}{\partial x}(0) = \frac{\partial f}{\partial y}(0) = 0$ (car $f(x) = e^{-1/x^4}$ et $f(iy) = e^{-1/y^4}$), donc « $\frac{\partial f}{\partial\bar z}(0) = 0$ », mais $f$ n'est pas continue en $0$ ($|f(re^{i\pi/4})| = e^{1/r^4}\to+\infty$), donc pas $\C$-dérivable en $0$. Voir [[ch01-holomorphe-ssi-c1-et-dzbar-nul]].

### H2 — « holomorphe » porte sur un ouvert

**Rôle.** Pour conclure que $|z|^2$ n'est holomorphe sur aucun ouvert non vide $U$, on utilise qu'un tel $U$ contient un point $z\neq0$ (un disque $D(z_0,r)$ n'est jamais réduit à $\{0\}$).

**Si on la retire.** Sur l'ensemble non ouvert $\{0\}$, $|z|^2$ « est $\C$-dérivable en tout point » : la notion d'holomorphie n'a d'intérêt que sur un ouvert.

## Idée de la preuve

On calcule $\frac{\partial}{\partial\bar z}$ avec le formulaire (linéarité, Leibniz) à partir de $\frac{\partial z}{\partial\bar z} = 0$ et $\frac{\partial \bar z}{\partial\bar z} = 1$, puis on applique le critère de Cauchy–Riemann à ces fonctions $C^\infty$ au sens réel.

## Preuve

*Calculs.* Pour $z = x+iy$ : $\bar z = x - iy$ a pour dérivées partielles $\frac{\partial\bar z}{\partial x} = 1$, $\frac{\partial\bar z}{\partial y} = -i$, d'où
$$
\frac{\partial\bar z}{\partial\bar z} = \frac12\bigl(1 + i\cdot(-i)\bigr) = 1, \qquad \text{et de même}\qquad \frac{\partial z}{\partial\bar z} = \frac12(1 + i\cdot i) = 0 .
$$
Par la règle de Leibniz (I.2.11) ([[ch01-formulaire-dz-dzbar]]) :
$$
\frac{\partial (z\bar z)}{\partial\bar z} = \frac{\partial z}{\partial\bar z}\,\bar z + z\,\frac{\partial\bar z}{\partial\bar z} = 0 + z = z,
$$
et par linéarité (I.2.11), puisque $\Re z = \frac{z+\bar z}{2}$ :
$$
\frac{\partial}{\partial\bar z}\Re z = \frac12\Bigl(\frac{\partial z}{\partial\bar z}+\frac{\partial\bar z}{\partial\bar z}\Bigr) = \frac12(0+1) = \frac12.
$$

*Conséquences.* Les trois fonctions $\bar z$, $\Re z$, $|z|^2$ sont polynomiales en $(x,y)$, donc de classe $C^1$ et différentiables en tout point. Par le [[ch01-cauchy-riemann|Corollaire I.2.4]], chacune est $\C$-dérivable en $z$ si et seulement si sa dérivée $\frac{\partial}{\partial\bar z}$ s'annule en $z$.

1. $\frac{\partial\bar z}{\partial\bar z} = 1\neq0$ et $\frac{\partial\Re z}{\partial\bar z} = \frac12\neq 0$ partout : $\bar z$ et $\Re z$ ne sont $\C$-dérivables en aucun point.
2. $\frac{\partial |z|^2}{\partial\bar z} = z$ s'annule si et seulement si $z = 0$ : $|z|^2$ est $\C$-dérivable en $0$ et en aucun autre point. Sa dérivée en $0$ est, par (I.2.7), $\frac{\partial (z\bar z)}{\partial z}(0) = \bar z\big|_{z=0} = 0$. Si $U$ est un ouvert non vide, il contient un point $z\neq0$ (il contient un disque $D(z_0,r)$ avec $r>0$, qui n'est pas réduit à $\{0\}$) ; en ce point $|z|^2$ n'est pas $\C$-dérivable, donc $|z|^2$ n'est pas holomorphe sur $U$ ([[ch01-def-holomorphe]]). $\square$

*Vérification directe.* Pour $\bar z$ : $\frac{\overline{z+\omega}-\bar z}{\omega} = \frac{\bar\omega}{\omega}$ vaut $1$ pour $\omega\in\R^\times$ et $-1$ pour $\omega\in i\R^\times$, donc n'a pas de limite en $0$. Pour $|z|^2$ en $0$ : $\frac{|\omega|^2-0}{\omega} = \bar\omega\to0$. En $z\neq0$ : $\frac{|z+\omega|^2-|z|^2}{\omega} = \frac{z\bar\omega + \bar z\omega + |\omega|^2}{\omega} = \bar z + z\frac{\bar\omega}{\omega} + \bar\omega$, qui tend vers $\bar z + z$ pour $\omega$ réel et vers $\bar z - z$ pour $\omega$ imaginaire pur ; ces limites diffèrent car $z\neq0$.

## Preuve à trous

On a $\frac{\partial\bar z}{\partial\bar z} = \frac12\bigl(\frac{\partial\bar z}{\partial x} + i\frac{\partial\bar z}{\partial y}\bigr) =$ <trou>$\frac12(1 + i\cdot(-i)) = 1$</trou> et $\frac{\partial z}{\partial\bar z} = 0$. Par Leibniz,
$$
\frac{\partial (z\bar z)}{\partial\bar z} = \frac{\partial z}{\partial\bar z}\bar z + z\frac{\partial\bar z}{\partial\bar z} = z,
$$
et par linéarité $\frac{\partial\Re z}{\partial\bar z} = \frac12$. Ces fonctions sont polynomiales en $(x,y)$, donc <trou indice="quelle hypothèse demande le critère de Cauchy–Riemann ?">différentiables au sens réel en tout point, de sorte que le Corollaire I.2.4 s'applique : $\C$-dérivable en $z$ $\Leftrightarrow$ $\partial f/\partial\bar z(z)=0$</trou>. Donc $\bar z$ et $\Re z$ ne sont $\C$-dérivables nulle part, et $|z|^2$ l'est <trou>exactement là où $z = 0$, c'est-à-dire en $0$ seulement</trou>. Enfin, un ouvert non vide <trou>contient un point non nul, où $|z|^2$ n'est pas $\C$-dérivable</trou> : $|z|^2$ n'est holomorphe sur aucun ouvert non vide. $\square$

## Exemples

* **Partie imaginaire.** $\Im z = \frac{z-\bar z}{2i}$, donc $\frac{\partial\Im z}{\partial\bar z} = \frac{0 - 1}{2i} = \frac{i}{2}\neq 0$ : $\Im z$ n'est $\C$-dérivable nulle part. Plus généralement, une fonction holomorphe à valeurs réelles sur un ouvert connexe est constante (poly, Exercice I.2.10, p. 10).
* **Une droite de $\C$-dérivabilité.** $f(x+iy) = x^2 + iy^2$ : $\frac{\partial f}{\partial \bar z} = \frac12(2x + i\cdot 2iy) = x - y$. Donc $f$ est $\C$-dérivable exactement sur la droite $\{y = x\}$, d'intérieur vide : holomorphe sur aucun ouvert non vide.
* **$\bar z^2$.** $\frac{\partial \bar z^2}{\partial\bar z} = 2\bar z$ : $\C$-dérivable en $0$ seulement (même phénomène que $|z|^2$). Directement, $\frac{\bar\omega^2}{\omega}$ a pour module $|\omega|\to0$.

## Pièges

* > ⚠️ « $f$ est $\C$-dérivable en $z_0$ » n'entraîne **pas** « $f$ est holomorphe au voisinage de $z_0$ » : $|z|^2$ en $0$. Les grands théorèmes (Cauchy, analyticité, zéros isolés...) demandent l'holomorphie **sur un ouvert**.
* $\bar z$ est $C^\infty$ au sens réel : la régularité réelle ne dit rien sur l'holomorphie. Ce qui compte est la **forme** de la différentielle (similitude directe ou non).
* Par conséquent $\bar f$, $\Re f$, $|f|$, $|f|^2$ ne sont en général pas holomorphes même si $f$ l'est ([[ch01-module-conjugue-non-holomorphes]]).
* Ne pas appliquer le critère $\partial f/\partial\bar z = 0$ à une fonction non différentiable (contre-exemple $\exp(-z^{-4})$ en $0$, voir H1).
