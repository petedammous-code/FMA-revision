---
id: ch01-def-multiplicite-zero
type: definition
chapter: 1
title: Multiplicité (ordre) d'un zéro ; zéro simple ; factorisation $f(z)=(z-z_0)^mh(z)$
ref: Définition I.11.2
page: 27
importance: 3
depends: [ch01-zeros-isoles, ch01-estimees-cauchy, ch01-holomorphe-analytique]
tags: [zeros, multiplicite, ordre, zero-simple, factorisation]
---
## Intuition

> 💡 Pour un polynôme, $1$ est racine **double** de $(z-1)^2(z+3)$ : le graphe « touche » l'axe sans le traverser, la dérivée s'annule aussi. Pour une fonction holomorphe, c'est pareil : près d'un zéro $z_0$, $f(z)$ se comporte comme $c\,(z-z_0)^m$ avec $c\neq0$, et l'entier $m$ mesure **à quelle vitesse** $f$ s'annule.

On lit $m$ sur la série de Taylor : c'est l'indice du premier coefficient non nul, c'est-à-dire le plus petit $n$ tel que la dérivée $n$-ième $f^{(n)}(z_0)$ soit non nulle. Les dérivées $f^{(n)}$ existent à tout ordre car une fonction holomorphe est $C^\infty$ et développable en série entière ([[ch01-holomorphe-analytique]], [[ch01-estimees-cauchy]]).

Le fait que cet entier **existe** (qu'on ne tombe pas sur $f^{(n)}(z_0)=0$ pour tout $n$) est exactement ce que montre la preuve du principe des zéros isolés ([[ch01-zeros-isoles]]), à condition que $\Omega$ soit connexe et $f$ non identiquement nulle. Dans tout le chapitre II, on comptera zéros et pôles « avec multiplicité ».

## Énoncé

**Définition (poly, Définition I.11.2, p. 27).** Soient $\Omega$ un ouvert connexe, $f$ une fonction holomorphe sur $\Omega$ non identiquement nulle, et $z_0$ un zéro de $f$. La démonstration du principe des zéros isolés ([[ch01-zeros-isoles]]) montre que l'entier
$$
m(z_0):=\min\{n\ge0 : f^{(n)}(z_0)\neq0\}
$$
est bien défini, et $m(z_0)\ge1$ puisque $f(z_0)=0$. On l'appelle la **multiplicité** (ou l'**ordre**) du zéro $z_0$. De manière équivalente, $m(z_0)$ est l'unique entier $m\ge1$ tel que l'on puisse écrire
$$
f(z)=(z-z_0)^m\,h(z)
$$
au voisinage de $z_0$, avec $h$ holomorphe et $h(z_0)\neq0$. Un zéro de multiplicité $1$ est dit **simple**.

**Justification de l'équivalence.** Notons $a_n=f^{(n)}(z_0)/n!$ ; sur $D(z_0,\rho(z_0))$, $f(z)=\sum_{n\ge0}a_n(z-z_0)^n$ ([[ch01-estimees-cauchy]]).

* *Existence.* Avec $m=m(z_0)$, on a $a_n=0$ pour $n<m$, donc $f(z)=(z-z_0)^m h(z)$ où $h(z):=\sum_{n\ge m}a_n(z-z_0)^{n-m}$ est une série entière de même rayon (au moins $\rho(z_0)$), donc holomorphe ([[ch01-serie-entiere-holomorphe]]), et $h(z_0)=a_m\neq0$.
* *Réciproque.* Si $f=(z-z_0)^m h$ près de $z_0$ avec $h$ holomorphe, $h(z_0)\neq0$, la formule de Leibniz donne $f^{(n)}(z_0)=\sum_{k=0}^n\binom nk\big[(z-z_0)^m\big]^{(k)}(z_0)\,h^{(n-k)}(z_0)$. Or $\big[(z-z_0)^m\big]^{(k)}$ vaut en $z_0$ : $0$ si $k\neq m$, et $m!$ si $k=m$. Donc $f^{(n)}(z_0)=0$ pour $n<m$ et $f^{(m)}(z_0)=m!\,h(z_0)\neq0$ : $m=m(z_0)$.
* *Unicité.* Elle découle de la réciproque (les deux écritures donnent toutes deux $m=m(z_0)$).

**Caractérisation pratique.** $z_0$ est un zéro simple $\iff$ $f(z_0)=0$ et $f'(z_0)\neq0$. Plus généralement, $m(z_0)=m$ $\iff$ $f(z_0)=f'(z_0)=\dots=f^{(m-1)}(z_0)=0$ et $f^{(m)}(z_0)\neq0$.

## Hypothèses

### H1 — $\Omega$ connexe et $f$ non identiquement nulle

**Rôle.** Ces conditions garantissent que l'ensemble $\{n\ge0 : f^{(n)}(z_0)\neq0\}$ est **non vide**, donc que le $\min$ existe (preuve de [[ch01-zeros-isoles]]). En réalité, il suffit que $f$ ne soit pas identiquement nulle sur la composante connexe de $\Omega$ contenant $z_0$ ([[ch01-zeros-isoles-sans-connexite]]).

**Si on la retire.** Sur $\Omega=D(0,1)\cup D(3,1)$, la fonction $f$ égale à $0$ sur $D(0,1)$ et à $1$ sur $D(3,1)$ est holomorphe, non identiquement nulle, mais en $z_0=0$ toutes les dérivées sont nulles : $m(0)$ n'est pas défini (on conviendrait $m=+\infty$). Même chose pour $f\equiv0$.

### H2 — $f$ holomorphe

**Rôle.** Elle assure l'existence des dérivées de tout ordre et l'égalité de $f$ avec sa série de Taylor, qui donne la factorisation.

**Si on la retire.** $\varphi(x)=e^{-1/x^2}$ ($x\neq0$), $\varphi(0)=0$ est $C^\infty$ sur $\R$, avec $\varphi^{(n)}(0)=0$ pour tout $n$, mais $\varphi$ ne s'annule qu'en $0$ : il n'y a pas d'ordre fini, et pas de factorisation $x^m h(x)$ avec $h(0)\neq0$. Et $z\mapsto|z|$ (non holomorphe) s'annule en $0$ sans être de la forme $z^m h(z)$ avec $h$ holomorphe.

## Exemples

* **$f(z)=z^2$ en $0$.** $f(0)=f'(0)=0$, $f''(0)=2\neq0$ : $m(0)=2$ ; ici $h\equiv1$.
* **$f(z)=\sin z$ en $0$.** $f'(0)=\cos0=1\neq0$ : zéro simple, et $\sin z=z\,h(z)$ avec $h(z)=\sum_{k\ge0}\frac{(-1)^kz^{2k}}{(2k+1)!}$, $h(0)=1$.
* **$f(z)=1-\cos z$ en $0$.** $f'(z)=\sin z$, $f''(z)=\cos z$ : $f(0)=f'(0)=0$, $f''(0)=1\neq0$, donc $m(0)=2$. En effet $1-\cos z=z^2\big(\frac12-\frac{z^2}{24}+\dots\big)$.
* **$f(z)=\sin z-z$ en $0$.** $\sin z-z=-\frac{z^3}{6}+\frac{z^5}{120}-\dots=z^3\big(-\frac16+\frac{z^2}{120}-\dots\big)$ : $m(0)=3$. Vérification : $f'''(z)=-\cos z$, $f'''(0)=-1\neq0$.
* **Polynômes.** Si $P(z)=c\prod_j(z-\alpha_j)^{m_j}$ avec les $\alpha_j$ distincts et $c\neq0$, la multiplicité du zéro $\alpha_j$ au sens ci-dessus est l'exposant $m_j$ (prendre $h=c\prod_{k\neq j}(z-\alpha_k)^{m_k}$, qui ne s'annule pas en $\alpha_j$).
* **$f(z)=e^z-1$ en $2i\pi k$** ($k\in\Z$) : $f'(z)=e^z$, $f'(2i\pi k)=1\neq0$, zéros tous simples.

## Pièges

* > ⚠️ La multiplicité est définie pour un **zéro** : $m(z_0)\ge1$. Ne pas écrire $m(z_0)=0$ quand $f(z_0)\neq0$ (même si la formule $\min\{n\ge0 : f^{(n)}(z_0)\neq0\}$ donnerait $0$).
* Dans la factorisation, il faut $h$ **holomorphe** et $h(z_0)\neq0$ ; $h$ n'est définie que **près** de $z_0$ (sur un disque), pas forcément sur tout $\Omega$ — bien que, ici, $h=f/(z-z_0)^m$ se prolonge en fait à tout $\Omega$.
* Simple $\iff f'(z_0)\neq0$ : ne pas confondre avec « $f'$ ne s'annule pas sur $\Omega$ ».
* Le même mot « multiplicité » sert pour les **pôles** au chapitre II, avec $f=(z-z_0)^{-m}h$ ; ne pas mélanger les signes.
* Composition : si $g$ a un zéro d'ordre $p$ en $z_0$ et $f$ un zéro d'ordre $q$ en $g(z_0)=0$, alors $f\circ g$ a un zéro d'ordre $pq$ en $z_0$ (et non $p+q$, qui est l'ordre du produit $fg$ quand $f$ et $g$ s'annulent toutes deux en $z_0$).
