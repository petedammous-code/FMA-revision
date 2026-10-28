---
id: ch03-ascoli
type: proposition
chapter: 3
title: "Rappel : théorème d'Ascoli"
ref: Remarque III.3.5
page: 65
importance: 2
depends: [ch03-convergence-uniforme-compacts, ch03-cauchy-locale-equivaut-convergence]
tags: [ascoli, equicontinuite, compacite, extraction-diagonale, montel]
---
## Intuition

> 💡 Dans $\R^d$ (ou $\C^d$), « borné » suffit pour extraire une sous-suite convergente (Bolzano–Weierstrass). Dans un espace de **fonctions**, ce n'est plus vrai : $\sin(nx)$ reste entre $-1$ et $1$ mais oscille de plus en plus vite et n'a aucune sous-suite qui converge uniformément. Ascoli dit exactement ce qu'il faut ajouter à « borné » : interdire ces oscillations **de façon uniforme dans la famille**. C'est l'**équicontinuité** : un même voisinage $V$ de $x_0$ sert pour toutes les fonctions.

Image mentale : une famille équicontinue est un « troupeau de courbes » qui ont toutes le même module de continuité ; on peut alors contrôler toutes les fonctions sur un petit voisinage par leur valeur en un seul point, et une extraction diagonale sur un ensemble dénombrable dense suffit.

Vocabulaire. $\mathscr C(X,Y)$ est l'ensemble des applications continues de $X$ dans $Y$ ; il est muni de la **convergence uniforme sur les compacts** : $f_n\to f$ si pour tout compact $K\subset X$, $\sup_K\norm{f_n-f}\to0$ (pour $X=\Omega$ ouvert de $\C$, c'est la convergence localement uniforme, [[ch03-convergence-uniforme-compacts]]). Une partie $\mathcal H$ est **relativement compacte** si son adhérence est compacte. C'est le cadre général dont le théorème de Montel ([[ch03-montel]]) est un cas particulier ([[ch03-montel-vs-ascoli]]).

## Énoncé

**Théorème d'Ascoli (poly, Remarque III.3.5, p. 65).** Soient $X$ un espace topologique localement compact (et séparé) et $Y$ un $\R$- ou $\C$-espace vectoriel de dimension finie, muni d'une norme $\norm{\cdot}$ — le choix de celle-ci est indifférent, puisque toutes les normes sont équivalentes en dimension finie. On munit l'espace $\mathscr C(X,Y)$ des applications continues de $X$ dans $Y$ de la topologie de la convergence uniforme sur les compacts. Une partie $\mathcal H\subset\mathscr C(X,Y)$ est dite **équicontinue** en un point $x_0\in X$ si
$$
(\forall\eps>0)\ (\exists V \text{ voisinage de } x_0)\ (\forall f\in\mathcal H)\ (\forall x\in V),\qquad \norm{f(x)-f(x_0)}\le\eps,
$$
le point important étant que le voisinage $V$ est le même pour toutes les fonctions de la famille. Le théorème d'Ascoli affirme alors que $\mathcal H$ est relativement compacte dans $\mathscr C(X,Y)$ si et seulement si

1. $\mathcal H$ est équicontinue en tout point de $X$,
2. pour tout $x\in X$, l'ensemble $\mathcal H(x)=\{f(x),\ f\in\mathcal H\}$ est borné dans $Y$.

Si de plus $X$ est métrisable et $\sigma$-compact (réunion dénombrable de compacts), ce qui est le cas d'un ouvert $\Omega$ de $\C$, l'espace $\mathscr C(X,Y)$ est lui-même métrisable et la conclusion se lit sous forme séquentielle : de toute suite d'éléments de $\mathcal H$ on peut extraire une sous-suite qui converge uniformément sur tout compact de $X$.

*Ce qu'on démontre ci-dessous.* Le poly ne démontre pas ce rappel. On prouve la **forme séquentielle** dans le cas utile ($X$ métrique, localement compact, $\sigma$-compact, par exemple un ouvert de $\C$ ou de $\R^d$) : les conditions 1 et 2 sont équivalentes à « de toute suite de $\mathcal H$ on peut extraire une sous-suite qui converge uniformément sur tout compact de $X$ ». Le passage « séquentiellement relativement compact $\Leftrightarrow$ relativement compact » (métrisabilité de $\mathscr C(X,Y)$) et le cas d'un espace $X$ non métrisable sont admis.

## Hypothèses

### H1 — $X$ localement compact (séparé)

**Rôle.** Tout point $x_0$ a un voisinage compact $W$ : dans le sens « extraction $\Rightarrow$ équicontinuité », on fait converger une sous-suite uniformément sur $W$ et on utilise la continuité de la limite près de $x_0$. Dans l'autre sens, elle garantit que la limite uniforme sur les compacts est continue (elle l'est sur chaque voisinage compact). Enfin, elle rend la topologie « uniforme sur les compacts » raisonnable (assez de compacts).

**Si on la retire.** C'est une hypothèse de **cadre**. Le sens « 1 et 2 $\Rightarrow$ extraction » se démontre de la même façon pour tout espace métrique séparable $X$ (la preuve ci-dessous n'utilise la locale compacité que pour la continuité de la limite, qui reste vraie car une limite uniforme sur les compacts de fonctions continues sur un espace métrique est continue sur les suites convergentes, donc continue). Pour la réciproque sur un espace non localement compact, la bonne condition est « équicontinuité sur chaque compact » et l'énoncé doit être reformulé ; ce n'est pas utile dans ce cours, où $X$ est toujours un ouvert de $\C$ ou de $\R^d$, ou un intervalle.

### H2 — $Y$ de dimension finie

**Rôle.** C'est elle qui transforme « $\mathcal H(x)$ borné » en « $\mathcal H(x)$ relativement compact » (Bolzano–Weierstrass), ce qui permet l'extraction diagonale, et elle donne la complétude de $Y$ (passage de « uniformément de Cauchy » à « uniformément convergente »).

**Si on la retire.** Soient $Y=\ell^2(\N)$ (dimension infinie), $(e_n)$ sa base hilbertienne canonique, $X=[0,1]$ et $f_n:x\mapsto e_n$ (fonctions **constantes**). La famille $\{f_n\}$ est équicontinue (pour tout $\eps$, $V=X$ convient puisque $f_n(x)-f_n(x_0)=0$) et $\mathcal H(x)=\{e_n\}$ est borné (normes égales à $1$). Pourtant $\norm{f_n(x)-f_m(x)}=\norm{e_n-e_m}=\sqrt2$ pour $n\ne m$ : aucune sous-suite n'est de Cauchy, même en un seul point. En dimension infinie il faut remplacer la condition 2 par « $\mathcal H(x)$ est relativement compact ».

### H3 — Équicontinuité en tout point (condition 1)

**Rôle.** Elle permet de contrôler $f(y)$ pour **toutes** les $f\in\mathcal H$ et tous les $y$ proches d'un point $s$ de l'ensemble dense par la seule valeur $f(s)$ : c'est l'inégalité « $3\eps$ » qui fait passer de la convergence sur un ensemble dénombrable dense à la convergence uniforme sur un compact.

**Si on la retire.** $X=\R$, $Y=\R$, $f_n(x)=\sin(nx)$. La famille est bornée par $1$, mais n'est pas équicontinue en $0$ : $x_n=\frac{\pi}{2n}\to0$ et $|f_n(x_n)-f_n(0)|=1$. Aucune sous-suite ne converge uniformément sur le compact $[0,2\pi]$ : pour $a\ne b$ entiers $\ge1$, $\int_0^{2\pi}\sin^2(ax)\,dx=\pi$ et $\int_0^{2\pi}\sin(ax)\sin(bx)\,dx=0$, donc
$$
\int_0^{2\pi}\big(\sin(n_kx)-\sin(n_lx)\big)^2dx=2\pi\qquad(n_k\ne n_l),
$$
alors qu'une suite uniformément de Cauchy sur $[0,2\pi]$ rendrait cette intégrale $\le 2\pi\sup_{[0,2\pi]}|\sin(n_k\cdot)-\sin(n_l\cdot)|^2\to0$.

### H4 — Bornitude ponctuelle (condition 2)

**Rôle.** Elle permet d'extraire, en chaque point de l'ensemble dénombrable dense, une sous-suite convergente (Bolzano–Weierstrass dans $Y$).

**Si on la retire.** $X=\R$, $f_n\equiv n$ (constantes) : la famille est équicontinue (chaque $f_n$ est constante, $V=\R$ convient), mais $\mathcal H(0)=\N$ n'est pas borné et aucune sous-suite ne converge, même en un point.

## Idée de la preuve

Extraction diagonale : on fait converger une sous-suite sur une partie dénombrable dense $S$ (Bolzano–Weierstrass point par point). Puis, sur un compact $K$ recouvert par un nombre fini de voisinages d'équicontinuité, l'inégalité triangulaire « en passant par un point de $S$ » montre que la sous-suite est uniformément de Cauchy sur $K$. Réciproquement, une famille non équicontinue fournit une suite qui contredit la continuité de toute limite.

## Preuve

On suppose $(X,d)$ métrique, localement compact et $\sigma$-compact : $X=\bigcup_{j\ge1}K_j$ avec $K_j$ compacts. On note $B(x,\rho)$ la boule ouverte.

**(a) 1 et 2 $\Rightarrow$ extraction.** Soit $(f_n)_{n\in\N}$ une suite d'éléments de $\mathcal H$.

*Étape 1 : une partie dénombrable dense.* Chaque compact métrique $K_j$ est séparable : pour tout $p\ge1$, on recouvre $K_j$ par un nombre fini de boules $B(x,1/p)$, $x\in K_j$, et l'ensemble des centres obtenus (pour tous $p$) est dénombrable et dense dans $K_j$. La réunion sur $j$ donne une partie $S=\{y_0,y_1,\dots\}$ dénombrable et dense dans $X$.

*Étape 2 : extraction diagonale.* Comme $\{f_n(y_0)\}\subset\mathcal H(y_0)$ est borné dans $Y$ de dimension finie, Bolzano–Weierstrass donne une extractrice $\varphi_0$ telle que $(f_{\varphi_0(n)}(y_0))_n$ converge. Par récurrence, on construit des extractrices $\varphi_p$ telles que $(f_{\varphi_0\circ\cdots\circ\varphi_p(n)}(y_k))_n$ converge pour tout $k\le p$. On pose $g_n:=f_{\varphi_0\circ\cdots\circ\varphi_n(n)}$ : pour tout $k$, $(g_n)_{n\ge k}$ est extraite de $(f_{\varphi_0\circ\cdots\circ\varphi_k(m)})_m$, donc $(g_n(y_k))_n$ converge. C'est la même extraction que dans la preuve de Montel ([[ch03-montel]]).

*Étape 3 : convergence uniforme sur un compact.* Soient $K\subset X$ compact et $\eps>0$. Pour tout $x\in K$, l'équicontinuité en $x$ fournit un voisinage ouvert $V_x$ de $x$ tel que $\norm{f(y)-f(x)}\le\eps$ pour tous $f\in\mathcal H$, $y\in V_x$ ; donc
$$
\norm{f(y)-f(y')}\le2\eps\qquad(f\in\mathcal H,\ y,y'\in V_x).
$$
Par compacité, $K\subset V_{x_1}\cup\dots\cup V_{x_m}$. Chaque $V_{x_i}$ est un ouvert non vide, donc contient un point $s_i\in S$ (densité). Les suites $(g_n(s_i))_n$, $i=1,\dots,m$, convergent, donc sont de Cauchy : il existe $N$ tel que $\norm{g_n(s_i)-g_{n'}(s_i)}\le\eps$ pour tous $n,n'\ge N$ et tout $i$. Pour $y\in K$, choisissons $i$ avec $y\in V_{x_i}$ ; pour $n,n'\ge N$,
$$
\norm{g_n(y)-g_{n'}(y)}\le\norm{g_n(y)-g_n(s_i)}+\norm{g_n(s_i)-g_{n'}(s_i)}+\norm{g_{n'}(s_i)-g_{n'}(y)}\le2\eps+\eps+2\eps=5\eps .
$$
La suite $(g_n)$ est donc uniformément de Cauchy sur $K$. Comme $Y$ est complet (dimension finie), elle converge uniformément sur $K$ vers une limite $g$ (même argument que le Lemme III.1.3, [[ch03-cauchy-locale-equivaut-convergence]]). Ceci vaut pour tout compact, donc $(g_n)$ converge simplement sur $X$ vers une fonction $g$, uniformément sur tout compact. Enfin $g$ est continue : tout point a un voisinage compact $W$ (locale compacité), sur lequel $g$ est limite uniforme de fonctions continues.

**(b) Extraction $\Rightarrow$ 1 et 2.** Supposons que toute suite de $\mathcal H$ admette une sous-suite convergeant uniformément sur tout compact.

*Condition 2.* Si $\mathcal H(x)$ n'était pas borné, il existerait $f_n\in\mathcal H$ avec $\norm{f_n(x)}\ge n$ ; aucune sous-suite de $(f_n(x))$ ne converge, contradiction (le compact $\{x\}$ suffit).

*Condition 1.* Supposons $\mathcal H$ non équicontinue en $x_0$ : il existe $\eps>0$ tel que pour tout voisinage $V$ de $x_0$, il existe $f\in\mathcal H$ et $x\in V$ avec $\norm{f(x)-f(x_0)}>\eps$. Soit $W$ un voisinage compact de $x_0$. Appliquons ceci à $V_n=W\cap B(x_0,1/n)$ : on obtient $f_n\in\mathcal H$ et $x_n\in W$, $d(x_n,x_0)<1/n$, avec $\norm{f_n(x_n)-f_n(x_0)}>\eps$. Extrayons $(f_{n_k})$ convergeant uniformément sur $W$ vers $f$, continue sur $W$. Alors
$$
\norm{f_{n_k}(x_{n_k})-f_{n_k}(x_0)}\le\norm{f_{n_k}(x_{n_k})-f(x_{n_k})}+\norm{f(x_{n_k})-f(x_0)}+\norm{f(x_0)-f_{n_k}(x_0)}\le2\sup_W\norm{f_{n_k}-f}+\norm{f(x_{n_k})-f(x_0)}\xrightarrow[k\to\infty]{}0,
$$
par convergence uniforme sur $W$ et continuité de $f$ en $x_0$. Contradiction avec $>\eps$. $\square$

## Preuve à trous

**(a)** Soit $(f_n)$ une suite de $\mathcal H$. On fixe une partie $S=\{y_k\}$ <trou indice="X est σ-compact et métrique">dénombrable et dense dans $X$ (réunion des parties denses dénombrables des compacts $K_j$)</trou>. Comme chaque $\mathcal H(y_k)$ est borné dans $Y$ de dimension finie, une <trou indice="comme dans la preuve de Montel">extraction diagonale (Bolzano–Weierstrass en $y_0$, puis $y_1$, ... puis $g_n=f_{\varphi_0\circ\cdots\circ\varphi_n(n)}$)</trou> fournit une sous-suite $(g_n)$ convergeant en chaque point de $S$.

Soient $K$ compact et $\eps>0$. L'équicontinuité donne pour chaque $x\in K$ un ouvert $V_x\ni x$ sur lequel $\norm{f(y)-f(y')}\le2\eps$ pour toute $f\in\mathcal H$. On <trou>extrait un recouvrement fini $V_{x_1},\dots,V_{x_m}$ de $K$ et on choisit $s_i\in S\cap V_{x_i}$</trou>, puis $N$ tel que $\norm{g_n(s_i)-g_{n'}(s_i)}\le\eps$ pour $n,n'\ge N$ et tout $i$. Pour $y\in V_{x_i}\cap K$ :
<trou indice="inégalité triangulaire en passant par s_i">$\norm{g_n(y)-g_{n'}(y)}\le\norm{g_n(y)-g_n(s_i)}+\norm{g_n(s_i)-g_{n'}(s_i)}+\norm{g_{n'}(s_i)-g_{n'}(y)}\le5\eps$</trou>. Donc $(g_n)$ est uniformément de Cauchy sur $K$, donc converge uniformément sur $K$ ($Y$ complet).

**(b)** Bornitude : sinon $\norm{f_n(x)}\ge n$ et aucune sous-suite ne converge en $x$. Équicontinuité : sinon on trouve $f_n\in\mathcal H$, $x_n\to x_0$ dans un voisinage compact $W$, avec $\norm{f_n(x_n)-f_n(x_0)}>\eps$ ; une sous-suite converge uniformément sur $W$ vers $f$ continue, et <trou>$\norm{f_{n_k}(x_{n_k})-f_{n_k}(x_0)}\le2\sup_W\norm{f_{n_k}-f}+\norm{f(x_{n_k})-f(x_0)}\to0$</trou>, contradiction. $\square$

## Exemples

* **Fonctions lipschitziennes.** Soit $\mathcal H$ l'ensemble des $f:[0,1]\to\R$ qui sont $L$-lipschitziennes avec $|f(0)|\le1$. Équicontinuité : pour $\eps>0$, $V=\,]x_0-\eps/L,x_0+\eps/L[\,\cap[0,1]$ convient pour toutes les $f$. Bornitude : $|f(x)|\le|f(0)|+L|x|\le1+L$. Donc toute suite de $\mathcal H$ a une sous-suite uniformément convergente sur $[0,1]$ (et la limite est encore $L$-lipschitzienne, par passage à la limite dans $|f_n(x)-f_n(y)|\le L|x-y|$). Contre-épreuve : sans la contrainte $|f(0)|\le1$, $f_n\equiv n$ est $L$-lipschitzienne et ne converge pas.
* **Montel comme cas particulier.** Si $\mathcal F\subset\Hol(\Omega)$ est localement uniformément bornée ([[ch03-famille-localement-uniformement-bornee]]), les inégalités de Cauchy donnent sur $D(z_0,r)$ (avec $\bar D(z_0,r+\delta)\subset\Omega$ et $|f|\le C(K)$ sur ce disque) l'estimation $|f(z)-f(z')|\le\frac{2C(K)}{\delta}|z-z'|$ ([[ch03-montel-equilipschitz]]) : la famille est localement équilipschitzienne, donc équicontinue, et Ascoli donne la normalité. C'est exactement la preuve de [[ch03-montel]] (voir [[ch03-montel-vs-ascoli]]) ; Weierstraß ([[ch03-weierstrass]]) ajoute que la limite est holomorphe.
* **Équations différentielles.** Si $F:[0,T]\times\R^d\to\R^d$ est continue et bornée par $M$, toute solution $y$ de $y'=F(t,y)$ sur $[0,T]$ est $M$-lipschitzienne ; si de plus $\norm{y(0)}\le R$, la famille des solutions est bornée par $R+MT$. Ascoli permet d'extraire de toute suite de solutions (ou de solutions approchées) une sous-suite uniformément convergente : c'est l'argument classique de la preuve du théorème d'existence de Peano (énoncé : [[ch07-peano-non-unicite]]).

## Pièges

* > ⚠️ Dans l'équicontinuité, l'ordre des quantificateurs est essentiel : $\forall\eps\ \exists V\ \forall f$. « Chaque $f$ est continue » donne seulement $\forall f\ \forall\eps\ \exists V_f$ : c'est vrai pour $\sin(nx)$, qui n'est pas équicontinue.
* « Bornée » (uniformément ou ponctuellement) ne suffit pas pour des fonctions seulement continues ; c'est l'holomorphie, via les inégalités de Cauchy, qui donne gratuitement l'équicontinuité dans Montel.
* La compacité porte sur la convergence **uniforme sur les compacts**, pas uniforme sur $X$ : sur $X=\R$, $f_n(x)=\frac{x}{n}$ converge uniformément sur tout compact vers $0$, mais pas uniformément sur $\R$.
* Ascoli ne dit rien sur la régularité de la limite au-delà de la continuité (une limite de fonctions $C^1$ équilipschitziennes n'est pas $C^1$ en général, par exemple $\sqrt{x^2+1/n}\to|x|$) ; en analyse complexe, c'est Weierstraß qui garantit l'holomorphie de la limite.
* En dimension infinie ($Y$ de Banach), remplacer « $\mathcal H(x)$ borné » par « $\mathcal H(x)$ relativement compact ».
