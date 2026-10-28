---
id: ch02-laurent-couronne-cauchy
type: proposition
chapter: 2
title: Développement de Laurent dans un disque épointé par la formule de Cauchy
ref: Exercice II.7.4 (questions 1 à 4)
page: 50
importance: 2
depends: [ch02-invariance-homotopie-integrale, ch02-singularite-effacable-riemann, ch02-indice-cercle, ch02-indice-def, ch01-longueur-majoration-integrale]
tags: [laurent, disque epointe, couronne, formule de cauchy, singularite essentielle, serie]
---
## Intuition

> 💡 Sur un disque, la formule de Cauchy fabrique la série de Taylor : on développe $\frac{1}{\zeta-z}$ en série géométrique de $z/\zeta$. Sur un disque **épointé** $D(0,1)\setminus\{0\}$, il y a un trou en $0$ : la formule de Cauchy fait alors intervenir **deux** cercles, un grand cercle de rayon $r>|z|$ (qui donne, comme d'habitude, des puissances $z^n$, $n\ge0$) et un petit cercle de rayon $s<|z|$ autour du trou (qui donne, en développant en série de $\zeta/z$, des puissances $z^{-n}$, $n\ge1$). On obtient une série $\sum_{n\in\Z}a_nz^n$ : la **série de Laurent**.

Différence avec [[ch02-laurent-developpement]] (Proposition II.4.6) : là, on supposait $f$ **méromorphe** (au plus un pôle en $0$), et la série n'avait qu'un nombre fini de puissances négatives. Ici on suppose seulement $f$ holomorphe sur le disque épointé : la partie négative peut être infinie (singularité essentielle, comme $e^{1/z}$).

Notations : $\partial D(0,r)$ est le cercle $C(0,r)$ parcouru une fois dans le sens trigonométrique ; l'**indice** $\Ind_z(\gamma)=\frac{1}{2i\pi}\int_\gamma\frac{d\zeta}{\zeta-z}$ compte le nombre de tours de $\gamma$ autour de $z$ ([[ch02-indice-def]]), et vaut $1$ à l'intérieur d'un cercle, $0$ à l'extérieur ([[ch02-indice-cercle]]).

## Énoncé

**Proposition (poly, Exercice II.7.4, questions 1 à 4, p. 50).** Soit $f:D(0,1)\setminus\{0\}\to\C$ une fonction holomorphe.
1. Soit $g$ une fonction holomorphe sur $D(0,1)\setminus\{0\}$. Alors $r\mapsto\dfrac{1}{2i\pi}\displaystyle\int_{\partial D(0,r)}g(z)\,dz$ ne dépend pas de $r\in]0,1[$.
2. Soit $z\in D(0,1)\setminus\{0\}$. La fonction $g$ définie sur $D(0,1)\setminus\{0,z\}$ par $g(\zeta):=\dfrac{f(z)-f(\zeta)}{z-\zeta}$ se prolonge en une fonction holomorphe sur $D(0,1)\setminus\{0\}$.
3. Pour tout $0<s<|z|<r<1$,
$$
f(z)=\frac{1}{2i\pi}\int_{\partial D(0,r)}\frac{f(\zeta)}{\zeta-z}\,d\zeta-\frac{1}{2i\pi}\int_{\partial D(0,s)}\frac{f(\zeta)}{\zeta-z}\,d\zeta .
$$
4. $f$ admet un développement en série de Laurent $f(z)=\sum_{n\in\Z}a_nz^n$ dans $D(0,1)\setminus\{0\}$, avec
$$
a_n=\frac{1}{2i\pi}\int_{\partial D(0,r)}\frac{f(z)}{z^{n+1}}\,dz,
$$
cette quantité ne dépendant pas de $r\in]0,1[$ d'après la question 1.

**Compléments (démontrés ci-dessous).** Les deux séries $\sum_{n\ge0}a_nz^n$ et $\sum_{n\ge1}a_{-n}z^{-n}$ convergent normalement sur toute couronne fermée $\{s'\le|z|\le r'\}$, $0<s'<r'<1$ ; et le développement est unique : si $f(z)=\sum_{n\in\Z}b_nz^n$ avec convergence normale sur un cercle $C(0,\rho)$, alors $b_n=a_n$ pour tout $n$.

## Hypothèses

### H1 — $f$ holomorphe sur tout le disque épointé $D(0,1)\setminus\{0\}$

**Rôle.** Dans la question 1, l'invariance par homotopie ([[ch02-invariance-homotopie-integrale]]) exige que $g$ soit holomorphe sur un ouvert contenant toute l'homotopie entre les deux cercles, c'est-à-dire sur la couronne qui les sépare ; dans la question 2, on a besoin de $f$ holomorphe près de $z$ pour effacer la singularité.

**Si on la retire.** Avec une seconde singularité dans le disque, il n'y a plus **un** développement valable sur tout $D(0,1)\setminus\{0\}$. Exemple : $f(z)=\frac{1}{z-1/2}$, holomorphe sur $D(0,1)\setminus\{0,\frac12\}$. Pour $|z|<\frac12$, $f(z)=-2\sum_{n\ge0}(2z)^n$ ; pour $\frac12<|z|<1$, $f(z)=\frac1z\cdot\frac{1}{1-\frac{1}{2z}}=\sum_{n\ge1}2^{1-n}z^{-n}$. Et l'intégrale $\frac{1}{2i\pi}\int_{\partial D(0,r)}f$ vaut $\Ind_{1/2}(\partial D(0,r))$, c'est-à-dire $0$ si $r<\frac12$ et $1$ si $r>\frac12$ : elle **dépend** de $r$ (la question 1 tombe).

### H2 — le domaine est un disque épointé centré en $0$, de rayon $1$

**Rôle.** Aucun rôle profond : c'est une normalisation.

**Si on la retire.** La conclusion reste vraie, avec la même preuve, pour $f$ holomorphe sur un disque épointé $D(z_0,R)\setminus\{z_0\}$ (développement en puissances de $z-z_0$, $a_n=\frac{1}{2i\pi}\int_{\partial D(z_0,r)}\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}d\zeta$, $0<r<R$), et plus généralement sur une couronne $\{\rho_1<|z|<\rho_2\}$, $0\le\rho_1<\rho_2\le+\infty$ (les rayons $s<|z|<r$ sont alors pris dans $]\rho_1,\rho_2[$).

## Idée de la preuve

Les intégrales sur les cercles centrés en $0$ ne dépendent pas du rayon (homotopie). Appliqué au taux d'accroissement $g(\zeta)=\frac{f(z)-f(\zeta)}{z-\zeta}$ (holomorphe après effacement de $z$), cela donne une formule de Cauchy à deux cercles. On développe $\frac{1}{\zeta-z}$ en série géométrique en $z/\zeta$ sur le grand cercle, en $\zeta/z$ sur le petit.

## Preuve

Notons $D^\times:=D(0,1)\setminus\{0\}$.

**1.** Soient $0<r_1<r_2<1$. L'application $\Gamma(\sigma,t):=\big((1-\sigma)r_1+\sigma r_2\big)e^{2i\pi t}$, $(\sigma,t)\in[0,1]^2$, est continue, à valeurs dans $\{r_1\le|\zeta|\le r_2\}\subset D^\times$, vérifie $\Gamma(\sigma,0)=\Gamma(\sigma,1)$, $\Gamma(0,\cdot)=\partial D(0,r_1)$ et $\Gamma(1,\cdot)=\partial D(0,r_2)$ : c'est une homotopie de lacets dans $D^\times$. Comme $g\in\Hol(D^\times)$, le Théorème II.2.1 ([[ch02-invariance-homotopie-integrale]]) donne $\int_{\partial D(0,r_1)}g=\int_{\partial D(0,r_2)}g$.

**2.** La fonction $g$ est holomorphe sur $D^\times\setminus\{z\}$ (quotient de fonctions holomorphes, dénominateur non nul). Quand $\zeta\to z$, $g(\zeta)=\frac{f(\zeta)-f(z)}{\zeta-z}\to f'(z)$, donc $g$ est bornée au voisinage de $z$. Par le théorème de Riemann ([[ch02-singularite-effacable-riemann]]), $g$ se prolonge en une fonction holomorphe sur $D^\times$ (en posant $g(z)=f'(z)$).

**3.** Soient $0<s<|z|<r<1$. Par 1 appliqué au prolongement de 2, $\int_{\partial D(0,r)}g=\int_{\partial D(0,s)}g$. Le point $z$ n'est sur aucun des deux cercles, donc sur chacun d'eux $g(\zeta)=\frac{f(z)-f(\zeta)}{z-\zeta}=\frac{f(\zeta)}{\zeta-z}-\frac{f(z)}{\zeta-z}$, et pour $\rho\in\{r,s\}$ :
$$
\int_{\partial D(0,\rho)}g(\zeta)\,d\zeta=\int_{\partial D(0,\rho)}\frac{f(\zeta)}{\zeta-z}\,d\zeta-2i\pi f(z)\,\Ind_z\big(\partial D(0,\rho)\big).
$$
Or ([[ch02-indice-cercle]]) $\Ind_z(\partial D(0,r))=1$ car $|z|<r$, et $\Ind_z(\partial D(0,s))=0$ car $|z|>s$. L'égalité des deux intégrales s'écrit donc
$$
\int_{\partial D(0,r)}\frac{f(\zeta)}{\zeta-z}\,d\zeta-2i\pi f(z)=\int_{\partial D(0,s)}\frac{f(\zeta)}{\zeta-z}\,d\zeta,
$$
ce qui est la formule annoncée.

**4.** Fixons $z\in D^\times$ et $0<s<|z|<r<1$ ; notons $M_\rho:=\sup_{C(0,\rho)}|f|<\infty$ ($f$ continue sur le compact $C(0,\rho)$).

*Grand cercle.* Pour $|\zeta|=r$, $|z/\zeta|=|z|/r<1$ et $\frac{1}{\zeta-z}=\frac1\zeta\cdot\frac{1}{1-z/\zeta}=\sum_{n\ge0}\frac{z^n}{\zeta^{n+1}}$. La série $\sum_n\frac{f(\zeta)z^n}{\zeta^{n+1}}$ converge normalement sur $C(0,r)$ (terme général majoré par $\frac{M_r}{r}(|z|/r)^n$), on peut donc intégrer terme à terme :
$$
\frac{1}{2i\pi}\int_{\partial D(0,r)}\frac{f(\zeta)}{\zeta-z}\,d\zeta=\sum_{n\ge0}\Big(\frac{1}{2i\pi}\int_{\partial D(0,r)}\frac{f(\zeta)}{\zeta^{n+1}}\,d\zeta\Big)z^n=\sum_{n\ge0}a_nz^n .
$$
*Petit cercle.* Pour $|\zeta|=s$, $|\zeta/z|=s/|z|<1$ et $\frac{1}{\zeta-z}=-\frac1z\cdot\frac{1}{1-\zeta/z}=-\sum_{k\ge0}\frac{\zeta^k}{z^{k+1}}$, normalement convergente sur $C(0,s)$ après multiplication par $f(\zeta)$ (majorant $\frac{M_s}{|z|}(s/|z|)^k$). Donc
$$
-\frac{1}{2i\pi}\int_{\partial D(0,s)}\frac{f(\zeta)}{\zeta-z}\,d\zeta=\sum_{k\ge0}\Big(\frac{1}{2i\pi}\int_{\partial D(0,s)}f(\zeta)\,\zeta^{k}\,d\zeta\Big)z^{-k-1}=\sum_{n\le-1}a_nz^n,
$$
en posant $n=-k-1$ (alors $\zeta^k=\zeta^{-n-1}$) et en utilisant que, par la question 1 appliquée à $\zeta\mapsto f(\zeta)\zeta^{-n-1}\in\Hol(D^\times)$, l'intégrale sur $\partial D(0,s)$ est égale à celle sur $\partial D(0,r)$, donc à $2i\pi a_n$, et ne dépend pas du rayon. En additionnant (question 3) : $f(z)=\sum_{n\in\Z}a_nz^n$, les deux séries convergeant.

*Compléments.* De $|a_n|\le\frac{1}{2\pi}\cdot2\pi\rho\cdot\frac{M_\rho}{\rho^{n+1}}=M_\rho\,\rho^{-n}$ (valable pour tout $\rho\in]0,1[$, [[ch01-longueur-majoration-integrale]]) : si $s<s'\le|z|\le r'<r$, alors $|a_nz^n|\le M_r(r'/r)^n$ pour $n\ge0$ et $|a_nz^n|\le M_s(s/s')^{|n|}$ pour $n\le-1$ : convergence normale sur la couronne fermée. Unicité : si $f=\sum b_nz^n$ normalement sur $C(0,\rho)$, on intègre terme à terme $f(z)z^{-m-1}$ ; comme $\int_{C(0,\rho)}z^{k}dz=0$ pour $k\neq-1$ et $=2i\pi$ pour $k=-1$, on trouve $2i\pi a_m=2i\pi b_m$. $\square$

## Preuve à trous

**1.** Les cercles $\partial D(0,r_1)$ et $\partial D(0,r_2)$ sont homotopes dans $D^\times$ via <trou indice="interpoler les rayons">$\Gamma(\sigma,t)=((1-\sigma)r_1+\sigma r_2)e^{2i\pi t}$, qui reste dans la couronne $r_1\le|\zeta|\le r_2$</trou>, donc les intégrales de $g\in\Hol(D^\times)$ coïncident (Théorème II.2.1).

**2.** $g$ est holomorphe sur $D^\times\setminus\{z\}$ et <trou indice="taux d'accroissement">$g(\zeta)\to f'(z)$ quand $\zeta\to z$, donc $g$ est bornée près de $z$ et se prolonge holomorphiquement par le théorème de Riemann</trou>.

**3.** Pour $0<s<|z|<r<1$ : $\int_{\partial D(0,r)}g=\int_{\partial D(0,s)}g$, et $\int_{\partial D(0,\rho)}g=\int_{\partial D(0,\rho)}\frac{f(\zeta)}{\zeta-z}d\zeta-2i\pi f(z)\Ind_z(\partial D(0,\rho))$, avec <trou>$\Ind_z(\partial D(0,r))=1$ et $\Ind_z(\partial D(0,s))=0$</trou>, d'où la formule à deux cercles.

**4.** Sur le grand cercle, <trou indice="série géométrique, mais en quel rapport ?">$\frac{1}{\zeta-z}=\sum_{n\ge0}z^n\zeta^{-n-1}$ ($|z/\zeta|<1$)</trou> ; sur le petit, <trou>$\frac{1}{\zeta-z}=-\sum_{k\ge0}\zeta^kz^{-k-1}$ ($|\zeta/z|<1$)</trou>. Les convergences sont normales sur les cercles, on intègre terme à terme, et la question 1 permet de calculer tous les $a_n$ sur un même cercle : $f(z)=\sum_{n\in\Z}a_nz^n$. $\square$

## Exemples

* **$f(z)=e^{1/z}$ (singularité essentielle).** Pour $z\neq0$, $e^{1/z}=\sum_{k\ge0}\frac{z^{-k}}{k!}$ : $a_n=0$ pour $n\ge1$, $a_{-k}=\frac{1}{k!}$ pour $k\ge0$ — une infinité de coefficients négatifs non nuls, ce que la Proposition II.4.6 ne pouvait pas traiter. Vérification par la formule : la série converge normalement sur $C(0,r)$, et $\frac{1}{2i\pi}\int_{\partial D(0,r)}z^{-k-n-1}dz$ vaut $1$ si $k=-n$ et $0$ sinon, d'où $a_n=\frac{1}{(-n)!}$ pour $n\le0$. En particulier $a_{-1}=1=\frac{1}{2i\pi}\int_{\partial D(0,r)}e^{1/z}dz$.
* **$f(z)=\dfrac{1}{z(1-z)}$.** $f(z)=\frac1z+\frac{1}{1-z}=z^{-1}+\sum_{n\ge0}z^n$ sur $D^\times$ : $a_{-1}=1$, $a_n=1$ pour $n\ge0$, $a_n=0$ pour $n\le-2$ (pôle simple).
* **$f(z)=\sin(1/z)$.** $\sin(1/z)=\sum_{k\ge0}\frac{(-1)^k}{(2k+1)!}z^{-(2k+1)}$ : seuls les $a_{-(2k+1)}$ sont non nuls.

## Pièges

* > ⚠️ Le **signe moins** devant l'intégrale sur le petit cercle (question 3) : il vient de $\Ind_z(\partial D(0,s))=0$ et non $1$. On peut aussi le voir comme l'intégrale sur le bord orienté de la couronne $\{s<|\zeta|<r\}$ (grand cercle direct, petit cercle indirect).
* La formule $a_n=\frac{1}{2i\pi}\int\frac{f(z)}{z^{n+1}}dz$ porte sur $z^{n+1}$ (et non $z^n$) ; pour $n=-1$ on obtient $a_{-1}=\frac{1}{2i\pi}\int_{\partial D(0,r)}f$, qui est le **résidu** quand $0$ est un pôle ([[ch02-residu-integrale-cercle]]).
* Pour $n\ge0$, $a_n$ n'est **pas** $f^{(n)}(0)/n!$ ($f$ n'est pas définie en $0$), sauf si la singularité est effaçable.
* Le développement de Laurent dépend de la couronne : si $f$ a plusieurs singularités, chaque couronne $\{\rho_1<|z|<\rho_2\}$ sans singularité a son propre développement (voir H1).
* Les rayons doivent vérifier $s<|z|<r$ **strictement** : sur un cercle passant par $z$, $\frac{f(\zeta)}{\zeta-z}$ n'est pas intégrable au sens des chemins.
