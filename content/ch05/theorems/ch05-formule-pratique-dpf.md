---
id: ch05-formule-pratique-dpf
type: proposition
chapter: 5
title: "Formule pratique : $d^pf_a(h_1,\dots,h_p)$ par dérivation partielle en $t_1,\dots,t_p$"
ref: Remarque V.5.6
page: 109
importance: 2
depends: [ch05-composition-differentielles, ch05-differentielle-seconde-def, ch05-derivee-variable-reelle, ch05-classe-ck-def, ch05-derivee-directionnelle-unicite]
tags: [differentielle-ordre-superieur, calcul, formule, derivees-partielles]
---
## Intuition

> 💡 Pour calculer $d^pf_a(h_1,\dots,h_p)$, on **restreint** $f$ au « petit parallélépipède » $a+t_1h_1+\dots+t_ph_p$ engendré par les directions $h_i$ : on obtient une fonction ordinaire de $p$ variables réelles $(t_1,\dots,t_p)$, que l'on dérive une fois par rapport à chaque $t_i$ en $0$. Plus besoin de manipuler des espaces $\mathcal L(E;\mathcal L(E;\cdots))$ : on fait du calcul de dérivées partielles usuel.

Pour $p=1$ c'est la dérivée directionnelle $df_a(h)=\frac{d}{dt}f(a+th)\big|_{t=0}$ ([[ch05-derivee-directionnelle-unicite]]). En pratique, quand $f$ est polynomiale (produits, puissances matricielles, formes multilinéaires), $d^pf_a(h_1,\dots,h_p)$ est simplement le **coefficient de $t_1t_2\cdots t_p$** dans le développement de $f(a+\sum t_ih_i)$.

Rappels : $d^pf=d(d^{p-1}f)$, vue comme application $p$-linéaire par $d^pf_a(h_1,\dots,h_p)=\big(d(d^{p-1}f)_a(h_1)\big)(h_2,\dots,h_p)$ ([[ch05-differentielle-seconde-def]], [[ch05-classe-ck-def]]). La notation $\frac{\partial}{\partial t_1}\frac{\partial}{\partial t_2}\cdots\frac{\partial}{\partial t_p}[\varphi]$ signifie : on dérive d'abord en $t_p$, puis en $t_{p-1}$, …, enfin en $t_1$.

## Énoncé

**Proposition (poly, Remarque V.5.6, p. 109 — une formule pratique de calcul).** Soit $f:U\to F$ une application d'un ouvert $U$ d'un espace vectoriel normé $E$ à valeurs dans un espace vectoriel normé $F$, de classe $C^p$. Soit $a\in U$. Pour tous $h_1,\dots,h_p\in E$, on a
$$
d^pf_a(h_1,\dots,h_p)=\frac{\partial}{\partial t_1}\frac{\partial}{\partial t_2}\cdots\frac{\partial}{\partial t_p}\Big[(t_1,\dots,t_p)\mapsto f\Big(a+\sum_{i=1}^pt_ih_i\Big)\Big]_{t_1=t_2=\cdots=t_p=0}.\qquad\text{(V.5.3)}
$$
En particulier, pour $h\in E$, $d^pf_a(h,\dots,h)=\dfrac{d^p}{dt^p}\big[f(a+th)\big]_{t=0}$.

## Hypothèses

### H1 — $f$ de classe $C^p$ sur l'ouvert $U$

**Rôle.** Elle garantit que $d^{k}f$ existe et est différentiable sur $U$ pour $k\le p-1$, ce qui permet de dériver successivement $t\mapsto d^kf_{a+\sum t_ih_i}(h_{k'},\dots,h_p)$ par la règle de la chaîne en tout point $t$ proche de $0$. Elle implique aussi, par [[ch05-differentielle-ordre-p-symetrique]], que l'ordre des dérivations en $t_1,\dots,t_p$ est indifférent.

**Si on la retire.** La conclusion reste vraie sous les hypothèses plus faibles du théorème V.5.5 ($f$ de classe $C^{p-1}$ et $d^{p-1}f$ différentiable en $a$) : dans la preuve ci-dessous, les dérivations en $t_p,\dots,t_2$ (étapes $(P_p)$ à $(P_2)$, valables pour tout $t$ proche de $0$) n'utilisent que la différentiabilité de $d^kf$ pour $k\le p-2$, assurée par « $f$ de classe $C^{p-1}$ » ; la dernière dérivation, en $t_1$, n'est faite qu'en $t=0$, c'est-à-dire le long de $t_1\mapsto a+t_1h_1$, et n'utilise la différentiabilité de $d^{p-1}f$ qu'au point $a$. Mais si $d^pf_a$ **n'existe pas**, le membre de droite peut exister quand même et ne représente alors aucune différentielle. Exemple : $f(x,y)=\frac{xy(x^2-y^2)}{x^2+y^2}$, $f(0,0)=0$, de classe $C^1$ sur $\R^2$ ([[ch05-lemme-schwarz]]), $p=2$, $a=0$. Avec $(h_1,h_2)=(e_1,e_2)$ le membre de droite vaut $\frac{\partial}{\partial x}\big(\frac{\partial f}{\partial y}\big)(0,0)=1$, avec $(h_1,h_2)=(e_2,e_1)$ il vaut $\frac{\partial}{\partial y}\big(\frac{\partial f}{\partial x}\big)(0,0)=-1$ : l'application $(h_1,h_2)\mapsto$ (membre de droite) n'est pas symétrique, alors que $d^2f_0$, s'il existait, le serait. Ici $df$ n'est pas différentiable en $0$.

## Idée de la preuve

On pose $x(t)=a+\sum_it_ih_i$. Par récurrence descendante, $\frac{\partial}{\partial t_j}\cdots\frac{\partial}{\partial t_p}f(x(t))=d^{p-j+1}f_{x(t)}(h_j,\dots,h_p)$ : chaque nouvelle dérivation en $t_j$ est une dérivée directionnelle de $d^{p-j}f$ dans la direction $h_j$, et ajoute $h_j$ **en tête** des arguments. On conclut en $t=0$.

## Preuve

*Le poly énonce la formule sans démonstration ; en voici une.* Soit $r>0$ avec $B(a,r)\subset U$, et $\rho>0$ tel que $\rho\sum_i\|h_i\|<r$. Pour $t=(t_1,\dots,t_p)$ avec $\max_i|t_i|<\rho$, posons $x(t)=a+\sum_{i=1}^pt_ih_i\in B(a,r)$ et $\varphi(t)=f(x(t))$.

**Lemme.** Soit $k\le p-1$, $G$ l'evn où vit $d^kf_x$ (avec la convention $d^0f=f$, $G=F$), et $\psi:U\to G$ différentiable (par exemple $\psi=d^kf$, différentiable car $f$ est $C^{k+1}$, $k+1\le p$). Soit $T:G\to F$ linéaire continue. Alors, pour $j\in\{1,\dots,p\}$ et $t$ comme ci-dessus, la fonction $s\mapsto T\big(\psi(x(t)+sh_j)\big)$ est dérivable en $s=0$, de dérivée $T\big(d\psi_{x(t)}(h_j)\big)$. En effet, c'est la composée de $s\mapsto x(t)+sh_j$ (affine, de dérivée $h_j$), de $\psi$ et de $T$, et l'on applique la règle de la chaîne ([[ch05-composition-differentielles]]) et $g'(s)=dg_s(1)$ ([[ch05-derivee-variable-reelle]]). Comme $x(t)+sh_j=x(t+se_j)$, cela signifie : $\frac{\partial}{\partial t_j}\big[T(\psi(x(t)))\big]=T\big(d\psi_{x(t)}(h_j)\big)$.

**Récurrence descendante.** Montrons que pour $j=p,p-1,\dots,1$ et pour tout $t$ avec $\max|t_i|<\rho$,
$$
\frac{\partial}{\partial t_j}\frac{\partial}{\partial t_{j+1}}\cdots\frac{\partial}{\partial t_p}\varphi(t)=d^{p-j+1}f_{x(t)}(h_j,h_{j+1},\dots,h_p). \qquad(P_j)
$$
* $j=p$ : le lemme avec $\psi=f$ ($k=0$) et $T=\mathrm{Id}_F$ donne $\frac{\partial\varphi}{\partial t_p}(t)=df_{x(t)}(h_p)$.
* Si $(P_{j+1})$ est vraie ($1\le j\le p-1$), alors $\frac{\partial}{\partial t_{j+1}}\cdots\frac{\partial}{\partial t_p}\varphi(t)=T\big(d^{p-j}f_{x(t)}\big)$, où $T$ est l'évaluation $\Lambda\mapsto\Lambda(h_{j+1},\dots,h_p)$, linéaire continue (de norme $\le\prod_{i>j}\|h_i\|$). Le lemme avec $\psi=d^{p-j}f$ (différentiable car $f$ est $C^p$ et $p-j\le p-1$) donne
$$
\frac{\partial}{\partial t_j}\Big[T\big(d^{p-j}f_{x(t)}\big)\Big]=T\Big(d\big(d^{p-j}f\big)_{x(t)}(h_j)\Big)=\Big(d\big(d^{p-j}f\big)_{x(t)}(h_j)\Big)(h_{j+1},\dots,h_p)=d^{p-j+1}f_{x(t)}(h_j,\dots,h_p),
$$
par la convention d'identification des différentielles d'ordre supérieur. C'est $(P_j)$.

Pour $j=1$ et $t=0$ ($x(0)=a$), $(P_1)$ est exactement (V.5.3).

**Cas $h_1=\dots=h_p=h$.** Posons $g(s)=f(a+sh)$. Le même raisonnement (récurrence sur $k$, avec le lemme appliqué à $\psi=d^{k-1}f$ et $T$ l'évaluation en $(h,\dots,h)$) donne $g^{(k)}(s)=d^kf_{a+sh}(h,\dots,h)$ pour $k\le p$, d'où $g^{(p)}(0)=d^pf_a(h,\dots,h)$. $\square$

## Preuve à trous

On pose $x(t)=a+\sum_it_ih_i$ et $\varphi(t)=f(x(t))$ pour $t$ proche de $0$. Pour $\psi$ différentiable et $T$ linéaire continue, la règle de la chaîne donne $\frac{\partial}{\partial t_j}\big[T(\psi(x(t)))\big]=$ <trou indice="dériver s ↦ T(ψ(x(t)+s h_j)) en s=0">$T\big(d\psi_{x(t)}(h_j)\big)$, car $x(t+se_j)=x(t)+sh_j$</trou>.

On montre par récurrence descendante sur $j$ que <trou indice="formule pour la dérivée partielle itérée en t_j,…,t_p">$\frac{\partial}{\partial t_j}\cdots\frac{\partial}{\partial t_p}\varphi(t)=d^{p-j+1}f_{x(t)}(h_j,\dots,h_p)$</trou>. Pour $j=p$, c'est le cas $\psi=f$, $T=\mathrm{Id}$. Pour passer de $j+1$ à $j$, on applique la règle ci-dessus avec <trou indice="quelle application ψ, quelle forme linéaire T ?">$\psi=d^{p-j}f$ et $T=$ évaluation en $(h_{j+1},\dots,h_p)$</trou>, et l'on utilise la convention $\big(d(d^{p-j}f)_x(h_j)\big)(h_{j+1},\dots,h_p)=d^{p-j+1}f_x(h_j,\dots,h_p)$. En $j=1$, $t=0$, on obtient (V.5.3). $\square$

## Exemples

* **Différentielle seconde d'un polynôme.** $f(x,y)=x^2y$, $a=(a_1,a_2)$, $h=(h_1,h_2)$, $k=(k_1,k_2)$. Le coefficient de $t_1t_2$ dans $(a_1+t_1h_1+t_2k_1)^2(a_2+t_1h_2+t_2k_2)$ est
$$
d^2f_a(h,k)=2h_1k_1a_2+2a_1(h_1k_2+k_1h_2),
$$
ce qui coïncide avec la hessienne $\begin{pmatrix}2a_2&2a_1\\2a_1&0\end{pmatrix}$ (car $\frac{\partial^2 f}{\partial x^2}=2y$, $\frac{\partial^2 f}{\partial x\partial y}=2x$, $\frac{\partial^2f}{\partial y^2}=0$).
* **Carré de la norme.** Dans un Hilbert, $q(x)=\|x\|^2$ : $q(a+t_1h+t_2k)=\|a\|^2+2t_1\langle a,h\rangle+2t_2\langle a,k\rangle+t_1^2\|h\|^2+t_2^2\|k\|^2+2t_1t_2\langle h,k\rangle$, donc $d^2q_a(h,k)=2\langle h,k\rangle$ ; et $q(a+th)$ est un polynôme de degré $2$ en $t$, donc $d^3q_a(h,h,h)=0$, puis $d^3q_a=0$ par polarisation.
* **Inverse matriciel, forme diagonale.** $f(A)=A^{-1}$ près de $A=I_n$ : pour $t$ petit, $(I+tH)^{-1}=\sum_{k\ge0}(-t)^kH^k$ (série de Neumann, [[ch05-serie-neumann]] ; c'est une série entière en $t$ à coefficients dans $\mathrm M_n(\R)$, de rayon $\ge1/\|H\|$, que l'on peut dériver terme à terme), donc $\frac{d^p}{dt^p}\big[(I+tH)^{-1}\big]_{t=0}=(-1)^p\,p!\,H^p$ et $d^pf_{I}(H,\dots,H)=(-1)^pp!\,H^p$ (sachant que $f$ est $C^\infty$, [[ch05-inversion-c-infini]]).

## Pièges

* > ⚠️ La formule exige que $d^pf_a$ **existe** (par exemple $f$ de classe $C^p$) : le membre de droite peut exister sans que $f$ soit $p$ fois différentiable (voir H1), et il ne représente alors rien.
* Le résultat est un **nombre de dérivations égal à $p$, une par variable $t_i$** : on ne dérive pas deux fois par rapport au même $t_i$. Le cas $h_1=\dots=h_p=h$ se traite avec **une seule** variable $t$ et la dérivée $p$-ième $\frac{d^p}{dt^p}$.
* Pour un polynôme en $(t_1,\dots,t_p)$, $\frac{\partial}{\partial t_1}\cdots\frac{\partial}{\partial t_p}[\cdot]_{t=0}$ est le coefficient de $t_1\cdots t_p$, mais $\frac{d^p}{dt^p}[\cdot]_{t=0}$ est $p!$ fois le coefficient de $t^p$ : ne pas oublier le $p!$.
