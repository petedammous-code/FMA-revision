---
id: ch02-puissance-complexe-def
type: definition
chapter: 2
title: Puissances complexes $h^\alpha$, $z^\alpha$ et racine carrée principale
ref: non numéroté, section II.9, p. 56
page: 56
importance: 2
depends: [ch02-logarithme-def, ch02-logarithme-existence, ch02-logarithme-determination-principale-def]
tags: [puissance complexe, racine carree, logarithme, determination, coupure]
---
## Intuition

> 💡 En réel, $x^{\alpha}=e^{\alpha\log x}$ pour $x>0$. En complexe on fait pareil, en remplaçant $\log$ par **un** logarithme : $h^{\alpha}=e^{\alpha\,\mathrm{Log}(h)}$. Comme le logarithme n'est défini qu'à $2i\pi k$ près, $h^{\alpha}$ n'est défini qu'à un facteur $e^{2i\pi k\alpha}$ près : il faut **choisir une détermination**, et toutes les règles de calcul qui mélangent des déterminations (comme $(z_1z_2)^{\alpha}=z_1^{\alpha}z_2^{\alpha}$) peuvent tomber en défaut.

Image : $\sqrt z$ « divise l'argument par $2$ ». Si l'on fait un tour autour de $0$, l'argument de $z$ gagne $2\pi$ et celui de $\sqrt z$ gagne seulement $\pi$ : on revient à $-\sqrt z$. D'où l'impossibilité d'une racine carrée continue sur $\C^\times$ et la nécessité d'une coupure.

Rappels : un **logarithme** de $h$ (holomorphe sans zéro) est une $L\in\Hol(\Omega)$ avec $e^{L}=h$ ([[ch02-logarithme-def]]) ; il existe si $\Omega$ est simplement connexe ([[ch02-logarithme-existence]]). La **détermination principale** $\mathrm{Log}$ est le logarithme de $z$ sur $\C\setminus\R_-$ nul en $1$ ; $\mathrm{Log}(re^{i\theta})=\log r+i\theta$ pour $\theta\in]-\pi,\pi[$ ([[ch02-logarithme-determination-principale-def]]).

## Énoncé

**Définition (poly, section II.9, p. 56).** Soit $h$ une fonction holomorphe et $\mathrm{Log}(h)$ un logarithme de $h$. Pour tout $\alpha\in\C$, on définit
$$
h^{\alpha}(z):=e^{\alpha\,\mathrm{Log}(h(z))}.
$$
* Dans le cas de la détermination principale du logarithme, ceci définit la **détermination principale de la racine carrée** $z\mapsto\sqrt z:=e^{\frac12\mathrm{Log}(z)}$ sur $\C\setminus\R_-$, qui prolonge la racine usuelle définie sur $\R_+^\times$. Comme pour le logarithme, on ne peut pas prolonger la racine carrée en une fonction holomorphe sur tout le plan complexe.
* Dans le cas particulier $h(z)=z$, on définit ainsi, pour tout $\alpha\in\C$, la fonction
$$
z^{\alpha}:=e^{\alpha\,\mathrm{Log}(z)}\qquad\text{sur }\C\setminus\R_- .
$$
La fonction $z\mapsto z^{\alpha}$ est holomorphe sur $\C\setminus\R_-$, et, $z$ étant fixé, la fonction $\alpha\mapsto z^{\alpha}$ est holomorphe sur $\C$.

**Vérifications.**
* *Holomorphie.* $z\mapsto\alpha\,\mathrm{Log}(z)$ est holomorphe sur $\C\setminus\R_-$ et $\exp$ est entière : la composée est holomorphe, de dérivée $(z^{\alpha})'=\frac{\alpha}{z}e^{\alpha\mathrm{Log}(z)}=\alpha\,z^{\alpha-1}$ (car $z^{\alpha-1}=e^{\alpha\mathrm{Log} z}e^{-\mathrm{Log} z}=z^{\alpha}/z$). De même $\alpha\mapsto e^{\alpha\,\mathrm{Log}(z)}$ est l'exponentielle d'une fonction affine de $\alpha$, donc entière, de dérivée $\mathrm{Log}(z)\,z^{\alpha}$.
* *Cohérence.* Pour $\alpha=n\in\Z$, $e^{n\mathrm{Log}(z)}=(e^{\mathrm{Log}(z)})^n=z^n$ : on retrouve la puissance usuelle. Pour $x>0$ et $\alpha\in\R$, $x^{\alpha}=e^{\alpha\log x}$ est la puissance réelle. Plus généralement $(h^{1/n})^{n}=e^{\mathrm{Log}(h)}=h$ et $h^{\alpha}h^{\beta}=h^{\alpha+\beta}$ (même détermination).
* *Module.* Pour $z=re^{i\theta}$, $\theta\in]-\pi,\pi[$ : $z^{\alpha}=e^{\alpha(\log r+i\theta)}$, donc $|z^{\alpha}|=r^{\Re\alpha}\,e^{-\theta\,\Im\alpha}$ ; en particulier $|z^{\alpha}|=|z|^{\alpha}$ si $\alpha\in\R$.
* *Pas de racine carrée holomorphe sur $\C$.* Si $s\in\Hol(\C)$ vérifiait $s(z)^2=z$, alors $s(0)=0$ et, en dérivant, $2s(z)s'(z)=1$ ; en $z=0$ : $0=1$, absurde. Il n'y a même pas de racine carrée **continue** sur $\C^\times$ : sur le connexe $\C\setminus\R_-$, $s/\sqrt z$ serait continue à valeurs dans $\{\pm1\}$ (son carré vaut $1$), donc constante $=\eps$ ; mais pour $x<0$, $\sqrt{x+iy}\to\pm i\sqrt{|x|}$ quand $y\to0^{\pm}$ (car $\mathrm{Log}(x+iy)\to\log|x|\pm i\pi$), et la continuité de $s$ en $x$ donnerait $\eps i\sqrt{|x|}=-\eps i\sqrt{|x|}$.

## Hypothèses

### H1 — le choix d'une détermination du logarithme

**Rôle.** $h^{\alpha}$ **dépend de la détermination choisie** : si l'on remplace $\mathrm{Log}(h)$ par $\mathrm{Log}(h)+2ik\pi$, $h^{\alpha}$ est multiplié par $e^{2ik\pi\alpha}$.

**Si on l'ignore.** Pour $\alpha\in\Z$ aucun problème ($e^{2ik\pi\alpha}=1$). Pour $\alpha=p/q$ irréductible, on obtient $q$ fonctions différentes ($\sqrt z$ et $-\sqrt z$ pour $\alpha=\frac12$) ; pour $\alpha\notin\Q$, une infinité. Par exemple $1^{1/2}$ vaut $1$ pour $\mathrm{Log}$ et $e^{\frac12\cdot2i\pi}=-1$ pour $\mathrm{Log}+2i\pi$.

### H2 — $h$ sans zéro, sur un domaine où un logarithme de $h$ existe

**Rôle.** La définition présuppose un logarithme de $h$ (par exemple $\Omega$ simplement connexe, [[ch02-logarithme-existence]]).

**Si on la retire.** Sur $\C^\times$, $z$ n'a pas de logarithme et $\sqrt z$ n'a pas de détermination continue (voir ci-dessus) ; on est obligé de couper le plan.

## Exemples

* **$i^{i}$ est réel.** $i^{i}=e^{i\,\mathrm{Log}(i)}=e^{i\cdot i\pi/2}=e^{-\pi/2}\approx0{,}2079$ (pour la détermination principale ; avec $\mathrm{Log}+2ik\pi$ on obtiendrait $e^{-\pi/2-2k\pi}$).
* **Série du binôme.** Pour $|w|<1$, $1+w\in D(1,1)\subset\C\setminus\R_-$ et
$$
(1+w)^{\alpha}=\sum_{n\ge0}\binom{\alpha}{n}w^{n},\qquad \binom{\alpha}{n}:=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}.
$$
En effet $w\mapsto(1+w)^{\alpha}$ est holomorphe sur $D(0,1)$, sa dérivée $n$-ième est $\alpha(\alpha-1)\cdots(\alpha-n+1)(1+w)^{\alpha-n}$ (par la formule $(z^{\beta})'=\beta z^{\beta-1}$ itérée), qui vaut $\alpha(\alpha-1)\cdots(\alpha-n+1)$ en $w=0$, et une fonction holomorphe sur $D(0,1)$ y est somme de sa série de Taylor en $0$ ([[ch01-holomorphe-analytique]]).
* **Les règles de calcul tombent.** Pour $z_1=z_2=e^{3i\pi/4}$ : $z_1z_2=e^{3i\pi/2}=-i$ et $\sqrt{z_1z_2}=e^{\frac12\mathrm{Log}(-i)}=e^{-i\pi/4}$, alors que $\sqrt{z_1}\sqrt{z_2}=e^{3i\pi/8}e^{3i\pi/8}=e^{3i\pi/4}=-e^{-i\pi/4}$. De même, pour $z=e^{3i\pi/4}$ : $z^{2}=-i$, $(z^{2})^{1/2}=e^{-i\pi/4}\neq z=z^{2\cdot\frac12}$.

## Pièges

* > ⚠️ $(z_1z_2)^{\alpha}\neq z_1^{\alpha}z_2^{\alpha}$ et $(z^{\alpha})^{\beta}\neq z^{\alpha\beta}$ en général (le défaut est un facteur $e^{2ik\pi\alpha}$, resp. $e^{2ik\pi\beta}$, venant de $\mathrm{Log}(z_1z_2)=\mathrm{Log}\,z_1+\mathrm{Log}\,z_2 \bmod 2i\pi$). Seule $z^{\alpha}z^{\beta}=z^{\alpha+\beta}$ est toujours vraie (même détermination).
* $z^{\alpha}$ (principal) n'est pas défini sur $\R_-$ ; pour un contour qui traverse $\R_-$ (par exemple autour du pôle $-1$), on prend une autre détermination, de coupure $\R_+$ : voir [[ch02-exemple-trou-de-serrure]], où $z^{\alpha-1}$ a l'argument dans $]0,2\pi[$.
* $|z^{\alpha}|=|z|^{\Re\alpha}e^{-\theta\Im\alpha}$ : pour $\alpha$ non réel, le module dépend de l'argument. Pour $\alpha$ réel, $|z^{\alpha}|=|z|^{\alpha}$ — c'est ce qu'on utilise pour majorer les intégrales sur les arcs de cercle.
* $h^{\alpha}$ n'est pas $(\cdot)^{\alpha}\circ h$ en général (même mise en garde que pour $\mathrm{Log}(h)\neq\mathrm{Log}\circ h$).
