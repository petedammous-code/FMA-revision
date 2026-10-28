---
id: ex-mix-b-zeros-airy
type: exercise
chapters: [7, 1, 2]
title: "Les solutions de l'équation d'Airy w'' = zw ont une infinité de zéros"
source: "Classique pour le résultat (zéros des fonctions d'Airy, qui se déduisent usuellement de la théorie de Hadamard des fonctions entières d'ordre fini) — démonstration élémentaire par estimation de Gronwall et coefficients de Fourier inventée"
difficulty: 4
time: 75
tools: [ch01-estimees-cauchy, ch01-def-rayon-convergence, ch01-serie-entiere-holomorphe, ch07-unicite-globale, ch07-reduction-ordre-un, ch01-derivee-f-rond-gamma, ch01-def-multiplicite-zero, ch02-logarithme-existence, ch01-zeros-isoles]
---
## Énoncé

On considère l'équation d'Airy, d'inconnue $w:\C\to\C$ holomorphe :
$$
(A)\qquad w''(z)=z\,w(z)\qquad(z\in\C).
$$

1. Montrer que, pour tous $a,b\in\C$, il existe une unique fonction entière $w$ solution de $(A)$ telle que $w(0)=a$ et $w'(0)=b$. (On cherchera $w$ sous la forme $\sum_mc_mz^m$.)
2. Soit $w$ une solution entière non identiquement nulle de $(A)$. Montrer que tous ses zéros sont simples. (Pour $z_0\in\C$, on pourra étudier $s\mapsto w\big(z_0+s(z-z_0)\big)$, $s\in\R$.)
3. *Croissance.* Soit $w$ une solution entière de $(A)$, $w(0)=a$, $w'(0)=b$. On fixe $\varphi\in\R$ et on pose, pour $\rho\ge0$, $u(\rho)=w(\rho e^{i\varphi})$ et
$$
\mathcal E(\rho)=(1+\rho)\,|u(\rho)|^2+|u'(\rho)|^2 .
$$
   a) Montrer que $u''(\rho)=e^{3i\varphi}\rho\,u(\rho)$, puis que $\mathcal E'(\rho)\le\big(1+2\sqrt{1+\rho}\big)\,\mathcal E(\rho)$.
   b) En déduire que, pour tout $z\in\C$,
$$
|w(z)|\le\sqrt{|a|^2+|b|^2}\;\exp\Big(\frac{|z|}2+\frac23\big((1+|z|)^{3/2}-1\big)\Big).
$$
4. *Un lemme sur les fonctions entières.* Soit $h=\sum_{n\ge0}\alpha_nz^n$ une fonction entière et $C\ge0$ tels que $\Re\,h(z)\le C(1+|z|)^{3/2}$ pour tout $z\in\C$.
   a) Montrer que, pour $r>0$ et $n\ge1$, $\displaystyle\frac1{2\pi}\int_0^{2\pi}\Re\,h(re^{i\theta})\,e^{-in\theta}\,d\theta=\frac{\alpha_nr^n}2$, et calculer cette intégrale pour $n=0$.
   b) En déduire que $|\alpha_n|r^n\le 4C(1+r)^{3/2}-2\Re(\alpha_0)$ pour $n\ge1$, puis que $h$ est un polynôme de degré au plus $1$.
5. Soit $w$ une solution entière non identiquement nulle de $(A)$. On suppose par l'absurde que $w$ n'a qu'un nombre fini de zéros $z_1,\dots,z_p$ ($p\ge0$).
   a) Montrer qu'il existe un polynôme $P\neq0$ et une fonction entière $h$ tels que $w=Pe^h$.
   b) Montrer qu'il existe $C'$ tel que $\Re\,h(z)\le C'(1+|z|)^{3/2}$ pour tout $z\in\C$.
   c) Conclure : $w$ a une infinité de zéros, et ceux-ci forment une suite $(\zeta_k)$ avec $|\zeta_k|\to+\infty$.
6. On suppose $a,b\in\R$. Montrer que $w$ est réelle sur $\R$ et qu'elle a au plus un zéro dans $[0,+\infty[$. Où sont donc « presque tous » les zéros ?

## Indices

### Indice 1
Trois étages : (i) les solutions sont entières (séries entières) ; (ii) on contrôle leur croissance le long de chaque demi-droite issue de $0$ par une inégalité de type **Gronwall** sur une « énergie » ; (iii) une fonction entière sans zéro est une exponentielle $e^h$, et la croissance de $|w|=e^{\Re h}$ force $h$ à être un polynôme, ce que l'équation interdit.

### Indice 2
1 : la récurrence est $c_2=0$, $(m+2)(m+3)c_{m+3}=c_m$ ; pour le rayon, montrer que $(|c_m|\rho^m)_m$ est bornée pour tout $\rho$. 2 : la fonction $s\mapsto w(z_0+s(z-z_0))$ résout une équation linéaire réelle d'ordre $2$ ; si $w(z_0)=w'(z_0)=0$, l'unicité de Cauchy–Lipschitz conclut.

### Indice 3
3 a) : $\frac{d}{d\rho}|u|^2=2\Re(\bar uu')$ ; majorer $|\mathcal E'|$ puis utiliser $2xy\le x^2+y^2$ avec $x=\sqrt{1+\rho}\,|u|$, $y=|u'|$. 3 b) : dériver $\mathcal E(\rho)e^{-K(\rho)}$ avec $K(\rho)=\int_0^\rho(1+2\sqrt{1+s})\,ds$ (Gronwall sous forme différentielle). 4 a) : écrire $\Re h=\frac12(h+\bar h)$ et intégrer terme à terme sur le cercle.

### Indice 4
4 b) : $|\Re h|=2(\Re h)^+-\Re h$, et $(\Re h)^+\le C(1+r)^{3/2}$. 5 a) : diviser par $P(z)=\prod(z-z_j)$, prolonger, puis prendre un logarithme sur $\C$. 5 c) : avec $h(z)=\alpha+\beta z$, reporter $w=Pe^{\alpha+\beta z}$ dans $(A)$ et comparer les degrés. 6 : $(y^2)''=2y'^2+2ty^2$.

## Corrigé

**1.** *Analyse.* Si $w$ est entière, les estimées de Cauchy ([[ch01-estimees-cauchy]]) montrent que sa série de Taylor $\sum c_mz^m$ en $0$ a un rayon infini et converge vers $w$ sur $\C$ ; on peut dériver terme à terme ([[ch01-serie-entiere-holomorphe]]) :
$$
w''(z)-zw(z)=2c_2+\sum_{m\ge1}\big((m+2)(m+1)c_{m+2}-c_{m-1}\big)z^m .
$$
Les coefficients d'une série entière nulle sont nuls ; donc $w$ est solution de $(A)$ si et seulement si $c_2=0$ et $(k+2)(k+3)c_{k+3}=c_k$ pour tout $k\ge0$. Avec $c_0=a$, $c_1=b$, tous les $c_m$ sont déterminés : **unicité**.

*Synthèse.* Définissons $(c_m)$ par $c_0=a$, $c_1=b$, $c_2=0$ et la récurrence. Soit $\rho>0$ et $d_m=|c_m|\rho^m$ : $d_{k+3}=d_k\,\frac{\rho^3}{(k+2)(k+3)}\le d_k$ dès que $(k+2)(k+3)\ge\rho^3$. Chacune des trois sous-suites $(d_{3j+i})_j$ ($i=0,1,2$) est donc décroissante à partir d'un certain rang, et $(d_m)$ est bornée : le rayon de convergence est $\ge\rho$ ([[ch01-def-rayon-convergence]]), pour tout $\rho$, donc infini. La somme $w$ est entière et le calcul ci-dessus montre que $w''=zw$, $w(0)=a$, $w'(0)=b$ : **existence**.

**2.** Supposons $w(z_0)=w'(z_0)=0$ et fixons $z\in\C$. Posons $\delta=z-z_0$ et $v(s)=w(z_0+s\delta)$ pour $s\in\R$. Par dérivation le long d'un chemin ([[ch01-derivee-f-rond-gamma]]), $v'(s)=\delta\,w'(z_0+s\delta)$ et $v''(s)=\delta^2w''(z_0+s\delta)=\delta^2(z_0+s\delta)\,v(s)$. Ainsi $V=(v,v')$ est solution sur $\R$ du système linéaire ([[ch07-reduction-ordre-un]])
$$
V'(s)=\begin{pmatrix}0&1\\ \delta^2(z_0+s\delta)&0\end{pmatrix}V(s),\qquad V(0)=(0,0),
$$
dont le champ $(s,V)\mapsto B(s)V$ (sur $\R\times\C^2$) est continu et localement lipschitzien en $V$. La fonction nulle est une autre solution, donc $V=0$ par l'unicité globale ([[ch07-unicite-globale]]) ; en $s=1$, $w(z)=0$. Comme $z$ est arbitraire, $w\equiv0$. Donc si $w\not\equiv0$, en tout zéro $z_0$ on a $w'(z_0)\neq0$ : le zéro est simple ([[ch01-def-multiplicite-zero]]). Les zéros sont de plus isolés ([[ch01-zeros-isoles]]).

**3. a)** Comme en 2, $u'(\rho)=e^{i\varphi}w'(\rho e^{i\varphi})$ et $u''(\rho)=e^{2i\varphi}w''(\rho e^{i\varphi})=e^{2i\varphi}\rho e^{i\varphi}w(\rho e^{i\varphi})=e^{3i\varphi}\rho\,u(\rho)$. La fonction $\mathcal E$ est $C^1$ (car $|u|^2=u\bar u$) et
$$
\mathcal E'=|u|^2+2(1+\rho)\Re(\bar uu')+2\Re\big(\overline{u'}u''\big)=|u|^2+2(1+\rho)\Re(\bar uu')+2\rho\,\Re\big(e^{3i\varphi}\overline{u'}u\big),
$$
donc $\mathcal E'\le|u|^2+2(1+2\rho)|u|\,|u'|$. Avec $x=\sqrt{1+\rho}\,|u|$ et $y=|u'|$, $2|u||u'|=\frac{2xy}{\sqrt{1+\rho}}\le\frac{x^2+y^2}{\sqrt{1+\rho}}=\frac{\mathcal E}{\sqrt{1+\rho}}$. Comme $1+2\rho\le2(1+\rho)$ et $|u|^2\le\mathcal E/(1+\rho)\le\mathcal E$,
$$
\mathcal E'(\rho)\le\mathcal E(\rho)+\frac{1+2\rho}{\sqrt{1+\rho}}\mathcal E(\rho)\le\big(1+2\sqrt{1+\rho}\big)\mathcal E(\rho).
$$

**b)** Soit $K(\rho)=\int_0^\rho\big(1+2\sqrt{1+s}\big)ds=\rho+\frac43\big((1+\rho)^{3/2}-1\big)$. Alors
$$
\frac{d}{d\rho}\Big(\mathcal E(\rho)e^{-K(\rho)}\Big)=\big(\mathcal E'(\rho)-K'(\rho)\mathcal E(\rho)\big)e^{-K(\rho)}\le0,
$$
donc $\mathcal E(\rho)\le\mathcal E(0)e^{K(\rho)}$ : c'est la forme différentielle du lemme de Gronwall (poly, Exercice VII.4.1, p. 137). Or $\mathcal E(0)=|w(0)|^2+|w'(0)|^2=|a|^2+|b|^2$ (car $|e^{i\varphi}|=1$) et $|u(\rho)|^2\le\mathcal E(\rho)$. Pour $z=\rho e^{i\varphi}$ :
$$
|w(z)|\le\sqrt{|a|^2+|b|^2}\,e^{K(\rho)/2}=\sqrt{|a|^2+|b|^2}\exp\Big(\frac{|z|}2+\frac23\big((1+|z|)^{3/2}-1\big)\Big).
$$
La majoration est uniforme en $\varphi$. (Contrôle numérique sur les fonctions d'Airy classiques $\mathrm{Ai}$ et $\mathrm{Bi}$, pour 24 directions et $\rho\le40$ : le rapport $\mathcal E(\rho)/(\mathcal E(0)e^{K(\rho)})$ reste $\le0{,}48$. L'exposant $\frac23\rho^{3/2}$ est le bon : $\mathrm{Bi}(x)$ croît comme $e^{\frac23x^{3/2}}$ à un facteur polynomial près.)

**4. a)** La série $h(re^{i\theta})=\sum_k\alpha_kr^ke^{ik\theta}$ converge normalement en $\theta\in[0,2\pi]$ (rayon infini), de même que sa conjuguée $\sum_k\bar\alpha_kr^ke^{-ik\theta}$ ; on intègre terme à terme, avec $\frac1{2\pi}\int_0^{2\pi}e^{ij\theta}d\theta=1$ si $j=0$ et $0$ sinon. Pour $n\ge1$ :
$$
\frac1{2\pi}\int_0^{2\pi}h(re^{i\theta})e^{-in\theta}d\theta=\alpha_nr^n,\qquad\frac1{2\pi}\int_0^{2\pi}\overline{h(re^{i\theta})}\,e^{-in\theta}d\theta=\sum_k\bar\alpha_kr^k\,\frac1{2\pi}\int_0^{2\pi}e^{-i(k+n)\theta}d\theta=0,
$$
car $k+n\ge1$. Avec $\Re h=\frac12(h+\bar h)$, on obtient $\frac{\alpha_nr^n}2$. Pour $n=0$, le même calcul donne $\frac1{2\pi}\int_0^{2\pi}\Re h(re^{i\theta})\,d\theta=\frac{\alpha_0+\bar\alpha_0}2=\Re(\alpha_0)$ (formule de la moyenne).

**b)** Notons $x^+=\max(x,0)$, de sorte que $|x|=2x^+-x$. Par hypothèse $(\Re h)^+\le C(1+r)^{3/2}$ sur $C(0,r)$, donc, pour $n\ge1$,
$$
\frac{|\alpha_n|r^n}2\le\frac1{2\pi}\int_0^{2\pi}|\Re h(re^{i\theta})|\,d\theta=\frac1{2\pi}\int_0^{2\pi}2(\Re h)^+d\theta-\Re(\alpha_0)\le2C(1+r)^{3/2}-\Re(\alpha_0).
$$
D'où $|\alpha_n|\le\big(4C(1+r)^{3/2}-2\Re\alpha_0\big)r^{-n}$ pour tout $r>0$. Pour $n\ge2$, le membre de droite tend vers $0$ quand $r\to+\infty$ (car $3/2<n$) : $\alpha_n=0$. Donc $h(z)=\alpha_0+\alpha_1z$.

**5. a)** Soit $P(z)=\prod_{j=1}^p(z-z_j)$ ($P=1$ si $p=0$). Les zéros de $w$ sont simples (question 2) : au voisinage de $z_j$, $w(z)=(z-z_j)w_j(z)$ avec $w_j$ holomorphe et $w_j(z_j)=w'(z_j)\neq0$ ([[ch01-def-multiplicite-zero]]). Donc $g=w/P$, holomorphe sur $\C\setminus\{z_1,\dots,z_p\}$, se prolonge en une fonction entière (près de $z_j$, $g=w_j/\prod_{k\neq j}(z-z_k)$) qui ne s'annule nulle part. $\C$ est étoilé donc simplement connexe ([[ch02-etoile-simplement-connexe]]) : $g$ admet un logarithme holomorphe $h$, $g=e^h$ ([[ch02-logarithme-existence]]). Ainsi $w=Pe^h$.

**b)** Pour $z\notin\{z_j\}$, $\Re h(z)=\ln|w(z)|-\ln|P(z)|$. Si $p\ge1$, $|P(z)|\to+\infty$ quand $|z|\to\infty$ : il existe $R_0$ tel que $|P(z)|\ge1$ pour $|z|\ge R_0$ ; si $p=0$, $P=1$ et l'on prend $R_0=0$. Pour $|z|\ge R_0$, par 3 b),
$$
\Re h(z)\le\ln|w(z)|\le\ln\sqrt{|a|^2+|b|^2}+\frac{|z|}2+\frac23(1+|z|)^{3/2}\le C_1(1+|z|)^{3/2}
$$
avec $C_1=\big|\ln\sqrt{|a|^2+|b|^2}\big|+\frac12+\frac23$ (car $1\le(1+|z|)^{3/2}$ et $|z|\le(1+|z|)^{3/2}$ ; noter $(a,b)\neq(0,0)$ puisque $w\not\equiv0$, par 1). Sur le compact $\bar D(0,R_0)$, $\Re h$ est continue donc majorée par une constante $C_2\le C_2(1+|z|)^{3/2}$ (on peut supposer $C_2\ge0$). On prend $C'=\max(C_1,C_2)$.

**c)** Par 4, $h(z)=\alpha+\beta z$ et $w=Pe^{\alpha+\beta z}$. Alors
$$
w''=\big(P''+2\beta P'+\beta^2P\big)e^{\alpha+\beta z},\qquad zw=zP\,e^{\alpha+\beta z},
$$
et $(A)$ donne, en simplifiant par l'exponentielle qui ne s'annule pas, l'égalité de polynômes $P''+2\beta P'+\beta^2P=zP$. Le membre de droite est de degré $p+1$ (car $P\neq0$), celui de gauche de degré $\le p$ : contradiction. Donc $w$ a une infinité de zéros. L'ensemble $Z$ des zéros est fermé et discret ([[ch01-zeros-isoles]]), donc ne rencontre chaque disque $\bar D(0,R)$ qu'en un nombre fini de points (sinon il aurait un point d'accumulation dans ce compact, qui serait un zéro non isolé) : on peut ranger les zéros en une suite $(\zeta_k)$ avec $|\zeta_k|\to+\infty$.

**6.** Si $a,b\in\R$, la récurrence de 1 a des coefficients réels, donc tous les $c_m$ sont réels et $y(t)=w(t)=\sum c_mt^m$ est réelle pour $t\in\R$, avec $y''(t)=ty(t)$. Alors
$$
(y^2)''=2y'^2+2yy''=2y'^2+2t\,y^2\ge0\quad\text{sur }[0,+\infty[,
$$
donc $y^2$ est convexe sur $[0,+\infty[$. Si $y(t_1)=y(t_2)=0$ avec $0\le t_1<t_2$, la fonction convexe positive $y^2$ est nulle aux extrémités de $[t_1,t_2]$, donc nulle sur ce segment ; $w$ s'annule alors sur un segment, qui a des points d'accumulation, donc $w\equiv0$ ([[ch01-zeros-isoles]]). Ainsi une solution réelle non nulle a au plus un zéro dans $[0,+\infty[$ : ses zéros, en nombre infini, sont tous (sauf au plus un) dans $\C\setminus[0,+\infty[$. (Pour la fonction d'Airy classique $\mathrm{Ai}$, ils sont tous réels négatifs, le premier vers $-2{,}338$ ; pour $\mathrm{Bi}$, une infinité est réelle négative, le premier vers $-1{,}174$, et les autres sont non réels.)

## Pièges et variantes

* **Le rôle du coefficient $z$.** Pour $w''=w$, la solution $e^z$ n'a aucun zéro : l'étape 5 c) tombe en défaut car $P''+2\beta P'+\beta^2P=P$ est résoluble ($P=1$, $\beta=\pm1$). C'est le terme $zP$, de degré $p+1$, qui crée l'obstruction.
* **Gronwall « naïf » insuffisant.** Avec $N=|u|+|u'|$ on obtient seulement $N(\rho)\le N(0)e^{\rho+\rho^2/2}$ (croissance d'ordre $2$). Le lemme 4, refait avec l'exposant $2$, donnerait seulement $h$ de degré $\le2$ ; la conclusion subsiste néanmoins (reporter $w=Pe^{\alpha+\beta z+\gamma z^2}$ : le degré à gauche est $p+2$ si $\gamma\neq0$, ce qui donne encore une contradiction). Le poids $(1+\rho)$ dans $\mathcal E$ sert à obtenir l'exposant optimal $3/2$.
* **Dérivées d'un module** : $|u|$ n'est pas dérivable là où $u$ s'annule ; c'est pour cela qu'on travaille avec $|u|^2=u\bar u$.
* Dans le lemme 4, l'hypothèse ne porte que sur $\Re h$ **majorée** (pas sur $|h|$) : c'est l'astuce $|x|=2x^+-x$ qui permet de s'en contenter.
* Variante : $w''=z^kw$ ($k\ge1$) : même méthode, croissance d'ordre $(k+2)/2$, et une infinité de zéros. Variante : $w''+q(z)w=0$ avec $q$ polynôme non constant.
