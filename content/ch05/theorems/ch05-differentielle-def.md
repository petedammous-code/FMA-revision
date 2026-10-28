---
id: ch05-differentielle-def
type: definition
chapter: 5
title: Application différentiable en un point, différentielle $df_a$, classe $C^1$
ref: Définition V.3.1
page: 98
importance: 3
depends: [ch05-petit-o-def, ch05-norme-operateur-def]
tags: [differentielle, differentiable, classe-c1, approximation-lineaire]
---
## Intuition

> 💡 Être différentiable en $a$, c'est **ressembler à une application linéaire** quand on zoome autour de $a$ : $f(a+h)\approx f(a)+df_a(h)$, avec une erreur négligeable devant la taille $\|h\|$ du déplacement. Pour $f:\R^2\to\R$, le graphe se confond, à fort grossissement, avec un plan (le plan tangent).

En variable réelle, $f(a+h)=f(a)+f'(a)h+o(h)$ : le nombre $f'(a)$ est remplacé ici par une **application linéaire** $df_a:E\to F$, car un déplacement $h$ a maintenant une direction. On demande en plus que $df_a$ soit **continue**, ce qui n'est automatique qu'en dimension finie.

Prérequis. $E$, $F$ sont des **espaces vectoriels normés** (evn) réels ; un **ouvert** $U\subset E$ est une partie contenant une boule autour de chacun de ses points. $\mathcal L(E;F)$ désigne l'espace des applications linéaires continues $E\to F$ muni de la norme d'opérateur $\|T\|=\sup_{\|x\|_E\le1}\|T(x)\|_F$ ([[ch05-norme-operateur-def]]). La notation $o(h)$ est définie dans [[ch05-petit-o-def]].

## Énoncé

**Définition (poly, Définition V.3.1, p. 98).** Soient $E$ et $F$ des espaces vectoriels normés et $U$ un ouvert de $E$. On dit que l'application $f:U\to F$ est **différentiable en $a\in U$** s'il existe une application linéaire continue $df_a:E\to F$ telle que
$$
\|f(a+h)-f(a)-df_a(h)\|_F=o(h). \qquad\text{(V.3.1)}
$$
Cette application linéaire est unique ([[ch05-derivee-directionnelle-unicite]]) ; on appelle $df_a$ la **différentielle** de $f$ au point $a$.

On dit que $f$ est **différentiable sur $U$** si elle est différentiable en tout point de $U$.

On dit que $f$ est **de classe $C^1$ sur $U$** si elle est différentiable en tout point de $U$ et si l'application
$$
df:U\longrightarrow\mathcal L(E;F),\qquad a\mapsto df_a
$$
est continue ($\mathcal L(E;F)$ étant muni de la norme d'opérateur).

**En quantificateurs.** (V.3.1) signifie : pour tout $\eps>0$ il existe $\delta>0$ tel que, pour tout $h\in E$ avec $\|h\|_E<\delta$ et $a+h\in U$,
$$
\|f(a+h)-f(a)-df_a(h)\|_F\le\eps\|h\|_E .
$$

## Hypothèses

### H1 — $U$ ouvert

**Rôle.** Il existe $r>0$ avec $B_E(a,r)\subset U$ : $f(a+h)$ est défini pour **tout** $h$ assez petit, dans toutes les directions. C'est ce qui garantit l'unicité de $df_a$ (on peut faire tendre $t\to0$ dans $f(a+th)$ pour tout $h$, [[ch05-derivee-directionnelle-unicite]]).

### H2 — $df_a$ linéaire **et continue**

**Rôle.** La continuité de $df_a$ entraîne la continuité de $f$ en $a$ ([[ch05-differentiable-implique-continue]]). En dimension finie elle est automatique ; en dimension infinie, sans elle, une forme linéaire non continue $\varphi$ vérifierait (V.3.1) avec $df_a=\varphi$ (reste nul) tout en étant discontinue partout.

### H3 — Les normes de $E$ et $F$

**Rôle.** Le $o(h)$ se mesure avec $\|\cdot\|_E$ et $\|\cdot\|_F$, et la continuité de $df$ avec la norme d'opérateur. Remplacer ces normes par des normes équivalentes ne change rien ([[ch05-differentielle-normes-equivalentes]]) ; en dimension finie, la différentiabilité ne dépend donc pas des normes.

## Exemples

* **Un polynôme de $\R^2$.** $f(x,y)=x^2y$ au point $(a,b)$. On développe :
$$
f(a+h,b+k)=a^2b+\underbrace{2ab\,h+a^2k}_{\text{linéaire en }(h,k)}+\underbrace{2a\,hk+b\,h^2+h^2k}_{\text{reste}} .
$$
Avec $\rho=\max(|h|,|k|)$, le reste est majoré par $(2|a|+|b|)\rho^2+\rho^3=o(\rho)$. Donc $df_{(a,b)}(h,k)=2ab\,h+a^2k$ (linéaire, donc continue en dimension finie).
* **Carré de la norme dans un Hilbert.** Sur un espace de Hilbert $(E,\langle\cdot,\cdot\rangle)$, $f(x)=\|x\|^2$ : $f(a+h)-f(a)=2\langle a,h\rangle+\|h\|^2$. L'application $h\mapsto2\langle a,h\rangle$ est linéaire, continue (Cauchy–Schwarz : $|2\langle a,h\rangle|\le2\|a\|\|h\|$), et le reste $\|h\|^2$ est $o(h)$. Donc $df_a(h)=2\langle a,h\rangle$. De plus $\|df_a-df_b\|=\sup_{\|h\|\le1}2|\langle a-b,h\rangle|=2\|a-b\|$ : $df$ est continue (même lipschitzienne), $f$ est $C^1$.
* **Différentiable mais pas $C^1$.** $f:\R\to\R$, $f(x)=x^2\sin(1/x)$ si $x\ne0$, $f(0)=0$. En $0$ : $|f(h)-f(0)-0\cdot h|\le h^2=o(h)$, donc $df_0=0$. Pour $x\ne0$, $f'(x)=2x\sin(1/x)-\cos(1/x)$, qui n'a pas de limite en $0$ : $df$ (identifiée à $f'$, [[ch05-derivee-variable-reelle]]) n'est pas continue en $0$.
* **Non différentiables.** $x\mapsto|x|$ en $0$ : il faudrait $df_0(h)=\lim_{t\to0}\frac{|th|}{t}$, limite qui n'existe pas pour $h\ne0$. De même, $f(x,y)=\dfrac{x^3}{x^2+y^2}$ ($f(0,0)=0$) est continue, admet en $0$ toutes ses dérivées directionnelles $\lim_{t\to0}\frac{f(th)}t=\frac{h_1^3}{h_1^2+h_2^2}$, mais cette expression n'est pas linéaire en $h$ (elle vaut $1$ en $(1,0)$, $0$ en $(0,1)$ et $\frac12$ en $(1,1)$) : pas de $df_0$.

## Pièges

* > ⚠️ $df_a$ est une **application linéaire** $E\to F$, pas un nombre ni un vecteur : $df_a(h)\in F$ est sa valeur sur le déplacement $h$. Ne pas confondre $df_a(h)$ (différentielle en $a$ appliquée à $h$) et $df(a)$ (notation ambiguë à éviter).
* > ⚠️ En dimension infinie, il faut **vérifier la continuité** de la candidate $df_a$ (par une majoration $\|df_a(h)\|_F\le C\|h\|_E$).
* L'existence de toutes les dérivées directionnelles, ou des dérivées partielles, n'entraîne pas la différentiabilité ([[ch05-partielles-sans-differentiabilite]]).
* $C^1$ demande la continuité de $a\mapsto df_a$ pour la **norme d'opérateur** ; en dimension infinie c'est plus fort que la continuité de $a\mapsto df_a(h)$ pour chaque $h$ fixé.
* Différentiable sur $U$ n'entraîne pas $C^1$ (exemple $x^2\sin(1/x)$).
