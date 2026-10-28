---
id: ex-ch02-integrale-logarithme-demi-couronne
type: exercise
chapters: [2]
title: Une intégrale avec un logarithme (demi-couronne)
source: "Classique (intégrale à logarithme par un contour en demi-couronne)"
difficulty: 2
time: 25
tools: [ch02-logarithme-existence, ch02-etoile-simplement-connexe, ch02-formule-residus-pratique, ch02-residu-pole-simple, ch01-longueur-majoration-integrale]
---
## Énoncé

Soit $a>0$. On veut calculer
$$
J(a)=\int_0^{+\infty}\frac{\log x}{x^2+a^2}\,dx .
$$
On note $\Omega=\C\setminus\{-it\ :\ t\ge0\}$ (le plan privé de la demi-droite imaginaire négative fermée).

1. Justifier que $J(a)$ est une intégrale convergente.
2. Montrer qu'il existe une fonction $L$ holomorphe sur $\Omega$ telle que $e^{L(z)}=z$ pour tout $z\in\Omega$ et $L(1)=0$. Montrer que $L(x)=\log x$ et $L(-x)=\log x+i\pi$ pour $x>0$, que $L(ia)=\log a+i\frac\pi2$, et que $|L(z)|\le \big|\log|z|\big|+\pi$ pour tout $z\in\Omega$ tel que $\Im(z)\ge0$.
3. Calculer $J(a)$. On obtiendra au passage la valeur de $\int_0^{+\infty}\frac{dx}{x^2+a^2}$.
4. Retrouver directement la valeur de $J(1)$ par un changement de variable réel.

## Indices

### Indice 1
On cherche une fonction méromorphe dont la restriction à $\R_+^*$ fait apparaître $\log x$ : il faut un logarithme complexe, donc une coupure. Laquelle choisir pour pouvoir intégrer sur l'axe réel **et** dans le demi-plan supérieur ?

### Indice 2
$\Omega$ est étoilé par rapport à $i$, donc simplement connexe, et $z\mapsto z$ n'y s'annule pas : un logarithme existe. Pour ses valeurs, écrire $L(z)=\log|z|+i\theta(z)$ avec $\theta$ continue et $e^{i\theta(z)}=z/|z|$, et suivre $\theta$ le long du demi-cercle $t\mapsto e^{it}$, $t\in[0,\pi]$.

### Indice 3
Intégrer $f(z)=\dfrac{L(z)}{z^2+a^2}$ sur le bord de la demi-couronne $\{\eps<|z|<R,\ \Im z>0\}$ : segment $[\eps,R]$, demi-cercle $C_R^+$, segment $[-R,-\eps]$, petit demi-cercle $C_\eps^+$ parcouru dans le sens horaire. Seul $ia$ est à l'intérieur. Sur $[-R,-\eps]$, poser $z=-x$ : on trouve $\int_\eps^R\frac{\log x+i\pi}{x^2+a^2}\,dx$.

## Corrigé

**1.** La fonction $x\mapsto\frac{\log x}{x^2+a^2}$ est continue sur $]0,+\infty[$. En $0$ : $\left|\frac{\log x}{x^2+a^2}\right|\le\frac{|\log x|}{a^2}$, et $|\log x|$ est intégrable sur $]0,1]$ (une primitive est $x\log x-x$, qui a une limite en $0$). En $+\infty$ : $\frac{|\log x|}{x^2+a^2}\le\frac{\log x}{x^2}\le\frac{1}{x^{3/2}}$ pour $x$ grand (car $\log x\le\sqrt x$), intégrable. Donc $J(a)$ converge absolument. De même $K(a)=\int_0^{+\infty}\frac{dx}{x^2+a^2}$ converge.

**2.** *Existence.* $\Omega$ est ouvert (complémentaire d'un fermé) et étoilé par rapport à $\omega=i$ : si $z\in\Omega$ et si un point $(1-s)i+sz$ ($s\in[0,1]$) du segment $[i,z]$ était sur la demi-droite $\{-it,\ t\ge0\}$, sa partie réelle $s\Re(z)$ serait nulle ; $s=0$ donne le point $i$, qui n'est pas sur la demi-droite ; si $\Re(z)=0$, alors $z=iy$ avec $y>0$ (car $z\in\Omega$), et tout le segment $[i,iy]$ est sur la demi-droite imaginaire **positive**. Contradiction dans les deux cas. Donc $\Omega$ est simplement connexe ([[ch02-etoile-simplement-connexe]]). La fonction $h(z)=z$ est holomorphe et ne s'annule pas sur $\Omega$ ($0\notin\Omega$), donc elle admet un logarithme $L$ ([[ch02-logarithme-existence]], [[ch02-logarithme-def]]) : $L$ est holomorphe, $L'=1/z$, $e^{L}=z$. Comme $e^{L(1)}=1$, $L(1)\in2i\pi\Z$ ; quitte à retrancher cette constante (ce qui ne change ni $L'$ ni $e^L$), $L(1)=0$.

*Valeurs.* Pour $z\in\Omega$, $|e^{L(z)}|=e^{\Re L(z)}=|z|$, donc $\Re L(z)=\log|z|$. Posons $\theta=\Im L$, continue sur $\Omega$, avec $e^{i\theta(z)}=z/|z|$.
* Sur $]0,+\infty[$ : $e^{i\theta(x)}=1$, donc $\theta(x)\in2\pi\Z$ ; $\theta$ est continue sur l'intervalle (connexe) $]0,+\infty[$ à valeurs dans le discret $2\pi\Z$, donc constante, égale à $\theta(1)=0$. D'où $L(x)=\log x$.
* Pour $\rho>0$ et $t\in[0,\pi]$ (le demi-cercle supérieur est dans $\Omega$) : $e^{i\theta(\rho e^{it})}=e^{it}$, donc $t\mapsto\theta(\rho e^{it})-t$ est continue sur $[0,\pi]$ à valeurs dans $2\pi\Z$, donc constante, égale à sa valeur en $t=0$, soit $\theta(\rho)-0=0$. Ainsi $\theta(\rho e^{it})=t$ pour $t\in[0,\pi]$.
* En particulier $L(-x)=\log x+i\pi$ ($t=\pi$), $L(ia)=\log a+i\frac\pi2$ ($\rho=a$, $t=\frac\pi2$), et pour $\Im(z)\ge0$, $z\ne0$, $|L(z)|\le\big|\log|z|\big|+|\theta(z)|\le\big|\log|z|\big|+\pi$.

**3.** *La fonction et le contour.* Soit $f(z)=\dfrac{L(z)}{z^2+a^2}=\dfrac{L(z)}{(z-ia)(z+ia)}$. Elle est méromorphe sur $\Omega$ (produit de $L$ holomorphe et d'une fraction rationnelle) ; son seul pôle **dans $\Omega$** est $ia$ (le point $-ia$ est sur la coupure, hors de $\Omega$). C'est un pôle simple car $L(ia)\ne0$ (sa partie imaginaire vaut $\pi/2$).

Pour $0<\eps<a<R$, soit $U_{\eps,R}=\{z:\ \eps<|z|<R,\ \Im(z)>0\}$ (demi-couronne) et $\gamma_{\eps,R}$ son bord orienté dans le sens direct : $[\eps,R]$, puis $C_R^+:t\mapsto Re^{it}$ ($t\in[0,\pi]$), puis $[-R,-\eps]$, puis $C_\eps^+$ parcouru de $-\eps$ à $\eps$ ($t\mapsto\eps e^{i(\pi-t)}$, $t\in[0,\pi]$). C'est un lacet simple $C^1$ par morceaux. $\bar U_{\eps,R}=\{\eps\le|z|\le R,\ \Im z\ge0\}$ est inclus dans $\Omega$ (il ne contient aucun point $-it$, $t\ge0$ : ceux-ci ont $\Im\le0$ et le seul qui a $\Im=0$ est $0$, exclu). $\Omega$ est simplement connexe, $f$ n'a pas de pôle sur $\gamma_{\eps,R}$ (car $|ia|=a\ne\eps,R$ et $\Im(ia)>0$), et le seul pôle dans $U_{\eps,R}$ est $ia$. La forme pratique de la formule des résidus ([[ch02-formule-residus-pratique]], l'indice de $ia$ valant $1$ : on déforme la demi-couronne en un petit cercle autour de $ia$ sans traverser $ia$) donne
$$
\int_{\gamma_{\eps,R}}f(z)\,dz=2i\pi\,\Res_{ia}(f).
$$

*Résidu.* Pôle simple, donc ([[ch02-residu-pole-simple]])
$$
\Res_{ia}(f)=\lim_{z\to ia}(z-ia)f(z)=\frac{L(ia)}{2ia}=\frac{\log a+i\pi/2}{2ia},
\qquad 2i\pi\,\Res_{ia}(f)=\frac{\pi\log a}{a}+i\,\frac{\pi^2}{2a}.
$$

*Les quatre morceaux.*
* Sur $[\eps,R]$ : $\int_\eps^R\frac{\log x}{x^2+a^2}\,dx$.
* Sur $[-R,-\eps]$ : avec $z=-x$, $dz=-dx$, $x$ allant de $R$ à $\eps$ : $\int_{-R}^{-\eps}f(t)\,dt=\int_\eps^R\frac{\log x+i\pi}{x^2+a^2}\,dx$.
* Sur $C_R^+$ (pour $R>\max(1,a)$) : $|L(z)|\le\log R+\pi$ et $|z^2+a^2|\ge|z|^2-a^2=R^2-a^2$. Par la majoration longueur × sup ([[ch01-longueur-majoration-integrale]]), $\left|\int_{C_R^+}f\right|\le\pi R\,\frac{\log R+\pi}{R^2-a^2}\xrightarrow[R\to+\infty]{}0$.
* Sur $C_\eps^+$ (pour $\eps<\min(1,a)$) : $|L(z)|\le|\log\eps|+\pi$ et $|z^2+a^2|\ge a^2-\eps^2$, donc $\left|\int_{C_\eps^+}f\right|\le\pi\eps\,\frac{|\log\eps|+\pi}{a^2-\eps^2}\xrightarrow[\eps\to0]{}0$ (car $\eps\log\eps\to0$).

*Passage à la limite.* En sommant et en faisant $\eps\to0$, $R\to+\infty$ (les intégrales sur $[\eps,R]$ convergent par la question 1) :
$$
2J(a)+i\pi K(a)=\frac{\pi\log a}{a}+i\,\frac{\pi^2}{2a}.
$$
$J(a)$ et $K(a)$ sont réels : on identifie parties réelle et imaginaire,
$$
\boxed{\ J(a)=\int_0^{+\infty}\frac{\log x}{x^2+a^2}\,dx=\frac{\pi\log a}{2a}\ },\qquad K(a)=\int_0^{+\infty}\frac{dx}{x^2+a^2}=\frac{\pi}{2a}.
$$
La seconde valeur est bien la valeur connue ($\frac1a\arctan\frac xa$ entre $0$ et $+\infty$), ce qui contrôle le calcul. (Vérification numérique : $J(3)=0{,}5752\ldots=\frac{\pi\log3}6$.)

**4.** Pour $a=1$ la formule donne $J(1)=0$. Directement : le changement de variable $x=1/u$ ($dx=-du/u^2$) donne
$$
J(1)=\int_{+\infty}^{0}\frac{-\log u}{u^{-2}+1}\cdot\frac{-du}{u^2}=-\int_0^{+\infty}\frac{\log u}{1+u^2}\,du=-J(1),
$$
donc $J(1)=0$. (Plus généralement $x=a^2/u$ redonne $J(a)=\frac{\pi\log a}{2a}$ à partir de $K(a)$ : $J(a)=\int_0^\infty\frac{2\log a-\log u}{u^2+a^2}du=2\log a\,K(a)-J(a)$.)

## Pièges et variantes

> ⚠️ **Mauvaise coupure.** La détermination principale $\mathrm{Log}$ ([[ch02-logarithme-determination-principale-def]]) est définie sur $\C\setminus\R_-$ : elle n'est pas définie sur $[-R,-\eps]$, qui fait partie du contour. Il faut une coupure qui évite le demi-plan supérieur fermé (privé de $0$) : ici la demi-droite imaginaire négative.

* **Contourner $0$.** $f$ n'est pas définie en $0$ (point de la coupure), d'où le petit demi-cercle ; sa contribution tend vers $0$ grâce à $\eps\log\eps\to0$, à justifier.
* **Le pôle $-ia$** n'est pas un pôle de $f$ sur $\Omega$ (il est sur la coupure) et de toute façon il est hors du contour : il ne contribue pas.
* **Identifier les parties réelle et imaginaire** demande que $J$ et $K$ soient réels : c'est le cas ici ; sur $[-R,-\eps]$, l'argument vaut $\pi$ et produit le terme $i\pi K$, à ne pas oublier.
* **Variante.** La même méthode avec $f(z)=\frac{L(z)^2}{z^2+1}$ donne $2\int_0^\infty\frac{(\log x)^2}{1+x^2}dx+2i\pi J(1)-\pi^2K(1)=2i\pi\frac{(i\pi/2)^2}{2i}$, d'où $\int_0^{+\infty}\frac{(\log x)^2}{1+x^2}\,dx=\frac{\pi^3}8$.
* **Variante.** Avec $\frac{L(z)}{(z^2+a^2)^2}$, le pôle $ia$ devient double ; le résidu se calcule par $\frac{d}{dz}\big[\frac{L(z)}{(z+ia)^2}\big]_{z=ia}$.
