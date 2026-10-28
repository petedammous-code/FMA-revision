---
id: ch08-noether
type: theorem
chapter: 8
title: "Théorème de Noether : $Q(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))\cdot X(\gamma(t))$ est conservée"
ref: "Question 12 et Remarque, p. 145 (non numérotées, section VIII) — Théorème de Noether"
page: 145
importance: 3
depends: [ch08-invariance-infinitesimale, ch08-euler-lagrange, ch08-groupe-un-parametre-invariance, ch05-composition-differentielles, ch05-formule-leibniz]
tags: [noether, quantite-conservee, symetrie, euler-lagrange, moment-cinetique, impulsion]
---
## Intuition

> 💡 **À toute symétrie continue correspond une quantité conservée.** Si le Lagrangien ne change pas quand on translate les positions dans la direction $e$, l'impulsion $\langle\gamma',e\rangle$ est conservée ; s'il ne change pas par rotation autour de l'axe $e$, le moment cinétique $\langle\gamma\wedge\gamma',e\rangle$ est conservé. Le théorème de Noether donne une formule universelle pour cette quantité : on « mesure » la symétrie $X(\gamma(t))$ avec l'**impulsion généralisée** $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$.

Le mécanisme tient en une ligne : $Q=p\cdot X(\gamma)$, et en dérivant, $Q'=p'\cdot X(\gamma)+p\cdot dX_\gamma(\gamma')$. L'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]) remplace $p'$ par $\frac{\partial L}{\partial q}$, et l'invariance infinitésimale ([[ch08-invariance-infinitesimale]]) dit exactement que $\frac{\partial L}{\partial q}\cdot X+\frac{\partial L}{\partial v}\cdot dX(v)=0$.

Rappels : $(F_s)_{s\in\R}$ est le groupe à un paramètre de difféomorphismes engendré par le champ $X$ ($\frac{\partial F}{\partial s}(s,x)=X(F(s,x))$, $F(0,x)=x$), et « $L$ invariant » signifie $L(u,F_s(q),d(F_s)_q(v))=L(u,q,v)$ ([[ch08-groupe-un-parametre-invariance]]).

## Énoncé

**Théorème (poly, Question 12 et Remarque, p. 145 — théorème de Noether).** Soit $L$ un Lagrangien de classe $C^1$ sur $I\times\mathcal U\times V$, où $\mathcal U$ est un ouvert de $V$. Soit $X$ un champ de vecteurs de classe $C^\infty$ sur $\mathcal U$, ne dépendant pas du temps, dont le flot $(s,x)\mapsto F(s,x)=F_s(x)$ est défini sur $\R\times\mathcal U$, et supposons $L$ invariant sous l'action du groupe à un paramètre de difféomorphismes $(F_s)_{s\in\R}$ :
$$
\forall s\in\R,\ \forall(u,q,v)\in I\times\mathcal U\times V,\qquad L\big(u,F_s(q),d(F_s)_q(v)\big)=L(u,q,v).
$$
Soit $\gamma\in E$ une courbe à valeurs dans $\mathcal U$ vérifiant l'équation d'Euler-Lagrange. Alors la fonction
$$
t\mapsto Q(t)=\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\cdot\Big[\frac{\partial F}{\partial s}\big(s,\gamma(t)\big)\Big]_{|s=0}=\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\cdot X(\gamma(t))
$$
est constante sur $[0;1]$.

*Remarque du poly.* « Si le Lagrangien est invariant sous l'action d'un groupe à un paramètre de difféomorphismes, on peut associer une quantité conservée. » C'est par exemple le fondement de la physique des particules.

## Hypothèses

### H1 — $L$ de classe $C^1$

**Rôle.** Donne un sens à (E.L) et à $\frac{\partial L}{\partial v}$, et permet la forme infinitésimale de l'invariance ([[ch08-invariance-infinitesimale]]).

**Si on la retire.** Les objets de l'énoncé n'existent plus : $Q$ fait intervenir $\frac{\partial L}{\partial v}$. Hypothèse de cadre.

### H2 — $L$ est invariant par $(F_s)$, positions **et** vitesses transportées

**Rôle.** Elle fournit l'identité $\frac{\partial L}{\partial q}\cdot X(q)+\frac{\partial L}{\partial v}\cdot dX_q(v)=0$, qui annule $Q'$.

**Si on la retire.** *Potentiel non symétrique.* $V=\R^2$, $L=\tfrac12\norm v^2-U(q)$ avec $U(x,y)=x^2+2y^2$, rotations $X(x,y)=(-y,x)$. (E.L) est l'équation de Newton $x''=-2x$, $y''=-4y$ ([[ch08-equation-newton]]) et $Q=\langle\gamma',X(\gamma)\rangle=xy'-yx'$. Alors $Q'=xy''-yx''=-4xy+2xy=-2xy$. Pour la solution $x(t)=\cos(\sqrt2\,t)$, $y(t)=\sin(2t)$, on a $Q'(t)=-2\cos(\sqrt2\,t)\sin(2t)<0$ sur $]0,\tfrac\pi4]$ : $Q$ n'est pas constante.
*Invariance « naïve » (vitesse non transportée).* $L(u,q,v)=v_1$ dans $\R^2$ vérifie $L(u,R_sq,v)=L(u,q,v)$ mais pas $L(u,R_sq,R_sv)=L(u,q,v)$ ; toute courbe vérifie (E.L) ($\frac{\partial L}{\partial v}=e_1$, $\frac{\partial L}{\partial q}=0$) et $Q=\langle e_1,X(\gamma)\rangle=-\gamma_2$ n'est pas constante pour $\gamma(t)=(0,t)$.

### H3 — $\gamma$ vérifie l'équation d'Euler-Lagrange

**Rôle.** Elle assure que $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ est dérivable et que $p'=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$.

**Si on la retire.** La conservation est une propriété des **mouvements**, pas de toutes les courbes : pour $L=\tfrac12\norm v^2$ (invariant par les translations $X\equiv e$) et $\gamma(t)=t^2e$, on a $Q(t)=\langle\gamma'(t),e\rangle=2t$.

### H4 — $\gamma$ à valeurs dans $\mathcal U$

**Rôle.** $X$, $F$ et $L$ ne sont définis que sur $\mathcal U$ (resp. $I\times\mathcal U\times V$) : il faut évaluer en $(t,\gamma(t),\gamma'(t))\in I\times\mathcal U\times V$. Hypothèse de cadre (pour Kepler, $\gamma$ ne doit pas passer par $0$).

### H5 — Flot global et $X$ de classe $C^\infty$

**Rôle.** Ils servent uniquement à établir [[ch08-invariance-infinitesimale]] (via le lemme de Schwarz pour $F$) et à dériver $X\circ\gamma$.

**Si on la retire.** Hypothèses de confort : la preuve n'utilise l'invariance que pour $s$ proche de $0$ (un flot local suffit), et $X$ de classe $C^2$ suffit.

## Idée de la preuve

$Q(t)=p(t)\cdot X(\gamma(t))$ avec $p=\frac{\partial L}{\partial v}(t,\gamma,\gamma')$. Par Leibniz, $Q'=p'\cdot X(\gamma)+p\cdot dX_\gamma(\gamma')$ ; par (E.L), $p'=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ ; donc $Q'$ est le membre de gauche de l'identité infinitésimale en $(t,\gamma(t),\gamma'(t))$, qui est nul.

## Preuve

Posons, pour $t\in[0;1]$,
$$
p(t)=\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\in\mathcal L(V;\R),\qquad A(t)=\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big)\in\mathcal L(V;\R).
$$

*Étape 1 : réécriture de $Q$.* Par définition du flot, $\frac{\partial F}{\partial s}(s,x)=X(F(s,x))$ et $F(0,x)=x$, donc $\big[\frac{\partial F}{\partial s}(s,\gamma(t))\big]_{|s=0}=X(\gamma(t))$, et $Q(t)=p(t)\cdot X(\gamma(t))$.

*Étape 2 : dérivabilité.* Comme $\gamma$ vérifie l'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]), $p$ est dérivable sur $[0;1]$ et $p'(t)=A(t)$. Comme $X$ est de classe $C^\infty$ (en particulier $C^1$) sur $\mathcal U$ et $\gamma$ de classe $C^1$ à valeurs dans $\mathcal U$, la composée $X\circ\gamma$ est dérivable, de dérivée $(X\circ\gamma)'(t)=dX_{\gamma(t)}(\gamma'(t))$ ([[ch05-composition-differentielles]]). L'application d'évaluation $\mathcal L(V;\R)\times V\to\R$, $(\lambda,w)\mapsto\lambda(w)$, est bilinéaire continue ; par la formule de Leibniz ([[ch05-formule-leibniz]]), $Q$ est dérivable et
$$
Q'(t)=p'(t)\cdot X(\gamma(t))+p(t)\cdot dX_{\gamma(t)}(\gamma'(t))=\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big)\cdot X(\gamma(t))+\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\cdot dX_{\gamma(t)}(\gamma'(t)).
$$

*Étape 3 : invariance infinitésimale.* Le point $(u,q,v)=(t,\gamma(t),\gamma'(t))$ appartient à $I\times\mathcal U\times V$. La forme infinitésimale de l'invariance ([[ch08-invariance-infinitesimale]]) en ce point donne exactement
$$
\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big)\cdot X(\gamma(t))+\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\cdot dX_{\gamma(t)}(\gamma'(t))=0 .
$$
Donc $Q'(t)=0$ pour tout $t\in[0;1]$. Une fonction réelle dérivable de dérivée nulle sur l'intervalle $[0;1]$ est constante (accroissements finis) : $Q$ est constante. $\square$

## Preuve à trous

Posons $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$. D'abord, <trou indice="que vaut la dérivée du flot en s = 0 ?">$\big[\frac{\partial F}{\partial s}(s,\gamma(t))\big]_{|s=0}=X(F(0,\gamma(t)))=X(\gamma(t))$</trou>, donc $Q(t)=p(t)\cdot X(\gamma(t))$.
Par <trou indice="quelle hypothèse sur gamma rend p dérivable ?">l'équation d'Euler-Lagrange, $p$ est dérivable et $p'(t)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$</trou>, et $X\circ\gamma$ est dérivable de dérivée $dX_{\gamma(t)}(\gamma'(t))$. Par la formule de Leibniz,
$$
Q'(t)=\frac{\partial L}{\partial q}\big(t,\gamma,\gamma'\big)\cdot X(\gamma(t))+\frac{\partial L}{\partial v}\big(t,\gamma,\gamma'\big)\cdot dX_{\gamma(t)}(\gamma'(t)).
$$
Ce membre de droite est nul d'après <trou indice="question 11, évaluée en quel point ?">la forme infinitésimale de l'invariance, $\frac{\partial L}{\partial q}(u,q,v)\cdot X(q)+\frac{\partial L}{\partial v}(u,q,v)\cdot dX_q(v)=0$, appliquée en $(u,q,v)=(t,\gamma(t),\gamma'(t))$</trou>. Donc $Q'\equiv0$ sur $[0;1]$ et $Q$ est constante. $\square$

## Exemples

* **Translations $\Rightarrow$ conservation de l'impulsion.** $L=\tfrac12\norm v^2-U(q)$ avec $U(q+se)=U(q)$ pour tous $s,q$ ; $X\equiv e$. Alors $\frac{\partial L}{\partial v}\simeq v$ et $Q(t)=\langle\gamma'(t),e\rangle$ est constante. Exemple : $V=\R^3$, $U(q)=g\langle q,e_3\rangle$ (pesanteur) : les composantes horizontales $\langle\gamma',e_1\rangle$ et $\langle\gamma',e_2\rangle$ de la vitesse sont conservées. Vérification par Newton : $\gamma''=-\nabla U=-ge_3$, donc $\langle\gamma'',e_1\rangle=\langle\gamma'',e_2\rangle=0$.
* **Rotations $\Rightarrow$ conservation du moment cinétique** ([[ch08-moment-cinetique]]). $V=\R^3$, $\mathcal U=\R^3\setminus\{0\}$, $L=\tfrac12\norm v^2+\frac1{\norm q}$, $X(q)=e\wedge q$ ($e$ unitaire), dont le flot est formé des rotations d'axe $e$, qui laissent $L$ invariant. Alors $Q(t)=\langle\gamma'(t),e\wedge\gamma(t)\rangle=\det\big(e,\gamma(t),\gamma'(t)\big)=\langle e,\gamma(t)\wedge\gamma'(t)\rangle$ est constante ; avec $e=e_1,e_2,e_3$, le vecteur $\gamma\wedge\gamma'$ est conservé. Vérification directe : $(\gamma\wedge\gamma')'=\gamma'\wedge\gamma'+\gamma\wedge\gamma''=\gamma\wedge\big(-\frac{\gamma}{\norm\gamma^3}\big)=0$.
* **Dilatations.** $V=\R$, $\mathcal U=]0,+\infty[$, $L(u,q,v)=\frac{v^2}{q^2}$, invariant par $F_s(q)=e^sq$ ($X(q)=q$). Noether donne $Q(t)=\frac{2\gamma'(t)}{\gamma(t)^2}\cdot\gamma(t)=\frac{2\gamma'(t)}{\gamma(t)}$ constante, donc $\gamma(t)=Ce^{kt}$. Vérification avec (E.L) : $\frac{\partial L}{\partial v}=\frac{2v}{q^2}$, $\frac{\partial L}{\partial q}=-\frac{2v^2}{q^3}$, et $\frac{d}{dt}\frac{2\gamma'}{\gamma^2}=\frac{2\gamma''}{\gamma^2}-\frac{4\gamma'^2}{\gamma^3}=-\frac{2\gamma'^2}{\gamma^3}$ équivaut à $\gamma\gamma''=\gamma'^2$, i.e. $\big(\frac{\gamma'}{\gamma}\big)'=\frac{\gamma\gamma''-\gamma'^2}{\gamma^2}=0$ : c'est bien la conservation de $Q$.

## Pièges

* > ⚠️ La quantité conservée est $\frac{\partial L}{\partial v}\cdot X(\gamma)$ (impulsion généralisée **appliquée au champ** $X$), et non $\frac{\partial L}{\partial q}\cdot X$, ni $L$, ni $\langle\gamma,X(\gamma)\rangle$.
* > ⚠️ L'invariance doit transporter la vitesse par $d(F_s)_q$ (contre-exemple $L=v_1$ en H2) ; vérifier $L(u,F_s(q),v)=L(u,q,v)$ ne suffit pas.
* La conservation de l'**énergie** ne relève pas de ce théorème : elle vient de l'invariance par translation du **temps** ($L$ indépendant de $u$), que le flot $F_s$ (qui agit sur $q$) ne décrit pas ; voir [[ch08-energie-conservee]].
* $Q$ est conservée le long de **chaque** solution de (E.L), avec une valeur qui dépend de la solution ; ce n'est pas une constante universelle.
* Ne pas oublier le terme $p\cdot dX_\gamma(\gamma')$ en dérivant $Q$ : $X$ est évalué en $\gamma(t)$, qui dépend de $t$.
