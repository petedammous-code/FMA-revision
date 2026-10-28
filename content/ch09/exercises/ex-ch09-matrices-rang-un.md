---
id: ex-ch09-matrices-rang-un
type: exercise
chapters: [9, 5]
title: La sous-variété des matrices de rang un et la meilleure approximation de rang un
source: "Inventé (d'après le théorème d'Eckart–Young)"
difficulty: 3
time: 50
tools: [ch09-localement-graphe-implique-sous-variete, ch09-vecteur-tangent-espace-tangent-def, ch09-espace-tangent-image-dx, ch09-extremum-local-differentielle-nulle, ch09-ex-distance-carre]
---
## Énoncé

Soit $n\ge2$. On munit $\mathrm M_n(\R)$ du produit scalaire $\langle X,Y\rangle=\mathrm{tr}({}^tXY)=\sum_{i,j}x_{ij}y_{ij}$ et de la norme associée $\norm{X}$. Les vecteurs de $\R^n$ sont des colonnes ; pour $u,v\in\R^n$, $u\,{}^tv$ est la matrice de coefficients $u_iv_j$. On note
$$
R_1=\{A\in\mathrm M_n(\R)\;;\;\mathrm{rg}(A)=1\},\qquad R_{\le1}=R_1\cup\{0\}.
$$
1. Montrer que $A\in R_1$ si et seulement s'il existe $u,v\in\R^n\setminus\{0\}$ tels que $A=u\,{}^tv$, et que $\norm{u\,{}^tv}=\norm u\,\norm v$.
2. Soit $\Omega=\{A\in\mathrm M_n(\R)\;;\;a_{11}\ne0\}$. Montrer que pour $A\in\Omega$,
$$
A\in R_1\iff a_{ij}=\frac{a_{i1}\,a_{1j}}{a_{11}}\quad\text{pour tous } i,j\in\{2,\dots,n\}.
$$
En déduire que $R_1$ est une sous-variété de $\mathrm M_n(\R)$ de dimension $2n-1$.
3. Soit $A=u\,{}^tv\in R_1$. Montrer que $T_AR_1=\{h\,{}^tv+u\,{}^tk\;;\;h,k\in\R^n\}$.
4. $R_{\le1}$ est-il une sous-variété de $\mathrm M_n(\R)$ ?
5. Soit $B\in\mathrm M_n(\R)$ non nulle et $f:R_1\to\R$, $f(A)=\norm{A-B}^2$.
   a. Montrer que $f$ atteint sa borne inférieure sur $R_1$.
   b. Soit $A=u\,{}^tv\in R_1$ un point critique de $f$. Montrer que $Bv=\norm v^2u$ et ${}^tBu=\norm u^2v$, puis que $\sigma^2=\norm u^2\norm v^2$ est valeur propre de ${}^tBB$ et que $f(A)=\norm B^2-\sigma^2$.
   c. En déduire $\min_{R_1}f=\norm B^2-\lambda_{\max}$, où $\lambda_{\max}$ est la plus grande valeur propre de ${}^tBB$, et exhiber une matrice de $R_1$ qui réalise ce minimum.

## Indices

### Indice 1
Pour montrer que $R_1$ est une sous-variété, chercher à la décrire localement comme un **graphe** : sur $\Omega$, la première ligne et la première colonne déterminent tout le reste. Pour la question 5, $f$ est la restriction d'une fonction distance au carré : un minimum est un point critique, et l'on connaît l'espace tangent.

### Indice 2
Question 2 : sur $\Omega$, $R_1\cap\Omega$ est (à une permutation des coordonnées près) le graphe d'une application $C^\infty$ de $\R^\times\times\R^{2n-2}$ dans $\R^{(n-1)^2}$ ; pour un point $A_0\in R_1$ quelconque, un coefficient $a_{kl}$ est non nul et l'on permute lignes et colonnes. Question 3 : la courbe $t\mapsto(u+th)\,{}^t(v+tk)$ et un argument de dimension.

### Indice 3
Question 5b : $df_A(H)=2\langle A-B,H\rangle$, et $\langle C,h\,{}^tv\rangle={}^th\,Cv$, $\langle C,u\,{}^tk\rangle={}^tk\,{}^tCu$. Question 5a : chercher le minimum sur le fermé $R_{\le1}$ (coercivité), puis vérifier qu'il n'est pas atteint en $0$.

## Corrigé

**1.** Si $\mathrm{rg}A=1$, l'image de $A$ est une droite $\R u$ ($u\ne0$), donc chaque colonne $C_j$ s'écrit $C_j=v_ju$ ; ainsi $A=u\,{}^tv$ avec $v=(v_1,\dots,v_n)\ne0$ car $A\ne0$. Réciproquement, si $u,v\ne0$, $A=u\,{}^tv$ vérifie $Ax=({}^tv\,x)\,u$ : l'image est $\R u$ (car ${}^tv\,v\ne0$), de dimension $1$. Enfin $\norm{u\,{}^tv}^2=\sum_{i,j}u_i^2v_j^2=\norm u^2\norm v^2$.

**2. Équivalence.** Soit $A\in\Omega$, de lignes $L_1,\dots,L_n$. Si $\mathrm{rg}A=1$, comme $L_1\ne0$ (car $a_{11}\ne0$), toutes les lignes sont proportionnelles à $L_1$ : $L_i=\lambda_iL_1$, et $\lambda_i=a_{i1}/a_{11}$ en lisant la première colonne ; d'où $a_{ij}=a_{i1}a_{1j}/a_{11}$. Réciproquement, si ces relations ont lieu pour $i,j\ge2$, elles ont aussi lieu trivialement si $i=1$ ou $j=1$, donc $A=\frac1{a_{11}}\,c\,{}^tr$ où $c$ est la première colonne et ${}^tr$ la première ligne ; $c\ne0$, $r\ne0$, donc $A\in R_1$ par la question 1.

**Sous-variété.** Posons $m=2n-1$, $N=n^2$ (donc $N-m=(n-1)^2$), $U=\R^\times\times\R^{2n-2}$, ouvert de $\R^m$, dont on note les points $w=(a_{11},(a_{1j})_{j\ge2},(a_{i1})_{i\ge2})$, et
$$
g:U\to\R^{(n-1)^2},\qquad g(w)=\Big(\frac{a_{i1}a_{1j}}{a_{11}}\Big)_{i,j\ge2},
$$
de classe $C^\infty$ (fraction rationnelle à dénominateur non nul). Soit $P:\R^m\times\R^{(n-1)^2}\to\mathrm M_n(\R)$ l'isomorphisme linéaire qui range les coordonnées à leur place dans la matrice. La question 2 dit exactement
$$
\Omega\cap R_1=\Omega\cap\{P(w,g(w))\;;\;w\in U\}
$$
(en fait $\{P(w,g(w))\}\subset\Omega$). Soit maintenant $A_0\in R_1$ quelconque : un coefficient $(A_0)_{kl}$ est non nul. Soit $\tau$ l'isomorphisme linéaire $A\mapsto\Sigma_kA\Sigma_l$ de $\mathrm M_n(\R)$, où $\Sigma_k$ est la matrice de la transposition des indices $1$ et $k$ (donc $\tau$ échange les lignes $1,k$ et les colonnes $1,l$, et $\tau^{-1}=\tau$). $\tau$ préserve le rang et envoie l'ouvert $V_{kl}=\{a_{kl}\ne0\}\ni A_0$ sur $\Omega$, donc
$$
V_{kl}\cap R_1=\tau(\Omega\cap R_1)=V_{kl}\cap\{(\tau\circ P)(w,g(w))\;;\;w\in U\}.
$$
Les hypothèses de la Proposition IX.5.2 ([[ch09-localement-graphe-implique-sous-variete]]) sont réunies en tout point de $R_1$ (voisinage ouvert $V_{kl}$, isomorphisme linéaire $\tau\circ P$, ouvert $U$ de $\R^m$, application $g$ de classe $C^\infty$) : $R_1$ est une sous-variété $C^\infty$ de dimension $2n-1$ de $\mathrm M_n(\R)$.

**3.** Soient $h,k\in\R^n$. Pour $|t|$ assez petit, $u+th\ne0$ et $v+tk\ne0$, donc $\alpha(t)=(u+th)\,{}^t(v+tk)\in R_1$ (question 1). La courbe $\alpha$ est polynomiale, $\alpha(0)=A$ et $\alpha'(0)=h\,{}^tv+u\,{}^tk$ : c'est un vecteur tangent ([[ch09-vecteur-tangent-espace-tangent-def]]). Donc $E:=\{h\,{}^tv+u\,{}^tk\}\subset T_AR_1$. $E$ est l'image de l'application linéaire $L:(h,k)\mapsto h\,{}^tv+u\,{}^tk$ de $\R^{2n}$. Si $L(h,k)=0$, en appliquant à $v$ : $\norm v^2h+({}^tk\,v)\,u=0$, donc $h=\lambda u$ avec $\lambda=-{}^tk\,v/\norm v^2$, puis $u\,{}^t(\lambda v+k)=0$, d'où $k=-\lambda v$ (car $u\ne0$). Réciproquement $L(\lambda u,-\lambda v)=0$. Donc $\ker L=\R(u,-v)$ est de dimension $1$ et $\dim E=2n-1$. Comme $\dim T_AR_1=2n-1$ (Proposition IX.7.9, [[ch09-espace-tangent-image-dx]]), $E=T_AR_1$.

**4. Non.** Supposons que $R_{\le1}$ soit une sous-variété. Par la Proposition IX.7.9, l'ensemble $T_0R_{\le1}$ des vecteurs tangents en $0$ (au sens des courbes) serait un **sous-espace vectoriel**.

* Les matrices élémentaires $E_{11}$, $E_{22}$ sont tangentes en $0$ : $t\mapsto tE_{11}$ est tracée dans $R_{\le1}$.
* Tout vecteur tangent en $0$ est de rang $\le1$ : si $\alpha$ est $C^1$, tracée dans $R_{\le1}$, avec $\alpha(0)=0$, alors $\alpha'(0)=\lim_{t\to0}\alpha(t)/t$ ; or $\alpha(t)/t\in R_{\le1}$ ($R_{\le1}$ est stable par homothétie) et $R_{\le1}$ est **fermé** (c'est l'ensemble où s'annulent tous les mineurs $2\times2$, fonctions continues), donc $\alpha'(0)\in R_{\le1}$.

Mais $E_{11}+E_{22}$ est de rang $2$ : $T_0R_{\le1}$ n'est pas stable par addition, contradiction. $R_{\le1}$ (le « cône » des matrices de rang $\le1$) n'est pas une sous-variété.

**5a.** Prolongeons $f$ en $\tilde f(A)=\norm{A-B}^2$ sur $R_{\le1}$. On a $\tilde f(0)=\norm B^2$, et si $\norm A>2\norm B$, $\tilde f(A)\ge(\norm A-\norm B)^2>\norm B^2$. Donc $\inf_{R_{\le1}}\tilde f=\inf_{K}\tilde f$ avec $K=R_{\le1}\cap\bar B(0,2\norm B)$, compact (fermé borné de $\mathrm M_n(\R)$, de dimension finie) non vide ; $\tilde f$ continue y atteint son minimum en un $A_0$. De plus $A_0\ne0$ : $B\ne0$ a un coefficient $b_{kl}\ne0$, et $C=b_{kl}E_{kl}\in R_1$ vérifie $\tilde f(C)=\norm B^2-b_{kl}^2<\tilde f(0)$. Donc $A_0\in R_1$ et $f(A_0)=\min_{R_{\le1}}\tilde f\le\inf_{R_1}f$ : $f$ atteint sa borne inférieure en $A_0$.

**5b.** $f$ est la restriction à $R_1$ de la fonction $C^\infty$ $A\mapsto\norm{A-B}^2$ de $\mathrm M_n(\R)\simeq\R^{n^2}$ ; sa différentielle est $df_A(H)=2\langle A-B,H\rangle$ pour $H\in T_AR_1$ ([[ch09-ex-distance-carre]], avec $p_0=B$). Si $A=u\,{}^tv$ est critique, $C:=B-A$ est orthogonale à $T_AR_1$. Or, avec la question 3,
$$
\langle C,h\,{}^tv\rangle=\mathrm{tr}({}^tC\,h\,{}^tv)={}^tv\,{}^tC\,h={}^t(Cv)\,h,\qquad \langle C,u\,{}^tk\rangle=\mathrm{tr}({}^tC\,u\,{}^tk)={}^tk\,{}^tCu .
$$
La nullité pour tous $h,k$ donne $Cv=0$ et ${}^tCu=0$, i.e. $Bv=Av=u\,({}^tv\,v)=\norm v^2u$ et ${}^tBu={}^tAu=v\,({}^tu\,u)=\norm u^2v$. Alors
$$
{}^tBBv=\norm v^2\,{}^tBu=\norm u^2\norm v^2\,v=\sigma^2v,\qquad v\ne0,
$$
donc $\sigma^2$ est valeur propre de ${}^tBB$. Enfin $\langle B,A\rangle={}^tu\,Bv=\norm v^2\norm u^2=\sigma^2$ et $\norm A^2=\sigma^2$ (question 1), d'où
$$
f(A)=\norm B^2-2\langle B,A\rangle+\norm A^2=\norm B^2-\sigma^2 .
$$

**5c.** Soit $A_0$ un point de minimum de $f$ (question 5a). C'est un extremum local de la fonction différentiable $f$ sur la sous-variété $R_1$, donc un point critique ([[ch09-extremum-local-differentielle-nulle]]). Par 5b, $\min f=f(A_0)=\norm B^2-\sigma^2$ avec $\sigma^2$ valeur propre de ${}^tBB$, donc $\min f\ge\norm B^2-\lambda_{\max}$.

Inversement, ${}^tBB$ est symétrique positive de trace $\norm B^2>0$, donc $\lambda_{\max}>0$. Soit $w$ un vecteur propre unitaire associé et $A_*=Bw\,{}^tw$. Comme $\norm{Bw}^2={}^tw\,{}^tBBw=\lambda_{\max}>0$, $Bw\ne0$ et $A_*\in R_1$. Puis $\langle B,A_*\rangle=\mathrm{tr}({}^tB\,Bw\,{}^tw)={}^tw\,{}^tBBw=\lambda_{\max}$ et $\norm{A_*}^2=\norm{Bw}^2\norm w^2=\lambda_{\max}$, donc
$$
f(A_*)=\norm B^2-2\lambda_{\max}+\lambda_{\max}=\norm B^2-\lambda_{\max}.
$$
Conclusion : $\displaystyle\min_{R_1}\norm{A-B}^2=\norm B^2-\lambda_{\max}({}^tBB)$, atteint en $A_*=Bw\,{}^tw$. (Vérifié numériquement sur des matrices aléatoires $2\times2$, $3\times3$, $4\times4$ par minimisation directe en $(u,v)$.)

## Pièges et variantes

* **Ne pas appliquer la condition « $df=0$ » sur $R_{\le1}$** : ce n'est pas une sous-variété (question 4). C'est pourquoi on cherche l'existence sur le fermé $R_{\le1}$, puis on vérifie que le minimum tombe dans la partie lisse $R_1$.
* $R_1$ **n'est pas fermée** (son adhérence contient $0$) : la compacité ne s'applique pas directement à $f$ sur $R_1$ ([[ch09-remarque-fermeture]]).
* Le paramétrage $(u,v)\mapsto u\,{}^tv$ de $(\R^n\setminus\{0\})^2$ dans $R_1$ **n'est pas une immersion** (son noyau contient $(u,-v)$) ni injectif ($(\lambda u,v/\lambda)$ a même image) : il ne fournit pas directement un paramétrage local, d'où le passage par les graphes.
* Un point critique de $f$ n'est pas forcément le minimum : tout vecteur propre de ${}^tBB$ de valeur propre non nulle fournit un point critique ($\sigma$ est une **valeur singulière** de $B$) ; seule la plus grande donne le minimum.
* Variante : matrices de rang exactement $r$ dans $\mathrm M_{p,q}(\R)$ : sous-variété de dimension $r(p+q-r)$ (même méthode avec un mineur $r\times r$ inversible et le complément de Schur).
