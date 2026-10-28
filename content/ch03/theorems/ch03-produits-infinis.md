---
id: ch03-produits-infinis
type: theorem
chapter: 3
title: Produits infinis de fonctions holomorphes
ref: Théorème III.5.1
page: 68
importance: 3
depends: [ch03-weierstrass-series, ch03-weierstrass, ch03-log-estimation, ch02-logarithme-determination-principale-def, ch03-convergence-uniforme-compacts, ch03-convergence-normale-definition, ch01-def-multiplicite-zero]
tags: [produits-infinis, logarithme, derivee-logarithmique, zeros, convergence-normale]
---
## Intuition

> 💡 Un produit, c'est l'exponentielle d'une somme : $\prod(1+f_j)=\exp\big(\sum\mathrm{Log}(1+f_j)\big)$. Si les facteurs $1+f_j$ sont **très proches de $1$** (au sens où $\sum f_j$ converge localement normalement), les $\mathrm{Log}(1+f_j)\approx f_j$ forment une série qui converge aussi localement normalement, et l'exponentielle de sa somme est une fonction holomorphe **qui ne s'annule pas**.

Conséquence : les seuls zéros du produit infini sont ceux des **facteurs** (et, localement, seuls un nombre fini de facteurs peuvent s'annuler) ; on ne voit jamais apparaître de zéro « par passage à la limite », comme dans $\prod_{n\ge2}(1-1/n)=0$. Et la **dérivée logarithmique** $G'/G$ d'un produit est la somme des dérivées logarithmiques des facteurs : c'est l'outil qui permet d'identifier un produit infini à une fonction connue ([[ch03-produit-sinus]], [[ch03-gamma-produit-weierstrass]]).

Vocabulaire : une série $\sum f_n$ **converge localement normalement** sur $\Omega$ si pour tout compact $K\subset\Omega$, $\sum_n\norm{f_n}_{\infty,K}<+\infty$, où $\norm{h}_{\infty,K}=\sup_K|h|$ ([[ch03-convergence-normale-definition]], [[ch03-weierstrass-series]]). La convergence **localement uniforme** équivaut à la convergence uniforme sur tout compact ([[ch03-convergence-uniforme-compacts]]). $\mathrm{Log}$ est la détermination principale du logarithme sur $\C\setminus\R_-$ ([[ch02-logarithme-determination-principale-def]]).

## Énoncé

**Théorème (poly, Théorème III.5.1, p. 68).** Soit $\sum_{n\ge0}f_n$ une série de fonctions holomorphes, définies sur un ouvert $\Omega$ et qui converge localement normalement. Posons $g_n=1+f_n$. Alors la suite $(G_n)_{n\ge0}$ définie par
$$
G_n(z):=\prod_{j=0}^ng_j(z)=\prod_{j=0}^n\big(1+f_j(z)\big)
$$
converge localement uniformément vers une fonction holomorphe $G$ sur $\Omega$. On note alors $G(z)=\prod_{j=0}^{\infty}(1+f_j(z))$. La fonction $G$ s'annule en un point exactement lorsque l'un des facteurs du produit infini s'annule en ce point, ce qui n'arrive que pour un nombre fini de facteurs, et l'ordre de ce zéro de $G$ est la somme des ordres de ce zéro pour ces facteurs. On a alors
$$
\frac{G'}{G}=\sum_{n\in\N}\frac{g_n'}{g_n},
$$
la convergence de la série étant uniforme sur tout compact de $\Omega$ (i.e. pour un compact $K$ fixé, à partir d'un certain rang $n_0$, la fonction $g_n$ ne s'annule plus sur $K$ et on a convergence uniforme de la série $\sum_{n\in\N}g_n'/g_n$ sur ce compact).

*Lecture précise de la dernière phrase.* Sur $K$, c'est la série $\sum_{n\ge n_0}g_n'/g_n$ (dont tous les termes sont holomorphes au voisinage de $K$) qui converge uniformément sur $K$ ; les premiers termes $g_n'/g_n$, $n<n_0$, peuvent avoir des pôles sur $K$ ; l'égalité $G'/G=\sum_n g_n'/g_n$ a lieu en tout point où $G\ne0$.

## Hypothèses

### H1 — Les $f_n$ sont holomorphes sur l'ouvert $\Omega$

**Rôle.** Elle rend $\mathrm{Log}(1+f_n)$ holomorphe (composée de fonctions holomorphes) là où $|f_n|<1/2$, permet d'appliquer le théorème de Weierstraß ([[ch03-weierstrass]], [[ch03-weierstrass-series]]) à la série des logarithmes et aux dérivées, et donne un sens à l'« ordre d'un zéro » ([[ch01-def-multiplicite-zero]]).

**Si on la retire.** La convergence uniforme du produit subsiste pour des $f_n$ seulement continues (même preuve sans Weierstraß), mais la limite n'a aucune raison d'être holomorphe : avec $f_0(z)=\bar z-1$ et $f_n=0$ pour $n\ge1$, $\sum f_n$ converge localement normalement sur $\C$ et $G(z)=\bar z$ n'est holomorphe nulle part ([[ch01-exemple-zbar-rez-module]]) ; les notions d'ordre de zéro et de $G'$ n'ont plus de sens.

### H2 — $\sum f_n$ converge localement normalement (facteurs $g_n=1+f_n$ « proches de $1$ »)

**Rôle.** Sur un compact $K$, elle force $\norm{f_n}_{\infty,K}\to0$, donc $|f_n|<1/2$ sur $K$ à partir d'un rang $m$ : les facteurs de rang $\ge m$ ne s'annulent pas et $\mathrm{Log}(1+f_n)$ a un sens ; avec $|\mathrm{Log}(1+\omega)|\le C|\omega|$ ([[ch03-log-estimation]]), elle donne la convergence **normale** de $\sum_{n\ge m}\mathrm{Log}(1+f_n)$ et la minoration uniforme $\big|\prod_{k=m}^n g_k\big|\ge e^{-CM}$.

**Si on la retire.** 
* *Divergence vers $0$ sans facteur nul.* Pour les fonctions constantes $f_n=-1/n$ ($n\ge2$), $\sum\norm{f_n}=\sum1/n=+\infty$, et $\prod_{k=2}^n(1-1/k)=\prod_{k=2}^n\frac{k-1}{k}=\frac1n\to0$ : le « produit » est nul alors qu'aucun facteur ne s'annule (Remarque III.5.2, [[ch03-produits-infinis-remarque]]).
* *La convergence (même uniforme) de $\sum f_n$ ne suffit pas.* Pour les constantes $f_n=(-1)^n/\sqrt n$ ($n\ge2$), $\sum f_n$ converge (série alternée), uniformément sur $\C$ (fonctions constantes), mais pas normalement. Comme $1+f_n>0$ et $\mathrm{Log}(1+x)=x-\frac{x^2}2+O(x^3)$, on a $\sum_{k=2}^n\mathrm{Log}(1+f_k)=\sum_{k=2}^n\frac{(-1)^k}{\sqrt k}-\sum_{k=2}^n\frac1{2k}+\sum_{k=2}^nO(k^{-3/2})\to-\infty$, donc $\prod_{k=2}^n(1+f_k)\to0$, encore sans facteur nul.
* *Divergence vers l'infini.* $f_n(z)=z/n$ ($n\ge1$) : $\sum f_n$ ne converge pas, et pour $z=1$, $\prod_{k=1}^n(1+1/k)=n+1\to+\infty$. C'est pour cela qu'on introduit les facteurs $e^{-z/k}$ dans le produit de Weierstraß de $\Gamma$ ([[ch03-gamma-produit-weierstrass]]).

## Idée de la preuve

Sur un compact $K$, à partir d'un rang $m$, $|f_n|<1/2$ : la série $\sum_{n\ge m}\mathrm{Log}(1+f_n)$ converge normalement (car $|\mathrm{Log}(1+\omega)|\le C|\omega|$), donc $\prod_{n\ge m}g_n=\exp\big(\sum_{n\ge m}\mathrm{Log}(1+f_n)\big)$ converge uniformément vers une fonction holomorphe **qui ne s'annule pas** ; on multiplie par le produit fini $\prod_{j<m}g_j$, et on dérive avec Weierstraß.

## Preuve

**Étape 0 : un voisinage du compact.** Soit $K\subset\Omega$ un compact. Comme $\Omega$ est ouvert et $K$ compact, il existe $r>0$ tel que $K_r:=\{z\in\C:\ \dist(z,K)\le r\}\subset\Omega$ ; $K_r$ est compact et contient l'ouvert $U:=\{z:\ \dist(z,K)<r\}\supset K$. (*Le poly travaille directement « sur $K$ » ; passer par l'ouvert $U$ permet d'appliquer proprement les théorèmes sur les fonctions holomorphes, qui sont énoncés sur des ouverts.*) Par hypothèse $\sum_n\norm{f_n}_{\infty,K_r}<+\infty$, donc $\norm{f_n}_{\infty,K_r}\to0$ et il existe $m\in\N$ tel que $\sup_{K_r}|f_n|<1/2$ pour tout $n\ge m$.

**Étape 1 : la queue du produit.** Pour $n\ge m$ et $z\in U$, $1+f_n(z)\in D(1,1/2)\subset\C\setminus\R_-$, donc $L_n:=\mathrm{Log}(1+f_n)$ est holomorphe sur $U$ et, par [[ch03-log-estimation]], $\norm{L_n}_{\infty,K_r}\le C\norm{f_n}_{\infty,K_r}$. La série $\sum_{n\ge m}L_n$ converge donc normalement sur $U$ ; par le Théorème III.1.5 ([[ch03-weierstrass-series]]) sa somme $S$ est holomorphe sur $U$ et les sommes partielles $S_n:=\sum_{k=m}^nL_k$ convergent uniformément vers $S$ sur $U$. Posons $M:=\sum_{k\ge m}\norm{f_k}_{\infty,K_r}$ ; alors $|S_n|\le CM$ et $|S|\le CM$ sur $U$.

Comme $e^{\mathrm{Log}(w)}=w$, on a $\tilde G_n:=\prod_{k=m}^ng_k=e^{S_n}$. Pour $a,b\in\C$ de parties réelles $\le CM$,
$$
|e^a-e^b|=\Big|\int_0^1e^{b+t(a-b)}(a-b)\,dt\Big|\le e^{CM}|a-b| ,
$$
donc $\norm{\tilde G_n-e^S}_{\infty,U}\le e^{CM}\norm{S_n-S}_{\infty,U}\to0$ : $\tilde G_n$ converge uniformément sur $U$ vers $\tilde G:=e^S=\exp\big(\sum_{k\ge m}\mathrm{Log}(1+f_k)\big)$, holomorphe sur $U$, qui **ne s'annule pas**. Mieux : $|\tilde G_n|=e^{\Re S_n}\ge e^{-CM}$ et $|\tilde G|\ge e^{-CM}$ sur $U$, uniformément en $n$ (c'est la conséquence énoncée dans [[ch03-log-estimation]]).

**Étape 2 : le produit complet.** Soit $P:=\prod_{j=0}^{m-1}g_j$, holomorphe sur $\Omega$, donc bornée sur le compact $K_r$. Pour $n\ge m$, $G_n=P\,\tilde G_n$ et
$$
\norm{G_n-P\tilde G}_{\infty,U}\le\norm{P}_{\infty,K_r}\,\norm{\tilde G_n-\tilde G}_{\infty,U}\to0 .
$$
Ainsi $(G_n)$ converge uniformément sur $U\supset K$, en particulier sur $K$. Le compact $K$ étant arbitraire, $(G_n)$ converge uniformément sur tout compact, donc localement uniformément sur $\Omega$ ([[ch03-convergence-uniforme-compacts]]), vers une fonction $G$ qui est holomorphe par le théorème de Weierstraß ([[ch03-weierstrass]]) ; sur $U$, $G=P\,\tilde G$.

**Étape 3 : les zéros.** Soit $z_0\in\Omega$ ; appliquons ce qui précède à $K=\{z_0\}$. Sur l'ouvert $U\ni z_0$, $G=P\tilde G$ avec $\tilde G$ sans zéro, et les $g_n$, $n\ge m$, ne s'annulent pas sur $U$. Donc $G(z_0)=0$ si et seulement si $P(z_0)=0$, c'est-à-dire si et seulement si l'un des facteurs $g_j$ s'annule en $z_0$, et cela ne peut arriver que pour $j<m$ : un nombre fini de facteurs. Enfin, si $g_j(z)=(z-z_0)^{a_j}h_j(z)$ avec $h_j(z_0)\ne0$ ($a_j$ = ordre du zéro de $g_j$ en $z_0$, $a_j=0$ si $g_j(z_0)\ne0$, voir [[ch01-def-multiplicite-zero]]), alors
$$
G(z)=(z-z_0)^{a_0+\cdots+a_{m-1}}\,h_0(z)\cdots h_{m-1}(z)\,\tilde G(z),\qquad h_0(z_0)\cdots h_{m-1}(z_0)\,\tilde G(z_0)\ne0,
$$
donc l'ordre du zéro de $G$ en $z_0$ est $\sum_ja_j$ : la somme des ordres de ce zéro pour les facteurs.

**Étape 4 : la dérivée logarithmique.** Reprenons un compact $K$ et $U$, $m$ comme à l'étape 0 ; posons $n_0:=m$. Par le théorème de Weierstraß (point 2, [[ch03-weierstrass]]) appliqué sur $U$, $\tilde G_n'\to\tilde G'$ localement uniformément sur $U$, donc uniformément sur le compact $K\subset U$. (*Le poly invoque ici le Théorème III.1.5 pour la série $\tilde G_n'=\sum_{k=m}^ng_k'\prod_{j\ne k}g_j$ ; c'est le même argument.*) Sur $K$,
$$
\frac{\tilde G_n'}{\tilde G_n}-\frac{\tilde G'}{\tilde G}=\frac{\tilde G_n'-\tilde G'}{\tilde G_n}+\tilde G'\,\frac{\tilde G-\tilde G_n}{\tilde G_n\tilde G},
$$
et comme $|\tilde G_n|,|\tilde G|\ge e^{-CM}$ et $\tilde G'$ est bornée sur $K$, cette différence tend vers $0$ uniformément sur $K$. Or la dérivée d'un produit fini de fonctions qui ne s'annulent pas donne
$$
\frac{\tilde G_n'}{\tilde G_n}=\frac{\sum_{k=m}^ng_k'\prod_{j\ne k}g_j}{\prod_{k=m}^ng_k}=\sum_{k=m}^n\frac{g_k'}{g_k}.
$$
Donc $\sum_{k\ge m}g_k'/g_k$ converge uniformément sur $K$ vers $\tilde G'/\tilde G$. Enfin, en un point de $K$ où $G\ne0$ (donc $P\ne0$), $G=P\tilde G$ donne $\dfrac{G'}G=\dfrac{P'}P+\dfrac{\tilde G'}{\tilde G}=\sum_{j<m}\dfrac{g_j'}{g_j}+\sum_{k\ge m}\dfrac{g_k'}{g_k}$. $\square$

## Preuve à trous

Soit $K\subset\Omega$ compact (et $U\supset K$ un voisinage ouvert d'adhérence compacte dans $\Omega$). Par convergence locale normale, il existe $m$ tel que <trou indice="que donne $\sum\norm{f_n}_{\infty}<\infty$ sur le terme général ?">$\sup|f_n|<1/2$ sur $U$ pour tout $n\ge m$</trou>. Alors $\mathrm{Log}(1+f_n)$ est holomorphe sur $U$ et <trou indice="le lemme d'estimation du logarithme">$|\mathrm{Log}(1+f_n)|\le C|f_n|$</trou>, de sorte que $\sum_{n\ge m}\mathrm{Log}(1+f_n)$ converge normalement sur $U$ vers une fonction holomorphe $S$. Donc $\prod_{k=m}^n(1+f_k)=$ <trou indice="un produit est l'exponentielle de...">$\exp\big(\sum_{k=m}^n\mathrm{Log}(1+f_k)\big)$</trou> converge vers $\tilde G:=e^S$ uniformément sur $U$, et $\tilde G$ ne s'annule pas ; plus précisément les produits partiels sont minorés en module par $e^{-CM}$, $M=\sum_{k\ge m}\norm{f_k}_\infty$. On multiplie par le produit fini $\prod_{j<m}(1+f_j)$ : $G_n\to G$ uniformément sur $K$, $G$ holomorphe (Weierstraß), et <trou indice="où sont les zéros de $G$ près de $K$ ?">les zéros de $G$ sur $U$ sont ceux du produit fini $\prod_{j<m}g_j$, avec ordres additionnés</trou>. Enfin, par Weierstraß, $\tilde G_n'\to\tilde G'$ uniformément sur $K$, et grâce à la minoration uniforme $|\tilde G_n|\ge e^{-CM}$, $\sum_{k=m}^n g_k'/g_k=\tilde G_n'/\tilde G_n\to\tilde G'/\tilde G$ uniformément sur $K$, d'où $G'/G=\sum_n g_n'/g_n$ hors des zéros de $G$. $\square$

## Exemples

* **Produit du sinus.** $f_n(z)=-z^2/n^2$ ($n\ge1$) : $\norm{f_n}_{\infty,\bar D(0,R)}=R^2/n^2$, série convergente ; donc $\prod_{n\ge1}(1-z^2/n^2)$ est une fonction entière, de zéros $\pm1,\pm2,\dots$, tous simples (chaque facteur $1-z^2/n^2=(1-z/n)(1+z/n)$ a deux zéros simples, et un point $\pm n$ n'annule qu'un seul facteur), et
$$
\frac{G'(z)}{G(z)}=\sum_{n\ge1}\frac{-2z/n^2}{1-z^2/n^2}=\sum_{n\ge1}\frac{2z}{z^2-n^2}\qquad(z\notin\Z).
$$
Voir [[ch03-produit-sinus]] : $\pi zG(z)=\sin(\pi z)$.
* **Produit de Blaschke.** Soit $(a_n)$ une suite de $D^\times=D(0,1)\setminus\{0\}$ avec $\sum(1-|a_n|)<\infty$. Les facteurs $b_n(z)=\dfrac{|a_n|}{a_n}\dfrac{a_n-z}{1-\bar a_nz}$ s'écrivent $1+f_n$ avec $f_n(z)=-\dfrac{(1-|a_n|)(a_n+|a_n|z)}{a_n(1-\bar a_nz)}$ (calcul direct : $|a_n|(a_n-z)-a_n(1-\bar a_nz)=-(1-|a_n|)(a_n+|a_n|z)$), d'où, comme $\big|a_n+|a_n|z\big|\le2|a_n|$ et $|1-\bar a_nz|\ge1-r$, $|f_n(z)|\le\dfrac{2(1-|a_n|)}{1-r}$ sur $\bar D(0,r)$, $r<1$. La série $\sum f_n$ converge localement normalement sur $D$ : $\prod b_n$ est holomorphe sur $D$, de zéros exactement les $a_n$ (avec multiplicité).
* **Un produit sur le disque.** $\prod_{n\ge1}(1+z^n)$ sur $D$ : $\norm{z^n}_{\infty,\bar D(0,r)}=r^n$, série convergente pour $r<1$, donc le produit est holomorphe sur $D$ et sans zéro dans $D$ (aucun facteur ne s'annule dans $D$ car $|z^n|<1$).

## Pièges

* > ⚠️ Il faut la convergence localement **normale** de $\sum f_n$ (où $f_n=g_n-1$), pas la convergence de $\sum f_n$ ni même sa convergence uniforme : voir H2.
* > ⚠️ La formule $G'/G=\sum g_n'/g_n$ n'a de sens qu'**en dehors des zéros de $G$** ; sur un compact $K$, seule la queue $\sum_{n\ge n_0}$ converge uniformément sur $K$.
* Ne pas écrire $\mathrm{Log}\big(\prod g_n\big)=\sum\mathrm{Log}(g_n)$ : c'est faux en général (égalité modulo $2i\pi$) ; la preuve utilise $\prod g_n=\exp\big(\sum\mathrm{Log}\,g_n\big)$, qui est exact.
* Si un facteur $g_j$ est identiquement nul sur une composante connexe de $\Omega$, alors $G$ y est identiquement nulle (zéro « d'ordre infini ») ; c'est le seul cas dégénéré. Sur un compact $K$ donné, il ne peut concerner qu'un nombre fini d'indices $j$ (ceux pour lesquels $\norm{f_j}_{\infty,K}\ge1/2$) ; mais si $\Omega$ a une infinité de composantes connexes (par exemple $\Omega=\bigcup_{k\ge1}D(3k,1)$ avec $f_k=-1$ sur $D(3k,1)$ et $f_k=0$ ailleurs, série localement normalement convergente), une infinité de facteurs peuvent être nuls chacun sur sa composante.
* Deux fonctions entières ayant les mêmes zéros, avec les mêmes ordres, ne sont égales qu'au facteur $e^{h}$ près ($h$ entière) : pour identifier un produit infini à une fonction connue, on compare les **dérivées logarithmiques** (ou on utilise un argument de croissance), pas seulement les zéros.
