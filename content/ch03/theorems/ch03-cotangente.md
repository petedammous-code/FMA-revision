---
id: ch03-cotangente
type: proposition
chapter: 3
title: "Formule de la cotangente : $\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$"
ref: Exemple III.6.2
page: 69
importance: 2
depends: [ch03-weierstrass, ch03-euler-sinus-carre, ch02-residu-def, ch02-pole-meromorphe-def]
tags: [cotangente, euler, series-de-fonctions, meromorphe, termes-correcteurs]
---
## Intuition

> 💡 $\pi\cot(\pi z)=\dfrac{\pi\cos(\pi z)}{\sin(\pi z)}=\dfrac{(\sin(\pi z))'}{\sin(\pi z)}$ est la **dérivée logarithmique** de $\sin(\pi z)$ : elle a un pôle simple de résidu $1$ en chaque entier (chaque zéro simple de $\sin(\pi z)$). On voudrait l'écrire comme la somme de ses parties singulières $\sum_n\frac1{z-n}$… mais cette série **diverge** (elle se comporte comme la série harmonique).

Le remède : ajouter à chaque terme une constante $\frac1n$ qui ne change pas la partie singulière mais rend le terme petit, $\frac1{z-n}+\frac1n=\frac z{n(z-n)}=O(1/n^2)$. Ou, ce qui revient au même, regrouper $n$ et $-n$ : $\frac1{z-n}+\frac1{z+n}=\frac{2z}{z^2-n^2}$. On identifie ensuite les deux membres en **dérivant** : on retombe sur la formule d'Euler [[ch03-euler-sinus-carre]].

Rappel : le **résidu** de $f$ en un pôle $a$ est le coefficient de $\frac1{z-a}$ dans le développement de Laurent ; pour un pôle simple, $\Res_a(f)=\lim_{z\to a}(z-a)f(z)$ ([[ch02-residu-def]]).

## Énoncé

**Proposition (poly, Exemple III.6.2 — formule de la cotangente, p. 69-70).** La fonction $z\mapsto\pi\cot(\pi z)=\pi\dfrac{\cos(\pi z)}{\sin(\pi z)}$ est méromorphe sur $\C$, $1$-périodique, de pôles les entiers, tous simples de résidu $1$ (car $\lim_{z\to0}z\,\pi\cot(\pi z)=1$). De plus
$$
(\forall z\in\C\setminus\Z)\qquad \pi\cot(\pi z)=\frac1z+\sum_{n\in\Z\setminus\{0\}}\Big(\frac1{z-n}+\frac1n\Big)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}. \qquad\text{(III.6.2)}
$$
La série $\sum_{n\ne0}\big(\frac1{z-n}+\frac1n\big)$ converge normalement sur $\bar D(0,R)$ une fois retirés les termes $|n|\le R$, pour tout $R>0$.

## Hypothèses

### H1 — $z\in\C\setminus\Z$

**Rôle.** Les deux membres ont un pôle simple en chaque entier ; l'égalité est une égalité de fonctions méromorphes, ponctuelle hors de $\Z$.

**Si on la retire.** En $z=n$, ni $\pi\cot(\pi n)$ ni le terme $\frac1{z-n}$ ne sont définis. Mais on peut retirer le pôle : $\pi\cot(\pi z)-\frac1z=\sum_{n\ge1}\frac{2z}{z^2-n^2}$ vaut aussi en $z=0$ (les deux membres valent $0$).

### H2 — Les termes correcteurs $+\frac1n$ (ou la sommation symétrique)

**Rôle.** Ils rendent la série des parties singulières normalement convergente sur les compacts : $\big|\frac1{z-n}+\frac1n\big|=\frac{|z|}{|n||z-n|}\le\frac R{|n|(|n|-R)}$ sur $\bar D(0,R)$.

**Si on la retire.** La série $\sum_{n\in\Z\setminus\{0\}}\frac1{z-n}$ diverge en tout $z\notin\Z$ : par exemple pour $z=1/2$ et $n\ge1$, $\frac1{1/2-n}=-\frac1{n-1/2}$ et $\sum_{n\ge1}\frac1{n-1/2}=+\infty$ (comparaison avec $\sum\frac1n$) ; la série des termes d'indices positifs diverge, donc la série indexée par $\Z\setminus\{0\}$ n'est pas (absolument, ni même en sommant les $n\ge1$ puis les $n\le-1$) convergente. Seule la sommation **symétrique** $\lim_N\sum_{0<|n|\le N}\frac1{z-n}$ converge, et elle redonne exactement $\sum_{n\ge1}\frac{2z}{z^2-n^2}$.

## Idée de la preuve

Les termes $\frac1{z-n}+\frac1n=\frac z{n(z-n)}$ sont en $O(1/n^2)$ uniformément sur les compacts : le membre de droite $g$ est méromorphe, **impair**, et se dérive terme à terme (Weierstraß) en $-\sum_n\frac1{(z-n)^2}=-\frac{\pi^2}{\sin^2(\pi z)}=(\pi\cot(\pi z))'$. Donc $g-\pi\cot(\pi z)$ est constante sur le connexe $\C\setminus\Z$, impaire, donc nulle.

## Preuve

**Étape 1 : la cotangente.** $\sin(\pi z)$ s'annule exactement sur $\Z$ et $\cos(\pi n)=\pm1\ne0$ : $\pi\cot(\pi z)$ est méromorphe sur $\C$, de pôles les entiers. Elle est $1$-périodique ($\cos$ et $\sin$ changent tous deux de signe quand $z\mapsto z+1$), donc l'étude locale se ramène à $0$. Comme $\frac{\sin(\pi z)}{\pi z}\to1$ et $\cos(\pi z)\to1$ quand $z\to0$, on a $\lim_{z\to0}z\,\pi\cot(\pi z)=1$ : $0$ est un pôle simple de résidu $1$, et il en est de même de tous les $n\in\Z$.

**Étape 2 : le membre de droite.** Fixons $R>0$. Pour $n\in\Z$ avec $|n|>R$, $f_n:z\mapsto\frac1{z-n}+\frac1n$ est holomorphe au voisinage de $\bar D(0,R)$ et
$$
\norm{f_n}_{\infty,\bar D(0,R)}=\sup_{z\in\bar D(0,R)}\Big|\frac1{z-n}+\frac1n\Big|=\sup_{z\in\bar D(0,R)}\Big|\frac z{n(z-n)}\Big|\le\frac R{|n|(|n|-R)} .
$$
Comme $\frac R{|n|(|n|-R)}\sim\frac R{n^2}$, la série $\sum_{|n|>R}f_n$ est normalement convergente sur $\bar D(0,R)$ et y définit une fonction holomorphe sur $D(0,R)$ (théorème de Weierstraß, [[ch03-weierstrass]]). Avec les termes en nombre fini $0<|n|\le R$ et $\frac1z$, on obtient une fonction méromorphe sur $D(0,R)$ de pôles les $n\in\Z$, $|n|\le R$. Ceci pour tout $R$ : 
$$
g(z):=\frac1z+\sum_{n\in\Z\setminus\{0\}}\Big(\frac1{z-n}+\frac1n\Big)
$$
est méromorphe sur $\C$, holomorphe sur $\C\setminus\Z$. La série étant absolument convergente, on peut regrouper les termes $n$ et $-n$ : $\big(\frac1{z-n}+\frac1n\big)+\big(\frac1{z+n}-\frac1n\big)=\frac{2z}{z^2-n^2}$, d'où la seconde expression $g(z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$. Sur celle-ci on voit que $g$ est **impaire**.

**Étape 3 : dérivation.** Par le théorème de Weierstraß (dérivation terme à terme, [[ch03-weierstrass]]), sur $\C\setminus\Z$,
$$
g'(z)=-\frac1{z^2}-\sum_{n\in\Z\setminus\{0\}}\frac1{(z-n)^2}=-\sum_{n\in\Z}\frac1{(z-n)^2}.
$$
D'après la formule d'Euler (III.6.1) ([[ch03-euler-sinus-carre]]), $g'(z)=-\dfrac{\pi^2}{\sin^2(\pi z)}$. Or $(\pi\cot(\pi z))'=\pi\cdot\dfrac{-\pi\sin^2(\pi z)-\pi\cos^2(\pi z)}{\sin^2(\pi z)}=-\dfrac{\pi^2}{\sin^2(\pi z)}$. Donc $\big(g-\pi\cot(\pi\,\cdot)\big)'=0$ sur $\C\setminus\Z$.

**Étape 4 : la constante.** Comme $\C\setminus\Z$ est **connexe** (par arcs), $g(z)-\pi\cot(\pi z)=c$ est constante. Mais $g$ et $\pi\cot(\pi\,\cdot)$ sont impaires, donc leur différence aussi : $c=-c$, $c=0$. D'où (III.6.2). $\square$

## Preuve à trous

$\pi\cot(\pi z)$ est méromorphe, $1$-périodique, à pôles simples de résidu $1$ aux entiers. Pour $|n|>R$, on écrit $\frac1{z-n}+\frac1n=$ <trou indice="réduire au même dénominateur">$\frac z{n(z-n)}$</trou>, donc sur $\bar D(0,R)$ ce terme est majoré par <trou>$\frac R{|n|(|n|-R)}=O(1/n^2)$</trou> : la série converge normalement sur les compacts (après retrait d'un nombre fini de termes) et $g(z)=\frac1z+\sum_{n\ne0}\big(\frac1{z-n}+\frac1n\big)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$ est méromorphe et impaire. Par Weierstraß, $g'(z)=$ <trou indice="dériver terme à terme puis utiliser la formule d'Euler">$-\sum_{n\in\Z}\frac1{(z-n)^2}=-\frac{\pi^2}{\sin^2(\pi z)}=(\pi\cot(\pi z))'$</trou>. Sur le connexe $\C\setminus\Z$, $g-\pi\cot(\pi\,\cdot)$ est donc constante, et <trou indice="une propriété de symétrie">cette constante est nulle car c'est une différence de deux fonctions impaires</trou>. $\square$

## Exemples

* **En $z=1/2$ (vérification).** $\pi\cot(\pi/2)=0$, et $2+\sum_{n\ge1}\frac{1}{1/4-n^2}=2-4\sum_{n\ge1}\frac1{4n^2-1}=2-4\sum_{n\ge1}\frac12\Big(\frac1{2n-1}-\frac1{2n+1}\Big)=2-4\cdot\frac12=0$. ✓
* **$\sum_{n\ge1}\frac1{n^2+a^2}$ pour $a>0$.** En $z=ia$ : $\cot(i\pi a)=\frac{\cos(i\pi a)}{\sin(i\pi a)}=\frac{\cosh(\pi a)}{i\sinh(\pi a)}=-i\coth(\pi a)$. La formule donne $-i\pi\coth(\pi a)=\frac1{ia}+\sum_{n\ge1}\frac{2ia}{-a^2-n^2}=-\frac ia-2ia\sum_{n\ge1}\frac1{n^2+a^2}$, d'où
$$
\sum_{n\ge1}\frac1{n^2+a^2}=\frac{\pi a\coth(\pi a)-1}{2a^2}.
$$
Contrôle : quand $a\to0$, $\pi a\coth(\pi a)=1+\frac{(\pi a)^2}3+O(a^4)$, et l'on retrouve $\sum1/n^2=\pi^2/6$.
* **Les $\zeta(2k)$.** Pour $|z|<1$, $\frac{2z}{z^2-n^2}=-\frac{2z}{n^2}\sum_{k\ge0}\frac{z^{2k}}{n^{2k}}$, et (série double absolument convergente) $\pi z\cot(\pi z)=1-2\sum_{k\ge1}\zeta(2k)z^{2k}$. En comparant avec $\pi z\cot(\pi z)=1-\frac{\pi^2z^2}3-\frac{\pi^4z^4}{45}-\cdots$, on obtient $\zeta(2)=\frac{\pi^2}6$, $\zeta(4)=\frac{\pi^4}{90}$.

## Pièges

* > ⚠️ $\sum_{n\in\Z}\frac1{z-n}$ **diverge** : on ne peut pas écrire « $\pi\cot(\pi z)=\sum_n\frac1{z-n}$ » sans préciser la sommation symétrique ou les termes correcteurs $+\frac1n$.
* La dérivation terme à terme ne donne la formule qu'**à une constante près** ; c'est l'imparité (ou une valeur particulière, par exemple en $z=1/2$) qui fixe la constante.
* La connexité de $\C\setminus\Z$ est indispensable pour conclure « dérivée nulle $\Rightarrow$ constante ».
* Ne pas confondre $\cot$ (cotangente circulaire) et $\coth$ ; en $z=ia$ on a $\cot(i\pi a)=-i\coth(\pi a)$.
