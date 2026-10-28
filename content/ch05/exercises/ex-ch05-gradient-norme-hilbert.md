---
id: ex-ch05-gradient-norme-hilbert
type: exercise
chapters: [5]
title: La norme d'un espace de Hilbert et ses puissances
source: "Classique (calcul de base de la différentielle d'une norme hilbertienne)"
difficulty: 1
time: 15
tools: [ch05-differentielle-def, ch05-differentielle-bilineaire, ch05-composition-differentielles, ch05-gradient-hilbert, ch05-derivee-directionnelle-unicite, ch05-classe-ck-def]
---
## Énoncé

Soit $(E,\langle\cdot,\cdot\rangle)$ un espace de Hilbert réel, non réduit à $\{0\}$, de norme $\|x\|=\sqrt{\langle x,x\rangle}$. Pour $\alpha>0$ on pose $\phi_\alpha(x)=\|x\|^\alpha$ ($x\in E$) ; on note $q=\phi_2$ et $N=\phi_1$.

1. Montrer que $q$ est différentiable en tout point $x\in E$, calculer $dq_x$ et le gradient $\nabla q(x)$.
2. Montrer que $N$ est de classe $C^1$ sur l'ouvert $E\setminus\{0\}$, calculer $\nabla N(x)$ et la norme $\|dN_x\|_{\mathcal L(E;\R)}$.
3. Montrer que $N$ n'est pas différentiable en $0$.
4. Soit $\alpha>1$. Montrer que $\phi_\alpha$ est de classe $C^1$ sur $E$ tout entier et donner $\nabla\phi_\alpha(x)$ pour tout $x\in E$.

## Indices

### Indice 1
Pour 1, écrire $q(x+h)-q(x)$ en développant le produit scalaire : c'est un calcul direct à partir de la définition. Pour 2, voir $N$ comme une composée.

### Indice 2
$N=\sqrt{\cdot}\circ q$ sur $E\setminus\{0\}$, où $q$ prend ses valeurs dans l'ouvert $]0,+\infty[$ sur lequel $s\mapsto\sqrt s$ est dérivable : règle de la chaîne. Pour la norme de $dN_x$ et la continuité de $x\mapsto dN_x$, utiliser que la forme linéaire $h\mapsto\langle v,h\rangle$ a pour norme $\|v\|$ (Cauchy–Schwarz, cas d'égalité $h=v$).

### Indice 3
Pour 3, si $N$ était différentiable en $0$, $dN_0(h)$ serait la limite de $\frac{N(th)-N(0)}{t}=\frac{|t|}{t}\|h\|$ quand $t\to0$. Pour 4, en $0$ : $\|h\|^\alpha=\|h\|^{\alpha-1}\,\|h\|$.

## Corrigé

**Rappel.** Pour $v\in E$, notons $\ell_v:h\mapsto\langle v,h\rangle$. Par Cauchy–Schwarz $|\ell_v(h)|\le\|v\|\,\|h\|$, avec égalité pour $h=v$ : donc $\ell_v\in\mathcal L(E;\R)$ et $\|\ell_v\|=\|v\|$. Le gradient $\nabla f(a)$ d'une fonction $f$ différentiable en $a$ est l'unique vecteur tel que $df_a=\ell_{\nabla f(a)}$ ([[ch05-gradient-hilbert]]).

**1.** Pour $x,h\in E$, par bilinéarité et symétrie du produit scalaire,
$$
q(x+h)-q(x)=\langle x+h,x+h\rangle-\langle x,x\rangle=2\langle x,h\rangle+\|h\|^2 .
$$
L'application $h\mapsto2\langle x,h\rangle=\ell_{2x}(h)$ est linéaire continue (rappel), et le reste vérifie $|q(x+h)-q(x)-2\langle x,h\rangle|=\|h\|^2=\|h\|\cdot\|h\|=o(h)$. Par la définition [[ch05-differentielle-def]], $q$ est différentiable en $x$ et
$$
dq_x(h)=2\langle x,h\rangle,\qquad \nabla q(x)=2x .
$$
(C'est aussi le cas particulier $b=\langle\cdot,\cdot\rangle$, $(a,b)=(x,x)$ de [[ch05-differentielle-bilineaire]], composé avec $x\mapsto(x,x)$.)

**2.** L'ensemble $E\setminus\{0\}$ est ouvert (complémentaire d'un fermé) et $q$ envoie $E\setminus\{0\}$ dans l'ouvert $V=]0,+\infty[$. La fonction $r:V\to\R$, $r(s)=\sqrt s$, est dérivable en tout $s\in V$ avec $dr_s(\sigma)=\frac{\sigma}{2\sqrt s}$. Sur $E\setminus\{0\}$, $N=r\circ q$, donc par la règle de la chaîne ([[ch05-composition-differentielles]], hypothèses : $q$ différentiable en $x$, $r$ différentiable en $q(x)\in V$) :
$$
dN_x(h)=dr_{q(x)}\big(dq_x(h)\big)=\frac{2\langle x,h\rangle}{2\|x\|}=\Big\langle\frac{x}{\|x\|},h\Big\rangle,\qquad\text{donc}\qquad\nabla N(x)=\frac{x}{\|x\|}.
$$
Par le rappel, $\|dN_x\|=\|x/\|x\|\|=1$. Enfin, pour $x,y\neq0$, $dN_x-dN_y=\ell_{u(x)-u(y)}$ avec $u(x)=x/\|x\|$, donc $\|dN_x-dN_y\|=\|u(x)-u(y)\|$ ; comme $u$ est continue sur $E\setminus\{0\}$ (quotient de fonctions continues, dénominateur non nul), $x\mapsto dN_x$ est continue de $E\setminus\{0\}$ dans $\mathcal L(E;\R)$ : $N$ est de classe $C^1$ sur $E\setminus\{0\}$ ([[ch05-classe-ck-def]]).

**3.** Supposons $N$ différentiable en $0$. Fixons $h\neq0$ (il en existe car $E\neq\{0\}$). D'après [[ch05-derivee-directionnelle-unicite]], on aurait
$$
dN_0(h)=\lim_{t\to0}\frac{N(th)-N(0)}{t}=\lim_{t\to0}\frac{|t|}{t}\,\|h\| .
$$
Or ce quotient vaut $\|h\|$ pour $t>0$ et $-\|h\|$ pour $t<0$ ; comme $\|h\|\neq0$, il n'a pas de limite en $0$. Contradiction : $N$ n'est pas différentiable en $0$ (elle y est pourtant continue).

**4.** *Sur $E\setminus\{0\}$.* $\phi_\alpha=\rho\circ N$ avec $\rho(s)=s^\alpha$ dérivable sur $]0,+\infty[$, $\rho'(s)=\alpha s^{\alpha-1}$. Par la règle de la chaîne et la question 2,
$$
d(\phi_\alpha)_x(h)=\alpha\|x\|^{\alpha-1}\Big\langle\frac{x}{\|x\|},h\Big\rangle=\alpha\|x\|^{\alpha-2}\langle x,h\rangle,\qquad \nabla\phi_\alpha(x)=\alpha\|x\|^{\alpha-2}x .
$$
*En $0$.* $\phi_\alpha(0)=0$ et $|\phi_\alpha(h)-\phi_\alpha(0)-0|=\|h\|^{\alpha-1}\,\|h\|$ ; comme $\alpha-1>0$, $\|h\|^{\alpha-1}\to0$ quand $h\to0$ : pour $\eps>0$, si $\|h\|<\eps^{1/(\alpha-1)}$ alors le reste est $\le\eps\|h\|$. Donc $\phi_\alpha$ est différentiable en $0$ avec $d(\phi_\alpha)_0=0$, i.e. $\nabla\phi_\alpha(0)=0$.

*Continuité de $d\phi_\alpha$.* Posons $g(x)=\alpha\|x\|^{\alpha-2}x$ si $x\neq0$ et $g(0)=0$. Par le rappel, $\|d(\phi_\alpha)_x-d(\phi_\alpha)_y\|=\|g(x)-g(y)\|$. La fonction $g$ est continue sur $E\setminus\{0\}$ (produit de fonctions continues) et en $0$ car $\|g(x)\|=\alpha\|x\|^{\alpha-1}\to0$. Donc $x\mapsto d(\phi_\alpha)_x$ est continue sur $E$ : $\phi_\alpha$ est $C^1$ sur $E$, de gradient $\nabla\phi_\alpha(x)=\alpha\|x\|^{\alpha-2}x$ ($x\ne0$), $\nabla\phi_\alpha(0)=0$. Pour $\alpha=2$ on retrouve $\nabla q(x)=2x$.

## Pièges et variantes

* > ⚠️ Ne pas appliquer la règle de la chaîne en $0$ pour $N=\sqrt{\cdot}\circ q$ : $\sqrt{\cdot}$ n'est pas dérivable en $q(0)=0$. Inversement, la règle de la chaîne ne permet jamais de conclure qu'une composée **n'est pas** différentiable : $q=\rho\circ N$ avec $\rho(s)=s^2$ est différentiable en $0$ alors que $N$ ne l'est pas. Il faut l'argument direct de la question 3.
* Pour montrer la **continuité** de $x\mapsto dN_x$, il faut une norme sur $\mathcal L(E;\R)$ : c'est l'isométrie $v\mapsto\ell_v$ qui ramène la question à la continuité de $x\mapsto x/\|x\|$ dans $E$. Ne pas se contenter de « $h\mapsto\langle x,h\rangle/\|x\|$ dépend continûment de $x$ » sans le dire.
* Différentiable $\ne$ continu : $N$ est continue (et même $1$-lipschitzienne) en $0$ sans y être différentiable.
* Variante : pour $0<\alpha\le1$, $\phi_\alpha$ n'est pas différentiable en $0$ (même argument : $\frac{\phi_\alpha(th)}{t}=\frac{|t|^\alpha}{t}\|h\|^\alpha$ n'a pas de limite finie). Pour $\alpha>2$, on peut montrer de même que $\phi_\alpha$ est $C^2$.
* Variante : remplacer la norme hilbertienne par la norme $\|x\|_1=\sum_i|x_i|$ de $\R^n$ ; elle n'est différentiable qu'aux points dont **toutes** les coordonnées sont non nulles (penser à $t\mapsto|a+t|$ en $a=0$ dans la direction $e_i$).
