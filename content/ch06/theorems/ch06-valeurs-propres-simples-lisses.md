---
id: ch06-valeurs-propres-simples-lisses
type: proposition
chapter: 6
title: Dépendance $C^\infty$ des valeurs propres simples et des vecteurs propres
ref: Exercice VI.4.7
page: 124
importance: 2
depends: [ch06-fonctions-implicites, ch06-inversion-locale, ch05-inversion-c-infini]
tags: [valeurs propres, vecteurs propres, perturbation, fonctions implicites, polynôme caractéristique, racine simple]
---
## Intuition

> 💡 Si l'on bouge « un peu » les coefficients d'une matrice, ses valeurs propres bougent « un peu ». La question est : bougent-elles **régulièrement** (de façon $C^\infty$) ? Réponse : oui, tant que les valeurs propres sont **simples** (deux à deux distinctes). Une racine simple d'un polynôme est un point où le graphe de $\lambda\mapsto\chi_A(\lambda)$ coupe l'axe **transversalement** (pente non nulle) : une petite perturbation du polynôme déplace ce point de croisement de façon lisse. C'est exactement la situation du [[ch06-fonctions-implicites|théorème des fonctions implicites]].

En revanche, quand deux valeurs propres se rencontrent (racine double, pente nulle), elles peuvent « exploser » en $\pm\sqrt t$ ou même quitter l'axe réel : la régularité est perdue.

Vocabulaire : pour $A\in\Mat_n(\R)$ (matrices carrées réelles de taille $n$), le **polynôme caractéristique** est $\chi_A(\lambda)=\det(\lambda I-A)$ ; ses racines réelles sont les **valeurs propres** réelles de $A$. Un **vecteur propre** pour $\lambda$ est un $v\ne0$ tel que $Av=\lambda v$. « $C^\infty$ sur $U$ » : on identifie $\Mat_n(\R)$ à $\R^{n^2}$ (c'est un espace vectoriel normé de dimension finie) et l'on parle de régularité par rapport aux $n^2$ coefficients.

## Énoncé

**Proposition (poly, Exercice VI.4.7, p. 124).** Soit $A_0\in\Mat_n(\R)$ une matrice admettant $n$ valeurs propres (réelles) distinctes $\lambda_1(0),\lambda_2(0),\dots,\lambda_n(0)$.

1. Il existe un voisinage $U$ de $A_0$ dans $\Mat_n(\R)$ et des fonctions $\lambda_i:U\to\R$, $i=1,\dots,n$, de classe $C^\infty$, telles que pour tout $A\in U$, $\lambda_1(A),\lambda_2(A),\dots,\lambda_n(A)$ soient les valeurs propres de $A$ et restent distinctes.
2. On fixe $i$. Soit $v_i(0)$ un vecteur propre de $A_0$ pour la valeur propre $\lambda_i(0)$. Quitte à restreindre le voisinage $U$ de $A_0$ de la question précédente, il existe une fonction $v_i$ définie sur $U$ à valeurs dans $\R^n$, de classe $C^\infty$, telle que $v_i(A)$ soit un vecteur propre non nul de $A$ pour la valeur propre $\lambda_i(A)$.

(Le poly l'énonce comme exercice ; la précision « réelles » est implicite puisque les $\lambda_i$ sont à valeurs dans $\R$. La construction de la preuve donne de plus $\lambda_i(A_0)=\lambda_i(0)$ et $v_i(A_0)=v_i(0)$, ce que l'énoncé ne demande pas.)

## Hypothèses

### H1 — Les valeurs propres de $A_0$ sont deux à deux distinctes (racines simples de $\chi_{A_0}$)

**Rôle.** Elle donne $\dfrac{\partial\chi}{\partial\lambda}(A_0,\lambda_i(0))=\prod_{j\ne i}(\lambda_i(0)-\lambda_j(0))\ne0$ : c'est l'hypothèse « différentielle partielle inversible » des fonctions implicites. Elle sert aussi dans la question 2 via la décomposition $\R^n=\ker(A_0-\lambda_i(0)I)\oplus\mathrm{Im}(A_0-\lambda_i(0)I)$.

**Si on la retire.** Soit $A(t)=\begin{pmatrix}0&t\\1&0\end{pmatrix}$, de sorte que $A(0)$ a la valeur propre double $0$ et $\chi_{A(t)}(\lambda)=\lambda^2-t$.
* Pour $t<0$, $A(t)$ n'a **aucune** valeur propre réelle : tout voisinage de $A(0)$ contient de telles matrices, donc il n'existe pas de $\lambda_1:U\to\R$ comme dans 1.
* Même en se restreignant à $t\ge0$ : une fonction continue $t\mapsto\mu(t)$ sur $]0,\eps[$ à valeurs dans $\{\sqrt t,-\sqrt t\}$ est de signe constant (connexité), donc vaut $\pm\sqrt t$, qui n'est pas dérivable en $0$ (taux d'accroissement $\pm1/\sqrt t\to\pm\infty$).

Pour les vecteurs propres : $A(s,t)=\begin{pmatrix}s&t\\t&-s\end{pmatrix}$, de valeurs propres $\pm\sqrt{s^2+t^2}$ (double en $(0,0)$). En écrivant $(s,t)=\rho(\cos\theta,\sin\theta)$, $\rho>0$, la droite propre de $+\rho$ est $\R\,(\cos\frac\theta2,\sin\frac\theta2)$. Un champ continu non nul $v(\theta)=c(\theta)(\cos\frac\theta2,\sin\frac\theta2)$ sur le cercle vérifierait $v(2\pi)=-c(2\pi)(1,0)=v(0)=c(0)(1,0)$, donc $c(2\pi)=-c(0)$ et $c$ s'annulerait : il n'y a **aucun** vecteur propre continu non nul pour la plus grande valeur propre au voisinage de $A(0,0)=0$. Et cette plus grande valeur propre, $\sqrt{s^2+t^2}$, n'est pas différentiable en $0$.

### H2 — Les valeurs propres de $A_0$ sont réelles

**Rôle.** Les $\lambda_i$ sont à valeurs dans $\R$ et l'on applique les fonctions implicites dans $\Mat_n(\R)\times\R$.

**Si on la retire.** $A_0=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ a deux valeurs propres distinctes $\pm i$, mais aucune valeur propre réelle, ni elle ni ses voisines (le discriminant $(\mathrm{tr}A)^2-4\det A$ reste $<0$ près de $A_0$) : la conclusion réelle est fausse. La conclusion **complexe** reste vraie : même preuve avec $\chi:\Mat_n(\R)\times\C\to\C$, $\C\simeq\R^2$, la différentielle partielle en $\lambda$ étant la multiplication par $\chi_{A_0}'(\lambda_i(0))\ne0$, inversible.

### H3 — La normalisation du vecteur propre (dans la preuve de 2)

**Rôle.** Un vecteur propre n'est défini qu'à un scalaire près : l'équation $Av=\mu v$ seule a pour différentielle partielle en $(v,\mu)$ l'application $(h,s)\mapsto(A_0-\lambda_i(0)I)h-s\,v_i(0)$ de $\R^{n+1}$ dans $\R^n$, qui a un noyau (contenant $(v_i(0),0)$) : les fonctions implicites ne s'appliquent pas. On ajoute l'équation $\langle v,v_i(0)\rangle=\norm{v_i(0)}^2$ qui fixe l'échelle.

**Si on la retire.** Ce n'est pas une hypothèse de l'énoncé mais un **outil** de preuve : la conclusion ne change pas, mais sans normalisation il n'y a ni unicité locale du vecteur propre, ni théorème applicable directement.

## Idée de la preuve

1 : fonctions implicites pour $\chi(A,\lambda)=\det(\lambda I-A)=0$ près de chaque $(A_0,\lambda_i(0))$, la racine étant simple ; des intervalles disjoints autour des $\lambda_i(0)$ assurent que les $n$ racines restent distinctes, donc sont toutes les valeurs propres.
2 : fonctions implicites pour le système carré $Av-\mu v=0$, $\langle v,v_i(0)\rangle=\norm{v_i(0)}^2$, d'inconnue $(v,\mu)\in\R^n\times\R$ ; puis on identifie $\mu(A)=\lambda_i(A)$.

## Preuve

On munit $\R^n$ du produit scalaire usuel $\langle\cdot,\cdot\rangle$ et $\Mat_n(\R)\simeq\R^{n^2}$ d'une norme quelconque (toutes équivalentes).

**Une remarque de régularité.** Le théorème des fonctions implicites ([[ch06-fonctions-implicites]]) appliqué à une application $f$ de classe $C^\infty$ (donc $C^1$) fournit $\varphi$ de classe $C^1$ avec $d\varphi_x=-\big(\frac{\partial f}{\partial y}(x,\varphi(x))\big)^{-1}\circ\frac{\partial f}{\partial x}(x,\varphi(x))$. Si $\varphi$ est $C^k$, le membre de droite est $C^k$ (composée de $C^\infty$ et de $C^k$, et $L\mapsto L^{-1}$ est $C^\infty$ sur les isomorphismes, [[ch05-inversion-c-infini]]), donc $\varphi$ est $C^{k+1}$. Par récurrence, $\varphi$ est $C^\infty$.

**1. Valeurs propres.** Posons $\chi:\Mat_n(\R)\times\R\to\R$, $\chi(A,\lambda)=\det(\lambda I-A)$. C'est un polynôme en les $n^2+1$ variables (coefficients de $A$ et $\lambda$), donc $\chi$ est $C^\infty$. Comme $\chi_{A_0}$ est unitaire de degré $n$ et a les $n$ racines distinctes $\lambda_1(0),\dots,\lambda_n(0)$,
$$
\chi(A_0,\lambda)=\prod_{j=1}^n(\lambda-\lambda_j(0)),\qquad \frac{\partial\chi}{\partial\lambda}(A_0,\lambda_i(0))=\prod_{j\ne i}(\lambda_i(0)-\lambda_j(0))\ne0 .
$$
Une forme linéaire non nulle sur $\R$ (la multiplication par ce nombre) est un isomorphisme de $\R$ sur $\R$. Les fonctions implicites (avec $E=\Mat_n(\R)$, $F=G=\R$) donnent, pour chaque $i$, un ouvert $U_i\ni A_0$, un intervalle ouvert $V_i\ni\lambda_i(0)$ et $\varphi_i:U_i\to V_i$ de classe $C^\infty$ (remarque ci-dessus) tels que
$$
\forall(A,\lambda)\in U_i\times V_i,\qquad \chi(A,\lambda)=0\iff\lambda=\varphi_i(A),
$$
et $\varphi_i(A_0)=\lambda_i(0)$.

*Rendre les $V_i$ disjoints.* Soit $\delta=\frac12\min_{j\ne k}|\lambda_j(0)-\lambda_k(0)|>0$. Remplaçons $V_i$ par $V_i'=V_i\cap\,]\lambda_i(0)-\delta,\lambda_i(0)+\delta[$ et $U_i$ par $U_i'=U_i\cap\varphi_i^{-1}(V_i')$, ouvert contenant $A_0$ par continuité de $\varphi_i$. L'équivalence reste vraie sur $U_i'\times V_i'$ (c'est une restriction), et $\varphi_i(U_i')\subset V_i'$. Les $V_i'$ sont deux à deux disjoints.

Posons $U=\bigcap_{i=1}^nU_i'$ (ouvert contenant $A_0$) et $\lambda_i=\varphi_i|_U$. Pour $A\in U$, chaque $\lambda_i(A)\in V_i'$ est racine de $\chi_A$ ; les $V_i'$ étant disjoints, $\lambda_1(A),\dots,\lambda_n(A)$ sont $n$ racines **distinctes** de $\chi_A$, polynôme unitaire de degré $n$. Donc $\chi_A(\lambda)=\prod_i(\lambda-\lambda_i(A))$ : ce sont **toutes** les valeurs propres de $A$ (même complexes), et elles sont simples. Les $\lambda_i$ sont $C^\infty$ et $\lambda_i(A_0)=\lambda_i(0)$.

**2. Vecteurs propres.** Fixons $i$, notons $\lambda_0=\lambda_i(0)$ et $v_0=v_i(0)\ne0$. Soit
$$
f:\Mat_n(\R)\times(\R^n\times\R)\to\R^n\times\R,\qquad f(A,(v,\mu))=\big(Av-\mu v,\ \langle v,v_0\rangle-\norm{v_0}^2\big).
$$
$f$ est polynomiale donc $C^\infty$, et $f(A_0,(v_0,\lambda_0))=(0,0)$. Sa différentielle partielle par rapport à $(v,\mu)$ en ce point est
$$
L:(h,s)\in\R^n\times\R\longmapsto\big((A_0-\lambda_0I)h-s\,v_0,\ \langle h,v_0\rangle\big)\in\R^n\times\R .
$$
*$L$ est un isomorphisme.* Les vecteurs propres $v_1(0),\dots,v_n(0)$ de $A_0$ (associés à des valeurs propres distinctes) forment une base de $\R^n$ ; comme $(A_0-\lambda_0I)v_j(0)=(\lambda_j(0)-\lambda_0)v_j(0)$, on a $\ker(A_0-\lambda_0I)=\R v_0$ et $\mathrm{Im}(A_0-\lambda_0I)=\mathrm{Vect}(v_j(0),\ j\ne i)$, donc $\R^n=\ker(A_0-\lambda_0I)\oplus\mathrm{Im}(A_0-\lambda_0I)$. Si $L(h,s)=0$ : $s\,v_0=(A_0-\lambda_0I)h$ est à la fois dans le noyau et dans l'image, donc nul, d'où $s=0$ ; puis $h\in\ker(A_0-\lambda_0I)$, $h=c\,v_0$, et $\langle h,v_0\rangle=c\norm{v_0}^2=0$ donne $c=0$. $L$ est injective entre espaces de même dimension $n+1$, donc bijective (et continue d'inverse continu, dimension finie).

Les fonctions implicites donnent un ouvert $U'\ni A_0$, un ouvert $V'\ni(v_0,\lambda_0)$ et $\psi=(v,\mu):U'\to V'$ de classe $C^\infty$, avec $\psi(A_0)=(v_0,\lambda_0)$ et, pour tout $A\in U'$,
$$
A\,v(A)=\mu(A)\,v(A),\qquad \langle v(A),v_0\rangle=\norm{v_0}^2 .
$$
La seconde égalité impose $v(A)\ne0$ ; donc $\mu(A)$ est une valeur propre de $A$ et $v(A)$ un vecteur propre associé.

*Identification $\mu=\lambda_i$.* Restreignons : $U''=U\cap U'\cap\mu^{-1}(V_i')$, ouvert contenant $A_0$ (car $\mu(A_0)=\lambda_0\in V_i'$, et $\mu$ est continue). Pour $A\in U''$, $\mu(A)\in V_i'$ et $\chi(A,\mu(A))=0$, donc par l'équivalence de la question 1, $\mu(A)=\lambda_i(A)$. Finalement $v_i:=v|_{U''}$ est $C^\infty$, $v_i(A_0)=v_0$, et $v_i(A)$ est un vecteur propre non nul de $A$ pour $\lambda_i(A)$. $\square$

*Variante du poly :* au lieu des fonctions implicites, on peut appliquer l'inversion locale ([[ch06-inversion-locale]]) à $(A,v,\mu)\mapsto(A,f(A,(v,\mu)))$, de différentielle $\begin{pmatrix}I&0\\ *&L\end{pmatrix}$ inversible au point $(A_0,v_0,\lambda_0)$ : c'est la même preuve (le poly démontre d'abord les fonctions implicites, Théorème VI.2.1, puis en déduit l'inversion locale, Théorème VI.3.2 ; les deux énoncés sont équivalents).

## Preuve à trous

**1.** Soit $\chi(A,\lambda)=\det(\lambda I-A)$, polynomiale donc $C^\infty$. Comme $\chi(A_0,\lambda)=\prod_j(\lambda-\lambda_j(0))$, on a <trou indice="dérivée d'un produit en une de ses racines">$\frac{\partial\chi}{\partial\lambda}(A_0,\lambda_i(0))=\prod_{j\ne i}(\lambda_i(0)-\lambda_j(0))\ne0$</trou>. Les fonctions implicites donnent $\varphi_i:U_i\to V_i$, $C^\infty$, avec $\chi(A,\lambda)=0\iff\lambda=\varphi_i(A)$ sur $U_i\times V_i$. On réduit les $V_i$ à des intervalles de rayon $\delta=\frac12\min_{j\ne k}|\lambda_j(0)-\lambda_k(0)|$ (notés $V_i'$) et les $U_i$ en conséquence (notés $U_i'$) ; sur $U=\bigcap U_i'$, les $\lambda_i(A)=\varphi_i(A)$ sont $n$ racines <trou indice="pourquoi sont-ce toutes les valeurs propres ?">distinctes (les $V_i'$ sont disjoints) d'un polynôme unitaire de degré $n$, donc ce sont toutes ses racines</trou>.

**2.** On pose $f(A,(v,\mu))=\big(Av-\mu v,\ \langle v,v_0\rangle-\norm{v_0}^2\big)$, de $\Mat_n(\R)\times(\R^n\times\R)$ dans $\R^n\times\R$. Sa différentielle partielle en $(v,\mu)$ au point $(A_0,(v_0,\lambda_0))$ est $L(h,s)=\big((A_0-\lambda_0I)h-sv_0,\ \langle h,v_0\rangle\big)$. Elle est injective car <trou indice="A_0 est diagonalisable : comparer noyau et image de A_0-λ_0 I">$\R^n=\ker(A_0-\lambda_0I)\oplus\mathrm{Im}(A_0-\lambda_0I)$ avec $\ker=\R v_0$ : $sv_0$ est dans les deux donc $s=0$, puis $h=cv_0$ et $c\norm{v_0}^2=0$</trou>, donc bijective (dimensions égales). On obtient $(v(A),\mu(A))$ $C^\infty$ avec $Av(A)=\mu(A)v(A)$ et $\langle v(A),v_0\rangle=\norm{v_0}^2$, donc $v(A)\ne0$. Enfin <trou indice="utiliser l'unicité de la question 1">$\mu$ est continue et $\mu(A_0)=\lambda_0$ ; sur l'ouvert où $\mu(A)\in V_i'$, $\mu(A)$ est racine de $\chi_A$ dans $V_i'$, donc $\mu(A)=\lambda_i(A)$</trou>. $\square$

## Exemples

* **Le cas $2\times2$ explicite.** Pour $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, $\chi_A(\lambda)=\lambda^2-(a+d)\lambda+(ad-bc)$, de discriminant $\Delta(A)=(a-d)^2+4bc$. Près de $A_0=\begin{pmatrix}1&0\\0&2\end{pmatrix}$, $\Delta(A_0)=1>0$, donc $\Delta>0$ au voisinage et
$$
\lambda_1(A)=\frac{a+d-\sqrt{\Delta(A)}}{2},\qquad \lambda_2(A)=\frac{a+d+\sqrt{\Delta(A)}}{2},
$$
qui sont $C^\infty$ car $\sqrt{\cdot}$ est $C^\infty$ sur $]0,+\infty[$ ; $\lambda_1(A_0)=1$, $\lambda_2(A_0)=2$. Avec $v_1(0)=e_1$ et la normalisation $\langle v,e_1\rangle=1$, on cherche $v=(1,y)$ : la seconde ligne de $Av=\lambda_1 v$ donne $c+dy=\lambda_1y$, d'où
$$
v_1(A)=\Big(1,\ \frac{c}{\lambda_1(A)-d}\Big),
$$
bien défini et $C^\infty$ près de $A_0$ ($\lambda_1(A)-d\approx 1-2=-1$). La première ligne $a+by=\lambda_1$ est alors automatiquement satisfaite : elle équivaut à $(\lambda_1-a)(\lambda_1-d)=bc$, c'est-à-dire $\chi_A(\lambda_1)=0$.

* **Dérivée d'une valeur propre simple (perturbation au premier ordre).** En dérivant $A\,v_i(A)=\lambda_i(A)\,v_i(A)$ en $A_0$ dans la direction $H$ : $Hv_0+A_0v'=\lambda'v_0+\lambda_0v'$, avec $v'=d(v_i)_{A_0}(H)$, $\lambda'=d(\lambda_i)_{A_0}(H)$. Soit $w$ un vecteur propre de $A_0^{T}$ pour $\lambda_0$ ; en appliquant $w^{T}$ : $w^{T}Hv_0=\lambda'\,w^{T}v_0$. Or $w^{T}v_0\ne0$ (sinon $w$ serait orthogonal à tous les $v_j(0)$, car $(\lambda_0-\lambda_j(0))\,w^Tv_j(0)=w^T(A_0-\lambda_j(0))v_j(0)=0$ pour $j\ne i$, donc à une base, donc nul). D'où
$$
d(\lambda_i)_{A_0}(H)=\frac{w^{T}Hv_0}{w^{T}v_0}\qquad\Big(=\frac{\langle v_0,Hv_0\rangle}{\norm{v_0}^2}\ \text{ si } A_0 \text{ est symétrique}\Big).
$$
Vérification sur l'exemple précédent : $v_0=w=e_1$, $d(\lambda_1)_{A_0}(H)=H_{11}$ ; et en effet, pour $A=A_0+\eps H$, $\Delta=(1-\eps(H_{11}-H_{22}))^2+4\eps^2H_{12}H_{21}$, donc $\sqrt\Delta=1-\eps(H_{11}-H_{22})+O(\eps^2)$ et $\lambda_1=1+\eps H_{11}+O(\eps^2)$.

* **Variante algébrique pour le vecteur propre.** La comatrice transposée $\mathrm{adj}(M)$ vérifie $M\,\mathrm{adj}(M)=\det(M)I$. Avec $M(A)=A-\lambda_i(A)I$ ($\det M(A)=0$), chaque colonne de $\mathrm{adj}(M(A))$ est dans $\ker M(A)$ ; ses coefficients sont des polynômes en $A$ et $\lambda_i(A)$, donc $C^\infty$. Comme $M(A_0)$ est de rang $n-1$, $\mathrm{adj}(M(A_0))\ne0$ : une colonne non nulle en $A_0$ le reste au voisinage et fournit un vecteur propre $C^\infty$ (colinéaire à $v_i(0)$ en $A_0$, pas forcément égal).

## Pièges

* > ⚠️ L'hypothèse « valeurs propres **distinctes** » est essentielle : en une valeur propre multiple, les valeurs propres ne sont en général même pas dérivables ($\pm\sqrt t$) et peuvent devenir complexes.
* Ne pas « numéroter » les valeurs propres par ordre croissant sans réfléchir dans les situations de croisement : pour $\begin{pmatrix}0&t\\t&0\end{pmatrix}$, les fonctions $\pm t$ sont $C^\infty$, mais $\min=-|t|$ et $\max=|t|$ ne le sont pas. Ici, grâce aux intervalles disjoints, l'ordre est conservé sur $U$, mais c'est un fait **local**.
* Le vecteur propre n'est défini qu'à un scalaire près : sans normalisation, la différentielle partielle n'est pas inversible et l'on ne peut pas appliquer les fonctions implicites.
* Le voisinage $U$ est **local** : quand $A$ s'éloigne de $A_0$, deux valeurs propres peuvent se rencontrer et le résultat cesse de s'appliquer.
* Pour appliquer les fonctions implicites, il faut un système **carré** ($n+1$ inconnues $(v,\mu)$, $n+1$ équations) : l'application $(A,v)\mapsto\big((A-\lambda_i(A)I)v,\langle v,v_0\rangle\big)$ va de $\R^n$ (inconnue $v$) dans $\R^{n+1}$, ce qui ne permet pas d'appliquer directement le théorème.
