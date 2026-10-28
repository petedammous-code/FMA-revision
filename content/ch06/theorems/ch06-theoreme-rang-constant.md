---
id: ch06-theoreme-rang-constant
type: theorem
chapter: 6
title: Théorème du rang constant (formes normales des immersions, submersions, applications de rang constant)
ref: Exercice VI.4.9
page: 125
importance: 3
depends: [ch06-inversion-locale, ch05-differentielle-nulle-constante, ch06-immersion-submersion-def, ch06-diffeomorphisme-def, ch05-composition-differentielles, ch05-matrice-jacobienne]
tags: [rang constant, immersion, submersion, forme normale, inversion locale, changement de coordonnées, sous-variétés]
---
## Intuition

> 💡 En algèbre linéaire, toute matrice $A$ de taille $m\times n$ et de rang $r$ s'écrit, après changement de base à la source et au but, $\begin{pmatrix}I_r&0\\0&0\end{pmatrix}$ : il existe $U\in\GL_m(\R)$, $V\in\GL_n(\R)$ avec $UAV=\begin{pmatrix}I_r&0\\0&0\end{pmatrix}$. Le théorème du rang constant est la version **non linéaire et locale** de ce fait : une application $f$ dont la différentielle garde le **même rang** $r$ près de $a$ est, après des **changements de coordonnées curvilignes** (des difféomorphismes) à la source et au but, l'application $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$.

Image mentale : une **submersion** (différentielle surjective) ressemble localement à une projection : ses « lignes de niveau » se redressent en sous-espaces affines parallèles. Une **immersion** (différentielle injective) ressemble localement à l'inclusion d'un plan dans un espace plus grand : son image se redresse en un morceau de $\R^n\times\{0\}$.

Vocabulaire : immersion, submersion, rang et « rang constant au voisinage de $a$ » sont définis dans [[ch06-immersion-submersion-def]] ; un **difféomorphisme** (de classe $C^p$) est une bijection entre ouverts, $C^p$ ainsi que sa réciproque ([[ch06-diffeomorphisme-def]]). Ici, tous les difféomorphismes sont de classe $C^p$, la classe de $f$.

## Énoncé

**Théorème (poly, Exercice VI.4.9, p. 125).** Soit $f:U\to\R^m$ une application de classe $C^p$ ($p\ge1$) d'un ouvert $U$ de $\R^n$ dans $\R^m$. Soit $a\in U$.

1. **(Immersion.)** Si $f$ est une immersion en $a$ (i.e. si $df_a$ est injective), alors il existe un voisinage ouvert $U_1$ de $a$ dans $U$, un voisinage ouvert $W_1$ de $f(a)$ dans $\R^m$ et $\Psi:W_1\to W_2\subset\R^m$ un difféomorphisme de $W_1$ sur un ouvert $W_2$ de $\R^m$ tels que $f(U_1)\subset W_1$ et
$$
\Psi\circ f(x_1,\dots,x_n)=(x_1,\dots,x_n,0,\dots,0)\quad\text{pour tout } x=(x_1,\dots,x_n)\in U_1 .
$$
Autrement dit, à un changement de variable au but près, toute immersion est localement égale à l'injection canonique de $\R^n$ dans $\R^m$.

2. **(Submersion.)** Si $f$ est une submersion en $a$ (i.e. si $df_a$ est surjective), alors il existe un voisinage ouvert $U_1$ de $a$ dans $U$, un ouvert $U_2$ de $\R^n$ et un difféomorphisme $\Phi:U_2\to U_1$ tels que
$$
f\circ\Phi(x_1,\dots,x_n)=(x_1,\dots,x_m)\quad\text{pour tout } x=(x_1,\dots,x_n)\in U_2 .
$$
Autrement dit, à un changement de variable à la source près, toute submersion est égale à la projection canonique de $\R^n$ dans $\R^m$.

3. **(Rang constant.)** Posons $r=\mathrm{rang}(df_a)$. Supposons que $df_x$ soit de rang $r$ pour tout $x$ dans un voisinage de $a$. Alors il existe
   * (a) un difféomorphisme $\Phi:U_2\to U_1$ d'un ouvert $U_2$ de $\R^n$ sur un voisinage ouvert $U_1$ de $a$ dans $U$,
   * (b) un difféomorphisme $\Psi:W_1\to W_2$ d'un voisinage ouvert $W_1$ de $f(a)$ dans $\R^m$ sur un ouvert $W_2$ de $\R^m$,

   vérifiant $f(U_1)\subset W_1$ et
$$
\Psi\circ f\circ\Phi:U_2\to W_2,\qquad (x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)\quad\text{pour tout } x\in U_2 .
$$

(La troisième assertion est appelée **théorème du rang constant** ; le poly la rappelle en Remarque IX.1.4, p. 148.)

## Hypothèses

### H1 — $f$ de classe $C^p$ avec $p\ge1$

**Rôle.** On applique le [[ch06-inversion-locale|théorème d'inversion locale]] (qui exige $C^1$) à des applications construites à partir de $f$ ($\Theta$ et $F$ ci-dessous) ; la continuité des dérivées partielles donne aussi la semi-continuité du rang.

**Si on la retire.** $f(x)=\frac x2+x^2\sin\frac1x$, $f(0)=0$, est dérivable sur $\R$ avec $f'(0)=\frac12$ : $df_0$ est injective et surjective ($n=m=1$). Mais $f'\big(\frac1{2k\pi}\big)=-\frac12<0$ et $f'\big(\frac1{(2k+1)\pi}\big)=\frac32>0$, donc $f$ n'est monotone sur aucun voisinage de $0$, donc (continue sur un intervalle) n'y est pas injective. Or la conclusion 1 ($\Psi\circ f=\id$ sur $U_1$) comme la conclusion 2 ($f\circ\Phi=\id$ sur $U_2$, donc $f|_{U_1}=\Phi^{-1}$) forceraient $f$ injective sur le voisinage $U_1$ de $0$ : les deux conclusions sont fausses.

### H2 — Cas 1 : $df_a$ injective

**Rôle.** Elle rend $dF_{(a,0)}:(v,w)\mapsto df_a(v)+\phi(w)$ inversible (voir la preuve).

**Si on la retire.** L'hypothèse est **nécessaire** : si $\Psi\circ f=\iota$ (injection canonique) sur $U_1$, la règle de la chaîne donne $d\Psi_{f(a)}\circ df_a=\iota$, injective, donc $df_a$ injective. Exemple : $f(x)=x^3$ est un homéomorphisme de $\R$, mais $df_0=0$ ; $\Psi\circ f=\id$ près de $0$ forcerait $\Psi(y)=y^{1/3}$ sur un voisinage de $0$, non dérivable en $0$.

### H3 — Cas 2 : $df_a$ surjective

**Rôle.** Elle permet de choisir $m$ colonnes indépendantes de la jacobienne, donc de rendre $d\Theta_a$ inversible.

**Si on la retire.** Hypothèse **nécessaire** : $f\circ\Phi=p$ (projection) donne $df_{\Phi(y)}\circ d\Phi_y=p$, surjective. Exemple : $f(x,y)=x^2$ en $0$ ($df_0=0$) ; si $f\circ\Phi=p$ sur $U_2$, alors $f(U_1)=p(U_2)$ serait un ouvert de $\R$ contenant $f(0)=0$, donc contenant des réels $<0$, alors que $f\ge0$.

### H4 — Cas 3 : rang constant sur un **voisinage** de $a$

**Rôle.** C'est elle, et elle seule, qui force le bloc $B(y)$ à être nul dans la preuve (voir l'étape 3). Dans les cas 1 et 2 (rang maximal), elle est automatique par semi-continuité du rang ([[ch06-immersion-submersion-def]]).

**Si on la retire.** Hypothèse **nécessaire** : si $\Psi\circ f\circ\Phi=\pi_r:(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$ sur $U_2$, alors $d\Psi_{f(\Phi(y))}\circ df_{\Phi(y)}\circ d\Phi_y=\pi_r$ et, $d\Psi$ et $d\Phi$ étant inversibles, $\mathrm{rang}(df_x)=r$ pour tout $x\in U_1$. Exemple : $f(x,y)=(x,xy)$ en $0$ : $df_{(x,y)}=\begin{pmatrix}1&0\\y&x\end{pmatrix}$ est de rang $1$ en $0$ et de rang $2$ dès que $x\ne0$ : aucune forme normale n'existe en $0$. De même $f(x)=x^2$ en $0$ (rang $0$ en $0$, $1$ ailleurs ; $f$ envoie tout voisinage de $0$ dans $[0,+\infty[$).

## Idée de la preuve

On se ramène par permutations à « bloc $r\times r$ supérieur gauche de la jacobienne inversible », puis on prend pour nouvelles coordonnées à la source $\Theta(x)=(f_1(x),\dots,f_r(x),x_{r+1},\dots,x_n)$ (inversion locale). Dans ces coordonnées, $g=f\circ\Theta^{-1}$ a ses $r$ premières composantes égales à $y_1,\dots,y_r$ ; le rang constant force les autres à ne dépendre que de $y_1,\dots,y_r$, et on les « soustrait » au but. Pour l'immersion, on inverse directement $F(u,t)=f(u)+\phi(t)$.

## Preuve

Notons $M(x)=\big(\frac{\partial f_i}{\partial x_j}(x)\big)_{1\le i\le m,\,1\le j\le n}$ la matrice jacobienne de $f$ en $x$ ([[ch05-matrice-jacobienne]]).

**Étape 0 : normalisation par permutations.** Comme $\mathrm{rang}\,M(a)=r$, $M(a)$ possède un mineur $r\times r$ non nul, formé de lignes $i_1,\dots,i_r$ et de colonnes $j_1,\dots,j_r$. Soient $P$ une permutation des coordonnées de $\R^n$ et $Q$ une permutation des coordonnées de $\R^m$ (isomorphismes linéaires, donc difféomorphismes $C^\infty$) amenant ces colonnes et ces lignes en tête. L'application $\tilde f=Q\circ f\circ P$, définie sur l'ouvert $P^{-1}(U)$, est $C^p$, sa jacobienne en $x$ est $Q\,M(Px)\,P$ (règle de la chaîne, [[ch05-composition-differentielles]]), de même rang que $M(Px)$, et son bloc $r\times r$ supérieur gauche est inversible en $\tilde a=P^{-1}a$. Si l'on a trouvé $\tilde\Phi,\tilde\Psi$ pour $\tilde f$ en $\tilde a$, alors $\Phi=P\circ\tilde\Phi$ et $\Psi=\tilde\Psi\circ Q$ (sur $W_1=Q^{-1}(\tilde W_1)$) conviennent pour $f$ en $a$, puisque $\Psi\circ f\circ\Phi=\tilde\Psi\circ\tilde f\circ\tilde\Phi$ et $f(P(\tilde U_1))=Q^{-1}\tilde f(\tilde U_1)\subset Q^{-1}(\tilde W_1)$. **On suppose donc** que $A(x)=\big(\frac{\partial f_i}{\partial x_j}(x)\big)_{1\le i,j\le r}$ est inversible en $x=a$. (Dans le cas 2, $r=m$ et seule $P$ est nécessaire.)

**Cas 3.** Soit $V\subset U$ un voisinage ouvert de $a$ sur lequel $\mathrm{rang}(df_x)=r$.

*Étape 1 : changement de coordonnées à la source.* Posons
$$
\Theta:V\to\R^n,\qquad \Theta(x)=\big(f_1(x),\dots,f_r(x),x_{r+1},\dots,x_n\big).
$$
$\Theta$ est $C^p$ et sa jacobienne est triangulaire par blocs :
$$
\Big(\frac{\partial\Theta_i}{\partial x_j}(x)\Big)_{1\le i,j\le n}=\begin{pmatrix}A(x)&*\\0&I_{n-r}\end{pmatrix},\qquad \det d\Theta_a=\det A(a)\ne0 .
$$
Par le théorème d'inversion locale ([[ch06-inversion-locale]]), $\Theta$ induit un $C^p$-difféomorphisme d'un voisinage ouvert de $a$ sur un voisinage ouvert de $b=\Theta(a)$. Ce dernier contient un **pavé ouvert** $U_2=\Pi'\times\Pi''$ contenant $b$, avec $\Pi'\subset\R^r$ et $\Pi''\subset\R^{n-r}$ produits d'intervalles ouverts (donc convexes, donc connexes). On pose $\Phi=\Theta^{-1}|_{U_2}$ et $U_1=\Phi(U_2)$, ouvert (image réciproque de $U_2$ par $\Theta$ continue, intersectée avec le domaine du difféomorphisme) ; $\Phi:U_2\to U_1$ est un $C^p$-difféomorphisme et $U_1\subset V$.

*Étape 2 : forme de $g=f\circ\Phi$.* Soit $y\in U_2$ et $x=\Phi(y)$ ; alors $\Theta(x)=y$, donc $f_i(x)=y_i$ pour $i\le r$. Ainsi
$$
g(y)=\big(y_1,\dots,y_r,\,g_{r+1}(y),\dots,g_m(y)\big),\qquad dg_y=\begin{pmatrix}I_r&0\\ *&B(y)\end{pmatrix},\quad B(y)=\Big(\frac{\partial g_i}{\partial y_j}(y)\Big)_{r<i\le m,\ r<j\le n}.
$$
(L'hypothèse de rang constant n'a pas encore servi.)

*Étape 3 : le rang constant force $B\equiv0$.* Par la règle de la chaîne, $dg_y=df_{\Phi(y)}\circ d\Phi_y$ avec $d\Phi_y$ inversible, donc $\mathrm{rang}(dg_y)=\mathrm{rang}(df_{\Phi(y)})=r$ (car $\Phi(y)\in U_1\subset V$). Les $r$ premières colonnes de $dg_y$, de la forme $\binom{I_r}{*}$, sont linéairement indépendantes. Si une colonne d'indice $j>r$ était non nulle, elle serait de la forme $\binom{0}{c}$ avec $c\ne0$ ; une combinaison $\sum_{k\le r}\mu_k\,(\text{colonne }k)$ qui lui serait égale aurait ses $r$ premières coordonnées $(\mu_1,\dots,\mu_r)=0$, donc serait nulle : contradiction. Cette colonne serait donc hors de l'espace engendré par les $r$ premières, et le rang serait $\ge r+1$. Donc toutes les colonnes d'indice $j>r$ sont nulles : $B(y)=0$ pour tout $y\in U_2$.

*Étape 4 : $g_{r+1},\dots,g_m$ ne dépendent que de $y'=(y_1,\dots,y_r)$.* Écrivons $y=(y',y'')\in\Pi'\times\Pi''$. Pour $i>r$ et $y'$ fixé, l'application $y''\mapsto g_i(y',y'')$, définie sur le convexe ouvert $\Pi''$, a une différentielle nulle (ses dérivées partielles sont des coefficients de $B$) ; elle est donc constante ([[ch05-differentielle-nulle-constante]]). Avec $b''=(b_{r+1},\dots,b_n)\in\Pi''$, posons $h_i(y')=g_i(y',b'')$ : $h_i:\Pi'\to\R$ est $C^p$ et $g_i(y)=h_i(y')$ sur $U_2$. C'est ici que le choix d'un **pavé** sert.

*Étape 5 : redressement au but.* Notons $h=(h_{r+1},\dots,h_m):\Pi'\to\R^{m-r}$ et posons, sur l'ouvert $W_1=\Pi'\times\R^{m-r}$ de $\R^m$,
$$
\Psi(z',z'')=\big(z',\ z''-h(z')\big),\qquad z'\in\Pi',\ z''\in\R^{m-r}.
$$
$\Psi$ est $C^p$, bijective de $W_1$ sur $W_2=W_1$, de réciproque $(w',w'')\mapsto(w',w''+h(w'))$, elle aussi $C^p$ : c'est un $C^p$-difféomorphisme. Pour $x\in U_1$, $y=\Theta(x)\in U_2$ et $f(x)=g(y)=(y',h(y'))\in W_1$ : donc $f(U_1)\subset W_1$, et en particulier $f(a)\in W_1$. Enfin, pour $y\in U_2$,
$$
\Psi\circ f\circ\Phi(y)=\Psi\big(y',h(y')\big)=(y',0)=(y_1,\dots,y_r,0,\dots,0). \qquad\square
$$

*Variante du poly :* le corrigé de TD obtient $\Psi$ en appliquant l'inversion locale en $f(a)$ (sa jacobienne est $\begin{pmatrix}I_r&0\\ *&I_{m-r}\end{pmatrix}$) ; ci-dessus, l'inverse explicite de $\Psi$ dispense de ce second appel.

**Cas 2 (submersion).** Ici $r=m$ et, par l'étape 0, seule une permutation $P$ à la source est utilisée. On pose $\Theta(x)=(f_1(x),\dots,f_m(x),x_{m+1},\dots,x_n)$ ; comme à l'étape 1, $\det d\Theta_a=\det A(a)\ne0$ et l'inversion locale fournit un $C^p$-difféomorphisme $\Theta:U_1\to U_2$ entre voisinages ouverts de $a$ et de $\Theta(a)$. Avec $\Phi=\Theta^{-1}:U_2\to U_1$, pour $y\in U_2$ et $x=\Phi(y)$, on a $\Theta(x)=y$, donc $f(x)=(y_1,\dots,y_m)$ :
$$
f\circ\Phi(y_1,\dots,y_n)=(y_1,\dots,y_m).
$$
Ni pavé ni hypothèse de rang constant ne sont nécessaires (et l'on n'a pas besoin de changer de coordonnées au but). $\square$

**Cas 1 (immersion).** Le cas 3 (avec $r=n$) donnerait $\Psi\circ f\circ\Phi=\iota$ avec un changement de variable à la source en plus ; on obtient directement la forme annoncée ainsi. Soit $H$ un supplémentaire de $df_a(\R^n)$ dans $\R^m$ : $\R^m=df_a(\R^n)\oplus H$, avec $\dim H=m-n$ car $df_a$ est injective. Soit $\phi:\R^{m-n}\to H$ un isomorphisme linéaire, et
$$
F:U\times\R^{m-n}\to\R^m,\qquad F(u,t)=f(u)+\phi(t).
$$
$F$ est $C^p$ (somme d'une application $C^p$ et d'une application linéaire), $F(a,0)=f(a)$ et $dF_{(a,0)}(v,w)=df_a(v)+\phi(w)$. Si $df_a(v)+\phi(w)=0$, la somme étant directe, $df_a(v)=0$ et $\phi(w)=0$, donc $v=0$ et $w=0$ : $dF_{(a,0)}$ est injective de $\R^n\times\R^{m-n}$ dans $\R^m$, espaces de même dimension $m$, donc bijective. Par l'inversion locale, $F$ induit un $C^p$-difféomorphisme d'un voisinage ouvert $O$ de $(a,0)$ sur un voisinage ouvert $W_1$ de $f(a)$. On pose $\Psi=(F|_O)^{-1}:W_1\to W_2:=O$, et $U_1=\{u\in U:(u,0)\in O\}$, ouvert (image réciproque de $O$ par $u\mapsto(u,0)$) contenant $a$. Pour $x\in U_1$ : $f(x)=F(x,0)\in F(O)=W_1$, et
$$
\Psi\circ f(x)=\Psi\big(F(x,0)\big)=(x,0)=(x_1,\dots,x_n,0,\dots,0). \qquad\square
$$
(C'est exactement la construction de la Proposition IX.1.2, p. 147.)

## Preuve à trous

**Cas 3.** Après permutations des coordonnées, on suppose le bloc $A(a)=\big(\frac{\partial f_i}{\partial x_j}(a)\big)_{1\le i,j\le r}$ inversible. On pose <trou indice="on garde les r « bonnes » composantes de f et on complète par des coordonnées">$\Theta(x)=\big(f_1(x),\dots,f_r(x),x_{r+1},\dots,x_n\big)$</trou>, dont la jacobienne est $\begin{pmatrix}A(x)&*\\0&I_{n-r}\end{pmatrix}$, inversible en $a$. L'inversion locale donne $\Phi=\Theta^{-1}:U_2\to U_1$, avec $U_2=\Pi'\times\Pi''$ un pavé et $U_1$ contenu dans la zone de rang $r$. Alors $g=f\circ\Phi$ vérifie $g(y)=(y_1,\dots,y_r,g_{r+1}(y),\dots,g_m(y))$ et $dg_y=\begin{pmatrix}I_r&0\\ *&B(y)\end{pmatrix}$. Comme <trou indice="que vaut le rang de dg_y, et que deviendrait-il si une colonne d'indice > r était non nulle ?">$\mathrm{rang}(dg_y)=\mathrm{rang}(df_{\Phi(y)})=r$ et que les $r$ premières colonnes sont indépendantes, toute colonne $\binom{0}{c}$ non nulle augmenterait le rang : donc $B\equiv0$</trou>. Sur le pavé, <trou indice="différentielle nulle sur un convexe">$y''\mapsto g_i(y',y'')$ est constante ; donc $g_i(y)=h_i(y')$ avec $h_i(y')=g_i(y',b'')$</trou>. On redresse au but par <trou>$\Psi(z',z'')=(z',z''-h(z'))$ sur $\Pi'\times\R^{m-r}$, difféomorphisme d'inverse $(w',w'')\mapsto(w',w''+h(w'))$</trou>, et $\Psi\circ f\circ\Phi(y)=\Psi(y',h(y'))=(y',0)$.

**Cas 1.** Avec $H$ supplémentaire de $df_a(\R^n)$ et $\phi:\R^{m-n}\to H$ isomorphisme, on pose <trou indice="épaissir f dans les directions manquantes">$F(u,t)=f(u)+\phi(t)$, dont la différentielle $(v,w)\mapsto df_a(v)+\phi(w)$ est un isomorphisme</trou>, et $\Psi=F^{-1}$ près de $f(a)$ : $\Psi\circ f(x)=\Psi(F(x,0))=(x,0)$. $\square$

## Exemples

* **Submersion : le carré de la norme.** $f(x,y)=x^2+y^2$ en $a=(1,0)$ : $df_a=(2\ \ 0)$, surjective. $\Theta(x,y)=(x^2+y^2,y)$, de jacobienne $\begin{pmatrix}2x&2y\\0&1\end{pmatrix}$ (déterminant $2x\ne0$ près de $a$). Sur $U_1=\{x>0\}$, $\Theta$ est un difféomorphisme sur $U_2=\{(u,v):u>v^2\}$, d'inverse $\Phi(u,v)=\big(\sqrt{u-v^2},\,v\big)$, et $f\circ\Phi(u,v)=(u-v^2)+v^2=u$ : dans les coordonnées $(u,v)$, $f$ est la projection $(u,v)\mapsto u$, et les cercles $\{f=c\}$ deviennent les droites $\{u=c\}$.

* **Immersion : le cercle.** $f(t)=(\cos t,\sin t)$ en $a=0$ : $df_0(h)=(0,h)$, d'image $\R e_2$ ; supplémentaire $H=\R e_1$, $\phi(s)=s\,e_1$. Alors $F(t,s)=(\cos t+s,\ \sin t)$ est un difféomorphisme de $O=\,]-\frac\pi2,\frac\pi2[\times\R$ sur $W_1=\R\times\,]-1,1[$ (on retrouve $t=\arcsin z_2$, puis $s=z_1-\cos t$), d'inverse
$$
\Psi(z_1,z_2)=\Big(\arcsin z_2,\ z_1-\sqrt{1-z_2^2}\Big),
$$
et $\Psi\circ f(t)=\big(\arcsin(\sin t),\ \cos t-\sqrt{1-\sin^2t}\big)=(t,\cos t-|\cos t|)=(t,0)$ pour $|t|<\frac\pi2$ : $\Psi$ redresse le demi-cercle droit $\{z_1>0\}$ sur le segment $]-\frac\pi2,\frac\pi2[\times\{0\}$.

* **Rang constant $1$ dans $\R^2\to\R^2$.** $f(x,y)=\big(x+y,(x+y)^2\big)$, de rang $1$ partout, en $a=0$ : bloc $\frac{\partial f_1}{\partial x}=1$ inversible. $\Theta(x,y)=(x+y,y)$, $\Phi(u,v)=(u-v,v)$ (difféomorphisme global), $g(u,v)=f\circ\Phi(u,v)=(u,u^2)$ : on voit bien $B=\frac{\partial g_2}{\partial v}=0$, et $h(u)=u^2$. Avec $\Psi(z_1,z_2)=(z_1,z_2-z_1^2)$, $\Psi\circ f\circ\Phi(u,v)=(u,0)$ : la parabole image est redressée en l'axe des abscisses.

## Pièges

* > ⚠️ Le cas 3 exige le rang constant sur **tout un voisinage** de $a$, pas seulement $\mathrm{rang}(df_a)=r$. Pour $r$ maximal ($r=n$ ou $r=m$) c'est automatique (semi-continuité du rang), pas pour $r$ intermédiaire : $(x,y)\mapsto(x,xy)$ en $0$.
* Ne pas inverser les rôles : pour une **immersion**, le changement de variable est **au but** ($\Psi\circ f=\iota$) ; pour une **submersion**, il est **à la source** ($f\circ\Phi=p$) ; dans le cas général, il en faut **deux**.
* Le résultat est **local** : $t\mapsto(\cos t,\sin t)$ est une immersion en tout point mais n'est pas injective sur $\R$ ; $t\mapsto(\sin2t,\sin t)$ est une immersion injective sur $]-\pi,\pi[$ dont l'image (un « huit ») n'est pas une sous-variété au voisinage de l'origine (les extrémités $t\to\pm\pi$ reviennent vers $(0,0)=f(0)$).
* Dans l'étape 4, l'annulation des dérivées partielles en $y''$ n'entraîne l'indépendance en $y''$ que sur un domaine où chaque « tranche » $\{y'\}\times\Pi''$ est connexe : d'où le choix d'un **pavé** $U_2$.
* Ne pas oublier de **défaire la normalisation** (permutations $P$, $Q$) : $\Phi=P\circ\tilde\Phi$, $\Psi=\tilde\Psi\circ Q$. La normalisation « $a=0$, $f(a)=0$ » du poly (par translations) est commode mais pas nécessaire.
* Tous les difféomorphismes obtenus ont la régularité $C^p$ de $f$ (pas mieux).
