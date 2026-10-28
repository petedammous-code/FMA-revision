---
id: ch05-gradient-hilbert
type: definition
chapter: 5
title: Gradient $\nabla f(a)$ dans un espace de Hilbert
ref: Exemple V.3.8
page: 99
importance: 2
depends: [ch05-differentielle-def]
tags: [gradient, hilbert, riesz, forme-lineaire, produit-scalaire]
---
## Intuition

> 💡 Pour une fonction **à valeurs réelles** $f$, la différentielle $df_a$ est une **forme linéaire** : elle prend un déplacement $h$ et renvoie un nombre, la variation de $f$ au premier ordre. Dans un espace muni d'un produit scalaire, toute forme linéaire continue « est » un produit scalaire contre un vecteur fixe : $df_a(h)=\langle\nabla f(a),h\rangle$. Ce vecteur $\nabla f(a)$, c'est le **gradient** : une flèche dans l'espace de départ qui, lorsqu'elle est non nulle, pointe dans la direction où $f$ croît le plus vite et est orthogonale aux lignes de niveau de $f$ (voir les propriétés géométriques dans les exemples).

Vocabulaire : un **espace de Hilbert** est un espace vectoriel réel muni d'un produit scalaire $\langle\cdot,\cdot\rangle_E$ (forme bilinéaire symétrique définie positive), **complet** pour la norme $\|x\|=\sqrt{\langle x,x\rangle_E}$. Le **théorème de représentation de Riesz** dit : dans un espace de Hilbert $E$, pour toute forme linéaire continue $\varphi:E\to\R$, il existe un unique $v\in E$ tel que $\varphi(h)=\langle v,h\rangle_E$ pour tout $h\in E$. La différentielle $df_a$ est définie dans [[ch05-differentielle-def]].

## Énoncé

**Définition (poly, Exemple V.3.8, p. 99).** On suppose que $(E,\langle\cdot,\cdot\rangle_E)$ est un espace de Hilbert. Soit $f:U\to\R$ une application définie sur un ouvert $U$ de $E$. Supposons $f$ différentiable en $a$, de différentielle $df_a:E\to\R$. D'après le théorème de représentation de Riesz, il existe un unique vecteur $\nabla f(a)$ de $E$ tel que pour tout $h\in E$,
$$
\langle\nabla f(a),h\rangle_E=df_a(h).
$$
On appelle le vecteur $\nabla f(a)$ le **gradient** de $f$ en $a$.

## Hypothèses

### H1 — $E$ est un espace de Hilbert (produit scalaire **et** complétude)

**Rôle.** Le produit scalaire donne un sens à « représenter $df_a$ par un vecteur » ; la complétude est indispensable au théorème de Riesz (dans la preuve de Riesz, on projette sur le sous-espace fermé $\ker df_a$, ce qui utilise la complétude).

**Si on la retire.** *Sans complétude* : soit $E=c_{00}$ (suites réelles nulles à partir d'un certain rang) muni du produit scalaire $\langle x,y\rangle=\sum_n x_ny_n$, et $\varphi(x)=\sum_{n\ge1}x_n/n$. Par Cauchy–Schwarz, $|\varphi(x)|\le\big(\sum_n 1/n^2\big)^{1/2}\|x\|$, donc $\varphi$ est linéaire continue, et $f=\varphi$ est différentiable de différentielle $\varphi$ en tout point ([[ch05-differentielle-lineaire]]). Si un $v\in c_{00}$ vérifiait $\langle v,h\rangle=\varphi(h)$ pour tout $h$, alors avec $h=e_n$ ($1$ au rang $n$, $0$ ailleurs) on aurait $v_n=1/n$ pour tout $n$ : $v\notin c_{00}$. **Pas de gradient.** *Sans produit scalaire* (Banach non hilbertien, par exemple $\ell^1$) : $df_a$ existe toujours comme forme linéaire continue, mais il n'y a pas de gradient canonique ; l'objet intrinsèque est $df_a$.

### H2 — $f$ est à valeurs réelles

**Rôle.** $df_a$ doit être une forme linéaire $E\to\R$ pour appliquer Riesz.

**Si on la retire.** Pour $f:U\to\R^n$, $df_a$ n'est plus une forme linéaire et il n'y a pas « un » gradient : on a un gradient par composante $f_j$, et ils forment les lignes de la matrice jacobienne ([[ch05-matrice-jacobienne]]).

### H3 — $f$ différentiable en $a$ (avec $df_a$ **continue**)

**Rôle.** Riesz ne s'applique qu'aux formes linéaires **continues** ; c'est garanti car la définition de la différentielle exige $df_a\in\mathcal L(E;\R)$.

**Si on la retire.** L'existence de dérivées partielles ne suffit pas : $f(x,y)=\frac{xy}{x^2+y^2}$, $f(0,0)=0$, a $\partial_xf(0,0)=\partial_yf(0,0)=0$ mais n'est pas différentiable en $0$ ([[ch05-partielles-sans-differentiabilite]]) : le vecteur $(0,0)$ des dérivées partielles n'est pas un gradient au sens de cette définition (il ne donne pas l'approximation au premier ordre : $f(t,t)=1/2$ pour $t\neq0$).

## Exemples

* **$\R^n$ euclidien.** Avec $\langle x,y\rangle=\sum_i x_iy_i$, on a $df_a(h)=\sum_i\frac{\partial f}{\partial x_i}(a)h_i$ ([[ch05-differentielles-partielles]]), donc $\nabla f(a)=\big(\frac{\partial f}{\partial x_1}(a),\dots,\frac{\partial f}{\partial x_n}(a)\big)$. Exemple : $f(x,y)=x^2+3y^2$, $a=(1,1)$ : $df_a(h,k)=2h+6k$, $\nabla f(a)=(2,6)$.
* **Le gradient dépend du produit scalaire, pas $df_a$.** Sur $\R^n$, soit $S$ symétrique définie positive et $\langle x,y\rangle_S=x^{T}Sy$. Si $g$ est le gradient euclidien, alors $\nabla_Sf(a)=S^{-1}g$, car $\langle S^{-1}g,h\rangle_S=g^{T}S^{-1}Sh=g^{T}h=df_a(h)$. Avec $f(x,y)=x^2+3y^2$, $a=(1,1)$, $S=\mathrm{diag}(1,3)$ : $\nabla_Sf(a)=(2,2)$.
* **Norme au carré.** Sur un Hilbert $E$, $f(x)=\|x\|^2=\langle x,x\rangle$ : $f(a+h)-f(a)=2\langle a,h\rangle+\|h\|^2$ et $\|h\|^2=o(h)$, donc $df_a(h)=2\langle a,h\rangle$ et $\nabla f(a)=2a$. Dans $E=L^2([0,1])$, pour $f(u)=\int_0^1u(t)^2\,dt$ on obtient $\nabla f(u)=2u$ (une **fonction**).

**Propriétés géométriques.** *(i) Plus forte pente* : pour $\|h\|=1$, Cauchy–Schwarz donne $df_a(h)=\langle\nabla f(a),h\rangle\le\|\nabla f(a)\|$, avec égalité pour $h=\nabla f(a)/\|\nabla f(a)\|$ si $\nabla f(a)\neq0$. *(ii) Orthogonalité aux lignes de niveau* : si $\alpha$ est une courbe $C^1$ avec $\alpha(0)=a$ et $f\circ\alpha$ constante, alors $0=(f\circ\alpha)'(0)=df_a(\alpha'(0))=\langle\nabla f(a),\alpha'(0)\rangle$ ([[ch05-vecteur-tangent-courbe]]).

## Pièges

* > ⚠️ Ne pas confondre $df_a$ (forme linéaire, élément de $\mathcal L(E;\R)$, intrinsèque) et $\nabla f(a)$ (vecteur de $E$, qui **dépend du produit scalaire** choisi).
* Le gradient n'existe que pour $f$ **à valeurs réelles** ; pour $f$ vectorielle on parle de différentielle / jacobienne.
* En dimension infinie, il faut un Hilbert **complet** (sinon Riesz peut échouer) ; dans un Banach quelconque, on travaille avec $df_a$.
* Point critique : $df_a=0\iff\nabla f(a)=0$ (Riesz est injectif). En calcul des variations, « annuler le gradient » et « annuler la différentielle » sont la même condition.
