---
id: ch01-formules-derivation
type: proposition
chapter: 1
title: Dérivées complexes d'une somme, d'un produit, d'un quotient, d'une composée
ref: Formules (I.3.1)–(I.3.4)
page: 11
importance: 2
depends: [ch01-formulaire-dz-dzbar, ch01-chaine-dz-dzbar, ch01-cauchy-riemann, ch01-stabilite-operations]
tags: [derivee-complexe, produit, quotient, composition, formulaire]
---
## Intuition

> 💡 **Rien de nouveau** par rapport à la dérivation réelle : la dérivée complexe $f'$ obéit aux mêmes règles que la dérivée d'une fonction d'une variable réelle. La raison : pour une fonction holomorphe, $f' = \frac{\partial f}{\partial z}$, et l'opérateur $\frac{\partial}{\partial z}$ vérifie linéarité, Leibniz et (pour les holomorphes) une règle de la chaîne à un seul terme.

Rappels : pour $f$ $\C$-dérivable en $z$, $f'(z) = \lim_{\omega\to0}\frac{f(z+\omega)-f(z)}{\omega}$ ([[ch01-def-c-derivable]]) ; si $f$ est holomorphe, $f'(z) = \frac{\partial f}{\partial z}(z)$ et $\frac{\partial f}{\partial\bar z}(z) = 0$ ([[ch01-cauchy-riemann]]), où $\frac{\partial}{\partial z} = \frac12\bigl(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\bigr)$. Ces formules complètent la [[ch01-stabilite-operations|Proposition I.3.1]], qui dit que les fonctions obtenues sont holomorphes ; ici on **calcule** leur dérivée.

## Énoncé

**Proposition (poly, Formules (I.3.1)–(I.3.4), p. 10–11).** Soient $\Omega$, $\Omega'$ des ouverts de $\C$.

* Pour $f,g\in\Hol(\Omega)$ et $z\in\Omega$ :
$$
\text{(I.3.1)}\quad (f+g)'(z) = f'(z)+g'(z), \qquad \text{(I.3.2)}\quad (fg)'(z) = f'(z)g(z)+f(z)g'(z).
$$
* Si de plus $g(z)\neq0$ (formule valable sur l'ouvert $\{g\neq0\}$) :
$$
\text{(I.3.3)}\quad \Bigl(\frac fg\Bigr)'(z) = \frac{f'(z)g(z)-f(z)g'(z)}{g(z)^2}.
$$
* Pour $f\in\Hol(\Omega)$, $g\in\Hol(\Omega')$ avec $g(\Omega')\subset\Omega$, et $z\in\Omega'$ :
$$
\text{(I.3.4)}\quad (f\circ g)'(z) = f'(g(z))\,g'(z).
$$
* Pour tout $n\in\N\setminus\{0\}$, la dérivée complexe de $z\mapsto z^n$ est $z\mapsto n z^{n-1}$.

## Hypothèses

### H1 — $f$ et $g$ holomorphes

**Rôle.** Elle donne $f' = \partial f/\partial z$, et surtout elle annule le second terme $\bigl(\frac{\partial f}{\partial\bar z}\circ g\bigr)\frac{\partial\bar g}{\partial z}$ dans la règle de la chaîne ([[ch01-chaine-dz-dzbar]]).

**Si on la retire.** Pour des fonctions seulement $C^1$ au sens réel, le symbole $f'$ n'a pas de sens, et l'analogue naïf de (I.3.4) avec $\frac{\partial}{\partial z}$ est faux : $f(w) = \bar w$, $g(z) = \bar z$ donnent $f\circ g(z) = z$, donc $\frac{\partial (f\circ g)}{\partial z} = 1$, alors que $\bigl(\frac{\partial f}{\partial w}\circ g\bigr)\cdot\frac{\partial g}{\partial z} = 0\cdot0 = 0$.

*Honnêtement :* les formules (I.3.1)–(I.3.4) sont **ponctuelles** ; elles restent vraies dès que $f$ et $g$ sont $\C$-dérivables aux points concernés ($z$, et $g(z)$ pour $f$ dans (I.3.4)), avec la même preuve qu'en variable réelle (voir la variante ci-dessous). L'holomorphie est le cadre du poly.

### H2 — $g(z)\neq0$ pour le quotient

**Rôle.** $f/g$ doit être définie au voisinage de $z$ (c'est le cas car $\{g\neq0\}$ est ouvert) et l'on divise par $g(z)^2$.

**Si on la retire.** $f = 1$, $g(z) = z$ en $z=0$ : $1/z$ n'est pas définie en $0$.

### H3 — $g(\Omega')\subset\Omega$ pour la composée

**Rôle.** Pour que $f\circ g$ soit définie et que $f'$ soit évaluée en un point $g(z)$ où $f$ est holomorphe.

**Si on la retire.** La formule vaut sur l'ouvert $g^{-1}(\Omega)$ ; hors de cet ouvert, $f\circ g$ n'est pas définie.

## Idée de la preuve

Pour $f$ holomorphe, $f' = \partial f/\partial z$. Les formules (I.3.1)–(I.3.3) sont alors le formulaire (I.2.10)–(I.2.12) pour $\partial/\partial z$ ; (I.3.4) est la règle de la chaîne du Lemme I.2.9, dont le second terme s'annule ; $z^n$ s'obtient par récurrence avec la règle du produit.

## Preuve

Toutes les fonctions considérées sont holomorphes ([[ch01-stabilite-operations]]), donc leur dérivée complexe est leur dérivée $\frac{\partial}{\partial z}$ (formule (I.2.7), [[ch01-cauchy-riemann]]), et leur dérivée $\frac{\partial}{\partial \bar z}$ est nulle.

*(I.3.1)–(I.3.2).* Par (I.2.10) ([[ch01-formulaire-dz-dzbar]]) :
$$
(f+g)' = \frac{\partial (f+g)}{\partial z} = \frac{\partial f}{\partial z}+\frac{\partial g}{\partial z} = f'+g', \qquad (fg)' = \frac{\partial (fg)}{\partial z} = \frac{\partial f}{\partial z}g+f\frac{\partial g}{\partial z} = f'g+fg'.
$$

*(I.3.3).* Sur l'ouvert $\{g\neq0\}$, par (I.2.12), $\bigl(\frac1g\bigr)' = \frac{\partial(1/g)}{\partial z} = -\frac{\partial g/\partial z}{g^2} = -\frac{g'}{g^2}$. Puis, par (I.3.2) appliqué à $f\cdot\frac1g$ :
$$
\Bigl(\frac fg\Bigr)' = f'\cdot\frac1g + f\cdot\Bigl(-\frac{g'}{g^2}\Bigr) = \frac{f'g - fg'}{g^2}.
$$

*(I.3.4).* Par le [[ch01-chaine-dz-dzbar|Lemme I.2.9]], pour $z\in\Omega'$,
$$
(f\circ g)'(z) = \frac{\partial (f\circ g)}{\partial z}(z) = \frac{\partial f}{\partial z}(g(z))\,\frac{\partial g}{\partial z}(z) + \frac{\partial f}{\partial \bar z}(g(z))\,\frac{\partial \bar g}{\partial z}(z) = f'(g(z))\,g'(z) + 0,
$$
car $\frac{\partial f}{\partial\bar z}(g(z)) = 0$ ($f$ holomorphe sur $\Omega\ni g(z)$). (On a aussi $\frac{\partial\bar g}{\partial z} = \overline{\partial g/\partial\bar z} = 0$ par (I.2.9).)

*Puissances.* On a $\frac{\partial z}{\partial z} = \frac12(1 - i\cdot i) = 1$, donc $(z)' = 1 = 1\cdot z^0$. Si $(z^n)' = nz^{n-1}$, alors par (I.3.2) : $(z^{n+1})' = (z^n\cdot z)' = nz^{n-1}\cdot z + z^n\cdot 1 = (n+1)z^n$. Par récurrence, $(z^n)' = nz^{n-1}$ pour tout $n\ge1$. $\square$

*Variante (preuve directe, comme en réel).* Pour (I.3.2) : $\frac{f(z+\omega)g(z+\omega)-f(z)g(z)}{\omega} = \frac{f(z+\omega)-f(z)}{\omega}g(z+\omega) + f(z)\frac{g(z+\omega)-g(z)}{\omega}\to f'(z)g(z)+f(z)g'(z)$, car $g$ est continue en $z$. Pour (I.3.4) : $f(w+h) - f(w) = h\,(f'(w)+\eps(h))$ avec $\eps(h)\to0$ quand $h\to0$ (et $\eps(0) = 0$), en $w = g(z)$, $h = g(z+\omega)-g(z)$ ; donc $\frac{f(g(z+\omega))-f(g(z))}{\omega} = \frac{g(z+\omega)-g(z)}{\omega}\bigl(f'(g(z))+\eps(h)\bigr)\to g'(z)f'(g(z))$, car $h\to0$ par continuité de $g$.

## Preuve à trous

Pour $f$ holomorphe, <trou indice="formule (I.2.7)">$f' = \frac{\partial f}{\partial z}$ et $\frac{\partial f}{\partial \bar z} = 0$</trou>. Les formules (I.3.1)–(I.3.2) sont alors (I.2.10). Pour le quotient, $(1/g)' = \frac{\partial(1/g)}{\partial z} = -g'/g^2$, et par la règle du produit appliquée à <trou>$f\cdot\frac1g$ : $(f/g)' = \frac{f'}{g} - \frac{fg'}{g^2} = \frac{f'g-fg'}{g^2}$</trou>.

Pour la composée, la règle de la chaîne donne
$$
\frac{\partial (f\circ g)}{\partial z} = \Bigl(\frac{\partial f}{\partial z}\circ g\Bigr)\frac{\partial g}{\partial z} + \Bigl(\frac{\partial f}{\partial \bar z}\circ g\Bigr)\frac{\partial \bar g}{\partial z},
$$
et <trou indice="pourquoi le second terme disparaît-il ?">le second terme est nul car $\frac{\partial f}{\partial\bar z} = 0$ en $g(z)$, $f$ étant holomorphe</trou>, d'où $(f\circ g)' = (f'\circ g)\,g'$.

Pour les puissances : $(z)' = 1$ et, si $(z^n)' = nz^{n-1}$, <trou>$(z^{n+1})' = (z^n\cdot z)' = nz^{n-1}z + z^n = (n+1)z^n$</trou>. $\square$

## Exemples

* **Fraction rationnelle.** Sur $\C\setminus\{i,-i\}$, $\Bigl(\dfrac1{1+z^2}\Bigr)' = \dfrac{0\cdot(1+z^2) - 1\cdot 2z}{(1+z^2)^2} = -\dfrac{2z}{(1+z^2)^2}$. Et pour $n\ge1$, sur $\C^\times$, $(z^{-n})' = \frac{0\cdot z^n - n z^{n-1}}{z^{2n}} = -n z^{-n-1}$ : la formule $(z^k)' = kz^{k-1}$ vaut pour tout $k\in\Z$.
* **Composée.** $\bigl(e^{z^2}\bigr)' = e^{z^2}\cdot 2z$, avec $\exp' = \exp$ ([[ch01-exp-trigo-hyperboliques]]). De même $(e^{iz})' = ie^{iz}$, d'où, pour $\sin z = \frac{e^{iz}-e^{-iz}}{2i}$ et $\cos z = \frac{e^{iz}+e^{-iz}}2$ : $\sin' = \frac{ie^{iz}+ie^{-iz}}{2i} = \cos$ et $\cos' = \frac{ie^{iz}-ie^{-iz}}{2} = -\sin$.
* **Tangente.** Sur $\C\setminus(\frac\pi2+\pi\Z)$ (où $\cos$ ne s'annule pas), $\tan' = \frac{\cos\cdot\cos - \sin\cdot(-\sin)}{\cos^2} = \frac1{\cos^2} = 1+\tan^2$ (car $\cos^2+\sin^2 = 1$ sur $\C$, identité vraie pour les formules exponentielles).

## Pièges

* > ⚠️ $(f\circ g)' = (f'\circ g)\cdot g'$, **pas** $f'\circ g'$ ni $f'(z)g'(z)$ ; bien évaluer $f'$ au point $g(z)$.
* Ces formules sont réservées aux fonctions ($\C$-)dérivables : pour une fonction comme $\bar z$ ou $|z|^2$, il faut utiliser $\frac{\partial}{\partial z}$, $\frac{\partial}{\partial \bar z}$ et la règle de la chaîne à **deux** termes ([[ch01-chaine-dz-dzbar]]).
* Le quotient n'est dérivable que sur $\{g\neq0\}$ : penser à retirer les zéros du dénominateur (pour $\tan$, les $\frac\pi2+k\pi$, $k\in\Z$, qui sont les seuls zéros complexes de $\cos$).
