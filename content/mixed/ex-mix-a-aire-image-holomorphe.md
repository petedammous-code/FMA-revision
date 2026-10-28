---
id: ex-mix-a-aire-image-holomorphe
type: exercise
chapters: [1, 6, 5]
title: Aire de l'image d'un disque par une fonction holomorphe injective
source: "Classique (formule de l'aire des fonctions univalentes, dans l'esprit du théorème de l'aire de Gronwall), adapté et complété"
difficulty: 3
time: 40
tools: [ch01-similitude-conforme, ch01-bijection-holomorphe-reciproque-holomorphe, ch01-application-ouverte, ch06-inversion-globale, ch05-matrice-jacobienne, ch01-serie-entiere-holomorphe]
---
## Énoncé

On note $D=D(0,1)$ et $\mathrm{Aire}(A)$ la mesure de Lebesgue d'un ouvert $A\subset\C=\R^2$. On rappelle la **formule du changement de variables** : si $\Phi:U\to V$ est un $C^1$-difféomorphisme entre deux ouverts de $\R^2$ et $g:V\to[0,+\infty]$ est mesurable, alors $\int_V g=\int_U (g\circ\Phi)\,|\mathrm{Jac}(\Phi)|$ ; en particulier $\mathrm{Aire}(V)=\int_U|\mathrm{Jac}(\Phi)|$.

1. Soit $f=P+iQ$ holomorphe sur un ouvert $\Omega$, vue comme application de $\Omega\subset\R^2$ dans $\R^2$. Montrer que $\mathrm{Jac}(f)(z)=|f'(z)|^2$.
2. Soit $f\in\Hol(D)$ **injective**. Montrer que $f(D)$ est ouvert et que $f$ est un $C^\infty$-difféomorphisme de $D$ sur $f(D)$.
3. On écrit $f(z)=\sum_{n\ge0}a_nz^n$ sur $D$. Montrer que, pour $0<r<1$,
$$
\mathrm{Aire}\big(f(D(0,r))\big)=\pi\sum_{n\ge1}n\,|a_n|^2\,r^{2n},
$$
puis que $\mathrm{Aire}(f(D))=\pi\sum_{n\ge1}n|a_n|^2\in\,]0,+\infty]$.
4. En déduire :
   * (a) $\mathrm{Aire}(f(D(0,r)))\ge\pi r^2|f'(0)|^2$, avec égalité pour un $r\in\,]0,1[$ si et seulement si $f$ est affine ;
   * (b) si de plus $f(D)\subset D$, alors $|f'(0)|\le1$, avec égalité si et seulement si $f$ est une rotation $z\mapsto e^{i\theta}z$.
5. Pour $a\in\C$, soit $f_a(z)=z+az^2$. Montrer que $f_a$ est injective sur $D$ si et seulement si $|a|\le\frac12$, et calculer alors $\mathrm{Aire}(f_a(D))$. Quelle est l'aire maximale ainsi obtenue ?
6. * (a) Montrer que $\Phi(x)=\dfrac{x}{\sqrt{1+|x|^2}}$ est un $C^\infty$-difféomorphisme de $\R^2$ sur $D$.
   * (b) Montrer que si $f\in\Hol(\C)$ est injective, $f(\C)$ est d'aire infinie. En déduire qu'il n'existe aucun biholomorphisme de $\C$ sur $D$.

## Indices

### Indice 1
Question 1 : la matrice jacobienne d'une fonction holomorphe est celle d'une similitude directe. Question 2 : il faut d'abord savoir que $f'$ ne s'annule pas, puis appliquer un théorème d'inversion **globale**.

### Indice 2
Question 3 : changement de variables avec $\Phi=f|_{D(0,r)}$, puis coordonnées polaires. Sur le cercle $|z|=\rho<1$, développer $|f'(\rho e^{i\theta})|^2=f'\,\overline{f'}$ en double série et utiliser $\int_0^{2\pi}e^{i(n-m)\theta}\,d\theta=2\pi\,\delta_{n,m}$.

### Indice 3
Question 5 : $f_a(z)-f_a(w)=(z-w)\big(1+a(z+w)\big)$, et si $|a|>\frac12$ le point $-\frac1{2a}$ est dans $D$. Question 6(b) : la formule de la question 3 vaut sur tout disque $D(0,r)$ pour une fonction entière ; que vaut $f'(0)$ ?

## Corrigé

**1.** $f$ est holomorphe, donc différentiable au sens réel et $df_z$ est la multiplication par $f'(z)=\alpha+i\beta$ ([[ch01-c-derivable-ssi-df-c-lineaire]]). Dans la base canonique $(1,i)$ de $\R^2$, sa matrice (la matrice jacobienne, [[ch05-matrice-jacobienne]]) est celle d'une similitude directe ([[ch01-similitude-conforme]]) :
$$
\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix},\qquad \mathrm{Jac}(f)(z)=\alpha^2+\beta^2=|f'(z)|^2 .
$$
(Avec les conditions de Cauchy–Riemann : $\alpha=\partial_xP=\partial_yQ$, $\beta=\partial_xQ=-\partial_yP$, [[ch01-cauchy-riemann]].)

**2.** $D$ est connexe et $f$ n'est pas constante (elle est injective), donc $f(D)$ est ouvert par le théorème de l'application ouverte ([[ch01-application-ouverte]]). Ainsi $f:D\to f(D)$ est une bijection holomorphe entre deux ouverts ; par [[ch01-bijection-holomorphe-reciproque-holomorphe]], $f'$ ne s'annule pas sur $D$. Donc, pour tout $z\in D$, $df_z$ (multiplication par $f'(z)\ne0$) est un isomorphisme de $\R^2$. Enfin $f$ est $C^\infty$ au sens réel (holomorphe donc $C^\infty$, [[ch01-holomorphe-analytique]]). Le théorème d'inversion globale ([[ch06-inversion-globale]]), appliqué pour chaque $k\ge1$ à $f:D\to\R^2$ injective de différentielle partout inversible, montre que $f^{-1}:f(D)\to D$ est $C^k$ pour tout $k$ : $f$ est un $C^\infty$-difféomorphisme de $D$ sur $f(D)$ (et $f^{-1}$ est même holomorphe).

**3.** Soit $0<r<1$. La restriction de $f$ à $D(0,r)$ est encore holomorphe et injective, donc (question 2, même preuve) un $C^\infty$-difféomorphisme de $D(0,r)$ sur l'ouvert $f(D(0,r))$. Par la formule du changement de variables et la question 1,
$$
A(r):=\mathrm{Aire}\big(f(D(0,r))\big)=\iint_{D(0,r)}|f'(x+iy)|^2\,dx\,dy=\int_0^r\Big(\int_0^{2\pi}|f'(\rho e^{i\theta})|^2\,d\theta\Big)\rho\,d\rho,
$$
la dernière égalité par passage en coordonnées polaires.

*Calcul sur un cercle.* La série entière $f$ a un rayon de convergence $\ge1$, donc $f'(z)=\sum_{n\ge1}na_nz^{n-1}$ sur $D$ ([[ch01-serie-entiere-holomorphe]]), et pour $0<\rho<1$ la série $\sum_n n|a_n|\rho^{n-1}$ converge. Alors
$$
|f'(\rho e^{i\theta})|^2=\sum_{n,m\ge1}n\,m\,a_n\overline{a_m}\,\rho^{n+m-2}e^{i(n-m)\theta},
$$
et la double série converge normalement en $\theta\in[0,2\pi]$ (ses termes sont majorés par $n|a_n|\rho^{n-1}\cdot m|a_m|\rho^{m-1}$, sommable). On peut donc intégrer terme à terme ; comme $\int_0^{2\pi}e^{i(n-m)\theta}d\theta=2\pi\delta_{n,m}$,
$$
\int_0^{2\pi}|f'(\rho e^{i\theta})|^2\,d\theta=2\pi\sum_{n\ge1}n^2|a_n|^2\rho^{2n-2}.
$$
*Intégration en $\rho$.* Les termes étant positifs, on intervertit série et intégrale (convergence monotone) :
$$
A(r)=2\pi\sum_{n\ge1}n^2|a_n|^2\int_0^r\rho^{2n-1}\,d\rho=2\pi\sum_{n\ge1}n^2|a_n|^2\frac{r^{2n}}{2n}=\pi\sum_{n\ge1}n|a_n|^2r^{2n}.
$$
*Cas $r=1$.* $f(D)=\bigcup_{r<1}f(D(0,r))$ est une réunion croissante, donc $\mathrm{Aire}(f(D))=\lim_{r\to1^-}A(r)$ (continuité croissante de la mesure), et par convergence monotone cette limite vaut $\pi\sum_{n\ge1}n|a_n|^2\in[0,+\infty]$. Elle est $>0$ car $a_1=f'(0)\ne0$ (question 2).

**4. (a)** Dans la formule de la question 3, tous les termes sont positifs, donc
$$
A(r)\ge\pi\cdot1\cdot|a_1|^2r^2=\pi r^2|f'(0)|^2,
$$
avec égalité si et seulement si $n|a_n|^2r^{2n}=0$ pour tout $n\ge2$, c'est-à-dire $a_n=0$ pour $n\ge2$ (car $r>0$) : $f(z)=a_0+a_1z$ est affine. Réciproquement, pour $f$ affine injective l'égalité a lieu pour tout $r$. (Interprétation : $\frac{A(r)}{\pi r^2}=\sum_n n|a_n|^2r^{2n-2}$ est croissante en $r$, de limite $|f'(0)|^2$ en $0$.)

**(b)** Si $f(D)\subset D$, alors $\mathrm{Aire}(f(D))\le\pi$, donc $\sum_{n\ge1}n|a_n|^2\le1$ et en particulier $|f'(0)|=|a_1|\le1$. Si $|a_1|=1$, alors $\sum_{n\ge2}n|a_n|^2\le0$, donc $f(z)=a_0+a_1z$ et $f(D)=D(a_0,1)\subset D$. Si $a_0\ne0$, le point $a_0+s\frac{a_0}{|a_0|}$ avec $1-|a_0|<s<1$ est dans $D(a_0,1)$ mais de module $|a_0|+s>1$ : contradiction. Donc $a_0=0$ et $f(z)=e^{i\theta}z$. Réciproquement une rotation convient.

(Le lemme de Schwarz [[ch01-lemme-schwarz]] donne $|f'(0)|\le1$ sous l'hypothèse $f(0)=0$ mais **sans** l'injectivité ; ici on a supposé l'injectivité mais **pas** $f(0)=0$.)

**5.** *Si $|a|\le\frac12$, $f_a$ est injective sur $D$.* Pour $z,w\in D$,
$$
f_a(z)-f_a(w)=(z-w)+a(z^2-w^2)=(z-w)\big(1+a(z+w)\big),
$$
et $|a(z+w)|<2|a|\le1$, donc $1+a(z+w)\ne0$ : $f_a(z)=f_a(w)\Rightarrow z=w$.

*Si $|a|>\frac12$, $f_a$ n'est pas injective sur $D$.* Le point $z_1=-\frac1{2a}$ vérifie $|z_1|<1$ et $f_a'(z_1)=1+2az_1=0$. Si $f_a$ était injective sur $D$, la question 2 donnerait $f_a'\ne0$ sur $D$ : contradiction. (Explicitement : pour $z=z_1+\eta$, $w=z_1-\eta$ avec $\eta\ne0$ petit, $z+w=2z_1=-\frac1a$ donc $f_a(z)=f_a(w)$.)

*Aire.* Pour $|a|\le\frac12$, $a_1=1$, $a_2=a$, les autres coefficients sont nuls, et la question 3 donne
$$
\mathrm{Aire}(f_a(D))=\pi\big(1+2|a|^2\big)\le\pi\Big(1+\frac24\Big)=\frac{3\pi}2,
$$
le maximum $\frac{3\pi}{2}$ étant atteint exactement pour $|a|=\frac12$. (Vérification numérique : l'aire du domaine bordé par la courbe $\theta\mapsto f_{1/2}(e^{i\theta})$, calculée par la formule $\frac12\oint(x\,dy-y\,dx)$, vaut $4{,}712389\approx\frac{3\pi}2$.)

**6. (a)** $\Phi$ est $C^\infty$ sur $\R^2$ (quotient de fonctions $C^\infty$, le dénominateur ne s'annulant pas) et $|\Phi(x)|=\frac{|x|}{\sqrt{1+|x|^2}}<1$, donc $\Phi(\R^2)\subset D$. Soit $\Psi(y)=\dfrac{y}{\sqrt{1-|y|^2}}$ pour $y\in D$, de classe $C^\infty$ sur $D$. Pour $x\in\R^2$, $1-|\Phi(x)|^2=\frac1{1+|x|^2}$, donc $\Psi(\Phi(x))=x$ ; pour $y\in D$, $1+|\Psi(y)|^2=\frac1{1-|y|^2}$, donc $\Phi(\Psi(y))=y$. Ainsi $\Phi$ est une bijection de $\R^2$ sur $D$ de réciproque $\Psi$, toutes deux $C^\infty$ : c'est un $C^\infty$-difféomorphisme ([[ch06-diffeomorphisme-def]]).

**(b)** Soit $f\in\Hol(\C)$ injective, $f(z)=\sum a_nz^n$ (rayon infini). La preuve des questions 2 et 3 s'applique mot pour mot sur $D(0,r)$ pour **tout** $r>0$ : $f'(0)\neq0$ et
$$
\mathrm{Aire}(f(\C))\ge\mathrm{Aire}\big(f(D(0,r))\big)\ge\pi r^2|f'(0)|^2\xrightarrow[r\to+\infty]{}+\infty .
$$
Un biholomorphisme $f:\C\to D$ serait une fonction entière injective d'image $D$, d'aire $\pi<+\infty$ : impossible. Donc $\R^2$ et $D$ sont $C^\infty$-difféomorphes, mais $\C$ et $D$ ne sont pas biholomorphes. (Liouville, [[ch01-liouville]], le redit plus vite : une fonction entière à valeurs dans $D$ est bornée, donc constante.)

## Pièges et variantes

* **Injectivité indispensable** dans la question 3. Pour $f(z)=z^2$ sur $D$ : $\iint_D|f'|^2=\iint_D4|z|^2=2\pi=\pi\sum n|a_n|^2$, alors que $f(D)=D$ est d'aire $\pi$. Sans injectivité, $\iint|f'|^2$ compte l'aire **avec multiplicité** (ici chaque point est atteint deux fois).
* **$f'\neq0$ n'est pas une hypothèse** : c'est une conséquence de l'injectivité ([[ch01-bijection-holomorphe-reciproque-holomorphe]]). Inversement $f'\ne0$ ne donne pas l'injectivité : $\exp$ sur $D(0,4)$.
* **Inversion locale ne suffit pas** pour la question 2 : il faut un difféomorphisme sur tout $D$ pour appliquer le changement de variables ; c'est l'injectivité qui fait passer du local au global ([[ch06-inversion-globale]]).
* Ne pas oublier que la formule du changement de variables fait intervenir $|\mathrm{Jac}|$ ; ici $\mathrm{Jac}=|f'|^2>0$ (une fonction holomorphe préserve l'orientation), la valeur absolue est sans effet.
* Variante : pour $f$ injective sur $D$ avec $f(0)=0$, $f'(0)=1$, on obtient $\mathrm{Aire}(f(D))\ge\pi$. Variante plus difficile (théorème de l'aire de Gronwall) : pour $g(z)=z+b_0+\sum_{n\ge1}b_nz^{-n}$ injective sur $\{|z|>1\}$, on a $\sum n|b_n|^2\le1$, d'où l'inégalité de Bieberbach $|a_2|\le2$ pour les fonctions univalentes normalisées.
