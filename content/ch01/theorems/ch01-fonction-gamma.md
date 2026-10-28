---
id: ch01-fonction-gamma
type: proposition
chapter: 1
title: "La fonction $\Gamma$ d'Euler est holomorphe sur $\{\Re z>0\}$, $\Gamma(z+1)=z\Gamma(z)$, $\Gamma(n+1)=n!$"
ref: Exemple I.9.2
page: 25
importance: 2
depends: [ch01-holomorphie-sous-integrale, ch01-exp-trigo-hyperboliques]
tags: [gamma, euler, integrale-parametre, factorielle, domination-locale]
---
## Intuition

> 💡 La fonction $\Gamma$ est la « factorielle continue » : on cherche une fonction lisse qui interpole $n\mapsto(n-1)!$. La formule $n!=\int_0^{+\infty}t^ne^{-t}\,dt$ (intégrations par parties répétées) suggère de remplacer l'entier $n$ par un complexe $z$ : $t^{z-1}=e^{(z-1)\ln t}$ a un sens pour tout $t>0$.

C'est **l'exemple type** d'application du théorème d'holomorphie sous l'intégrale ([[ch01-holomorphie-sous-integrale]]) : la fonction $t\mapsto t^{z-1}e^{-t}$ est intégrable si et seulement si $\Re(z)>0$, et on ne peut pas la dominer uniformément sur tout le demi-plan, seulement sur des **bandes** $\alpha\le\Re(z)\le\beta$. C'est exactement ce que permet la domination **locale**.

Notation : pour $t>0$ et $z\in\C$, $t^{z-1}:=e^{(z-1)\ln t}$, où $\ln$ est le logarithme réel et $\exp$ l'exponentielle complexe ([[ch01-exp-trigo-hyperboliques]]).

## Énoncé

**Proposition (poly, Exemple I.9.2, p. 25).** Pour $z\in\C$ tel que $\Re(z)>0$, posons
$$
\Gamma(z)=\int_0^{+\infty}t^{z-1}e^{-t}\,dt,\qquad\text{où } t^{z-1}:=e^{(z-1)\ln t}\ \ (t>0).
$$
Alors l'intégrale converge absolument, $\Gamma$ est holomorphe sur le demi-plan $\{\Re(z)>0\}$ et, pour tout $k\in\N$,
$$
\Gamma^{(k)}(z)=\int_0^{+\infty}(\ln t)^k\,t^{z-1}e^{-t}\,dt .
$$
De plus $\Gamma(z+1)=z\,\Gamma(z)$ pour $\Re(z)>0$, et $\Gamma(1)=1$, d'où $\Gamma(n+1)=n!$ pour tout $n\in\N$ : la fonction $\Gamma$ prolonge la factorielle. (L'équation fonctionnelle, écrite $\Gamma(z)=\Gamma(z+1)/z$, permettra de prolonger $\Gamma$ en une fonction méromorphe sur $\C$ dont les pôles sont les entiers négatifs ou nuls : [[ch03-gamma-definition-prolongement]].)

## Hypothèses

### H1 — $\Re(z)>0$

**Rôle.** Elle assure l'intégrabilité en $0$ : $|t^{z-1}e^{-t}|=t^{\Re(z)-1}e^{-t}$, et $t\mapsto t^{s-1}$ est intégrable sur $]0,1]$ si et seulement si $s>0$. Elle fournit aussi la dominante $g_{\alpha,\beta}$ avec $\alpha>0$.

**Si on la retire.** Si $\Re(z)\le0$, alors pour $t\in\,]0,1]$ on a $t^{\Re(z)-1}\ge t^{-1}$ et $e^{-t}\ge e^{-1}$, donc $|t^{z-1}e^{-t}|\ge\frac{1}{e\,t}$, non intégrable sur $]0,1]$ : l'intégrale diverge (par exemple en $z=0$, $\int_0^1\frac{e^{-t}}t\,dt=+\infty$). La formule intégrale ne définit $\Gamma$ que sur le demi-plan ; au-delà, il faut le prolongement par l'équation fonctionnelle.

## Idée de la preuve

On vérifie les hypothèses du Théorème I.9.1 avec $X=]0,+\infty[$ et $F(z,t)=t^{z-1}e^{-t}$ : holomorphie en $z$, et domination sur la bande $\alpha\le\Re(z)\le\beta$ par $(t^{\alpha-1}+t^{\beta-1})e^{-t}$. L'équation fonctionnelle vient d'une intégration par parties.

## Preuve

**Holomorphie en $z$.** Pour $t>0$ fixé, $z\mapsto F(z,t)=e^{-t}e^{(z-1)\ln t}$ est la composée de la fonction affine $z\mapsto(z-1)\ln t$ et de $\exp$, donc est holomorphe sur $\C$ (a fortiori sur le demi-plan), de dérivée $k$-ième $\frac{\partial^kF}{\partial z^k}(z,t)=(\ln t)^k\,t^{z-1}e^{-t}$. La fonction $F$ est continue sur $\{\Re z>0\}\times\,]0,+\infty[$, donc mesurable.

**Domination locale.** Comme $|e^{w}|=e^{\Re(w)}$, on a $|t^{z-1}|=e^{(\Re(z)-1)\ln t}=t^{\Re(z)-1}$. Soient $0<\alpha\le\beta$ et $z$ avec $\alpha\le\Re(z)\le\beta$. Pour $0<t\le1$, $\ln t\le0$ donc $t^{\Re(z)-1}\le t^{\alpha-1}$ ; pour $t\ge1$, $t^{\Re(z)-1}\le t^{\beta-1}$. Ainsi
$$
|F(z,t)|\le g_{\alpha,\beta}(t):=\big(t^{\alpha-1}+t^{\beta-1}\big)e^{-t}\qquad(t>0).
$$
La fonction $g_{\alpha,\beta}$ est intégrable sur $]0,+\infty[$ : près de $0$, $g_{\alpha,\beta}(t)\le t^{\alpha-1}+t^{\beta-1}$ est intégrable car $\alpha,\beta>0$ ; près de $+\infty$, $g_{\alpha,\beta}(t)=O(e^{-t/2})$.

Soit $z_0$ avec $s:=\Re(z_0)>0$, et $r_0:=s/2$. Le disque $D(z_0,r_0)$ est inclus dans la bande $\frac s2\le\Re(z)\le\frac{3s}2$, elle-même contenue dans le demi-plan. L'hypothèse (ii) du Théorème I.9.1 est donc satisfaite avec $g_{z_0}=g_{s/2,\,3s/2}$. Le théorème ([[ch01-holomorphie-sous-integrale]]) s'applique : $\Gamma$ est bien définie et holomorphe sur $\{\Re(z)>0\}$, et $\Gamma^{(k)}(z)=\int_0^{+\infty}(\ln t)^kt^{z-1}e^{-t}\,dt$.

**Équation fonctionnelle.** Soit $\Re(z)>0$ et $0<\eps<A$. La fonction $t\mapsto t^z=e^{z\ln t}$ est dérivable sur $]0,+\infty[$ de dérivée $\frac zt\,e^{z\ln t}=z\,t^{z-1}$. Par intégration par parties,
$$
\int_\eps^At^ze^{-t}\,dt=\Big[-t^ze^{-t}\Big]_\eps^A+z\int_\eps^At^{z-1}e^{-t}\,dt .
$$
Or $|A^ze^{-A}|=A^{\Re(z)}e^{-A}\to0$ quand $A\to+\infty$, et $|\eps^ze^{-\eps}|\le\eps^{\Re(z)}\to0$ quand $\eps\to0$ car $\Re(z)>0$. Les deux intégrales convergeant (en $z+1$ et en $z$, tous deux dans le demi-plan), on obtient $\Gamma(z+1)=z\,\Gamma(z)$.

**Valeurs entières.** $\Gamma(1)=\int_0^{+\infty}e^{-t}\,dt=1$, puis par récurrence $\Gamma(n+1)=n\,\Gamma(n)=n\cdot(n-1)!=n!$ pour $n\ge1$. $\square$

## Preuve à trous

Posons $X=]0,+\infty[$, $F(z,t)=t^{z-1}e^{-t}$. Pour $t$ fixé, $z\mapsto F(z,t)=e^{-t}e^{(z-1)\ln t}$ est holomorphe. On a <trou indice="module d'une exponentielle">$|t^{z-1}|=t^{\Re(z)-1}$</trou>, donc pour $\alpha\le\Re(z)\le\beta$ :
<trou indice="séparer $t\le1$ et $t\ge1$">$|F(z,t)|\le(t^{\alpha-1}+t^{\beta-1})e^{-t}$</trou>, intégrable sur $]0,+\infty[$ <trou>car $\alpha>0$ (intégrabilité en $0$) et grâce à $e^{-t}$ en $+\infty$</trou>. Tout $z_0$ du demi-plan est le centre d'un disque <trou indice="quel rayon ?">$D(z_0,\Re(z_0)/2)$ contenu dans la bande $\frac12\Re(z_0)\le\Re(z)\le\frac32\Re(z_0)$</trou> : le Théorème I.9.1 donne l'holomorphie et $\Gamma^{(k)}(z)=\int_0^{+\infty}(\ln t)^kt^{z-1}e^{-t}dt$.
Une intégration par parties, $\int_\eps^At^ze^{-t}dt=[-t^ze^{-t}]_\eps^A+z\int_\eps^At^{z-1}e^{-t}dt$, donne $\Gamma(z+1)=z\Gamma(z)$ ; avec $\Gamma(1)=1$, $\Gamma(n+1)=n!$. $\square$

## Exemples

* **$\Gamma(1/2)=\sqrt\pi$.** Par le changement de variable $t=u^2$ ($dt=2u\,du$) : $\Gamma(\frac12)=\int_0^{+\infty}t^{-1/2}e^{-t}dt=\int_0^{+\infty}\frac{e^{-u^2}}{u}\,2u\,du=2\int_0^{+\infty}e^{-u^2}du=\sqrt\pi$. Puis $\Gamma(\frac32)=\frac12\Gamma(\frac12)=\frac{\sqrt\pi}2$ et $\Gamma(\frac52)=\frac32\cdot\frac{\sqrt\pi}2=\frac{3\sqrt\pi}4$.
* **Symétrie par conjugaison.** Pour $t>0$, $\overline{t^{z-1}}=\overline{e^{(z-1)\ln t}}=e^{(\bar z-1)\ln t}=t^{\bar z-1}$, donc $\Gamma(\bar z)=\overline{\Gamma(z)}$. En particulier $\Gamma$ est réelle (et même $>0$, comme intégrale d'une fonction $>0$) sur $]0,+\infty[$.
* **Premier pas du prolongement.** Sur $\{\Re(z)>-1\}\setminus\{0\}$, la formule $\tilde\Gamma(z):=\frac{\Gamma(z+1)}z$ définit une fonction holomorphe qui coïncide avec $\Gamma$ sur $\{\Re z>0\}$, et $z\,\tilde\Gamma(z)=\Gamma(z+1)\to\Gamma(1)=1$ quand $z\to0$ : $\tilde\Gamma(z)\sim\frac1z$ près de $0$ (pôle simple de résidu $1$, chapitre II). Le prolongement est unique par le principe du prolongement analytique ([[ch01-prolongement-analytique]]).

## Pièges

* > ⚠️ $\Gamma(n)=(n-1)!$ et non $n!$ : le décalage vient de l'exposant $z-1$.
* Il n'existe **aucune** dominante intégrable valable sur tout le demi-plan $\{\Re z>0\}$ (il faudrait $g(t)\ge\sup_{\Re z>0}t^{\Re z-1}e^{-t}=+\infty$ pour $t>1$) : il faut dominer sur des bandes ou des disques, et le dire.
* Dans la domination, ne pas oublier les **deux** bouts : $t^{\alpha-1}$ contrôle $]0,1]$, $t^{\beta-1}$ contrôle $[1,+\infty[$ ; une seule puissance ne suffit pas.
* $t^{z-1}$ est défini avec le logarithme **réel** de $t>0$ ; ce n'est pas une « puissance complexe » ambiguë.
