---
id: ex-ch04-bande-dirichlet
type: exercise
chapters: [4, 1, 2]
title: Température stationnaire dans une bande, par transport conforme
source: "Inventé (variante en bande de l'Exercice IV.4.3 du poly, p. 86, qui traite le demi-plan)"
difficulty: 3
time: 40
tools: [ch04-composition-harmonique-holomorphe, ch04-reduction-demi-plan, ch04-holomorphe-implique-harmonique, ch02-logarithme-determination-principale-def, ch04-lignes-niveau-orthogonales]
---
## Énoncé

On note $H=\{w\in\C:\Im(w)>0\}$ le demi-plan supérieur, $S=\{z\in\C: 0<\Im(z)<\pi\}$ la bande horizontale, et $\mathrm{Arg}$ l'argument principal (à valeurs dans $]-\pi,\pi[$ sur $\C\setminus\R_-$, de sorte que $\mathrm{Log}(w)=\log|w|+i\,\mathrm{Arg}(w)$).

On cherche une fonction $u:S\to\R$ **harmonique**, **bornée**, qui se prolonge continûment à $\bar S\setminus\{0\}$ avec les valeurs au bord
$$
u(x)=1\ \ (x>0),\qquad u(x)=0\ \ (x<0),\qquad u(x+i\pi)=0\ \ (x\in\R).
$$
(Interprétation : plaque infinie dont un demi-bord est chauffé.)

1. Soit $\alpha\in\R$. Montrer que $w\mapsto\mathrm{Arg}(w-\alpha)$ est harmonique sur $H$, à valeurs dans $]0,\pi[$, et déterminer sa limite quand $w\in H$ tend vers un réel $x_0\neq\alpha$.
2. Montrer que $\exp$ réalise une bijection holomorphe de $S$ sur $H$, de réciproque $\mathrm{Log}$, et décrire les images par $\exp$ des trois morceaux du bord de $S$ : $]0,+\infty[$, $]-\infty,0[$ et $\R+i\pi$.
3. En déduire une fonction $u$ solution du problème, donnée par une formule explicite, et vérifier toutes les conditions demandées.
4. Calculer $u$ sur la droite médiane $\Im(z)=\pi/2$. Pour $y\in\,]0,\pi[$ fixé, déterminer $\lim_{x\to+\infty}u(x+iy)$ et $\lim_{x\to-\infty}u(x+iy)$ ; interpréter.
5. Trouver $F\in\Hol(S)$ telle que $u=\Re F$. Donner une équation cartésienne de l'isotherme $\{u=c\}$ pour $c\in\,]0,1[$ (expliciter le cas $c=\tfrac12$), et montrer que $|\nabla u(z)|\sim\dfrac{1}{\pi|z|}$ quand $z\to0$, $z\in S$.

## Indices

### Indice 1
C'est un problème de Dirichlet sur un domaine non borné : on ne le résout pas sur $S$ directement, on le **transporte** sur un domaine où l'on connaît des fonctions harmoniques à valeurs au bord constantes par morceaux. Lesquelles sur $H$ ?

### Indice 2
$\mathrm{Arg}(w-\alpha)=\Im\,\mathrm{Log}(w-\alpha)$ est harmonique sur $H$ et vaut « $0$ à droite de $\alpha$, $\pi$ à gauche ». Par $\exp$, le morceau $]0,+\infty[$ du bord de $S$ va sur $]1,+\infty[$ et le reste du bord sur $]-\infty,1[$. Composer une fonction harmonique avec une fonction holomorphe donne une fonction harmonique.

### Indice 3
Essayer $u(z)=1-\dfrac1\pi\,\mathrm{Arg}(e^z-1)$. Pour la question 5, $-\mathrm{Arg}(w)=\Re\big(i\,\mathrm{Log}(w)\big)$, et une isotherme est l'image réciproque par $z\mapsto e^z-1$ d'une demi-droite issue de $0$.

## Corrigé

**1.** Pour $w\in H$, $w-\alpha\in H\subset\C\setminus\R_-$, donc $\psi(w)=\mathrm{Log}(w-\alpha)$ est holomorphe sur $H$ ([[ch02-logarithme-determination-principale-def]]) et $\mathrm{Arg}(w-\alpha)=\Im\,\psi(w)$ est harmonique sur $H$ ([[ch04-holomorphe-implique-harmonique]]). Comme $\Im(w-\alpha)>0$, l'argument principal de $w-\alpha$ est dans $]0,\pi[$. Plus précisément, pour $\zeta=s+it$ avec $t\ge0$ et $\zeta\neq0$, on a la formule
$$
\mathrm{Arg}(\zeta)=\arccos\Big(\frac{s}{|\zeta|}\Big)\quad\text{(pour }t>0\text{)},
$$
dont le membre de droite est continu sur $\{t\ge0\}\setminus\{0\}$. Donc, quand $w\in H$ tend vers $x_0\in\R$, $x_0\neq\alpha$ :
$$
\mathrm{Arg}(w-\alpha)\longrightarrow\arccos\Big(\frac{x_0-\alpha}{|x_0-\alpha|}\Big)=\begin{cases}0&\text{si }x_0>\alpha,\\ \pi&\text{si }x_0<\alpha.\end{cases}
$$
(Attention : pour $x_0<\alpha$, la limite $\pi$ n'est pas $\mathrm{Arg}(x_0-\alpha)$, qui n'est pas défini sur la coupure ; c'est une limite **depuis $H$**.)

**2.** Pour $z=x+iy\in S$, $e^z=e^xe^{iy}$ avec $y\in\,]0,\pi[$, donc $\Im(e^z)=e^x\sin y>0$ : $\exp(S)\subset H$. Réciproquement, pour $w\in H\subset\C\setminus\R_-$, $\mathrm{Log}(w)=\log|w|+i\,\mathrm{Arg}(w)$ avec $\mathrm{Arg}(w)\in\,]0,\pi[$, donc $\mathrm{Log}(w)\in S$ et $e^{\mathrm{Log}(w)}=w$. Enfin $\mathrm{Log}(e^z)=z$ pour $|\Im z|<\pi$, en particulier pour $z\in S$. Donc $\exp:S\to H$ est une bijection holomorphe de réciproque $\mathrm{Log}|_H$, holomorphe.

Bord : $x\mapsto e^x$ envoie $]0,+\infty[$ sur $]1,+\infty[$ et $]-\infty,0[$ sur $]0,1[$ ; $x+i\pi\mapsto e^{x+i\pi}=-e^x$ envoie $\R+i\pi$ sur $]-\infty,0[$. Le point $0$ du bord de $S$ va sur $1$, et les deux « bouts » de $S$ ($x\to\pm\infty$) vont sur $0$ et sur « l'infini » de $H$.

**3.** *Sur $H$.* Le problème transporté demande une fonction harmonique bornée sur $H$ valant $1$ sur $]1,+\infty[$ et $0$ sur $]-\infty,0[\,\cup\,]0,1[$. D'après 1 (avec $\alpha=1$), la fonction
$$
\Theta_0(w)=1-\frac1\pi\,\mathrm{Arg}(w-1)
$$
est harmonique sur $H$, à valeurs dans $]0,1[$, et tend vers $1$ quand $w\to x_0>1$, vers $0$ quand $w\to x_0<1$.

*Retour sur $S$.* Posons $u=\Theta_0\circ\exp$, c'est-à-dire
$$
u(z)=1-\frac1\pi\,\mathrm{Arg}\big(e^z-1\big)\qquad(z\in S).
$$
Vérifications :
* **Harmonique** : $\Theta_0$ est harmonique (donc $C^2$) sur l'ouvert $H$, $\exp$ est holomorphe sur $S$ et $\exp(S)\subset H$ (question 2) ; d'après [[ch04-composition-harmonique-holomorphe]] (poly, p. 81-82), $\Delta u=(\Delta\Theta_0)\circ\exp\cdot|e^z|^2=0$. C'est la méthode de [[ch04-reduction-demi-plan]].
* **Bornée** : $u(S)\subset\,]0,1[$.
* **Bord $]0,+\infty[$** : si $z\in S$ tend vers $x_0>0$, alors $e^z\in H$ tend vers $e^{x_0}>1$, donc $u(z)\to1$.
* **Bord $]-\infty,0[$** : si $z\to x_0<0$, $e^z\in H$ tend vers $e^{x_0}\in\,]0,1[$, donc $u(z)\to1-\frac{\pi}{\pi}=0$.
* **Bord $\R+i\pi$** : si $z\to x_0+i\pi$, $e^z\in H$ tend vers $-e^{x_0}<0<1$, donc $u(z)\to0$.

En prolongeant $u$ par ces valeurs, on obtient une fonction continue sur $\bar S\setminus\{0\}$ : en un point $z_0$ du bord, $u(z)\to u(z_0)$ quand $z\to z_0$ dans $S$, et $u$ restreinte au bord est localement constante près de $z_0$. Au point $0$, $u$ n'a pas de limite (les valeurs au bord y sautent de $0$ à $1$), ce qu'autorise l'énoncé.

**4.** *Médiane.* Pour $z=x+i\pi/2$, $e^z-1=-1+ie^x$, point du deuxième quadrant d'abscisse $-1$ et d'ordonnée $e^x$ : $\mathrm{Arg}(-1+ie^x)=\pi-\arctan(e^x)$. Donc
$$
u\big(x+i\tfrac\pi2\big)=\frac{\arctan(e^x)}{\pi},
$$
qui croît de $0$ (en $-\infty$) à $\tfrac12$ (en $+\infty$) et vaut $\tfrac14$ en $x=0$.

*Bouts de la bande.* Fixons $y\in\,]0,\pi[$. Quand $x\to+\infty$, $e^{-x}(e^z-1)=e^{iy}-e^{-x}\to e^{iy}\in H$ ; l'argument étant invariant par multiplication par un réel $>0$ et continu sur $H$, $\mathrm{Arg}(e^z-1)\to\mathrm{Arg}(e^{iy})=y$, d'où
$$
\lim_{x\to+\infty}u(x+iy)=1-\frac{y}{\pi}.
$$
Quand $x\to-\infty$, $e^z-1\to-1$ en restant dans $H$, donc $\mathrm{Arg}(e^z-1)\to\pi$ (question 1) et $u(x+iy)\to0$.

*Interprétation.* Loin à droite, la plaque « voit » un bord inférieur à $1$ et un bord supérieur à $0$ : le profil devient linéaire en $y$ (c'est la solution $1-y/\pi$ du problème sur la bande avec ces données, qui ne dépend pas de $x$). Loin à gauche, les deux bords sont à $0$ et la température tend vers $0$. Sur la médiane, on retrouve bien $1-\frac{\pi/2}{\pi}=\frac12$ à droite.

**5.** *Fonction holomorphe.* Pour $w\in H$, $\Re\big(i\,\mathrm{Log}\,w\big)=-\Im\,\mathrm{Log}\,w=-\mathrm{Arg}\,w$. Posons
$$
F(z)=1+\frac{i}{\pi}\,\mathrm{Log}\big(e^z-1\big)\qquad(z\in S).
$$
Comme $e^z-1\in H\subset\C\setminus\R_-$ pour $z\in S$ (question 2 : $\Im(e^z-1)=e^x\sin y>0$), $F$ est holomorphe sur $S$, et $\Re F=1-\frac1\pi\mathrm{Arg}(e^z-1)=u$. (Sa partie imaginaire $\frac1\pi\log|e^z-1|$ est la « fonction de flux » ; ses lignes de niveau, images réciproques des cercles centrés en $1$, coupent les isothermes à angle droit par [[ch04-lignes-niveau-orthogonales]], là où $F'\neq0$, c'est-à-dire partout sur $S$.)

*Isothermes.* Soit $c\in\,]0,1[$ et $\phi=\pi(1-c)\in\,]0,\pi[$. Alors $u(z)=c\iff\mathrm{Arg}(e^z-1)=\phi\iff e^z-1\in\{te^{i\phi},\ t>0\}$. Pour $w\in H$, appartenir à la demi-droite $\{te^{i\phi},t>0\}$ équivaut à $\Im(we^{-i\phi})=0$ (la droite $\R e^{i\phi}$ ne rencontre $H$ que selon la demi-droite $t>0$, car $\Im(te^{i\phi})=t\sin\phi$). Or $\Im\big((e^z-1)e^{-i\phi}\big)=e^x\sin(y-\phi)+\sin\phi$. L'isotherme $\{u=c\}$ a donc pour équation, dans $S$,
$$
e^x\sin\big(\phi-y\big)=\sin\phi,\qquad \phi=\pi(1-c).
$$
Pour $c=\tfrac12$ ($\phi=\pi/2$) : $e^x\cos y=1$, soit $x=-\log\cos y$ pour $y\in\,]0,\pi/2[$ (courbe issue de $0$ et asymptote à la droite $y=\pi/2$ quand $x\to+\infty$, ce qui est cohérent avec la question 4).

*Gradient près de $0$.* Comme $F=u+iv$ holomorphe, $F'=u_x-iu_y$ (Cauchy–Riemann), donc $|\nabla u|=|F'|$. Ici
$$
F'(z)=\frac{i}{\pi}\,\frac{e^z}{e^z-1}.
$$
Quand $z\to0$, $e^z-1=z\big(1+\tfrac z2+O(z^2)\big)$ et $e^z=1+O(z)$, donc $\dfrac{e^z}{e^z-1}=\dfrac1z\big(1+O(z)\big)$ et
$$
|\nabla u(z)|=\frac{1}{\pi|z|}\big(1+O(|z|)\big)\sim\frac1{\pi|z|}.
$$
Le flux de chaleur explose au point de discontinuité des données au bord (vérifié numériquement : en $z=0{,}01+0{,}02i$, $|\nabla u|\approx14{,}31$ contre $1/(\pi|z|)\approx14{,}23$).

## Pièges et variantes

* **Limite au bord le long de la coupure** : pour $x_0<\alpha$, la limite de $\mathrm{Arg}(w-\alpha)$ depuis $H$ est $\pi$, alors que $\mathrm{Arg}$ n'est pas défini (ni continu) sur $\R_-$ ; il faut une formule continue sur $\bar H\setminus\{0\}$ comme $\arccos(s/|\zeta|)$.
* **Unicité** : on a trouvé **une** solution. Le principe du maximum (Corollaire IV.2.5, Remarque IV.2.6) ne donne pas directement l'unicité ici : le domaine n'est pas borné et la donnée au bord est discontinue en $0$. Sans l'hypothèse « bornée », l'unicité est d'ailleurs fausse : $\Im\big(\sinh z\big)=\cosh x\sin y$ est harmonique sur $S$, nulle sur tout le bord, et non bornée ; on peut l'ajouter à $u$. (L'unicité parmi les fonctions bornées est vraie, mais demande un argument de type Phragmén–Lindelöf, hors programme.)
* **Oublier $\exp(S)\subset H$** avant de composer : la formule de composition exige que la fonction harmonique soit définie sur un ouvert contenant l'image.
* Variante (cas du demi-plan, Exercice IV.4.3 du poly, p. 86) : sur $H$ avec $T=T_1$ sur $]0,+\infty[$ et $T=T_0$ sur $]-\infty,0[$, la solution bornée est $T=T_1+\frac{T_0-T_1}{\pi}\mathrm{Arg}(z)$ ; la question 3 ci-dessus est exactement ce résultat (avec $T_1=1$, $T_0=0$, $\alpha=1$) transporté par $\exp$.
* Variante : données $u=1$ sur tout le bord inférieur $\R$ et $u=0$ sur le bord supérieur : la solution bornée est $1-y/\pi$ (et l'on retrouve $1-\frac1\pi\mathrm{Arg}(e^z)$, cas « $\alpha=0$ »).
* Variante : bande $\{0<\Im z<\pi\}$ avec $u=1$ sur le segment $]-L,L[$ du bord inférieur et $0$ ailleurs : $u(z)=\frac1\pi\big(\mathrm{Arg}(e^z-e^{L})-\mathrm{Arg}(e^z-e^{-L})\big)$.
