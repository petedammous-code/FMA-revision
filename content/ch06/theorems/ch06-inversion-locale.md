---
id: ch06-inversion-locale
type: theorem
chapter: 6
title: Théorème d'inversion locale
ref: Théorème VI.3.2
page: 120
importance: 3
depends: [ch06-fonctions-implicites, ch06-diffeomorphisme-def, ch05-composition-differentielles]
tags: [inversion locale, difféomorphisme, différentielle inversible, fonctions implicites, Banach]
---
## Intuition

> 💡 Au voisinage de $x_0$, une application $f$ de classe $C^1$ « ressemble » à sa différentielle : $f(x_0+h)\approx f(x_0)+df_{x_0}(h)$. Si cette approximation linéaire est inversible, alors $f$ elle-même est inversible **près de $x_0$**, et son inverse est aussi régulier que $f$.

Image mentale : on regarde un petit disque autour de $x_0$ à la loupe ; plus on zoome, plus son image par $f$ ressemble à l'image du disque par l'application linéaire $df_{x_0}$ (un ellipsoïde non aplati quand $df_{x_0}$ est inversible). Rien ne s'y replie, donc $f$ est injective sur le disque et son image recouvre un voisinage de $f(x_0)$.

Vocabulaire. Un **$C^k$-difféomorphisme** entre deux ouverts est une bijection de classe $C^k$ dont la réciproque est aussi de classe $C^k$ ([[ch06-diffeomorphisme-def]]). Un **isomorphisme bicontinu** $E\to F$ est une application linéaire continue bijective dont la réciproque est continue ; entre espaces de Banach la continuité de la réciproque est automatique ([[ch05-isomorphisme-banach]]), et en dimension finie cela signifie $\dim E=\dim F$ et jacobien non nul. Le théorème est **local** : il ne dit rien de la taille de $U_0$, ni de l'injectivité globale (voir [[ch06-inversion-globale]]).

## Énoncé

**Théorème (poly, Théorème VI.3.2, p. 120).** Soit $f$ une application de $U$ dans $F$, où $U$ est un ouvert d'un espace de Banach réel $E$ et $F$ un espace de Banach, et soit $x_0$ un point de $U$. Si $f$ est de classe $C^k$, $k\ge1$, et si la différentielle $df_{x_0}$ de $f$ au point $x_0$ est un isomorphisme bicontinu de $E$ sur $F$, alors il existe un voisinage ouvert $U_0$ de $x_0$ dans $U$ et un voisinage ouvert $V_0$ de $f(x_0)$ dans $F$ tels que $f$ se restreigne en un $C^k$-difféomorphisme de $U_0$ sur $V_0$.

De plus, pour tout $y\in V_0$, en notant $\varphi=(f|_{U_0})^{-1}$ : $d\varphi_y=\big(df_{\varphi(y)}\big)^{-1}$ (conséquence de $f\circ\varphi=\mathrm{Id}_{V_0}$ et de la règle de la chaîne).

## Hypothèses

### H1 — $E$ et $F$ sont des espaces de Banach (complets)

**Rôle.** La preuve passe par le théorème des fonctions implicites, lui-même démontré par le point fixe de Banach ([[ch06-point-fixe-banach]]), qui exige un espace complet.

**Si on la retire.** Soit $E=F=c_{00}$, l'espace des suites réelles à support fini, muni de la norme $\norm{x}_\infty=\sup_n|x_n|$ (non complet). Posons $f(x)=x-S(x\cdot x)$, c'est-à-dire
$$
f(x)_1=x_1,\qquad f(x)_{n+1}=x_{n+1}-x_n^2\quad(n\ge1),
$$
où $x\cdot x=(x_n^2)_n$ et $S$ est le décalage à droite. L'application $x\mapsto S(x\cdot x)$ est la restriction à la diagonale de l'application bilinéaire continue $(x,y)\mapsto S(x\cdot y)$ (de norme $\le1$), donc $f$ est $C^\infty$ et $df_0=\mathrm{Id}$ (la partie quadratique a une différentielle nulle en $0$). Pourtant, pour $t\ne0$, l'équation $f(x)=t\,e_1$ impose $x_1=t$, $x_2=t^2$, $x_3=t^4$, …, $x_n=t^{2^{n-1}}\ne0$ pour tout $n$ : aucune solution dans $c_{00}$. Donc $f(c_{00})$ ne contient aucun voisinage de $f(0)=0$ : la conclusion tombe. (Dans le complété $\ell^\infty$, la solution existe pour $|t|<1$.)

### H2 — $f$ est de classe $C^k$ avec $k\ge1$ (pas seulement différentiable en $x_0$)

**Rôle.** La continuité de $x\mapsto df_x$ permet de contrôler $\partial g/\partial x$ dans un voisinage de $(f(x_0),x_0)$ (contraction dans la preuve des fonctions implicites) ; la classe $C^k$ se transmet à l'inverse.

**Si on la retire.** $f:\R\to\R$, $f(x)=x+2x^2\sin(1/x)$ si $x\ne0$, $f(0)=0$. Elle est dérivable partout, avec $f'(0)=\lim_{x\to0}\big(1+2x\sin(1/x)\big)=1\ne0$, mais pour $x\ne0$, $f'(x)=1+4x\sin(1/x)-2\cos(1/x)$. En $x_n=\frac1{2\pi n}$ on a $f'(x_n)=-1<0$, en $y_n=\frac1{(2n+1)\pi}$ on a $f'(y_n)=3>0$ ; par continuité de $f'$ hors de $0$, $f$ est strictement décroissante près de $x_n$ et strictement croissante près de $y_n$. Donc $f$ n'est monotone sur aucun intervalle $]-\eta,\eta[$ et, étant continue, n'y est pas injective : aucun inverse local.

### H3 — $df_{x_0}$ est un isomorphisme bicontinu

**Rôle.** C'est exactement l'hypothèse « $\partial g/\partial x(f(x_0),x_0)=df_{x_0}$ isomorphisme bicontinu » du théorème des fonctions implicites.

**Si on la retire.**
* $f(x)=x^2$ en $x_0=0$ : $f'(0)=0$ et $f$ n'est injective sur aucun voisinage de $0$ ($f(-x)=f(x)$).
* $f(x)=x^3$ en $x_0=0$ : $f$ est une bijection $C^\infty$ de $\R$ sur $\R$, mais sa réciproque $y\mapsto y^{1/3}$ n'est pas dérivable en $0$ : $f$ n'est un $C^1$-difféomorphisme sur aucun voisinage de $0$. (Si elle l'était, $f\circ f^{-1}=\mathrm{Id}$ donnerait $f'(0)\,(f^{-1})'(0)=1$, impossible car $f'(0)=0$.)

## Idée de la preuve

On voit l'équation $f(x)=y$ comme une équation implicite $g(y,x)=f(x)-y=0$ d'inconnue $x$ et de paramètre $y$. Comme $\partial g/\partial x=df$ est inversible en $(f(x_0),x_0)$, les fonctions implicites donnent $x=\varphi(y)$, $C^k$ : c'est l'inverse local.

## Preuve

On considère
$$
g:F\times U\to F,\qquad g(y,x)=f(x)-y .
$$
Par construction, $g(y,x)=0$ équivaut à $f(x)=y$. L'application $g$ est de classe $C^k$ (somme d'une fonction $C^k$ de $x$ et d'une fonction linéaire continue de $y$), et $g(f(x_0),x_0)=0$. Sa différentielle partielle par rapport à $x$ est $\dfrac{\partial g}{\partial x}(y,x)=df_x$, donc
$$
\frac{\partial g}{\partial x}\big(f(x_0),x_0\big)=df_{x_0}
$$
est un isomorphisme bicontinu de $E$ sur $F$.

On applique le théorème des fonctions implicites ([[ch06-fonctions-implicites]]) avec : espace des paramètres $F$ (ouvert $F$ tout entier), espace des inconnues $E$ (ouvert $U$), espace d'arrivée $F$, point $(f(x_0),x_0)$. Il existe un ouvert $V_0$ de $F$ contenant $f(x_0)$, un ouvert $U_1\subset U$ contenant $x_0$ et une application $\varphi:V_0\to U_1$ de classe $C^k$ tels que
$$
\big\{(y,x)\in V_0\times U_1 \;:\; f(x)=y\big\}=\big\{(y,\varphi(y)) \;:\; y\in V_0\big\}.
$$

Posons $U_0=\varphi(V_0)$. **C'est un ouvert** : montrons $U_0=U_1\cap f^{-1}(V_0)$, qui est ouvert car $f$ est continue.
* Si $x\in U_1$ vérifie $f(x)\in V_0$, alors $(f(x),x)$ appartient à l'ensemble ci-dessus, donc $x=\varphi(f(x))\in\varphi(V_0)$.
* Réciproquement, pour $y\in V_0$, $\varphi(y)\in U_1$ et $f(\varphi(y))=y\in V_0$.

Ainsi $U_0$ est un voisinage ouvert de $x_0=\varphi(f(x_0))$ dans $U$. Enfin $f$ induit une bijection de $U_0$ sur $V_0$ d'inverse $\varphi$ : on a vu $f\circ\varphi=\mathrm{Id}_{V_0}$ et $\varphi\circ f=\mathrm{Id}_{U_0}$ (premier point ci-dessus). Comme $f|_{U_0}$ et $\varphi$ sont de classe $C^k$, $f|_{U_0}:U_0\to V_0$ est un $C^k$-difféomorphisme ([[ch06-diffeomorphisme-def]]).

*Complément (différentielle de l'inverse).* En différentiant $f\circ\varphi=\mathrm{Id}_{V_0}$ et $\varphi\circ f=\mathrm{Id}_{U_0}$ ([[ch05-composition-differentielles]]) : $df_{\varphi(y)}\circ d\varphi_y=\mathrm{Id}_F$ et $d\varphi_{f(x)}\circ df_x=\mathrm{Id}_E$. Donc $df_x$ est inversible pour **tout** $x\in U_0$ et $d\varphi_y=(df_{\varphi(y)})^{-1}$. $\square$

## Preuve à trous

On pose <trou indice="une équation implicite dont l'inconnue est x et le paramètre y">$g:F\times U\to F$, $g(y,x)=f(x)-y$</trou>, de sorte que $g(y,x)=0\iff f(x)=y$ ; $g$ est $C^k$ et $g(f(x_0),x_0)=0$. On calcule <trou>$\dfrac{\partial g}{\partial x}(f(x_0),x_0)=df_{x_0}$, isomorphisme bicontinu</trou>. Le théorème des fonctions implicites fournit des ouverts $V_0\ni f(x_0)$, $U_1\ni x_0$ et $\varphi:V_0\to U_1$ de classe $C^k$ avec $\{(y,x)\in V_0\times U_1: f(x)=y\}=\{(y,\varphi(y)):y\in V_0\}$.

On pose $U_0=\varphi(V_0)$. C'est un ouvert car <trou indice="écrire U_0 comme intersection de deux ouverts">$U_0=U_1\cap f^{-1}(V_0)$ : si $x\in U_1$ et $f(x)\in V_0$ alors $x=\varphi(f(x))$ ; réciproquement $\varphi(y)\in U_1$ et $f(\varphi(y))=y\in V_0$</trou>. Ainsi $f$ induit une bijection $U_0\to V_0$ d'inverse $\varphi$, qui est <trou>de classe $C^k$ comme $f$, d'où un $C^k$-difféomorphisme</trou>. $\square$

## Exemples

* **Coordonnées polaires.** $f(r,\theta)=(r\cos\theta,r\sin\theta)$ sur $U=\,]0,+\infty[\times\R$. Matrice jacobienne $\begin{pmatrix}\cos\theta&-r\sin\theta\\ \sin\theta&r\cos\theta\end{pmatrix}$, de déterminant $r>0$. Donc en **tout** point $f$ est un $C^\infty$-difféomorphisme local ; pourtant $f$ n'est pas injective ($f(r,\theta+2\pi)=f(r,\theta)$) : inversion locale ne veut pas dire inversion globale.
* **Le carré complexe.** $f(x,y)=(x^2-y^2,\,2xy)$ (c'est $z\mapsto z^2$). Jacobienne $\begin{pmatrix}2x&-2y\\2y&2x\end{pmatrix}$, déterminant $4(x^2+y^2)$ : nul seulement à l'origine. Ailleurs, $f$ est un difféomorphisme local (une « racine carrée » locale lisse) ; en $(0,0)$, $f(-p)=f(p)$ empêche toute injectivité locale. En $(1,0)$ : $df=2\,\mathrm{Id}$, donc la racine locale $\varphi$ vérifie $d\varphi_{(1,0)}=\frac12\mathrm{Id}$, ce qu'on retrouve sur $\sqrt{1+w}\approx1+w/2$.
* **Racine carrée de matrices** (un cas en dimension $n^2$). $f:\mathrm M_n(\R)\to\mathrm M_n(\R)$, $f(A)=A^2$, est $C^\infty$ et $df_A(H)=AH+HA$ (Leibniz). En $A=I_n$ : $df_{I_n}(H)=2H$, inversible. Donc il existe des voisinages ouverts $U_0$, $V_0$ de $I_n$ tels que toute matrice $B\in V_0$ ait une **unique** racine carrée $\sqrt B\in U_0$, et $B\mapsto\sqrt B$ est $C^\infty$ sur $V_0$ avec $d(\sqrt{\cdot})_{I_n}(K)=K/2$.

## Pièges

* > ⚠️ La conclusion est **locale** : « $df_x$ inversible pour tout $x$ » n'entraîne pas « $f$ injective » (polaires, $\exp$ sur $\C$). Pour un énoncé global il faut **ajouter** l'injectivité : [[ch06-inversion-globale]].
* > ⚠️ Il faut $f$ de classe $C^1$ **au voisinage** de $x_0$ ; la seule différentiabilité en $x_0$ (même partout) ne suffit pas (contre-exemple $x+2x^2\sin(1/x)$ ci-dessus).
* En dimension finie, $df_{x_0}$ isomorphisme exige $\dim E=\dim F$ : une application $\R^2\to\R^3$ n'est jamais un difféomorphisme local (penser plutôt immersion, [[ch06-theoreme-rang-constant]]).
* Ne pas oublier la formule $d(f^{-1})_{f(x)}=(df_x)^{-1}$ : en dimension $1$, c'est $(f^{-1})'(y)=1/f'(f^{-1}(y))$.
* Le théorème ne donne aucune estimation de la taille de $U_0$ ; pour des tailles explicites, il faut refaire la preuve par point fixe avec des constantes (ou utiliser Newton, [[ch06-methode-de-newton]]).
* Version holomorphe : si $f$ est holomorphe et $f'(z_0)\ne0$, l'inverse local est holomorphe ([[ch01-inversion-locale-holomorphe]]).
