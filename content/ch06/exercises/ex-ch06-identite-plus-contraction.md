---
id: ex-ch06-identite-plus-contraction
type: exercise
chapters: [6, 5]
title: Perturber l'identité par une contraction donne un difféomorphisme global
source: "Classique (perturbation lipschitzienne de l'identité, cf. Rouvière, *Petit guide de calcul différentiel*) ; application numérique de la question 5 inventée"
difficulty: 2
time: 25
tools: [ch06-point-fixe-banach, ch06-inversion-globale, ch06-neumann-inverse-id-moins-l, ch05-serie-neumann, ch05-accroissements-finis, ch06-diffeomorphisme-def]
---
## Énoncé

Soit $n\ge1$ et $\norm\cdot$ une norme sur $\R^n$ ; on note encore $\norm L$ la norme d'opérateur associée d'un $L\in\mathcal L(\R^n)$. Soient $k\in[0,1[$ et $g:\R^n\to\R^n$ une application de classe $C^1$ et $k$-lipschitzienne. On pose $f=\id+g$, c'est-à-dire $f(x)=x+g(x)$.

1. Montrer que $\norm{dg_x}\le k$ pour tout $x\in\R^n$, puis que $df_x$ est inversible pour tout $x$.
2. Montrer que $\norm{f(x)-f(y)}\ge(1-k)\norm{x-y}$ pour tous $x,y$. En déduire que $f$ est injective.
3. Montrer que $f$ est surjective.
4. En déduire que $f$ est un $C^1$-difféomorphisme de $\R^n$ sur $\R^n$, et que $f^{-1}$ est $\frac1{1-k}$-lipschitzienne.
5. Application. Montrer que pour tout $(a,b)\in\R^2$ le système
$$
\begin{cases} x+\frac14\sin(x+y)=a\\ y+\frac14\cos(x-y)=b\end{cases}
$$
admet une unique solution $(x,y)=\Theta(a,b)$, que $\Theta:\R^2\to\R^2$ est de classe $C^\infty$, et calculer $\Theta(0,\frac14)$ et $d\Theta_{(0,1/4)}$.

## Indices

### Indice 1
Trois propriétés à établir séparément : $df_x$ inversible en chaque point, $f$ injective, $f$ surjective ; un théorème du cours assemble les deux premières. Pour la surjectivité, réécrire $f(x)=z$ comme une équation de point fixe.

### Indice 2
1 : $dg_x(h)=\lim_{t\to0}\frac{g(x+th)-g(x)}t$ ; puis $df_x=\id-(-dg_x)$ avec $\norm{-dg_x}\le k<1$ (série de Neumann). 3 : $f(x)=z\iff x=z-g(x)$ ; l'application $x\mapsto z-g(x)$ est $k$-contractante sur l'espace complet $\R^n$.

### Indice 3
4 : théorème d'inversion globale (injective + différentielle inversible partout). 5 : écrire le système $f(x,y)=(a,b)$ avec $g(x,y)=\frac14\big(\sin(x+y),\cos(x-y)\big)$ et majorer la norme euclidienne de $dg$ : ses deux lignes sont orthogonales.

## Corrigé

**1.** Soient $x,h\in\R^n$. Comme $g$ est différentiable en $x$, $dg_x(h)=\lim_{t\to0^+}\frac1t\big(g(x+th)-g(x)\big)$ (dérivée directionnelle), et $\big\|\frac1t(g(x+th)-g(x))\big\|\le\frac1t\,k\,\norm{th}=k\norm h$. En passant à la limite, $\norm{dg_x(h)}\le k\norm h$, donc $\norm{dg_x}\le k$.

Alors $df_x=\id+dg_x=\id-L$ avec $L=-dg_x$, $\norm L\le k<1$. Par la série de Neumann ([[ch05-serie-neumann]], [[ch06-neumann-inverse-id-moins-l]]) — $\mathcal L(\R^n)$ est complet —, $df_x$ est inversible, d'inverse $\sum_{m\ge0}(-dg_x)^m$, de norme $\le\frac1{1-k}$. (En dimension finie on peut aussi dire : si $df_x(h)=0$ alors $h=-dg_x(h)$, donc $\norm h\le k\norm h$, d'où $h=0$ ; $df_x$ est un endomorphisme injectif de $\R^n$, donc bijectif.)

**2.** Par l'inégalité triangulaire et le caractère $k$-lipschitzien de $g$,
$$
\norm{f(x)-f(y)}=\norm{(x-y)+(g(x)-g(y))}\ge\norm{x-y}-\norm{g(x)-g(y)}\ge(1-k)\norm{x-y}.
$$
Si $f(x)=f(y)$, alors $(1-k)\norm{x-y}\le0$ et, comme $1-k>0$, $x=y$ : $f$ est injective.

**3.** Soit $z\in\R^n$ et $T_z:\R^n\to\R^n$, $T_z(x)=z-g(x)$. Alors $f(x)=z\iff T_z(x)=x$. Or $\norm{T_z(x)-T_z(y)}=\norm{g(x)-g(y)}\le k\norm{x-y}$ avec $k<1$ : $T_z$ est contractante, et $\R^n$ est complet. Par le théorème du point fixe de Banach ([[ch06-point-fixe-banach]]), $T_z$ a un (unique) point fixe $x$, qui vérifie $f(x)=z$. Donc $f$ est surjective.

**4.** Vérifions les hypothèses du théorème d'inversion globale ([[ch06-inversion-globale]]) pour $f:U=\R^n\to F=\R^n$ :
* $\R^n$ est un espace de Banach réel et $U=\R^n$ est ouvert ;
* $f=\id+g$ est de classe $C^1$ (somme d'une application linéaire et d'une application $C^1$) ;
* $f$ est injective (question 2) ;
* pour tout $x$, $df_x$ est un isomorphisme bicontinu (question 1 ; en dimension finie toute application linéaire est continue).

Donc $f(\R^n)$ est ouvert et $f^{-1}:f(\R^n)\to\R^n$ est de classe $C^1$. Comme $f(\R^n)=\R^n$ (question 3), $f$ est une bijection $C^1$ de $\R^n$ sur $\R^n$ d'inverse $C^1$ : c'est un $C^1$-difféomorphisme ([[ch06-diffeomorphisme-def]]). Enfin, pour $u,v\in\R^n$, appliquons la question 2 à $x=f^{-1}(u)$, $y=f^{-1}(v)$ : $\norm{u-v}\ge(1-k)\norm{f^{-1}(u)-f^{-1}(v)}$, c'est-à-dire que $f^{-1}$ est $\frac1{1-k}$-lipschitzienne.

**5.** On munit $\R^2$ de la norme euclidienne et on pose $g(x,y)=\frac14\big(\sin(x+y),\cos(x-y)\big)$, de classe $C^\infty$. Le système s'écrit $f(x,y)=(a,b)$ avec $f=\id+g$. La matrice jacobienne de $g$ est
$$
J_g(x,y)=\frac14\begin{pmatrix}c&c\\-s&s\end{pmatrix},\qquad c=\cos(x+y),\ s=\sin(x-y).
$$
Ses deux lignes $c(1,1)$ et $s(-1,1)$ sont orthogonales, donc pour $h=(h_1,h_2)$, en notant $u=\frac{h_1+h_2}{\sqrt2}$, $v=\frac{h_2-h_1}{\sqrt2}$ (coordonnées de $h$ dans une base orthonormée, $u^2+v^2=\norm h^2$),
$$
\norm{dg_{(x,y)}(h)}^2=\frac1{16}\big(c^2(h_1+h_2)^2+s^2(h_2-h_1)^2\big)=\frac18\big(c^2u^2+s^2v^2\big)\le\frac18\norm h^2 .
$$
Donc $\norm{dg_{(x,y)}}\le\frac{\sqrt2}4$ pour tout $(x,y)$. Comme $\R^2$ est convexe, l'inégalité des accroissements finis ([[ch05-accroissements-finis]]) montre que $g$ est $k$-lipschitzienne avec $k=\frac{\sqrt2}4<1$. Les questions 1 à 4 s'appliquent : $f$ est un $C^1$-difféomorphisme de $\R^2$ sur $\R^2$, et le système a une unique solution $\Theta(a,b)=f^{-1}(a,b)$.

*Régularité $C^\infty$.* $f$ est de classe $C^\infty$, injective, à différentielle inversible partout : le théorème d'inversion globale avec $k=\infty$ donne $f^{-1}=\Theta$ de classe $C^\infty$.

*Calculs.* $f(0,0)=\big(0+\frac14\sin0,\ 0+\frac14\cos0\big)=(0,\frac14)$, donc $\Theta(0,\frac14)=(0,0)$ par unicité. Par la règle de la chaîne appliquée à $f\circ\Theta=\id$, $d\Theta_{(0,1/4)}=(df_{(0,0)})^{-1}$, avec
$$
J_f(0,0)=I_2+\frac14\begin{pmatrix}1&1\\0&0\end{pmatrix}=\begin{pmatrix}5/4&1/4\\0&1\end{pmatrix},\qquad J_\Theta(0,\tfrac14)=\begin{pmatrix}4/5&-1/5\\0&1\end{pmatrix}.
$$
(Vérification : $\begin{pmatrix}5/4&1/4\\0&1\end{pmatrix}\begin{pmatrix}4/5&-1/5\\0&1\end{pmatrix}=\begin{pmatrix}1&-\frac14+\frac14\\0&1\end{pmatrix}=I_2$.)

## Pièges et variantes

* La constante $k<1$ doit être **uniforme**. Avec $g(x)=-\sqrt{1+x^2}$ sur $\R$, on a $|g'(x)|=\frac{|x|}{\sqrt{1+x^2}}<1$ partout, $f'=1+g'>0$ donc $f$ injective, mais $f(x)=x-\sqrt{1+x^2}<0$ : $f$ n'est pas surjective (son image est $]-\infty,0[$). C'est exactement la question 3 qui tombe.
* Le cas $k=1$ est faux : $g=-\id$ donne $f=0$.
* « $df_x$ inversible pour tout $x$ » ne suffit pas pour un difféomorphisme global (penser à $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ sur $]0,+\infty[\times\R$) : l'injectivité (question 2) est indispensable dans [[ch06-inversion-globale]].
* Variante : le même énoncé vaut dans un espace de Banach $E$ quelconque (même preuve ; en dimension infinie il faut la série de Neumann pour l'inversibilité **bicontinue** de $df_x$, l'argument « injectif donc bijectif » ne marche plus).
* Variante (version locale quantitative) : si $g$ n'est $k$-lipschitzienne que sur une boule fermée $\bar B(0,r)$ avec $g(0)=0$, alors $f$ est injective sur $\bar B(0,r)$ et $f(B(0,r))\supset B(0,(1-k)r)$ (point fixe de $T_z$ sur $\bar B(0,r)$, stable si $\norm z<(1-k)r$).
