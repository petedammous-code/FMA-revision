---
id: ch05-banach-series-absolument-convergentes
type: proposition
chapter: 5
title: Caractérisation des espaces de Banach par les séries absolument convergentes
ref: Proposition V.1.1
page: 93
importance: 2
depends: []
tags: [banach, complet, serie, cauchy, absolument-convergente]
---
## Intuition

> 💡 Dans $\R$, « une série dont les valeurs absolues se somment converge » est le critère que l'on utilise sans y penser. La proposition dit que cette propriété **caractérise** les espaces complets : avoir le droit de sommer $\sum x_n$ dès que $\sum\|x_n\|<+\infty$, c'est exactement être un espace de Banach.

Image mentale : une série absolument convergente est une marche dont les pas $x_n$ ont des longueurs $\|x_n\|$ de somme finie. Les positions successives $S_N=x_0+\dots+x_N$ forment une suite de Cauchy : au-delà du rang $N$, on ne bouge plus que d'au plus $\sum_{n>N}\|x_n\|$, qui tend vers $0$. Dans un espace complet, la marche aboutit. Réciproquement, une suite de Cauchy peut toujours être « re-découpée » en pas de longueurs $\le 2^{-k}$ : elle devient une série absolument convergente, et si celle-ci converge, la suite aussi.

Vocabulaire. Un **espace de Banach** est un espace vectoriel normé $(E,\|\cdot\|_E)$ (sur $\R$ dans tout le chapitre) qui est **complet** : toute suite de Cauchy de $E$ converge dans $E$. Une **série** $\sum_n x_n$ à valeurs dans $E$ **converge** si la suite de ses sommes partielles $S_N=\sum_{n=0}^N x_n$ converge dans $E$ ; sa limite est notée $\sum_{n=0}^{+\infty}x_n$. Elle est **absolument convergente** si la série numérique $\sum_n\|x_n\|_E$ converge, c'est-à-dire si $\sum_{n}\|x_n\|_E<+\infty$.

## Énoncé

**Proposition (poly, Proposition V.1.1, p. 93).** Soit $E$ un espace vectoriel normé. Alors $E$ est complet si et seulement si toute série à valeurs dans $E$ absolument convergente est convergente.

Autrement dit : $E$ est un espace de Banach si et seulement si, pour toute suite $(x_n)_{n\in\N}$ de $E$,
$$
\sum_{n=0}^{+\infty}\|x_n\|_E<+\infty \quad\Longrightarrow\quad \text{la suite } S_N=\sum_{n=0}^{N}x_n \text{ converge dans } E .
$$

*Complément immédiat (non écrit dans le poly, utilisé partout) :* lorsque la série converge, $\Big\|\sum_{n=0}^{+\infty}x_n\Big\|_E\le\sum_{n=0}^{+\infty}\|x_n\|_E$.

## Hypothèses

### H1 — $E$ est un espace vectoriel normé

**Rôle.** La structure vectorielle donne un sens aux sommes partielles ; l'inégalité triangulaire $\|\sum_{n=N+1}^M x_n\|\le\sum_{n=N+1}^M\|x_n\|$ est le seul outil du sens direct ; le sens réciproque utilise le télescopage $u_{\varphi(K)}-u_{\varphi(0)}=\sum_{k<K}(u_{\varphi(k+1)}-u_{\varphi(k)})$.

**Si on la retire.** L'énoncé n'a plus de sens : dans un espace métrique général on ne peut ni additionner ni parler de série. C'est une hypothèse de cadre. Notons que « sur $\R$ » n'est pas utilisé : la preuve est identique pour un espace vectoriel normé complexe.

### H2 — « absolument convergente » signifie $\sum_n\|x_n\|_E<+\infty$

**Rôle.** Dans le sens direct, c'est ce qui rend les sommes partielles de Cauchy : $\|S_M-S_N\|\le\sum_{n>N}\|x_n\|$, reste d'une série numérique convergente.

**Si on la retire.** Supposer seulement $x_n\to 0$ ne suffit pas, même dans $\R$ qui est complet : $\sum_{n\ge1}\frac1n$ diverge (ses sommes partielles vérifient $\sum_{n=1}^N\frac1n\ge\int_1^{N+1}\frac{dt}{t}=\ln(N+1)\to+\infty$).

### H3 — la propriété porte sur **toutes** les séries absolument convergentes

**Rôle.** Dans le sens réciproque, on part d'une suite de Cauchy quelconque et on applique l'hypothèse à la série particulière des pas $x_k=u_{\varphi(k+1)}-u_{\varphi(k)}$ ; il faut donc que l'hypothèse couvre toute série absolument convergente.

**Si on la retire.** Il ne suffit pas que *certaines* séries absolument convergentes convergent. Dans $E=\R[X]$, espace des fonctions polynomiales sur $[0,1]$ muni de $\|P\|_\infty=\sup_{[0,1]}|P|$, toute série à support fini converge, mais $E$ n'est pas complet : la série $\sum_n \frac{X^n}{n!}$ est absolument convergente ($\|X^n/n!\|_\infty=\frac1{n!}$, de somme $e$), ses sommes partielles convergent uniformément sur $[0,1]$ vers $\exp$ (dans $C([0,1])$), et $\exp$ n'est pas un polynôme (un polynôme de degré $d$ a une dérivée $(d+1)$-ième nulle, alors que $\exp^{(d+1)}=\exp\neq0$). Par unicité de la limite dans $C([0,1])$, la série n'a pas de limite dans $E$.

## Idée de la preuve

($\Rightarrow$) Les sommes partielles sont de Cauchy car $\|S_M-S_N\|\le\sum_{n>N}\|x_n\|\to0$. ($\Leftarrow$) D'une suite de Cauchy on extrait une sous-suite dont les pas consécutifs ont une norme $\le 2^{-k}$ ; la série de ces pas est absolument convergente, donc converge ; sa somme donne la limite de la sous-suite, puis de la suite entière.

## Preuve

*Le poly renvoie au cours de première année ; voici la preuve classique.*

**Sens direct.** Supposons $E$ complet et soit $(x_n)$ une suite de $E$ telle que $\sum_n\|x_n\|_E<+\infty$. Posons $S_N=\sum_{n=0}^N x_n$. Pour $M>N$, l'inégalité triangulaire donne
$$
\|S_M-S_N\|_E=\Big\|\sum_{n=N+1}^{M}x_n\Big\|_E\le\sum_{n=N+1}^{M}\|x_n\|_E\le\sum_{n=N+1}^{+\infty}\|x_n\|_E .
$$
Le membre de droite est le reste d'une série numérique convergente : il tend vers $0$ quand $N\to+\infty$. La suite $(S_N)$ est donc de Cauchy dans $E$, qui est complet : elle converge. La série $\sum x_n$ converge.

*Complément.* En passant à la limite $M\to+\infty$ dans $\|S_M\|_E\le\sum_{n=0}^{M}\|x_n\|_E$ (la norme est continue), on obtient $\|\sum_{n=0}^{+\infty}x_n\|_E\le\sum_{n=0}^{+\infty}\|x_n\|_E$.

**Sens réciproque.** Supposons que toute série absolument convergente de $E$ converge, et soit $(u_n)_{n\in\N}$ une suite de Cauchy de $E$. Montrons qu'elle converge.

*Étape 1 : extraction d'une sous-suite à pas sommables.* Pour tout $k\in\N$, le critère de Cauchy fournit un rang $N_k$ tel que $\|u_p-u_q\|_E\le 2^{-k}$ pour tous $p,q\ge N_k$. Définissons $\varphi:\N\to\N$ par $\varphi(0)=N_0$ et $\varphi(k+1)=\max(\varphi(k)+1,\,N_{k+1})$. Alors $\varphi$ est strictement croissante et $\varphi(k)\ge N_k$ pour tout $k$. Comme $\varphi(k+1)>\varphi(k)\ge N_k$, on a
$$
\|u_{\varphi(k+1)}-u_{\varphi(k)}\|_E\le 2^{-k}\qquad(k\in\N).
$$

*Étape 2 : la série des pas.* Posons $x_k=u_{\varphi(k+1)}-u_{\varphi(k)}$. Alors $\sum_k\|x_k\|_E\le\sum_k 2^{-k}=2<+\infty$ : la série $\sum x_k$ est absolument convergente, donc, par hypothèse, convergente. Notons $s$ sa somme. Or ses sommes partielles se télescopent :
$$
\sum_{k=0}^{K-1}x_k=\sum_{k=0}^{K-1}\big(u_{\varphi(k+1)}-u_{\varphi(k)}\big)=u_{\varphi(K)}-u_{\varphi(0)} .
$$
Donc $u_{\varphi(K)}\xrightarrow[K\to+\infty]{}\ell:=u_{\varphi(0)}+s$ : la sous-suite $(u_{\varphi(K)})$ converge vers $\ell$.

*Étape 3 : une suite de Cauchy qui a une sous-suite convergente converge.* Soit $\eps>0$. Il existe $N$ tel que $\|u_p-u_q\|_E\le\eps$ pour $p,q\ge N$, et il existe $K$ tel que $\varphi(K)\ge N$ et $\|u_{\varphi(K)}-\ell\|_E\le\eps$. Pour tout $n\ge N$,
$$
\|u_n-\ell\|_E\le\|u_n-u_{\varphi(K)}\|_E+\|u_{\varphi(K)}-\ell\|_E\le 2\eps .
$$
Ainsi $u_n\to\ell$ : toute suite de Cauchy de $E$ converge, $E$ est complet. $\square$

## Preuve à trous

**Sens direct.** Soit $\sum\|x_n\|<+\infty$ et $S_N=\sum_{n\le N}x_n$. Pour $M>N$, <trou indice="inégalité triangulaire puis reste d'une série numérique">$\|S_M-S_N\|\le\sum_{n=N+1}^M\|x_n\|\le\sum_{n>N}\|x_n\|\xrightarrow[N\to\infty]{}0$</trou>, donc $(S_N)$ est de Cauchy et converge puisque $E$ est complet.

**Sens réciproque.** Soit $(u_n)$ de Cauchy. On construit $\varphi$ strictement croissante telle que <trou indice="on veut des pas sommables, pas seulement tendant vers 0">$\|u_{\varphi(k+1)}-u_{\varphi(k)}\|\le 2^{-k}$ pour tout $k$ (prendre $\varphi(k)\ge N_k$ où $N_k$ est un rang du critère de Cauchy pour $2^{-k}$)</trou>. La série de terme général $x_k=u_{\varphi(k+1)}-u_{\varphi(k)}$ est <trou>absolument convergente car $\sum\|x_k\|\le\sum 2^{-k}=2$, donc convergente par hypothèse</trou>, de somme $s$. Par télescopage, <trou indice="exprimer la somme partielle avec les $u$">$\sum_{k<K}x_k=u_{\varphi(K)}-u_{\varphi(0)}$, donc $u_{\varphi(K)}\to\ell:=u_{\varphi(0)}+s$</trou>. Enfin une suite de Cauchy ayant une sous-suite convergente converge : pour $n\ge N$ et $\varphi(K)\ge N$ bien choisis, $\|u_n-\ell\|\le\|u_n-u_{\varphi(K)}\|+\|u_{\varphi(K)}-\ell\|\le2\eps$. $\square$

## Exemples

* **Exponentielle d'une matrice.** Dans $\Mat_d(\R)$ muni d'une norme d'opérateur $\|\cdot\|$ (espace complet car de dimension finie, et $\|A^k\|\le\|A\|^k$ par [[ch05-lef-banach-norme-algebre]]), la série $\sum_k\frac{A^k}{k!}$ vérifie $\sum_k\big\|\frac{A^k}{k!}\big\|\le\sum_k\frac{\|A\|^k}{k!}=e^{\|A\|}<+\infty$. Elle converge donc : c'est la définition de $\exp(A)$, et le complément donne $\|\exp(A)\|\le e^{\|A\|}$.
* **Série de Neumann.** Si $E$ est de Banach, $\mathcal L(E)$ l'est aussi ([[ch05-lef-banach-norme-algebre]]). Pour $h\in\mathcal L(E)$ avec $\|h\|<1$, $\sum_n\|h^n\|\le\sum_n\|h\|^n=\frac1{1-\|h\|}<+\infty$, donc $\sum_n h^n$ converge dans $\mathcal L(E)$ : c'est l'inverse de $\mathrm{Id}_E-h$ ([[ch05-serie-neumann]]), étape clé du théorème [[ch05-inversion-c-infini]]. Le poly signale explicitement (p. 109) que c'est là qu'on utilise la complétude.
* **Critère de Weierstraß.** Dans $C([0,1])$ muni de $\|\cdot\|_\infty$ (complet, cours de 1A), la série $\sum_{n\ge1}\frac{\sin(nt)}{n^2}$ vérifie $\sum_n\big\|\frac{\sin(n\,\cdot)}{n^2}\big\|_\infty\le\sum_n\frac1{n^2}<+\infty$, donc converge uniformément vers une fonction continue. Le « critère de Weierstraß » (convergence normale $\Rightarrow$ convergence uniforme) est exactement la proposition appliquée à l'espace de Banach des fonctions continues bornées.

## Pièges

* > ⚠️ Convergente $\neq$ absolument convergente, même dans $\R$ : $\sum\frac{(-1)^n}{n}$ converge mais $\sum\frac1n$ diverge. La proposition ne dit rien des séries non absolument convergentes.
* > ⚠️ Dans un espace **non** complet, une série absolument convergente peut ne pas converger (polynômes et $\sum X^n/n!$ ci-dessus). Appliquer la série de Neumann dans $\mathcal L(E)$ exige donc $E$ de Banach.
* La preuve réciproque demande des pas **sommables** ($\le 2^{-k}$), pas seulement tendant vers $0$ : $\|u_{n+1}-u_n\|\to0$ n'implique pas que $(u_n)$ soit de Cauchy ($u_n=\sqrt n$ dans $\R$ : $u_{n+1}-u_n=\frac1{\sqrt{n+1}+\sqrt n}\to0$ mais $u_n\to+\infty$).
* Le poly utilise cette proposition « sans plus de commentaires » (p. 93) : dans la preuve de [[ch05-application-ouverte]] (sommation de $\sum x_n$ avec $\|x_n\|\le 2^{-n}$) et dans [[ch05-serie-neumann]]. À l'examen, la citer explicitement et vérifier la complétude de l'espace où l'on somme.
