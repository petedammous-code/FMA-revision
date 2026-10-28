---
id: ch05-graphe-ferme
type: theorem
chapter: 5
title: Théorème du graphe fermé
ref: Théorème V.2.5
page: 97
importance: 2
depends: [ch05-normes-comparables-equivalentes]
tags: [banach, graphe-ferme, continuite, application-lineaire]
---
## Intuition

> 💡 Pour montrer qu'une application linéaire $f$ entre Banach est continue, il faut en principe montrer : $x_n\to x\Rightarrow f(x_n)\to f(x)$. Le graphe fermé dit qu'on peut **supposer gratuitement** que $f(x_n)$ converge ; il ne reste qu'à identifier la limite.

Le **graphe** de $f:E\to F$ est la partie $\mathrm{Graphe}(f)=\{(x,f(x)),\ x\in E\}$ de l'espace produit $E\times F$, muni par exemple de la norme $\|(x,y)\|=\|x\|_E+\|y\|_F$. Il est **fermé** si : dès que $x_n\to x$ dans $E$ et $f(x_n)\to y$ dans $F$, on a $y=f(x)$. Une application continue a évidemment un graphe fermé ; la réciproque est fausse en général (voir H3), mais vraie pour les applications **linéaires** entre **Banach**. C'est une forme équivalente du théorème de l'application ouverte ([[ch05-application-ouverte]]).

## Énoncé

**Théorème (poly, Théorème V.2.5, p. 97).** Soient $E$ et $F$ des espaces de Banach, et soit $f:E\to F$ une application linéaire. Alors $f$ est continue si et seulement si son graphe
$$
\mathrm{Graphe}(f)=\{(x,f(x))\in E\times F,\ x\in E\}
$$
est fermé (dans $E\times F$).

**Forme séquentielle (équivalente).** $f$ est continue si et seulement si : pour toute suite $(x_n)$ de $E$ telle que $x_n\to x$ et $f(x_n)\to y$, on a $y=f(x)$.

## Hypothèses

### H1 — $E$ est un Banach

**Rôle.** Avec la complétude de $F$, elle assure que $(E,\|\cdot\|_f)$ est complet (une suite de Cauchy pour $\|\cdot\|_f$ est de Cauchy dans $E$, donc converge), et que $(E,\|\cdot\|_E)$ est complet : le corollaire [[ch05-normes-comparables-equivalentes]] exige les deux.

**Si on la retire.** $E=C^1([0,1])$ muni de $\|\cdot\|_\infty$ (non complet), $F=C([0,1])$ muni de $\|\cdot\|_\infty$, et $f=D:u\mapsto u'$. Le graphe est fermé : si $u_n\to u$ dans $E$ et $u_n'\to v$ uniformément, alors en passant à la limite dans $u_n(t)=u_n(0)+\int_0^tu_n'$ on obtient $u(t)=u(0)+\int_0^tv$, donc $u'=v$, c'est-à-dire $v=D(u)$. Mais $D$ n'est pas continue : $u_n(t)=\frac{\sin(nt)}n$ vérifie $\|u_n\|_\infty\le\frac1n\to0$ alors que $\|u_n'\|_\infty=\|\cos(n\,\cdot)\|_\infty=1$.

### H2 — $F$ est un Banach

**Rôle.** Si $(x_n)$ est de Cauchy pour $\|\cdot\|_f$, la suite $(f(x_n))$ est de Cauchy dans $F$ ; c'est la complétude de $F$ qui la fait converger, ce qui permet ensuite d'utiliser la fermeture du graphe.

**Si on la retire.** Exemple non constructif (axiome du choix) : soit $(G,\|\cdot\|)$ un Banach de dimension infinie et $\varphi$ une forme linéaire non continue sur $G$ ; posons $N(x)=\|x\|+|\varphi(x)|$. L'identité $g:(G,N)\to(G,\|\cdot\|)$ est continue ($\|x\|\le N(x)$) donc de graphe fermé ; le graphe de $f=g^{-1}=\mathrm{Id}:(G,\|\cdot\|)\to(G,N)$ s'en déduit en échangeant les coordonnées, il est donc fermé. Mais $f$ n'est pas continue (sinon $|\varphi|\le N\le C\|\cdot\|$). Ici $E=(G,\|\cdot\|)$ est un Banach et $F=(G,N)$ n'est pas complet.

### H3 — $f$ est linéaire (et définie sur tout $E$)

**Rôle.** La linéarité fait de $\|x\|_f=\|x\|_E+\|f(x)\|_F$ une **norme**, et transforme l'inégalité $\|f(x)\|_F\le(C-1)\|x\|_E$ en continuité. Le fait que $f$ soit définie sur **tout** l'espace de Banach $E$ est essentiel.

**Si on la retire.**
* *Non linéaire :* $f:\R\to\R$, $f(x)=\frac1x$ si $x\ne0$, $f(0)=0$. Le graphe est la réunion de l'hyperbole $\{xy=1\}$ (fermée dans $\R^2$) et du point $(0,0)$ : il est fermé. Mais $f$ n'est pas continue en $0$.
* *Définie seulement sur un sous-espace (« opérateur non borné ») :* la dérivation $D$ définie sur $C^1([0,1])\subset C([0,1])$ est à graphe fermé dans $C([0,1])\times C([0,1])$ et non continue (exemple de H1) : son domaine n'est pas un sous-espace fermé de $C([0,1])$.

## Idée de la preuve

On munit $E$ de la **norme du graphe** $\|x\|_f=\|x\|_E+\|f(x)\|_F$. Graphe fermé $\Leftrightarrow$ $(E,\|\cdot\|_f)$ complet. Cette norme domine $\|\cdot\|_E$ ; deux normes complètes comparables sont équivalentes, d'où $\|f(x)\|_F\le C'\|x\|_E$.

## Preuve

*Sens direct.* Si $f$ est continue, soit $(x_n,f(x_n))\to(x,y)$ dans $E\times F$. Alors $x_n\to x$, donc $f(x_n)\to f(x)$ par continuité, et par unicité de la limite $y=f(x)$ : le graphe est fermé.

*Réciproque.* Supposons le graphe fermé. Munissons $E$ de la seconde norme
$$
\|x\|_f=\|x\|_E+\|f(x)\|_F\qquad(x\in E).
$$
C'est une norme car $f$ est linéaire (homogénéité et inégalité triangulaire), et $\|x\|_f=0$ entraîne $\|x\|_E=0$. Elle est plus fine que $\|\cdot\|_E$ : $\|x\|_E\le\|x\|_f$.

*$(E,\|\cdot\|_f)$ est complet.* (C'est dire que $x\mapsto(x,f(x))$ est une isométrie de $(E,\|\cdot\|_f)$ sur $\mathrm{Graphe}(f)$, sous-espace fermé du complet $E\times F$.) Explicitement : soit $(x_n)$ de Cauchy pour $\|\cdot\|_f$. Alors $(x_n)$ est de Cauchy dans $E$ et $(f(x_n))$ est de Cauchy dans $F$ ; comme $E$ et $F$ sont complets, $x_n\to x\in E$ et $f(x_n)\to y\in F$. Le graphe étant fermé, $y=f(x)$, d'où
$$
\|x_n-x\|_f=\|x_n-x\|_E+\|f(x_n)-f(x)\|_F\longrightarrow0 .
$$

*Conclusion.* $E$ est complet pour $\|\cdot\|_E$ et pour $\|\cdot\|_f$, et ces normes sont comparables. Par [[ch05-normes-comparables-equivalentes]], elles sont équivalentes : il existe $C\ge1$ tel que $\|x\|_f\le C\|x\|_E$ pour tout $x\in E$, soit
$$
\|f(x)\|_F\le(C-1)\,\|x\|_E\qquad(x\in E).
$$
L'application linéaire $f$ est bornée, donc continue ([[ch05-norme-operateur-def]]). $\square$

## Preuve à trous

Le sens direct résulte de l'unicité de la limite. Réciproquement, supposons le graphe fermé et posons <trou indice="une norme qui « voit » à la fois x et f(x)">$\|x\|_f=\|x\|_E+\|f(x)\|_F$</trou>, norme plus fine que $\|\cdot\|_E$. Si $(x_n)$ est de Cauchy pour $\|\cdot\|_f$, alors $x_n\to x$ dans $E$ et $f(x_n)\to y$ dans $F$ <trou>par complétude de $E$ et de $F$</trou>, et <trou indice="c'est ici qu'intervient l'hypothèse sur le graphe">la fermeture du graphe donne $y=f(x)$, donc $x_n\to x$ pour $\|\cdot\|_f$</trou> : $(E,\|\cdot\|_f)$ est complet. Les deux normes complètes et comparables sont donc <trou>équivalentes (Corollaire V.2.4) : $\|x\|_f\le C\|x\|_E$</trou>, d'où $\|f(x)\|_F\le(C-1)\|x\|_E$ et $f$ est continue. $\square$

## Exemples

* **Hellinger–Toeplitz.** Soit $H$ un espace de Hilbert et $T:H\to H$ linéaire **symétrique** : $\langle Tx,y\rangle=\langle x,Ty\rangle$ pour tous $x,y$. Alors $T$ est continue. En effet, si $x_n\to x$ et $Tx_n\to z$, pour tout $y\in H$ : $\langle z,y\rangle=\lim\langle Tx_n,y\rangle=\lim\langle x_n,Ty\rangle=\langle x,Ty\rangle=\langle Tx,y\rangle$. Donc $z-Tx$ est orthogonal à tout $y$, d'où $z=Tx$ : graphe fermé.
* **Projecteurs.** Soit $E$ un Banach, $E=A\oplus B$ (somme directe algébrique) avec $A$, $B$ **fermés**, et $p$ le projecteur sur $A$ parallèlement à $B$. Si $x_n\to x$ et $p(x_n)\to a$, alors $a\in A$ ($A$ fermé) et $x_n-p(x_n)\to x-a$ avec $x_n-p(x_n)\in B$, donc $x-a\in B$ ($B$ fermé). Ainsi $x=a+(x-a)$ est la décomposition de $x$, et $p(x)=a$ : $p$ est continu.
* **Ce que le théorème ne fait pas.** Pour la dérivation $D$, il faudrait un espace de départ complet sur lequel $D$ est définie partout, par exemple $C^1([0,1])$ muni de $\|u\|_\infty+\|u'\|_\infty$ : $D$ y est trivialement continue de norme $\le1$.

## Pièges

* > ⚠️ « Graphe fermé » n'est **pas** « $x_n\to x\Rightarrow f(x_n)\to f(x)$ » : on suppose en plus que $f(x_n)$ converge, et on montre que sa limite est $f(x)$. C'est tout l'intérêt.
* Les trois hypothèses servent : $E$ Banach, $F$ Banach, $f$ linéaire **définie sur tout $E$** (les opérateurs différentiels sont fermés mais pas continus, car définis sur un sous-espace non fermé).
* Le graphe est fermé dans $E\times F$ muni de la topologie produit (norme $\|x\|_E+\|y\|_F$ ou toute norme équivalente), pas pour une autre topologie.
