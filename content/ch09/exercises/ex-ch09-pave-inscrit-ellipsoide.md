---
id: ex-ch09-pave-inscrit-ellipsoide
type: exercise
chapters: [9]
title: Le plus grand pavé inscrit dans un ellipsoïde
source: "Classique (boîte de volume maximal inscrite dans un ellipsoïde, problème standard d'extrema liés)"
difficulty: 2
time: 25
tools: [ch09-sous-variete-equation-valeur-reguliere, ch09-ex-quadriques, ch09-extremum-local-differentielle-nulle, ch09-multiplicateurs-lagrange, ch09-ex-point-critique-restriction]
---
## Énoncé

Soient $a,b,c>0$ et
$$
E=\Big\{(x,y,z)\in\R^3\;;\;\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1\Big\}.
$$
On appelle *pavé inscrit dans $E$* un pavé (parallélépipède rectangle) $[-x,x]\times[-y,y]\times[-z,z]$, avec $x,y,z>0$, dont les huit sommets $(\pm x,\pm y,\pm z)$ sont sur $E$. Son volume est $8xyz$.

1. Montrer que $E$ est une sous-variété compacte de dimension $2$ de $\R^3$.
2. Soit $g(x,y,z)=xyz$ et $f=g_{|E}$. Montrer que $f$ atteint son maximum sur $E$, puis déterminer tous les points critiques de $f$.
3. En déduire le volume maximal d'un pavé inscrit dans $E$, et le pavé qui le réalise.
4. Montrer que pour tout $(x,y,z)\in\R^3$,
$$
|xyz|\le\frac{1}{3\sqrt3}\Big(x^2+y^2+z^2\Big)^{3/2}.
$$

## Indices

### Indice 1
Question 1 : $E$ est un ensemble de niveau d'une fonction de $\R^3$ dans $\R$. Question 2 : une fonction continue sur un compact atteint son maximum ; en un maximum d'une fonction sur une sous-variété, la différentielle s'annule sur l'espace tangent, ce qui se traduit par une relation de proportionnalité de gradients.

### Indice 2
Avec $\Phi(x,y,z)=\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}-1$, les multiplicateurs de Lagrange donnent : $p$ critique pour $f$ si et seulement s'il existe $w\in\R$ avec $\nabla g(p)=w\,\nabla\Phi(p)$, soit
$$
yz=\frac{2w x}{a^2},\qquad xz=\frac{2wy}{b^2},\qquad xy=\frac{2wz}{c^2}.
$$

### Indice 3
Multiplier la première équation par $x$, la deuxième par $y$, la troisième par $z$ : on obtient $xyz=2w\frac{x^2}{a^2}=2w\frac{y^2}{b^2}=2w\frac{z^2}{c^2}$, puis, en sommant, $3xyz=2w$. Distinguer $w=0$ et $w\ne0$. Pour la question 4, prendre $a=b=c=1$ puis utiliser l'homogénéité.

## Corrigé

**1.** La fonction $\Phi(x,y,z)=\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}-1$ est polynomiale, donc $C^\infty$ sur l'ouvert $\R^3$, et $E=\Phi^{-1}(\{0\})$. Sa différentielle est
$$
d\Phi_{(x,y,z)}(h,k,l)=\frac{2x}{a^2}h+\frac{2y}{b^2}k+\frac{2z}{c^2}l ,
$$
forme linéaire nulle si et seulement si $x=y=z=0$. Or $(0,0,0)\notin E$ ($\Phi(0)=-1$). Donc $d\Phi_p$ est non nulle, donc surjective sur $\R$, en tout $p\in E$ : $0$ est valeur régulière de $\Phi$ et, d'après la proposition IX.4.1 ([[ch09-sous-variete-equation-valeur-reguliere]]), $E$ est une sous-variété de dimension $3-1=2$ de $\R^3$ (c'est un cas particulier des quadriques de l'exemple IX.4.3, [[ch09-ex-quadriques]]).

$E$ est fermée (image réciproque du fermé $\{0\}$ par l'application continue $\Phi$) et bornée ($|x|\le a$, $|y|\le b$, $|z|\le c$ sur $E$), donc compacte.

**2.** *Existence.* $f$ est la restriction à $E$ de la fonction continue $g$, donc continue sur le compact non vide $E$ : elle atteint son maximum en un point $p^*$.

*Points critiques.* $f$ est la restriction à $E$ de $g$, de classe $C^\infty$ sur $\R^3$, et $E=\{\Phi=0\}$ avec $0$ valeur régulière (question 1) : on peut appliquer les multiplicateurs de Lagrange (proposition IX.7.35, [[ch09-multiplicateurs-lagrange]]) : $p=(x,y,z)\in E$ est critique pour $f$ si et seulement s'il existe $w\in\R$ tel que $dg_p=w\,d\Phi_p$, c'est-à-dire
$$
(1)\ \ yz=\frac{2w x}{a^2},\qquad (2)\ \ xz=\frac{2wy}{b^2},\qquad (3)\ \ xy=\frac{2wz}{c^2}.
$$
En multipliant (1) par $x$, (2) par $y$, (3) par $z$ :
$$
xyz=2w\frac{x^2}{a^2}=2w\frac{y^2}{b^2}=2w\frac{z^2}{c^2}.
$$
En sommant ces trois expressions et en utilisant $\Phi(p)=0$ : $3xyz=2w$.

* *Cas $w=0$.* Alors (1), (2), (3) donnent $yz=xz=xy=0$ : au moins deux coordonnées sont nulles. Avec $\Phi(p)=0$, on obtient les **six points** $(\pm a,0,0)$, $(0,\pm b,0)$, $(0,0,\pm c)$. Réciproquement, en ces points $\nabla g(p)=(yz,xz,xy)=0$, donc ils sont critiques (avec $w=0$).
* *Cas $w\ne0$.* Alors $\frac{x^2}{a^2}=\frac{y^2}{b^2}=\frac{z^2}{c^2}=\frac{xyz}{2w}$ et, leur somme valant $1$, chacun vaut $\frac13$ : $x=\pm\frac a{\sqrt3}$, $y=\pm\frac b{\sqrt3}$, $z=\pm\frac c{\sqrt3}$. Réciproquement, pour chacun de ces **huit points**, posons $w=\frac32xyz$ ($\ne0$) ; alors $\frac{2wx}{a^2}=3xyz\cdot\frac{x}{a^2}=yz\cdot\frac{3x^2}{a^2}=yz$, et de même pour (2), (3) : ils sont critiques.

$f$ a donc exactement **$14$ points critiques**.

**3.** Le maximum $p^*$ de $f$ sur $E$ est un extremum local, donc un point critique (théorème IX.7.31, [[ch09-extremum-local-differentielle-nulle]]) : $p^*$ est l'un des $14$ points de la question 2. Aux six premiers $f=0$ ; aux huit autres $f=\pm\frac{abc}{3\sqrt3}$, le signe étant celui du produit des signes des coordonnées. Le maximum de $f$ sur $E$ vaut donc
$$
\max_E f=\frac{abc}{3\sqrt3},
$$
atteint exactement aux quatre points $\frac1{\sqrt3}(\eps_1a,\eps_2b,\eps_3c)$ avec $\eps_1\eps_2\eps_3=1$.

Un pavé inscrit correspond à un point $(x,y,z)\in E$ avec $x,y,z>0$, de volume $8f(x,y,z)\le\frac{8abc}{3\sqrt3}$. Cette borne est atteinte en $(x,y,z)=\frac1{\sqrt3}(a,b,c)$, qui a ses coordonnées strictement positives. **Le volume maximal est $\frac{8abc}{3\sqrt3}$**, réalisé par le seul pavé $\big[-\frac a{\sqrt3},\frac a{\sqrt3}\big]\times\big[-\frac b{\sqrt3},\frac b{\sqrt3}\big]\times\big[-\frac c{\sqrt3},\frac c{\sqrt3}\big]$. (Contrôle : pour $a=b=c=1$, on trouve le cube de côté $2/\sqrt3$, de diagonale $2$, inscrit dans la boule unité.)

**4.** Avec $a=b=c=1$ ($E=\mathbb S^2$), la question 3 donne $xyz\le\frac1{3\sqrt3}$ sur $\mathbb S^2$ ; comme $(x,y,z)\in\mathbb S^2\Rightarrow(-x,y,z)\in\mathbb S^2$, on a aussi $-xyz=(-x)yz\le\frac1{3\sqrt3}$, d'où $|xyz|\le\frac1{3\sqrt3}$ pour tout $(x,y,z)\in\mathbb S^2$. Soit maintenant $u=(x,y,z)\ne0$ et $\rho=\norm u$. Alors $u/\rho\in\mathbb S^2$, et
$$
|xyz|=\rho^3\,\Big|\frac x\rho\cdot\frac y\rho\cdot\frac z\rho\Big|\le\frac{\rho^3}{3\sqrt3}=\frac{(x^2+y^2+z^2)^{3/2}}{3\sqrt3}.
$$
Pour $u=0$ l'inégalité est triviale. Elle équivaut, en posant $\alpha=x^2,\beta=y^2,\gamma=z^2$, à $\alpha\beta\gamma\le\big(\frac{\alpha+\beta+\gamma}3\big)^3$ : c'est l'inégalité arithmético-géométrique pour trois réels positifs.

## Pièges et variantes

* Lagrange ne fournit que des **candidats** : sans l'argument de compacité (question 1), rien ne garantit que le maximum existe. Toujours : existence (compacité), localisation (points critiques), comparaison des valeurs.
* Ne pas oublier les points critiques « dégénérés » du cas $w=0$ (les six sommets de l'ellipsoïde) : ici ils ne donnent pas le maximum, mais un oubli peut fausser la liste dans d'autres problèmes.
* Ne pas chercher les points où $\nabla g=0$ sur $\R^3$ (ce sont les axes) : ce ne sont pas les points critiques de $f$ sur $E$.
* Variante : le rectangle d'aire maximale inscrit dans l'ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ a pour sommets $(\pm\frac a{\sqrt2},\pm\frac b{\sqrt2})$ et pour aire $2ab$.
* Variante : en dimension $n$, le pavé maximal inscrit dans $\sum x_i^2/a_i^2=1$ a pour demi-côtés $a_i/\sqrt n$ et pour volume $2^n\,n^{-n/2}\prod a_i$ ; on en déduit l'inégalité arithmético-géométrique à $n$ termes.
