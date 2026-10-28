---
id: ch01-exp-trigo-hyperboliques
type: proposition
chapter: 1
title: Exponentielle, fonctions trigonométriques et hyperboliques complexes
ref: Exemple I.3.5
page: 12
importance: 2
depends: [ch01-serie-entiere-holomorphe, ch01-stabilite-operations, ch01-formules-derivation, ch01-def-rayon-convergence]
tags: [exponentielle, cosinus, sinus, tangente, hyperboliques, serie-entiere]
---
## Intuition

> 💡 On **définit** l'exponentielle complexe par la même série que l'exponentielle réelle, $e^z=\sum_{n\ge0}\frac{z^n}{n!}$, qui converge pour tout $z\in\C$. Comme c'est une série entière, elle est holomorphe ([[ch01-serie-entiere-holomorphe]]) ; puis $\cos$, $\sin$, $\cosh$, $\sinh$ sont fabriquées avec des $e^{\pm iz}$, $e^{\pm z}$ : sommes et composées de fonctions holomorphes, elles sont holomorphes ([[ch01-stabilite-operations]]).

Image mentale de $\exp$ : écrire $z=x+iy$ ; alors $e^z=e^x\,e^{iy}$ a pour **module** $e^x$ (la partie réelle règle la distance à $0$) et pour **argument** $y$ (la partie imaginaire fait tourner). Une droite verticale $\{x\}\times\R$ s'enroule indéfiniment sur le cercle de rayon $e^x$ : $\exp$ est $2i\pi$-périodique.

En complexe, les formules d'Euler deviennent des **définitions** : $\cos z$ et $\sin z$ sont des combinaisons de $e^{iz}$ et $e^{-iz}$. Surprise : $\sin$ et $\cos$ ne sont plus bornées ($\sin(iy)=i\sinh y$).

## Énoncé

**Proposition (poly, Exemple I.3.5, p. 12).** La fonction exponentielle
$$
z\mapsto e^z:=\sum_{n\ge0}\frac{z^n}{n!}
$$
est définie sur $\C$ (rayon de convergence infini), holomorphe sur $\C$, de dérivée complexe $z\mapsto e^z$, et $e^{z_1+z_2}=e^{z_1}e^{z_2}$ pour tous $z_1,z_2\in\C$. Les fonctions trigonométriques
$$
\cos z:=\frac{e^{iz}+e^{-iz}}{2},\qquad\sin z:=\frac{e^{iz}-e^{-iz}}{2i},\qquad\tan z:=\frac{\sin z}{\cos z},
$$
et hyperboliques
$$
\cosh z:=\frac{e^z+e^{-z}}{2}=\cos(iz),\qquad\sinh z:=\frac{e^z-e^{-z}}{2}=-i\sin(iz),\qquad\tanh z:=\frac{\sinh z}{\cosh z}=-i\tan(iz),
$$
sont holomorphes sur leurs domaines de définition respectifs.

*Ce que le poly laisse au lecteur, et que l'on démontre ci-dessous :* $\cos$, $\sin$, $\cosh$, $\sinh$ sont définies et holomorphes sur $\C$ ; $\tan$ est définie et holomorphe sur $\C\setminus\big(\frac\pi2+\pi\Z\big)$ et $\tanh$ sur $\C\setminus\big(i\frac\pi2+i\pi\Z\big)$ ; les dérivées complexes sont
$$
\cos'=-\sin,\quad\sin'=\cos,\quad\tan'=\frac1{\cos^2}=1+\tan^2,\quad\cosh'=\sinh,\quad\sinh'=\cosh,\quad\tanh'=\frac1{\cosh^2}=1-\tanh^2.
$$

## Hypothèses

### H1 — Domaine de $\tan$ : $\cos z\neq0$, c'est-à-dire $z\notin\frac\pi2+\pi\Z$

**Rôle.** $\tan=\sin\times\frac1{\cos}$ et $\frac1{\cos}$ n'est holomorphe que sur l'ouvert où $\cos$ ne s'annule pas ([[ch01-stabilite-operations]]). Il faut donc connaître **tous** les zéros complexes de $\cos$ : ce sont les zéros réels $\frac\pi2+k\pi$, et il n'y en a pas d'autres (preuve, étape 4).

**Si on la retire.** En $z_0=\frac\pi2$, $\cos\big(\frac\pi2+h\big)=-\sin h$ et $\sin\big(\frac\pi2+h\big)=\cos h$, donc $|\tan(\frac\pi2+h)|=\frac{|\cos h|}{|\sin h|}\to+\infty$ quand $h\to0$ ($h\in\C$) : $\tan$ ne se prolonge même pas par continuité en $\frac\pi2$ (c'est un pôle, au sens du chapitre II, [[ch02-pole-meromorphe-def]]).

### H2 — Domaine de $\tanh$ : $\cosh z\neq0$, c'est-à-dire $z\notin i\frac\pi2+i\pi\Z$

**Rôle.** Même rôle pour $\tanh=\sinh/\cosh$. Comme $\cosh z=\cos(iz)$, $\cosh z=0\iff iz\in\frac\pi2+\pi\Z\iff z\in-i\frac\pi2-i\pi\Z=i\frac\pi2+i\pi\Z$.

**Si on la retire.** $\cosh$ n'a **aucun zéro réel**, mais il en a sur l'axe imaginaire : $\cosh(i\frac\pi2)=\cos(-\frac\pi2)=0$, et $|\tanh|\to+\infty$ près de $i\frac\pi2$. En réel on ne voit pas ces points ; en complexe, $\tanh$ n'est pas définie sur $\C$ entier.

## Idée de la preuve

$\exp$ est une série entière de rayon infini, donc holomorphe et égale à sa série dérivée, qui est elle-même ; le produit de Cauchy donne $e^{z_1+z_2}=e^{z_1}e^{z_2}$. Le reste vient de la stabilité par opérations, de la règle de la chaîne, et du calcul des zéros de $\exp(w)-1$.

## Preuve

**Étape 1 : $\exp$ est holomorphe, $\exp'=\exp$.** Pour tout $\rho>0$, la suite $\big(\frac{\rho^n}{n!}\big)_n$ est bornée (elle tend vers $0$ car $\frac{\rho^{n+1}/(n+1)!}{\rho^n/n!}=\frac{\rho}{n+1}\to0$), donc le rayon de convergence est $+\infty$ ([[ch01-def-rayon-convergence]]). Par [[ch01-serie-entiere-holomorphe]], $\exp\in\Hol(\C)$ et
$$
\exp'(z)=\sum_{n\ge1}n\frac{z^{n-1}}{n!}=\sum_{n\ge1}\frac{z^{n-1}}{(n-1)!}=\sum_{m\ge0}\frac{z^m}{m!}=e^z .
$$

**Étape 2 : équation fonctionnelle** (rappelée sans preuve par le poly). Les deux séries $\sum\frac{z_1^k}{k!}$ et $\sum\frac{z_2^l}{l!}$ convergent absolument, donc leur produit de Cauchy converge vers le produit des sommes :
$$
e^{z_1}e^{z_2}=\sum_{n\ge0}\sum_{k=0}^n\frac{z_1^k}{k!}\frac{z_2^{n-k}}{(n-k)!}=\sum_{n\ge0}\frac1{n!}\sum_{k=0}^n\binom nk z_1^kz_2^{n-k}=\sum_{n\ge0}\frac{(z_1+z_2)^n}{n!}=e^{z_1+z_2}.
$$
*Variante :* à $c\in\C$ fixé, $g(z)=e^ze^{c-z}$ vérifie $g'(z)=e^ze^{c-z}-e^ze^{c-z}=0$ (étape 1 et règle de la chaîne), donc $g$ est constante sur le connexe $\C$, égale à $g(0)=e^c$.

En particulier $e^ze^{-z}=e^0=1$ : $\exp$ ne s'annule pas sur $\C$.

**Étape 3 : holomorphie et dérivées.** Les fonctions $z\mapsto\pm iz$ et $z\mapsto-z$ sont holomorphes sur $\C$ ; par composition, $z\mapsto e^{\pm iz}$ et $z\mapsto e^{\pm z}$ le sont, avec (règle de la chaîne (I.3.4), [[ch01-formules-derivation]]) $(e^{iz})'=ie^{iz}$, $(e^{-iz})'=-ie^{-iz}$, $(e^{-z})'=-e^{-z}$. Par combinaisons linéaires ([[ch01-stabilite-operations]]), $\cos,\sin,\cosh,\sinh\in\Hol(\C)$ et
$$
\cos'z=\frac{ie^{iz}-ie^{-iz}}{2}=i\cdot\frac{2i\sin z}{2}=-\sin z,\qquad\sin'z=\frac{ie^{iz}+ie^{-iz}}{2i}=\cos z,
$$
et de même $\cosh'=\sinh$, $\sinh'=\cosh$. Les identités $\cosh z=\cos(iz)$, $\sinh z=-i\sin(iz)$ se vérifient directement : $\cos(iz)=\frac{e^{-z}+e^{z}}2$ et $-i\sin(iz)=-i\,\frac{e^{-z}-e^{z}}{2i}=\frac{e^z-e^{-z}}2$. En développant les carrés,
$$
\cos^2z+\sin^2z=\frac{(e^{iz}+e^{-iz})^2-(e^{iz}-e^{-iz})^2}{4}=\frac{4e^{iz}e^{-iz}}{4}=1,\qquad\cosh^2z-\sinh^2z=1 .
$$
Sur l'ouvert où $\cos\neq0$ (resp. $\cosh\ne0$), $\tan$ (resp. $\tanh$) est holomorphe (produit par l'inverse), et par la règle du quotient (I.3.3)
$$
\tan'=\frac{\cos\cdot\cos-\sin\cdot(-\sin)}{\cos^2}=\frac1{\cos^2}=1+\tan^2,\qquad\tanh'=\frac{\cosh^2-\sinh^2}{\cosh^2}=\frac1{\cosh^2}=1-\tanh^2.
$$
Enfin $-i\tan(iz)=\frac{-i\sin(iz)}{\cos(iz)}=\frac{\sinh z}{\cosh z}=\tanh z$.

**Étape 4 : zéros, donc domaines.** *Lemme : $e^w=1\iff w\in2i\pi\Z$.* Écrivons $w=x+iy$, $x,y\in\R$. Par l'étape 2, $e^w=e^xe^{iy}$. Pour $y$ réel, $\cos y$ et $\sin y$ (définis ci-dessus) sont réels et coïncident avec les fonctions réelles usuelles (mêmes séries), et $e^{iy}=\cos y+i\sin y$ (somme des définitions). Donc $|e^w|=e^x|e^{iy}|=e^x\sqrt{\cos^2y+\sin^2y}=e^x$. Si $e^w=1$ : $e^x=1$, donc $x=0$, puis $\cos y=1$ et $\sin y=0$, donc $y\in2\pi\Z$. Réciproquement $e^{2ik\pi}=\cos(2k\pi)+i\sin(2k\pi)=1$.

Alors $\cos z=0\iff e^{iz}=-e^{-iz}\iff e^{2iz}=-1=e^{i\pi}\iff e^{2iz-i\pi}=1\iff 2iz-i\pi\in2i\pi\Z\iff z\in\frac\pi2+\pi\Z$. De même, $\cosh z=\cos(iz)=0\iff z\in i\frac\pi2+i\pi\Z$. Ces ensembles sont fermés (discrets), leurs complémentaires sont des ouverts, et ce sont les domaines annoncés. $\square$

## Preuve à trous

$\exp$ est une série entière de rayon <trou indice="la suite $\rho^n/n!$ est-elle bornée ?">$+\infty$, car $\rho^n/n!\to0$ pour tout $\rho>0$</trou>, donc $\exp\in\Hol(\C)$ et, en dérivant terme à terme, $\exp'(z)=\sum_{n\ge1}\frac{z^{n-1}}{(n-1)!}=e^z$.

L'équation fonctionnelle s'obtient par <trou indice="deux séries absolument convergentes">le produit de Cauchy : $e^{z_1}e^{z_2}=\sum_n\frac1{n!}\sum_{k=0}^n\binom nk z_1^kz_2^{n-k}=\sum_n\frac{(z_1+z_2)^n}{n!}$</trou>. En particulier $e^ze^{-z}=1$.

$\cos,\sin,\cosh,\sinh$ sont holomorphes sur $\C$ par composition et combinaisons linéaires, avec $\cos'=-\sin$, $\sin'=\cos$. Pour $\tan$ et $\tanh$, on utilise <trou>$\cos^2+\sin^2=1$ et $\cosh^2-\sinh^2=1$, obtenus en développant $(e^{iz}\pm e^{-iz})^2$</trou>, d'où $\tan'=1/\cos^2$, $\tanh'=1/\cosh^2$.

Domaines : $e^w=1\iff w\in2i\pi\Z$ (car $|e^{x+iy}|=e^x$), donc $\cos z=0\iff$ <trou indice="se ramener à $e^{2iz}=-1$">$e^{2iz-i\pi}=1\iff z\in\frac\pi2+\pi\Z$</trou>, et $\cosh z=\cos(iz)=0\iff z\in i\frac\pi2+i\pi\Z$. $\square$

## Exemples

* **$\sin$ n'est pas bornée sur $\C$.** $\sin(iy)=\frac{e^{-y}-e^{y}}{2i}=i\sinh y$, de module $\to+\infty$ quand $y\to\pm\infty$. Plus précisément, avec la formule d'addition $\sin(a+b)=\sin a\cos b+\cos a\sin b$ (qui découle, comme en réel, de $e^{i(a+b)}=e^{ia}e^{ib}$),
$$
\sin(x+iy)=\sin x\cosh y+i\cos x\sinh y,\qquad|\sin(x+iy)|^2=\sin^2x+\sinh^2y .
$$
Donc $\sin z=0\iff\sin x=0$ et $\sinh y=0\iff z\in\pi\Z$ : $\sin$ n'a que ses zéros réels. C'est cohérent avec Liouville ([[ch01-liouville]]) : une fonction entière bornée serait constante.
* **Résoudre $\cos z=2$.** Posons $w=e^{iz}\ne0$ : $w+\frac1w=4$, soit $w^2-4w+1=0$, $w=2\pm\sqrt3$ (deux réels $>0$, de produit $1$). Donc $iz\in\pm\ln(2+\sqrt3)+2i\pi\Z$ (lemme de l'étape 4), c'est-à-dire $z\in2\pi\Z\pm i\ln(2+\sqrt3)$. Vérification : $\cos\big(i\ln(2+\sqrt3)\big)=\cosh\ln(2+\sqrt3)=\frac{(2+\sqrt3)+(2-\sqrt3)}2=2$.
* **Exponentielle et périodicité.** $e^{z+2i\pi}=e^ze^{2i\pi}=e^z$ : $\exp$ n'est pas injective, et $|e^{x+iy}|=e^x$. L'image de $\exp$ est exactement $\C\setminus\{0\}$ ([[ch01-exp-image-c-etoile-log-local]]).

## Pièges

* > ⚠️ $|\sin z|\le1$ et $|\cos z|\le1$ sont **faux** en complexe ; seules les identités algébriques ($\cos^2+\sin^2=1$, formules d'addition, $\cos'=-\sin$...) survivent.
* > ⚠️ $|e^z|=e^{\Re(z)}$, et non $e^{|z|}$ ; $e^z$ ne s'annule jamais mais prend des valeurs réelles négatives ($e^{i\pi}=-1$).
* $e^{z_1}=e^{z_2}\iff z_1-z_2\in2i\pi\Z$ (et non $z_1=z_2$) : c'est la source de toutes les difficultés du logarithme complexe.
* $\cosh$ s'annule en $i\frac\pi2$ : le domaine de $\tanh$ n'est pas $\C$ (alors que $\tanh$ est définie sur tout $\R$).
* Pour $z$ complexe, $\cos z$ n'est **pas** $\Re(e^{iz})$ : cette égalité n'est vraie que pour $z$ réel. Par exemple $\cos(i)=\cosh1\approx1{,}543$ alors que $\Re(e^{i\cdot i})=e^{-1}\approx0{,}368$.
