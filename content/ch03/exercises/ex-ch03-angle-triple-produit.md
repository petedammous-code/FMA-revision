---
id: ex-ch03-angle-triple-produit
type: exercise
chapters: [3]
title: Un produit infini « angle triple » pour sin z / z
source: "Inventé (variante « angle triple » de la formule de Viète)"
difficulty: 3
time: 40
tools: [ch03-produits-infinis, ch03-convergence-normale-definition, ch03-weierstrass-series]
---
## Énoncé

Pour $w\in\C$, on pose $c(w)=\dfrac{1+2\cos(2w)}{3}$, et pour $n\ge1$ et $z\in\C$, $c_n(z)=c(z/3^n)=\dfrac{1+2\cos(2z/3^n)}{3}$.

1. Vérifier que $\sin(3w)=3\,c(w)\sin w$ pour tout $w\in\C$, puis que pour tout $N\ge1$ et tout $z\in\C$,
$$
\sin z=3^N\sin\!\Bigl(\frac{z}{3^N}\Bigr)\prod_{n=1}^N c_n(z).
$$
2. Montrer que le produit $F(z)=\prod_{n\ge1}c_n(z)$ converge localement uniformément sur $\C$ vers une fonction entière $F$.
3. Montrer que $F(z)=\dfrac{\sin z}{z}$ pour $z\ne0$, et $F(0)=1$.
4. Déterminer, **à partir du produit** (sans utiliser 3), l'ensemble des zéros de $F$ et leur multiplicité, et vérifier la cohérence avec la question 3.
5. Montrer que pour $z\in\C\setminus\pi\Z$,
$$
\cot z-\frac1z=-\sum_{n\ge1}\frac{4\sin(2z/3^n)}{3^n\bigl(1+2\cos(2z/3^n)\bigr)},
$$
et en déduire les valeurs de $\displaystyle\prod_{n\ge1}\frac{1+2\cos(\pi/3^n)}{3}$ et de $\displaystyle\sum_{n\ge1}\frac{4\sin(\pi/3^n)}{3^n\bigl(1+2\cos(\pi/3^n)\bigr)}$.
6. Soit $G:\C\to\C$ une fonction continue en $0$, avec $G(0)=1$, telle que $G(3z)=c(z)\,G(z)$ pour tout $z\in\C$. Montrer que $G=F$.

## Indices

### Indice 1
Pour 1, développer $\sin(2w+w)$, ou utiliser $\sin^3$ en fonction de $\sin$. Pour 2, il y a un théorème qui transforme la convergence d'un produit $\prod(1+u_n)$ en celle d'une série : laquelle, et dans quel mode ?

### Indice 2
Théorème sur les produits infinis de fonctions holomorphes : il faut que $\sum_n(c_n-1)$ converge **localement normalement**. Calculer $c_n(z)-1$ à l'aide de $\cos(2u)-1=-2\sin^2u$, puis majorer $|\sin u|\le|u|\,e^{|u|}$ sur $\bar D(0,R)$.

### Indice 3
Pour 4 : $\cos a=-\frac12$ dans $\C$ équivaut à $a\in\pm\frac{2\pi}3+2\pi\Z$ ; les zéros de $c_n$ sont les $3^{n-1}\pi m$ avec $m\in\Z$ non multiple de $3$. Tout entier $k\ne0$ s'écrit de manière unique $3^{v}m$ avec $3\nmid m$. Pour 5 : dérivée logarithmique du produit, puis $z=\pi/2$. Pour 6 : itérer l'équation fonctionnelle $N$ fois.

## Corrigé

**1.** $\sin(3w)=\sin(2w)\cos w+\cos(2w)\sin w=2\sin w\cos^2w+\cos(2w)\sin w=\sin w\,\bigl(1+\cos(2w)+\cos(2w)\bigr)$, en utilisant $2\cos^2w=1+\cos(2w)$ (identités valables sur $\C$ par prolongement analytique, ou directement avec $\cos w=\frac{e^{iw}+e^{-iw}}2$). Donc $\sin(3w)=\sin w\,(1+2\cos 2w)=3c(w)\sin w$.

Récurrence sur $N$. Pour $N=1$, on applique l'identité à $w=z/3$ : $\sin z=3\sin(z/3)\,c(z/3)=3\sin(z/3)\,c_1(z)$. Si la formule est vraie au rang $N$, on applique l'identité à $w=z/3^{N+1}$ : $\sin(z/3^N)=3\sin(z/3^{N+1})\,c(z/3^{N+1})=3\sin(z/3^{N+1})\,c_{N+1}(z)$, et on reporte :
$$
\sin z=3^{N+1}\sin\!\Bigl(\frac{z}{3^{N+1}}\Bigr)\prod_{n=1}^{N+1}c_n(z).
$$

**2.** Posons $u_n=c_n-1$, fonction entière. Avec $\cos(2a)-1=-2\sin^2a$ :
$$
u_n(z)=\frac{2\cos(2z/3^n)-2}{3}=-\frac43\sin^2\!\Bigl(\frac{z}{3^n}\Bigr).
$$
Pour $u\in\C$, $|\sin u|=\bigl|\sum_{k\ge0}(-1)^k\frac{u^{2k+1}}{(2k+1)!}\bigr|\le|u|\sum_{k\ge0}\frac{|u|^{2k}}{(2k)!}\le|u|\,e^{|u|}$. Fixons $R>0$ ; pour $z\in\bar D(0,R)$ et $n\ge1$, $|z/3^n|\le R$, donc
$$
|u_n(z)|\le\frac43\Bigl(\frac{R}{3^n}\Bigr)^2e^{2R}=\frac43R^2e^{2R}\,9^{-n}.
$$
Ainsi $\norm{u_n}_{\infty,\bar D(0,R)}\le\frac43R^2e^{2R}9^{-n}$, terme général d'une série convergente : $\sum u_n$ converge normalement sur chaque $\bar D(0,R)$ ([[ch03-convergence-normale-definition]]), donc localement normalement sur $\C$. Les $u_n$ sont holomorphes sur $\C$. Le théorème sur les produits infinis ([[ch03-produits-infinis]]) s'applique : $\prod_{n=1}^N c_n=\prod_{n=1}^N(1+u_n)$ converge localement uniformément sur $\C$ vers une fonction entière $F$.

**3.** $F(0)=\lim_N\prod_{n=1}^N c_n(0)=1$ car $c_n(0)=\frac{1+2}{3}=1$. Soit $z\ne0$. Pour $N$ assez grand, $0<|z/3^N|<\pi$, donc $\sin(z/3^N)\ne0$ (les zéros de $\sin$ sont les $k\pi$, $k\in\Z$), et la question 1 donne
$$
\prod_{n=1}^N c_n(z)=\frac{\sin z}{3^N\sin(z/3^N)}=\frac{\sin z}{z}\cdot\frac{z/3^N}{\sin(z/3^N)}\xrightarrow[N\to\infty]{}\frac{\sin z}{z},
$$
puisque $\frac{\sin u}{u}\to1$ quand $u\to0$. Par unicité de la limite, $F(z)=\frac{\sin z}{z}$.

**4.** D'après le théorème ([[ch03-produits-infinis]]), $F(z_0)=0$ si et seulement si l'un des facteurs $c_n$ s'annule en $z_0$ ; cela n'arrive que pour un nombre fini de facteurs, et l'ordre du zéro de $F$ est la somme des ordres pour ces facteurs.

*Zéros de $c_n$.* Dans $\C$, $\cos a-\cos b=-2\sin\frac{a+b}2\sin\frac{a-b}2$, et $\sin$ ne s'annule que sur $\pi\Z$ ; donc $\cos a=\cos\frac{2\pi}3=-\frac12$ si et seulement si $a\in\frac{2\pi}3+2\pi\Z$ ou $a\in-\frac{2\pi}3+2\pi\Z$. Ainsi
$$
c_n(z)=0\iff\frac{2z}{3^n}=\pm\frac{2\pi}{3}+2\pi j\ (j\in\Z)\iff z=3^{n-1}\pi\,(\pm1+3j)\iff z=3^{n-1}\pi m,\ m\in\Z,\ 3\nmid m.
$$
Ces zéros sont simples : $c_n'(z)=-\frac{4}{3^{n+1}}\sin(2z/3^n)$, et en un zéro $\sin(2z/3^n)=\sin(\pm\frac{2\pi}3)=\pm\frac{\sqrt3}2\ne0$.

*Zéros de $F$.* Tout $k\in\Z\setminus\{0\}$ s'écrit de façon **unique** $k=3^{v}m$ avec $v\ge0$ et $3\nmid m$ ($v$ est l'exposant de $3$ dans $k$). Donc $k\pi$ est zéro d'exactement un facteur, $c_{v+1}$, et y est simple. Réciproquement les zéros des $c_n$ sont de cette forme, avec $k=3^{n-1}m\ne0$. Conclusion : les zéros de $F$ sont exactement les $k\pi$, $k\in\Z\setminus\{0\}$, tous simples. C'est cohérent avec $F(z)=\frac{\sin z}{z}$ : $\sin$ a des zéros simples en $\pi\Z$, et la division par $z$ supprime le zéro en $0$ (on a bien $F(0)=1$).

**5.** Toujours d'après [[ch03-produits-infinis]], sur $\C\setminus\pi\Z$ (où aucun $c_n$ ne s'annule, d'après 4),
$$
\frac{F'}{F}=\sum_{n\ge1}\frac{c_n'}{c_n},
$$
la série convergeant uniformément sur tout compact de $\C\setminus\pi\Z$. Or $\frac{c_n'(z)}{c_n(z)}=\frac{-\frac4{3^{n+1}}\sin(2z/3^n)}{\frac13\bigl(1+2\cos(2z/3^n)\bigr)}=-\frac{4\sin(2z/3^n)}{3^n\bigl(1+2\cos(2z/3^n)\bigr)}$, et, par 3, pour $z\notin\pi\Z$ : $\frac{F'(z)}{F(z)}=\frac{(\sin z)'}{\sin z}-\frac{(z)'}{z}=\cot z-\frac1z$. D'où la formule.

En $z=\frac\pi2$ (qui n'est pas dans $\pi\Z$) : $2z/3^n=\pi/3^n$, $\cot\frac\pi2=0$ et $F(\frac\pi2)=\frac{\sin(\pi/2)}{\pi/2}=\frac2\pi$. Donc
$$
\prod_{n\ge1}\frac{1+2\cos(\pi/3^n)}{3}=\frac2\pi,\qquad \sum_{n\ge1}\frac{4\sin(\pi/3^n)}{3^n\bigl(1+2\cos(\pi/3^n)\bigr)}=\frac1{\pi/2}-\cot\frac\pi2=\frac2\pi .
$$
*Contrôle* : le premier facteur vaut $\frac{1+2\cdot\frac12}{3}=\frac23$, le produit des deux premiers $\approx0{,}6399$ ; numériquement produit et série valent $0{,}636619\ldots=2/\pi$.

**6.** Fixons $z\in\C$. En appliquant l'équation fonctionnelle au point $z/3^n$, on a $G(z/3^{n-1})=c(z/3^n)\,G(z/3^n)=c_n(z)\,G(z/3^n)$. Par récurrence immédiate,
$$
G(z)=G\Bigl(\frac{z}{3^N}\Bigr)\prod_{n=1}^N c_n(z)\qquad(N\ge1).
$$
Quand $N\to\infty$, $z/3^N\to0$ donc $G(z/3^N)\to G(0)=1$ (continuité en $0$), et $\prod_{n=1}^Nc_n(z)\to F(z)$ (question 2). Donc $G(z)=F(z)$. (On vérifie que $F$ satisfait bien l'équation : $F(3z)=\frac{\sin 3z}{3z}=\frac{3c(z)\sin z}{3z}=c(z)F(z)$ pour $z\ne0$, et $F(0)=1=c(0)F(0)$.)

## Pièges et variantes

> ⚠️ Pour appliquer le théorème des produits infinis, c'est la série $\sum(c_n-1)$ qui doit converger **localement normalement**, pas la série $\sum c_n$ (qui diverge, $c_n\to1$) ni le produit « à vue ». Et la majoration doit être uniforme sur chaque compact $\bar D(0,R)$, la constante pouvant dépendre de $R$.

* À la question 3, ne pas oublier de justifier que $\sin(z/3^N)\ne0$ pour $N$ grand avant de diviser.
* À la question 4, le théorème garantit que les zéros du produit sont **exactement** ceux des facteurs (pas de zéro « créé à la limite ») : c'est tout l'intérêt de la convergence normale de $\sum(c_n-1)$. Comparer avec $\prod_{n\ge2}(1-\frac1n)=0$ (Remarque III.5.2) où aucun facteur n'est nul.
* Dans 6, la continuité en $0$ est indispensable : $\tilde G(z)=F(z)\exp\bigl(2i\pi\frac{\ln|z|}{\ln3}\bigr)$ pour $z\ne0$, $\tilde G(0)=1$, vérifie $\tilde G(3z)=c(z)\tilde G(z)$ mais $\tilde G\ne F$.
* Variante (Viète, 1593) : avec $\sin(2w)=2\sin w\cos w$, on obtient $\frac{\sin z}{z}=\prod_{n\ge1}\cos(z/2^n)$, et en $z=\pi/2$ la formule $\frac2\pi=\frac{\sqrt2}2\cdot\frac{\sqrt{2+\sqrt2}}2\cdots$ ; la dérivée logarithmique donne $\sum_{n\ge1}2^{-n}\tan(z/2^n)=\frac1z-\cot z$.
