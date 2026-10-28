---
id: ch05-espace-multilineaires-norme
type: definition
chapter: 5
title: L'espace $\mathcal L(E_1,\dots,E_n;F)$ et sa norme
ref: non numéroté, section V.1.3, p. 94
page: 94
importance: 1
depends: [ch05-multilineaire-continue-caracterisation, ch05-lef-banach-norme-algebre]
tags: [multilineaire, bilineaire, norme, banach, differentielle-seconde]
---
## Intuition

> 💡 Comme pour les applications linéaires ([[ch05-norme-operateur-def]]), on mesure une application multilinéaire continue par son **pire facteur d'amplification**, mais ce facteur se compare maintenant au **produit** des tailles des arguments : $\|f(x_1,\dots,x_n)\|\le\|f\|\,\|x_1\|\cdots\|x_n\|$.

Pourquoi cet espace est central dans le chapitre : la différentielle seconde $d^2f_a$ d'une fonction est une application **bilinéaire** continue, élément de $\mathcal L(E,E;F)$, et la différentielle $p$-ième est $p$-linéaire ([[ch05-differentielle-seconde-def]]). Le critère « continue $\iff$ bornée sur le produit des boules unités » est [[ch05-multilineaire-continue-caracterisation]].

## Énoncé

**Définition (poly, section V.1.3, p. 94).** Soient $E_1,\dots,E_n$ et $F$ des espaces vectoriels normés. On note $\mathcal L(E_1,E_2,\dots,E_n;F)$ l'espace des applications multilinéaires **continues** de $E_1\times E_2\times\cdots\times E_n$ dans $F$. On le munit de la norme
$$
\|f\|=\sup_{(x_1,\dots,x_n)\in\bar B_{E_1}(0,1)\times\cdots\times\bar B_{E_n}(0,1)}\|f(x_1,\dots,x_n)\|_F ,
$$
de sorte que, pour tous $x_i\in E_i$,
$$
\|f(x_1,\dots,x_n)\|_F\le\|f\|\,\|x_1\|_{E_1}\cdots\|x_n\|_{E_n}.
$$
Comme dans le cas des applications linéaires, **si $F$ est un espace de Banach**, alors $\mathcal L(E_1,\dots,E_n;F)$ muni de cette norme est encore un espace de Banach. Notation : $\mathcal L(E^{\otimes m};F):=\mathcal L(E,E,\dots,E;F)$ ($m$ facteurs $E$) (poly, Exercice V.1.4, p. 95).

*Justifications (le poly les laisse au lecteur).*

* *$\|f\|<+\infty$* : c'est le critère (c) de [[ch05-multilineaire-continue-caracterisation]].
* *L'inégalité* : si un $x_i$ est nul les deux membres sont nuls ; sinon on applique la définition du sup à $(x_1/\|x_1\|,\dots,x_n/\|x_n\|)$ et on utilise la multilinéarité.
* *C'est une norme* : comme pour [[ch05-lef-banach-norme-algebre]] (si $\|f\|=0$, l'inégalité donne $f=0$ ; homogénéité et inégalité triangulaire se vérifient point par point avant de passer au sup).
* *Complétude si $F$ est de Banach* : si $(f_k)$ est de Cauchy, alors $\|f_k(x)-f_l(x)\|\le\|f_k-f_l\|\prod_i\|x_i\|$, donc $f_k(x)$ converge vers un $f(x)$, et $f$ est multilinéaire. Pour $k,l\ge N$, $\|f_k(x)-f_l(x)\|\le\eps\prod_i\|x_i\|$ ; avec $l\to+\infty$ : $\|f_k(x)-f(x)\|\le\eps\prod_i\|x_i\|$. Donc $f_k-f$ est bornée sur le produit des boules unités, donc continue (Proposition V.1.3), donc $f\in\mathcal L(E_1,\dots,E_n;F)$ et $\|f_k-f\|\le\eps$ pour $k\ge N$.

## Hypothèses

### H1 — continuité des $f$

**Rôle.** Elle garantit $\|f\|<+\infty$ (Proposition V.1.3). Pour une application multilinéaire non continue, le sup vaut $+\infty$.

### H2 — $F$ de Banach (pour la complétude seulement)

**Rôle.** La limite $f(x)=\lim_k f_k(x)$ se construit dans $F$. Sans complétude de $F$, le résultat tombe déjà pour $n=1$, $E_1=\R$ : $\mathcal L(\R;F)$ est isométrique à $F$ (voir [[ch05-lef-banach-norme-algebre]]).

### H3 — norme sup sur le produit des boules **fermées**

**Rôle.** Convention du poly. Prendre les boules ouvertes ou (lorsque les $E_i$ sont non nuls) les sphères unités donne la même valeur (même argument d'homogénéité que pour les applications linéaires), et l'on a aussi, si les $E_i$ sont non nuls, $\|f\|=\sup_{x_i\ne0}\dfrac{\|f(x_1,\dots,x_n)\|}{\|x_1\|\cdots\|x_n\|}$.

## Exemples

* **Produit scalaire.** Sur $\R^d$ euclidien, $f(x,y)=\langle x,y\rangle$ : Cauchy–Schwarz donne $|f(x,y)|\le\|x\|\,\|y\|$, et $f(e_1,e_1)=1$. Donc $\|f\|_{\mathcal L(\R^d,\R^d;\R)}=1$.
* **Déterminant.** Sur $\R^2$ euclidien, $f(u,v)=\det(u,v)=u_1v_2-u_2v_1$ : $|\det(u,v)|=\|u\|\,\|v\|\,|\sin\theta|\le\|u\|\,\|v\|$ ($\theta$ angle entre $u$ et $v$), avec égalité pour $(e_1,e_2)$. Donc $\|\det\|=1$.
* **Composition.** Pour $E,F,G$ normés, $c:\mathcal L(F;G)\times\mathcal L(E;F)\to\mathcal L(E;G)$, $c(A,B)=AB$ est bilinéaire et $\|AB\|\le\|A\|\,\|B\|$ ([[ch05-lef-banach-norme-algebre]]) : $c$ est continue de norme $\le1$ (égale à $1$ si $E=F=G\ne\{0\}$, avec $A=B=\mathrm{Id}$).

## Pièges

* > ⚠️ La norme d'une application bilinéaire se compare au **produit** $\|x\|\,\|y\|$, pas à la norme du couple $(x,y)$ dans $E_1\times E_2$.
* $\mathcal L(E_1,E_2;F)$ (bilinéaires, deux arguments séparés par une virgule) et $\mathcal L(E_1\times E_2;F)$ (linéaires sur le produit) sont **différents** : $(x,y)\mapsto xy$ est dans le premier, pas dans le second ; $(x,y)\mapsto x+y$ est dans le second, pas dans le premier.
* Le lien avec $\mathcal L(E_1;\mathcal L(E_2;F))$ est une isométrie canonique, voir [[ch05-isometrie-bilineaire-curryfication]].
