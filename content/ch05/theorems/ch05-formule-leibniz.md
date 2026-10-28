---
id: ch05-formule-leibniz
type: proposition
chapter: 5
title: Formule de Leibniz (différentielle d'un « produit » bilinéaire)
ref: Exemple V.3.16
page: 101
importance: 2
depends: [ch05-differentiabilite-composantes, ch05-composition-differentielles, ch05-differentielle-bilineaire]
tags: [leibniz, produit, bilineaire, regle-de-la-chaine, differentielle]
---
## Intuition

> 💡 C'est la règle $(uv)'=u'v+uv'$, dans sa version la plus générale : le « produit » est n'importe quelle application **bilinéaire continue** $b$ (produit de réels, produit scalaire, produit matriciel, produit d'un scalaire par un vecteur, composition d'opérateurs…). Quand $x$ bouge un peu, $b(f_1(x),f_2(x))$ varie parce que $f_1$ varie (on gèle $f_2$) **plus** parce que $f_2$ varie (on gèle $f_1$) ; le terme où les deux varient en même temps est d'ordre 2, donc négligeable.

Mécaniquement : $g=b\circ\varphi$ avec $\varphi(x)=(f_1(x),f_2(x))$. On différentie $\varphi$ composante par composante ([[ch05-differentiabilite-composantes]]), $b$ par la formule des applications bilinéaires ([[ch05-differentielle-bilineaire]]) et on compose ([[ch05-composition-differentielles]]).

Rappel : $b:F_1\times F_2\to G$ est **bilinéaire** si elle est linéaire en chaque variable, l'autre étant fixée ; elle est **continue** si et seulement s'il existe $C$ avec $\|b(u,v)\|\le C\|u\|\,\|v\|$ ([[ch05-multilineaire-continue-caracterisation]], [[ch05-espace-multilineaires-norme]]).

## Énoncé

**Proposition (poly, Exemple V.3.16, p. 101).** Soient $E$, $F_1$, $F_2$ et $G$ des espaces vectoriels normés, $U$ un ouvert de $E$, et
$$
f_1:U\to F_1,\qquad f_2:U\to F_2,\qquad b:F_1\times F_2\to G
$$
où $b$ est bilinéaire continue. On définit $g:U\to G$ par $g(x)=b(f_1(x),f_2(x))$. Supposons que $f_1$ et $f_2$ soient différentiables au point $a\in U$. Alors il en est de même de $g$, et
$$
dg_a(h)=b\big((df_1)_a(h),\,f_2(a)\big)+b\big(f_1(a),\,(df_2)_a(h)\big),\qquad(h\in E).
$$

## Hypothèses

### H1 — $b$ bilinéaire continue

**Rôle.** Bilinéaire : c'est ce qui donne la forme « $u'v+uv'$ » de $db$ ([[ch05-differentielle-bilineaire]]). Continue : c'est ce qui rend $b$ différentiable (reste $b(p,q)$ majoré par $\|b\|\,\|p\|\,\|q\|$).

**Si on la retire.** En dimension finie, toute bilinéaire est continue ; en dimension infinie, la continuité est indispensable. Soit $E=F_1=F_2=c_{00}$ (suites réelles nulles à partir d'un certain rang, norme $\|x\|_\infty=\max_n|x_n|$), $G=\R$, $b(x,y)=\sum_n n\,x_ny_n$ (bilinéaire, non continue) et $f_1=f_2=\id$ (linéaires continues, donc différentiables). Alors $g(x)=\sum_n n\,x_n^2$. Pour $u_n=e_n/\sqrt n$ (où $e_n$ vaut $1$ au rang $n$, $0$ ailleurs) : $\|u_n\|_\infty=1/\sqrt n\to0$ mais $g(u_n)=1\not\to g(0)=0$. Donc $g$ n'est pas continue en $0$, donc pas différentiable en $0$ ([[ch05-differentiable-implique-continue]]).

### H2 — $f_1$ et $f_2$ différentiables en $a$

**Rôle.** Elles donnent la différentiabilité de $\varphi=(f_1,f_2)$ en $a$ (sens réciproque de [[ch05-differentiabilite-composantes]]), première étape de la règle de la chaîne.

**Si on la retire.** Si $f_2\equiv1$ (dans $F_2=\R$, avec $b(u,\lambda)=\lambda u$), alors $g=f_1$ : si $f_1$ n'est pas différentiable, $g$ non plus (par exemple $f_1=|\cdot|$ sur $\R$, $a=0$). Mais la condition n'est que **suffisante** : $f_1(x)=|x|$, $f_2(x)=x$, $b(u,v)=uv$ : $g(x)=x|x|$ est dérivable en $0$ (car $g(h)=h|h|=o(h)$), de dérivée nulle, bien que $f_1$ ne soit pas dérivable en $0$ — la formule de Leibniz n'a alors pas de sens.

## Idée de la preuve

Écrire $g=b\circ\varphi$ avec $\varphi=(f_1,f_2):U\to F_1\times F_2$ ; $d\varphi_a(h)=((df_1)_a(h),(df_2)_a(h))$ (composantes), $db_{(u,v)}(p,q)=b(u,q)+b(p,v)$ (bilinéaire), puis règle de la chaîne.

## Preuve

*Le poly résume la preuve en une phrase ; on la détaille.* On munit $F_1\times F_2$ de la norme $\|(u,v)\|=\|u\|_{F_1}+\|v\|_{F_2}$ et on pose
$$
\varphi:U\to F_1\times F_2,\qquad\varphi(x)=(f_1(x),f_2(x)),
$$
de sorte que $g=b\circ\varphi$.

*Étape 1 : $\varphi$.* Les composantes de $\varphi$ sont $p_1\circ\varphi=f_1$ et $p_2\circ\varphi=f_2$, différentiables en $a$. Par [[ch05-differentiabilite-composantes]], $\varphi$ est différentiable en $a$ et
$$
d\varphi_a(h)=\big((df_1)_a(h),\,(df_2)_a(h)\big),\qquad h\in E .
$$

*Étape 2 : $b$.* L'application $b$ est bilinéaire continue, donc différentiable en tout point $(u,v)\in F_1\times F_2$ ([[ch05-differentielle-bilineaire]]) avec
$$
db_{(u,v)}(p,q)=b(u,q)+b(p,v).
$$

*Étape 3 : composition.* $b$ est définie sur l'ouvert $V=F_1\times F_2$ tout entier. Par la règle de la chaîne ([[ch05-composition-differentielles]]), $g=b\circ\varphi$ est différentiable en $a$ et $dg_a=db_{\varphi(a)}\circ d\varphi_a$. Avec $\varphi(a)=(f_1(a),f_2(a))$ :
$$
dg_a(h)=db_{(f_1(a),f_2(a))}\big((df_1)_a(h),(df_2)_a(h)\big)=b\big(f_1(a),(df_2)_a(h)\big)+b\big((df_1)_a(h),f_2(a)\big).\qquad\square
$$

## Preuve à trous

On écrit $g=b\circ\varphi$ où <trou indice="quelle application de U dans F1×F2 ?">$\varphi(x)=(f_1(x),f_2(x))$</trou>. Comme les composantes $f_1$, $f_2$ de $\varphi$ sont différentiables en $a$, la proposition sur les applications à valeurs dans un produit donne <trou>$d\varphi_a(h)=((df_1)_a(h),(df_2)_a(h))$</trou>. Comme $b$ est bilinéaire continue, <trou indice="différentielle d'une application bilinéaire continue">$db_{(u,v)}(p,q)=b(u,q)+b(p,v)$ en tout point $(u,v)$</trou>. La règle de la chaîne, au point $\varphi(a)=(f_1(a),f_2(a))$, donne alors
$$
dg_a(h)=db_{\varphi(a)}(d\varphi_a(h))=b\big(f_1(a),(df_2)_a(h)\big)+b\big((df_1)_a(h),f_2(a)\big).\qquad\square
$$

## Exemples

* **Carré de la norme hilbertienne.** $E$ espace de Hilbert réel, $b=\langle\cdot,\cdot\rangle$ (bilinéaire, continue par Cauchy–Schwarz), $f_1=f_2=\id_E$ : $g(x)=\|x\|^2$ et
$$
dg_a(h)=\langle h,a\rangle+\langle a,h\rangle=2\langle a,h\rangle ,
$$
d'où $\nabla g(a)=2a$ ([[ch05-gradient-hilbert]]). Ici $b$ est symétrique, d'où le facteur $2$.
* **Puissances de matrices.** Sur $\Mat_n(\R)$ (norme d'opérateur), $b(A,B)=AB$, $f_1=f_2=\id$ : $d(A\mapsto A^2)_A(H)=HA+AH$. **Ce n'est pas $2AH$** : pour $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, $H=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, on a $AH=H$ et $HA=0$, donc $AH+HA=H\neq2H=2AH$. Par récurrence ($A^{n}=A^{n-1}\cdot A$, Leibniz à chaque étape), $d(A\mapsto A^n)_A(H)=\sum_{k=0}^{n-1}A^kHA^{n-1-k}$ (poly, Exercice V.6.2).
* **Scalaire × vecteur : $x\mapsto x/\|x\|$.** Sur un Hilbert, pour $a\neq0$, avec $b(\lambda,y)=\lambda y$ ($\R\times E\to E$, $\|\lambda y\|=|\lambda|\,\|y\|$), $f_1(x)=1/\|x\|$ et $f_2=\id$. Par la règle de la chaîne, $(df_1)_a(h)=-\dfrac{\langle a,h\rangle}{\|a\|^3}$ (dérivée de $t\mapsto1/t$ composée avec $dN_a(h)=\langle a,h\rangle/\|a\|$). Donc
$$
d\Big(\frac{x}{\|x\|}\Big)_a(h)=\frac{h}{\|a\|}-\frac{\langle a,h\rangle}{\|a\|^3}\,a ,
$$
qui est la projection orthogonale de $h/\|a\|$ sur $a^\perp$ (vérification : son produit scalaire avec $a$ vaut $\frac{\langle a,h\rangle}{\|a\|}-\frac{\langle a,h\rangle}{\|a\|}=0$).

## Pièges

* > ⚠️ **Respecter l'ordre des arguments de $b$** : $b((df_1)_a(h),f_2(a))$ garde la différentielle de $f_1$ à la **première** place. Pour un produit non commutatif (matrices, composition), $d(A^2)_A(H)=HA+AH\neq2AH$.
* Ne pas oublier qu'on évalue $f_1$ et $f_2$ **en $a$** dans les termes « gelés » : $b((df_1)_a(h),f_2(a))$, pas $b((df_1)_a(h),f_2(h))$.
* En dimension infinie, vérifier la **continuité** de $b$ (contre-exemple dans $c_{00}$).
* La différentiabilité de $f_1$ et $f_2$ est suffisante, pas nécessaire ($x|x|$).
