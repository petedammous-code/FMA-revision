---
id: ex-ch04-positives-harnack-liouville
type: exercise
chapters: [4, 1, 2]
title: Fonctions harmoniques minorées — une inégalité de Harnack et un Liouville harmonique
source: "Classique (inégalité de type Harnack par les moyennes sur les disques ; théorème de Liouville pour les fonctions harmoniques minorées)"
difficulty: 3
time: 40
tools: [ch04-harmonique-moyenne-maximum, ch04-holomorphe-implique-harmonique, ch04-composition-harmonique-holomorphe, ch02-logarithme-determination-principale-def, ch01-cauchy-riemann]
---
## Énoncé

Toutes les fonctions considérées sont à valeurs réelles. Pour $a\in\C$ et $r>0$, $D(a,r)$ et $\bar D(a,r)$ désignent les disques ouvert et fermé.

1. Soit $u$ harmonique sur un ouvert $\Omega$ et $\bar D(a,r)\subset\Omega$. Montrer que
$$
u(a)=\frac{1}{\pi r^2}\iint_{D(a,r)}u(x,y)\,dx\,dy .
$$
2. Soit $R>0$ et $u$ harmonique sur $D(0,R)$, **positive** ($u\ge0$). Montrer que pour tout $a\in D(0,R)$,
$$
u(a)\le\Big(\frac{R}{R-|a|}\Big)^2u(0).
$$
3. En déduire qu'une fonction harmonique sur $\C$ et **minorée** est constante.
4. Soit $F\in\Hol(\C)$ telle que $F(\C)\cap\,]-\infty,0]=\emptyset$. Montrer que $F$ est constante.
5. (a) Montrer qu'une fonction harmonique sur $\C^*=\C\setminus\{0\}$ et minorée est constante.
   (b) Ce résultat reste-t-il vrai sur l'ouvert $\{z\in\C : |z|>1\}$ ?

## Indices

### Indice 1
Question 1 : passer en coordonnées polaires centrées en $a$ et utiliser, pour chaque rayon $\rho\le r$, une propriété des fonctions harmoniques réelles sur les cercles.

### Indice 2
Question 2 : comparer les moyennes de $u\ge0$ sur deux disques **emboîtés**, $D(a,\rho)\subset D(0,\rho')$, avec $\rho'<R$ pour que la question 1 s'applique aussi en $0$ ; faire ensuite tendre $\rho'$ vers $R$.

### Indice 3
Question 3 : appliquer la question 2 à $u-m\ge0$ ($m$ un minorant) sur $D(0,R)$, faire $R\to+\infty$ : $0$ devient un point de maximum. Question 4 : $\mathrm{Log}\circ F$ est entière ; regarder sa partie imaginaire. Question 5(a) : composer avec $\exp$.

## Corrigé

**1.** Soit $0<\rho\le r$. On a $\bar D(a,\rho)\subset\bar D(a,r)\subset\Omega$, donc la propriété de la moyenne des fonctions harmoniques réelles ([[ch04-harmonique-moyenne-maximum]], poly, Corollaire IV.2.5, p. 77) donne
$$
\int_0^{2\pi}u(a+\rho e^{i\theta})\,d\theta=2\pi\,u(a).
$$
L'égalité est aussi vraie pour $\rho=0$. La fonction $u$ est continue sur le compact $\bar D(a,r)$ ; le passage en coordonnées polaires $(x,y)=a+\rho e^{i\theta}$, de jacobien $\rho$, donne
$$
\iint_{D(a,r)}u\,dx\,dy=\int_0^r\Big(\int_0^{2\pi}u(a+\rho e^{i\theta})\,d\theta\Big)\rho\,d\rho=\int_0^r2\pi u(a)\,\rho\,d\rho=\pi r^2\,u(a).
$$

**2.** Soit $a\in D(0,R)$ et $\rho'$ tel que $|a|<\rho'<R$. Posons $\rho=\rho'-|a|>0$.
* $\bar D(a,\rho)\subset\bar D(0,\rho')\subset D(0,R)$ (si $|z-a|\le\rho$ alors $|z|\le|a|+\rho=\rho'$) ; la question 1 s'applique en $a$ avec le rayon $\rho$, et en $0$ avec le rayon $\rho'$.
* Comme $u\ge0$ et $D(a,\rho)\subset D(0,\rho')$ :
$$
u(a)=\frac{1}{\pi\rho^2}\iint_{D(a,\rho)}u\le\frac{1}{\pi\rho^2}\iint_{D(0,\rho')}u=\frac{\rho'^2}{\rho^2}\,u(0)=\Big(\frac{\rho'}{\rho'-|a|}\Big)^2u(0).
$$
En faisant tendre $\rho'$ vers $R$ (le membre de droite est continu en $\rho'$), on obtient $u(a)\le\big(\frac{R}{R-|a|}\big)^2u(0)$.

**3.** Soit $u$ harmonique sur $\C$ et $m\in\R$ avec $u\ge m$. La fonction $v=u-m$ est harmonique (le laplacien d'une constante est nul) et positive sur $\C$, donc sur tout disque $D(0,R)$. Fixons $a\in\C$. Pour tout $R>|a|$, la question 2 donne $v(a)\le\big(\frac{R}{R-|a|}\big)^2v(0)$ ; quand $R\to+\infty$, le facteur tend vers $1$, donc $v(a)\le v(0)$.

Ainsi $v$ atteint en $0$ son maximum (global, donc local). $v$ est harmonique réelle sur l'ouvert **connexe** $\C$ : par le principe du maximum ([[ch04-harmonique-moyenne-maximum]], poly, Corollaire IV.2.5, p. 77), $v$ est constante, donc $u$ aussi.

**4.** Notons $\R_-=\,]-\infty,0]$. La détermination principale $\mathrm{Log}$ est holomorphe sur $\C\setminus\R_-$, avec $\Im(\mathrm{Log}\,w)=\mathrm{Arg}(w)\in\,]-\pi,\pi[$ ([[ch02-logarithme-determination-principale-def]], poly, p. 56). Comme $F(\C)\subset\C\setminus\R_-$, la composée $G=\mathrm{Log}\circ F$ est holomorphe sur $\C$ ([[ch01-stabilite-operations]], poly, Proposition I.3.1, p. 10), et $e^{G}=F$.

* $\Im(G)$ est harmonique sur $\C$ (partie imaginaire d'une fonction holomorphe : [[ch04-holomorphe-implique-harmonique]], poly, p. 76) et minorée par $-\pi$. Par la question 3, $\Im(G)$ est constante.
* Écrivons $G=P+iQ$ avec $Q$ constante. Les conditions de Cauchy réelles ([[ch01-cauchy-riemann]], poly, Corollaire I.2.4, p. 8) donnent $P_x=Q_y=0$ et $P_y=-Q_x=0$ : la différentielle de $P$ est nulle sur le connexe $\C$, donc $P$ est constante.

Donc $G$ est constante et $F=e^G$ aussi.

(Remarque : on a montré qu'une fonction entière qui **évite une demi-droite** est constante ; l'hypothèse porte sur l'image, aucune borne sur $|F|$ n'est supposée.)

**5.(a)** Soit $u$ harmonique sur $\C^*$ avec $u\ge m$. La fonction $\exp$ est holomorphe sur $\C$ et $\exp(\C)=\C^*$, ouvert sur lequel $u$ est harmonique. Par stabilité par composition ([[ch04-composition-harmonique-holomorphe]], poly, section IV.4, p. 81-82 : $\Delta(u\circ\exp)=(\Delta u)\circ\exp\cdot|\exp'|^2=0$), $v=u\circ\exp$ est harmonique sur $\C$, et $v\ge m$. Par la question 3, $v$ est constante, égale à $\kappa$. Pour tout $z\in\C^*$ il existe $w\in\C$ avec $e^w=z$ (surjectivité de $\exp$ sur $\C^*$), donc $u(z)=v(w)=\kappa$ : $u$ est constante.

**5.(b)** Non. Sur $\Omega=\{|z|>1\}$, la fonction $u(z)=\ln|z|$ est harmonique (pour $z\neq0$, $\ln|z|=\frac12\ln(x^2+y^2)$ et $\Delta\ln(x^2+y^2)=0$, calcul direct ; ou bien $\ln|z|=\Re(\mathrm{Log}(z/z_0))+\ln|z_0|$ près de chaque $z_0$), elle est **positive** sur $\Omega$ et elle n'est pas constante. Ce qui coince : l'argument de la question 3 utilise des disques $D(0,R)$ arbitrairement grands **contenus dans l'ouvert**, et celui de 5(a) le fait que $\C^*$ soit l'image de $\C$ par une application holomorphe ; ni l'un ni l'autre n'est disponible pour $\Omega$. (De même $-\ln|z|$ est positive et harmonique non constante sur $D(0,1)\setminus\{0\}$.)

## Pièges et variantes

* Appliquer la propriété de la moyenne sur un disque fermé **non contenu** dans l'ouvert : c'est pour cela qu'on travaille avec $\rho'<R$ puis qu'on passe à la limite.
* L'hypothèse $u\ge0$ est indispensable en 2 : on minore $\iint_{D(0,\rho')}u$ par $\iint_{D(a,\rho)}u$ en jetant la couronne, ce qui exige un intégrande positif. D'où le passage à $u-m$ en 3.
* Le principe du maximum harmonique porte sur un maximum **de $u$** (pas de $|u|$) et demande la **connexité** ; ici $\C$ est connexe.
* En 4, ne pas oublier l'étape « partie imaginaire constante $\Rightarrow$ fonction holomorphe constante » (Cauchy–Riemann sur un connexe, ou théorème de l'application ouverte).
* Variante (inégalité de Harnack complète, via le noyau de Poisson, hors poly) : pour $u\ge0$ harmonique sur $D(0,R)$, $\frac{R-|a|}{R+|a|}u(0)\le u(a)\le\frac{R+|a|}{R-|a|}u(0)$ ; l'égalité est atteinte par $u=\Re\frac{R+z}{R-z}$. Notre constante $\big(\frac{R}{R-|a|}\big)^2$ est moins bonne mais suffit pour Liouville.
* Variante : une fonction harmonique $u$ sur $\C$ telle que $u(z)\le A+B\ln(1+|z|)$ est constante (appliquer la question 2 à $A+B\ln(1+R)-u\ge0$ sur $D(0,R)$ : avec $c_R=\big(\frac{R}{R-|a|}\big)^2$, on obtient $c_Ru(0)-u(a)\le(c_R-1)\big(A+B\ln(1+R)\big)$, et $(c_R-1)\ln R\to0$ ; donc $u(a)\ge u(0)$ pour tout $a$, et le principe du maximum appliqué à $-u$ conclut).
