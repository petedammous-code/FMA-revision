---
id: ch01-prolongement-analytique
type: corollary
chapter: 1
title: Principe du prolongement analytique (unicité)
ref: Corollaire I.11.6
page: 28
importance: 3
depends: [ch01-zeros-isoles, ch01-def-point-accumulation]
tags: [prolongement-analytique, unicite, rigidite, connexite, accumulation]
---
## Intuition

> 💡 Une fonction holomorphe sur un ouvert connexe est comme un hologramme : **n'importe quel petit morceau** contient toute l'information. Si deux fonctions holomorphes coïncident sur un petit disque, sur un petit arc, ou même seulement sur une suite de points qui converge vers un point du domaine, alors elles coïncident partout.

C'est la version « à deux fonctions » du principe des zéros isolés ([[ch01-zeros-isoles]]) : on l'applique à la différence $f-g$, dont les zéros s'accumulent en un point de $\Omega$. Le mot « prolongement » vient de l'usage : si une fonction définie sur un petit ouvert admet une extension holomorphe à un ouvert connexe plus grand, cette extension est **unique**.

Un **point d'accumulation** de $X$ est un point $a$ dont tout voisinage rencontre $X\setminus\{a\}$ ([[ch01-def-point-accumulation]]). Un ouvert $\Omega$ est **connexe** s'il n'est pas réunion de deux ouverts disjoints non vides.

## Énoncé

**Corollaire (poly, Corollaire I.11.6 — Principe du prolongement analytique, p. 28).** Deux fonctions holomorphes $f$ et $g$ sur un ouvert connexe $\Omega$ qui coïncident sur une partie $X$ de $\Omega$ ayant un point d'accumulation dans $\Omega$, coïncident partout.

Cas particuliers fréquents (poly, p. 28) : $f$ et $g$ coïncident sur un ouvert non vide, ou sur un arc (non réduit à un point) de $\Omega$ ; alors $f=g$ sur $\Omega$.

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** C'est l'hypothèse du principe des zéros isolés, qui propage la nullité de $f-g$ depuis le voisinage du point d'accumulation jusqu'à tout $\Omega$.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ (réunion disjointe), $f\equiv0$ sur $\Omega$, $g=0$ sur $D(0,1)$ et $g=1$ sur $D(3,1)$ : $f,g$ sont holomorphes, coïncident sur $X=D(0,1)$ (dont tout point est d'accumulation), mais $f\neq g$. On obtient seulement $f=g$ sur la composante connexe contenant le point d'accumulation ([[ch01-zeros-isoles-sans-connexite]]).

### H2 — $f$ et $g$ holomorphes sur $\Omega$

**Rôle.** $f-g$ est holomorphe, ce qui permet d'invoquer le principe des zéros isolés (qui repose sur l'analyticité).

**Si on la retire.** Sur $\Omega=\C$, $f(z)=\Im(z)$ (de classe $C^\infty$ mais non holomorphe) et $g\equiv0$ coïncident sur $X=\R$, qui a des points d'accumulation dans $\C$ ; pourtant $f(i)=1\neq0=g(i)$.

### H3 — $X$ a un point d'accumulation **dans $\Omega$**

**Rôle.** Le point d'accumulation $a\in\Omega$ est un zéro **non isolé** de $f-g$ ; c'est exactement ce qui est interdit à une fonction holomorphe non nulle.

**Si on la retire.**
* *Point d'accumulation hors de $\Omega$.* Sur $\Omega=D(0,1)$, $f(z)=\sin\big(\frac{\pi}{1-z}\big)$ et $g\equiv0$ coïncident sur $X=\{1-\frac1n : n\ge1\}$ (car $f(1-\frac1n)=\sin(n\pi)=0$), qui s'accumule en $1\notin\Omega$. Mais $f(\tfrac13)=\sin(\tfrac{3\pi}{2})=-1\neq0$.
* *$X$ infini sans point d'accumulation.* $f(z)=\sin(\pi z)$ et $g\equiv0$ coïncident sur $X=\Z$, qui n'a aucun point d'accumulation dans $\C$, et $f\neq g$ ([[ch01-isole-ne-signifie-pas-fini]]).

## Idée de la preuve

L'ensemble des zéros de $h=f-g$ contient $X$ et est fermé dans $\Omega$, donc contient le point d'accumulation $a\in\Omega$ ; $a$ est alors un zéro non isolé de $h$, donc $h\equiv0$ par le principe des zéros isolés.

## Preuve

Posons $h:=f-g$, holomorphe sur $\Omega$, et $Z:=\{z\in\Omega : h(z)=0\}$. Par hypothèse $X\subset Z$. Soit $a\in\Omega$ un point d'accumulation de $X$.

**$a\in Z$.** Il existe une suite $(x_n)$ de points de $X\setminus\{a\}$ qui tend vers $a$ ([[ch01-def-point-accumulation]]). Par continuité de $h$ en $a\in\Omega$, $h(a)=\lim h(x_n)=0$. (Autrement dit : $Z=h^{-1}(\{0\})$ est fermé dans $\Omega$.)

**$a$ est un zéro non isolé de $h$.** Pour tout $\eps>0$, le disque $D(a,\eps)$ contient un point $x\in X\setminus\{a\}$, donc un point de $\Omega\cap\big(D(a,\eps)\setminus\{a\}\big)$ où $h(x)=0$.

**Conclusion.** Si $h$ n'était pas identiquement nulle, le principe des zéros isolés ([[ch01-zeros-isoles]]), applicable puisque $\Omega$ est connexe et $h$ holomorphe, fournirait $\eps>0$ tel que $h(z)\neq0$ pour tout $z\in\Omega\cap\big(D(a,\eps)\setminus\{a\}\big)$ : contradiction. Donc $h\equiv0$ sur $\Omega$, c'est-à-dire $f=g$ sur $\Omega$. $\square$

**Cas d'un ouvert ou d'un arc.** Si $X$ contient un disque $D(b,r)$, $r>0$, alors $b$ est un point d'accumulation de $X$ (les points $b+r/(2n)$ sont dans $X\setminus\{b\}$ et tendent vers $b$). Si $X$ contient l'image d'un chemin injectif $\gamma:[0,1]\to\Omega$, alors $\gamma(0)=\lim_{t\to0^+}\gamma(t)$ avec $\gamma(t)\neq\gamma(0)$ pour $t>0$ : c'est un point d'accumulation de $X$ dans $\Omega$.

## Preuve à trous

Soit $h=f-g\in\Hol(\Omega)$ et $a\in\Omega$ un point d'accumulation de $X$. Comme $h=0$ sur $X$ et $x_n\to a$ avec $x_n\in X\setminus\{a\}$, <trou indice="continuité">$h(a)=\lim h(x_n)=0$</trou>. De plus <trou>tout disque $D(a,\eps)$ contient un point de $X\setminus\{a\}$ où $h$ s'annule : $a$ est un zéro **non isolé** de $h$</trou>. Par <trou indice="quel théorème ? quelles hypothèses ?">le principe des zéros isolés (valable car $\Omega$ est connexe et $h$ holomorphe), une fonction non identiquement nulle n'a que des zéros isolés</trou>, donc $h\equiv0$ : $f=g$ sur $\Omega$. $\square$

## Exemples

* **Série géométrique** (poly, Exemple I.11.7). $f(z)=\sum_{n\ge0}z^n$ est holomorphe sur $D(0,1)$ et y vaut $\frac1{1-z}$. La fonction $g(z)=\frac1{1-z}$ est holomorphe sur l'ouvert connexe $\C\setminus\{1\}$ et coïncide avec $f$ sur $D(0,1)$ : c'est l'**unique** prolongement holomorphe de $f$ à $\C\setminus\{1\}$ (deux prolongements coïncideraient sur $D(0,1)$, donc partout). Voir [[ch01-exemple-prolongement-serie-geometrique]].
* **Prolonger des identités de $\R$ à $\C$.** Les fonctions $F(z)=\sin^2z+\cos^2z$ et $G(z)=1$ sont entières et coïncident sur $\R$ (identité réelle connue) ; $\R$ a des points d'accumulation dans $\C$ (par exemple $0$), donc $\sin^2z+\cos^2z=1$ pour tout $z\in\C$. De même, à $w\in\R$ fixé, $z\mapsto e^{z+w}$ et $z\mapsto e^ze^w$ coïncident sur $\R$, donc sur $\C$ ; puis, à $z\in\C$ fixé, on prolonge en $w$ : $e^{z+w}=e^ze^w$ sur $\C^2$.
* **Unicité des valeurs sur une suite.** Si $f\in\Hol(D(0,1))$ vérifie $f(1/n)=\frac{1}{n^2}$ pour tout $n\ge2$, alors $f(z)=z^2$ sur $D(0,1)$ : $f$ et $z\mapsto z^2$ coïncident sur $\{1/n:n\ge2\}$, qui s'accumule en $0\in D(0,1)$. En revanche **aucune** $f\in\Hol(D(0,1))$ ne vérifie $f(1/n)=(-1)^n/n$ pour tout $n\ge2$ : par continuité $f(0)=0$, et $f$ coïnciderait avec $z$ sur $\{1/(2k)\}$ et avec $-z$ sur $\{1/(2k+1)\}$, d'où $f(z)=z$ et $f(z)=-z$ partout, absurde.

## Pièges

* > ⚠️ Le point d'accumulation doit être **dans $\Omega$**. Un ensemble infini de points de coïncidence ne suffit pas ($\Z$ pour $\sin(\pi z)$), ni une accumulation au bord ($\sin(\pi/(1-z))$ sur $D(0,1)$).
* > ⚠️ Sans connexité, on ne conclut que sur la composante connexe contenant le point d'accumulation.
* Le principe donne l'**unicité** d'un prolongement, pas son **existence** : $\sum z^n$ se prolonge à $\C\setminus\{1\}$, mais $\sum_n z^{2^n}$ (rayon $1$) ne se prolonge holomorphiquement au voisinage d'aucun point du cercle unité (résultat classique, hors programme).
* Rien de tel en variable réelle, même $C^\infty$ : $\varphi(x)=e^{-1/x^2}$ pour $x>0$, $\varphi(x)=0$ pour $x\le0$ coïncide avec $0$ sur $]-\infty,0]$ sans être nulle.
* Usage typique : montrer qu'une fonction est constante sur $\Omega$ en montrant qu'elle l'est près d'un point (preuve du principe du maximum, [[ch01-principe-maximum]]).
