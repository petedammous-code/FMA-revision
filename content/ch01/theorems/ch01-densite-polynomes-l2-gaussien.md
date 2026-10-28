---
id: ch01-densite-polynomes-l2-gaussien
type: proposition
chapter: 1
title: Densité des polynômes dans $L^2(\R,e^{-x^2}dx)$ et dans $L^2(]0,+\infty[,e^{-x}dx)$
ref: Proposition I.11.8
page: 28
importance: 2
depends: [ch01-holomorphie-sous-integrale, ch01-estimees-cauchy, ch01-zeros-isoles, ch01-prolongement-analytique]
tags: [densite, polynomes, hilbert, fourier, hermite, laguerre, analyticite]
---
## Intuition

> 💡 Pour montrer qu'une famille est **dense** dans un espace de Hilbert, il suffit de montrer que seul le vecteur nul lui est orthogonal. Ici, « $f$ orthogonale à tous les $x^n$ » veut dire que **tous les moments** $\int x^nf(x)e^{-x^2}dx$ sont nuls. Ces moments sont les dérivées en $0$ d'une fonction holomorphe $F(z)=\int f(x)e^{zx}e^{-x^2}dx$ : elles sont toutes nulles, donc $F\equiv0$ par analyticité. En particulier $F$ est nulle sur l'axe imaginaire, où elle n'est autre que la transformée de Fourier de $f(x)e^{-x^2}$ : donc $f=0$.

Moralité : un problème d'analyse réelle (densité) se résout par la **rigidité des fonctions holomorphes** (principe des zéros isolés, [[ch01-zeros-isoles]] ; prolongement analytique, [[ch01-prolongement-analytique]]).

**Notations.** $L^2(\R,e^{-x^2}dx)$ est l'espace (des classes modulo l'égalité presque partout) des fonctions mesurables $f:\R\to\C$ telles que $\norm{f}^2:=\int_\R|f(x)|^2e^{-x^2}dx<+\infty$, muni du produit hermitien $\langle f,g\rangle:=\int_\R f(x)\overline{g(x)}\,e^{-x^2}dx$ ; c'est un espace de Hilbert. De même pour $L^2(]0,+\infty[,e^{-x}dx)$ avec le poids $e^{-x}$. La **transformée de Fourier** d'une fonction $h\in L^1(\R)$ est $\hat h(\xi):=\int_\R h(x)e^{-i\xi x}dx$ ($\xi\in\R$).

## Énoncé

**Proposition (poly, Proposition I.11.8, p. 28).** Les fonctions polynômes sont denses dans $L^2(\R,e^{-x^2}dx)$. Elles sont aussi denses dans $L^2(]0,+\infty[,e^{-x}dx)$.

On utilise (cours d'intégration, admis ici) :
* **(Hilbert)** un sous-espace vectoriel $V$ d'un espace de Hilbert $H$ est dense si et seulement si $V^\perp=\{0\}$ (car $\bar V=(V^\perp)^\perp$) ;
* **(Fourier)** la transformée de Fourier est injective sur $L^1(\R)$ : si $h\in L^1(\R)$ et $\hat h(\xi)=0$ pour tout $\xi\in\R$, alors $h=0$ presque partout.

## Hypothèses

### H1 — Le poids décroît plus vite que toute exponentielle ($e^{-x^2}$), ou exponentiellement sur une demi-droite ($e^{-x}$)

**Rôle.** Il garantit que $F(z)=\int f(x)e^{zx}e^{-x^2}dx$ converge et est holomorphe sur un **ouvert connexe contenant $0$ et l'axe imaginaire** : sur $\C$ entier pour $e^{-x^2}$, sur le demi-plan $\{\Re z<\frac12\}$ pour $e^{-x}$ sur $]0,+\infty[$. On peut alors passer des dérivées en $0$ (les moments) aux valeurs sur $i\R$ (la transformée de Fourier).

**Si on la retire.**
* *Poids trop lent : les polynômes ne sont même pas dans l'espace.* Pour le poids $\frac{1}{1+x^2}$, $\int_\R\frac{|P(x)|^2}{1+x^2}dx<\infty$ seulement si $P$ est constant ; les polynômes de $L^2(\R,\frac{dx}{1+x^2})$ sont les constantes, qui forment un sous-espace fermé de dimension $1$, donc non dense.
* *Tous les moments finis, mais densité fausse (exemple de Stieltjes).* Sur $]0,+\infty[$ avec le poids $e^{-x^{1/4}}$, la fonction bornée $g(x)=\sin(x^{1/4})$ (non nulle) est orthogonale à tous les polynômes. En effet, avec $x=u^4$, $dx=4u^3du$ :
$$
\int_0^{+\infty}x^n\sin(x^{1/4})e^{-x^{1/4}}dx=4\int_0^{+\infty}u^{4n+3}e^{-u}\sin u\,du=4\,\Im\int_0^{+\infty}u^{4n+3}e^{-(1-i)u}du=4\,\Im\frac{(4n+3)!}{(1-i)^{4n+4}},
$$
et $(1-i)^4=(-2i)^2=-4$, donc $(1-i)^{4n+4}=(-4)^{n+1}$ est réel : l'intégrale est nulle. (On a utilisé $\int_0^\infty u^ke^{-au}du=k!/a^{k+1}$ pour $\Re a>0$, qui se prouve par intégrations par parties.) Ici $F(z)=\int_0^\infty g(x)e^{zx}e^{-x^{1/4}}dx$ diverge dès que $\Re z>0$ : elle n'est holomorphe sur aucun voisinage de $0$, et l'argument s'effondre. De même $x\mapsto\sin(|x|^{1/4})$ est orthogonale à tous les polynômes dans $L^2(\R,e^{-|x|^{1/4}}dx)$ (moments impairs nuls par parité, moments pairs nuls par le calcul ci-dessus).

### H2 — Structure hilbertienne ($L^2$)

**Rôle.** Elle permet de ramener la densité à « orthogonal $=\{0\}$ », et fournit par Cauchy–Schwarz l'intégrabilité de $f(x)e^{zx}e^{-x^2}$.

**Si on la retire.** Dans $L^\infty(\R,e^{-x^2}dx)$ (qui est $L^\infty(\R)$, le poids étant $>0$), les polynômes non constants ne sont même pas bornés : les seuls polynômes de l'espace sont les constantes, qui ne sont pas denses (la fonction $\mathbf 1_{[0,+\infty[}$ est à distance $\ge\frac12$ de toute constante).

## Idée de la preuve

Soit $f\perp$ polynômes. $F(z)=\int f(x)e^{zx}e^{-x^2}dx$ est entière (holomorphie sous l'intégrale), $F^{(n)}(0)=\int x^nf(x)e^{-x^2}dx=0$, donc $F\equiv0$ ; alors $F(-i\xi)$, transformée de Fourier de $f(x)e^{-x^2}$, est nulle, donc $f=0$.

## Preuve

**Réduction.** Les polynômes sont dans $L^2(\R,e^{-x^2}dx)$ car $\int|x|^{2n}e^{-x^2}dx<\infty$. Ils forment un sous-espace $V$ ; par **(Hilbert)**, il suffit de montrer que si $f\in L^2(\R,e^{-x^2}dx)$ est orthogonale à toutes les fonctions polynômes, alors $f=0$. Soit donc une telle $f$ ; en particulier, puisque $x^n$ est réel,
$$
\langle f,x^n\rangle=\int_\R x^nf(x)e^{-x^2}dx=0\qquad\text{pour tout }n\in\N.
$$

**Convergence et domination.** Pour $A\ge0$, l'inégalité de Cauchy–Schwarz donne
$$
\int_\R|f(x)|e^{A|x|}e^{-x^2}dx=\int_\R\big(|f(x)|e^{-x^2/2}\big)\big(e^{A|x|-x^2/2}\big)dx\le\norm f\Big(\int_\R e^{2A|x|-x^2}dx\Big)^{1/2}<+\infty .
$$
Posons $\Phi(z,x):=f(x)e^{zx}e^{-x^2}$, mesurable sur $\C\times\R$. Pour tout $x\in\R$, $z\mapsto\Phi(z,x)$ est entière. Pour $z_0\in\C$ et $z\in D(z_0,1)$, on a $|\Re z|\le|z|\le|z_0|+1$, donc $|e^{zx}|=e^{x\Re z}\le e^{(|z_0|+1)|x|}$, donc $|\Phi(z,x)|\le g_{z_0}(x):=|f(x)|e^{(|z_0|+1)|x|}e^{-x^2}$, intégrable par ce qui précède. Le théorème d'holomorphie sous l'intégrale ([[ch01-holomorphie-sous-integrale]]) montre que
$$
F(z):=\int_\R f(x)e^{zx}e^{-x^2}dx
$$
est bien définie et holomorphe sur $\C$, avec $F^{(n)}(z)=\int_\R x^nf(x)e^{zx}e^{-x^2}dx$ (car $\partial^n_z e^{zx}=x^ne^{zx}$). En particulier
$$
F^{(n)}(0)=\int_\R x^nf(x)e^{-x^2}dx=0\qquad\text{pour tout }n\in\N.
$$

**$F\equiv0$.** $F$ est holomorphe sur $\C$, donc égale à sa série de Taylor en $0$ sur $D(0,\rho(0))=\C$ ([[ch01-estimees-cauchy]]) : $F(z)=\sum_n\frac{F^{(n)}(0)}{n!}z^n=0$ pour tout $z\in\C$. (On peut aussi invoquer [[ch01-zeros-isoles]] : $0$ est un zéro où toutes les dérivées s'annulent, donc $F\equiv0$.)

**Fourier.** Pour $\xi\in\R$,
$$
0=F(-i\xi)=\int_\R f(x)e^{-x^2}e^{-i\xi x}dx=\hat h(\xi),\qquad h(x):=f(x)e^{-x^2}.
$$
Or $h\in L^1(\R)$ (cas $A=0$ ci-dessus). Par **(Fourier)**, $h=0$ presque partout, donc $f=0$ presque partout ($e^{-x^2}>0$) : $f=0$ dans $L^2(\R,e^{-x^2}dx)$. Les polynômes sont denses.

**Deuxième assertion** (laissée au lecteur dans le poly). Soit $f\in L^2(]0,+\infty[,e^{-x}dx)$ orthogonale à tous les $x^n$. Pour $c<\frac12$, Cauchy–Schwarz donne
$$
\int_0^{+\infty}|f(x)|e^{(c-1)x}dx=\int_0^{+\infty}\big(|f(x)|e^{-x/2}\big)e^{(c-\frac12)x}dx\le\norm f\Big(\int_0^{+\infty}e^{(2c-1)x}dx\Big)^{1/2}=\frac{\norm f}{\sqrt{1-2c}}<+\infty.
$$
Soit $\Omega':=\{z\in\C:\Re z<\frac12\}$, ouvert **connexe** (convexe). Pour $z_0\in\Omega'$, posons $r_0:=\frac12(\frac12-\Re z_0)>0$ et $c:=\Re z_0+r_0<\frac12$ ; alors $D(z_0,r_0)\subset\Omega'$ et, pour $z\in D(z_0,r_0)$ et $x>0$, $|f(x)e^{zx}e^{-x}|\le|f(x)|e^{(c-1)x}$, intégrable. Donc $F(z):=\int_0^{+\infty}f(x)e^{zx}e^{-x}dx$ est holomorphe sur $\Omega'$ ([[ch01-holomorphie-sous-integrale]]), avec $F^{(n)}(0)=\int_0^{+\infty}x^nf(x)e^{-x}dx=0$ pour tout $n$. Par [[ch01-estimees-cauchy]], $F$ est nulle sur $D(0,\rho(0))=D(0,\frac12)$ ; ce disque a des points d'accumulation dans $\Omega'$ connexe, donc $F\equiv0$ sur $\Omega'$ par le prolongement analytique ([[ch01-prolongement-analytique]]). L'axe imaginaire est dans $\Omega'$, donc pour tout $\xi\in\R$ :
$$
0=F(-i\xi)=\int_\R h(x)e^{-i\xi x}dx,\qquad h(x):=f(x)e^{-x}\mathbf 1_{]0,+\infty[}(x)\in L^1(\R)\ (\text{cas }c=0).
$$
Par **(Fourier)**, $h=0$ p.p., donc $f=0$ p.p. sur $]0,+\infty[$. $\square$

*Remarque.* Dans le second cas, le disque de convergence de la série de Taylor de $F$ en $0$ n'est que $D(0,\frac12)$ et ne contient pas les points $-i\xi$ avec $|\xi|\ge\frac12$ : c'est ici que le **prolongement analytique** (et donc le principe des zéros isolés) est réellement nécessaire.

## Preuve à trous

Soit $f\in L^2(\R,e^{-x^2}dx)$ orthogonale à tous les polynômes ; il suffit de montrer $f=0$. On pose <trou indice="une transformée de Laplace/Fourier « complexifiée »">$F(z)=\int_\R f(x)e^{zx}e^{-x^2}dx$</trou>, qui est holomorphe sur $\C$ grâce à <trou indice="comment dominer localement en $z$ ?">l'holomorphie sous l'intégrale, avec la domination $|f(x)|e^{(|z_0|+1)|x|}e^{-x^2}$ sur $D(z_0,1)$, intégrable par Cauchy–Schwarz</trou>. On a $F^{(n)}(0)=\int x^nf(x)e^{-x^2}dx=\langle f,x^n\rangle=0$ pour tout $n$, donc <trou indice="série de Taylor en 0, rayon ?">$F\equiv0$ sur $\C$, car $F$ est somme de sa série de Taylor en $0$ de rayon infini</trou>. Enfin, pour $\xi\in\R$, <trou>$F(-i\xi)=\int_\R f(x)e^{-x^2}e^{-i\xi x}dx$ est la transformée de Fourier de $h=fe^{-x^2}\in L^1(\R)$</trou> ; elle est nulle, donc par injectivité de Fourier $h=0$ p.p. et $f=0$. $\square$

## Exemples

* **Polynômes d'Hermite.** En orthogonalisant $1,x,x^2,\dots$ (Gram–Schmidt) dans $L^2(\R,e^{-x^2}dx)$, on obtient (à normalisation près) $H_0=1$, $H_1=2x$, $H_2=4x^2-2$. Vérification avec $\int e^{-x^2}=\sqrt\pi$, $\int x^2e^{-x^2}=\frac{\sqrt\pi}2$, $\int x^4e^{-x^2}=\frac{3\sqrt\pi}4$ : $\langle H_2,1\rangle=4\cdot\frac{\sqrt\pi}2-2\sqrt\pi=0$, $\langle H_2,x\rangle=0$ (imparité), et $\norm{H_2}^2=16\cdot\frac{3\sqrt\pi}4-16\cdot\frac{\sqrt\pi}2+4\sqrt\pi=8\sqrt\pi$ ($=2^2\,2!\sqrt\pi$). La proposition dit exactement que $\big(H_n/\norm{H_n}\big)_{n\ge0}$ est une **base hilbertienne** : toute $f$ s'écrit $f=\sum_n\frac{\langle f,H_n\rangle}{\norm{H_n}^2}H_n$ dans $L^2$.
* **Polynômes de Laguerre.** Dans $L^2(]0,+\infty[,e^{-x}dx)$, avec $\int_0^\infty x^ke^{-x}dx=k!$ : $L_0=1$, $L_1=1-x$, $L_2=1-2x+\frac{x^2}2$. On vérifie $\langle L_1,1\rangle=1-1=0$, $\norm{L_1}^2=1-2+2=1$, $\langle L_2,1\rangle=1-2+1=0$, $\langle L_2,x\rangle=1-4+3=0$. Ils forment une base hilbertienne (orthonormée).
* **Calcul de $F$ pour $f=1$.** $F(z)=\int_\R e^{zx-x^2}dx$. Pour $z$ réel, $zx-x^2=-(x-\frac z2)^2+\frac{z^2}4$, d'où $F(z)=\sqrt\pi\,e^{z^2/4}$ ; les deux membres étant entiers et égaux sur $\R$, l'égalité vaut sur $\C$ ([[ch01-prolongement-analytique]]). En identifiant les dérivées en $0$ : $\int_\R x^{2k}e^{-x^2}dx=\sqrt\pi\,\frac{(2k)!}{4^kk!}$ (pour $k=1$ : $\frac{\sqrt\pi}2$), et les moments impairs sont nuls. En $z=-i\xi$ : $\int_\R e^{-x^2}e^{-i\xi x}dx=\sqrt\pi\,e^{-\xi^2/4}$, la transformée de Fourier de la gaussienne.

## Pièges

* > ⚠️ « Orthogonale à tous les polynômes » s'écrit avec le **poids** : $\int x^nf(x)e^{-x^2}dx=0$, pas $\int x^nf(x)dx=0$.
* Dans le second cas, $F$ n'est **pas entière** (seulement holomorphe sur $\{\Re z<\frac12\}$) : il faut le prolongement analytique sur un ouvert **connexe** contenant $0$ et $i\R$, pas seulement la série de Taylor en $0$.
* L'injectivité de la transformée de Fourier est un résultat de théorie de l'intégration (admis) ; il donne $f=0$ **presque partout**, ce qui suffit dans $L^2$.
* Avoir tous ses moments finis ne suffit pas pour la densité (contre-exemple de Stieltjes ci-dessus) : la décroissance rapide du poids est essentielle.
* Ne pas confondre avec Weierstrass (densité des polynômes dans $C([a,b])$ pour la norme uniforme) : ici l'intervalle est **non borné** et les polynômes ne sont pas bornés.
