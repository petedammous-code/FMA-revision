---
id: ex-ch03-produit-cosinus-wallis
type: exercise
chapters: [3]
title: Produit infini du cosinus, formule de Wallis et somme des 1/(2n-1)²
source: "Classique (produit eulérien du cosinus ; cf. Stein–Shakarchi, Complex Analysis, ch. 5, et Remmert, Classical Topics in Complex Function Theory, ch. 1), adapté"
difficulty: 2
time: 25
tools: [ch03-produits-infinis, ch03-produit-sinus, ch03-weierstrass, ch03-convergence-normale-definition, ch01-def-multiplicite-zero]
---
## Énoncé

On admet la formule du produit eulérien du sinus : pour tout $z\in\C$,
$$
\sin(\pi z)=\pi z\prod_{n\ge1}\Bigl(1-\frac{z^2}{n^2}\Bigr),
$$
le produit convergeant localement uniformément sur $\C$. Pour $N\ge1$ et $z\in\C$, on pose
$$
S_N(z)=\prod_{n=1}^N\Bigl(1-\frac{z^2}{n^2}\Bigr),\qquad C_N(z)=\prod_{n=1}^N\Bigl(1-\frac{4z^2}{(2n-1)^2}\Bigr).
$$
1. Montrer que $(C_N)_N$ converge localement uniformément sur $\C$ vers une fonction entière $C$, et déterminer les zéros de $C$ ainsi que leur ordre.
2. Montrer que $C(z)=\cos(\pi z)$ pour tout $z\in\C$.
3. En déduire les deux produits numériques
$$
\frac{\pi}{2}=\prod_{n\ge1}\frac{(2n)^2}{(2n-1)(2n+1)}\quad\text{(Wallis)},\qquad \frac{\sqrt2}{2}=\prod_{n\ge1}\frac{(4n-3)(4n-1)}{(4n-2)^2}.
$$
4. Calculer $C_N''(0)$ et en déduire $\displaystyle\sum_{n\ge1}\frac{1}{(2n-1)^2}=\frac{\pi^2}{8}$, puis $\displaystyle\sum_{n\ge1}\frac1{n^2}=\frac{\pi^2}{6}$.

## Indices

### Indice 1
Question 1 : un produit $\prod(1+f_n)$ de fonctions holomorphes ; quel critère du cours garantit la convergence, l'holomorphie et la description des zéros ? Question 2 : relier $\sin(2\pi z)$, $\sin(\pi z)$ et $\cos(\pi z)$.

### Indice 2
Théorème III.5.1 avec $f_n(z)=-4z^2/(2n-1)^2$ : il faut la convergence **normale** de $\sum f_n$ sur tout disque $\bar D(0,R)$. Pour la question 2, séparer, dans $\prod_{m=1}^{2N}\bigl(1-\frac{(2z)^2}{m^2}\bigr)$, les indices $m$ pairs et impairs.

### Indice 3
On obtient $S_{2N}(2z)=S_N(z)\,C_N(z)$ ; multiplier par $2\pi z$ et faire $N\to\infty$ donne $\sin(2\pi z)=2\sin(\pi z)\,C(z)$. Pour la question 4, $C_N$ est un polynôme pair : $C_N(z)=1-\bigl(\sum_{n\le N}\frac{4}{(2n-1)^2}\bigr)z^2+O(z^4)$, et le théorème de Weierstrass dit que $C_N''(0)\to C''(0)$.

## Corrigé

**1.** Posons $f_n(z)=-\dfrac{4z^2}{(2n-1)^2}$, fonctions entières. Sur $\bar D(0,R)$, $\|f_n\|_{\infty,\bar D(0,R)}=\dfrac{4R^2}{(2n-1)^2}$ et $\sum_n\frac{4R^2}{(2n-1)^2}<\infty$ : la série $\sum f_n$ converge normalement sur chaque disque $\bar D(0,R)$, donc localement normalement sur $\C$ (tout compact est contenu dans un tel disque). Hypothèses du théorème des produits infinis ([[ch03-produits-infinis]], poly, Théorème III.5.1, p. 68) vérifiées : $C_N=\prod_{n=1}^N(1+f_n)$ converge localement uniformément sur $\C$ vers une fonction entière $C$, qui s'annule en $z$ **si et seulement si** un facteur s'annule en $z$, l'ordre du zéro étant la somme des ordres dans les facteurs.

Le facteur $1+f_n(z)=1-\frac{4z^2}{(2n-1)^2}$ s'annule exactement en $z=\pm\frac{2n-1}{2}$, et ce sont des zéros simples (sa dérivée $-\frac{8z}{(2n-1)^2}$ vaut $\mp\frac{4}{2n-1}\ne0$ en ces points, cf. [[ch01-def-multiplicite-zero]]). Les ensembles de zéros de deux facteurs distincts sont disjoints. Donc **les zéros de $C$ sont les demi-entiers $\frac12+\Z$, tous simples** — ce sont exactement ceux de $\cos(\pi z)$, ce qui suggère la question 2.

**2.** Fixons $z\in\C$ et $N\ge1$. Dans $S_{2N}(2z)=\prod_{m=1}^{2N}\bigl(1-\frac{4z^2}{m^2}\bigr)$, séparons $m=2n$ pair ($1\le n\le N$) et $m=2n-1$ impair ($1\le n\le N$) :
$$
S_{2N}(2z)=\prod_{n=1}^N\Bigl(1-\frac{4z^2}{4n^2}\Bigr)\prod_{n=1}^N\Bigl(1-\frac{4z^2}{(2n-1)^2}\Bigr)=S_N(z)\,C_N(z).
$$
Multiplions par $2\pi z$ : $\pi(2z)\,S_{2N}(2z)=2\,\bigl(\pi z\,S_N(z)\bigr)\,C_N(z)$. Quand $N\to\infty$ :
* $\pi w\,S_M(w)\to\sin(\pi w)$ pour tout $w$ (formule admise) ; la suite extraite $M=2N$, en $w=2z$, tend donc vers $\sin(2\pi z)$ ;
* $\pi z\,S_N(z)\to\sin(\pi z)$ et $C_N(z)\to C(z)$ (question 1).

D'où $\sin(2\pi z)=2\sin(\pi z)\,C(z)$ pour tout $z\in\C$. Comme $\sin(2\pi z)=2\sin(\pi z)\cos(\pi z)$, on obtient $\sin(\pi z)\,\bigl(C(z)-\cos(\pi z)\bigr)=0$. Pour $z\notin\Z$, $\sin(\pi z)\ne0$ (les zéros de $\sin(\pi z)$ sont les entiers), donc $C(z)=\cos(\pi z)$ sur $\C\setminus\Z$. Les deux fonctions étant continues et $\C\setminus\Z$ dense dans $\C$, l'égalité vaut partout :
$$
\cos(\pi z)=\prod_{n\ge1}\Bigl(1-\frac{4z^2}{(2n-1)^2}\Bigr)\qquad(z\in\C).
$$

**3.** *Wallis.* En $z=\frac12$ dans le produit du sinus : $1=\sin\frac\pi2=\frac\pi2\prod_{n\ge1}\bigl(1-\frac{1}{4n^2}\bigr)=\frac\pi2\prod_{n\ge1}\frac{(2n-1)(2n+1)}{(2n)^2}$. Les produits partiels $p_N=\prod_{n\le N}\frac{(2n-1)(2n+1)}{(2n)^2}$ tendent donc vers $\frac2\pi\ne0$, et leurs inverses $1/p_N=\prod_{n\le N}\frac{(2n)^2}{(2n-1)(2n+1)}$ tendent vers $\frac\pi2$.

*Second produit.* En $z=\frac14$ dans la question 2 : $\frac{\sqrt2}2=\cos\frac\pi4=\prod_{n\ge1}\Bigl(1-\frac{1}{4(2n-1)^2}\Bigr)$, et
$$
1-\frac{1}{(4n-2)^2}=\frac{(4n-2)^2-1}{(4n-2)^2}=\frac{(4n-3)(4n-1)}{(4n-2)^2}.
$$
(Vérification numérique : le produit partiel jusqu'à $n=2\cdot10^5$ vaut $0{,}707107\ldots$)

**4.** $C_N$ est un polynôme pair ; en développant le produit, $C_N(z)=1-a_Nz^2+(\text{termes de degré}\ge4)$ avec $a_N=\sum_{n=1}^N\frac{4}{(2n-1)^2}$. Donc $C_N''(0)=-2a_N=-8\sum_{n=1}^N\frac1{(2n-1)^2}$.

Les $C_N$ sont holomorphes sur $\C$ et convergent localement uniformément vers $C$ (question 1) : le théorème de Weierstrass ([[ch03-weierstrass]], poly, Théorème III.1.4, p. 60, point 2 avec $k=2$) donne $C_N''\to C''$ localement uniformément, en particulier $C_N''(0)\to C''(0)$. Or $C''(0)=\frac{d^2}{dz^2}\cos(\pi z)\big|_{z=0}=-\pi^2$. Donc
$$
-8\sum_{n\ge1}\frac{1}{(2n-1)^2}=-\pi^2,\qquad \sum_{n\ge1}\frac{1}{(2n-1)^2}=\frac{\pi^2}{8}.
$$
Enfin, en séparant pairs et impairs (séries à termes positifs) : $\zeta(2):=\sum_{n\ge1}\frac1{n^2}=\sum_{n\ge1}\frac{1}{(2n-1)^2}+\frac14\sum_{n\ge1}\frac1{n^2}$, d'où $\frac34\zeta(2)=\frac{\pi^2}8$ et $\zeta(2)=\frac{\pi^2}6$.

## Pièges et variantes

* « Mêmes zéros ⇒ mêmes fonctions » est **faux** : deux fonctions entières de mêmes zéros (avec multiplicité) diffèrent d'un facteur $e^{g}$, $g$ entière (par exemple $\cos(\pi z)$ et $e^{z}\cos(\pi z)$). La question 1 ne suffit donc pas ; c'est la relation de duplication (ou, dans le poly, la dérivée logarithmique) qui identifie $C$.
* Ne pas confondre la convergence d'une suite de produits partiels et celle de la **suite extraite** $S_{2N}$ : ici c'est légitime parce que la suite $(S_M)$ entière converge.
* Pour dériver deux fois la limite, il faut la convergence **localement uniforme** (Weierstrass), pas seulement la convergence simple des produits partiels.
* Variante (méthode du poly) : par le Théorème III.5.1, $C'/C=\sum_n\frac{-8z}{(2n-1)^2-4z^2}$ uniformément sur les compacts de $D(0,\frac12)$, ce qui donne $\pi\tan(\pi z)=\sum_{n\ge1}\frac{8z}{(2n-1)^2-4z^2}$ ; diviser par $z$ et faire $z\to0$ redonne $\pi^2/8$.
* Variante : en identifiant le coefficient de $z^4$ (via $C_N^{(4)}(0)\to C^{(4)}(0)=\pi^4$), on obtient $\sum_{n\ge1}\frac{1}{(2n-1)^4}=\frac{\pi^4}{96}$, puis $\zeta(4)=\frac{\pi^4}{90}$.
