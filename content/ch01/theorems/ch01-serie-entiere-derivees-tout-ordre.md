---
id: ch01-serie-entiere-derivees-tout-ordre
type: corollary
chapter: 1
title: "Une série entière admet des dérivées complexes de tout ordre, $f^{(k)}(z)=\sum_{n\ge k}n(n-1)\cdots(n-k+1)a_nz^{n-k}$"
ref: Corollaire I.3.4
page: 12
importance: 2
depends: [ch01-serie-entiere-holomorphe, ch01-def-rayon-convergence]
tags: [serie-entiere, derivees-successives, coefficients, taylor]
---
## Intuition

> 💡 La dérivée d'une série entière de rayon $R$ est encore une série entière de rayon $R$ ([[ch01-serie-entiere-holomorphe]]). On peut donc recommencer indéfiniment : une série entière est **indéfiniment $\C$-dérivable** sur son disque ouvert de convergence, et chaque dérivée s'obtient en dérivant terme à terme.

La conséquence la plus utile : en évaluant la $k$-ième dérivée en $0$, tous les termes disparaissent sauf un, et l'on **lit les coefficients** sur les dérivées : $a_k=\frac{f^{(k)}(0)}{k!}$. Une série entière est donc la série de Taylor de sa somme.

Notation : $f^{(0)}=f$ et $f^{(k+1)}=(f^{(k)})'$ (dérivée **complexe**). Le produit $n(n-1)\cdots(n-k+1)$ vaut $\frac{n!}{(n-k)!}$ pour $n\ge k$ (et $1$ si $k=0$).

## Énoncé

**Corollaire (poly, Corollaire I.3.4, p. 12).** Une série entière
$$
f(z):=\sum_{n\ge0}a_nz^n,
$$
à coefficients complexes, de rayon de convergence $R>0$, admet des dérivées au sens complexe de tout ordre sur $D(0,R)$, données par des séries entières de même rayon de convergence $R$ par les formules
$$
f^{(k)}(z)=\sum_{n\ge k}n(n-1)\cdots(n-k+1)\,a_n\,z^{n-k}\qquad(k\in\N,\ z\in D(0,R)).
$$
En particulier (conséquence immédiate, utilisée au Corollaire I.7.5), $a_k=\dfrac{f^{(k)}(0)}{k!}$ pour tout $k\in\N$.

## Hypothèses

### H1 — Rayon de convergence $R>0$

**Rôle.** C'est l'hypothèse de [[ch01-serie-entiere-holomorphe]], que l'on applique à chaque étape de la récurrence.

**Si on la retire.** Pour $R=0$ (par exemple $a_n=n!$), la série ne converge qu'en $0$ : il n'y a aucun ouvert sur lequel dériver, l'énoncé est vide.

### H2 — On se place sur le disque **ouvert** $D(0,R)$

**Rôle.** La proposition [[ch01-serie-entiere-holomorphe]] ne parle que du disque ouvert ; la récurrence aussi.

**Si on la retire.** Sur le cercle, chaque dérivation peut faire perdre de la régularité. Exemple : $f(z)=\sum_{n\ge1}\frac{z^n}{n^3}$ ($R=1$). La série de $f$ et celle de $f'(z)=\sum_{n\ge1}\frac{z^{n-1}}{n^2}$ convergent normalement sur $\bar D(0,1)$, mais celle de $f''(z)=\sum_{n\ge2}\frac{(n-1)z^{n-2}}{n^2}$ diverge en $z=1$ (son terme général en $1$ est $\frac{n-1}{n^2}\sim\frac1n$).

## Idée de la preuve

Récurrence sur $k$ : si $f^{(k)}$ est une série entière de rayon $R$ donnée par la formule, la Proposition I.3.3 ([[ch01-serie-entiere-holomorphe]]) s'applique à elle ; on dérive terme à terme et on réindexe.

## Preuve

On montre par récurrence sur $k\in\N$ la propriété $(\mathcal P_k)$ : « $f$ est $k$ fois $\C$-dérivable sur $D(0,R)$ et $f^{(k)}(z)=\sum_{n\ge k}\frac{n!}{(n-k)!}a_nz^{n-k}$, série entière de rayon $R$ ».

* $(\mathcal P_0)$ est l'hypothèse ($\frac{n!}{n!}=1$).
* Supposons $(\mathcal P_k)$. Écrivons $f^{(k)}(z)=\sum_{m\ge0}b_mz^m$ avec $b_m=\frac{(m+k)!}{m!}a_{m+k}$ (on a posé $m=n-k$) ; c'est une série entière de rayon $R>0$. Par [[ch01-serie-entiere-holomorphe]], elle est holomorphe sur $D(0,R)$, sa dérivée est
$$
f^{(k+1)}(z)=\sum_{m\ge1}m\,b_mz^{m-1}=\sum_{m\ge1}\frac{(m+k)!}{(m-1)!}a_{m+k}z^{m-1},
$$
et cette série dérivée a le même rayon $R$. En posant $n=m+k$ (donc $m-1=n-(k+1)$ et $n\ge k+1$) :
$$
f^{(k+1)}(z)=\sum_{n\ge k+1}\frac{n!}{(n-(k+1))!}\,a_nz^{n-(k+1)},
$$
ce qui est $(\mathcal P_{k+1})$.

**Coefficients.** En $z=0$, dans la série de $f^{(k)}(0)$ tous les termes $n\ge k+1$ contiennent $0^{n-k}=0$ ; il reste le terme $n=k$ : $f^{(k)}(0)=k!\,a_k$. $\square$

## Preuve à trous

Récurrence sur $k$. Si $f^{(k)}(z)=\sum_{n\ge k}\frac{n!}{(n-k)!}a_nz^{n-k}$ est une série entière de rayon $R$, on l'écrit $\sum_{m\ge0}b_mz^m$ avec <trou indice="poser $m=n-k$">$b_m=\frac{(m+k)!}{m!}a_{m+k}$</trou>. La Proposition I.3.3 appliquée à cette série donne <trou>$f^{(k+1)}(z)=\sum_{m\ge1}mb_mz^{m-1}$, série entière de même rayon $R$</trou>, et la réindexation $n=m+k$ fournit $f^{(k+1)}(z)=\sum_{n\ge k+1}\frac{n!}{(n-k-1)!}a_nz^{n-k-1}$.

En $z=0$ : <trou indice="quels termes survivent en $0$ ?">seul le terme $n=k$ ne s'annule pas, d'où $f^{(k)}(0)=k!\,a_k$</trou>. $\square$

## Exemples

* **Dérivées de la série géométrique.** Pour $|z|<1$, $\frac1{1-z}=\sum_{n\ge0}z^n$. D'une part $\frac{d^k}{dz^k}\frac1{1-z}=\frac{k!}{(1-z)^{k+1}}$ (récurrence immédiate) ; d'autre part le corollaire donne $\sum_{n\ge k}\frac{n!}{(n-k)!}z^{n-k}$. En divisant par $k!$ :
$$
\frac1{(1-z)^{k+1}}=\sum_{n\ge k}\binom nk z^{n-k}\qquad(|z|<1).
$$
Pour $k=1$, $z=\frac12$ : $\sum_{n\ge1}n\,2^{1-n}=4$.
* **Unicité des coefficients.** Si $\sum a_nz^n=\sum b_nz^n$ pour tout $z\in D(0,r)$, $r>0$ (deux séries de rayons $\ge r$), alors $a_k=\frac{f^{(k)}(0)}{k!}=b_k$ pour tout $k$ : on peut **identifier les coefficients**. Par exemple, $\sin$ étant impaire, $\sin z=\sum a_nz^n$ et $\sin(-z)=-\sin z$ donnent $(-1)^na_n=-a_n$, donc $a_{2p}=0$.
* **Exponentielle.** $\exp^{(k)}=\exp$ pour tout $k$ (récurrence sur $\exp'=\exp$), donc $\frac{\exp^{(k)}(0)}{k!}=\frac1{k!}$ : on retrouve les coefficients de $\sum\frac{z^n}{n!}$.

## Pièges

* > ⚠️ La somme commence à $n=k$ : les termes $n<k$ ont été tués par les dérivations successives (et $n(n-1)\cdots(n-k+1)=0$ pour $n<k$, donc on peut aussi sommer sur $n\ge0$ sans erreur, mais **pas** écrire $\frac{n!}{(n-k)!}$ pour $n<k$).
* La formule $a_k=\frac{f^{(k)}(0)}{k!}$ est valable pour une série **centrée en $0$** ; pour $\sum a_n(z-z_0)^n$, c'est $a_k=\frac{f^{(k)}(z_0)}{k!}$.
* Comme pour [[ch01-serie-entiere-holomorphe]], rien n'est dit sur le cercle $|z|=R$.
* Les dérivées sont des dérivées **complexes** ; en particulier $f$ est $C^\infty$ au sens réel sur $D(0,R)$. Le fait qu'une fonction **holomorphe quelconque** soit indéfiniment dérivable est un théorème bien plus profond ([[ch01-holomorphe-analytique]]), qui repose sur la formule de Cauchy.
