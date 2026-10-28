---
id: ex-mix-c-maximum-boule-c2-lagrange
type: exercise
chapters: [1, 9, 5]
title: "Maximum du module d'un polynôme sur la boule unité de C²"
source: "Inventé"
difficulty: 2
time: 30
tools: [ch01-maximum-sur-le-bord, ch09-ex-sphere, ch09-multiplicateurs-lagrange, ch09-extremum-local-differentielle-nulle, ch01-formulaire-dz-dzbar, ch05-gradient-hilbert]
---
## Énoncé

On identifie $\C^2$ à $\R^4$, muni du produit scalaire réel $\langle p,q\rangle=\Re(p_1\bar q_1+p_2\bar q_2)$ et de la norme associée $\|p\|^2=|p_1|^2+|p_2|^2$. On note $\bar B=\{p\in\C^2:\|p\|\le1\}$ et $S^3=\{p\in\C^2:\|p\|=1\}$. Soit $F(z,w)$ un polynôme non constant à coefficients complexes en deux variables, et $M=\max_{\bar B}|F|$.

1. Justifier l'existence de $M$ et montrer que $M$ est atteint en un point de $S^3$.
2. On pose $u=|F|^2:\R^4\to\R$. Montrer que le gradient de $u$ en $p=(z,w)$ s'écrit
$$
\nabla u(p)=2\,F(p)\,\Big(\overline{\partial_zF(p)},\ \overline{\partial_wF(p)}\Big)\in\C^2 ,
$$
où $\partial_zF$, $\partial_wF$ sont les dérivées (complexes) de $F$ par rapport à chacune des variables, l'autre étant fixée.
3. Soit $p\in S^3$ un point critique de $u_{|S^3}$ tel que $F(p)\neq0$. Montrer qu'il existe $\lambda\in\R$ tel que $\partial_zF(p)=\lambda\,\bar z/\overline{F(p)}$ et $\partial_wF(p)=\lambda\,\bar w/\overline{F(p)}$, où $p=(z,w)$. Si de plus $F$ est homogène de degré $d$, montrer que $\lambda=d\,|F(p)|^2$.
4. On prend $F(z,w)=z^2+4zw$. Montrer que tout point $p\in S^3$ où $|F|$ atteint son maximum sur $S^3$ vérifie $A p=F(p)\,\bar p$, où $A=\begin{pmatrix}1&2\\2&0\end{pmatrix}$ et $p$ est vu comme un vecteur colonne. En déduire $M$.
5. Déterminer l'ensemble des points de $\bar B$ où $|F|$ atteint $M$. Est-ce une sous-variété de $\R^4$ ?

## Indices

### Indice 1
Question 1 : compacité, puis restreindre $F$ à une droite complexe $\zeta\mapsto F(p_0+\zeta e)$ passant par un point de maximum. Questions 2-3 : $u=F\bar F$ et $\partial_x+i\partial_y=2\partial/\partial\bar z$ dans chaque variable ; puis multiplicateurs de Lagrange sur la sphère.

### Indice 2
$S^3=g^{-1}(\{1\})$ avec $g(p)=\|p\|^2$, $\nabla g(p)=2p$. Lagrange donne $\nabla u(p)=2\lambda p$ avec $\lambda$ réel. Pour un polynôme homogène, la relation d'Euler $z\,\partial_zF+w\,\partial_wF=dF$ fixe $\lambda$.

### Indice 3
Question 4 : de $Ap=F(p)\bar p$ et $A$ réelle, conjuguer : $A\bar p=\overline{F(p)}\,p$, puis $A^2p=|F(p)|^2p$. Donc $|F(p)|^2$ est valeur propre de $A^2$. Valeurs propres de $A$ : racines de $\lambda^2-\lambda-4$.

## Corrigé

**1.** $\bar B$ est un fermé borné de $\R^4$, donc compact, et $|F|$ est continue : $M$ existe et est atteint en un point $p_0\in\bar B$. Si $\|p_0\|=1$, c'est fini. Sinon $\|p_0\|<1$ ; fixons un vecteur $e\in\C^2$ de norme $1$ et posons
$$
\Omega=\{\zeta\in\C:\|p_0+\zeta e\|<1\},\qquad \varphi(\zeta)=F(p_0+\zeta e).
$$
Comme $\|p_0+\zeta e\|^2=|\zeta|^2+2\Re\big(\zeta\,\langle e,p_0\rangle_{\C}\big)+\|p_0\|^2$ (avec $\langle e,p_0\rangle_{\C}=e_1\bar p_{0,1}+e_2\bar p_{0,2}$), on a $\|p_0+\zeta e\|^2=|\zeta+\overline{\langle e,p_0\rangle_\C}|^2+\|p_0\|^2-|\langle e,p_0\rangle_\C|^2$ : $\Omega$ est un disque ouvert, non vide (il contient $0$), donc connexe et borné, d'adhérence $\bar\Omega=\{\|p_0+\zeta e\|\le1\}$ et de bord $\partial\Omega=\{\zeta:\|p_0+\zeta e\|=1\}$. La fonction $\varphi$ est un polynôme en $\zeta$, donc holomorphe sur $\C$ et continue sur $\bar\Omega$. Par [[ch01-maximum-sur-le-bord]],
$$
M=|\varphi(0)|\le\sup_{\bar\Omega}|\varphi|=\sup_{\partial\Omega}|\varphi|\le M,
$$
et le sup sur le compact $\partial\Omega$ est atteint en un $\zeta_1$ : $p_1=p_0+\zeta_1e\in S^3$ et $|F(p_1)|=M$.

**2.** $u=F\bar F$ est polynomiale en les quatre variables réelles, donc $C^\infty$. Fixons $w$ ; la fonction $z\mapsto F(z,w)$ est un polynôme en $z$, holomorphe, et comme en une variable ([[ch01-formulaire-dz-dzbar]]) :
$$
\frac{\partial u}{\partial\bar z}=\frac{\partial F}{\partial\bar z}\bar F+F\,\frac{\partial\bar F}{\partial\bar z}=0+F\,\overline{\partial_zF},\qquad\text{donc}\qquad \partial_{x_1}u+i\,\partial_{y_1}u=2\frac{\partial u}{\partial\bar z}=2F\,\overline{\partial_zF},
$$
avec $z=x_1+iy_1$ ; de même $\partial_{x_2}u+i\,\partial_{y_2}u=2F\,\overline{\partial_wF}$ ($w=x_2+iy_2$). Pour $h=(h_1,h_2)\in\C^2$, notons $G=(G_1,G_2)$ le vecteur de droite de l'énoncé ; alors
$$
du_p(h)=\sum_{j}\big(\partial_{x_j}u\,\Re h_j+\partial_{y_j}u\,\Im h_j\big)=\Re\big(h_1\bar G_1+h_2\bar G_2\big)=\langle h,G\rangle ,
$$
ce qui signifie exactement $\nabla u(p)=G$ ([[ch05-gradient-hilbert]]).

**3.** $S^3=g^{-1}(\{1\})$ où $g(p)=\|p\|^2$ est $C^\infty$ sur l'ouvert $\R^4\setminus\{0\}$, avec $dg_p(h)=2\langle p,h\rangle$, surjective pour $p\neq0$ : $S^3$ est une sous-variété de dimension $3$ ([[ch09-ex-sphere]]). Par les multiplicateurs de Lagrange ([[ch09-multiplicateurs-lagrange]], avec la contrainte $g-1$), $p\in S^3$ est critique pour $u_{|S^3}$ si et seulement s'il existe $\lambda\in\R$ tel que $du_p=\lambda\,dg_p$, soit $\nabla u(p)=2\lambda p$ :
$$
2F(p)\overline{\partial_zF(p)}=2\lambda z,\qquad 2F(p)\overline{\partial_wF(p)}=2\lambda w .
$$
Si $F(p)\neq0$, on divise et on conjugue ($\lambda$ réel) : $\partial_zF(p)=\lambda\bar z/\overline{F(p)}$ et $\partial_wF(p)=\lambda\bar w/\overline{F(p)}$.

*Cas homogène.* Si $F$ est homogène de degré $d$, $F(tp)=t^dF(p)$ pour $t\in\C$ ; en dérivant en $t=1$ (dérivée complexe d'une fonction composée polynomiale) on obtient la relation d'Euler $z\,\partial_zF+w\,\partial_wF=d\,F$. Au point $p$ :
$$
d\,F(p)=\frac{\lambda\,(z\bar z+w\bar w)}{\overline{F(p)}}=\frac{\lambda}{\overline{F(p)}}\quad(\|p\|=1),\qquad\text{donc}\qquad\lambda=d\,|F(p)|^2 .
$$
Ainsi, en un tel point critique, $\big(\partial_zF(p),\partial_wF(p)\big)=d\,F(p)\,(\bar z,\bar w)$.

**4.** Ici $F$ est homogène de degré $d=2$, $\partial_zF=2z+4w$, $\partial_wF=4z$, et $F(p)=p^{T}Ap$. Soit $p\in S^3$ un point de maximum de $|F|$ sur $S^3$ (il en existe, $S^3$ étant compact). Comme $F(1,0)=1$, ce maximum est $\ge1>0$, donc $F(p)\neq0$ ; $p$ est un maximum de $u_{|S^3}$, donc un point critique ([[ch09-extremum-local-differentielle-nulle]]). D'après 3 :
$$
2z+4w=2F(p)\bar z,\quad 4z=2F(p)\bar w\qquad\Longleftrightarrow\qquad Ap=F(p)\,\bar p .
$$
Posons $\mu=F(p)$. $A$ étant réelle, en conjuguant : $A\bar p=\bar\mu\,p$. D'où $A^2p=A(\mu\bar p)=\mu A\bar p=|\mu|^2p$ : $p\neq0$ est vecteur propre de $A^2$ pour la valeur propre $|\mu|^2$. Les valeurs propres de $A$ (symétrique réelle) sont les racines de $\lambda^2-\lambda-4=0$,
$$
\lambda_1=\frac{1+\sqrt{17}}2\approx2{,}5616,\qquad\lambda_2=\frac{1-\sqrt{17}}2\approx-1{,}5616,
$$
et celles de $A^2$ sont $\lambda_1^2$ et $\lambda_2^2$. Donc $|F(p)|\in\{|\lambda_1|,|\lambda_2|\}$, et $\max_{S^3}|F|\le\lambda_1$. Réciproquement, $v=(\lambda_1,2)/\sqrt{\lambda_1^2+4}$ est un vecteur propre réel unitaire de $A$ pour $\lambda_1$ (car $A(\lambda_1,2)^T=(\lambda_1+4,2\lambda_1)^T=\lambda_1(\lambda_1,2)^T$ puisque $\lambda_1^2=\lambda_1+4$), et $F(v)=v^TAv=\lambda_1\|v\|^2=\lambda_1$. Avec la question 1 :
$$
M=\max_{\bar B}|F|=\max_{S^3}|F|=\frac{1+\sqrt{17}}2 .
$$
(Vérification numérique : un échantillon de $2\cdot10^6$ points aléatoires de $S^3$ donne $\max|F|\approx2{,}56155$.)

**5.** *Sur $S^3$.* Si $p\in S^3$ réalise le maximum, alors $A^2p=\lambda_1^2p$. Comme $\lambda_1^2\neq\lambda_2^2$, le sous-espace propre de $A^2$ (sur $\C^2$) pour $\lambda_1^2$ est celui de $A$ pour $\lambda_1$, la droite complexe $\C v$. Donc $p=\zeta v$ avec $|\zeta|=\|p\|=1$, $\zeta=e^{i\theta}$. Réciproquement $F(e^{i\theta}v)=e^{2i\theta}F(v)$ a pour module $\lambda_1$.

*Dans la boule ouverte.* Si $\|p\|=r<1$ et $p\neq0$, $|F(p)|=r^2|F(p/r)|\le r^2\lambda_1<M$ (homogénéité), et $F(0)=0$. Aucun point intérieur ne réalise le maximum (ce qui est cohérent avec la question 1 : c'est ici l'homogénéité qui tranche, pas seulement le principe du maximum, qui dit seulement que le maximum est **aussi** atteint au bord).

L'ensemble cherché est donc le cercle
$$
\mathcal M=\{e^{i\theta}v:\theta\in\R\},\qquad v=\frac{(\lambda_1,2)}{\sqrt{\lambda_1^2+4}} ,
$$
image de l'immersion injective $\theta\mapsto e^{i\theta}v$ de $\R/2\pi\Z$ : c'est l'intersection de $S^3$ avec le plan réel $\mathrm{Vect}_\R(v,iv)$, donc un cercle euclidien de rayon $1$ de ce plan. C'est une sous-variété de dimension $1$ de $\R^4$ : le cercle $\{(\cos\theta,\sin\theta,0,0)\}$ est une sous-variété de $\R^4$ (produit du cercle $S^1\subset\R^2$, [[ch09-ex-sphere]], et du point $\{(0,0)\}$, [[ch09-ex-produit]]), et l'isomorphisme linéaire de $\R^4$ qui envoie les deux premiers vecteurs de la base canonique sur $v$ et $iv$ (orthonormés : $\langle v,iv\rangle=\Re(-i\|v\|^2)=0$) et les deux autres sur une base orthonormée de l'orthogonal le transforme en $\mathcal M$ ([[ch09-ex-image-diffeomorphisme]]).

## Pièges et variantes

* **Lagrange ne donne qu'une condition nécessaire** : il faut l'existence du maximum (compacité) pour conclure, et trier ensuite les points critiques (ici ceux avec $|F|=|\lambda_2|$ ne sont pas des maxima, et ceux où $F=0$ sont des minima).
* **Gradient réel et dérivées complexes** : $\nabla u$ n'est pas $2F\,\partial F$ mais $2F\,\overline{\partial F}$ ; la conjugaison vient de $\partial\bar F/\partial\bar z=\overline{\partial F/\partial z}$.
* **Multiplicateur réel** : la sphère est de codimension réelle $1$, le multiplicateur $\lambda$ est réel ; le multiplicateur complexe $\lambda/\overline{F(p)}$ ne l'est pas.
* L'invariance $|F(e^{i\theta}p)|=|F(p)|$ force les points critiques à former des cercles : un maximum strict isolé sur $S^3$ est impossible pour un polynôme homogène.
* Variante : pour une forme quadratique $F(p)=p^TAp$ avec $A$ symétrique **complexe**, le même calcul donne $A\bar A\,p=|F(p)|^2p$ et $\max_{S^3}|F|$ est la plus grande valeur singulière de $A$.
* Variante : pour $1+F$ (non homogène), $|1+F|\le1+|F|\le1+\lambda_1$ sur $\bar B$, avec égalité en $v$ (où $F(v)=\lambda_1>0$) : le maximum vaut $1+\lambda_1$ et il est atteint exactement aux deux points $\pm v$ (si $1+F(p)$ a pour module $1+\lambda_1$, on a $|F(p)|=\lambda_1$, donc $p=e^{i\theta}v$, et $|1+e^{2i\theta}\lambda_1|=1+\lambda_1$ force $e^{2i\theta}=1$, donc $p=\pm v$, et réciproquement $F(\pm v)=\lambda_1$).
