---
id: ch01-zeros-isoles
type: theorem
chapter: 1
title: Principe des zéros isolés
ref: Théorème I.11.1
page: 27
importance: 3
depends: [ch01-estimees-cauchy, ch01-holomorphe-analytique, ch01-serie-entiere-derivees-tout-ordre, ch01-serie-entiere-holomorphe]
tags: [zeros-isoles, connexite, analytique, multiplicite, rigidite]
---
## Intuition

> 💡 Un polynôme non nul de degré $d$ a au plus $d$ racines. Une fonction holomorphe est un « polynôme de degré infini » (somme de sa série de Taylor) : elle peut avoir une infinité de zéros, mais ils ne peuvent pas **s'agglutiner** à l'intérieur du domaine. Près d'un zéro $z_0$, $f(z)\approx a_N(z-z_0)^N$ avec $a_N\neq0$, qui ne s'annule qu'en $z_0$.

L'autre face : si les zéros s'accumulent en un point de $\Omega$, alors toutes les dérivées y sont nulles, $f$ est nulle sur un disque, et — grâce à la **connexité** — la nullité se propage à tout $\Omega$. C'est la rigidité des fonctions holomorphes, totalement absente pour les fonctions $C^\infty$ réelles.

Vocabulaire. Un ouvert $\Omega$ est **connexe** s'il n'est pas réunion de deux ouverts disjoints non vides ; de façon équivalente, toute partie de $\Omega$ à la fois ouverte et fermée dans $\Omega$ est $\emptyset$ ou $\Omega$. « $f$ non identiquement nulle » signifie : il existe $z\in\Omega$ avec $f(z)\neq0$. Un zéro $z_0$ est **isolé** s'il existe un voisinage épointé de $z_0$ sans autre zéro (cf. [[ch01-def-point-accumulation]]).

## Énoncé

**Théorème (poly, Théorème I.11.1 — Principe des zéros isolés (Riemann 1851, Weierstrass 1877), p. 27).** Soit $\Omega$ un ouvert connexe et $f$ une fonction holomorphe sur $\Omega$ non identiquement nulle. Alors, les zéros de $f$ sont isolés. C'est-à-dire que, si $f(z_0)=0$, il existe $\eps>0$ tel que, pour tout $z\in\Omega\cap\big(D(z_0,\eps)\setminus\{z_0\}\big)$, $f(z)\neq0$.

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** L'ensemble $U$ des points où toutes les dérivées de $f$ s'annulent est ouvert et fermé dans $\Omega$ ; la connexité permet d'en déduire $U=\emptyset$ ou $U=\Omega$.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ (deux disques disjoints), $f=0$ sur $D(0,1)$ et $f=1$ sur $D(3,1)$ : $f$ est holomorphe sur $\Omega$, non identiquement nulle, mais aucun zéro n'est isolé. Sans connexité, on montre seulement que si un zéro n'est pas isolé, $f$ est nulle sur toute la composante connexe qui le contient ([[ch01-zeros-isoles-sans-connexite]]).

### H2 — $f$ holomorphe sur $\Omega$

**Rôle.** Elle donne l'analyticité : $f$ est somme de sa série de Taylor près de chaque point ([[ch01-estimees-cauchy]]), ce qui sert pour l'ouverture de $U$ et pour la factorisation $f=(z-z_0)^Nh$.

**Si on la retire.** $f(z)=\Im(z)$ est $C^\infty$ sur $\C$ (connexe), non identiquement nulle, et s'annule sur tout l'axe réel : ses zéros ne sont pas isolés. Même en variable réelle, $\varphi(x)=e^{-1/x^2}$ pour $x>0$, $\varphi(x)=0$ pour $x\le0$ est $C^\infty$ sur $\R$, non nulle, et nulle sur $]-\infty,0]$ : toutes ses dérivées en $0$ sont nulles sans qu'elle soit nulle ($C^\infty$ n'entraîne pas analytique).

### H3 — $f$ non identiquement nulle

**Rôle.** Elle assure $U\neq\Omega$ (un point où $f\neq0$ n'est pas dans $U$), donc $U=\emptyset$.

**Si on la retire.** $f\equiv0$ : tout point est un zéro non isolé.

## Idée de la preuve

$U=\{z\in\Omega:f^{(n)}(z)=0\ \forall n\ge0\}$ est fermé (intersection de fermés) et ouvert (série de Taylor nulle près d'un point de $U$) ; par connexité et $f\not\equiv0$, $U=\emptyset$. En un zéro $z_0$, il existe donc $N\ge1$ minimal avec $f^{(N)}(z_0)\neq0$, et $f(z)=(z-z_0)^Nh(z)$ avec $h$ continue, $h(z_0)\neq0$ : $f$ ne s'annule pas près de $z_0$, sauf en $z_0$.

## Preuve

Rappelons que $f$, holomorphe, est $C^\infty$ et que toutes ses dérivées complexes $f^{(n)}$ sont holomorphes, donc continues ([[ch01-holomorphe-analytique]], [[ch01-serie-entiere-derivees-tout-ordre]]). Posons
$$
U:=\{z\in\Omega:\ f^{(n)}(z)=0\ \text{ pour tout } n\ge0\}.
$$

**$U$ est fermé dans $\Omega$.** $U=\bigcap_{n\ge0}(f^{(n)})^{-1}(\{0\})$ est une intersection de fermés de $\Omega$ (images réciproques du fermé $\{0\}$ par des fonctions continues).

**$U$ est ouvert.** Soit $z_1\in U$. D'après les estimées de Cauchy ([[ch01-estimees-cauchy]]), $f$ est égale à sa série de Taylor sur le disque $D(z_1,\rho(z_1))$, où $\rho(z_1)>0$ :
$$
f(z)=\sum_{n\ge0}\frac{f^{(n)}(z_1)}{n!}(z-z_1)^n=0\qquad(z\in D(z_1,\rho(z_1))).
$$
Donc $f$ est nulle sur ce disque ouvert, et toutes ses dérivées aussi (les dérivées de la fonction nulle sur un ouvert sont nulles) : $D(z_1,\rho(z_1))\subset U$.

**$U=\emptyset$.** Comme $f$ n'est pas identiquement nulle, il existe $z\in\Omega$ avec $f(z)\neq0$, donc $z\notin U$ et $U\neq\Omega$. $\Omega$ étant connexe et $U$ ouvert-fermé, $U=\emptyset$. Conclusion : pour tout $z_0\in\Omega$, il existe $n\ge0$ tel que $f^{(n)}(z_0)\neq0$.

**Factorisation près d'un zéro.** Soit $z_0$ un zéro de $f$ et $N$ le plus petit entier tel que $f^{(N)}(z_0)\neq0$ ; $N\ge1$ puisque $f(z_0)=0$. Notons $a_n=\frac{f^{(n)}(z_0)}{n!}$, de sorte que $a_n=0$ pour $n<N$ et $a_N\neq0$. Sur $D(z_0,\rho(z_0))$,
$$
f(z)=\sum_{n\ge N}a_n(z-z_0)^n=(z-z_0)^N\Big(a_N+\sum_{n>N}a_n(z-z_0)^{n-N}\Big)=(z-z_0)^Nh(z),
$$
où $h(z):=\sum_{n\ge N}a_n(z-z_0)^{n-N}$. La série entière $\sum_{n\ge N}a_nw^{n-N}$ a le même rayon de convergence que $\sum_na_nw^n$ (pour $w\neq0$, les deux séries diffèrent par le facteur $w^N$ et un nombre fini de termes nuls), donc au moins $\rho(z_0)$ : $h$ est holomorphe, a fortiori continue, sur $D(z_0,\rho(z_0))$ ([[ch01-serie-entiere-holomorphe]]), et $h(z_0)=a_N\neq0$. Par continuité, il existe $0<\eps\le\rho(z_0)$ tel que $h(z)\neq0$ pour $z\in D(z_0,\eps)$. Alors, pour $z\in D(z_0,\eps)\setminus\{z_0\}$ (qui est inclus dans $\Omega$), $f(z)=(z-z_0)^Nh(z)$ est un produit de deux facteurs non nuls : $f(z)\neq0$. $\square$

L'entier $N$ est la **multiplicité** du zéro $z_0$ ([[ch01-def-multiplicite-zero]]).

## Preuve à trous

Posons $U=\{z\in\Omega:f^{(n)}(z)=0\ \forall n\ge0\}$. Il est fermé car <trou>intersection des fermés $(f^{(n)})^{-1}(\{0\})$, les $f^{(n)}$ étant continues</trou>. Il est ouvert car <trou indice="que vaut la série de Taylor en un point de $U$ ?">en $z_1\in U$, la série de Taylor de $f$ est nulle, et $f$ en est la somme sur $D(z_1,\rho(z_1))$, donc $f\equiv0$ sur ce disque, qui est inclus dans $U$</trou>. Comme $f\not\equiv0$, $U\neq\Omega$, donc <trou indice="où sert la connexité ?">$U=\emptyset$ par connexité de $\Omega$</trou>.
Si $f(z_0)=0$, soit $N\ge1$ minimal avec $f^{(N)}(z_0)\neq0$. Alors <trou indice="factoriser la série de Taylor">$f(z)=(z-z_0)^Nh(z)$ près de $z_0$, avec $h(z)=\sum_{n\ge N}a_n(z-z_0)^{n-N}$ holomorphe et $h(z_0)=a_N\neq0$</trou> ; par continuité $h\neq0$ sur un disque $D(z_0,\eps)$, donc $f\neq0$ sur $D(z_0,\eps)\setminus\{z_0\}$. $\square$

## Exemples

* **Une infinité de zéros isolés.** $f(z)=\sin(\pi z)$ sur $\C$ : ses zéros sont exactement les entiers ($\sin(\pi z)=0\iff e^{2i\pi z}=1\iff z\in\Z$). Chacun est simple : $f'(k)=\pi\cos(\pi k)=\pi(-1)^k\neq0$. « Isolé » ne veut pas dire « en nombre fini » ([[ch01-isole-ne-signifie-pas-fini]]).
* **Multiplicité.** $f(z)=1-\cos z$ en $z_0=0$ : $f(0)=0$, $f'(0)=\sin0=0$, $f''(0)=\cos0=1\neq0$, donc $N=2$ et $1-\cos z=z^2\big(\frac12-\frac{z^2}{24}+\cdots\big)$, avec $h(0)=\frac12\neq0$.
* **Accumulation au bord.** $f(z)=\sin(1/z)$ sur $\Omega=\C^\times$ (connexe) : ses zéros $\frac1{k\pi}$, $k\in\Z\setminus\{0\}$, s'accumulent en $0$, qui **n'est pas** dans $\Omega$ : aucune contradiction, chacun est isolé dans $\Omega$. En revanche, si $g\in\Hol(\C)$ vérifie $g(\frac1n)=0$ pour tout $n\ge1$, alors $g(0)=0$ par continuité, $0$ n'est pas un zéro isolé, et $g\equiv0$ (c'est le principe du prolongement analytique, [[ch01-prolongement-analytique]]).

## Pièges

* > ⚠️ La **connexité** de $\Omega$ est indispensable (contre-exemple des deux disques). Sur un ouvert non connexe, raisonner composante connexe par composante connexe.
* Les zéros peuvent s'accumuler **au bord** de $\Omega$ (ou à l'infini) : le théorème ne dit rien hors de $\Omega$. Pour appliquer le prolongement analytique, le point d'accumulation doit être **dans** $\Omega$.
* Isolé $\ne$ fini : sur un ouvert, une fonction holomorphe non nulle peut avoir une infinité de zéros ; ils sont seulement en nombre fini dans tout **compact** de $\Omega$ ([[ch01-ensemble-zeros-discret-ferme]]).
* Le résultat est faux pour les fonctions $C^\infty$ réelles ou les fonctions seulement $\R$-différentiables ($\Im z$) : c'est l'analyticité qui compte.
