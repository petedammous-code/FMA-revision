---
id: ch01-stabilite-operations
type: proposition
chapter: 1
title: Stabilité de l'holomorphie par combinaisons linéaires, produits, inverse et composition
ref: Proposition I.3.1
page: 10
importance: 2
depends: [ch01-formulaire-dz-dzbar, ch01-chaine-dz-dzbar, ch01-holomorphe-ssi-c1-et-dzbar-nul]
tags: [holomorphe, stabilite, produit, inverse, composition, algebre]
---
## Intuition

> 💡 Les fonctions holomorphes se manipulent comme les fonctions dérivables d'une variable réelle : sommes, produits, quotients (là où le dénominateur ne s'annule pas) et composées de fonctions holomorphes sont holomorphes. C'est ce qui permet de fabriquer immédiatement une foule d'exemples : polynômes, fractions rationnelles, $e^{z^2}$, $\frac{1}{1+z^2}$, $\tan z$...

Le mécanisme : être holomorphe, c'est être $C^1$ au sens réel **et** annulé par $\frac{\partial}{\partial\bar z} = \frac12\bigl(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\bigr)$ en tout point ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]). Le caractère $C^1$ est stable par toutes ces opérations, et les règles de calcul de $\frac{\partial}{\partial\bar z}$ ([[ch01-formulaire-dz-dzbar]], [[ch01-chaine-dz-dzbar]]) montrent que « être tué par $\frac{\partial}{\partial \bar z}$ » l'est aussi. On note $\Hol(\Omega)$ l'ensemble des fonctions holomorphes sur l'ouvert $\Omega$ ([[ch01-def-holomorphe]]).

## Énoncé

**Proposition (poly, Proposition I.3.1, p. 10).**

1. Les combinaisons linéaires et produits de fonctions holomorphes définies sur un même ouvert sont des fonctions holomorphes sur cet ouvert.
2. Si $f$ est holomorphe sur $\Omega$, alors $1/f$ est holomorphe sur l'ouvert $\{z\in\Omega,\ f(z)\neq0\}$ où $f$ ne s'annule pas.
3. Si $f\in\Hol(\Omega)$, $g\in\Hol(\Omega')$ et si $g(\Omega')\subset\Omega$, alors $f\circ g\in\Hol(\Omega')$.

En particulier, $\Hol(\Omega)$ est une $\C$-algèbre (un sous-espace vectoriel stable par produit, contenant les constantes).

## Hypothèses

### H1 — Les fonctions sont holomorphes sur un **même** ouvert (point 1)

**Rôle.** Pour que $\lambda f + \mu g$ et $fg$ soient définies en chaque point.

**Si on la retire.** Hypothèse de cadre : si $f\in\Hol(\Omega_1)$ et $g\in\Hol(\Omega_2)$, on applique le résultat aux restrictions sur l'ouvert $\Omega_1\cap\Omega_2$ (une restriction à un ouvert plus petit d'une fonction holomorphe reste holomorphe). On obtient $f+g$, $fg\in\Hol(\Omega_1\cap\Omega_2)$.

### H2 — On se place là où $f$ ne s'annule pas (point 2)

**Rôle.** $1/f$ n'est définie que là ; cet ensemble est ouvert car $f$ est continue, et (I.2.12) fait apparaître $f^2$ au dénominateur.

**Si on la retire.** $f(z) = z$ est holomorphe sur $\C$, mais $1/z$ n'est définie que sur $\C^\times$ et n'admet aucun prolongement holomorphe (ni même continu) à $\C$, car $|1/z|\to+\infty$ quand $z\to0$.

### H3 — $g(\Omega')\subset\Omega$ (point 3)

**Rôle.** Pour que $f\circ g$ soit définie sur tout $\Omega'$.

**Si on la retire.** $f(w) = 1/w$ sur $\Omega = \C^\times$ et $g(z) = z^2$ sur $\Omega' = \C$ : $f\circ g = 1/z^2$ n'est pas définie en $0$. Le résultat reste vrai sur l'ouvert $g^{-1}(\Omega) = \C^\times$ (ouvert car $g$ est continue).

### H4 — $f$ **et** $g$ holomorphes (point 3)

**Rôle.** Dans la règle de la chaîne, le terme $\bigl(\frac{\partial f}{\partial z}\circ g\bigr)\frac{\partial g}{\partial\bar z}$ est nul parce que $g$ est holomorphe, et le terme $\bigl(\frac{\partial f}{\partial \bar z}\circ g\bigr)\frac{\partial \bar g}{\partial\bar z}$ parce que $f$ l'est.

**Si on la retire.** Avec $f(w) = w^2$ (holomorphe) et $g(z) = \bar z$ ($C^\infty$ non holomorphe), $f\circ g = \bar z^2$ et $\frac{\partial\bar z^2}{\partial\bar z} = 2\bar z$ n'est pas identiquement nulle : $\bar z^2$ n'est holomorphe sur aucun ouvert non vide. Dans l'autre sens, $f(w) = \bar w$ et $g$ holomorphe donnent $\bar g$, qui n'est holomorphe que si $g$ est localement constante ([[ch01-module-conjugue-non-holomorphes]]). (Curiosité : $\bar w\circ\bar z = z$ est holomorphe ; deux fonctions non holomorphes peuvent avoir une composée holomorphe.)

## Idée de la preuve

On utilise le critère « holomorphe $\Leftrightarrow$ $C^1$ et $\partial/\partial\bar z = 0$ ». Le caractère $C^1$ est stable par les opérations usuelles ; et $\partial/\partial\bar z$ des combinaisons, produits, inverses et composées s'exprime (formulaire, règle de la chaîne) en fonction des $\partial f/\partial\bar z$, $\partial g/\partial\bar z$, qui sont nuls.

## Preuve

On utilise le critère [[ch01-holomorphe-ssi-c1-et-dzbar-nul|Remarque I.2.6]] : une fonction sur un ouvert est holomorphe si et seulement si elle est de classe $C^1$ (au sens réel) et annulée par $\frac{\partial}{\partial \bar z}$ en tout point.

*Point 1.* Soient $f,g\in\Hol(\Omega)$ et $\lambda,\mu\in\C$. Les fonctions $\lambda f+\mu g$ et $fg$ sont $C^1$ (leurs dérivées partielles, données par linéarité et par Leibniz, sont continues). Par (I.2.11) ([[ch01-formulaire-dz-dzbar]]),
$$
\frac{\partial (\lambda f+\mu g)}{\partial \bar z} = \lambda\frac{\partial f}{\partial \bar z}+\mu\frac{\partial g}{\partial \bar z} = 0, \qquad \frac{\partial (fg)}{\partial \bar z} = \frac{\partial f}{\partial \bar z}\,g + f\,\frac{\partial g}{\partial \bar z} = 0.
$$
Donc $\lambda f+\mu g$ et $fg$ sont holomorphes sur $\Omega$. (Le poly cite (I.2.10) ; ce sont les formules analogues (I.2.11) pour $\partial/\partial\bar z$ qui servent.)

*Point 2.* Comme $f$ est continue, $U = \{z\in\Omega,\ f(z)\neq0\}$ est un ouvert. Sur $U$, $1/f$ a pour dérivées partielles $-\frac{\partial f/\partial x}{f^2}$ et $-\frac{\partial f/\partial y}{f^2}$, qui sont continues : $1/f$ est $C^1$ sur $U$. Par (I.2.12),
$$
\frac{\partial (1/f)}{\partial \bar z} = -\frac{\partial f/\partial \bar z}{f^2} = 0 \quad\text{sur } U,
$$
donc $1/f\in\Hol(U)$.

*Point 3.* Soient $f\in\Hol(\Omega)$, $g\in\Hol(\Omega')$ avec $g(\Omega')\subset\Omega$. La composée de deux applications $C^1$ est $C^1$ (règle de la chaîne pour les différentielles, [[ch05-composition-differentielles]]), donc $f\circ g$ est $C^1$ sur $\Omega'$. Par le [[ch01-chaine-dz-dzbar|Lemme I.2.9]], pour $z\in\Omega'$,
$$
\frac{\partial (f\circ g)}{\partial \bar z}(z) = \underbrace{\frac{\partial f}{\partial z}(g(z))\,\frac{\partial g}{\partial \bar z}(z)}_{=0 \text{ car } g\in\Hol(\Omega')} + \underbrace{\frac{\partial f}{\partial \bar z}(g(z))\,\frac{\partial \bar g}{\partial \bar z}(z)}_{=0 \text{ car } f\in\Hol(\Omega),\ g(z)\in\Omega} = 0.
$$
Donc $f\circ g\in\Hol(\Omega')$. Enfin les constantes sont holomorphes (dérivée nulle), d'où la structure de $\C$-algèbre. $\square$

## Preuve à trous

Critère : holomorphe $\Leftrightarrow$ <trou indice="Remarque I.2.6">$C^1$ au sens réel et $\partial/\partial\bar z = 0$ en tout point</trou>.

*Point 1.* $\lambda f+\mu g$ et $fg$ sont $C^1$, et par (I.2.11) $\frac{\partial (fg)}{\partial \bar z} =$ <trou>$\frac{\partial f}{\partial \bar z}g + f\frac{\partial g}{\partial \bar z} = 0$</trou> (de même pour la combinaison linéaire).

*Point 2.* $U=\{f\neq0\}$ est ouvert car <trou>$f$ est continue</trou> ; $1/f$ est $C^1$ sur $U$ et $\frac{\partial (1/f)}{\partial \bar z} = -\frac{\partial f/\partial \bar z}{f^2} = 0$.

*Point 3.* $f\circ g$ est $C^1$ et, par la règle de la chaîne,
$$
\frac{\partial (f\circ g)}{\partial \bar z} = \Bigl(\frac{\partial f}{\partial z}\circ g\Bigr)\frac{\partial g}{\partial \bar z} + \Bigl(\frac{\partial f}{\partial \bar z}\circ g\Bigr)\frac{\partial \bar g}{\partial \bar z},
$$
où <trou indice="quel facteur s'annule dans chaque terme ?">le premier terme est nul car $\partial g/\partial\bar z = 0$ ($g$ holomorphe), le second car $\partial f/\partial\bar z = 0$ en $g(z)\in\Omega$ ($f$ holomorphe)</trou>. $\square$

## Exemples

* **Polynômes et fractions rationnelles.** $z\mapsto z$ et les constantes sont holomorphes sur $\C$, donc, par sommes et produits, tout polynôme $P\in\C[X]$ ; et $P/Q$ est holomorphe sur $\{Q\neq0\}$ ([[ch01-polynomes-fractions-rationnelles]]). Par exemple $\frac{1}{1+z^2}\in\Hol(\C\setminus\{i,-i\})$.
* **Composées avec l'exponentielle.** $\exp$ est holomorphe sur $\C$ ([[ch01-exp-trigo-hyperboliques]]), donc $e^{z^2}$, $e^{1/z}$ (sur $\C^\times$), $\cos z = \frac{e^{iz}+e^{-iz}}2$, $\sin z$ sont holomorphes.
* **$\tan$.** $\cos z = 0 \iff e^{2iz} = -1 \iff 2iz \in i\pi + 2i\pi\Z \iff z\in\frac\pi2+\pi\Z$. Donc $\tan = \sin\cdot\frac1{\cos}$ est holomorphe sur $\C\setminus(\frac\pi2+\pi\Z)$ : les seuls zéros complexes de $\cos$ sont ses zéros réels.

## Pièges

* > ⚠️ $\Hol(\Omega)$ n'est **pas** stable par conjugaison, partie réelle, module : $\bar z$, $\Re z$, $|z|$ ne sont holomorphes sur aucun ouvert ([[ch01-exemple-zbar-rez-module]], [[ch01-module-conjugue-non-holomorphes]]).
* $1/f$ n'est holomorphe que sur $\{f\neq0\}$ ; ne pas oublier de **retirer les zéros** de $f$ du domaine (ex. : $\tan$).
* Pour la composée, vérifier $g(\Omega')\subset\Omega$ ; sinon restreindre à l'ouvert $g^{-1}(\Omega)$.
* La réciproque d'une bijection holomorphe est holomorphe, mais ce n'est **pas** dans cette proposition : c'est un résultat plus fin ([[ch01-bijection-holomorphe-reciproque-holomorphe]]).
