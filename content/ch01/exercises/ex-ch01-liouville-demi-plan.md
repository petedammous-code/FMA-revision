---
id: ex-ch01-liouville-demi-plan
type: exercise
chapters: [1]
title: Fonctions entières contraintes — trois variations sur Liouville
source: "Classique (q. 1–2 : cf. Stein–Shakarchi, ch. 2 ; q. 3 : exercice classique, rédaction originale)"
difficulty: 2
time: 30
tools: [ch01-liouville, ch01-stabilite-operations, ch01-exp-trigo-hyperboliques, ch01-cayley-disque-demi-plan, ch01-def-multiplicite-zero, ch01-holomorphe-analytique, ch01-integrale-primitive]
---
## Énoncé

Dans tout l'exercice, $f:\C\to\C$ est une fonction holomorphe sur $\C$ (on dit que $f$ est **entière**).

1. On suppose qu'il existe un réel $M$ tel que $\Re f(z)\le M$ pour tout $z\in\C$. Montrer que $f$ est constante.
2. On suppose que $\Im f(z)>0$ pour tout $z\in\C$. Montrer que $f$ est constante.
3. On suppose que $|f'(z)|\le|f(z)|$ pour tout $z\in\C$.
   * (a) Montrer que si $f$ n'est pas identiquement nulle, alors $f$ ne s'annule en aucun point de $\C$.
   * (b) En déduire qu'il existe $c\in\C$ et $a\in\C$ avec $|a|\le1$ tels que $f(z)=c\,e^{az}$ pour tout $z\in\C$. Réciproquement, ces fonctions vérifient-elles l'hypothèse ?

## Indices

### Indice 1
Dans chaque question, l'hypothèse n'est pas « $f$ bornée ». Il faut fabriquer, à partir de $f$, une **autre** fonction entière qui, elle, est bornée — puis revenir à $f$.

### Indice 2
Q1 : $|e^{w}|=e^{\Re w}$. Q2 : la transformation de Cayley $z\mapsto i\frac{1-z}{1+z}$ envoie le disque unité $D$ sur le demi-plan $H=\{\Im w>0\}$ ; composer $f$ avec son inverse. Q3 (b) : si $f$ ne s'annule pas, $f'/f$ est entière et bornée.

### Indice 3
Q3 (a) : si $f(z_0)=0$ avec $f\not\equiv0$, écrire $f(z)=(z-z_0)^m h(z)$ près de $z_0$ avec $h(z_0)\neq0$, et calculer $f'(z)/f(z)$ : on trouve $\frac{m}{z-z_0}+\frac{h'(z)}{h(z)}$, qui n'est pas borné près de $z_0$.

## Corrigé

**1.** La fonction $g=e^{f}$ est entière, comme composée de $f$ et de l'exponentielle, toutes deux holomorphes sur $\C$ ([[ch01-exp-trigo-hyperboliques]], [[ch01-stabilite-operations]]). Pour tout $z$,
$$
|g(z)|=\left|e^{f(z)}\right|=e^{\Re f(z)}\le e^{M}.
$$
Donc $g$ est entière et bornée : par le théorème de Liouville (poly, Théorème I.10.1, p. 26, [[ch01-liouville]]), $g$ est constante, d'où $g'=f'e^{f}\equiv0$. Comme $e^{f(z)}\neq0$, on obtient $f'\equiv0$ sur $\C$. Enfin, pour tout $z$, $f$ étant une primitive holomorphe de $f'$, on a $f(z)-f(0)=\int_{[0,z]}f'(w)\,dw=0$ ([[ch01-integrale-primitive]]) : **$f$ est constante.**

**2.** Notons $D=D(0,1)$ et $H=\{w\in\C:\Im w>0\}$. D'après l'exemple I.4.3 (poly, p. 13, [[ch01-cayley-disque-demi-plan]]), $\varphi(z)=i\frac{1-z}{1+z}$ est un biholomorphisme de $D$ sur $H$. Calculons son inverse : pour $w\in H$, $w=i\frac{1-z}{1+z}\iff w+wz=i-iz\iff z(w+i)=i-w$, d'où
$$
\varphi^{-1}(w)=\frac{i-w}{i+w}\qquad(w\in H).
$$
(Vérification directe que $\varphi^{-1}(H)\subset D$ : $|w-i|^2=|w|^2+1-2\Im w$ et $|w+i|^2=|w|^2+1+2\Im w$, donc $|w-i|<|w+i|$ dès que $\Im w>0$.)

Posons $g=\frac{i-f}{i+f}$. Comme $\Im f(z)>0$, on a $f(z)\neq-i$ pour tout $z$ : le dénominateur ne s'annule pas et $g$ est entière (quotient de fonctions entières à dénominateur sans zéro, [[ch01-stabilite-operations]]). De plus $g(z)=\varphi^{-1}(f(z))\in D$, donc $|g|\le1$. Par Liouville, $g$ est constante égale à un $c\in D$, et $f=\varphi\circ g$ est constante égale à $\varphi(c)$. **$f$ est constante.**

*Variante plus rapide :* $|e^{if}|=e^{-\Im f}\le1$, et on conclut comme en 1.

**3. (a)** Supposons $f\not\equiv0$ et, par l'absurde, $f(z_0)=0$ pour un $z_0\in\C$. Comme $\C$ est connexe et $f\not\equiv0$, la définition I.11.2 (poly, p. 27, [[ch01-def-multiplicite-zero]]) fournit un entier $m\ge1$, un rayon $r>0$ et $h$ holomorphe sur $D(z_0,r)$ avec $h(z_0)\neq0$ tels que
$$
f(z)=(z-z_0)^m h(z)\qquad (z\in D(z_0,r)).
$$
Quitte à diminuer $r$, $h$ ne s'annule pas sur $D(z_0,r)$ (continuité de $h$ en $z_0$). Alors pour $z\in D(z_0,r)\setminus\{z_0\}$, $f(z)\neq0$ et
$$
f'(z)=(z-z_0)^{m-1}\big(m\,h(z)+(z-z_0)h'(z)\big),\qquad
\frac{|f'(z)|}{|f(z)|}=\frac{|m\,h(z)+(z-z_0)h'(z)|}{|z-z_0|\,|h(z)|}.
$$
Quand $z\to z_0$, le numérateur tend vers $m|h(z_0)|>0$ (car $h'$ est continue, $h$ étant holomorphe donc $C^\infty$ par [[ch01-holomorphe-analytique]]) et le dénominateur tend vers $0$ : le quotient tend vers $+\infty$, ce qui contredit $|f'(z)|\le|f(z)|$, c'est-à-dire $|f'(z)|/|f(z)|\le1$. **Donc $f$ ne s'annule pas.**

**(b)** Si $f\equiv0$, on a $f=c\,e^{az}$ avec $c=0$ (et $a=0$ par exemple). Sinon, d'après (a), $f$ ne s'annule pas sur $\C$. La fonction $f'$ est entière ([[ch01-holomorphe-analytique]] : une fonction holomorphe a une dérivée holomorphe), donc $g=f'/f$ est entière ([[ch01-stabilite-operations]]) et $|g|\le1$ par hypothèse. Par Liouville, $g$ est constante : $g\equiv a$ avec $|a|\le1$.

Posons $\psi(z)=f(z)e^{-az}$, entière. Alors $\psi'(z)=\big(f'(z)-af(z)\big)e^{-az}=0$ pour tout $z$, donc, comme en 1, $\psi(z)-\psi(0)=\int_{[0,z]}\psi'(w)\,dw=0$ : $\psi\equiv c:=f(0)$. Ainsi **$f(z)=c\,e^{az}$** avec $|a|\le1$.

*Réciproque.* Si $f(z)=ce^{az}$ avec $|a|\le1$, alors $f'=af$ et $|f'(z)|=|a|\,|f(z)|\le|f(z)|$. L'ensemble des solutions est donc exactement $\{z\mapsto ce^{az} : c\in\C,\ |a|\le1\}$.

## Pièges et variantes

* Liouville s'applique à une fonction **entière** : en Q2, vérifier explicitement que le dénominateur $i+f$ ne s'annule pas (sinon $g$ n'est pas définie partout).
* Ne pas oublier de **revenir à $f$** : « $e^f$ constante » ne donne pas immédiatement « $f$ constante » ; il faut un argument ($f'e^f=0$ et $e^f\ne0$, puis connexité de $\C$).
* En Q3 (a), l'argument repose sur la **factorisation locale** $f=(z-z_0)^mh$, qui exige $f\not\equiv0$ sur un **connexe** : c'est l'hypothèse de la définition I.11.2.
* Erreur classique en Q3 (b) : diviser par $f$ sans avoir montré qu'elle ne s'annule pas.
* Variante : si $f$ est entière et évite un disque $D(\alpha,r)$ ($r>0$), alors $1/(f-\alpha)$ est entière et bornée par $1/r$, donc $f$ est constante — c'est la démonstration de « l'image d'une fonction entière non constante est dense » ([[ch01-liouville-consequences-image-dense-croissance-polynomiale]]).
* Variante : si $|f'(z)|\le|z|\,|f(z)|$, le même schéma donne $f'/f$ entière de croissance au plus linéaire, donc un polynôme de degré $\le1$ (estimées de Cauchy), et $f(z)=c\,e^{\alpha z+\beta z^2}$ avec $\alpha=0$ et $|\beta|\le\frac12$ (car $|\alpha+2\beta z|\le|z|$ pour tout $z$ force $\alpha=0$ en $z=0$).
