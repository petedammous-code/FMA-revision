---
id: ch03-produit-sinus
type: proposition
chapter: 3
title: Produit d'Euler (1735) du sinus — Formule (III.6.3)
ref: Exemple III.6.3
page: 70
importance: 2
depends: [ch03-produits-infinis, ch03-cotangente, ch03-convergence-normale-definition]
tags: [produit-infini, sinus, euler, derivee-logarithmique, cotangente, wallis]
---
## Intuition

> 💡 Un polynôme est déterminé, à une constante près, par ses racines : $P(z)=c\prod(z-a_k)$. Euler a osé la même chose pour $\sin(\pi z)$, qui s'annule exactement aux entiers : en groupant les racines $\pm n$, on écrit
> $\sin(\pi z)=\pi z\,(1-z^2)(1-\tfrac{z^2}{4})(1-\tfrac{z^2}{9})\cdots$

Deux difficultés que le cours résout : (1) donner un **sens** au produit infini, grâce au théorème des produits infinis ([[ch03-produits-infinis]]) ; (2) montrer qu'il vaut **exactement** $\sin(\pi z)$, car deux fonctions entières ayant les mêmes zéros peuvent différer d'un facteur $e^{g(z)}$ qui ne s'annule jamais. L'outil pour (2) est la **dérivée logarithmique** $F'/F$ : celle du produit est une série, que l'on reconnaît grâce à la formule de la cotangente ([[ch03-cotangente]]).

## Énoncé

**Proposition (poly, Exemple III.6.3, formule (III.6.3), p. 70).** (Euler, 1735.) Pour tout $z\in\C$,
$$
\sin(\pi z)=\pi z\prod_{n\ge1}\left(1-\frac{z^2}{n^2}\right),
$$
le produit infini convergeant localement uniformément sur $\C$ au sens du Théorème III.5.1 ; la fonction $F(z)=\pi z\prod_{n\ge1}(1-z^2/n^2)$ est entière, de zéros les entiers relatifs, tous simples, et pour $z\in\C\setminus\Z$,
$$
\frac{F'(z)}{F(z)}=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}=\pi\cot(\pi z).
$$

## Hypothèses

### H1 — Convergence normale de $\sum_{n\ge1} z^2/n^2$ sur tout compact (facteurs **groupés par paires**)

**Rôle.** C'est l'hypothèse du Théorème III.5.1 ([[ch03-produits-infinis]]) avec $f_n(z)=-z^2/n^2$ : sur $\bar D(0,R)$, $|f_n(z)|\le R^2/n^2$ et $\sum R^2/n^2<+\infty$. Elle donne l'holomorphie de $F$, la description de ses zéros, et la formule $F'/F=\sum g_n'/g_n$.

**Si on la retire.** Si l'on ne groupe pas $n$ et $-n$, le produit $\prod_{n\in\Z\setminus\{0\}}(1-\frac zn)$ ne relève plus du théorème : $\sum_{n\ne0}|z/n|=+\infty$ pour $z\ne0$. Et l'ordre des facteurs compte vraiment : pour $z=\frac12$, les seuls facteurs positifs $\prod_{n=1}^N(1-\frac{1}{2n})$ tendent vers $0$ (car $\sum_{n=1}^N\log(1-\frac1{2n})\le-\sum_{n=1}^N\frac1{2n}\to-\infty$), alors que les seuls facteurs $n<0$, $\prod_{n=1}^N(1+\frac1{2n})\ge1+\sum_{n=1}^N\frac1{2n}\to+\infty$. Pour un ordre sans groupement, il faut les facteurs de convergence de Weierstraß : $\pi z\prod_{n\ne0}(1-\frac zn)e^{z/n}$, qui donne le même résultat car $(1-\frac zn)e^{z/n}(1+\frac zn)e^{-z/n}=1-\frac{z^2}{n^2}$.

### H2 — Identification par la dérivée logarithmique et une normalisation

**Rôle.** Avoir les mêmes zéros ne suffit pas : on montre $F'/F=(\sin(\pi z))'/\sin(\pi z)$ sur l'ouvert **connexe** $\C\setminus\Z$, d'où $F=c\sin(\pi z)$, puis on fixe $c$ par la dérivée en $0$.

**Si on la retire.** $G(z)=e^z\sin(\pi z)$ est entière, a exactement les mêmes zéros que $\sin(\pi z)$, tous simples, et $G'(0)=\pi$, mais $G\ne\sin(\pi\cdot)$ : sa dérivée logarithmique est $1+\pi\cot(\pi z)$. Sans la normalisation, $2\sin(\pi z)$ a la même dérivée logarithmique que $\sin(\pi z)$.

## Idée de la preuve

Le Théorème III.5.1 rend $F$ entière, de zéros $\Z$ simples, et donne $F'/F=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$, qui est $\pi\cot(\pi z)$ par (III.6.2). Donc $(F/\sin(\pi z))'=0$ sur le connexe $\C\setminus\Z$ : $F=c\sin(\pi z)$, et $c=1$ en comparant les dérivées en $0$.

## Preuve

*Le produit converge.* Posons $f_n(z)=-\dfrac{z^2}{n^2}$ et $g_n=1+f_n$ pour $n\ge1$. Pour $R>0$ et $z\in\bar D(0,R)$, $|f_n(z)|\le\dfrac{R^2}{n^2}$, et $\sum_{n\ge1}R^2/n^2<+\infty$ : la série $\sum_{n\ge1}f_n$ converge normalement sur tout disque fermé, donc sur tout compact de $\C$ (un compact est contenu dans un $\bar D(0,R)$), c'est-à-dire localement normalement ([[ch03-convergence-normale-definition]]). Par le Théorème III.5.1 ([[ch03-produits-infinis]]), $P(z):=\prod_{n\ge1}(1-z^2/n^2)$ converge localement uniformément vers une fonction holomorphe sur $\C$, et $F(z):=\pi z\,P(z)$ est entière.

*Les zéros.* D'après le même théorème, $P$ s'annule exactement là où un facteur s'annule, avec un ordre égal à la somme des ordres. Or $g_n(z)=(1-\frac zn)(1+\frac zn)$ a pour zéros $n$ et $-n$, simples, et un entier $m\ne0$ n'est zéro que du seul facteur $g_{|m|}$. Donc les zéros de $P$ sont les $m\in\Z\setminus\{0\}$, simples ; $\pi z$ ajoute le zéro simple $0$ (et $P(0)=1\ne0$). Les zéros de $F$ sont les entiers relatifs, tous simples.

*La dérivée logarithmique.* Pour $n\ge1$, $\dfrac{g_n'(z)}{g_n(z)}=\dfrac{-2z/n^2}{1-z^2/n^2}=\dfrac{-2z}{n^2-z^2}=\dfrac{2z}{z^2-n^2}$. La formule de dérivée logarithmique du Théorème III.5.1 (valable là où $P\ne0$) donne, pour $z\in\C\setminus\Z$,
$$
\frac{F'(z)}{F(z)}=\frac{(\pi z)'}{\pi z}+\frac{P'(z)}{P(z)}=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}.
$$
On reconnaît le membre de droite de la formule de la cotangente (III.6.2) ([[ch03-cotangente]]) :
$$
\frac{F'(z)}{F(z)}=\pi\cot(\pi z)=\frac{\pi\cos(\pi z)}{\sin(\pi z)}=\frac{(\sin(\pi z))'}{\sin(\pi z)}\qquad(z\in\C\setminus\Z).
$$

*Identification.* Sur l'ouvert $\C\setminus\Z$, où $\sin(\pi z)\ne0$, posons $q(z)=F(z)/\sin(\pi z)$. Alors
$$
q'=\frac{F'\sin(\pi\cdot)-F\,(\sin(\pi\cdot))'}{\sin^2(\pi\cdot)}=\frac{F}{\sin(\pi\cdot)}\left(\frac{F'}{F}-\frac{(\sin(\pi\cdot))'}{\sin(\pi\cdot)}\right)=0 .
$$
L'ouvert $\C\setminus\Z$ est connexe (deux points se joignent par une ligne brisée évitant $\Z$, par exemple en passant par le demi-plan $\{\Im(z)>0\}$ ou $\{\Im(z)<0\}$), donc $q$ est constante : $F(z)=c\sin(\pi z)$ sur $\C\setminus\Z$, puis sur $\C$ par continuité (les deux membres sont continus et $\Z$ est d'intérieur vide).

*La constante.* $F'(z)=\pi P(z)+\pi zP'(z)$, donc $F'(0)=\pi P(0)=\pi$ ; et $(\sin(\pi z))'|_{z=0}=\pi\cos0=\pi$. Donc $c\pi=\pi$, $c=1$, ce qui montre (III.6.3). $\square$

## Preuve à trous

La série $\sum_{n\ge1}z^2/n^2$ <trou indice="majorer sur D̄(0,R)">converge normalement sur tout $\bar D(0,R)$, car $|z^2/n^2|\le R^2/n^2$</trou> ; par le Théorème III.5.1, $F(z)=\pi z\prod_{n\ge1}(1-z^2/n^2)$ est entière, de zéros les entiers relatifs, simples. Pour $z\notin\Z$,
$$
\frac{F'(z)}{F(z)}=\frac1z+\sum_{n\ge1}\frac{-2z/n^2}{1-z^2/n^2}=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2},
$$
et ce membre de droite vaut <trou indice="formule (III.6.2)">$\pi\cot(\pi z)=\dfrac{(\sin(\pi z))'}{\sin(\pi z)}$</trou>. Donc <trou indice="dériver un quotient">$\big(F/\sin(\pi\cdot)\big)'=\dfrac{F}{\sin(\pi\cdot)}\Big(\dfrac{F'}{F}-\dfrac{(\sin(\pi\cdot))'}{\sin(\pi\cdot)}\Big)=0$ sur l'ouvert connexe $\C\setminus\Z$</trou>, d'où $F=c\sin(\pi z)$. Enfin <trou>$F'(0)=\pi P(0)=\pi=(\sin(\pi z))'(0)$, donc $c=1$</trou>. $\square$

## Exemples

* **Produit de Wallis ($z=\frac12$).** $1=\sin\frac\pi2=\frac\pi2\prod_{n\ge1}\Big(1-\frac1{4n^2}\Big)=\frac\pi2\prod_{n\ge1}\frac{(2n-1)(2n+1)}{(2n)^2}$, donc
$$
\frac\pi2=\prod_{n\ge1}\frac{(2n)^2}{(2n-1)(2n+1)}=\frac21\cdot\frac23\cdot\frac43\cdot\frac45\cdot\frac65\cdot\frac67\cdots
$$
(le produit partiel à $N=1$ vaut $4/3\approx1{,}333$, à $N=2$ : $64/45\approx1{,}422$ ; limite $\pi/2\approx1{,}571$ : convergence lente).
* **$\zeta(2)=\pi^2/6$ par identification du terme en $z^3$.** $P(0)=1$ et, au voisinage de $0$, $\frac{P'}{P}(z)=\sum_{n\ge1}\frac{2z}{z^2-n^2}$ ; on peut dériver terme à terme sur $D(0,\frac12)$ (convergence uniforme, Weierstraß), d'où $\big(\frac{P'}{P}\big)'(0)=\sum_{n\ge1}\frac{-2}{n^2}$. Comme $\big(\frac{P'}{P}\big)'=\frac{P''}{P}-\big(\frac{P'}{P}\big)^2$ et $P'(0)=0$ ($P$ est paire), $P''(0)=-2\sum_{n\ge1}\frac1{n^2}$, i.e. $P(z)=1-\big(\sum_n\frac1{n^2}\big)z^2+O(z^4)$. Or $P(z)=\frac{\sin(\pi z)}{\pi z}=1-\frac{\pi^2z^2}{6}+O(z^4)$. Donc $\sum_{n\ge1}\frac1{n^2}=\frac{\pi^2}{6}$.
* **Version hyperbolique.** En $z=iy$, $y\in\R$ : $\sin(i\pi y)=i\sinh(\pi y)$, d'où $\sinh(\pi y)=\pi y\prod_{n\ge1}\big(1+\frac{y^2}{n^2}\big)$. En $y=1$ : $\prod_{n\ge1}(1+\frac1{n^2})=\frac{\sinh\pi}{\pi}\approx3{,}676$.

## Pièges

* > ⚠️ Les mêmes zéros (avec multiplicités) ne suffisent pas à identifier deux fonctions entières : $e^{g}\sin(\pi z)$ a les mêmes zéros pour toute $g$ entière. Il faut un argument supplémentaire (ici la dérivée logarithmique + la valeur de $F'(0)$).
* Ne pas écrire $\prod_{n\in\Z^*}(1-z/n)$ sans précaution : ce produit ne converge pas au sens du Théorème III.5.1 ; il faut grouper $n$ et $-n$ ou ajouter les facteurs $e^{z/n}$.
* La formule $F'/F=\sum g_n'/g_n$ n'a de sens qu'en dehors des zéros de $F$ (ici hors de $\Z$) ; l'identification se fait sur $\C\setminus\Z$, ouvert **connexe**, puis on étend par continuité.
* La formule de la cotangente utilisée est (III.6.2) ([[ch03-cotangente]]), elle-même déduite de $\frac{\pi^2}{\sin^2(\pi z)}=\sum_n\frac1{(z-n)^2}$ ([[ch03-euler-sinus-carre]]) : bien citer la chaîne.
* Pour $\Gamma$, la même méthode combinée au produit de Weierstraß ([[ch03-gamma-produit-weierstrass]]) donne la formule des compléments $\Gamma(z)\Gamma(1-z)=\pi/\sin(\pi z)$.
