---
id: ch05-theoreme-fondamental
type: theorem
chapter: 5
title: "Théorème fondamental du calcul différentiel : $f(x+y)=f(x)+\int_0^1 df_{x+ty}(y)\,dt$"
ref: Théorème V.4.7
page: 105
importance: 3
depends: [ch05-primitive-integrale, ch05-composition-differentielles, ch05-accroissements-finis-borne, ch05-derivee-variable-reelle, ch05-integrale-fonctions-reglees, ch05-differentielle-def]
tags: [integrale, theoreme-fondamental, accroissements, banach, classe-c1]
---
## Intuition

> 💡 Pour aller de $f(x)$ à $f(x+y)$, on marche sur le segment $t\mapsto x+ty$ ($t\in[0,1]$) et on **additionne les petites variations** : au temps $t$, un pas $dt$ fait varier $f$ d'environ $df_{x+ty}(y\,dt)=df_{x+ty}(y)\,dt$. La somme de ces variations infinitésimales, c'est l'intégrale.

C'est exactement la formule $\varphi(1)-\varphi(0)=\int_0^1\varphi'(t)\,dt$ appliquée à la fonction d'une variable réelle $\varphi(t)=f(x+ty)$, dont la dérivée est $\varphi'(t)=df_{x+ty}(y)$ par la règle de la chaîne ([[ch05-composition-differentielles]]). Contrairement à l'inégalité des accroissements finis ([[ch05-accroissements-finis]]), on obtient une **égalité**, au prix d'une intégrale.

Vocabulaire. $df_x\in\mathcal L(E;F)$ est la différentielle de $f$ en $x$ ([[ch05-differentielle-def]]) ; « de classe $C^1$ » signifie que $x\mapsto df_x$ est continue de $U$ dans $\mathcal L(E;F)$ muni de la norme d'opérateur. Un **espace de Banach** est un evn complet. L'intégrale $\int_a^b g(t)\,dt$ d'une fonction continue $g:[a,b]\to F$ à valeurs dans un Banach est celle des fonctions réglées ([[ch05-integrale-fonctions-reglees]]) : limite des intégrales de fonctions en escalier, avec $\big\|\int_a^bg\big\|_F\le(b-a)\sup_{[a,b]}\|g\|_F$.

## Énoncé

**Théorème (poly, Théorème V.4.7, p. 105).** Soient $E$ un espace vectoriel normé, $F$ un espace de Banach, et soit $f:U\to F$ une application définie sur un ouvert $U$ de $E$ et de classe $C^1$. Soient $x\in U$, $y\in E$, et supposons que pour tout $t\in[0;1]$, $x+ty\in U$. On a alors
$$
f(x+y)=f(x)+\int_0^1 df_{x+ty}(y)\,dt .
$$

## Hypothèses

### H1 — $f$ de classe $C^1$ sur $U$

**Rôle.** Elle garantit que l'intégrande $t\mapsto df_{x+ty}(y)$ est **continue** sur $[0,1]$ : c'est la composée de $t\mapsto x+ty$ (continue), de $df:U\to\mathcal L(E;F)$ (continue par hypothèse) et de l'évaluation $T\mapsto T(y)$, linéaire continue de $\mathcal L(E;F)$ dans $F$ (car $\|T(y)\|_F\le\|T\|\,\|y\|_E$). Une fonction continue est réglée, donc intégrable, et le théorème de dérivation de l'intégrale ([[ch05-primitive-integrale]]) s'applique.

**Si on la retire.** Avec $f$ seulement différentiable, l'intégrale peut ne pas exister. Exemple : $E=F=\R$, $U=\R$, $f(t)=t^2\sin(1/t^2)$ pour $t\neq0$ et $f(0)=0$, $x=0$, $y=1$. La fonction $f$ est dérivable partout : $f'(0)=\lim_{t\to0}t\sin(1/t^2)=0$ et, pour $t\ne0$,
$$
f'(t)=2t\sin\frac1{t^2}-\frac2t\cos\frac1{t^2}.
$$
En $t_k=(2k\pi)^{-1/2}$ on a $f'(t_k)=-2\sqrt{2k\pi}\to-\infty$ : $f'$ n'est pas bornée sur $[0,1]$, donc n'est pas réglée (une fonction réglée est bornée) et $\int_0^1f'(t)\,dt$ n'a pas de sens au sens du poly. (L'intégrale impropre $\lim_{\eps\to0}\int_\eps^1 f'=f(1)$ existe, mais $f'$ n'est même pas intégrable au sens de Lebesgue : par le changement de variable $u=1/t^2$, $\int_0^1\frac2t\big|\cos\frac1{t^2}\big|dt=\int_1^{+\infty}\frac{|\cos u|}{u}\,du=+\infty$.)

### H2 — $F$ est un espace de Banach

**Rôle.** C'est la complétude de $F$ qui permet de **définir** l'intégrale des fonctions réglées à valeurs dans $F$ (les intégrales des fonctions en escalier approchantes forment une suite de Cauchy, qui doit converger) ; c'est aussi l'hypothèse de [[ch05-primitive-integrale]].

**Si on la retire.** Hypothèse en partie de confort pour **cette** formule : si $F$ n'est pas complet, on plonge isométriquement $F$ dans son complété $\widehat F$ (un Banach) ; $f$ est encore $C^1$ à valeurs dans $\widehat F$, et le théorème appliqué dans $\widehat F$ montre que les sommes de Riemann de $t\mapsto df_{x+ty}(y)$ (qui sont dans $F$) convergent vers $f(x+y)-f(x)$, qui est **dans $F$**. L'intégrale existe donc a posteriori dans $F$ et la formule reste vraie. Ce qui disparaît, c'est la théorie générale : sans complétude, l'intégrale d'une fonction continue quelconque à valeurs dans $F$ peut ne pas exister dans $F$.

### H3 — le segment $\{x+ty,\ t\in[0;1]\}$ est contenu dans $U$

**Rôle.** L'intégrande $df_{x+ty}(y)$ n'est défini que si $x+ty\in U$ pour tout $t\in[0,1]$, et la fonction auxiliaire $g(t)=f(x+ty)$ doit être définie sur tout $[0,1]$.

**Si on la retire.** La formule n'a plus de sens. Exemple : $U=\R^2\setminus\{(0,0)\}$, $x=(-1,0)$, $y=(2,0)$ : le segment passe par l'origine, où $f$ n'est pas définie. Si l'on veut relier deux points d'un ouvert non convexe, il faut remplacer le segment par un chemin $\gamma$ de classe $C^1$ dans $U$ : $f(\gamma(1))-f(\gamma(0))=\int_0^1df_{\gamma(t)}(\gamma'(t))\,dt$ (même preuve, avec $g=f\circ\gamma$).

## Idée de la preuve

On pose $g(t)=f(x+ty)$, de dérivée $g'(t)=df_{x+ty}(y)$, et $h(t)=f(x)+\int_0^tdf_{x+sy}(y)\,ds$, de même dérivée par le théorème de dérivation d'une intégrale. Donc $g-h$ a une dérivée nulle, elle est constante, et $g(0)=h(0)$ donne $g(1)=h(1)$.

## Preuve

Posons $g(t)=f(x+ty)$ pour $t\in[0;1]$ ; $g$ est à valeurs dans $F$ et bien définie par H3. La fonction $\lambda:t\mapsto x+ty$ est affine continue de $\R$ dans $E$, de différentielle $d\lambda_t(\tau)=\tau y$. Par la règle de la chaîne ([[ch05-composition-differentielles]]), $g=f\circ\lambda$ est différentiable en tout $t\in\,]0;1[$, avec $dg_t(\tau)=df_{x+ty}(\tau y)=\tau\,df_{x+ty}(y)$, c'est-à-dire, en termes de dérivée d'une fonction d'une variable réelle ([[ch05-derivee-variable-reelle]], $g'(t)=dg_t(1)$) :
$$
g'(t)=df_{x+ty}(y)\qquad(t\in\,]0;1[).
$$
De plus $g$ est continue sur $[0;1]$ (composée de fonctions continues, $f$ étant différentiable donc continue).

L'application $\theta:t\mapsto df_{x+ty}(y)$ est continue de $[0;1]$ dans $F$ : composée de $\lambda$, de $df$ (continue car $f$ est $C^1$) et de l'évaluation en $y$, linéaire continue de $\mathcal L(E;F)$ dans $F$. Comme $F$ est un Banach, on peut définir
$$
h(t)=f(x)+\int_0^t df_{x+sy}(y)\,ds\qquad(t\in[0;1]),
$$
et d'après le théorème de dérivation d'une intégrale ([[ch05-primitive-integrale]]), $h$ est continue sur $[0;1]$, dérivable sur $]0;1[$ et $h'(t)=df_{x+ty}(y)$.

Ainsi $\psi=g-h$ est continue sur $[0;1]$, dérivable sur $]0;1[$ et $\psi'(t)=0$ pour tout $t\in\,]0;1[$. Pour tout $t\in\,]0;1]$, l'inégalité des accroissements finis à borne constante ([[ch05-accroissements-finis-borne]]) appliquée à $\psi$ sur $[0;t]$ avec $k=0$ donne $\|\psi(t)-\psi(0)\|_F\le0$ : $\psi$ est constante sur $[0;1]$. Comme $\psi(0)=g(0)-h(0)=f(x)-f(x)=0$, on a $g=h$ sur $[0;1]$, et en $t=1$ :
$$
f(x+y)=g(1)=h(1)=f(x)+\int_0^1df_{x+ty}(y)\,dt.\qquad\square
$$

## Preuve à trous

Posons $g(t)=f(x+ty)$ pour $t\in[0;1]$. Par la règle de la chaîne, pour $t\in\,]0;1[$, <trou indice="dériver la composée de f et de t ↦ x+ty">$g'(t)=df_{x+ty}(y)$</trou>, et $g$ est continue sur $[0;1]$.

L'intégrande $t\mapsto df_{x+ty}(y)$ est continue sur $[0;1]$ car <trou indice="quelle hypothèse sur f, et quelle application linéaire continue ?">$df$ est continue ($f$ est $C^1$) et l'évaluation $T\mapsto T(y)$ est linéaire continue de $\mathcal L(E;F)$ dans $F$</trou>. Comme $F$ est complet, on définit $h(t)=f(x)+\int_0^tdf_{x+sy}(y)\,ds$, et <trou indice="dérivée d'une intégrale fonction de sa borne supérieure">le théorème V.4.6 donne $h'(t)=df_{x+ty}(y)$ sur $]0;1[$, $h$ continue sur $[0;1]$</trou>.

Alors $\psi=g-h$ est continue sur $[0;1]$ et de dérivée nulle sur $]0;1[$, donc <trou indice="accroissements finis avec quelle constante ?">par le corollaire V.4.3 avec $k=0$ sur chaque $[0;t]$, $\psi$ est constante</trou>. Comme $\psi(0)=0$, $g(1)=h(1)$, c'est-à-dire $f(x+y)=f(x)+\int_0^1df_{x+ty}(y)\,dt$. $\square$

## Exemples

* **Carré de la norme dans un Hilbert.** $E=H$ (espace de Hilbert réel), $F=\R$, $f(x)=\|x\|^2$. On a $f(x+h)=f(x)+2\langle x,h\rangle+\|h\|^2$, donc $df_x(h)=2\langle x,h\rangle$ (le reste $\|h\|^2$ est $o(h)$), et $x\mapsto df_x$ est continue ($\|df_x-df_{x'}\|=2\|x-x'\|$). La formule donne
$$
\int_0^1 2\langle x+ty,y\rangle\,dt=2\langle x,y\rangle+\|y\|^2=\|x+y\|^2-\|x\|^2 .
$$
* **Carré matriciel.** $E=F=\mathrm M_n(\R)$ (norme d'opérateur), $f(A)=A^2$. Comme $(A+H)^2=A^2+AH+HA+H^2$ et $\|H^2\|\le\|H\|^2$, $df_A(H)=AH+HA$. La formule donne
$$
\int_0^1\big((A+tH)H+H(A+tH)\big)dt=AH+HA+\int_0^12t\,H^2\,dt=AH+HA+H^2=(A+H)^2-A^2 .
$$
* **Lemme d'Hadamard.** Si $f:\R^n\to\R$ est $C^1$ et $f(0)=0$, la formule avec $x=0$, $y=z$ et $df_{tz}(z)=\sum_i\frac{\partial f}{\partial x_i}(tz)z_i$ donne $f(z)=\sum_{i=1}^n z_i\,g_i(z)$ avec $g_i(z)=\int_0^1\frac{\partial f}{\partial x_i}(tz)\,dt$, et chaque $g_i$ est continue (continuité d'une intégrale à paramètre, l'intégrande étant uniformément continu sur les compacts). Par exemple $\sin(z_1+z_2)=(z_1+z_2)\int_0^1\cos(t(z_1+z_2))\,dt$.

## Pièges

* > ⚠️ Il n'y a **pas** d'« égalité des accroissements finis » pour une fonction à valeurs vectorielles : pour $f(t)=(\cos t,\sin t)$ de $\R$ dans $\R^2$, $f(2\pi)-f(0)=0$ alors que $f'(t)=(-\sin t,\cos t)$ ne s'annule jamais. Il n'existe donc aucun $\theta$ avec $f(2\pi)-f(0)=2\pi f'(\theta)$. L'égalité correcte est la formule intégrale (moyenne de $f'$ sur tout le segment), et l'outil de majoration est l'inégalité des accroissements finis ([[ch05-accroissements-finis]]).
* Ne pas oublier les trois hypothèses : $C^1$ (pas seulement différentiable), $F$ de Banach, segment **entier** dans $U$ (automatique si $U$ est convexe).
* L'intégrande est $df_{x+ty}(y)$ : la différentielle est prise au point **courant** $x+ty$ et appliquée au vecteur **fixe** $y$ (pas $ty$). En majorant, on retrouve $\|f(x+y)-f(x)\|_F\le\sup_{t\in[0,1]}\|df_{x+ty}\|\,\|y\|_E$.
* Cette formule est le point de départ de la formule de Taylor avec reste intégral ([[ch05-taylor-reste-integral]]), qui en est l'itération.
