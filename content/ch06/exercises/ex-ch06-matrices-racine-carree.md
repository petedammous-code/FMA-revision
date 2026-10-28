---
id: ex-ch06-matrices-racine-carree
type: exercise
chapters: [6, 5]
title: Racine carrée d'une matrice proche de l'identité
source: "Classique (racine carrée locale de matrices par inversion locale, exercice standard des recueils de calcul différentiel, p. ex. Rouvière, *Petit guide de calcul différentiel*) ; questions 3 à 5 rédigées pour ce site"
difficulty: 2
time: 25
tools: [ch06-inversion-locale, ch06-diffeomorphisme-def, ch05-differentielle-bilineaire, ch05-composition-differentielles, ch05-lineaire-c-infini]
---
## Énoncé

Soit $n\ge2$. On munit $\Mat_n(\R)$ de la norme d'opérateur associée à la norme euclidienne de $\R^n$, qui vérifie $\norm{XY}\le\norm X\norm Y$ et $\norm{{}^tX}=\norm X$. On considère
$$
S:\Mat_n(\R)\to\Mat_n(\R),\qquad S(X)=X^2 .
$$

1. Montrer que $S$ est de classe $C^\infty$ et calculer $dS_X(H)$ pour $X,H\in\Mat_n(\R)$.
2. Montrer qu'il existe des voisinages ouverts $U_0$ et $V_0$ de $I_n$ dans $\Mat_n(\R)$ tels que $S$ induise un $C^\infty$-difféomorphisme de $U_0$ sur $V_0$. On note $R:V_0\to U_0$ sa réciproque (« racine carrée »). Calculer $dR_{I_n}$ et en déduire que $R(I_n+H)=I_n+\frac12H+o(H)$.
3. Montrer qu'on peut choisir $U_0$ et $V_0$ stables par transposition, et qu'alors $R(A)$ est symétrique dès que $A\in V_0$ est symétrique. Montrer aussi que $R(A)$ commute avec $A$.
4. Soit $N\in\Mat_n(\R)$ telle que $N^2=0$. Montrer que $R(I_n+tN)=I_n+\frac t2N$ pour $|t|$ assez petit.
5. On prend $n=2$ et $J=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Calculer le noyau de $dS_J$. Montrer que $S$ n'est injective sur aucun voisinage de $J$.

## Indices

### Indice 1
$S$ est la composée de $X\mapsto(X,X)$ et d'une application bilinéaire continue. Pour la question 2, un théorème transforme « différentielle inversible en un point » en « difféomorphisme local ».

### Indice 2
$dS_X(H)=XH+HX$, donc $dS_{I_n}=2\,\id$ : c'est un isomorphisme (bicontinu, on est en dimension finie). Inversion locale en $X_0=I_n$, puis $dR_{I_n}=(dS_{I_n})^{-1}$ par la règle de la chaîne appliquée à $S\circ R=\id_{V_0}$.

### Indice 3
3 : remplacer $U_0$ par une boule $B(I_n,\rho)\subset U_0$, puis utiliser l'injectivité de $S$ sur cette boule en comparant ${}^tR(A)$ et $R(A)$ ; pour la commutation, $A=R(A)^2$. 4 : vérifier que $I_n+\frac t2N$ est dans $U_0$ et a le bon carré. 5 : écrire $H=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ ; chercher une famille de matrices $X_\theta$ avec $X_\theta^2=I_2$ et $X_0=J$.

## Corrigé

**1.** L'application $m:\Mat_n(\R)\times\Mat_n(\R)\to\Mat_n(\R)$, $m(X,Y)=XY$, est bilinéaire et continue ($\norm{XY}\le\norm X\norm Y$), donc différentiable avec $dm_{(X,Y)}(H,K)=HY+XK$ ([[ch05-differentielle-bilineaire]]) ; sa différentielle $(X,Y)\mapsto dm_{(X,Y)}$ est linéaire continue, donc $m$ est de classe $C^\infty$ ([[ch05-lineaire-c-infini]]). L'application $\delta:X\mapsto(X,X)$ est linéaire continue, donc $C^\infty$. Ainsi $S=m\circ\delta$ est de classe $C^\infty$ et, par la règle de la chaîne ([[ch05-composition-differentielles]]),
$$
dS_X(H)=dm_{(X,X)}(H,H)=XH+HX .
$$
(Directement : $(X+H)^2=X^2+XH+HX+H^2$ et $\norm{H^2}\le\norm H^2=o(\norm H)$.) Attention, $XH+HX\ne2XH$ en général : le produit n'est pas commutatif.

**2.** En $X_0=I_n$ : $dS_{I_n}(H)=2H$, donc $dS_{I_n}=2\,\id$ est une bijection linéaire de $\Mat_n(\R)$, d'inverse $\frac12\id$ ; en dimension finie elle est bicontinue. Comme $S$ est de classe $C^\infty$ sur l'ouvert $\Mat_n(\R)$ de l'espace de Banach réel $\Mat_n(\R)\simeq\R^{n^2}$, le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit des voisinages ouverts $U_0$ de $I_n$ et $V_0$ de $S(I_n)=I_n$ tels que $S|_{U_0}:U_0\to V_0$ soit un $C^\infty$-difféomorphisme ([[ch06-diffeomorphisme-def]]).

Notons $R=(S|_{U_0})^{-1}$. De $S\circ R=\id_{V_0}$ et $R(I_n)=I_n$, la règle de la chaîne donne $dS_{I_n}\circ dR_{I_n}=\id$, donc
$$
dR_{I_n}=(dS_{I_n})^{-1}=\tfrac12\,\id,\qquad R(I_n+H)=R(I_n)+dR_{I_n}(H)+o(H)=I_n+\tfrac12H+o(H).
$$
C'est l'analogue matriciel de $\sqrt{1+h}=1+\frac h2+o(h)$.

**3.** *Choix stable par transposition.* $U_0$ est un ouvert contenant $I_n$ : il contient une boule $U_1=B(I_n,\rho)$. Comme ${}^tI_n=I_n$ et $\norm{{}^tX-I_n}=\norm{{}^t(X-I_n)}=\norm{X-I_n}$, $U_1$ est stable par transposition. Posons $V_1=S(U_1)$ : c'est l'image de l'ouvert $U_1$ par l'homéomorphisme $S|_{U_0}:U_0\to V_0$, donc un ouvert contenant $I_n$, et $S|_{U_1}:U_1\to V_1$ est encore un $C^\infty$-difféomorphisme, de réciproque $R|_{V_1}$. Si $A=X^2\in V_1$ avec $X\in U_1$, alors ${}^tA=({}^tX)^2$ avec ${}^tX\in U_1$, donc ${}^tA\in V_1$ : $V_1$ est stable par transposition. On remplace désormais $(U_0,V_0)$ par $(U_1,V_1)$.

*Symétrie.* Soit $A\in V_0$ symétrique et $X=R(A)\in U_0$. Alors ${}^tX\in U_0$ et $S({}^tX)=({}^tX)^2={}^t(X^2)={}^tA=A=S(X)$. Comme $S$ est injective sur $U_0$, ${}^tX=X$ : $R(A)$ est symétrique.

*Commutation.* $A=R(A)^2$, donc $R(A)A=R(A)^3=AR(A)$.

**4.** Posons $X_t=I_n+\frac t2N$. Alors $X_t^2=I_n+tN+\frac{t^2}4N^2=I_n+tN$. Pour $|t|$ assez petit, $X_t\in U_0$ (car $\norm{X_t-I_n}=\frac{|t|}2\norm N\to0$) et $I_n+tN\in V_0$ (ouvert contenant $I_n$). Alors $X_t$ et $R(I_n+tN)$ sont deux éléments de $U_0$ de même carré : par injectivité de $S$ sur $U_0$, $R(I_n+tN)=I_n+\frac t2N$. (Ici le reste $o(H)$ de la question 2 est exactement nul.)

**5.** Pour $H=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ :
$$
JH=\begin{pmatrix}a&b\\-c&-d\end{pmatrix},\qquad HJ=\begin{pmatrix}a&-b\\c&-d\end{pmatrix},\qquad dS_J(H)=JH+HJ=\begin{pmatrix}2a&0\\0&-2d\end{pmatrix}.
$$
Donc $\ker dS_J=\Big\{\begin{pmatrix}0&b\\c&0\end{pmatrix} : b,c\in\R\Big\}$, de dimension $2$ : $dS_J$ n'est pas inversible et le théorème d'inversion locale ne s'applique pas en $J$.

Ce n'est pas seulement le théorème qui se tait : pour $\theta\in\R$, posons $X_\theta=\begin{pmatrix}\cos\theta&\sin\theta\\\sin\theta&-\cos\theta\end{pmatrix}$ (symétrie orthogonale par rapport à une droite). Alors
$$
X_\theta^2=\begin{pmatrix}\cos^2\theta+\sin^2\theta&\cos\theta\sin\theta-\sin\theta\cos\theta\\\sin\theta\cos\theta-\cos\theta\sin\theta&\sin^2\theta+\cos^2\theta\end{pmatrix}=I_2 ,
$$
$X_0=J$ et $\norm{X_\theta-J}\to0$ quand $\theta\to0$ ($\theta\mapsto X_\theta$ est continue). Tout voisinage $W$ de $J$ contient donc $X_\theta$ pour un $\theta\in\,]0,\pi[$ petit, avec $X_\theta\ne J$ et $S(X_\theta)=I_2=S(J)$ : $S$ n'est injective sur aucun voisinage de $J$. On remarque que $\frac{d}{d\theta}X_\theta\big|_{\theta=0}=\begin{pmatrix}0&1\\1&0\end{pmatrix}\in\ker dS_J$, comme il se doit (dériver $S(X_\theta)=I_2$).

## Pièges et variantes

* Écrire $dS_X(H)=2XH$ : faux dès que $X$ et $H$ ne commutent pas ; en $X=I_n$ la formule devient juste par chance.
* L'inversion locale donne **une** racine carrée près de $I_n$, pas **la** racine carrée : $I_2$ a une infinité de racines carrées ($\pm I_2$ et toutes les $X_\theta$). L'unicité n'a lieu que dans $U_0$ ; c'est pour cela qu'à la question 3 on compare deux éléments **de $U_0$**.
* Ne pas confondre « $S$ n'est pas un difféomorphisme local en $J$ » (question 5) avec « $I_2$ n'a pas de racine carrée » : $J$ en est une. Le défaut d'inversibilité de $dS_J$ se manifeste par la non-injectivité locale.
* Variante (plus difficile) : $dS_X$ est inversible si et seulement si $X$ et $-X$ n'ont aucune valeur propre complexe commune (équation de Sylvester $XH+HX=K$). Ainsi $S$ est un difféomorphisme local au voisinage de toute matrice à valeurs propres de partie réelle $>0$.
* Variante : remplacer $X^2$ par $X^k$ ; $dS_{I_n}=k\,\id$, et $R(I_n+H)=I_n+\frac1kH+o(H)$.
