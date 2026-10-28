---
id: ch03-weierstrass
type: theorem
chapter: 3
title: Théorème de Weierstraß (limite localement uniforme de fonctions holomorphes)
ref: Théorème III.1.4
page: 60
importance: 3
depends: [ch03-cauchy-locale-equivaut-convergence, ch01-cauchy-formule-disque, ch01-estimees-cauchy, ch01-integrale-chemin-parametre, ch01-longueur-majoration-integrale, ch03-convergence-uniforme-compacts]
tags: [weierstrass, convergence-localement-uniforme, formule-de-cauchy, derivees, holomorphe]
---
## Intuition

> 💡 Une fonction holomorphe est entièrement déterminée par ses valeurs sur un cercle, via la formule intégrale de Cauchy : $f(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)}{\zeta-z}\,d\zeta$. Si les $f_n$ convergent uniformément sur le cercle, on peut passer à la limite **sous l'intégrale** : la limite $f$ vérifie encore la formule de Cauchy, donc elle est holomorphe. Et comme les dérivées $f_n^{(k)}$ s'expriment aussi par des intégrales sur le cercle, elles convergent aussi.

C'est un phénomène **propre au complexe** : en variable réelle, une limite uniforme de fonctions $C^\infty$ peut ne pas être dérivable ($\sqrt{x^2+1/n}\to|x|$), et les dérivées peuvent ne pas converger ($\sin(n^2x)/n\to0$ mais sa dérivée $n\cos(n^2x)$ diverge).

Vocabulaire : $f_n$ **holomorphe** sur $\Omega$ ([[ch01-def-holomorphe]]) ; suite **localement uniformément de Cauchy** et convergence **localement uniforme** : [[ch03-convergence-localement-uniforme]] (les deux notions sont équivalentes, [[ch03-cauchy-locale-equivaut-convergence]]) ; $f_n^{(k)}$ désigne la dérivée complexe $k$-ième de $f_n$.

## Énoncé

**Théorème (poly, Théorème III.1.4 — Weierstraß, p. 60).** Soient $\Omega$ un ouvert de $\C$ et $(f_n)_{n\in\N}$ une suite de fonctions holomorphes de $\Omega$ dans $\C$, localement uniformément de Cauchy sur $\Omega$ et de limite $f$. Alors

1. $f$ est une fonction holomorphe sur $\Omega$,
2. pour tout $k\ge1$, la suite $(f_n^{(k)})_n$ converge localement uniformément sur $\Omega$ vers $f^{(k)}$.

(La limite $f$ est la limite simple $f(z)=\lim_n f_n(z)$, qui existe car $\C$ est complet.)

## Hypothèses

### H1 — chaque $f_n$ est holomorphe

**Rôle.** Elle donne la formule intégrale de Cauchy pour chaque $f_n$ sur les disques $\bar D(z_0,r)\subset\Omega$, ainsi que les formules intégrales des dérivées $f_n^{(k)}$ ; c'est là qu'on passe à la limite.

**Si on la retire.** Les fonctions $f_n(z)=\sqrt{|z|^2+1/n}$ sont $C^\infty$ au sens réel sur $\C$ et convergent uniformément sur $\C$ vers $|z|$ : en effet
$$
0\le\sqrt{|z|^2+1/n}-|z|=\frac{1/n}{\sqrt{|z|^2+1/n}+|z|}\le\frac{1/n}{\sqrt{1/n}}=\frac1{\sqrt n}.
$$
Or $|z|$ n'est pas holomorphe (elle est réelle non constante, et une fonction holomorphe à valeurs réelles sur un connexe est constante ; elle n'est même pas $\R$-différentiable en $0$). Pour le point 2 : $g_n(x)=\sin(n^2x)/n$ converge uniformément vers $0$ sur $\R$, mais $g_n'(x)=n\cos(n^2x)$ ne converge pas ($g_n'(0)=n$). En complexe, $\sin(n^2z)/n$ ne converge uniformément sur **aucun** ouvert : pour $z=x+iy$, $|\sin(n^2z)|\ge\sinh(n^2|y|)$ explose dès que $y\ne0$.

### H2 — la suite est localement uniformément de Cauchy (convergence localement uniforme)

**Rôle.** Elle donne la convergence uniforme sur chaque cercle $C(z_0,r)$ (compact), ce qui permet d'échanger limite et intégrale grâce à la majoration $\big|\int_\gamma h\big|\le\sup_\gamma|h|\cdot L(\gamma)$ ([[ch01-longueur-majoration-integrale]]).

**Si on la retire.** Avec la seule convergence simple, la conclusion est fausse en général : il existe (théorème de Runge, hors programme) des suites de polynômes qui convergent simplement sur $\C$ vers une fonction **non continue**. En revanche « convergence simple + suite localement bornée » suffit (Exercice III.7.1, via le théorème de Montel [[ch03-montel]]).

## Idée de la preuve

Point 1 : $f$ est continue, donc $G(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)}{\zeta-z}d\zeta$ est holomorphe ; on passe à la limite dans la formule de Cauchy des $f_n$ pour obtenir $f=G$. Point 2 : on majore $f^{(k)}-f_n^{(k)}$ par la formule de Cauchy pour les dérivées sur $D(z_0,r/2)$, ce qui donne $\le\frac{k!\,2^{k+1}}{r^k}\sup_{C(z_0,r)}|f-f_n|$.

## Preuve

**Point 1.** D'après [[ch03-cauchy-locale-equivaut-convergence]], $(f_n)$ converge localement uniformément vers $f$. Chaque $f_n$ est continue, et une limite localement uniforme de fonctions continues est continue (la continuité est locale et passe à la limite uniforme sur un voisinage de chaque point) : $f$ est continue sur $\Omega$.

Soient $z_0\in\Omega$ et $r>0$ tels que $\bar D(z_0,r)\subset\Omega$. Comme $f$ est continue, la fonction
$$
G:z\longmapsto\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)}{\zeta-z}\,d\zeta
$$
est holomorphe sur $D(z_0,r)$. (Justification : pour $0<\rho<r$, la fonction $F(z,u)=\frac{f(u)}{u-z}$ est continue sur $D(z_0,\rho)\times U_\rho$ où $U_\rho=\{u\in\Omega:|u-z_0|>\rho\}$ est un ouvert contenant $C(z_0,r)$, et holomorphe en $z$ ; le corollaire I.9.4 ([[ch01-integrale-chemin-parametre]]) donne l'holomorphie de $G$ sur $D(z_0,\rho)$, pour tout $\rho<r$, donc sur $D(z_0,r)$.) Il suffit donc de montrer que $f(z)=G(z)$ pour tout $z\in D(z_0,r)$.

Soit $z\in D(z_0,r)$. D'après la formule intégrale de Cauchy ([[ch01-cauchy-formule-disque]]) appliquée à $f_n$, holomorphe sur un voisinage de $\bar D(z_0,r)$,
$$
f_n(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n(\zeta)}{\zeta-z}\,d\zeta .
$$
Pour $\zeta\in C(z_0,r)$, on a $|\zeta-z|\ge|\zeta-z_0|-|z-z_0|=r-|z-z_0|>0$, et le cercle est de longueur $2\pi r$ ; la majoration fondamentale ([[ch01-longueur-majoration-integrale]]) donne donc, pour tout $n$,
$$
\Big|f_n(z)-G(z)\Big|=\Big|\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n(\zeta)-f(\zeta)}{\zeta-z}\,d\zeta\Big|\le\frac{r}{r-|z-z_0|}\cdot\sup_{|\zeta-z_0|=r}|f_n(\zeta)-f(\zeta)| .
$$
Le cercle $C(z_0,r)$ est un compact de $\Omega$, donc $(f_n)$ y converge uniformément vers $f$ ([[ch03-convergence-uniforme-compacts]]) : le membre de droite tend vers $0$. Ainsi
$$
f(z)=\lim_{n\to\infty}f_n(z)=G(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)}{\zeta-z}\,d\zeta .
$$
Ceci étant vrai pour tout $z\in D(z_0,r)$, $f=G$ est holomorphe sur $D(z_0,r)$. Tout point de $\Omega$ étant centre d'un tel disque, $f$ est holomorphe sur $\Omega$.

**Point 2.** Soient $z_0\in\Omega$ et $r>0$ avec $\bar D(z_0,r)\subset\Omega$. Comme $\bar D(z_0,r)$ est compact et $\Omega$ ouvert, on a encore $\bar D(z_0,r')\subset\Omega$ pour un $r'>r$, donc $r<\rho(z_0)$ au sens des estimées de Cauchy. La formule (I.7.1) du corollaire I.7.5 ([[ch01-estimees-cauchy]]), appliquée à $f$ (holomorphe par le point 1) et à $f_n$, donne pour tout $z\in D(z_0,r)$ et tout $k\ge0$ :
$$
\frac{f^{(k)}(z)}{k!}=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)}{(\zeta-z)^{k+1}}\,d\zeta
\quad\text{et}\quad
\frac{f_n^{(k)}(z)}{k!}=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n(\zeta)}{(\zeta-z)^{k+1}}\,d\zeta .
$$
Fixons $k\ge0$ et $z\in\bar D(z_0,r/2)$. Pour $\zeta\in C(z_0,r)$, $|\zeta-z|\ge r-r/2=r/2$, donc
$$
|f^{(k)}(z)-f_n^{(k)}(z)|=\Big|\frac{k!}{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)-f_n(\zeta)}{(\zeta-z)^{k+1}}\,d\zeta\Big|
\le\frac{k!}{2\pi}\cdot2\pi r\cdot\frac{\sup_{|\zeta-z_0|=r}|f(\zeta)-f_n(\zeta)|}{(r/2)^{k+1}}
=\frac{k!\,2^{k+1}}{r^k}\sup_{|\zeta-z_0|=r}|f(\zeta)-f_n(\zeta)| .
$$
Le majorant ne dépend pas de $z\in\bar D(z_0,r/2)$ et tend vers $0$ (convergence uniforme sur le compact $C(z_0,r)$). Donc, dès que $\bar D(z_0,r)\subset\Omega$, la suite $(f_n^{(k)})_n$ converge uniformément vers $f^{(k)}$ sur $D(z_0,r/2)$, voisinage de $z_0$. Autrement dit, elle converge localement uniformément vers $f^{(k)}$ sur $\Omega$. $\square$

## Preuve à trous

**Point 1.** Par [[ch03-cauchy-locale-equivaut-convergence]], $f_n\to f$ localement uniformément, donc $f$ est continue. Soit $\bar D(z_0,r)\subset\Omega$ ; la fonction $G(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)}{\zeta-z}d\zeta$ est holomorphe sur $D(z_0,r)$ (intégrale à paramètre, $f$ continue). Pour $z\in D(z_0,r)$, la formule de Cauchy pour $f_n$ donne $|f_n(z)-G(z)|\le$ <trou indice="majoration longueur × sup, avec |ζ − z| ≥ r − |z − z0|">$\frac{r}{r-|z-z_0|}\sup_{C(z_0,r)}|f_n-f|$</trou>, qui tend vers $0$ car <trou>$f_n\to f$ uniformément sur le compact $C(z_0,r)$</trou>. Donc $f(z)=\lim f_n(z)=G(z)$ et $f$ est holomorphe sur $D(z_0,r)$.

**Point 2.** Pour $z\in\bar D(z_0,r/2)$, on écrit $f^{(k)}(z)-f_n^{(k)}(z)$ grâce à <trou indice="formule (I.7.1)">la formule de Cauchy pour les dérivées : $\frac{k!}{2i\pi}\int_{C(z_0,r)}\frac{f(\zeta)-f_n(\zeta)}{(\zeta-z)^{k+1}}d\zeta$</trou>, et comme <trou indice="distance du point au cercle">$|\zeta-z|\ge r/2$ pour $\zeta\in C(z_0,r)$</trou>, on obtient
$$
|f^{(k)}(z)-f_n^{(k)}(z)|\le\frac{k!\,2^{k+1}}{r^k}\sup_{C(z_0,r)}|f-f_n|\xrightarrow[n\to\infty]{}0,
$$
uniformément en $z\in\bar D(z_0,r/2)$ : convergence localement uniforme de $f_n^{(k)}$ vers $f^{(k)}$. $\square$

## Exemples

* **Série géométrique et ses dérivées.** $S_n(z)=\sum_{j=0}^nz^j\to\frac1{1-z}$ localement uniformément sur $D(0,1)$ : sur $\bar D(0,r)$, $r<1$, $\big|\frac1{1-z}-S_n(z)\big|=\frac{|z|^{n+1}}{|1-z|}\le\frac{r^{n+1}}{1-r}$. Le théorème donne gratuitement $S_n'(z)=\sum_{j=1}^njz^{j-1}\to\frac1{(1-z)^2}$ et plus généralement $S_n^{(k)}\to\frac{k!}{(1-z)^{k+1}}$, localement uniformément sur $D(0,1)$.
* **Uniforme sur $\Omega$ ne se transmet pas aux dérivées.** $f_n(z)=z^n/n$ sur $D(0,1)$ : $\norm{f_n}_{\infty,D(0,1)}=1/n\to0$, convergence **uniforme** sur $D(0,1)$ vers $0$. Mais $f_n'(z)=z^{n-1}$ et $\norm{f_n'}_{\infty,D(0,1)}=1$ : la convergence de $f_n'$ vers $0$ est seulement **localement** uniforme. C'est la « perte de rayon » de la preuve ($D(z_0,r)$ devient $D(z_0,r/2)$).
* **Fonction définie par une limite.** $(1+z/n)^n\to e^z$ localement uniformément sur $\C$ : sur $\bar D(0,R)$ et pour $n\ge2R$, $w=z/n$ vérifie $|w|\le1/2$, et avec $\mathrm{Log}(1+w)=\sum_{j\ge1}(-1)^{j+1}w^j/j$ on a $|\mathrm{Log}(1+w)-w|\le\sum_{j\ge2}\frac{|w|^j}{2}=\frac{|w|^2}{2(1-|w|)}\le|w|^2$, d'où $|n\,\mathrm{Log}(1+z/n)-z|\le R^2/n$ et $|(1+z/n)^n-e^z|=|e^z|\,|e^{n\mathrm{Log}(1+z/n)-z}-1|\le e^R(e^{R^2/n}-1)\to0$. Par Weierstraß, $\big((1+z/n)^n\big)'=(1+z/n)^{n-1}\to e^z$ aussi.

## Pièges

* > ⚠️ **Le disque doit être fermé dans $\Omega$** : on demande $\bar D(z_0,r)\subset\Omega$, pas seulement $D(z_0,r)\subset\Omega$, pour que le cercle $C(z_0,r)$ soit dans $\Omega$ et que les $f_n$ y convergent uniformément.
* > ⚠️ La convergence des dérivées est **localement** uniforme, même si $f_n\to f$ uniformément sur $\Omega$ tout entier (exemple $z^n/n$).
* Le théorème est faux en variable réelle (voir H1) : ne jamais « dériver terme à terme » une limite uniforme de fonctions réelles sans hypothèse sur les dérivées.
* L'hypothèse est sur la suite $(f_n)$ seulement ; aucune hypothèse sur $(f_n')$ n'est requise, contrairement au théorème réel de dérivation des suites de fonctions.
* Pour une **série** de fonctions holomorphes, voir la version [[ch03-weierstrass-series]].
