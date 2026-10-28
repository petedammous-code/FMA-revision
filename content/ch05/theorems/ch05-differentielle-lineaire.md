---
id: ch05-differentielle-lineaire
type: proposition
chapter: 5
title: Différentielle d'une application linéaire continue
ref: Exemple V.3.5
page: 99
importance: 2
depends: [ch05-differentielle-def, ch05-derivee-directionnelle-unicite]
tags: [lineaire, differentielle, exemple-fondamental]
---
## Intuition

> 💡 La différentielle est la **meilleure approximation linéaire** de $f$ près d'un point. Si $f$ est déjà linéaire (et continue), la meilleure approximation linéaire de $f$, c'est $f$ elle-même, en tout point : $df_{x_0}=f$.

Exemple en dimension $1$ : $f(x)=3x$ a pour dérivée $3$ partout, et $df_{x_0}(h)=3h=f(h)$. Attention, une application **affine** $x\mapsto Ax+b$ a pour différentielle $A$ (la partie linéaire), pas elle-même. Rappels : $\mathcal L(E;F)$ est l'espace des applications linéaires **continues** de $E$ dans $F$ ([[ch05-norme-operateur-def]]) ; la différentielle est définie dans [[ch05-differentielle-def]].

## Énoncé

**Proposition (poly, Exemple V.3.5, p. 99).** Soit $f:E\to F$ une application linéaire continue entre deux espaces vectoriels normés. Alors $f$ est partout différentiable, et sa différentielle en tout point est $f$ :
$$
df_{x_0}=f\qquad\text{pour tout }x_0\in E .
$$
*Complément (pas dans l'énoncé du poly).* $df:E\to\mathcal L(E;F)$ est l'application constante $x_0\mapsto f$, donc continue : $f$ est de classe $C^1$ (et même $C^\infty$, [[ch05-lineaire-c-infini]]).

## Hypothèses

### H1 — $f$ linéaire

**Rôle.** La linéarité donne $f(x_0+h)=f(x_0)+f(h)$ : le reste de (V.3.1) est **exactement nul**.

**Si on la retire.** Pour $f(x)=x+1$ sur $\R$ (affine), $df_{x_0}(h)=h\ne f(h)$. Pour $f(x)=x^2$, $df_{x_0}(h)=2x_0h$, qui dépend de $x_0$. La conclusion « $df_{x_0}=f$ » caractérise d'ailleurs les applications linéaires continues : si $f$ est différentiable sur $E$ avec $df_{x_0}=f$ pour tout $x_0$, alors $f$ est linéaire continue ($f$ est elle-même une différentielle, donc dans $\mathcal L(E;F)$).

### H2 — $f$ continue

**Rôle.** La Définition V.3.1 exige que la différentielle soit linéaire **continue** ; ici la candidate est $f$ elle-même.

**Si on la retire.** Sur $c_{00}$ (suites réelles nulles à partir d'un certain rang) muni de $\|x\|_\infty=\max_n|x_n|$, la forme linéaire $\varphi(x)=\sum_nx_n$ n'est pas continue ($\varphi\big(\frac1N(e_1+\dots+e_N)\big)=1$ alors que la norme vaut $\frac1N$). Elle n'est continue en aucun point, donc n'est différentiable en aucun point ([[ch05-differentiable-implique-continue]]). En dimension finie, H2 est automatique.

## Idée de la preuve

Par linéarité, $f(x_0+h)-f(x_0)-f(h)=0$ : le reste est nul, donc $o(h)$, et $f$ est linéaire continue. Par unicité de la différentielle, $df_{x_0}=f$.

## Preuve

Soient $x_0,h\in E$. Par linéarité de $f$,
$$
f(x_0+h)-f(x_0)-f(h)=0 ,
$$
donc $\|f(x_0+h)-f(x_0)-f(h)\|_F=0=o(h)$. Comme $f$ est linéaire **et continue**, $f\in\mathcal L(E;F)$ satisfait la condition (V.3.1) au point $x_0$ ([[ch05-differentielle-def]]). Donc $f$ est différentiable en $x_0$, et par unicité de la différentielle ([[ch05-derivee-directionnelle-unicite]]), $df_{x_0}=f$. Comme $x_0$ est arbitraire, $df$ est l'application constante $x_0\mapsto f$ de $E$ dans $\mathcal L(E;F)$, continue : $f$ est $C^1$. $\square$

## Preuve à trous

Soient $x_0,h\in E$. Par <trou indice="propriété de f utilisée">linéarité, $f(x_0+h)-f(x_0)-f(h)=0$</trou>, ce qui est trivialement $o(h)$. De plus <trou indice="la définition V.3.1 demande deux choses de la candidate">$f$ est linéaire continue, donc $f\in\mathcal L(E;F)$ est une différentielle admissible</trou>. Par <trou>unicité de la différentielle</trou>, $df_{x_0}=f$ pour tout $x_0$. $\square$

## Exemples

* **Trace.** $\mathrm{tr}:\Mat_n(\R)\to\R$ est linéaire (donc continue, dimension finie) : $d(\mathrm{tr})_A(H)=\mathrm{tr}\,H$ pour toute matrice $A$.
* **Évaluation et intégrale sur $C([0,1])$.** Muni de $\|\cdot\|_\infty$, les formes linéaires $\delta_{x_0}(u)=u(x_0)$ (avec $x_0\in[0,1]$) et $I(u)=\int_0^1u$ sont continues ($|u(x_0)|\le\|u\|_\infty$, $|I(u)|\le\|u\|_\infty$). Donc $d(\delta_{x_0})_u=\delta_{x_0}$ et $dI_u(h)=\int_0^1h$ pour tout $u$.
* **Projections d'un produit.** Sur $E_1\times E_2$ muni de $\|(x,y)\|=\|x\|_{E_1}+\|y\|_{E_2}$, $p_1(x,y)=x$ est linéaire continue ($\|x\|\le\|(x,y)\|$), donc $d(p_1)_{(a,b)}(h,k)=h$. C'est l'outil de base de la différentiation composante par composante ([[ch05-projections-injections-canoniques]], [[ch05-differentiabilite-composantes]]).

## Pièges

* > ⚠️ $df_{x_0}=f$ ne veut **pas** dire « la dérivée de $f$ vaut $f(x_0)$ » : c'est l'**application** $f$ tout entière, indépendante de $x_0$. Par exemple pour $f(x)=3x$, $df_{x_0}(h)=3h$, pas $3x_0$.
* Une application **affine** $x\mapsto L(x)+b$ ($L\in\mathcal L(E;F)$, $b\in F$) a pour différentielle $L$ en tout point (la constante disparaît), pas $L+b$.
* En dimension infinie, « linéaire » ne suffit pas : il faut « linéaire continue » (exemple $\varphi$ sur $c_{00}$).
* Comme $df$ est constante, sa différentielle est nulle : $d^2f=0$ ([[ch05-differentielle-seconde-def]]).
