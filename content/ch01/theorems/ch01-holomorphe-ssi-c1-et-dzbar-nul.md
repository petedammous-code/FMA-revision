---
id: ch01-holomorphe-ssi-c1-et-dzbar-nul
type: proposition
chapter: 1
title: "Holomorphe $\Leftrightarrow$ de classe $C^1$ (réel) et $\partial f/\partial\bar z=0$ partout"
ref: Remarque I.2.6
page: 8
importance: 2
depends: [ch01-cauchy-riemann, ch01-def-holomorphe, ch01-c-derivable-ssi-df-c-lineaire, ch01-operateurs-dz-dzbar]
tags: [holomorphe, c1, cauchy-riemann, dzbar, critere]
---
## Intuition

> 💡 C'est **le test pratique d'holomorphie**. Au lieu de calculer une limite de taux d'accroissement complexe en chaque point, on vérifie deux choses « réelles » : (1) $f$ est de classe $C^1$ comme fonction de $(x,y)$ (ce qui se voit en général à l'œil : polynômes en $x,y$, exponentielles, ...) ; (2) l'opérateur $\dfrac{\partial}{\partial\bar z}$ tue $f$ en **tout** point.

Rappels. Pour $z = x+iy$, on note $\dfrac{\partial}{\partial z} = \dfrac12\Bigl(\dfrac{\partial}{\partial x} - i\dfrac{\partial}{\partial y}\Bigr)$ et $\dfrac{\partial}{\partial \bar z} = \dfrac12\Bigl(\dfrac{\partial}{\partial x} + i\dfrac{\partial}{\partial y}\Bigr)$ ([[ch01-operateurs-dz-dzbar]]). Une fonction $f:\Omega\to\C$ est **holomorphe** si elle est $\C$-dérivable en tout point de l'ouvert $\Omega$ et si $z\mapsto f'(z)$ est continue ([[ch01-def-holomorphe]]). Elle est **de classe $C^1$** (au sens réel) si elle est différentiable en tout point et si les quatre dérivées partielles $\frac{\partial P}{\partial x},\frac{\partial P}{\partial y},\frac{\partial Q}{\partial x},\frac{\partial Q}{\partial y}$ de $P=\Re f$, $Q=\Im f$ sont continues sur $\Omega$.

L'image : « $C^1$ au sens complexe » = « $C^1$ au sens réel » + « la différentielle est, en chaque point, une similitude directe » (c'est la condition $\partial f/\partial\bar z = 0$, [[ch01-cauchy-riemann]]).

## Énoncé

**Proposition (poly, Remarque I.2.6, p. 8).** Soient $\Omega$ un ouvert de $\C$ et $f:\Omega\to\C$.

1. Si $f$ est $\C$-dérivable en tout point de $\Omega$, alors l'application $z = x+iy\mapsto f'(z)$ est continue sur $\Omega$ si et seulement si $f$ est de classe $C^1$ comme fonction des deux variables réelles $x$ et $y$.
2. Ainsi, $f$ est holomorphe sur $\Omega$ si et seulement si $f$ est de classe $C^1$ sur $\Omega$ et $\dfrac{\partial f}{\partial\bar z} = 0$ en tout point de $\Omega$. Dans ce cas, $f' = \dfrac{\partial f}{\partial z}$ sur $\Omega$.

## Hypothèses

### H1 — $\Omega$ est un ouvert

**Rôle.** Les dérivées partielles et la $\C$-dérivée en $z$ sont des limites qui demandent que $f$ soit définie sur tout un voisinage de $z$.

**Si on la retire.** C'est une hypothèse de cadre : hors d'un ouvert, la limite $\lim_{\omega\to0}$ n'est prise que pour les $\omega$ qui restent dans l'ensemble, ce qui change tout. Par exemple, sur la partie non ouverte $\R\subset\C$, la restriction de $\Re z$ est $x\mapsto x$, dont le taux d'accroissement $\frac{(x+\omega)-x}{\omega}$ ($\omega$ réel) vaut $1$ : elle aurait une « dérivée complexe » égale à $1$ partout, alors que $\Re z$ n'est $\C$-dérivable en aucun point de $\C$ ([[ch01-exemple-zbar-rez-module]]). Et $\partial f/\partial y$ n'a pas de sens sur $\R$.

### H2 — $f$ est de classe $C^1$ (point 2)

**Rôle.** $C^1$ entraîne la différentiabilité en chaque point, qui est exactement ce dont le [[ch01-cauchy-riemann|Corollaire I.2.4]] a besoin pour transformer « $\partial f/\partial\bar z(z)=0$ » en « $f$ est $\C$-dérivable en $z$ » ; la continuité des dérivées partielles donne ensuite la continuité de $f' = \partial f/\partial z$.

**Si on la retire.** On ne peut pas la remplacer par « les dérivées partielles existent » : soit $f(z) = \exp(-z^{-4})$ pour $z\neq0$ et $f(0)=0$. Sur $\C^\times$, $f$ est holomorphe (composée de fonctions holomorphes, [[ch01-stabilite-operations]]), donc $\partial f/\partial\bar z = 0$. En $0$ : sur l'axe réel $f(x) = e^{-1/x^4}$ et sur l'axe imaginaire $f(iy) = e^{-1/(iy)^4} = e^{-1/y^4}$ (car $i^4=1$), d'où $\frac{\partial f}{\partial x}(0) = \lim_{x\to0} e^{-1/x^4}/x = 0$ et de même $\frac{\partial f}{\partial y}(0)=0$ : donc $\frac{\partial f}{\partial \bar z}(0) = 0$ aussi. Pourtant $f$ n'est même pas continue en $0$ : pour $z = re^{i\pi/4}$, $z^4 = -r^4$ et $|f(z)| = e^{1/r^4}\to+\infty$ quand $r\to0$. Elle n'est donc pas holomorphe sur $\C$.

*Honnêtement :* si l'on suppose $f$ seulement **différentiable** en tout point (sans continuité des dérivées partielles) et $\partial f/\partial\bar z=0$ partout, alors $f$ est $\C$-dérivable partout, donc holomorphe par le [[ch01-goursat|théorème de Goursat]] ; mais cela demande un théorème bien plus profond.

### H3 — $\partial f/\partial\bar z = 0$ en **tout** point de $\Omega$

**Rôle.** C'est la condition de Cauchy–Riemann, qui assure la $\C$-dérivabilité point par point.

**Si on la retire.** $f(z)=\bar z$ est $C^\infty$ mais $\partial\bar z/\partial\bar z = 1$ : elle n'est $\C$-dérivable nulle part. Et l'annulation en un seul point ne suffit pas : $f(z)=|z|^2$ est $C^\infty$, $\partial f/\partial\bar z = z$ s'annule en $0$ seulement, et $f$ n'est holomorphe sur aucun ouvert non vide ([[ch01-exemple-zbar-rez-module]]).

### H4 — $f$ est $\C$-dérivable en tout point (point 1)

**Rôle.** Elle fournit $f'$, et la relation entre $f'$ et les dérivées partielles.

**Si on la retire.** L'énoncé 1 n'a plus de sens ($f'$ n'existe pas) : $\bar z$ est $C^1$ et n'a de $\C$-dérivée en aucun point.

## Idée de la preuve

Si $f$ est $\C$-dérivable en $z$, sa différentielle est la multiplication par $f'(z)$, donc $\frac{\partial f}{\partial x} = f'$ et $\frac{\partial f}{\partial y} = if'$ : les dérivées partielles sont continues si et seulement si $f'$ l'est. Le point 2 s'en déduit avec le critère de Cauchy–Riemann « $\C$-dérivable $\Leftrightarrow$ différentiable et $\partial f/\partial\bar z=0$ ».

## Preuve

*Point 1.* Supposons $f$ $\C$-dérivable en tout point de $\Omega$. Par la [[ch01-c-derivable-ssi-df-c-lineaire|Proposition I.2.3]], $f$ est différentiable en tout point $z\in\Omega$ et $df_z$ est la multiplication par $f'(z)$. En particulier
$$
\frac{\partial f}{\partial x}(z) = df_z(1) = f'(z), \qquad \frac{\partial f}{\partial y}(z) = df_z(i) = i\,f'(z).
$$
En écrivant $f = P+iQ$ et en séparant parties réelle et imaginaire :
$$
\frac{\partial P}{\partial x} = \Re(f'),\quad \frac{\partial Q}{\partial x} = \Im(f'),\quad \frac{\partial P}{\partial y} = -\Im(f'),\quad \frac{\partial Q}{\partial y} = \Re(f').
$$
Comme $f$ est déjà différentiable partout, « $f$ de classe $C^1$ » signifie exactement que ces quatre fonctions sont continues, c'est-à-dire que $\Re(f')$ et $\Im(f')$ le sont, c'est-à-dire que $f'$ est continue.

*Point 2, sens direct.* Si $f$ est holomorphe, elle est $\C$-dérivable partout avec $f'$ continue, donc de classe $C^1$ par le point 1 ; et en chaque point, $f$ étant différentiable et $\C$-dérivable, le [[ch01-cauchy-riemann|Corollaire I.2.4]] donne $\frac{\partial f}{\partial \bar z}(z) = 0$.

*Point 2, réciproque.* Si $f$ est $C^1$ et $\frac{\partial f}{\partial \bar z}=0$ partout, alors $f$ est continue et différentiable en tout point, donc, par le Corollaire I.2.4, $\C$-dérivable en tout point avec $f'(z) = \frac{\partial f}{\partial z}(z) = \frac12\bigl(\frac{\partial f}{\partial x} - i\frac{\partial f}{\partial y}\bigr)(z)$. Cette fonction est continue car les dérivées partielles de $f$ le sont. Donc $f$ est holomorphe ([[ch01-def-holomorphe]]), et $f' = \partial f/\partial z$. $\square$

## Preuve à trous

*Point 1.* Si $f$ est $\C$-dérivable en $z$, la Proposition I.2.3 dit que <trou indice="que vaut la différentielle d'une fonction C-dérivable ?">$df_z$ est la multiplication par $f'(z)$</trou>. D'où
$\frac{\partial f}{\partial x}(z) = df_z(1) = f'(z)$ et $\frac{\partial f}{\partial y}(z) =$ <trou>$df_z(i) = i f'(z)$</trou>.
Donc $\frac{\partial P}{\partial x} = \Re(f')$, $\frac{\partial Q}{\partial x} = \Im(f')$, $\frac{\partial P}{\partial y} = -\Im(f')$, $\frac{\partial Q}{\partial y} = \Re(f')$, et les quatre dérivées partielles sont continues si et seulement si <trou>$f'$ est continue</trou>.

*Point 2.* Holomorphe $\Rightarrow$ $C^1$ par le point 1, et $\partial f/\partial\bar z = 0$ par le Corollaire I.2.4. Réciproquement, si $f$ est $C^1$ et $\partial f/\partial \bar z = 0$ partout, $f$ est différentiable partout, donc <trou indice="critère de Cauchy–Riemann">$\C$-dérivable partout avec $f' = \partial f/\partial z$</trou>, qui est <trou>continue comme combinaison des dérivées partielles continues $\frac12(\partial_x f - i\partial_y f)$</trou>. $\square$

## Exemples

* **L'exponentielle.** $f(x+iy) = e^x(\cos y + i\sin y)$ est $C^\infty$ sur $\R^2$. On a $\frac{\partial f}{\partial x} = f$ et $\frac{\partial f}{\partial y} = e^x(-\sin y + i\cos y) = i f$, donc
$$
\frac{\partial f}{\partial \bar z} = \frac12\bigl(f + i\cdot i f\bigr) = 0, \qquad f' = \frac{\partial f}{\partial z} = \frac12\bigl(f - i\cdot if\bigr) = f.
$$
Donc $f = \exp$ est holomorphe sur $\C$ et $\exp' = \exp$.
* **Un polynôme en $x, y$.** $f(x+iy) = x^3 - 3xy^2 + i(3x^2y - y^3)$ : $P_x = 3x^2-3y^2 = Q_y$ et $P_y = -6xy = -Q_x$. Les conditions de Cauchy réelles ont lieu partout et $f$ est $C^\infty$ : $f$ est holomorphe, $f' = P_x + iQ_x = 3(x^2 - y^2) + 6ixy = 3z^2$. (En effet $f(z) = z^3$.)
* **Un échec.** $f(x+iy) = x^2 + iy^2$ est $C^\infty$, et $\frac{\partial f}{\partial \bar z} = \frac12(2x + i\cdot 2iy) = x-y$ : $f$ est $\C$-dérivable exactement sur la droite $\{y=x\}$, qui ne contient aucun ouvert non vide, donc $f$ n'est holomorphe sur aucun ouvert non vide.

## Pièges

* > ⚠️ La condition $\partial f/\partial\bar z = 0$ doit avoir lieu **en tout point d'un ouvert**. Une annulation en un point (ou sur une droite) donne la $\C$-dérivabilité en ce point, jamais l'holomorphie.
* Ne pas oublier l'hypothèse $C^1$ (ou au moins la différentiabilité) : l'existence des dérivées partielles et les relations de Cauchy–Riemann ne suffisent pas (contre-exemple $\exp(-z^{-4})$ ci-dessus).
* $f' = \partial f/\partial z$ **seulement** quand $f$ est $\C$-dérivable ; pour une fonction quelconque, $\partial f/\partial z$ existe mais n'est pas une « dérivée complexe ».
* Le $C^1$ ici est au sens **réel** (en $(x,y)$) ; « $C^1$ au sens complexe » est la définition même d'holomorphe.
