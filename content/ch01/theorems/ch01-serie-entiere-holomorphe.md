---
id: ch01-serie-entiere-holomorphe
type: proposition
chapter: 1
title: Une série entière est holomorphe sur son disque de convergence, de dérivée la série dérivée
ref: Proposition I.3.3
page: 11
importance: 2
depends: [ch01-def-rayon-convergence, ch01-def-holomorphe, ch01-def-c-derivable]
tags: [serie-entiere, rayon-convergence, derivation-terme-a-terme, holomorphe]
---
## Intuition

> 💡 Un polynôme $\sum_{n=0}^N a_nz^n$ est holomorphe et se dérive « terme à terme ». Une série entière est un « polynôme de degré infini » : à l'intérieur de son disque de convergence, les termes de haut degré sont si petits que tout se passe comme pour un polynôme. On peut donc dériver terme à terme, et la série dérivée converge sur le **même** disque.

Rappels de vocabulaire. Une **série entière** est une série de fonctions $\sum_{n\ge0}a_nz^n$ avec $a_n\in\C$. Son **rayon de convergence** $R\in[0,+\infty]$ ([[ch01-def-rayon-convergence]]) est le sup des $\rho\ge0$ tels que la suite $(|a_n|\rho^n)_{n\ge0}$ est bornée ; c'est aussi le sup des $\rho\ge0$ tels que la série converge normalement sur le disque fermé $\bar D(0,\rho)$. Le **disque ouvert de convergence** est $D(0,R)=\{z\in\C : |z|<R\}$ (c'est $\C$ si $R=+\infty$). Une fonction est **holomorphe** sur un ouvert $\Omega$ si elle y est $\C$-dérivable en tout point, de dérivée $f'$ continue ([[ch01-def-holomorphe]]).

C'est la **première grande source** de fonctions holomorphes non rationnelles : $e^z$, $\cos z$, $\sin z$, ... ([[ch01-exp-trigo-hyperboliques]]). On verra plus tard la réciproque : toute fonction holomorphe est localement somme d'une série entière ([[ch01-holomorphe-analytique]]).

## Énoncé

**Proposition (poly, Proposition I.3.3, p. 11).** Une série entière
$$
f(z):=\sum_{n\ge0}a_nz^n,
$$
à coefficients complexes, de rayon de convergence $R>0$ définit une fonction holomorphe sur son disque ouvert de convergence $D(0,R)$ et la dérivée complexe de $f$ est donnée par
$$
f'(z)=\sum_{n\ge1}n\,a_nz^{n-1}\qquad(z\in D(0,R)).
$$
De plus (établi au début de la démonstration), la série dérivée $\sum_{n\ge1}n\,a_nz^{n-1}$ a le même rayon de convergence $R$.

## Hypothèses

### H1 — Rayon de convergence $R>0$

**Rôle.** Il garantit que le disque ouvert $D(0,R)$ est un ouvert **non vide** sur lequel la série converge ; c'est sur lui que l'on travaille.

**Si on la retire.** Si $R=0$ (par exemple $a_n=n!$ : la suite $(n!\,\rho^n)$ n'est bornée pour aucun $\rho>0$), la série ne converge qu'en $z=0$ et $D(0,0)=\emptyset$ : l'énoncé devient vide. Il n'y a aucun ouvert sur lequel parler d'holomorphie.

### H2 — On se place sur le disque **ouvert** $D(0,R)$

**Rôle.** Pour $z\in D(0,R)$, on peut glisser un rayon $\rho_0$ avec $|z|<\rho_0<R$ ; c'est la marge $\rho_0<R$ qui assure la convergence de la série majorante $\sum|a_n|\frac{n(n-1)}{2}\rho_0^{n-2}$ dans la preuve.

**Si on la retire.** Rien n'est affirmé sur le cercle $|z|=R$, et c'est justifié. La série $f(z)=\sum_{n\ge1}\frac{z^n}{n^2}$ a pour rayon $R=1$ et converge **normalement** sur le disque fermé $\bar D(0,1)$ (car $\sum 1/n^2<+\infty$) : $f$ est définie et continue sur $\bar D(0,1)$. Mais sa série dérivée $\sum_{n\ge1}\frac{z^{n-1}}{n}$ diverge en $z=1$, et pour $x\in\,]0,1[$,
$$
f'(x)=\sum_{n\ge1}\frac{x^{n-1}}{n}=-\frac{\log(1-x)}{x}\xrightarrow[x\to1^-]{}+\infty .
$$
Donc $f$ ne se prolonge en aucune fonction holomorphe $F$ sur un ouvert $U\ni1$ : sinon $F'=f'$ sur $U\cap D(0,1)$ et $F'$, continue en $1$, serait bornée près de $1$. Même phénomène, plus brutal : $\sum z^n$ (rayon $1$) diverge en tout point du cercle unité.

## Idée de la preuve

1. La série dérivée a le même rayon $R$ (comparaison des suites $|a_n|\rho^n$ et $n|a_n|\rho^{n-1}$).
2. On écrit $\frac{(z+\omega)^n-z^n}{\omega}-nz^{n-1}=\omega\times(\text{somme de } \tfrac{n(n-1)}{2}\text{ termes de module}\le\rho^{n-2})$, puis on somme : le taux d'accroissement moins la série dérivée est $O(|\omega|)$.

## Preuve

**Étape 1 : la série dérivée a le même rayon $R$.** Notons $R'$ le rayon de $\sum_{n\ge1}n\,a_nz^{n-1}$.

* $R'\ge R$. Soit $0<\rho<R$ ; choisissons $\rho'$ avec $\rho<\rho'<R$. Par définition du rayon, la suite $(|a_n|\rho'^n)_n$ est bornée par un $M>0$, d'où
$$
n|a_n|\rho^{n-1}=\frac{n}{\rho'}\,|a_n|\rho'^n\Big(\frac{\rho}{\rho'}\Big)^{n-1}\le\frac{M}{\rho'}\,n\Big(\frac{\rho}{\rho'}\Big)^{n-1},
$$
terme général d'une série convergente (car $0\le\rho/\rho'<1$). En particulier la suite $(n|a_n|\rho^{n-1})_n$ est bornée, donc $R'\ge\rho$ ; ceci pour tout $\rho<R$, d'où $R'\ge R$.
* $R'\le R$. Pour $n\ge1$ et $\rho\ge 0$, $|a_n|\rho^n\le\rho\cdot n|a_n|\rho^{n-1}$. Si $(n|a_n|\rho^{n-1})_n$ est bornée, $(|a_n|\rho^n)_n$ l'est aussi, donc $R\ge R'$.

En appliquant l'étape 1 deux fois, la série $\sum_{n\ge2}n(n-1)a_nz^{n-2}$ a aussi le rayon $R$, donc la série $\sum_{n\ge2}|a_n|\frac{n(n-1)}{2}\rho_0^{n-2}$ converge pour tout $0\le\rho_0<R$ : en effet, si $\rho_0<\rho'<R$, la suite $\big(\tfrac{n(n-1)}{2}|a_n|\rho'^{\,n-2}\big)_n$ est bornée par un $M'$, donc $\tfrac{n(n-1)}{2}|a_n|\rho_0^{n-2}\le M'(\rho_0/\rho')^{n-2}$, terme général d'une série géométrique convergente (une série entière converge absolument en tout point strictement intérieur à son disque de convergence).

**Étape 2 : $\C$-dérivabilité.** Soit $z\in D(0,R)$ et fixons $\rho_0$ avec $|z|<\rho_0<R$. Soit $\omega\ne0$ assez petit pour que $z+\omega\in D(0,\rho_0)$. Les trois séries $f(z+\omega)$, $f(z)$ et $\sum n a_nz^{n-1}$ convergent, et l'identité $(z+\omega)^n-z^n=\omega\sum_{k=1}^n(z+\omega)^{n-k}z^{k-1}$ donne
$$
\begin{aligned}
\frac{f(z+\omega)-f(z)}{\omega}-\sum_{n\ge1}n a_nz^{n-1}
&=\sum_{n\ge1}a_n\Big(\sum_{k=1}^n(z+\omega)^{n-k}z^{k-1}-nz^{n-1}\Big)
=\sum_{n\ge1}a_n\sum_{k=1}^{n-1}z^{k-1}\big((z+\omega)^{n-k}-z^{n-k}\big)\\
&=\sum_{n\ge1}a_n\sum_{k=1}^{n-1}z^{k-1}\,\omega\sum_{j=1}^{n-k}(z+\omega)^{j-1}z^{n-k-j}
=\omega\sum_{n\ge1}a_n\sum_{j=1}^{n-1}(n-j)\,z^{n-j-1}(z+\omega)^{j-1}.
\end{aligned}
$$
(Dans la deuxième égalité on a écrit $nz^{n-1}=\sum_{k=1}^n z^{k-1}z^{n-k}$, et le terme $k=n$ est nul ; dans la dernière, on a échangé les sommes finies sur $k$ et $j$ : pour $j$ fixé, $k$ parcourt $\{1,\dots,n-j\}$, d'où le facteur $n-j$.)

Posons $\rho=\max(|z|,|z+\omega|)\le\rho_0$. Chaque terme $z^{n-j-1}(z+\omega)^{j-1}$ est de module $\le\rho^{n-2}$, d'où
$$
\Big|\sum_{j=1}^{n-1}(n-j)\,z^{n-j-1}(z+\omega)^{j-1}\Big|\le\sum_{j=1}^{n-1}(n-j)\,\rho^{n-2}=\frac{n(n-1)}{2}\rho^{n-2}\le\frac{n(n-1)}{2}\rho_0^{n-2}.
$$
Par conséquent
$$
\Big|\frac{f(z+\omega)-f(z)}{\omega}-\sum_{n\ge1}n a_nz^{n-1}\Big|\le|\omega|\sum_{n\ge2}|a_n|\frac{n(n-1)}{2}\rho_0^{n-2},
$$
et la série du membre de droite converge (étape 1, car $\rho_0<R$) et ne dépend pas de $\omega$. Le membre de gauche tend donc vers $0$ quand $\omega\to0$ : $f$ est $\C$-dérivable en $z$, de dérivée $f'(z)=\sum_{n\ge1}na_nz^{n-1}$.

**Étape 3 : continuité de $f'$** (*précision non écrite dans le poly, nécessaire pour la définition d'holomorphie* [[ch01-def-holomorphe]]). La fonction $f'$ est la somme d'une série entière de rayon $R$ (étape 1). Sur chaque disque fermé $\bar D(0,\rho_0)$, $\rho_0<R$, cette série converge normalement, donc uniformément ; ses sommes partielles sont des polynômes continus, donc $f'$ est continue sur $\bar D(0,\rho_0)$, et ceci pour tout $\rho_0<R$ : $f'$ est continue sur $D(0,R)$. (De même $f$ est continue.) Ainsi $f\in\Hol(D(0,R))$. $\square$

## Preuve à trous

**Même rayon.** Si $0<\rho<\rho'<R$ et $|a_n|\rho'^n\le M$, alors $n|a_n|\rho^{n-1}\le$ <trou indice="faire apparaître une série géométrique dérivée">$\frac{M}{\rho'}\,n\big(\frac{\rho}{\rho'}\big)^{n-1}$, terme général d'une série convergente</trou>, donc le rayon de la série dérivée est $\ge R$ ; et $|a_n|\rho^n\le\rho\cdot n|a_n|\rho^{n-1}$ donne l'inégalité inverse.

**Dérivabilité.** Soit $|z|<\rho_0<R$ et $z+\omega\in D(0,\rho_0)$. Grâce à <trou indice="factoriser $a^n-b^n$">l'identité $(z+\omega)^n-z^n=\omega\sum_{k=1}^n(z+\omega)^{n-k}z^{k-1}$</trou>, puis en l'appliquant une seconde fois, on obtient
$$
\frac{f(z+\omega)-f(z)}{\omega}-\sum_{n\ge1}na_nz^{n-1}=\omega\sum_{n\ge1}a_n\sum_{j=1}^{n-1}(n-j)\,z^{n-j-1}(z+\omega)^{j-1}.
$$
Avec $\rho=\max(|z|,|z+\omega|)$, la somme intérieure est majorée en module par <trou>$\sum_{j=1}^{n-1}(n-j)\rho^{n-2}=\frac{n(n-1)}{2}\rho^{n-2}\le\frac{n(n-1)}{2}\rho_0^{n-2}$</trou>. Donc l'écart est $\le|\omega|\sum_{n\ge2}|a_n|\frac{n(n-1)}{2}\rho_0^{n-2}$, et cette série converge car <trou indice="appliquer deux fois le résultat sur le rayon">la série dérivée seconde a encore le rayon $R$ et $\rho_0<R$</trou>. L'écart tend vers $0$ avec $\omega$.

**Continuité de $f'$.** $f'$ est somme d'une série entière de rayon $R$, <trou>qui converge normalement sur chaque $\bar D(0,\rho_0)$, $\rho_0<R$ ; limite uniforme de polynômes, elle est continue</trou>. $\square$

## Exemples

* **Série géométrique.** $f(z)=\sum_{n\ge0}z^n=\frac1{1-z}$ sur $D(0,1)$ ($R=1$). La proposition donne $f'(z)=\sum_{n\ge1}nz^{n-1}$, et la règle du quotient ([[ch01-formules-derivation]]) donne $f'(z)=\frac{1}{(1-z)^2}$ : d'où $\sum_{n\ge1}nz^{n-1}=\frac1{(1-z)^2}$ pour $|z|<1$. Par exemple en $z=\frac12$ : $\sum_{n\ge1}n2^{1-n}=4$.
* **Exponentielle.** $e^z=\sum_{n\ge0}\frac{z^n}{n!}$, $R=+\infty$ (la suite $\rho^n/n!$ est bornée pour tout $\rho$). Série dérivée : $\sum_{n\ge1}\frac{nz^{n-1}}{n!}=\sum_{m\ge0}\frac{z^m}{m!}=e^z$. Donc $\exp\in\Hol(\C)$ et $\exp'=\exp$ ([[ch01-exp-trigo-hyperboliques]]).
* **Un logarithme sur le disque.** $L(z)=\sum_{n\ge1}\frac{z^n}{n}$ a pour rayon $1$ et $L'(z)=\sum_{n\ge1}z^{n-1}=\frac1{1-z}$ sur $D(0,1)$. Posons $g(z)=(1-z)e^{L(z)}$ ; alors $g'(z)=-e^{L(z)}+(1-z)L'(z)e^{L(z)}=0$, donc $g$ est constante sur le disque (ouvert connexe : $g'=0$ entraîne $dg=0$ par [[ch01-c-derivable-ssi-df-c-lineaire]], et une fonction de différentielle nulle sur un ouvert connexe est constante), égale à $g(0)=1$ : $e^{L(z)}=\frac1{1-z}$. Ainsi $-L(z)$ est un logarithme holomorphe de $1-z$ sur $D(0,1)$ (comparer avec [[ch01-exp-image-c-etoile-log-local]]).

## Pièges

* > ⚠️ Le résultat ne dit **rien** sur le cercle $|z|=R$ : même rayon ne veut pas dire même comportement au bord ($\sum z^n/n^2$ converge sur $\bar D(0,1)$, sa série dérivée diverge en $1$).
* La série dérivée commence à $n=1$ (le terme constant disparaît) ; ne pas écrire $\sum_{n\ge0}na_nz^{n-1}$ en croyant y voir un terme $z^{-1}$ (il est multiplié par $0$).
* Pour une série centrée en $z_0$, $\sum a_n(z-z_0)^n$, le résultat s'applique sur $D(z_0,R)$ par composition avec $z\mapsto z-z_0$ ([[ch01-stabilite-operations]]) : $f'(z)=\sum_{n\ge1}na_n(z-z_0)^{n-1}$.
* L'holomorphie exige aussi la **continuité** de $f'$ ; elle vient ici gratuitement de ce que $f'$ est elle-même une série entière de rayon $R$.
* La dérivation terme à terme d'une série de fonctions **quelconque** n'est pas licite en général ; c'est la structure de série entière (ou, plus tard, la convergence localement uniforme de fonctions holomorphes, [[ch03-weierstrass]]) qui la justifie.
