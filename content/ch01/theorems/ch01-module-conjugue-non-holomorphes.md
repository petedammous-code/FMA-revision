---
id: ch01-module-conjugue-non-holomorphes
type: proposition
chapter: 1
title: "$|f|$ et $\bar f$ ne sont (essentiellement) jamais holomorphes"
ref: Remarque I.3.6
page: 13
importance: 2
depends: [ch01-cauchy-riemann, ch01-formulaire-dz-dzbar, ch01-holomorphe-ssi-c1-et-dzbar-nul, ch01-def-holomorphe, ch01-stabilite-operations]
tags: [conjugaison, module, rigidite, cauchy-riemann, connexite]
---
## Intuition

> 💡 Être holomorphe, c'est se comporter localement comme une **similitude directe** (rotation + homothétie, [[ch01-similitude-conforme]]). La conjugaison $w\mapsto\bar w$ est une **symétrie** : elle renverse l'orientation. Composer une fonction holomorphe non constante avec une symétrie détruit l'holomorphie. Quant au module $|f|$, il est à valeurs **réelles** : il envoie un ouvert dans une droite, ce qu'une similitude non nulle ne fait jamais.

Le mécanisme précis : une fonction holomorphe à valeurs réelles a une partie imaginaire nulle, donc, par Cauchy–Riemann ([[ch01-cauchy-riemann]]), toutes ses dérivées partielles sont nulles : elle est constante (sur chaque morceau connexe). Les opérations qui « ne voient » que des réels ($\Re$, $\Im$, $|\cdot|$) ou qui renversent l'orientation ($\bar{\ }$) sont donc **interdites** dans le monde holomorphe, contrairement à la somme, au produit, au quotient et à la composition ([[ch01-stabilite-operations]]).

Vocabulaire. Les **composantes connexes** d'un ouvert $\Omega$ sont ses plus grandes parties connexes ; ce sont des ouverts, et $\Omega$ en est la réunion disjointe. Par exemple $D(0,1)\cup D(3,1)$ a deux composantes connexes.

## Énoncé

**Proposition (poly, Remarque I.3.6, p. 13).** Soit $\Omega$ un ouvert de $\C$ et $f\in\Hol(\Omega)$. Les propriétés suivantes sont équivalentes :

1. la fonction complexe conjuguée $\bar f:z\mapsto\overline{f(z)}$ est holomorphe sur $\Omega$ ;
2. le module $|f|:z\mapsto|f(z)|$ est holomorphe sur $\Omega$ ;
3. $f$ est constante sur chaque composante connexe de $\Omega$.

Autrement dit (formulation du poly) : si $f$ est holomorphe, alors $|f|$ ou $\bar f$ ne sont essentiellement jamais holomorphes, sauf si $f$ est constante sur chaque composante connexe de son domaine.

*Lemme utilisé (poly, Exercice I.2.10 (1), p. 10).* Une fonction holomorphe définie sur un ouvert connexe et à valeurs réelles est constante.

## Hypothèses

### H1 — $f$ est holomorphe

**Rôle.** C'est ce qui donne $\frac{\partial f}{\partial\bar z}=0$ ; combiné à $\frac{\partial\bar f}{\partial\bar z}=0$, on obtient $f'=0$.

**Si on la retire.** $f(z)=\bar z$ n'est pas holomorphe ([[ch01-exemple-zbar-rez-module]]), et $\bar f(z)=z$ est holomorphe sans que $f$ soit constante. L'énoncé dit seulement qu'on ne peut pas avoir **à la fois** $f$ et $\bar f$ holomorphes (sauf constante).

### H2 — « constante sur chaque composante connexe » (et non « constante »)

**Rôle.** L'argument « dérivée nulle $\Rightarrow$ constante » n'est valable que sur un ouvert **connexe** ; sur un ouvert quelconque il donne seulement « localement constante », c'est-à-dire constante sur chaque composante connexe.

**Si on la retire.** Sur $\Omega=D(0,1)\cup D(3,1)$, la fonction $f$ égale à $0$ sur $D(0,1)$ et à $1$ sur $D(3,1)$ est holomorphe ($f'=0$), $\bar f=f$ et $|f|=f$ sont holomorphes, mais $f$ n'est pas constante sur $\Omega$.

## Idée de la preuve

Une fonction holomorphe $g$ à valeurs réelles vérifie $\Im g=0$, donc par Cauchy–Riemann $dg=0$ : $g$ est localement constante. On l'applique à $\Re f=\frac{f+\bar f}{2}$ et $\Im f=\frac{f-\bar f}{2i}$ si $\bar f$ est holomorphe, et à $|f|$ (puis à $\bar f=|f|^2/f$) si $|f|$ l'est.

## Preuve

**Lemme (Exercice I.2.10 (1)).** Soit $U$ un ouvert de $\C$ et $g\in\Hol(U)$ à valeurs réelles. Écrivons $g=P+iQ$ avec $Q=0$. Les conditions de Cauchy réelles ([[ch01-cauchy-riemann]]) donnent en tout point
$$
\frac{\partial P}{\partial x}=\frac{\partial Q}{\partial y}=0,\qquad\frac{\partial P}{\partial y}=-\frac{\partial Q}{\partial x}=0 .
$$
Donc $g$ est $C^1$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]) de différentielle nulle. Sur tout disque $D(z_0,r)\subset U$, pour $z\in D(z_0,r)$, la fonction $t\mapsto g(z_0+t(z-z_0))$ est $C^1$ sur $[0,1]$ de dérivée $dg_{z_0+t(z-z_0)}(z-z_0)=0$, donc $g(z)=g(z_0)$ : $g$ est **localement constante**. Si $U$ est connexe, l'ensemble $\{z\in U: g(z)=g(z_0)\}$ est non vide, fermé dans $U$ (continuité) et ouvert (locale constance), donc égal à $U$ : $g$ est constante. Sans connexité, on applique ceci à chaque composante connexe de $U$ (qui est un ouvert connexe).

**(3) $\Rightarrow$ (1) et (2).** Si $f$ est constante sur chaque composante connexe, $\bar f$ et $|f|$ le sont aussi ; une fonction localement constante est $\C$-dérivable de dérivée nulle (le taux d'accroissement est nul pour $\omega$ petit), donc holomorphe.

**(1) $\Rightarrow$ (3).** Si $\bar f\in\Hol(\Omega)$, alors $\Re f=\frac{f+\bar f}{2}$ et $\Im f=\frac{f-\bar f}{2i}$ sont holomorphes (combinaisons linéaires, [[ch01-stabilite-operations]]) et à valeurs réelles. Par le lemme, elles sont constantes sur chaque composante connexe de $\Omega$, donc $f=\Re f+i\Im f$ aussi.

*Variante :* par (I.2.9) ([[ch01-formulaire-dz-dzbar]]), $\frac{\partial\bar f}{\partial\bar z}=\overline{\frac{\partial f}{\partial z}}=\overline{f'}$ ; si $\bar f$ est holomorphe, ce terme est nul, donc $f'=0$ sur $\Omega$, et $f$ est localement constante (même argument que dans le lemme).

**(2) $\Rightarrow$ (3).** Supposons $|f|\in\Hol(\Omega)$. Comme $|f|$ est à valeurs réelles, le lemme montre que $|f|$ est constante sur chaque composante connexe $U$ de $\Omega$, disons $|f|=c\ge0$ sur $U$.
* Si $c=0$, alors $f=0$ sur $U$.
* Si $c>0$, $f$ ne s'annule pas sur $U$ et $f\bar f=|f|^2=c^2$, donc $\bar f=\frac{c^2}{f}$ est holomorphe sur $U$ (inverse d'une fonction holomorphe qui ne s'annule pas). Par (1) $\Rightarrow$ (3) appliqué sur l'ouvert connexe $U$, $f$ est constante sur $U$. $\square$

## Preuve à trous

**Lemme.** Si $g\in\Hol(U)$ est à valeurs réelles, $g=P+i\cdot0$, alors <trou indice="appliquer Cauchy–Riemann avec $Q=0$">$\partial_xP=\partial_yQ=0$ et $\partial_yP=-\partial_xQ=0$, donc $dg=0$</trou> ; $g$ est localement constante, donc constante sur chaque composante connexe (ensemble ouvert-fermé non vide).

**(1) $\Rightarrow$ (3).** Si $\bar f$ est holomorphe, alors <trou indice="fabriquer des fonctions holomorphes réelles à partir de $f$ et $\bar f$">$\Re f=\frac{f+\bar f}2$ et $\Im f=\frac{f-\bar f}{2i}$ sont holomorphes à valeurs réelles</trou>, donc constantes sur chaque composante connexe ; donc $f$ aussi.

**(2) $\Rightarrow$ (3).** Si $|f|$ est holomorphe, elle est réelle donc vaut une constante $c$ sur chaque composante connexe $U$. Si $c>0$, <trou indice="exprimer $\bar f$ à l'aide de $f$ et de $|f|$">$\bar f=\frac{|f|^2}{f}=\frac{c^2}{f}$ est holomorphe sur $U$</trou>, et on conclut par (1) $\Rightarrow$ (3) ; si $c=0$, $f=0$ sur $U$. $\square$

## Exemples

* **$f(z)=z$ sur $\C$.** $\bar f(z)=\bar z$ n'est $\C$-dérivable nulle part ([[ch01-exemple-zbar-rez-module]]). Et $|f|(z)=|z|=\sqrt{x^2+y^2}$ : en $z\neq0$, $P=|z|$, $Q=0$, et Cauchy–Riemann exigerait $\partial_xP=\frac{x}{|z|}=0$ et $\partial_yP=\frac{y}{|z|}=0$, impossible ; en $0$, $|z|$ n'est même pas différentiable. Donc $|z|$ n'est $\C$-dérivable en aucun point.
* **$f=\exp$.** $|e^z|=e^{\Re(z)}$ n'est pas holomorphe : à valeurs réelles et non constante sur le connexe $\C$, elle contredirait le lemme. De même $\overline{e^z}=e^{\bar z}$ n'est holomorphe sur aucun ouvert non vide (sinon $\exp$ serait constante sur cet ouvert, or $\exp'=\exp\neq0$).
* **Usage typique.** Si $f\in\Hol(\Omega)$, $\Omega$ connexe, et $\Re f$ est constante, alors $f$ est constante : $g=f-\Re f(z_0)$ est holomorphe à valeurs dans $i\R$, donc $-ig$ est holomorphe réelle, donc constante. Même conclusion si $\Im f$ ou $|f|$ est constante (pour $|f|$ : c'est exactement l'étape (2) $\Rightarrow$ (3), appliquée en remarquant que $|f|$ constante est holomorphe).

## Pièges

* > ⚠️ Ne jamais dériver $\bar f$, $|f|$, $\Re f$ ou $|f|^2$ comme des fonctions holomorphes ; pour les étudier, utiliser $\frac{\partial}{\partial z}$, $\frac{\partial}{\partial\bar z}$ ([[ch01-operateurs-dz-dzbar]]) : par exemple $\frac{\partial|f|^2}{\partial\bar z}=f\,\overline{f'}$ si $f$ est holomorphe.
* La conclusion est « constante sur chaque **composante connexe** », pas « constante » (contre-exemple H2).
* $\bar f$ n'est pas holomorphe, mais $z\mapsto\overline{f(\bar z)}$ **l'est** (deux symétries se compensent) : si $f(z)=\sum a_nz^n$, alors $\overline{f(\bar z)}=\sum\bar a_nz^n$.
* $|f|$ n'est pas holomorphe mais elle est très utile : c'est elle qu'on contrôle dans le principe du maximum ([[ch01-principe-maximum]]) et dans Liouville ([[ch01-liouville]]).
