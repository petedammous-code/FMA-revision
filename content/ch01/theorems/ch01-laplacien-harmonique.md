---
id: ch01-laplacien-harmonique
type: proposition
chapter: 1
title: "Laplacien $\Delta=4\,\partial^2/\partial z\partial\bar z$ ; parties réelle et imaginaire d'une fonction holomorphe sont harmoniques"
ref: Remarque I.2.8
page: 9
importance: 2
depends: [ch01-operateurs-dz-dzbar, ch01-cauchy-riemann, ch01-holomorphe-ssi-c1-et-dzbar-nul, ch01-holomorphe-analytique, ch05-lemme-schwarz]
tags: [laplacien, harmonique, schwarz, partie-reelle, dz-dzbar]
---
## Intuition

> 💡 Le laplacien $\Delta u = \frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}$ mesure l'écart entre la valeur de $u$ en un point et sa **moyenne** sur les petits cercles autour. Une fonction **harmonique** ($\Delta u = 0$) est « à l'équilibre » : température stationnaire, potentiel électrostatique sans charge, membrane tendue.

Le calcul clé est une factorisation, comme $a^2 + b^2 = (a - ib)(a+ib)$ :
$$
\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2} = \Bigl(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Bigr)\Bigl(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Bigr) = 2\frac{\partial}{\partial z}\cdot 2\frac{\partial}{\partial \bar z},
$$
où $\frac{\partial}{\partial z}$, $\frac{\partial}{\partial\bar z}$ sont les opérateurs de [[ch01-operateurs-dz-dzbar]]. Une fonction holomorphe est tuée par $\frac{\partial}{\partial\bar z}$, donc par $\Delta$ : ses parties réelle et imaginaire sont harmoniques. La géométrie holomorphe contient donc toute la physique des potentiels en dimension 2 (chapitre IV, [[ch04-holomorphe-implique-harmonique]]).

## Énoncé

**Proposition (poly, Remarque I.2.8, p. 9).** Le **laplacien** d'une fonction $u$ de classe $C^2$ sur un ouvert $\Omega$ de $\R^2$, à valeurs réelles ou complexes, est la fonction
$$
\Delta u := \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2},
$$
et $u$ est dite **harmonique** sur $\Omega$ lorsque $\Delta u = 0$ en tout point de $\Omega$.

1. Si $f:\Omega\to\C$ est de classe $C^2$ comme fonction des deux variables réelles $x$ et $y$, alors
$$
4\frac{\partial^2 f}{\partial z\,\partial\bar z} = \Bigl(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Bigr)\Bigl(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Bigr)f = \frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2} = \Delta f,
$$
autrement dit $\Delta = 4\dfrac{\partial^2}{\partial z\,\partial\bar z}$ (où $\frac{\partial^2 f}{\partial z\,\partial\bar z}$ désigne $\frac{\partial}{\partial z}\bigl(\frac{\partial f}{\partial\bar z}\bigr)$).
2. En particulier, si $f = P + iQ$ est holomorphe sur $\Omega$ et de classe $C^2$, alors $\Delta f = 0$, c'est-à-dire
$$
\Delta P = \Delta Q = 0 :
$$
les parties réelle et imaginaire d'une fonction holomorphe sont harmoniques. L'hypothèse $C^2$ est superflue : toute fonction holomorphe est de classe $C^\infty$ ([[ch01-holomorphe-analytique|Théorème I.7.4]]).

## Hypothèses

### H1 — $f$ de classe $C^2$ (point 1)

**Rôle.** Elle donne l'existence des dérivées secondes et, par le théorème de Schwarz ([[ch05-lemme-schwarz]]), l'égalité $\frac{\partial^2 f}{\partial x\partial y} = \frac{\partial^2 f}{\partial y\partial x}$, qui fait disparaître les termes croisés dans le développement du produit d'opérateurs.

**Si on la retire.** L'identité $\Delta = 4\frac{\partial^2}{\partial z\partial\bar z}$ peut tomber en défaut. Soit $f(x,y) = \dfrac{xy(x^2-y^2)}{x^2+y^2}$, $f(0,0) = 0$ (réelle, de classe $C^1$, dérivées secondes partout définies). On a $f(x,0) = 0$ et $f(0,y)=0$, donc $\frac{\partial f}{\partial x}(x,0) = 0$, $\frac{\partial f}{\partial y}(0,y) = 0$, d'où $\frac{\partial^2 f}{\partial x^2}(0,0) = \frac{\partial^2 f}{\partial y^2}(0,0) = 0$ et $\Delta f(0,0) = 0$. Mais $\frac{\partial f}{\partial x}(0,y) = \lim_{x\to0}\frac{y(x^2-y^2)}{x^2+y^2} = -y$ et $\frac{\partial f}{\partial y}(x,0) = \lim_{y\to0}\frac{x(x^2-y^2)}{x^2+y^2} = x$, donc $\frac{\partial}{\partial y}\frac{\partial f}{\partial x}(0,0) = -1$ et $\frac{\partial}{\partial x}\frac{\partial f}{\partial y}(0,0) = 1$. Alors
$$
4\frac{\partial^2 f}{\partial z\partial\bar z}(0) = \frac{\partial^2 f}{\partial x^2} + i\frac{\partial}{\partial x}\frac{\partial f}{\partial y} - i\frac{\partial}{\partial y}\frac{\partial f}{\partial x} + \frac{\partial^2 f}{\partial y^2} = 0 + i - i(-1) + 0 = 2i \neq 0 = \Delta f(0).
$$
(Cette $f$ n'est pas $C^2$ : ses dérivées croisées ne sont pas continues en $0$.)

Pour le point 2, l'hypothèse $C^2$ est **de confort** : la conclusion reste vraie pour toute $f$ holomorphe, car $f$ est alors $C^\infty$ par le Théorème I.7.4 ; c'est un résultat bien plus profond (formule de Cauchy).

### H2 — $f$ holomorphe sur un **ouvert** (point 2)

**Rôle.** On a besoin que $\frac{\partial f}{\partial\bar z}$ soit **identiquement nulle** sur un voisinage du point pour que sa dérivée $\frac{\partial}{\partial z}$ soit nulle.

**Si on la retire.** $f(z) = |z|^2 = x^2+y^2$ vérifie $\frac{\partial f}{\partial \bar z}(0) = 0$ (elle est $\C$-dérivable en $0$, [[ch01-exemple-zbar-rez-module]]) mais $\Delta f = 2 + 2 = 4\neq 0$ : l'annulation en un point ne se dérive pas.

## Idée de la preuve

Développer $(\partial_x - i\partial_y)(\partial_x + i\partial_y)f$ : les termes croisés $\pm i\,\partial_x\partial_y f$ se compensent grâce à Schwarz, il reste $\Delta f$. Si $f$ est holomorphe, $\partial f/\partial\bar z\equiv0$, donc $\Delta f = 0$, et l'on prend parties réelle et imaginaire.

## Preuve

*Point 1.* Comme $f$ est $C^2$, la fonction $\frac{\partial f}{\partial\bar z} = \frac12(\partial_x f + i\partial_y f)$ est de classe $C^1$ et l'on peut lui appliquer $\frac{\partial}{\partial z}$. Par $\C$-linéarité des dérivées partielles :
$$
\begin{aligned}
4\frac{\partial}{\partial z}\Bigl(\frac{\partial f}{\partial\bar z}\Bigr) &= \Bigl(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Bigr)\Bigl(\frac{\partial f}{\partial x}+i\frac{\partial f}{\partial y}\Bigr) \\
&= \frac{\partial^2 f}{\partial x^2} + i\,\frac{\partial}{\partial x}\frac{\partial f}{\partial y} - i\,\frac{\partial}{\partial y}\frac{\partial f}{\partial x} + \frac{\partial^2 f}{\partial y^2}.
\end{aligned}
$$
Par le théorème de Schwarz ([[ch05-lemme-schwarz]]), appliqué à $\Re f$ et $\Im f$ qui sont $C^2$, les deux dérivées croisées sont égales, donc les termes en $i$ se compensent et $4\frac{\partial^2 f}{\partial z\partial\bar z} = \Delta f$. (Le même calcul montre aussi $4\frac{\partial}{\partial\bar z}\frac{\partial f}{\partial z} = \Delta f$ : les deux opérateurs commutent sur les fonctions $C^2$.)

*Point 2.* Si $f$ est holomorphe sur $\Omega$, alors $\frac{\partial f}{\partial \bar z} = 0$ en tout point de $\Omega$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]], [[ch01-cauchy-riemann]]). La fonction $\frac{\partial f}{\partial\bar z}$ étant identiquement nulle sur l'ouvert $\Omega$, ses dérivées partielles sont nulles, donc $\Delta f = 4\frac{\partial}{\partial z}\bigl(\frac{\partial f}{\partial\bar z}\bigr) = 0$ sur $\Omega$. Écrivons $f = P+iQ$ avec $P$, $Q$ réelles et $C^2$. Les dérivées partielles commutent avec $\Re$ et $\Im$ (elles sont prises en des variables réelles), donc
$$
0 = \Delta f = \Delta P + i\,\Delta Q, \qquad \Delta P,\ \Delta Q \in \R,
$$
d'où $\Delta P = \Delta Q = 0$. Enfin, si $f$ est seulement supposée holomorphe, elle est $C^\infty$ par le [[ch01-holomorphe-analytique|Théorème I.7.4]] (sa dérivée $f'$ est encore holomorphe, donc $C^1$ par [[ch01-holomorphe-ssi-c1-et-dzbar-nul]], et l'on itère), et ce qui précède s'applique. $\square$

## Preuve à trous

*Point 1.* Pour $f$ de classe $C^2$,
$$
4\frac{\partial}{\partial z}\Bigl(\frac{\partial f}{\partial\bar z}\Bigr) = \Bigl(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Bigr)\Bigl(\frac{\partial f}{\partial x}+i\frac{\partial f}{\partial y}\Bigr) = \frac{\partial^2 f}{\partial x^2} + i\,\frac{\partial}{\partial x}\frac{\partial f}{\partial y} - i\,\frac{\partial}{\partial y}\frac{\partial f}{\partial x} + \frac{\partial^2 f}{\partial y^2}.
$$
Les termes croisés se compensent car <trou indice="symétrie des dérivées secondes">par le théorème de Schwarz ($f$ de classe $C^2$), $\frac{\partial}{\partial x}\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}\frac{\partial f}{\partial x}$</trou>, d'où $4\frac{\partial^2 f}{\partial z\partial\bar z} = \Delta f$.

*Point 2.* Si $f$ est holomorphe, <trou>$\frac{\partial f}{\partial\bar z}$ est identiquement nulle sur l'ouvert $\Omega$</trou>, donc sa dérivée $\frac{\partial}{\partial z}$ est nulle et $\Delta f = 0$. Avec $f = P+iQ$, <trou indice="le laplacien est à coefficients réels">$0 = \Delta f = \Delta P + i\Delta Q$ avec $\Delta P,\Delta Q$ réels</trou>, donc $\Delta P = \Delta Q = 0$. Le $C^2$ est automatique car <trou>toute fonction holomorphe est $C^\infty$ (Théorème I.7.4)</trou>. $\square$

## Exemples

* **$\Re(z^2)$ et $\Im(z^2)$.** $z^2 = (x^2 - y^2) + 2ixy$. On a $\Delta(x^2-y^2) = 2 - 2 = 0$ et $\Delta(2xy) = 0 + 0 = 0$. De même $\Re(e^z) = e^x\cos y$ : $\frac{\partial^2}{\partial x^2} = e^x\cos y$, $\frac{\partial^2}{\partial y^2} = -e^x\cos y$, somme nulle.
* **Calculer un laplacien avec $z$, $\bar z$.** Pour $k\ge1$, $|z|^{2k} = z^k\bar z^k$ et, par le formulaire ([[ch01-formulaire-dz-dzbar]]),
$$
\Delta |z|^{2k} = 4\frac{\partial}{\partial z}\bigl(k\,z^k\bar z^{k-1}\bigr) = 4k^2\,z^{k-1}\bar z^{k-1} = 4k^2|z|^{2k-2}.
$$
Contrôle pour $k=2$ : $(x^2+y^2)^2$ a pour laplacien $(12x^2 + 4y^2) + (4x^2+12y^2) = 16(x^2+y^2)$ ✓.
* **$\log|z|$ est harmonique sur $\C^\times$, mais n'est la partie réelle d'aucune fonction holomorphe sur $\C^\times$.** Avec $\log|z| = \frac12\log(x^2+y^2)$ : $\frac{\partial}{\partial x} = \frac{x}{x^2+y^2}$, $\frac{\partial}{\partial y} = \frac{y}{x^2+y^2}$, donc $\frac{\partial\log|z|}{\partial z} = \frac{x-iy}{2|z|^2} = \frac{1}{2z}$, et $\frac{\partial}{\partial\bar z}\frac1{2z} = 0$ : $\Delta\log|z| = 0$. Si l'on avait $\log|z| = \Re F$ avec $F$ holomorphe sur $\C^\times$, alors (en écrivant $F = P+iQ$, $\partial F/\partial\bar z = 0$ et $\partial\bar F/\partial z = \overline{\partial F/\partial\bar z} = 0$, d'où $\partial P/\partial z = i\,\partial Q/\partial z$) $F' = \frac{\partial F}{\partial z} = 2\frac{\partial P}{\partial z} = \frac1z$. Mais $\frac1z$ n'a pas de primitive sur $\C^\times$ car $\int_{C(0,1)}\frac{dz}{z} = 2i\pi\neq0$ ([[ch01-integrale-primitive]]) : contradiction. La réciproque « harmonique $\Rightarrow$ partie réelle d'une holomorphe » n'est vraie que sur des ouverts simplement connexes ([[ch04-harmonique-reelle-partie-reelle]]).

## Pièges

* > ⚠️ La réciproque est **fausse en général** : une fonction harmonique réelle n'est pas toujours la partie réelle d'une fonction holomorphe sur tout l'ouvert ($\log|z|$ sur $\C^\times$). Elle l'est localement (sur les disques) et sur les ouverts simplement connexes.
* $|f|$ ou $|f|^2$ ne sont pas harmoniques en général : $\Delta|z|^2 = 4$. Mais $\log|f|$ est harmonique là où $f$ holomorphe ne s'annule pas (localement, $\log|f| = \Re(\log f)$).
* Le produit de deux fonctions harmoniques n'est pas harmonique : $x$ et $x$ sont harmoniques, $\Delta(x^2) = 2$.
* Bien noter le facteur $4$ : $\Delta = 4\,\partial_z\partial_{\bar z}$ (et pas $2$ ni $1$), car $\partial_z = \frac12(\partial_x - i\partial_y)$.
