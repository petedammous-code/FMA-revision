---
id: ex-ch02-integrale-noyau-poisson
type: exercise
chapters: [2]
title: Une famille d'intégrales trigonométriques (noyau de Poisson)
source: "Classique (intégrale du noyau de Poisson, calcul standard par les résidus)"
difficulty: 1
time: 15
tools: [ch02-formule-residus, ch02-indice-cercle, ch02-residu-pole-simple, ch01-integrale-sur-cercle]
---
## Énoncé

Soit $a\in\,]0,1[$. Pour $n\in\N$, on pose
$$
I_n(a)=\int_0^{2\pi}\frac{\cos(n\theta)}{1-2a\cos\theta+a^2}\,d\theta .
$$
1. Justifier que $I_n(a)$ est bien définie, puis vérifier que, pour $z=e^{i\theta}$, on a $1-2a\cos\theta+a^2=\dfrac{(z-a)(1-az)}{z}$.
2. Calculer $I_n(a)$ pour tout $n\in\N$.
3. En déduire les valeurs de $\displaystyle\int_0^{2\pi}\frac{d\theta}{5-4\cos\theta}$ et de $\displaystyle\int_0^{2\pi}\frac{\cos(2\theta)}{5-4\cos\theta}\,d\theta$.

## Indices

### Indice 1
Une intégrale sur $[0,2\pi]$ d'une fraction rationnelle en $\cos\theta$ et $\sin\theta$ : la transformer en intégrale sur le cercle unité $C(0,1)$ en posant $z=e^{i\theta}$.

### Indice 2
Il est plus simple de calculer $\int_0^{2\pi}\frac{e^{in\theta}}{1-2a\cos\theta+a^2}\,d\theta$ puis d'en prendre la partie réelle. Avec $dz=iz\,d\theta$, on obtient l'intégrale sur $C(0,1)$ d'une fraction rationnelle : appliquer la formule des résidus sur $\C$ (simplement connexe), en repérant quels pôles sont à l'intérieur du cercle.

### Indice 3
On trouve
$$
\int_0^{2\pi}\frac{e^{in\theta}}{1-2a\cos\theta+a^2}\,d\theta=\frac1i\int_{C(0,1)}\frac{z^n}{(z-a)(1-az)}\,dz ,
$$
avec un pôle simple en $a$ (indice $1$) et un pôle en $1/a$ (indice $0$).

## Corrigé

**1.** Pour $\theta\in\R$, $1-2a\cos\theta+a^2\ge 1-2a+a^2=(1-a)^2>0$ : l'intégrande est continu sur le compact $[0,2\pi]$, donc $I_n(a)$ est bien définie. Pour $z=e^{i\theta}$, $\cos\theta=\frac12\left(z+\frac1z\right)$ et
$$
\frac{(z-a)(1-az)}{z}=\frac{z-az^2-a+a^2z}{z}=1+a^2-a\left(z+\frac1z\right)=1-2a\cos\theta+a^2 .
$$

**2.** Posons $J_n=\int_0^{2\pi}\frac{e^{in\theta}}{1-2a\cos\theta+a^2}\,d\theta$, de sorte que $I_n(a)=\Re(J_n)$ (le dénominateur est réel).

*Passage au cercle.* On paramètre le cercle unité par $\gamma(\theta)=e^{i\theta}$, $\theta\in[0,2\pi]$ (sens direct, [[ch01-cercle-sens-direct]]) ; pour $F$ continue sur le cercle, $\int_{C(0,1)}F(z)\,dz=\int_0^{2\pi}F(e^{i\theta})\,ie^{i\theta}\,d\theta$ ([[ch01-integrale-sur-cercle]]). Avec la question 1 et $d\theta=\frac{dz}{iz}$ :
$$
J_n=\int_{C(0,1)}z^n\cdot\frac{z}{(z-a)(1-az)}\cdot\frac{dz}{iz}=\frac1i\int_{C(0,1)}f(z)\,dz,\qquad f(z)=\frac{z^n}{(z-a)(1-az)} .
$$

*Hypothèses de la formule des résidus.* $f$ est une fraction rationnelle, donc méromorphe sur $\Omega=\C$, qui est simplement connexe (convexe donc étoilé, [[ch02-etoile-simplement-connexe]]). Ses pôles sont parmi $a$ et $1/a$ (zéros du dénominateur), et ce sont des pôles simples : le numérateur $z^n$ ne s'annule ni en $a$ ni en $1/a$. Comme $0<a<1<1/a$, aucun pôle n'est sur le cercle $C(0,1)$ : le lacet est bien inclus dans $\C\setminus\mathcal P(f,\C)$.

*Indices.* D'après [[ch02-indice-cercle]], $\Ind_a(C(0,1))=1$ car $|a|<1$, et $\Ind_{1/a}(C(0,1))=0$ car $1/a>1$.

*Résidu en $a$.* Pôle simple : $\Res_a(f)=\lim_{z\to a}(z-a)f(z)=\dfrac{a^n}{1-a^2}$ ([[ch02-residu-pole-simple]]).

*Conclusion.* La formule des résidus ([[ch02-formule-residus]]) donne
$$
\frac1{2i\pi}\int_{C(0,1)}f(z)\,dz=\Res_a(f)\cdot 1+\Res_{1/a}(f)\cdot 0=\frac{a^n}{1-a^2},
\qquad\text{donc}\qquad J_n=\frac1i\cdot 2i\pi\,\frac{a^n}{1-a^2}=\frac{2\pi a^n}{1-a^2}.
$$
$J_n$ est réel, donc
$$
I_n(a)=\frac{2\pi\,a^n}{1-a^2}\qquad(n\in\N),
$$
et au passage $\int_0^{2\pi}\frac{\sin(n\theta)}{1-2a\cos\theta+a^2}\,d\theta=\Im(J_n)=0$ (ce qu'on voyait aussi par le changement de variable $\theta\mapsto 2\pi-\theta$).

**3.** $5-4\cos\theta=4\left(\frac54-\cos\theta\right)=4\left(1-2\cdot\frac12\cos\theta+\frac14\right)$ : c'est $4$ fois le dénominateur avec $a=\frac12$. Donc
$$
\int_0^{2\pi}\frac{d\theta}{5-4\cos\theta}=\frac14I_0\!\left(\tfrac12\right)=\frac14\cdot\frac{2\pi}{3/4}=\frac{2\pi}3,
\qquad
\int_0^{2\pi}\frac{\cos(2\theta)}{5-4\cos\theta}\,d\theta=\frac14I_2\!\left(\tfrac12\right)=\frac14\cdot\frac{2\pi\cdot\frac14}{3/4}=\frac\pi6 .
$$
(Valeurs vérifiées numériquement : $2{,}0944\ldots$ et $0{,}5236\ldots$.)

## Pièges et variantes

* **Oublier le facteur $\frac1{iz}$** venant de $d\theta=\frac{dz}{iz}$ : c'est lui qui fait disparaître un $z$ et qui donne le $\frac1i$ devant l'intégrale. Faute la plus fréquente.
* **Compter le pôle $1/a$** : il est hors du disque, son indice est nul ; l'inclure donnerait $0$ (la somme des deux résidus est nulle pour $n=0$, par exemple).
* Remplacer $\cos(n\theta)$ par $\frac12(z^n+z^{-n})$ marche aussi, mais crée un pôle d'ordre $n$ en $0$ dont le résidu est pénible : passer par $e^{in\theta}$ puis prendre la partie réelle est plus économique.
* **Variante $a>1$.** On a $1-2a\cos\theta+a^2=a^2\left(1-2a^{-1}\cos\theta+a^{-2}\right)$, donc $I_n(a)=a^{-2}I_n(1/a)=\dfrac{2\pi\,a^{-n}}{a^2-1}$ ; par les résidus, c'est maintenant $1/a$ qui est à l'intérieur. Pour $a=1$ l'intégrale diverge (le dénominateur s'annule en $\theta=0$) : le pôle est **sur** le contour.
* **Variante.** En sommant la série géométrique, on retrouve la décomposition du noyau de Poisson $\frac{1-a^2}{1-2a\cos\theta+a^2}=1+2\sum_{n\ge1}a^n\cos(n\theta)$, ce qui redonne $I_n(a)$ par orthogonalité des $\cos(n\theta)$.
