---
id: ex-mix-d-factorisation-produit-wiener
type: exercise
chapters: [3, 1, 5, 6]
title: "Écrire une série entière comme un produit infini ∏(1 + aₙzⁿ) : inversion locale dans l'algèbre de Wiener"
source: "Inventé (l'algèbre de Wiener des séries absolument convergentes est classique, cf. Rudin, *Real and Complex Analysis*, ch. 18 ; la factorisation formelle 1 + Σcₙzⁿ = ∏(1 + aₙzⁿ) est un thème classique des séries formelles ; progression et constantes inventées)"
difficulty: 4
time: 90
tools: [ch01-serie-entiere-holomorphe, ch03-produits-infinis, ch05-banach-series-absolument-convergentes, ch05-differentielle-def, ch05-composition-differentielles, ch05-accroissements-finis, ch06-inversion-locale, ch06-point-fixe-banach]
---
## Énoncé

On note $W$ l'ensemble des séries entières $f(z)=\sum_{n\ge0}c_n(f)\,z^n$ à coefficients complexes telles que
$$
\norm f:=\sum_{n\ge0}|c_n(f)|<+\infty ,
$$
et $W_0=\{f\in W : c_0(f)=0\}$. On note $\ell^1$ l'espace des suites complexes $a=(a_n)_{n\ge1}$ telles que $\norm a_1=\sum_{n\ge1}|a_n|<+\infty$ ; on admet que c'est un espace de Banach. On pose $J(a)=\sum_{n\ge1}a_nz^n$ et, pour $a$ suite complexe et $N\ge1$,
$$
P_N(a)=\prod_{n=1}^N\big(1+a_nz^n\big)\qquad(\text{polynôme}).
$$
Pour deux séries entières $u,v$ et $m\in\N$, on écrit $u\equiv v\ [z^{m+1}]$ si $c_k(u)=c_k(v)$ pour tout $k\le m$.

1. Montrer que $J$ est une bijection linéaire isométrique de $\ell^1$ sur $W_0$ et que $(W,\norm\cdot)$ est un espace de Banach. Montrer que toute $f\in W$ est holomorphe sur $D=D(0,1)$, se prolonge continûment à $\bar D$ avec $\sup_{\bar D}|f|\le\norm f$, et que $fg\in W$ et $\norm{fg}\le\norm f\,\norm g$ pour $f,g\in W$.
2. a) Soient $u_1,\dots,u_N$ et $x_1,\dots,x_N,y_1,\dots,y_N$ des éléments de $W$. Montrer que
$$
\Big\|\prod_{j=1}^N(1+u_j)-1\Big\|\le\prod_{j=1}^N\big(1+\norm{u_j}\big)-1,\qquad\Big\|\prod_{j=1}^Nx_j-\prod_{j=1}^Ny_j\Big\|\le\sum_{j=1}^N\norm{x_j-y_j}\prod_{i<j}\norm{y_i}\prod_{i>j}\norm{x_i}.
$$
   b) Soit $a\in\ell^1$ et $r_N=\sum_{n>N}|a_n|$. Montrer que $(P_N(a))_N$ converge dans $W$ vers une limite notée $P(a)$, que $c_0(P(a))=1$, et que
$$
\norm{P(a)-P_N(a)}\le e^{\norm a_1}\big(e^{r_N}-1\big),\qquad\norm{P(a)}\le e^{\norm a_1},\qquad\norm{P(a)-P(b)}\le e^{\norm a_1+\norm b_1}\,\norm{a-b}_1\quad(b\in\ell^1).
$$
   c) Montrer que, sur $D$, $P(a)$ coïncide avec le produit infini de fonctions holomorphes $\prod_{n\ge1}(1+a_nz^n)$, et que $P(a)$ s'annule dans $D$ si et seulement si $|a_n|>1$ pour au moins un $n$.
3. a) Soit $a\in\ell^1$. Montrer que $P(a)\equiv P_m(a)\ [z^{m+1}]$ pour tout $m\ge1$.
   b) Soient $a=(a_n)_{n\ge1}$ et $b=(b_n)_{n\ge1}$ deux suites complexes **quelconques** telles que $P_m(a)\equiv P_m(b)\ [z^{m+1}]$ pour tout $m\ge1$. Montrer que $a=b$. En déduire que $P:\ell^1\to W$ est injective.
4. Pour $a\in\ell^1$ et $n\ge1$, on note $a^{(n)}$ la suite obtenue à partir de $a$ en remplaçant $a_n$ par $0$, et $G_n(a)=P(a^{(n)})$. Montrer que $P:\ell^1\to W$ est de classe $C^1$ et que
$$
dP_a(h)=\sum_{n\ge1}h_n\,z^n\,G_n(a)\qquad(h\in\ell^1).
$$
On pourra établir $\norm{P(a+h)-P(a)-dP_a(h)}\le e^{\norm a_1}\big(e^{\norm h_1}-1-\norm h_1\big)$.
5. Montrer qu'il existe $\rho>0$ tel que toute $f\in W$ vérifiant $f(0)=1$ et $\norm{f-1}<\rho$ s'écrive
$$
f(z)=\prod_{n\ge1}\big(1+a_nz^n\big)\qquad(z\in D)
$$
avec $a\in\ell^1$, de façon unique, et que $a$ dépende de $f$ de façon $C^1$ (préciser). Que vaut $a$ « au premier ordre » ?
6. Montrer que $\norm{dP_a-J}_{\mathcal L(\ell^1,W)}\le e^{\norm a_1}-1$. En déduire que toute $f\in W$ telle que $f(0)=1$ et $\norm{f-1}\le\frac15$ s'écrit $f=P(a)$ avec $\norm a_1\le\frac13$.
7. a) Soit $t\in\C$, $0<|t|<1$. Déterminer la suite $a\in\ell^1$ telle que $\dfrac1{1-tz}=P(a)$. Vérifier la cohérence avec la question 6 lorsque $|t|\le\frac16$.
   b) Montrer que $1+z+z^2$ n'est égal à $P(a)$ pour aucun $a\in\ell^1$. (On pourra utiliser $(1-z)\prod_{k=0}^K(1+z^{2^k})=1-z^{2^{K+1}}$.) Pour quels $s\in\C$ la question 6 garantit-elle que $1+s(z+z^2)\in P(\ell^1)$ ? Commenter.

## Indices

### Indice 1
$W$ est une copie de $\ell^1$ qui est en plus une **algèbre** normée ($\norm{fg}\le\norm f\norm g$) : toutes les estimations se font sur des produits **finis**, puis on passe à la limite. Les questions 5 et 6 relèvent du calcul différentiel dans les espaces de Banach : une application $C^1$ dont la différentielle en un point est un isomorphisme bicontinu.

### Indice 2
2 a) : développer $\prod(1+u_j)$ sur les parties de $\{1,\dots,N\}$ ; pour la seconde inégalité, une somme télescopique. Utiliser partout $1+x\le e^x$. 3 b) : regarder le **premier** indice $m$ où $a_m\neq b_m$ et le coefficient de $z^m$. 5 : inversion locale pour $Q=P-1:\ell^1\to W_0$, dont la différentielle en $0$ est $J$. 6 : point fixe de $T(a)=a-J^{-1}\big(P(a)-f\big)$ sur la boule fermée $\bar B(0,\frac13)$ de $\ell^1$.

### Indice 3
4 : avec $x_n=1+a_nz^n$ et $y_n=h_nz^n$, $\prod_{n\le N}(x_n+y_n)=\sum_{S\subset\{1,\dots,N\}}\prod_{n\in S}y_n\prod_{n\notin S}x_n$ ; $S=\emptyset$ donne $P_N(a)$, $|S|=1$ donne le terme linéaire, et le reste est majoré par $e^{\norm a_1}\big(\prod_{n\le N}(1+|h_n|)-1-\sum_{n\le N}|h_n|\big)$. Le passage à la limite $N\to\infty$ utilise 2 b) **uniformément en $n$**.

### Indice 4
7 a) : $(1-u)(1+u)(1+u^2)\cdots(1+u^{2^K})=1-u^{2^{K+1}}$ avec $u=tz$. 7 b) : construire une suite $b\notin\ell^1$ telle que $P_m(b)\equiv1+z+z^2\ [z^{m+1}]$ pour tout $m$, et appliquer 3.

## Corrigé

**1.** *$J$.* $J$ est linéaire et $\norm{J(a)}=\sum_{n\ge1}|a_n|=\norm a_1$ : $J$ est isométrique, donc injective ; toute $f\in W_0$ vaut $J\big((c_n(f))_{n\ge1}\big)$ : $J$ est surjective sur $W_0$.

*Complétude.* $W_0$ est complet, image isométrique de l'espace complet $\ell^1$. Tout $f\in W$ s'écrit $f=c_0(f)+f_0$ avec $f_0\in W_0$, et $\norm f=|c_0(f)|+\norm{f_0}$. Si $(f^k)$ est de Cauchy dans $W$, $(c_0(f^k))$ est de Cauchy dans $\C$ et $(f^k_0)$ dans $W_0$ ; elles convergent vers $c$ et $g_0$, et $f^k\to c+g_0$ dans $W$. Notons au passage que chaque $c_k:W\to\C$ est linéaire et vérifie $|c_k(f)|\le\norm f$ : **les coefficients dépendent continûment de $f$**.

*Holomorphie.* Pour $|z|\le1$, $|c_n(f)z^n|\le|c_n(f)|$ : la série converge normalement sur $\bar D$, donc sa somme est continue sur $\bar D$ (limite uniforme de polynômes) et $|f(z)|\le\norm f$. Le rayon de convergence est $\ge1$, donc $f$ est holomorphe sur $D$ ([[ch01-serie-entiere-holomorphe]]), et ses coefficients $c_n(f)=f^{(n)}(0)/n!$ sont déterminés par la fonction : on peut identifier $f\in W$ à une fonction sur $D$.

*Produit.* Pour $|z|<1$, le produit de deux séries absolument convergentes est la série de terme général $d_n=\sum_{k+l=n}c_k(f)c_l(g)$ (produit de Cauchy), et
$$
\sum_n|d_n|\le\sum_n\sum_{k+l=n}|c_k(f)|\,|c_l(g)|=\norm f\,\norm g .
$$
Donc $fg\in W$ et $\norm{fg}\le\norm f\norm g$. En particulier, pour $n\ge1$ et $\alpha\in\C$, $\norm{1+\alpha z^n}=1+|\alpha|$ et $\norm{z^n}=1$.

**2. a)** En développant (l'algèbre $W$ est commutative), $\prod_{j=1}^N(1+u_j)-1=\sum_{\emptyset\ne S\subset\{1..N\}}\prod_{j\in S}u_j$, d'où, par l'inégalité triangulaire et la sous-multiplicativité,
$$
\Big\|\prod_j(1+u_j)-1\Big\|\le\sum_{S\ne\emptyset}\prod_{j\in S}\norm{u_j}=\prod_j\big(1+\norm{u_j}\big)-1 .
$$
Pour la seconde, on écrit la somme télescopique
$$
\prod_{j=1}^Nx_j-\prod_{j=1}^Ny_j=\sum_{j=1}^N\Big(\prod_{i<j}y_i\Big)(x_j-y_j)\Big(\prod_{i>j}x_i\Big)
$$
(le $j$-ième terme vaut $y_1\cdots y_{j-1}x_j\cdots x_N-y_1\cdots y_jx_{j+1}\cdots x_N$) et on majore chaque terme.

**b)** *Cauchy.* Pour $M>N$, $P_M(a)-P_N(a)=P_N(a)\big(\prod_{N<n\le M}(1+a_nz^n)-1\big)$, donc, par a) et $1+x\le e^x$,
$$
\norm{P_M(a)-P_N(a)}\le\prod_{n\le N}(1+|a_n|)\Big(\prod_{N<n\le M}(1+|a_n|)-1\Big)\le e^{\norm a_1}\big(e^{r_N}-1\big).
$$
Comme $r_N\to0$, la suite est de Cauchy dans l'espace de Banach $W$ : elle converge vers $P(a)$, et en faisant $M\to\infty$ on obtient la première estimation. De $\norm{P_N(a)}\le\prod(1+|a_n|)\le e^{\norm a_1}$ et de $c_0(P_N(a))=1$ on déduit $\norm{P(a)}\le e^{\norm a_1}$ et $c_0(P(a))=1$ (continuité de la norme et de $c_0$).

*Lipschitz.* Avec $x_n=1+a_nz^n$, $y_n=1+b_nz^n$, a) donne
$$
\norm{P_N(a)-P_N(b)}\le\sum_{n\le N}|a_n-b_n|\prod_{i<n}(1+|b_i|)\prod_{i>n}(1+|a_i|)\le e^{\norm a_1+\norm b_1}\norm{a-b}_1 ,
$$
et l'on fait $N\to\infty$.

**c)** Comme $\sup_{\bar D}|u|\le\norm u$ (question 1), $P_N(a)\to P(a)$ uniformément sur $D$. Par ailleurs $f_n(z)=a_nz^n$ définit une série de fonctions holomorphes sur $D$ normalement convergente ($\sup_D|f_n|\le|a_n|$), donc localement normalement convergente. Le théorème sur les produits infinis ([[ch03-produits-infinis]]) affirme que $\prod_{n\le N}(1+f_n)=P_N(a)$ converge localement uniformément sur $D$ vers une fonction holomorphe $\prod_{n\ge1}(1+a_nz^n)$, qui est donc égale à $P(a)$ sur $D$, et qu'elle s'annule exactement aux points où un facteur s'annule. Or $1+a_nz^n=0$ équivaut à $a_n\ne0$ et $z^n=-1/a_n$, ce qui impose $|z|=|a_n|^{-1/n}$ : ce point est dans $D$ si et seulement si $|a_n|>1$.

**3. a)** Pour $M\ge m$, $P_M(a)=P_m(a)\,u$ avec $u=\prod_{m<n\le M}(1+a_nz^n)$, polynôme de la forme $1+(\text{termes de degré}\ge m+1)$ ; donc $P_M(a)-P_m(a)=P_m(a)(u-1)$ n'a que des termes de degré $\ge m+1$ : $P_M(a)\equiv P_m(a)\ [z^{m+1}]$. Quand $M\to\infty$, $c_k(P_M(a))\to c_k(P(a))$ (continuité de $c_k$, question 1), d'où $c_k(P(a))=c_k(P_m(a))$ pour $k\le m$.

**b)** Supposons $a\ne b$ et soit $m$ le plus petit indice tel que $a_m\ne b_m$. Alors $P_{m-1}(a)=P_{m-1}(b)=:Q$ (avec $Q=1$ si $m=1$), et
$$
P_m(a)-P_m(b)=Q\cdot(1+a_mz^m)-Q\cdot(1+b_mz^m)=(a_m-b_m)\,z^m\,Q .
$$
Comme $c_0(Q)=1$, le coefficient de $z^m$ de cette différence vaut $a_m-b_m\ne0$, ce qui contredit $P_m(a)\equiv P_m(b)\ [z^{m+1}]$. Donc $a=b$. (Aucune convergence n'intervient : ce sont des polynômes.)

*Injectivité.* Si $a,b\in\ell^1$ et $P(a)=P(b)$, alors par a), pour tout $m$, $P_m(a)\equiv P(a)=P(b)\equiv P_m(b)\ [z^{m+1}]$, donc $a=b$. Plus précisément, la preuve montre que $a$ se calcule **par récurrence** : $a_m=c_m(f)-c_m\big(P_{m-1}(a)\big)$ si $f=P(a)$.

**4.** *Candidat.* Pour $h\in\ell^1$, $\norm{h_nz^nG_n(a)}\le|h_n|\,e^{\norm{a^{(n)}}_1}\le|h_n|e^{\norm a_1}$ (question 2 b)). La série $\sum_nh_nz^nG_n(a)$ est donc absolument convergente dans l'espace de Banach $W$, donc convergente ([[ch05-banach-series-absolument-convergentes]]) ; sa somme $L_ah$ est linéaire en $h$ et $\norm{L_ah}\le e^{\norm a_1}\norm h_1$ : $L_a\in\mathcal L(\ell^1,W)$ ([[ch05-norme-operateur-def]]).

*Reste pour les produits partiels.* Fixons $N$, et posons $x_n=1+a_nz^n$, $y_n=h_nz^n$, $G_n^N(a)=\prod_{m\le N,\,m\ne n}x_m=P_N(a^{(n)})$. En développant,
$$
P_N(a+h)=\prod_{n\le N}(x_n+y_n)=\underbrace{P_N(a)}_{S=\emptyset}+\underbrace{\sum_{n\le N}h_nz^nG_n^N(a)}_{|S|=1\ :\ =:L_a^Nh}+\sum_{|S|\ge2}\prod_{n\in S}y_n\prod_{n\notin S}x_n .
$$
Comme $\norm{\prod_{n\notin S}x_n}\le\prod_n(1+|a_n|)\le e^{\norm a_1}$ et $\norm{\prod_{S}y_n}\le\prod_S|h_n|$,
$$
\norm{P_N(a+h)-P_N(a)-L_a^Nh}\le e^{\norm a_1}\sum_{|S|\ge2}\prod_{n\in S}|h_n|=e^{\norm a_1}\Big(\prod_{n\le N}(1+|h_n|)-1-\sigma\Big),\quad\sigma=\sum_{n\le N}|h_n|.
$$
La parenthèse est $\sum_{k\ge2}e_k$, où $e_k$ est la $k$-ième fonction symétrique élémentaire des $|h_n|$ ; dans le développement de $\sigma^k$, chaque produit de $k$ termes distincts apparaît $k!$ fois, donc $e_k\le\sigma^k/k!$, et la parenthèse est $\le e^\sigma-1-\sigma\le e^{\norm h_1}-1-\norm h_1$ (la fonction $x\mapsto e^x-1-x$ croît sur $\R_+$).

*Passage à la limite.* $P_N(a+h)\to P(a+h)$ et $P_N(a)\to P(a)$ (2 b)). D'autre part, d'après 2 b) appliqué à $a^{(n)}$ (dont la norme est $\le\norm a_1$ et le reste $\le r_N$), $\norm{G_n^N(a)-G_n(a)}\le e^{\norm a_1}(e^{r_N}-1)$ **uniformément en $n$**, donc
$$
\norm{L_a^Nh-L_ah}\le\sum_{n\le N}|h_n|\,\norm{G_n^N(a)-G_n(a)}+\sum_{n>N}|h_n|\,\norm{G_n(a)}\le\norm h_1e^{\norm a_1}(e^{r_N}-1)+e^{\norm a_1}\sum_{n>N}|h_n|\xrightarrow[N\to\infty]{}0 .
$$
Ainsi $\norm{P(a+h)-P(a)-L_ah}\le e^{\norm a_1}(e^{\norm h_1}-1-\norm h_1)\le e^{\norm a_1}\frac{\norm h_1^2}2e^{\norm h_1}$ (car $e^x-1-x=\sum_{k\ge2}\frac{x^k}{k!}\le\frac{x^2}2e^x$), qui est un $o(\norm h_1)$. Donc $P$ est différentiable en $a$ et $dP_a=L_a$ ([[ch05-differentielle-def]]).

*Continuité de $a\mapsto dP_a$.* Pour $a,b\in\ell^1$ et $h\in\ell^1$, $\norm{(L_a-L_b)h}\le\sum_n|h_n|\,\norm{G_n(a)-G_n(b)}$, et par 2 b) (avec $\norm{a^{(n)}-b^{(n)}}_1\le\norm{a-b}_1$),
$$
\norm{dP_a-dP_b}\le e^{\norm a_1+\norm b_1}\,\norm{a-b}_1 .
$$
Donc $a\mapsto dP_a$ est continue (localement lipschitzienne) : $P$ est de classe $C^1$ sur $\ell^1$.

**5.** Posons $Q(a)=P(a)-1$. Par 2 b), $Q$ est à valeurs dans $W_0=\ker c_0$, sous-espace fermé (noyau d'une forme linéaire continue) donc de Banach. Chaque $dP_a(h)$ est dans $W_0$ (somme d'une série convergente d'éléments $h_nz^nG_n(a)$ de $W_0$ fermé) : $Q:\ell^1\to W_0$ est $C^1$ avec $dQ_a=dP_a$, les estimations de 4 étant inchangées. En $a=0$ : $G_n(0)=P(0)=1$, donc
$$
dQ_0(h)=\sum_nh_nz^n=J(h).
$$
$J$ est une bijection linéaire isométrique de $\ell^1$ sur $W_0$ (question 1), donc un isomorphisme bicontinu ($\norm{J^{-1}}=1$). Le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit des ouverts $U_0\ni0$ de $\ell^1$ et $V_0\ni0$ de $W_0$ tels que $Q:U_0\to V_0$ soit un $C^1$-difféomorphisme. Soit $\rho>0$ tel que $B_{W_0}(0,\rho)\subset V_0$.

Si $f\in W$, $f(0)=c_0(f)=1$ et $\norm{f-1}<\rho$, alors $f-1\in V_0$ et il existe $a=(Q_{|U_0})^{-1}(f-1)\in U_0$ avec $P(a)=f$ dans $W$, donc $f(z)=\prod_{n\ge1}(1+a_nz^n)$ sur $D$ (2 c)). L'unicité **parmi tous les $a\in\ell^1$** (et pas seulement dans $U_0$) résulte de l'injectivité (question 3). L'application $f-1\mapsto a$, définie sur $B_{W_0}(0,\rho)$, est de classe $C^1$, de différentielle en $0$ égale à $(dQ_0)^{-1}=J^{-1}$ : au premier ordre, $a_n\approx c_n(f)$, c'est-à-dire $\norm{a-(c_n(f))_{n\ge1}}_1=o(\norm{f-1})$.

**6.** *Majoration.* $(dP_a-J)h=\sum_nh_nz^n\big(G_n(a)-1\big)$ et, par 2 a) et passage à la limite, $\norm{G_n(a)-1}=\lim_N\norm{P_N(a^{(n)})-1}\le\prod_m(1+|a_m|)-1\le e^{\norm a_1}-1$. D'où $\norm{(dP_a-J)h}\le(e^{\norm a_1}-1)\norm h_1$.

*Point fixe.* Soit $f\in W$ avec $f(0)=1$ et $\norm{f-1}\le\frac15$. Pour $a\in\ell^1$, $P(a)-f\in W_0$, et l'on pose
$$
T(a)=a-J^{-1}\big(P(a)-f\big)\in\ell^1 .
$$
$T$ est $C^1$ sur $\ell^1$ (règle de la chaîne, [[ch05-composition-differentielles]], $J^{-1}$ étant linéaire continue) et $dT_a=\id-J^{-1}dP_a=J^{-1}(J-dP_a)$, donc $\norm{dT_a}\le e^{\norm a_1}-1$. Soit $B=\bar B_{\ell^1}(0,\frac13)$ et $k=e^{1/3}-1$. Comme $1{,}4^3=2{,}744>e$, on a $e^{1/3}<1{,}4$, donc $k<0{,}4$.

* $T$ est $k$-lipschitzienne sur $B$ : pour $a,b\in B$, le segment $[a,b]$ est dans le convexe $B$, où $\norm{dT}\le k$, et le théorème des accroissements finis ([[ch05-accroissements-finis]], $T$ différentiable sur l'ouvert $\ell^1$) donne $\norm{T(a)-T(b)}_1\le k\norm{a-b}_1$.
* $T(B)\subset B$ : $T(0)=J^{-1}(f-1)$ a pour norme $\norm{f-1}\le\frac15$, donc pour $a\in B$, $\norm{T(a)}_1\le k\cdot\frac13+\frac15<\frac{0{,}4}3+\frac15=\frac13$.

$B$ est un fermé de l'espace complet $\ell^1$, donc complet ; le théorème du point fixe de Banach ([[ch06-point-fixe-banach]]) donne $a\in B$ avec $T(a)=a$, c'est-à-dire $J^{-1}(P(a)-f)=0$, soit $P(a)=f$, avec $\norm a_1\le\frac13$. (Numériquement : $k/3+1/5\approx0{,}3319<0{,}3333$.)

**7. a)** $f_t=\sum_{n\ge0}t^nz^n\in W$, $\norm{f_t}=\frac1{1-|t|}$, et $f_t(z)=\frac1{1-tz}$ sur $D$ ; dans l'algèbre $W$, $(1-tz)f_t=1$. Soit $b$ la suite définie par $b_{2^k}=t^{2^k}$ ($k\ge0$) et $b_n=0$ si $n$ n'est pas une puissance de $2$ ; $\norm b_1=\sum_k|t|^{2^k}\le\sum_n|t|^n<\infty$. Si $2^K\le N<2^{K+1}$, alors $P_N(b)=\prod_{k=0}^K\big(1+(tz)^{2^k}\big)$ et, par récurrence sur $K$ à l'aide de $(1-u)(1+u)=1-u^2$,
$$
(1-tz)\,P_N(b)=1-(tz)^{2^{K+1}} .
$$
Comme $\norm{(tz)^{2^{K+1}}}=|t|^{2^{K+1}}\to0$ et que la multiplication par $1-tz$ est continue sur $W$, on obtient $(1-tz)P(b)=1$, d'où $P(b)=P(b)(1-tz)f_t=f_t$. Par l'unicité (question 3), la suite cherchée est $a=b$ :
$$
\frac1{1-tz}=\prod_{k\ge0}\big(1+t^{2^k}z^{2^k}\big),\qquad a_n=\begin{cases}t^n&\text{si }n\text{ est une puissance de }2,\\0&\text{sinon.}\end{cases}
$$
*Cohérence.* $\norm{f_t-1}=\sum_{n\ge1}|t|^n=\frac{|t|}{1-|t|}\le\frac15\iff|t|\le\frac16$. Alors $\norm a_1=\sum_k|t|^{2^k}\le|t|+\sum_{j\ge2}|t|^j=|t|+\frac{|t|^2}{1-|t|}\le\frac16+\frac1{30}=\frac15\le\frac13$ : la solution donnée par la question 6 (unique dans $\ell^1$) est bien dans $\bar B(0,\frac13)$. (Le calcul récursif de 3 b), fait numériquement pour $t=0{,}3+0{,}2i$ jusqu'à l'ordre $200$, redonne exactement ces $a_n$.)

**b)** Soit $f=1+z+z^2$ et $b$ la suite définie par $b_{2^k}=1$ ($k\ge0$), $b_3=-1$, $b_n=0$ sinon. Montrons que $P_m(b)\equiv f\ [z^{m+1}]$ pour tout $m\ge1$.
* $m=1$ : $P_1(b)=1+z$ ; $m=2$ : $P_2(b)=(1+z)(1+z^2)=1+z+z^2+z^3$ : on a bien l'égalité des coefficients jusqu'au degré $m$.
* $m\ge3$ : soit $K\ge1$ tel que $2^K\le m<2^{K+1}$. Alors, avec $1-z^3=(1-z)(1+z+z^2)$ et l'identité de l'énoncé,
$$
P_m(b)=(1-z^3)\prod_{k=0}^K\big(1+z^{2^k}\big)=(1+z+z^2)\big(1-z^{2^{K+1}}\big)\equiv f\ [z^{2^{K+1}}],
$$
et $m+1\le2^{K+1}$.

Si l'on avait $f=P(a)$ avec $a\in\ell^1$, alors par 3 a), $P_m(a)\equiv f\equiv P_m(b)\ [z^{m+1}]$ pour tout $m$, et 3 b) donnerait $a=b$ ; mais $b$ a une infinité de termes égaux à $1$, donc $b\notin\ell^1$ : contradiction. Ainsi $1+z+z^2\notin P(\ell^1)$, bien que $1+z+z^2\in W$, $f(0)=1$ et que $f$ ne s'annule pas dans $D$ (ses zéros $j,\bar j$ sont sur le cercle unité).

En revanche $\norm{s(z+z^2)}=2|s|\le\frac15$ si $|s|\le\frac1{10}$ : pour ces $s$, la question 6 donne $1+s(z+z^2)=P(a)$ avec $\norm a_1\le\frac13$ (et la récurrence donne $a_1=s$, $a_2=s$, $a_3=-s^2$, $a_4=s^3$, …). Sur la droite $\{1+s(z+z^2)\}$, l'image $P(\ell^1)$ contient le disque $|s|\le\frac1{10}$ mais pas le point $s=1$ : **le résultat de 5–6 est purement local**, $P(\ell^1)$ n'est pas tout l'hyperplan affine $\{f : f(0)=1\}$.

## Pièges et variantes

> ⚠️ Différentier un produit infini « terme à terme » ne suffit pas : il faut une majoration du reste **indépendante de $N$** (ici $e^{\norm a_1}(e^{\norm h_1}-1-\norm h_1)$), puis un passage à la limite justifié (2 b) uniforme en $n$). C'est exactement le schéma « estimation sur les produits finis, puis limite » de la preuve du théorème sur les produits infinis.

* **Unicité ≠ existence.** L'unicité (question 3) est formelle et globale : elle ne demande aucune petitesse. L'existence est locale (inversion locale) et peut échouer loin de $1$ (question 7 b)).
* L'inversion locale demande un **isomorphisme bicontinu** entre espaces de Banach : c'est pour cela qu'on vise $W_0$ et non $W$ ($dP_0=J$ n'est pas surjective sur $W$), et qu'on choisit la norme $\ell^1$ des coefficients. Avec la norme $\sup_{\bar D}$, l'image de $J$ (fonctions à coefficients sommables) n'est pas fermée et $J^{-1}$ n'est pas continue : la méthode s'effondre.
* $\frac1{1-z}=\prod_{k\ge0}(1+z^{2^k})$ est vraie sur $D$ (cas $t\to1$ de 7 a)), mais ni $\frac1{1-z}$ n'est dans $W$, ni la suite $a$ dans $\ell^1$ : aucune contradiction avec l'injectivité.
* Ne pas confondre « $P(a)$ ne s'annule pas dans $D$ » (équivaut à $|a_n|\le1$ pour tout $n$, question 2 c)) avec « $f$ est dans l'image de $P$ » : $1+z+z^2$ ne s'annule pas dans $D$ et n'est pas dans l'image.
* Variante : $e^{tz}$ est dans $W$ avec $\norm{e^{tz}-1}=e^{|t|}-1\le\frac15$ si $|t|\le\ln\frac65\approx0{,}182$ ; la récurrence donne $a_1=t$, $a_2=\frac{t^2}2$, $a_3=-\frac{t^3}3$, $a_4=\frac{3t^4}8$, $a_5=-\frac{t^5}5$.
* Variante : remplacer $W$ et $\ell^1$ par leurs versions à poids ($\sum|c_n|R^n<\infty$, $\sum|a_n|R^n<\infty$) donne, par le changement de variable $z\mapsto Rz$, la même factorisation sur $D(0,R)$.
* Variante : dans l'algèbre de Banach $W$, toute $f$ avec $\norm{f-1}<1$ a un logarithme $\log f=\sum_{k\ge1}\frac{(-1)^{k+1}}k(f-1)^k\in W$ (série absolument convergente) ; on peut redémontrer l'unicité de 3 b) en comparant les logarithmes des deux produits.
