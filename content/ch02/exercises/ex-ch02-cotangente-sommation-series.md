---
id: ex-ch02-cotangente-sommation-series
type: exercise
chapters: [2]
title: Sommer des séries avec la cotangente et les résidus
source: "Classique (méthode de Stein–Shakarchi, ch. 3, ex. 12 : intégrer π cot(πz) f(z) sur de grands contours)"
difficulty: 3
time: 40
tools: [ch02-formule-residus, ch02-formule-residus-pratique, ch02-residu-pole-simple, ch02-laurent-developpement, ch02-residu-def, ch02-meromorphes-operations, ch01-longueur-majoration-integrale]
---
## Énoncé

On note $c(z)=\pi\cot(\pi z)=\pi\dfrac{\cos(\pi z)}{\sin(\pi z)}$. Pour $N\in\N^*$, on note $Q_N$ le bord du carré de sommets $(N+\frac12)(\pm1\pm i)$, parcouru dans le sens direct.

1. Montrer que $c$ est méromorphe sur $\C$, que ses pôles sont exactement les entiers, qu'ils sont simples et de résidu $1$. Montrer que $c(z)=\dfrac1z-\dfrac{\pi^2}{3}z+O(z^3)$ au voisinage de $0$.
2. Montrer que $|\cot(\pi z)|\le\coth(\pi/2)$ pour tout $z\in Q_N$ et tout $N\in\N^*$. (On rappelle que $|\sin(x+iy)|^2=\sin^2x+\sinh^2y$ et $|\cos(x+iy)|^2=\cos^2x+\sinh^2y$ pour $x,y$ réels.)
3. Soit $a>0$. Montrer que
$$
\sum_{n\in\Z}\frac1{n^2+a^2}=\frac{\pi}{a}\coth(\pi a).
$$
4. En intégrant $\dfrac{c(z)}{z^2}$ sur $Q_N$, calculer $\displaystyle\sum_{n\ge1}\frac1{n^2}$. Vérifier la cohérence avec la question 3 quand $a\to0$.

## Indices

### Indice 1
Une somme $\sum_n F(n)$ peut se lire comme une somme de **résidus** : il faut une fonction méromorphe qui a un pôle simple de résidu $1$ en chaque entier, puis un contour qui grandit et sur lequel l'intégrale tend vers $0$.

### Indice 2
Avec $q(z)=\sin(\pi z)$, qui a un zéro simple en chaque entier $n$ ($q'(n)=\pi\cos(\pi n)\ne0$), la formule $\Res_n\big(\frac fq\big)=\frac{f(n)}{q'(n)}$ donne $\Res_n(c)=\frac{\pi\cos(\pi n)}{\pi\cos(\pi n)}=1$. Pour la question 2 : sur les côtés verticaux $x=\pm(N+\frac12)$, $\cot(\pi z)=-i\tanh(\pi y)$ ; sur les côtés horizontaux, $|\cot(\pi z)|\le\coth(\pi|y|)$.

### Indice 3
Appliquer la formule des résidus à $F(z)=\frac{c(z)}{z^2+a^2}$ sur $Q_N$ pour $N>a$ : pôles $-N,\dots,N$ et $\pm ia$ à l'intérieur, $\Res_n(F)=\frac1{n^2+a^2}$, $\Res_{\pm ia}(F)=-\frac{\pi\coth(\pi a)}{2a}$. Majorer $\left|\int_{Q_N}F\right|$ par longueur × sup. Pour la question 4, le pôle en $0$ de $c(z)/z^2$ est triple : lire son résidu sur le développement de la question 1.

## Corrigé

**1.** *Méromorphie.* $z\mapsto\sin(\pi z)$ est entière et non identiquement nulle sur le connexe $\C$, donc $\frac1{\sin(\pi z)}$ est méromorphe sur $\C$ ([[ch02-meromorphes-operations]]) ; en la multipliant par la fonction entière $\pi\cos(\pi z)$, $c$ est méromorphe sur $\C$.

*Pôles.* $\sin(\pi z)=\frac{e^{i\pi z}-e^{-i\pi z}}{2i}=0\iff e^{2i\pi z}=1\iff z\in\Z$. En $n\in\Z$, la dérivée de $q(z)=\sin(\pi z)$ vaut $\pi\cos(\pi n)=\pi(-1)^n\ne0$ : zéro simple. Comme $\pi\cos(\pi n)\ne0$, $n$ est un vrai pôle, simple, et ([[ch02-residu-pole-simple]], forme $\Res_{z_0}(f/q)=f(z_0)/q'(z_0)$)
$$
\Res_n(c)=\frac{\pi\cos(\pi n)}{\pi\cos(\pi n)}=1 .
$$
Hors de $\Z$, $c$ est holomorphe : les pôles sont exactement les entiers.

*Développement en $0$.* Avec $u=\pi z$ : $\sin u=u\big(1-\frac{u^2}6+O(u^4)\big)$ et $\cos u=1-\frac{u^2}2+O(u^4)$, donc
$$
u\cot u=\frac{1-\frac{u^2}{2}+O(u^4)}{1-\frac{u^2}{6}+O(u^4)}=\Big(1-\frac{u^2}2\Big)\Big(1+\frac{u^2}6\Big)+O(u^4)=1-\frac{u^2}3+O(u^4).
$$
Par conséquent $c(z)=\frac{\pi}{u}\,u\cot u=\frac1z\Big(1-\frac{\pi^2z^2}3+O(z^4)\Big)=\frac1z-\frac{\pi^2}{3}z+O(z^3)$ : c'est le développement de Laurent de $c$ en $0$ ([[ch02-laurent-developpement]], unicité), et $c$ est impaire (donc seules les puissances impaires apparaissent).

**2.** Notons $z=x+iy$ et $K=\coth(\pi/2)\approx1{,}0903$.

*Côtés verticaux* : $x=\pm(N+\frac12)$, $|y|\le N+\frac12$. Avec les formules rappelées : $|\sin(\pi z)|^2=\sin^2(\pi x)+\sinh^2(\pi y)=1+\sinh^2(\pi y)=\cosh^2(\pi y)$ (car $\sin^2(\pi(N+\frac12))=1$) et $|\cos(\pi z)|^2=\cos^2(\pi x)+\sinh^2(\pi y)=\sinh^2(\pi y)$. Donc $|\cot(\pi z)|=|\tanh(\pi y)|\le1\le K$.

*Côtés horizontaux* : $y=\pm(N+\frac12)$. Alors $|\cos(\pi z)|^2=\cos^2(\pi x)+\sinh^2(\pi y)\le1+\sinh^2(\pi y)=\cosh^2(\pi y)$ et $|\sin(\pi z)|^2\ge\sinh^2(\pi y)>0$, donc
$$
|\cot(\pi z)|\le\frac{\cosh(\pi|y|)}{\sinh(\pi|y|)}=\coth\big(\pi(N+\tfrac12)\big)\le\coth\Big(\frac\pi2\Big)=K,
$$
car $\coth$ est décroissante sur $]0,+\infty[$ et $\pi(N+\frac12)\ge\frac{3\pi}2\ge\frac\pi2$.

Ainsi $|c(z)|\le\pi K$ sur $Q_N$, **uniformément en $N$**. En particulier $c$ n'a pas de pôle sur $Q_N$ (ce qu'on voit aussi directement : un entier $n$ sur $Q_N$ vérifierait $|n|=N+\frac12$).

**3.** Fixons $a>0$ et $N>a$ entier. Soit $F(z)=\dfrac{c(z)}{z^2+a^2}$, méromorphe sur $\C$ (produit de méromorphes).

*Pôles et résidus.* Pôles : les entiers et $\pm ia$ (zéros simples de $z^2+a^2$ ; $c(\pm ia)$ est fini et non nul, voir ci-dessous).
* En $n\in\Z$ : $\frac1{z^2+a^2}$ est holomorphe en $n$ et $c$ a un pôle simple de résidu $1$, donc ([[ch02-residu-pole-simple]]) $\Res_n(F)=\frac1{n^2+a^2}$.
* En $ia$ : $\cot(i\pi a)=\frac{\cos(i\pi a)}{\sin(i\pi a)}=\frac{\cosh(\pi a)}{i\sinh(\pi a)}=-i\coth(\pi a)$, d'où $\Res_{ia}(F)=\frac{c(ia)}{2ia}=\frac{-i\pi\coth(\pi a)}{2ia}=-\frac{\pi\coth(\pi a)}{2a}$.
* En $-ia$ : $\Res_{-ia}(F)=\frac{c(-ia)}{-2ia}=\frac{c(ia)}{2ia}=-\frac{\pi\coth(\pi a)}{2a}$ ($c$ impaire).

*Formule des résidus.* $\C$ est simplement connexe ; $Q_N$ est le bord orienté dans le sens direct du carré ouvert (convexe) $U_N=\{|x|<N+\frac12,\ |y|<N+\frac12\}$, lacet simple $C^1$ par morceaux ; aucun pôle de $F$ sur $Q_N$ (les entiers par la question 2, et $\pm ia$ car $a<N+\frac12$). Les pôles dans $U_N$ sont $-N,\dots,N$ et $\pm ia$ ; l'indice de $Q_N$ y vaut $1$ (un carré convexe se déforme en un cercle centré en chacun de ses points intérieurs sans passer par ce point). La formule (II.6.1) ([[ch02-formule-residus-pratique]], cas particulier de [[ch02-formule-residus]]) donne
$$
\frac1{2i\pi}\int_{Q_N}F(z)\,dz=\sum_{n=-N}^N\frac1{n^2+a^2}-\frac{\pi\coth(\pi a)}{a}.
$$

*Majoration.* Sur $Q_N$, $|z|\ge N+\frac12$, donc $|z^2+a^2|\ge|z|^2-a^2\ge(N+\frac12)^2-a^2>0$, et $|c(z)|\le\pi K$. La longueur de $Q_N$ est $8(N+\frac12)$. Par [[ch01-longueur-majoration-integrale]] :
$$
\left|\frac1{2i\pi}\int_{Q_N}F\right|\le\frac1{2\pi}\cdot8\Big(N+\frac12\Big)\cdot\frac{\pi K}{(N+\frac12)^2-a^2}\xrightarrow[N\to\infty]{}0 .
$$
Donc $\sum_{n=-N}^N\frac1{n^2+a^2}\to\frac{\pi\coth(\pi a)}a$ : c'est le résultat (la série converge absolument, ses sommes partielles symétriques ont donc la même limite que la somme).

**4.** Soit $G(z)=\dfrac{c(z)}{z^2}$, méromorphe sur $\C$, de pôles les entiers.
* En $n\ne0$ : $\Res_n(G)=\frac1{n^2}$ (même argument qu'en 3).
* En $0$ : d'après la question 1, $G(z)=\frac1{z^3}-\frac{\pi^2}{3}\cdot\frac1z+O(z)$ ; pôle triple, et par définition du résidu comme coefficient de $\frac1z$ ([[ch02-residu-def]]), $\Res_0(G)=-\frac{\pi^2}3$.

Comme en 3 (mêmes vérifications, aucun pôle sur $Q_N$, indice $1$ dans $U_N$) :
$$
\frac1{2i\pi}\int_{Q_N}G=2\sum_{n=1}^N\frac1{n^2}-\frac{\pi^2}3,\qquad
\left|\frac1{2i\pi}\int_{Q_N}G\right|\le\frac1{2\pi}\cdot8\Big(N+\frac12\Big)\cdot\frac{\pi K}{(N+\frac12)^2}=\frac{4K}{N+\frac12}\to0 .
$$
Donc $\displaystyle\sum_{n\ge1}\frac1{n^2}=\frac{\pi^2}6$.

*Cohérence.* La question 3 donne $\sum_{n\ge1}\frac1{n^2+a^2}=\frac12\Big(\frac{\pi\coth(\pi a)}a-\frac1{a^2}\Big)$. Avec $\coth v=\frac1v+\frac v3+O(v^3)$ (inverse de $\tanh v=v-\frac{v^3}3+O(v^5)$), $\frac{\pi\coth(\pi a)}{a}=\frac1{a^2}+\frac{\pi^2}3+O(a^2)$, donc le membre de droite tend vers $\frac{\pi^2}6$ quand $a\to0$. Le membre de gauche tend vers $\sum\frac1{n^2}$ : la convergence de $\sum_n\frac{1}{n^2+a^2}$ est uniforme en $a\in[0,1]$ (majoration $\frac1{n^2+a^2}\le\frac1{n^2}$, convergence normale), donc on peut passer à la limite terme à terme. (Vérification numérique pour $a=1$ : $\sum_{n\in\Z}\frac1{n^2+1}=3{,}15335\ldots=\pi\coth\pi$.)

## Pièges et variantes

> ⚠️ **Le contour doit éviter les pôles et la borne doit être uniforme.** On passe entre deux entiers (côtés en $\pm(N+\frac12)$) ; un cercle de rayon $N$ passerait par les pôles $\pm N$. Et il faut une borne de $\cot(\pi z)$ **indépendante de $N$** : c'est tout l'objet de la question 2 (sur un cercle $|z|=N+\frac12$ c'est encore vrai mais plus pénible à établir).

* **Le résidu en un pôle multiple** : en $0$, $c(z)/z^2$ a un pôle d'ordre $3$ ; la formule $\lim(z-z_0)F(z)$ ne s'applique pas, il faut le développement de Laurent.
* **Sommes symétriques** : la formule des résidus donne $\sum_{-N}^N$ ; on conclut à la somme de la série parce qu'elle converge absolument.
* **Variante.** Avec $\frac{c(z)}{z^4}$ : $c(z)=\frac1z-\frac{\pi^2}3z-\frac{\pi^4}{45}z^3+O(z^5)$, donc $\Res_0=-\frac{\pi^4}{45}$ et $\sum_{n\ge1}\frac1{n^4}=\frac{\pi^4}{90}$.
* **Variante (séries alternées).** Avec $\frac{\pi}{\sin(\pi z)}$ (résidu $(-1)^n$ en $n$, et $\left|\frac{1}{\sin(\pi z)}\right|\le1$ sur $Q_N$ grâce aux formules de la question 2), on obtient $\sum_{n\in\Z}\frac{(-1)^n}{n^2+a^2}=\frac{\pi}{a\sinh(\pi a)}$.
