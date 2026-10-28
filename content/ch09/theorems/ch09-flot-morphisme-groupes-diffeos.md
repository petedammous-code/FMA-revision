---
id: ch09-flot-morphisme-groupes-diffeos
type: corollary
chapter: 9
title: $t\mapsto F_t$ est un morphisme de groupes de $\mathbb R$ dans $\mathrm{Diff}^r(S)$
ref: Corollaire IX.8.10
page: 175
importance: 2
depends: [ch09-flot-complet-compacte, ch09-flot-propriete-groupe, ch09-flot-global-ouvert-regulier, ch09-diffeomorphisme-sous-varietes-def, ch09-remarques-applications-cr, ch09-redressement-local, ch09-fonction-differentiable-sur-sous-variete-def, ch07-restriction-domaine-c1-lipschitz]
tags: [flot, groupe-a-un-parametre, difféomorphisme, morphisme-de-groupes, compacite, sous-variete, champ-tangent]
---
## Intuition

> 💡 Sur une sous-variété compacte $S$, un champ tangent autonome **fait couler toute la surface** : pour chaque durée $t$, l'application « où est, au temps $t$, le point qui était en $x$ au temps $0$ » est une transformation $F_t$ de $S$ tout entière, lisse, inversible (on la défait en remontant le temps : $F_{-t}$), et faire couler pendant $t$ puis pendant $s$ revient à faire couler pendant $t+s$. Image : la sphère tourne autour de son axe ; $F_t$ est la rotation d'angle $t$, et le corollaire dit que les rotations se composent en ajoutant les angles.

Vocabulaire. Un **difféomorphisme de classe $C^r$** de $S$ est une bijection $\varphi : S\to S$ telle que $\varphi$ et $\varphi^{-1}$ soient de classe $C^r$ ([[ch09-diffeomorphisme-sous-varietes-def]]) ; ils forment, pour la composition $\circ$, un groupe noté $\mathrm{Diff}^r(S)$. Un **morphisme de groupes** $\Phi : (\R,+)\to(\mathrm{Diff}^r(S),\circ)$ vérifie $\Phi(t+s)=\Phi(t)\circ\Phi(s)$ : une addition de durées devient une composition de transformations. On dit que $(F_t)_{t\in\R}$ est un **groupe à un paramètre** de difféomorphismes.

Notations ([[ch09-flot-global-sous-variete-def]]) : $F_t\cdot x=F(t,x)=\alpha_x(t)$, où $\alpha_x$ est la courbe intégrale maximale de condition initiale $(0,x)$.

## Énoncé

**Corollaire (poly, Corollaire IX.8.10, p. 175).** Soit $X$ un champ de vecteurs tangents indépendant du temps sur une sous-variété compacte $S$ de $\R^N$ (de classe au moins $C^r$). Supposons que $X$ soit de classe $C^r$, $r\ge1$. Alors :

1. pour tout $t\in\R$, $F_t : S\to S$, $x\mapsto F_t\cdot x=F(t,x)$, est un difféomorphisme de classe $C^r$ de $S$, d'inverse $F_{-t}$ ;
2. notant $\mathrm{Diff}^r(S)$ le groupe des difféomorphismes de classe $C^r$ de $S$, l'application $t\mapsto F_t$ est un morphisme de groupes de $\R$ dans $\mathrm{Diff}^r(S)$ : $F_0=\id_S$ et $F_{t+s}=F_s\circ F_t$ pour tous $s,t\in\R$.

(Le point 1 est énoncé dans le texte qui précède le corollaire.)

## Hypothèses

### H1 — $S$ compacte

**Rôle.** Via le théorème IX.8.9 ([[ch09-flot-complet-compacte]]), elle garantit $D_0=\R\times S$ : chaque $F_t$ est défini sur **tout** $S$, et (IX.8.3) vaut pour tous $s,t$.

**Si on la retire.** $F_t$ n'est défini que sur l'ouvert $D_t=\{x\in S\mid t\in J(x)\}$ de $S$, éventuellement vide. Exemple : $S=\R$, $X(x)=1+x^2$ ($C^\infty$). La courbe intégrale issue de $x$ est $\alpha_x(t)=\tan(\arctan x+t)$ (car $\frac{d}{dt}\tan u=1+\tan^2u$), avec $J(x)=\,]-\frac\pi2-\arctan x,\ \frac\pi2-\arctan x[$. Pour $t\ge\pi$, on a $\arctan x+t>-\frac\pi2+\pi=\frac\pi2$ pour tout $x$, donc $D_t=\varnothing$ : $F_t$ n'est défini nulle part et il n'y a pas de morphisme $\R\to\mathrm{Diff}^r(\R)$, seulement un « groupe local ». (Sans compacité, on montre encore, avec le complément de [[ch09-flot-propriete-groupe]], que $F_t$ est un difféomorphisme de l'ouvert $D_t$ sur l'ouvert $D_{-t}$, d'inverse $F_{-t}$.) La compacité n'est pas nécessaire : seul compte $D_0=\R\times S$ (par exemple $S=\R$, $X=1$, $F_t\cdot x=x+t$).

### H2 — $X$ indépendant du temps

**Rôle.** C'est le cadre de la propriété de groupe (IX.8.3) : les durées s'ajoutent.

**Si on la retire.** Sur $S=\mathbb S^2$ (compacte), le champ tangent $C^\infty$ $X(t,p)=t\,(e_3\wedge p)$ a pour flot $F(t_0,t,p)=R_{(t^2-t_0^2)/2}\,p$ ($R_\theta$ : rotation d'axe $e_3$ et d'angle $\theta$, [[ch09-flot-propriete-groupe]], exemple 3). Les $G_t=F(0,t,\cdot)=R_{t^2/2}$ sont bien des difféomorphismes, mais $G_1\circ G_1=R_1\ne R_2=G_2$ : $t\mapsto G_t$ n'est pas un morphisme.

### H3 — $X$ de classe $C^r$, $r\ge1$

**Rôle.** Double : (i) un champ $C^1$ est localement lipschitzien, donc lipschitzien sur le compact $S$, ce qui permet d'appliquer le théorème IX.8.9 ; (ii) par le théorème IX.8.8 ([[ch09-flot-global-ouvert-regulier]]), le flot $F$ est alors de classe $C^r$, donc chaque $F_t$ aussi.

**Si on la retire.** Si $X$ est seulement lipschitzien, les $F_t$ sont des homéomorphismes (continus, d'inverse $F_{-t}$ continu) mais pas forcément des difféomorphismes. Exemple sur le compact $\mathbb S^1$ : $X(q)=\abs{q_2}\,(-q_2,q_1)$, lipschitzien (produit de fonctions lipschitziennes bornées), non $C^1$ en $(\pm1,0)$. En écrivant $q=(\cos\theta,\sin\theta)$, l'équation devient $\theta'=\abs{\sin\theta}$ ; les points $\theta=0$ et $\theta=\pm\pi$ sont fixes, donc les arcs $]0,\pi[$ et $]-\pi,0[$ sont invariants. Sur $]0,\pi[$, $\theta'=\sin\theta$ et $\frac{d}{dt}\tan\frac\theta2=\frac{\sin(\theta/2)\cos(\theta/2)}{\cos^2(\theta/2)}=\tan\frac\theta2$ ; sur $]-\pi,0[$, $\theta'=-\sin\theta$. D'où, pour $\abs{\theta_0}<\pi$,
$$
F_t(\theta_0)=2\arctan\!\big(e^{\pm t}\tan\tfrac{\theta_0}2\big)\qquad(\text{signe }+\text{ si }\theta_0\ge0,\ -\text{ si }\theta_0\le0),
$$
dont la dérivée à droite en $\theta_0=0$ vaut $e^t$ et la dérivée à gauche $e^{-t}$. Pour $t\ne0$, $F_t$ n'est pas différentiable au point $(1,0)$.

## Idée de la preuve

Par compacité ($X$ étant $C^1$ donc lipschitzien), le flot est défini sur $\R\times S$ ; il est $C^r$, donc chaque $F_t$ l'est. On a $F_0=\id_S$, et (IX.8.3), valable pour tous $s,t$, donne $F_{-t}\circ F_t=F_t\circ F_{-t}=F_0$ et $F_{t+s}=F_s\circ F_t$.

## Preuve

**1. $X$ est lipschitzien.** Soit $p\in S$. Par le redressement local ([[ch09-redressement-local]]), il existe un voisinage ouvert $V$ de $p$ dans $\R^N$, un ouvert $W$ de $\R^N$ et un difféomorphisme $\Phi : V\to W$ (de classe au moins $C^1$) avec $\Phi(V\cap S)=(\R^m\times\{0\})\cap W$. Notons $\pi : \R^N\to\R^m$ la projection sur les $m$ premières coordonnées ; $x : u\mapsto\Phi^{-1}(u,0)$ est un paramétrage local de $S$ en $p$, d'inverse $x^{-1}=\pi\circ\Phi$ sur $V\cap S$. Alors $X=(X\circ x)\circ(\pi\circ\Phi)$ sur $V\cap S$, où $X\circ x$ est de classe $C^1$ (définition de « $X$ de classe $C^r$ sur $S$ », [[ch09-fonction-differentiable-sur-sous-variete-def]]) et $\pi\circ\Phi$ est $C^1$ sur l'ouvert $V$. Une application $C^1$ sur un ouvert est localement lipschitzienne (inégalité des accroissements finis sur une boule, [[ch07-restriction-domaine-c1-lipschitz]]), et une composée d'applications localement lipschitziennes l'est encore : $X$ est localement lipschitzien sur $S$. Sur le compact $S$, cela entraîne que $X$ est lipschitzien (argument de suite extraite détaillé dans [[ch09-flot-complet-compacte]], hypothèse H2).

**2. $F_t$ est défini sur $S$ et de classe $C^r$.** Par le théorème IX.8.9 ([[ch09-flot-complet-compacte]]), $D_0=\R\times S$ : pour tout $t\in\R$, $F_t : S\to S$ est défini partout. Le champ $(t,x)\mapsto X(x)$ est de classe $C^r$ sur $\R\times S$ ; par le théorème IX.8.8 b ([[ch09-flot-global-ouvert-regulier]]), le flot global est de classe $C^r$ sur son domaine, donc $F : \R\times S\to S$ est de classe $C^r$ (c'est la restriction du flot à trois arguments à $\{0\}\times\R\times S$). Pour $t$ fixé, $j_t : S\to\R\times S$, $x\mapsto(t,x)$, est de classe $C^\infty$ (restriction d'une application affine), donc $F_t=F\circ j_t$ est de classe $C^r$ par composition ([[ch09-remarques-applications-cr]]). (Le poly écrit « les $F_t$ sont de classe $C^1$ car le flot global $F$ l'est » ; le même argument donne la classe $C^r$.)

**3. $F_t$ est un difféomorphisme d'inverse $F_{-t}$.** $F_0\cdot x=\alpha_x(0)=x$, donc $F_0=\id_S$. Comme $D_0=\R\times S$, les conditions $(t,x)\in D_0$ et $(s,F_t\cdot x)\in D_0$ sont toujours vérifiées, et (IX.8.3) ([[ch09-flot-propriete-groupe]]) donne, pour tous $s,t\in\R$,
$$
F_s\circ F_t=F_{t+s}.
$$
Avec $s=-t$, puis en échangeant les rôles : $F_{-t}\circ F_t=F_0=\id_S$ et $F_t\circ F_{-t}=F_0=\id_S$. Donc $F_t$ est bijective d'inverse $F_{-t}$ ; $F_t$ et $F_{-t}$ sont continues et de classe $C^r$ (étape 2) : $F_t$ est un homéomorphisme, et un difféomorphisme de classe $C^r$ de $S$ ([[ch09-diffeomorphisme-sous-varietes-def]]).

**4. Morphisme de groupes.** $\mathrm{Diff}^r(S)$ est un groupe pour la composition : $\id_S$ en est un élément, l'inverse d'un difféomorphisme en est un, et la composée de deux difféomorphismes $C^r$ est un difféomorphisme $C^r$ (composée de bijections, et composées d'applications $C^r$, [[ch09-remarques-applications-cr]]). L'application $\Phi : t\mapsto F_t$ est à valeurs dans $\mathrm{Diff}^r(S)$ (étape 3) et vérifie
$$
\Phi(t+s)=F_{t+s}=F_s\circ F_t=\Phi(s)\circ\Phi(t)\qquad(s,t\in\R).
$$
Comme $t+s=s+t$, on a aussi $\Phi(s+t)=\Phi(t)\circ\Phi(s)$ : $\Phi$ est un morphisme de groupes de $(\R,+)$ dans $(\mathrm{Diff}^r(S),\circ)$ (et son image est un sous-groupe commutatif). $\square$

## Preuve à trous

Le champ $X$ est $C^1$, donc <trou indice="quelle propriété utiliser pour appliquer le théorème IX.8.9 ?">localement lipschitzien, donc lipschitzien sur le compact $S$</trou>. Par le théorème IX.8.9, $D_0=\R\times S$, de sorte que chaque $F_t$ est défini sur tout $S$ ; par le théorème IX.8.8, <trou indice="régularité du flot">$F$ est de classe $C^r$ sur $\R\times S$, donc $F_t=F(t,\cdot)$ est de classe $C^r$</trou>. On a $F_0=\id_S$ et, (IX.8.3) étant valable pour tous $s,t\in\R$, <trou indice="prendre s = -t">$F_{-t}\circ F_t=F_t\circ F_{-t}=F_0=\id_S$</trou> : $F_t$ est un $C^r$-difféomorphisme d'inverse $F_{-t}$. Enfin <trou indice="traduire (IX.8.3) en langage de groupes">$F_{t+s}=F_s\circ F_t$, c'est-à-dire que $t\mapsto F_t$ transforme l'addition de $\R$ en la composition de $\mathrm{Diff}^r(S)$</trou>. $\square$

## Exemples

**Exemple 1 (rotations de la sphère).** $S=\mathbb S^2$, $X(p)=e_3\wedge p$ : $F_t=R_t$, rotation d'axe $e_3$ et d'angle $t$ ([[ch09-flot-propriete-groupe]], exemple 1). Le morphisme $t\mapsto R_t$ va de $\R$ dans $SO(3)\subset\mathrm{Diff}^\infty(\mathbb S^2)$ ; il n'est **pas injectif** : $R_t=\id$ si et seulement si $t\in2\pi\Z$ (noyau $2\pi\Z$), et son image est le cercle des rotations d'axe $e_3$. Plus généralement, pour $X(p)=Ap$ avec $A$ antisymétrique, $F_t=\exp(tA)$ et l'on retrouve $\exp((t+s)A)=\exp(sA)\exp(tA)$.

**Exemple 2 (difféomorphismes qui ne sont pas des isométries).** Sur $\mathbb S^2$, pour le champ tangent $X(p)=e_3-\langle e_3,p\rangle\,p$ ([[ch09-flot-complet-compacte]], exemple 2),
$$
F_t(x,y,z)=\frac{\big(x,\ y,\ z\cosh t+\sinh t\big)}{\cosh t+z\sinh t}.
$$
On vérifie la loi de groupe sur la troisième coordonnée : si $w=\frac{z\cosh t+\sinh t}{\cosh t+z\sinh t}$, alors
$$
\frac{w\cosh s+\sinh s}{\cosh s+w\sinh s}=\frac{z(\cosh t\cosh s+\sinh t\sinh s)+(\sinh t\cosh s+\cosh t\sinh s)}{(\cosh t\cosh s+\sinh t\sinh s)+z(\sinh t\cosh s+\cosh t\sinh s)}=\frac{z\cosh(t+s)+\sinh(t+s)}{\cosh(t+s)+z\sinh(t+s)},
$$
et de même pour $x,y$ (le dénominateur se compose en $\cosh(t+s)+z\sinh(t+s)$). En particulier $F_{-t}$ est l'inverse de $F_t$. Les $F_t$ fixent les deux pôles $\pm e_3$, ne conservent pas les distances (pour $t\to+\infty$, $F_t\cdot p\to e_3$ pour tout $p\ne-e_3$), et ce sont pourtant des difféomorphismes $C^\infty$ de la sphère.

**Exemple 3 (flot linéaire sur le tore).** $S=\mathbb S^1\times\mathbb S^1\subset\R^4$, compacte (produit, [[ch09-ex-produit]]), $X(q)=(-q_2,q_1,-\lambda q_4,\lambda q_3)$ avec $\lambda\in\R$, tangent car chaque bloc est orthogonal au point correspondant de $\mathbb S^1$. Alors $F_t=(R_t,R_{\lambda t})$ (rotations planes d'angles $t$ et $\lambda t$). Le noyau du morphisme est $\{t\mid t\in2\pi\Z,\ \lambda t\in2\pi\Z\}$ : si $\lambda\notin\Q$, il est réduit à $\{0\}$ et $t\mapsto F_t$ est **injectif** ; si $\lambda=a/b$ avec $a\in\Z$, $b\in\N^*$ premiers entre eux, c'est $2\pi b\Z$ (car $ak/b\in\Z$ équivaut à $b\mid k$).

## Pièges

* > ⚠️ L'ordre : le morphisme transforme $t+s$ en $F_s\circ F_t$ (d'abord $t$, puis $s$) ; comme $\R$ est commutatif, $F_s\circ F_t=F_t\circ F_s$, mais deux difféomorphismes quelconques de $S$ ne commutent pas : l'image de $t\mapsto F_t$ est un sous-groupe **commutatif** très particulier.
* > ⚠️ Sans compacité (ou plus généralement sans $D_0=\R\times S$), « $F_t\in\mathrm{Diff}^r(S)$ » est faux en général : $F_t$ n'est défini que sur un ouvert $D_t$, éventuellement vide (hypothèse H1).
* Champ dépendant du temps : chaque $F(0,t,\cdot)$ peut être un difféomorphisme, mais ce n'est pas un morphisme (hypothèse H2).
* La régularité de $F_t$ est celle de $X$ : il faut $X$ de classe $C^r$ avec $r\ge1$ pour des difféomorphismes ; un champ seulement lipschitzien donne des homéomorphismes (hypothèse H3).
* Le morphisme n'est pas injectif en général (orbites périodiques : exemple 1) ; et $F_t=\id_S$ pour un $t\ne0$ ne signifie pas $X=0$.
* Réciproque (hors programme) : un groupe à un paramètre $t\mapsto F_t$ de difféomorphismes, assez régulier en $(t,x)$, est le flot du champ tangent $X(x)=\frac{d}{dt}\big|_{t=0}F_t\cdot x$.
