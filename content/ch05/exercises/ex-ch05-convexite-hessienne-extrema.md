---
id: ex-ch05-convexite-hessienne-extrema
type: exercise
chapters: [5]
title: Convexité, différentielle seconde et minima, jusqu'en dimension infinie
source: "Classique (convexité et condition du second ordre, cf. Rouvière, *Petit guide de calcul différentiel*) ; question 5 : contre-exemple classique sur $\ell^2$, rédaction adaptée"
difficulty: 3
time: 45
tools: [ch05-differentielle-seconde-def, ch05-composition-differentielles, ch05-taylor-reste-integral, ch05-taylor-young, ch05-multilineaire-continue-caracterisation, ch05-derivee-forme-diagonale, ch05-lemme-schwarz]
---
## Énoncé

Soit $E$ un espace vectoriel normé, $U$ un ouvert **convexe** de $E$ et $f:U\to\R$ une fonction de classe $C^2$. On rappelle que $f$ est convexe si $f\big((1-s)x+sy\big)\le(1-s)f(x)+sf(y)$ pour tous $x,y\in U$ et $s\in[0,1]$.

1. Soient $x\in U$, $h\in E$ et $I$ un intervalle ouvert contenant $0$ tel que $x+th\in U$ pour $t\in I$. Montrer que $g(t)=f(x+th)$ est de classe $C^2$ sur $I$, avec $g'(t)=df_{x+th}(h)$ et $g''(t)=d^2f_{x+th}(h,h)$.
2. Montrer que $f$ est convexe si et seulement si $d^2f_x(h,h)\ge0$ pour tous $x\in U$, $h\in E$.
3. Soit $a\in U$ tel que $df_a=0$ et qu'il existe $c>0$ avec $d^2f_a(h,h)\ge c\|h\|^2$ pour tout $h\in E$. Montrer que $f$ admet en $a$ un minimum local strict.
4. On suppose $E$ de dimension finie. Montrer que si $df_a=0$ et $d^2f_a(h,h)>0$ pour tout $h\neq0$, l'hypothèse de la question 3 est satisfaite.
5. Soit $E=\ell^2$ l'espace des suites réelles $x=(x_n)_{n\ge1}$ telles que $\|x\|^2=\sum_n x_n^2<\infty$ (espace de Hilbert), et $f(x)=\sum_{n\ge1}\big(\frac{x_n^2}{n^2}-x_n^4\big)$. Montrer que $f$ est bien définie et de classe $C^2$ sur $\ell^2$, puis calculer $df_0$ et $d^2f_0$.
6. Avec la fonction $f$ de la question 5, montrer que $d^2f_0(h,h)>0$ pour tout $h\neq0$, mais que $0$ n'est pas un minimum local de $f$. Qu'est-ce qui, dans la question 4, ne passe pas en dimension infinie ?

## Indices

### Indice 1
Pour 1, $g$ est la composée de $t\mapsto x+th$, de $f$, puis (pour $g'$) de $y\mapsto df_y$ suivie de l'évaluation en $h$ : règle de la chaîne deux fois. Pour 2 et 3 : formules de Taylor à l'ordre $2$ — laquelle donne une **égalité** exploitable pour un signe, laquelle donne un $o(\|h\|^2)$ ?

### Indice 2
Pour le sens « $d^2f\ge0$ ⇒ convexe » : Taylor avec reste intégral ($f$ est $C^2$, $\R$ est un Banach, $U$ convexe contient les segments) donne $f(y)\ge f(z)+df_z(y-z)$ ; l'appliquer en $z=(1-s)x+sy$ à $x$ et à $y$, puis combiner. Pour la réciproque : $f(x+th)+f(x-th)-2f(x)\ge0$ par convexité, et Taylor–Young.

### Indice 3
Pour 4 : compacité de la sphère unité en dimension finie et continuité de $h\mapsto d^2f_a(h,h)$. Pour 5 : $f=q-Q$ avec $q(x)=b(x,x)$, $b(x,y)=\sum\frac{x_ny_n}{n^2}$, et $Q(x)=m(x,x,x,x)$, $m(x,y,z,w)=\sum x_ny_nz_nw_n$ ; montrer que $b$ et $m$ sont multilinéaires continues ($|x_n|\le\|x\|$).

### Indice 4
Pour 6 : regarder $f(te_n)$ où $e_n$ est la suite qui vaut $1$ en position $n$ et $0$ ailleurs, avec $t=2/n$.

## Corrigé

**1.** Soit $\gamma:I\to E$, $\gamma(t)=x+th$ : affine, différentiable, $\gamma'(t)=h$. Par la règle de la chaîne ([[ch05-composition-differentielles]] ; $\gamma$ différentiable en $t$, $f$ différentiable en $\gamma(t)\in U$), $g=f\circ\gamma$ est dérivable et $g'(t)=df_{\gamma(t)}(\gamma'(t))=df_{x+th}(h)$.

Écrivons $g'=\mathrm{ev}_h\circ df\circ\gamma$, où $df:U\to\mathcal L(E;\R)$ est différentiable ($f$ est $C^2$) et $\mathrm{ev}_h:\mathcal L(E;\R)\to\R$, $L\mapsto L(h)$, est linéaire continue ($|L(h)|\le\|L\|\,\|h\|$), donc égale à sa différentielle. Encore par la règle de la chaîne, $g''(t)=\mathrm{ev}_h\big(d(df)_{x+th}(h)\big)=d(df)_{x+th}(h)(h)=d^2f_{x+th}(h,h)$ ([[ch05-differentielle-seconde-def]]). Enfin $t\mapsto d^2f_{x+th}$ est continue (composée de $\gamma$ et de $d^2f$, continue car $f$ est $C^2$), et $|d^2f_{y}(h,h)-d^2f_{z}(h,h)|\le\|d^2f_y-d^2f_z\|\,\|h\|^2$ : $g''$ est continue, $g$ est $C^2$.

**2.** *(⇐) On suppose $d^2f\ge0$.* Soient $z,y\in U$. Le segment $[z,y]$ est dans $U$ (convexité), $f$ est $C^2$ à valeurs dans le Banach $\R$ : la formule de Taylor avec reste intégral à l'ordre $p=1$ ([[ch05-taylor-reste-integral]]) donne
$$
f(y)-f(z)-df_z(y-z)=\int_0^1(1-t)\,d^2f_{z+t(y-z)}(y-z,y-z)\,dt\ \ge0 .
$$
Soient $x,y\in U$, $s\in[0,1]$ et $z=(1-s)x+sy\in U$. En appliquant l'inégalité $f(w)\ge f(z)+df_z(w-z)$ à $w=x$ et $w=y$, puis en faisant $(1-s)\times(\cdot)+s\times(\cdot)$ :
$$
(1-s)f(x)+sf(y)\ge f(z)+df_z\big((1-s)x+sy-z\big)=f(z)+df_z(0)=f(z).
$$
Donc $f$ est convexe.

*(⇒) On suppose $f$ convexe.* Soient $x\in U$, $h\in E$, $h\neq0$. Comme $U$ est ouvert, $x\pm th\in U$ pour $|t|$ assez petit, et $x=\frac12(x+th)+\frac12(x-th)$, donc par convexité $\Delta(t):=f(x+th)+f(x-th)-2f(x)\ge0$. Par Taylor–Young à l'ordre $2$ en $x$ ([[ch05-taylor-young]] ; $f$ est différentiable sur $U$ et deux fois différentiable en $x$),
$$
f(x\pm th)=f(x)\pm t\,df_x(h)+\frac{t^2}2d^2f_x(h,h)+o(t^2),
$$
donc $\Delta(t)=t^2d^2f_x(h,h)+o(t^2)$. En divisant par $t^2>0$ et en faisant $t\to0$ : $d^2f_x(h,h)=\lim_{t\to0}\Delta(t)/t^2\ge0$. (Pour $h=0$ c'est trivial.)

**3.** Taylor–Young en $a$ avec $df_a=0$ : $f(a+h)-f(a)=\frac12d^2f_a(h,h)+r(h)$ avec $|r(h)|=o(\|h\|^2)$. Il existe donc $\delta>0$ tel que $B(a,\delta)\subset U$ et $|r(h)|\le\frac c4\|h\|^2$ pour $\|h\|<\delta$. Pour $0<\|h\|<\delta$,
$$
f(a+h)-f(a)\ge\frac c2\|h\|^2-\frac c4\|h\|^2=\frac c4\|h\|^2>0 :
$$
$a$ est un minimum local strict.

**4.** En dimension finie, la sphère unité $S=\{h:\|h\|=1\}$ est compacte (fermée bornée), non vide si $E\neq\{0\}$ (sinon il n'y a rien à montrer), et $\Phi:h\mapsto d^2f_a(h,h)$ est continue ($d^2f_a$ bilinéaire en dimension finie, donc continue). $\Phi$ atteint donc son minimum $c=\Phi(h_0)$ sur $S$, avec $c>0$ puisque $h_0\neq0$. Pour $h\neq0$, par homogénéité, $d^2f_a(h,h)=\|h\|^2\,\Phi(h/\|h\|)\ge c\|h\|^2$, et l'inégalité est triviale pour $h=0$.

**5.** *Continuité des formes.* Pour $x\in\ell^2$ et tout $n$, $|x_n|\le\|x\|$. D'où, par Cauchy–Schwarz dans $\ell^2$,
$$
|b(x,y)|\le\sum_n|x_ny_n|\le\|x\|\,\|y\|,\qquad |m(x,y,z,w)|\le\|x\|\,\|y\|\sum_n|z_nw_n|\le\|x\|\,\|y\|\,\|z\|\,\|w\| .
$$
Les séries définissant $b$ et $m$ convergent donc absolument, $b$ est bilinéaire, $m$ est $4$-linéaire, toutes deux symétriques et bornées sur le produit des boules unités, donc continues ([[ch05-multilineaire-continue-caracterisation]]), avec $\|b\|\le1$, $\|m\|\le1$. En particulier $f(x)=b(x,x)-m(x,x,x,x)=q(x)-Q(x)$ est bien défini (somme de deux séries convergentes).

*Différentielles de $q$.* Par [[ch05-derivee-forme-diagonale]] (cas $j=2$), $dq_x(h)=2b(x,h)$. L'application $x\mapsto dq_x=2b(x,\cdot)$ est linéaire continue de $E$ dans $\mathcal L(E;\R)$ (norme $\le2$), donc différentiable de différentielle constante : $d^2q_x(h,k)=2b(h,k)$, et $q$ est $C^2$.

*Différentielles de $Q$.* Par le même résultat ($j=4$, $m$ symétrique), $dQ_x(h)=4m(x,x,x,h)$. Posons $\tilde m(x,y,z)=m(x,y,z,\cdot)\in\mathcal L(E;\R)$ : $\tilde m$ est $3$-linéaire symétrique, continue ($\|\tilde m(x,y,z)\|\le\|x\|\|y\|\|z\|$), et $dQ_x=4\tilde m(x,x,x)$. Encore par [[ch05-derivee-forme-diagonale]] (à valeurs dans $\mathcal L(E;\R)$, $j=3$), $x\mapsto dQ_x$ est différentiable avec $d(dQ)_x(h)=12\,\tilde m(x,x,h)$, i.e. $d^2Q_x(h,k)=12\,m(x,x,h,k)$. Enfin
$$
\|d^2Q_x-d^2Q_y\|\le12\big(\|m(x-y,x,\cdot,\cdot)\|+\|m(y,x-y,\cdot,\cdot)\|\big)\le12(\|x\|+\|y\|)\|x-y\|,
$$
donc $x\mapsto d^2Q_x$ est continue et $Q$ est $C^2$. Ainsi $f=q-Q$ est $C^2$ sur $\ell^2$, avec
$$
df_0(h)=2b(0,h)-4m(0,0,0,h)=0,\qquad d^2f_0(h,k)=2b(h,k)-12m(0,0,h,k)=2\sum_n\frac{h_nk_n}{n^2}.
$$
(Contrôle en dimension $1$ : pour $x^2-x^4$, les dérivées secondes en $0$ valent $2$ ; pour $x^4$, $12x^2$.)

**6.** Pour $h\neq0$, un $h_n$ au moins est non nul, donc $d^2f_0(h,h)=2\sum_nh_n^2/n^2>0$. Mais pour $t\in\R$, $f(te_n)=\frac{t^2}{n^2}-t^4$, et pour $t=\frac2n$ :
$$
f\Big(\frac2ne_n\Big)=\frac4{n^4}-\frac{16}{n^4}=-\frac{12}{n^4}<0=f(0),\qquad\Big\|\frac2ne_n\Big\|=\frac2n\xrightarrow[n\to\infty]{}0 .
$$
Toute boule $B(0,r)$ contient donc un point où $f<f(0)$ : $0$ n'est pas un minimum local.

Ce qui ne passe pas : la sphère unité de $\ell^2$ **n'est pas compacte**, et l'infimum de $d^2f_0(h,h)$ sur la sphère n'est pas atteint et vaut $0$ ($d^2f_0(e_n,e_n)=\frac2{n^2}\to0$). Il n'existe donc aucun $c>0$ comme en 3 : « définie positive » n'entraîne pas « coercive ».

## Pièges et variantes

* > ⚠️ En dimension infinie, la condition suffisante de minimum local strict est la **coercivité** $d^2f_a(h,h)\ge c\|h\|^2$, pas la positivité $d^2f_a(h,h)>0$ pour $h\ne0$. Le contre-exemple des questions 5–6 est d'autant plus troublant que la restriction de $f$ à **chaque droite** passant par $0$ a un minimum local strict en $0$ : $f(th)=t^2\sum\frac{h_n^2}{n^2}-t^4\sum h_n^4$.
* Dans la question 2 (⇒), Taylor avec reste intégral est inutile : une simple dérivée seconde « symétrisée » $f(x+th)+f(x-th)-2f(x)$ et Taylor–Young suffisent ; inversement, pour (⇐) il faut une **égalité** (reste intégral) ou un argument de convexité de $g$ sur un segment, pas un $o(\cdot)$.
* Ne pas oublier les hypothèses : $U$ **convexe** sert dans (⇐) (segments dans $U$) ; $U$ **ouvert** sert dans (⇒) (les points $x\pm th$ sont dans $U$).
* La symétrie de $d^2f_a$ (lemme de Schwarz, [[ch05-lemme-schwarz]]) n'est pas utilisée ici, mais elle justifie qu'on ne perd rien à ne regarder que la forme quadratique $h\mapsto d^2f_a(h,h)$ : par polarisation, elle détermine $d^2f_a$.
* Variante : $f$ est **strictement** convexe dès que $d^2f_x(h,h)>0$ pour tous $x$ et $h\neq0$ (même preuve, l'intégrale du reste devient $>0$) ; la réciproque est fausse ($x\mapsto x^4$ sur $\R$).
* Variante : avec $f(x)=\sum_n\big(\frac{x_n^2}{n^2}+x_n^4\big)$, $0$ est un minimum global strict ; c'est le signe du terme d'ordre $4$, et non la seule forme quadratique, qui décide.
