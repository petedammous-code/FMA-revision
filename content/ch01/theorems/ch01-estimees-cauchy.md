---
id: ch01-estimees-cauchy
type: corollary
chapter: 1
title: "Estimées de Cauchy ; formule (I.7.1) pour $f^{(n)}$ ; rayon de convergence $\ge\rho(z_0)$"
ref: Corollaire I.7.5
page: 22
importance: 3
depends: [ch01-holomorphe-analytique, ch01-cauchy-formule-disque, ch01-serie-entiere-derivees-tout-ordre, ch01-longueur-majoration-integrale, ch01-holomorphe-ssi-c1-et-dzbar-nul, ch01-cauchy-riemann, ch01-integrale-sur-cercle]
tags: [cauchy, estimees, taylor, rayon-de-convergence, derivees]
---
## Intuition

> 💡 Trois messages en un. (1) La série de Taylor d'une fonction holomorphe en $z_0$ converge vers $f$ sur le **plus grand disque centré en $z_0$ contenu dans $\Omega$** : tant qu'on ne touche pas le bord de $\Omega$, une seule série suffit. (2) Les dérivées de $f$ se calculent par une intégrale des valeurs de $f$ sur un cercle : on « dérive sous l'intégrale de Cauchy ». (3) Conséquence quantitative : si $|f|\le M$ sur un cercle de rayon $r$, la $n$-ième dérivée au centre est au plus $n!\,M/r^n$.

Image mentale : une fonction holomorphe bornée sur un grand cercle ne peut pas osciller vite au centre. En variable réelle c'est faux ($\sin(Nx)$ est bornée par $1$ et sa dérivée en $0$ vaut $N$) ; en complexe, $\sin(Nz)$ n'est pas bornée sur un disque : $|\sin(iNr)|=\sinh(Nr)$.

Notation : $\rho(z_0)=\sup\{r>0\mid\bar D(z_0,r)\subset\Omega\}\in\,]0,+\infty]$ est le rayon du plus grand disque ouvert centré en $z_0$ contenu dans $\Omega$ ; $f^{(n)}$ est la $n$-ième dérivée complexe, qui existe pour $f$ holomorphe ([[ch01-holomorphe-analytique]]).

## Énoncé

**Corollaire (poly, Corollaire I.7.5, p. 22) — Estimées de Cauchy.** Supposons $f$ holomorphe sur l'ouvert $\Omega$. Soit $z_0\in\Omega$. Alors, $f$ admet un développement en série entière au voisinage de $z_0$ dont le rayon de convergence est au moins
$$
\rho(z_0)=\sup\{r>0\mid\bar D(z_0,r)\subset\Omega\},
$$
et pour tout $z\in D(z_0,\rho(z_0))$
$$
f(z)=\sum_{n\ge0}\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n .
$$
Pour tout $0<r<\rho(z_0)$, et pour tout $z\in D(z_0,r)$, on a
$$
\text{(I.7.1)}\qquad\frac{f^{(n)}(z)}{n!}=\frac{1}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z)^{n+1}}\,d\omega .
$$
De plus, on a les estimées de Cauchy
$$
\frac{|f^{(n)}(z_0)|}{n!}\le\frac{\sup_{C(z_0,r)}|f|}{r^n},
$$
pour tout $n\ge0$ (et tout $0<r<\rho(z_0)$).

## Hypothèses

### H1 — $f$ holomorphe sur $\Omega$

**Rôle.** Elle donne la formule de Cauchy et l'analyticité ([[ch01-cauchy-formule-disque]], [[ch01-holomorphe-analytique]]) sur lesquelles tout repose.

**Si on la retire.** Pour une fonction seulement $C^\infty$ au sens réel, les dérivées complexes n'existent pas et l'analogue réel des estimées est faux : $g_N(x)=\sin(Nx)$ vérifie $\sup_\R|g_N|=1$ mais $g_N'(0)=N$, non majorable indépendamment de $N$. Et pour $f(\omega)=\bar\omega$ ($z_0=0$, $r=1$, $z\in D(0,1)\setminus\{0\}$), le membre de droite de (I.7.1) avec $n=0$ vaut $0\neq\bar z=f(z)$ : sur $C(0,1)$, $\bar\omega=1/\omega$ et $\frac{1}{\omega(\omega-z)}=\frac1z\bigl(\frac1{\omega-z}-\frac1\omega\bigr)$, d'intégrale $\frac1z(2i\pi-2i\pi)=0$ (voir H1 de [[ch01-cauchy-formule-disque]]).

### H2 — $0<r<\rho(z_0)$, i.e. $\bar D(z_0,r)\subset\Omega$

**Rôle.** Pour $0<r<\rho(z_0)$, il existe par définition du sup un $r''>r$ avec $\bar D(z_0,r'')\subset\Omega$, donc $\bar D(z_0,r)\subset\Omega$ : on peut appliquer la formule de Cauchy sur $C(z_0,r)$. (Réciproquement, si $\bar D(z_0,r)\subset\Omega$, par compacité un disque un peu plus grand l'est aussi, donc $r<\rho(z_0)$.)

**Si on la retire.** Il ne suffit pas que le **cercle** soit dans $\Omega$. Soit $\Omega=\C\setminus\{1\}$, $f(z)=\frac{1}{1-z}=\sum_{n\ge0}z^n$ près de $0$ (donc $f^{(n)}(0)/n!=1$), $\rho(0)=1$. Pour $r=2$, $C(0,2)\subset\Omega$ et $\sup_{C(0,2)}|f|=1$ (car $\min_{|z|=2}|1-z|=1$) : l'estimée prétendrait $1\le 2^{-n}$, faux pour $n\ge1$.

### H3 — $z\in D(z_0,r)$ dans la formule (I.7.1)

**Rôle.** C'est là que la formule de Cauchy, puis sa dérivation sous l'intégrale, sont valables.

**Si on la retire.** Pour $|z-z_0|>r$, l'intégrale vaut $0$ (la fonction $\omega\mapsto f(\omega)(\omega-z)^{-n-1}$ est holomorphe sur un disque $D(z_0,r')\subset\Omega$ avec $r<r'\le|z-z_0|$, y a une primitive, [[ch01-primitive-locale]], donc son intégrale sur le lacet $C(z_0,r)$ est nulle, [[ch01-integrale-primitive]]). Exemple : $f=1$, $n=0$, $z_0=0$, $r=1$, $z=2$ : $\frac1{2i\pi}\int_{C(0,1)}\frac{d\omega}{\omega-2}=0\neq1$.

## Idée de la preuve

La preuve du Théorème I.7.4 donne, pour chaque $r<\rho(z_0)$, une série égale à $f$ sur $D(z_0,r)$ ; ses coefficients sont forcément $\frac{f^{(n)}(z_0)}{n!}$ (dérivation terme à terme), donc ne dépendent pas de $r$. On dérive $n$ fois la formule de Cauchy sous le signe somme pour (I.7.1), et l'on majore (I.7.1) en $z=z_0$ par « sup × longueur ».

## Preuve

**1. Développement de Taylor et rayon.** Notons $\rho:=\rho(z_0)$ ; $\rho>0$ car $\Omega$ est ouvert. Fixons $0<r<\rho$ ; comme vu en H2, $\bar D(z_0,r)\subset\Omega$. La preuve du Théorème I.7.4 ([[ch01-holomorphe-analytique]]) fournit une série entière $S_r(z)=\sum_{n\ge0}a_n(r)(z-z_0)^n$ qui converge sur $D(z_0,r)$ et y vaut $f$. D'après le Corollaire I.3.4 ([[ch01-serie-entiere-derivees-tout-ordre]]), $S_r$ a des dérivées complexes de tout ordre sur $D(z_0,r)$ et $S_r^{(n)}(z_0)=n!\,a_n(r)$. Comme $f=S_r$ sur l'ouvert $D(z_0,r)$, leurs dérivées complexes successives y coïncident, donc $a_n(r)=\frac{f^{(n)}(z_0)}{n!}$ : les coefficients **ne dépendent pas de $r$**. Ainsi la série de Taylor $T(z):=\sum_{n\ge0}\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n$ converge et vaut $f(z)$ sur $D(z_0,r)$, pour **tout** $r<\rho$. Son rayon de convergence est donc $\ge r$ pour tout $r<\rho$, i.e. $\ge\rho$, et $f=T$ sur $\bigcup_{r<\rho}D(z_0,r)=D(z_0,\rho)$.

**2. La formule (I.7.1).** Elle s'obtient en dérivant sous le signe somme la formule intégrale de Cauchy ; justifions-le. Fixons $0<r<\rho$, notons $\omega(\theta)=z_0+re^{i\theta}$ et, pour $n\ge0$ et $z\in D(z_0,r)$,
$$
\Phi_n(z):=\frac{1}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z)^{n+1}}\,d\omega=\frac{1}{2\pi}\int_0^{2\pi}k_n(z,\theta)\,d\theta,\qquad k_n(z,\theta):=\frac{f(\omega(\theta))\,re^{i\theta}}{(\omega(\theta)-z)^{n+1}}
$$
([[ch01-integrale-sur-cercle]]). La fonction $k_n$ est continue sur $D(z_0,r)\times[0,2\pi]$ (le dénominateur ne s'annule pas : $|\omega(\theta)-z|\ge r-|z-z_0|>0$). Pour $\theta$ fixé, $z\mapsto k_n(z,\theta)$ est une fraction rationnelle en $z$, holomorphe sur $D(z_0,r)$, avec
$$
\frac{\partial k_n}{\partial z}(z,\theta)=(n+1)\frac{f(\omega(\theta))\,re^{i\theta}}{(\omega(\theta)-z)^{n+2}}=(n+1)\,k_{n+1}(z,\theta),\qquad\frac{\partial k_n}{\partial\bar z}=0 ;
$$
donc $\frac{\partial k_n}{\partial x}=(n+1)k_{n+1}$ et $\frac{\partial k_n}{\partial y}=i(n+1)k_{n+1}$, continues sur $D(z_0,r)\times[0,2\pi]$. Par le théorème de dérivation des intégrales à paramètre (paramètres réels $x,y$, intégration sur le compact $[0,2\pi]$, dérivées partielles continues), $\Phi_n$ est de classe $C^1$ au sens réel sur $D(z_0,r)$ et l'on peut dériver sous le signe somme : $\frac{\partial\Phi_n}{\partial\bar z}=\frac1{2\pi}\int_0^{2\pi}\frac{\partial k_n}{\partial\bar z}\,d\theta=0$ et $\frac{\partial\Phi_n}{\partial z}=(n+1)\Phi_{n+1}$. D'après la Remarque I.2.6 ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]) et (I.2.7) ([[ch01-cauchy-riemann]]), $\Phi_n$ est holomorphe sur $D(z_0,r)$ et $\Phi_n'=(n+1)\Phi_{n+1}$. (C'est la méthode de la Remarque I.9.3 du poly.)

Or $\Phi_0=f$ sur $D(z_0,r)$ (formule de Cauchy, [[ch01-cauchy-formule-disque]]). Par récurrence, si $f^{(n)}=n!\,\Phi_n$ sur $D(z_0,r)$, alors $f^{(n+1)}=n!\,\Phi_n'=(n+1)!\,\Phi_{n+1}$. Donc $\frac{f^{(n)}(z)}{n!}=\Phi_n(z)$ pour tout $z\in D(z_0,r)$ : c'est (I.7.1).

**3. Les estimées.** Appliquons (I.7.1) en $z=z_0$ et la majoration $\bigl|\int_\gamma g\bigr|\le\sup_\gamma|g|\cdot L(\gamma)$ (Proposition I.5.7, [[ch01-longueur-majoration-integrale]]) avec $L(C(z_0,r))=2\pi r$ et $|\omega-z_0|=r$ sur le cercle :
$$
\frac{|f^{(n)}(z_0)|}{n!}=\frac{1}{2\pi}\Bigl|\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z_0)^{n+1}}\,d\omega\Bigr|\le\frac{1}{2\pi}\cdot\frac{\sup_{C(z_0,r)}|f|}{r^{n+1}}\cdot2\pi r=\frac{\sup_{C(z_0,r)}|f|}{r^n}.\qquad\square
$$

## Preuve à trous

*Rayon.* Pour $r<\rho(z_0)$, la preuve du Théorème I.7.4 donne $f=\sum a_n(r)(z-z_0)^n$ sur $D(z_0,r)$. Par dérivation terme à terme, <trou indice="que valent les coefficients d'une série entière en fonction de sa somme ?">$a_n(r)=\frac{f^{(n)}(z_0)}{n!}$, indépendant de $r$</trou> ; donc la série de Taylor converge vers $f$ sur chaque $D(z_0,r)$, $r<\rho(z_0)$, donc sur $D(z_0,\rho(z_0))$, et son rayon est $\ge\rho(z_0)$.

*Formule (I.7.1).* On pose $\Phi_n(z)=\frac{1}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z)^{n+1}}d\omega$. En dérivant sous le signe somme (intégrande $C^1$ en $z$, holomorphe en $z$, dénominateur minoré par $r-|z-z_0|$), on obtient <trou indice="dérivée de (ω−z)^(−n−1) par rapport à z">$\Phi_n'=(n+1)\Phi_{n+1}$</trou>, et comme $\Phi_0=f$ (formule de Cauchy), une récurrence donne $f^{(n)}=n!\,\Phi_n$.

*Estimées.* En $z=z_0$, <trou indice="Proposition I.5.7 : sup × longueur">$\frac{|f^{(n)}(z_0)|}{n!}\le\frac{1}{2\pi}\cdot\frac{\sup_{C(z_0,r)}|f|}{r^{n+1}}\cdot2\pi r$</trou> $=\frac{\sup_{C(z_0,r)}|f|}{r^n}$. $\square$

## Exemples

* **Intégrales par (I.7.1).** $\int_{C(0,1)}\frac{e^\omega}{\omega^{n+1}}\,d\omega=\frac{2i\pi}{n!}\exp^{(n)}(0)=\frac{2i\pi}{n!}$. Et $\int_{C(0,2)}\frac{e^\omega}{(\omega-1)^3}\,d\omega=\frac{2i\pi}{2!}\exp''(1)=i\pi e$ (ici $z=1\in D(0,2)$, $n=2$).
* **Rayon de convergence sans calcul.** $f(z)=\frac{1}{1+z^2}$ sur $\Omega=\C\setminus\{\pm i\}$, en $z_0=1$ : $\rho(1)=|1-i|=\sqrt2$, donc la série de Taylor de $f$ en $1$ a un rayon $\ge\sqrt2$. Il vaut exactement $\sqrt2$ : sinon la somme serait continue, donc bornée, au voisinage de $i$ dans $\bar D(1,\sqrt2)$, alors qu'elle coïncide avec $f$ sur $D(1,\sqrt2)$ et que $|f(z)|\to+\infty$ quand $z\to i$.
* **Estimées sur un exemple.** $f(z)=\frac{1}{1-z}$ sur $D(0,1)$, $a_n=1$. Pour $0<r<1$, $\sup_{C(0,r)}|f|=\frac{1}{1-r}$, et l'estimée donne $1\le\frac{1}{(1-r)r^n}$, vrai car $(1-r)r^n\le1$. Le meilleur choix $r=\frac{n}{n+1}$ donne le majorant $(n+1)\bigl(1+\frac1n\bigr)^n\le e(n+1)$ : les estimées sont précises à un facteur polynomial près.

## Pièges

* > ⚠️ « Rayon **au moins** $\rho(z_0)$ » : il peut être plus grand ($\exp$ restreinte à $\Omega=D(0,1)$ : $\rho(0)=1$, rayon $+\infty$), mais l'égalité $f=$ série n'est garantie que sur $D(z_0,\rho(z_0))$. Exemple : $\Omega=D(0,1)\cup D(3,1)$, $f=0$ sur $D(0,1)$ et $f=1$ sur $D(3,1)$ ; $f$ est holomorphe, sa série de Taylor en $0$ est nulle (rayon $+\infty$) mais $f(3)=1$.
* Dans (I.7.1), l'exposant est $n+1$ et il y a $n!$ : $\frac{f^{(n)}(z)}{n!}=\frac1{2i\pi}\int\frac{f(\omega)}{(\omega-z)^{n+1}}d\omega$. Erreur fréquente : oublier le $n!$ ou mettre l'exposant $n$.
* Les estimées portent sur les dérivées **au centre** $z_0$ du cercle. En un autre point $z$ de $D(z_0,r)$, (I.7.1) donne seulement $\frac{|f^{(n)}(z)|}{n!}\le\frac{r\,\sup_{C(z_0,r)}|f|}{(r-|z-z_0|)^{n+1}}$.
* Il faut le disque **fermé** dans $\Omega$ (H2), pas seulement le cercle.
