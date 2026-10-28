---
id: ch03-montel
type: theorem
chapter: 3
title: Théorème de Montel
ref: Théorème III.3.4
page: 64
importance: 3
depends: [ch03-famille-localement-uniformement-bornee, ch03-famille-normale, ch03-convergence-uniforme-compacts, ch03-bornee-sur-compacts, ch01-estimees-cauchy, ch01-derivee-f-rond-gamma, ch03-cauchy-locale-equivaut-convergence]
tags: [montel, famille-normale, compacite, extraction-diagonale, equicontinuite, cauchy]
---
## Intuition

> 💡 **Pour les fonctions holomorphes, « borné » entraîne « compact ».** Une suite de fonctions holomorphes qui reste bornée sur chaque compact admet toujours une sous-suite qui converge uniformément sur chaque compact. C'est le Bolzano–Weierstrass des fonctions holomorphes.

Pourquoi est-ce spécifique au complexe ? Une suite de fonctions réelles bornées peut osciller de plus en plus vite ($\sin(nx)$) et n'avoir aucune sous-suite convergente. Une fonction holomorphe, elle, ne peut pas osciller vite sans devenir grande : les **estimées de Cauchy** ([[ch01-estimees-cauchy]]) majorent $|f'|$ par $\sup|f|/\delta$. Une borne sur $f$ donne donc une borne sur $f'$, donc une constante de Lipschitz commune à toute la famille (équicontinuité), et la compacité suit par le même argument que le théorème d'Ascoli ([[ch03-ascoli]]) : extraction diagonale sur une partie dénombrable dense, puis recouvrement fini.

Vocabulaire : famille **localement uniformément bornée** : [[ch03-famille-localement-uniformement-bornee]] ; famille **normale** : [[ch03-famille-normale]] ; $\Hol(\Omega)$ : fonctions holomorphes sur $\Omega$.

## Énoncé

**Théorème (poly, Théorème III.3.4 — Montel, p. 64).** Soient $\Omega\subset\C$ un ouvert et $\mathcal F\subset\Hol(\Omega)$ une famille de fonctions holomorphes sur $\Omega$. Les assertions suivantes sont équivalentes :

1. la famille $\mathcal F$ est localement uniformément bornée sur $\Omega$,
2. la famille $\mathcal F$ est normale sur $\Omega$.

(Par le théorème de Weierstraß [[ch03-weierstrass]], la limite d'une sous-suite extraite est automatiquement holomorphe.)

## Hypothèses

### H1 — les fonctions de $\mathcal F$ sont holomorphes

**Rôle.** Dans le sens $1\Rightarrow2$, c'est elle qui permet d'appliquer les estimées de Cauchy : $|f'|\le C(K)/\delta$, d'où la majoration lipschitzienne uniforme (III.3.1). Dans le sens $2\Rightarrow1$, elle ne sert pas (l'argument marche pour des fonctions continues).

**Si on la retire.** $f_n(z)=\sin(n\,\Re(z))$, $n\ge1$, fonctions continues sur $\C$ bornées par $1$ : la famille est uniformément bornée, mais aucune sous-suite ne converge uniformément sur le compact $K=[0,2\pi]\subset\C$. En effet, pour $n\ne m$ (entiers $\ge1$), $\int_0^{2\pi}\sin(nx)\sin(mx)\,dx=0$ et $\int_0^{2\pi}\sin^2(nx)\,dx=\pi$, donc
$$
2\pi\sup_{[0,2\pi]}|f_n-f_m|^2\ge\int_0^{2\pi}\big(\sin(nx)-\sin(mx)\big)^2dx=2\pi ,
$$
soit $\sup_K|f_n-f_m|\ge1$ : aucune sous-suite n'est uniformément de Cauchy sur $K$.

### H2 — la borne est uniforme en $f\in\mathcal F$ (sens $1\Rightarrow2$)

**Rôle.** La constante $C(K)$ doit être la même pour toutes les $f$, sinon les estimées de Cauchy ne donnent pas une constante de Lipschitz commune et l'extraction ponctuelle (Bolzano–Weierstrass sur $(f_n(y_k))_n$) est impossible.

**Si on la retire.** $\{z\mapsto z+n,\ n\in\N\}$ ou $\{z\mapsto nz\}$ sur $\C$ : chaque fonction est bornée sur les compacts, mais pas uniformément en $n$ ; aucune sous-suite ne converge (en $z=1$, les valeurs $1+n$ ou $n$ tendent vers $+\infty$). La conclusion « normale » échoue.

### H3 — $\Omega$ ouvert (pas besoin de connexité)

**Rôle.** On utilise que tout point $z_0\in\Omega$ est centre d'un disque fermé $\bar D(z_0,r+\delta)\subset\Omega$ (pour les estimées de Cauchy) et que $\Omega$ contient une partie dénombrable dense ($\Omega\cap(\Q+i\Q)$).

**Si on la retire.** Hypothèse de cadre : sur une partie non ouverte, $\Hol$ n'a pas le même sens. Noter en revanche que la **connexité n'est pas requise** : la preuve est locale.

## Idée de la preuve

$2\Rightarrow1$ : si $\sup_{f,K}|f|=+\infty$, on extrait une suite $|f_n(z_n)|\to\infty$ qui converge uniformément sur $K$ : absurde. $1\Rightarrow2$ : extraction diagonale pour converger sur une partie dénombrable dense $S$ ; les estimées de Cauchy rendent la suite équi-lipschitzienne sur les disques, ce qui propage la convergence de $S$ à tout le disque (argument $\eps/3$ + recouvrement fini) ; on conclut par le critère de Cauchy.

## Preuve

**$2\Rightarrow1$.** On raisonne par l'absurde : supposons $\mathcal F$ normale mais non localement uniformément bornée. Par la reformulation sur les compacts ([[ch03-bornee-sur-compacts]]), il existe un compact $K\subset\Omega$ tel que $\sup_{f\in\mathcal F}\sup_K|f|=+\infty$ : il existe donc une suite $(z_n)_n$ de points de $K$ et une suite $(f_n)_{n\in\N}$ d'éléments de $\mathcal F$ telles que $\limsup_{n\to\infty}|f_n(z_n)|=+\infty$. Soit $(f_{n_k})_k$ une suite extraite telle que $\lim_{k\to\infty}|f_{n_k}(z_{n_k})|=+\infty$. Quitte à extraire, par hypothèse (normalité), on peut supposer que $(f_{n_k})_k$ converge localement uniformément, donc uniformément sur $K$ ([[ch03-convergence-uniforme-compacts]]) ; soit $f$ sa limite, continue sur $K$ comme limite uniforme de fonctions continues. Quitte à extraire à nouveau, on peut supposer que $(z_{n_k})_k$ converge (compacité de $K$) ; soit $z_\infty\in K$ sa limite. Alors
$$
|f_{n_k}(z_{n_k})-f(z_\infty)|\le\sup_K|f_{n_k}-f|+|f(z_{n_k})-f(z_\infty)|\xrightarrow[k\to\infty]{}0 ,
$$
donc $|f(z_\infty)|=\lim_k|f_{n_k}(z_{n_k})|=+\infty$, ce qui est absurde.

**$1\Rightarrow2$.** Soit $(f_n)_{n\in\N}$ une suite d'éléments de $\mathcal F$. On veut en extraire une sous-suite qui converge localement uniformément.

*Étape 1 : extraction diagonale.* Soit $S:=\{y_n,\ n\ge0\}$ une partie dénombrable dense de $\Omega$ (par exemple $\Omega\cap(\Q+i\Q)$). La suite $(f_n(y_0))_n$ est bornée (hypothèse 1 avec le compact $\{y_0\}$), donc par Bolzano–Weierstrass il existe $\varphi_0:\N\to\N$ strictement croissante telle que $(f_{\varphi_0(n)}(y_0))_n$ converge vers une limite notée $f(y_0)\in\C$. Par récurrence, on construit pour tout $p\ge1$ une extractrice $\varphi_p$ telle que $(f_{\varphi_0\circ\cdots\circ\varphi_p(n)}(y_p))_n$ converge (on applique Bolzano–Weierstrass à la suite bornée $(f_{\varphi_0\circ\cdots\circ\varphi_{p-1}(n)}(y_p))_n$) ; comme on extrait de suites qui convergent déjà en $y_0,\dots,y_{p-1}$, pour tout $0\le k\le p$ la suite $(f_{\varphi_0\circ\cdots\circ\varphi_p(n)}(y_k))_n$ converge vers une limite $f(y_k)$. On pose
$$
f_{\varphi(n)}:=f_{\varphi_0\circ\cdots\circ\varphi_n(n)},\qquad n\ge0 .
$$
$\varphi$ est strictement croissante, et pour tout $k$, $(f_{\varphi(n)}(y_k))_{n\ge k}$ est extraite de $(f_{\varphi_0\circ\cdots\circ\varphi_k(n)}(y_k))_n$ : la suite $(f_{\varphi(n)})_n$ converge simplement sur $S$.

*Étape 2 : équi-lipschitzianité par les estimées de Cauchy.* Soient $z_0\in\Omega$ et $\delta,r>0$ tels que $K:=\bar D(z_0,r+\delta)\subset\Omega$. Pour tout $z\in\bar D(z_0,r)$, le disque $\bar D(z,\delta)$ est contenu dans $K$. Par l'hypothèse 1 (sous forme compacte), il existe $C(K)>0$ telle que $|f_n(w)|\le C(K)$ pour tout $w\in K$ et tout $n\ge0$, et les estimées de Cauchy ([[ch01-estimees-cauchy]]) sur $\bar D(z,\delta)$ donnent
$$
|f_n'(z)|\le\frac{\sup_{|\zeta-z|=\delta}|f_n(\zeta)|}{\delta}\le\frac{C(K)}{\delta}\qquad(z\in\bar D(z_0,r),\ n\ge0).
$$
Soient $z,z'\in\bar D(z_0,r)$ ; le segment $[z,z']$ est contenu dans le disque (convexe) $\bar D(z_0,r)$. Posons $\gamma(t)=z+t(z'-z)$, $t\in[0,1]$ ; on a $\frac{d}{dt}f_n(\gamma(t))=f_n'(\gamma(t))(z'-z)$ ([[ch01-derivee-f-rond-gamma]]). Le théorème des accroissements finis appliqué aux fonctions réelles $t\mapsto\Re f_n(\gamma(t))$ et $t\mapsto\Im f_n(\gamma(t))$, dont les dérivées sont majorées en module par $|f_n'(\gamma(t))|\,|z'-z|\le\frac{C(K)}\delta|z-z'|$, donne
$$
|f_n(z)-f_n(z')|\le\frac{2C(K)}{\delta}|z-z'|\qquad\text{pour tout }n\ge0\text{ et tous }z,z'\in\bar D(z_0,r).\qquad\text{(III.3.1)}
$$
Quitte à prendre $C(K)$ plus grand, on suppose aussi $\frac{2C(K)}\delta\ge1$.

*Étape 3 : de $S$ au disque ($\eps/3$).* Fixons $0<\eps\le r/2$ et posons $\rho:=\frac{\eps\delta}{12C(K)}$ ; on a $\rho\le\eps/6\le r/12$. Soit $w_0\in\bar D(z_0,r/2)$ ; alors $D(w_0,\rho)\subset D(z_0,r)$. Pour tous $n\ge0$ et $z,z'\in D(w_0,\rho)$, on a $|z-z'|<2\rho$, donc par (III.3.1)
$$
|f_n(z)-f_n(z')|\le\frac{2C(K)}\delta\cdot\frac{\eps\delta}{6C(K)}=\frac\eps3 .
$$
Comme $S$ est dense dans $\Omega$, il existe $\zeta\in D(w_0,\rho)\cap S$, et comme $(f_{\varphi(n)}(\zeta))_n$ converge, il existe $N\in\N$ tel que $|f_{\varphi(k)}(\zeta)-f_{\varphi(p)}(\zeta)|\le\eps/3$ pour tous $k,p\ge N$. Donc, pour tout $z\in D(w_0,\rho)$ et tous $k,p\ge N$,
$$
|f_{\varphi(k)}(z)-f_{\varphi(p)}(z)|\le|f_{\varphi(k)}(z)-f_{\varphi(k)}(\zeta)|+|f_{\varphi(k)}(\zeta)-f_{\varphi(p)}(\zeta)|+|f_{\varphi(p)}(\zeta)-f_{\varphi(p)}(z)|\le\eps .
$$
La suite $(f_{\varphi(n)})_n$ est donc uniformément de Cauchy sur $\bar D(z_0,r/2)\cap D(w_0,\rho)$.

*Étape 4 : recouvrement fini et conclusion.* Le disque fermé $\bar D(z_0,r/2)$ est compact ; on peut le recouvrir par un nombre fini de disques $D(w_1,\rho),\dots,D(w_q,\rho)$ avec $w_i\in\bar D(z_0,r/2)$. En prenant pour $N$ le maximum des entiers $N_1,\dots,N_q$ associés, on obtient $|f_{\varphi(k)}(z)-f_{\varphi(p)}(z)|\le\eps$ pour tous $z\in\bar D(z_0,r/2)$ et $k,p\ge N$. Ceci valant pour tout $\eps\in\,]0,r/2]$, la suite $(f_{\varphi(n)})_n$ est uniformément de Cauchy sur $\bar D(z_0,r/2)$, qui est un voisinage de $z_0$. Ceci étant vrai pour tout $z_0\in\Omega$, la suite $(f_{\varphi(n)})_n$ est localement uniformément de Cauchy, donc converge localement uniformément d'après le lemme III.1.3 ([[ch03-cauchy-locale-equivaut-convergence]]). $\square$

*Remarque (poly, Remarque III.3.6).* Les étapes 1, 3, 4 sont une preuve « à la main » du théorème d'Ascoli ([[ch03-ascoli]]) ; le seul ingrédient complexe est l'étape 2 (voir aussi [[ch03-montel-equilipschitz]] et [[ch03-montel-vs-ascoli]]).

## Preuve à trous

**$2\Rightarrow1$.** Sinon il existe un compact $K$, des $z_n\in K$ et des $f_n\in\mathcal F$ avec $|f_n(z_n)|\to+\infty$ (après extraction). <trou indice="utiliser la normalité puis la compacité de K">Quitte à extraire, $f_{n_k}\to f$ uniformément sur $K$ et $z_{n_k}\to z_\infty\in K$</trou>, et alors $|f(z_\infty)|=\lim_k|f_{n_k}(z_{n_k})|=+\infty$ : absurde.

**$1\Rightarrow2$.** Soit $(f_n)$ une suite de $\mathcal F$ et $S=\{y_k\}$ dénombrable dense dans $\Omega$. Par <trou indice="Bolzano–Weierstrass point par point, puis...">Bolzano–Weierstrass en chaque $y_k$ et une extraction diagonale $f_{\varphi(n)}=f_{\varphi_0\circ\cdots\circ\varphi_n(n)}$</trou>, on obtient une sous-suite qui converge simplement sur $S$.

Si $K=\bar D(z_0,r+\delta)\subset\Omega$ et $|f_n|\le C(K)$ sur $K$, alors pour $z\in\bar D(z_0,r)$, <trou indice="quel contrôle de la dérivée par le sup sur un cercle ?">les estimées de Cauchy sur $\bar D(z,\delta)$ donnent $|f_n'(z)|\le C(K)/\delta$, d'où $|f_n(z)-f_n(z')|\le\frac{2C(K)}\delta|z-z'|$ par les accroissements finis</trou>.

Pour $\eps\le r/2$, $\rho=\frac{\eps\delta}{12C(K)}$, $w_0\in\bar D(z_0,r/2)$ et $\zeta\in S\cap D(w_0,\rho)$ : <trou>pour $z\in D(w_0,\rho)$ et $k,p\ge N$, $|f_{\varphi(k)}(z)-f_{\varphi(p)}(z)|\le\frac\eps3+\frac\eps3+\frac\eps3$ en passant par $\zeta$</trou>. Enfin <trou indice="compacité de $\bar D(z_0,r/2)$ puis critère de Cauchy">on recouvre $\bar D(z_0,r/2)$ par un nombre fini de disques $D(w_i,\rho)$ : la suite est uniformément de Cauchy sur $\bar D(z_0,r/2)$, donc localement uniformément de Cauchy, donc localement uniformément convergente (lemme III.1.3)</trou>. $\square$

## Exemples

* **Borne locale, pas globale.** $\mathcal F=\{nz^n,\ n\ge1\}$ sur $D(0,1)$ : sur $\bar D(0,\rho)$ ($\rho<1$), $|nz^n|\le\sup_{k\ge1}k\rho^k<+\infty$, donc $\mathcal F$ est localement uniformément bornée, donc normale par Montel — alors que $\sup_{D(0,1)}|nz^n|=n$. Directement : $n\rho^n\to0$, donc toute suite d'exposants tendant vers $+\infty$ donne une sous-suite qui tend vers $0$ localement uniformément.
* **Fonctions à partie réelle positive.** $\mathcal F=\{f\in\Hol(D(0,1)) : \Re f>0,\ f(0)=1\}$. Pour $f\in\mathcal F$, $g:=\frac{f-1}{f+1}$ est holomorphe sur $D(0,1)$ (car $f+1\ne0$), à valeurs dans $D(0,1)$ (car $\Re f>0\iff|f-1|<|f+1|$) et $g(0)=0$ ; le lemme de Schwarz ([[ch01-lemme-schwarz]]) donne $|g(z)|\le|z|$, et comme $f=\frac{1+g}{1-g}$,
$$
|f(z)|\le\frac{1+|g(z)|}{1-|g(z)|}\le\frac{1+|z|}{1-|z|}.
$$
Sur $\bar D(0,\rho)$, $\rho<1$, toute $f\in\mathcal F$ est bornée par $\frac{1+\rho}{1-\rho}$ : $\mathcal F$ est normale. (Elle n'est pas bornée sur $D(0,1)$ : $\frac{1+z}{1-z}\in\mathcal F$.)
* **Montel + unicité de la limite $\Rightarrow$ convergence de toute la suite.** Si $(f_n)$ est localement uniformément bornée sur $\Omega$ et converge **simplement** sur $\Omega$ vers $f$, alors $f_n\to f$ localement uniformément. Sinon, il existe un compact $K$, $\eps>0$ et une sous-suite avec $\sup_K|f_{n_k}-f|\ge\eps$ ; par Montel, une sous-sous-suite converge localement uniformément vers une fonction $g$, et $g=f$ (limite simple) : contradiction avec $\sup_K|f_{n_k}-f|\ge\eps$. (Avec le prolongement analytique [[ch01-prolongement-analytique]], il suffit même, si $\Omega$ est connexe, que $(f_n)$ converge simplement sur une partie $A\subset\Omega$ ayant un point d'accumulation dans $\Omega$ : deux limites $g_1,g_2$ de sous-suites sont holomorphes et coïncident sur $A$, donc sont égales, et la suite entière converge localement uniformément vers cette limite commune.)

## Pièges

* > ⚠️ Montel ne donne qu'une **sous-suite** convergente ; pour la convergence de la suite entière il faut l'argument « toute sous-suite convergente a la même limite » (troisième exemple).
* > ⚠️ La limite n'est pas forcément dans la famille : elle peut être constante, non injective, etc. Dans la preuve de Riemann ([[ch03-riemann-representation-conforme]]), Hurwitz ([[ch03-hurwitz]]) est indispensable pour récupérer l'injectivité.
* La borne doit être **uniforme en $f$** sur chaque compact ; la borne de chaque $f$ seule ne suffit pas ($\{nz\}$).
* Le résultat est faux pour des fonctions seulement continues, ou $C^\infty$ réelles ($\sin(nx)$) : il faut citer l'holomorphie et les estimées de Cauchy.
* Dans le sens $2\Rightarrow1$, on raisonne sur un **compact** $K$ et une suite de points $z_n\in K$ qui peut varier : la borne doit être uniforme à la fois en $z\in K$ et en $f\in\mathcal F$.
* Inutile de supposer $\Omega$ connexe ou borné.
