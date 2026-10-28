---
id: ch01-def-differentiable-r2
type: definition
chapter: 1
title: "Différentiabilité réelle, différentielle $df_{(x,y)}$, matrice jacobienne, classe $C^1$ (formules (I.2.1)–(I.2.3))"
ref: non numéroté, section I.2, p. 6
page: 6
importance: 2
depends: []
tags: [differentielle, jacobienne, c1, r2, definition]
---
## Intuition

> 💡 On oublie un instant que $\C$ est un corps et on le voit comme le plan $\R^2$. Une fonction $f:\Omega\to\C$ devient alors une application du plan dans le plan, $(x,y)\mapsto(P(x,y),Q(x,y))$, et on lui applique le calcul différentiel « réel » habituel : $f$ est différentiable en un point si, près de ce point, elle ressemble à une **application linéaire** (au sens de $\R$) à une erreur négligeable devant la distance près.

Une application $\R$-linéaire du plan, c'est une matrice $2\times2$ quelconque : elle peut tourner, dilater, mais aussi écraser, cisailler, renverser l'orientation. La $\C$-dérivabilité ([[ch01-def-c-derivable]]) sera le cas particulier où cette matrice est une rotation-homothétie ([[ch01-c-derivable-ssi-df-c-lineaire]], [[ch01-similitude-conforme]]).

Vocabulaire : pour $z\in\C$, $\Re(z)$ et $\Im(z)$ sont ses parties réelle et imaginaire ; la notation $o(\lVert(h,k)\rVert)$ désigne une quantité $\eps(h,k)\lVert(h,k)\rVert$ avec $\eps(h,k)\to0$ quand $(h,k)\to(0,0)$. Cette notion est reprise en dimension quelconque au chapitre V ([[ch05-differentielle-def]]).

## Énoncé

**Définition (poly, section I.2, p. 6, non numérotée).** On identifie $\C$ à $\R^2$ grâce à l'application $z\mapsto(x,y)$ où $x=\Re(z)$ et $y=\Im(z)$, autrement dit $z=x+iy$. Pour $f:\Omega\to\C$ ($\Omega$ ouvert), on note
$$
f(z)=P(z)+iQ(z),\qquad P(z)=\Re(f(z)),\quad Q(z)=\Im(f(z)),
$$
et, avec l'identification, $f(x,y)=(P(x,y),Q(x,y))$.

La fonction $f$ est dite **différentiable** en un point $(x,y)$ de $\Omega$ s'il existe une application linéaire $df_{(x,y)}:\R^2\to\R^2$ telle que
$$
\text{(I.2.1)}\qquad \lVert f(x+h,y+k)-f(x,y)-df_{(x,y)}(h,k)\rVert=o(\lVert(h,k)\rVert).
$$
Ici la norme est la norme euclidienne usuelle de $\R^2$ (toutes les normes sur $\R^2$ étant équivalentes, une autre norme donnerait la même définition) ; si $\lVert(h,k)\rVert$ est assez petit, $(x+h,y+k)$ est bien dans $\Omega$. La relation (I.2.1) caractérise $df_{(x,y)}$, appelée la **différentielle** de $f$ en $(x,y)$. Dans la base canonique de $\R^2$, elle est représentée par la **matrice jacobienne**
$$
\text{(I.2.2)}\qquad \begin{pmatrix}\dfrac{\partial P}{\partial x}(x,y) & \dfrac{\partial P}{\partial y}(x,y)\\ \dfrac{\partial Q}{\partial x}(x,y) & \dfrac{\partial Q}{\partial y}(x,y)\end{pmatrix}.
$$
La fonction $f$ est dite **de classe $C^1$** si elle est différentiable en tout point de $\Omega$ et si les dérivées partielles $\frac{\partial P}{\partial x},\frac{\partial P}{\partial y},\frac{\partial Q}{\partial x},\frac{\partial Q}{\partial y}$ sont des fonctions continues sur $\Omega$.

En écrivant $z=x+iy$ et $\omega=s+it$, (I.2.1) s'écrit
$$
\text{(I.2.3)}\qquad |f(z+\omega)-f(z)-df_z(\omega)|=o(|\omega|),
$$
et l'on voit désormais $df_z$ comme une application **$\R$-linéaire** de $\C$ dans $\C$.

## Hypothèses

### H1 — $\Omega$ ouvert

**Rôle.** Garantit que $f(x+h,y+k)$ est défini pour $(h,k)$ assez petit dans **toutes** les directions, ce qui rend (I.2.1) significative et assure l'unicité de $df_{(x,y)}$.

### H2 — unicité de la différentielle (justification du « caractérise »)

**Rôle.** Si $L_1$ et $L_2$ linéaires vérifient toutes deux (I.2.1), alors par inégalité triangulaire $\lVert (L_1-L_2)(v)\rVert = o(\lVert v\rVert)$. Pour $v\ne0$ fixé et $\tau\to0^+$, on applique cela à $\tau v$ : $\tau\lVert(L_1-L_2)(v)\rVert=o(\tau)$, donc $(L_1-L_2)(v)=0$. D'où $L_1=L_2$.

### H3 — pourquoi la matrice (I.2.2)

**Rôle.** En prenant $(h,k)=(\tau,0)$ dans (I.2.1) et en divisant par $\tau\to0$, on obtient que $\frac{\partial P}{\partial x}$ et $\frac{\partial Q}{\partial x}$ existent et que $df_{(x,y)}(1,0)=\bigl(\frac{\partial P}{\partial x},\frac{\partial Q}{\partial x}\bigr)$ : c'est la première colonne ; de même $(h,k)=(0,\tau)$ donne la seconde. Ainsi, en notation complexe, $df_z(1)=\frac{\partial f}{\partial x}(z)$ et $df_z(i)=\frac{\partial f}{\partial y}(z)$, où $\frac{\partial f}{\partial x}=\frac{\partial P}{\partial x}+i\frac{\partial Q}{\partial x}$.

**Si on la retire (i.e. si l'on croit que l'existence des dérivées partielles suffit).** C'est faux : voir le premier piège ci-dessous.

## Exemples

* **$f(z)=z^2$.** $z^2=(x+iy)^2=(x^2-y^2)+i\,2xy$, donc $P=x^2-y^2$, $Q=2xy$ et la jacobienne vaut
$$
\begin{pmatrix}2x&-2y\\ 2y&2x\end{pmatrix}.
$$
Les dérivées partielles sont continues (polynomiales), donc $f$ est $C^1$ (une fonction dont les dérivées partielles existent et sont continues sur un ouvert est différentiable et même $C^1$, [[ch05-c1-ssi-partielles-continues]]). En notation complexe, $df_z(\omega)=(2x\,s-2y\,t)+i(2y\,s+2x\,t)=2z\,\omega$ : on le vérifie directement, $(z+\omega)^2-z^2-2z\omega=\omega^2=o(|\omega|)$.
* **$f(z)=\bar z$.** $P=x$, $Q=-y$, jacobienne $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ (symétrie par rapport à l'axe réel). Ici $f$ est elle-même $\R$-linéaire, donc $df_z=f$ pour tout $z$ : $df_z(\omega)=\bar\omega$. Différentiable partout, mais $df_z$ n'est pas une multiplication par un complexe.
* **$f(z)=|z|^2$.** $P=x^2+y^2$, $Q=0$, jacobienne $\begin{pmatrix}2x&2y\\0&0\end{pmatrix}$ ; en complexe $df_z(\omega)=2(xs+yt)=2\Re(\bar z\,\omega)=\bar z\omega+z\bar\omega$.

## Pièges

* > ⚠️ **L'existence des dérivées partielles n'entraîne pas la différentiabilité** ([[ch05-partielles-sans-differentiabilite]]). Exemple : $f(x,y)=\dfrac{xy}{x^2+y^2}$ pour $(x,y)\ne(0,0)$, $f(0,0)=0$ (donc $P=f$, $Q=0$). Sur les axes $f$ est nulle, d'où $\frac{\partial P}{\partial x}(0,0)=\frac{\partial P}{\partial y}(0,0)=0$ ; si $f$ était différentiable en $0$, on aurait $df_{0}=0$ et $f(h,k)=o(\lVert(h,k)\rVert)$, donc $f\to0$ en $0$. Or $f(\tau,\tau)=\frac12$ pour tout $\tau\ne0$ : $f$ n'est même pas continue en $0$.
* La différentielle $df_z$ est une application **linéaire** (un objet), la jacobienne est sa **matrice** dans la base canonique : ne pas les confondre, surtout quand on passe à l'écriture complexe $df_z(\omega)$.
* Dans (I.2.3), $df_z(\omega)$ n'est en général **pas** un produit « nombre $\times\,\omega$ » : c'est seulement le cas lorsque $df_z$ est $\C$-linéaire ([[ch01-decomposition-r-lineaire]]).
* Ordre des indices dans la jacobienne : ligne = composante ($P$ puis $Q$), colonne = variable ($x$ puis $y$).
