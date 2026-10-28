---
id: ch09-espace-tangent-image-dx
type: proposition
chapter: 9
title: "$T_pS=dx_q(\mathbb R^m)$ : l'espace tangent est un sous-espace vectoriel de dimension $m$"
ref: Proposition IX.7.9
page: 161
importance: 3
depends: [ch09-vecteur-tangent-espace-tangent-def, ch09-remarques-applications-cr, ch09-ex-parametrages-cartes-cr, ch05-composition-differentielles, ch09-sous-variete-def]
tags: [espace-tangent, parametrage-local, immersion, differentielle, dimension]
---
## Intuition

> 💡 Un paramétrage local $x : U\to S$ est une « carte de géographe » : il envoie un morceau plat $U\subset\R^m$ sur un morceau de la surface $S$. Une fourmi qui se déplace sur la carte $U$ en ligne droite, $t\mapsto q+t\vec w$, se déplace sur $S$ le long de $t\mapsto x(q+t\vec w)$, avec la vitesse $dx_q(\vec w)$ en $p=x(q)$. La proposition dit que **toutes** les vitesses possibles sur $S$ en $p$ s'obtiennent ainsi : l'espace tangent est l'image de $\R^m$ par l'application linéaire $dx_q$.

Rappels : un **vecteur tangent** à $S$ en $p$ est une vitesse $\alpha'(0)$ d'une courbe $C^1$ tracée sur $S$ avec $\alpha(0)=p$ ([[ch09-vecteur-tangent-espace-tangent-def]]) ; un **paramétrage local** en $p$ est une application $x : U\to S$ ($U$ ouvert de $\R^m$) de classe $C^k$, homéomorphisme sur un voisinage $V\cap S$ de $p$ dans $S$, et **immersion** ($dx_q$ injective) ; son inverse $x^{-1}$ est une **carte** ([[ch09-sous-variete-def]]).

Conséquence majeure : l'image d'une application linéaire étant un sous-espace vectoriel, l'espace tangent en est un ; et comme $dx_q$ est injective, sa dimension est exactement $m$.

## Énoncé

**Proposition (poly, Proposition IX.7.9, p. 161).** Soit $S$ une sous-variété de dimension $m$ de $\R^N$. Soient $p\in S$ et $x : U\to S$ un paramétrage local en $p$. Posons $q=x^{-1}(p)$. Alors l'espace tangent à $S$ en $p$ s'identifie à l'image de $\R^m$ par l'application $dx_q$. En particulier c'est un sous-espace vectoriel de dimension $m$ de $\R^N$.

(« S'identifie à » signifie ici l'**égalité** d'ensembles : $\{\text{vecteurs tangents à } S \text{ en } p\}=dx_q(\R^m)$.)

## Hypothèses

### H1 — $S$ est une sous-variété de dimension $m$

**Rôle.** Elle fournit le paramétrage local $x$ et, via la carte $x^{-1}$, la possibilité de « relire » dans $U$ toute courbe tracée sur $S$.

**Si on la retire.** Pour le cône $C=\{x^2+y^2=z^2\}$ (pas une sous-variété), l'ensemble des vecteurs tangents en $0$ est le cône lui-même, qui n'est pas un sous-espace vectoriel (voir [[ch09-vecteur-tangent-espace-tangent-def]], H3). Aucune application linéaire ne peut avoir cette image.

### H2 — $dx_q$ est injective ($x$ immersion en $q$)

**Rôle.** C'est elle qui donne la **dimension $m$** (une application linéaire injective de $\R^m$ a une image de dimension $m$). Elle sert aussi, de façon cachée, à la régularité de la carte $x^{-1}$ (Exemple IX.7.6, qui repose sur la Proposition IX.6.1 [[ch09-changement-parametrage]], dont la preuve utilise le théorème d'inversion locale en $q$, donc l'injectivité de $dx_q$).

**Si on la retire.** La droite $S=\R\times\{0\}\subset\R^2$ est une sous-variété de dimension $1$, d'espace tangent $\R\times\{0\}$ en $0$. L'application $x(t)=(t^3,0)$ est $C^\infty$ et un homéomorphisme de $\R$ sur $S$ (d'inverse $(s,0)\mapsto s^{1/3}$), mais $dx_0=0$ : $dx_0(\R)=\{0\}\neq T_0S$. L'égalité est fausse. De même pour le cusp $x(t)=(t^2,t^3)$ : $dx_0(\R)=\{0\}$ est de dimension $0$ (et l'image n'est d'ailleurs pas une sous-variété).

### H3 — $x$ est un homéomorphisme de $U$ sur un voisinage $V\cap S$ de $p$ dans $S$

**Rôle.** Dans la preuve, il permet de supposer (quitte à réduire $I$) que la courbe $\alpha$ reste dans $x(U)$, puis de la « relever » en $\beta=x^{-1}\circ\alpha$, courbe **continue** (et même $C^1$) dans $U$.

**Si on la retire.** La conclusion reste vraie mais la preuve change : si $y : U'\to S$ est seulement une immersion $C^1$ d'un ouvert $U'$ de $\R^m$ (même dimension $m$ que $S$) avec $y(q')=p$, l'argument « réciproque » ci-dessous donne $dy_{q'}(\R^m)\subset T_pS$ ; les deux sont de dimension $m$ (par la proposition appliquée à un vrai paramétrage), donc ils sont égaux. Exemple : $y(t)=(\cos t,\sin t)$ sur $\R$ n'est pas injective, mais $dy_t(\R)=T_{y(t)}\mathbb S^1$. En revanche, si la dimension de $U'$ est $<m$, on n'obtient qu'un sous-espace strict : $t\mapsto(t,0)$ immerge $\R$ dans la sous-variété $\R^2$, d'image tangente $\R\times\{0\}\neq\R^2$.

## Idée de la preuve

$\subset$ : on relève la courbe $\alpha$ dans la carte, $\beta=x^{-1}\circ\alpha$ est $C^1$ et $\alpha=x\circ\beta$ donne $\alpha'(0)=dx_q(\beta'(0))$.
$\supset$ : pour $\vec w\in\R^m$, la courbe $t\mapsto x(q+t\vec w)$ est tracée sur $S$ et a pour vitesse $dx_q(\vec w)$.
Dimension : $dx_q$ injective.

## Preuve

**Inclusion $T\subset dx_q(\R^m)$**, où $T$ désigne l'ensemble des vecteurs tangents à $S$ en $p$. Soit $\vec v$ un vecteur tangent à $S$ en $p$ : il existe une courbe $\alpha : I\to\R^N$ de classe $C^1$, de trace contenue dans $S$, définie sur un intervalle ouvert $I$ contenant $0$, avec $\alpha(0)=p$ et $\alpha'(0)=\vec v$.

*Réduction de $I$.* L'ensemble $x(U)=V\cap S$ est un ouvert de $S$ contenant $p$, et $\alpha : I\to S$ est continue, donc $\alpha^{-1}(V\cap S)$ est un ouvert de $I$ contenant $0$ ; il contient un intervalle ouvert $I'\ni0$. Quitte à remplacer $I$ par $I'$, on peut supposer que la trace de $\alpha$ est dans $x(U)$.

*Relèvement.* La courbe $\beta=x^{-1}\circ\alpha : I\to U$ est alors de classe $C^1$ : $\alpha$ est une courbe $C^1$ tracée sur $S$ et la carte $x^{-1}$ est de classe $C^1$ au sens des applications entre sous-variétés (Exemple IX.7.6, [[ch09-ex-parametrages-cartes-cr]]), donc la composée $\beta$ est $C^1$ (Remarques IX.7.7, point 4, [[ch09-remarques-applications-cr]]). De plus $\beta(0)=x^{-1}(p)=q$.

*Dérivation.* On a $\alpha=x\circ\beta$ sur $I$, avec $\beta$ dérivable en $0$ et $x$ différentiable en $q=\beta(0)$. Par la règle de dérivation des fonctions composées ([[ch05-composition-differentielles]]),
$$
\vec v=\alpha'(0)=dx_q\big(\beta'(0)\big),
$$
ce qui montre que $\vec v\in dx_q(\R^m)$.

**Inclusion réciproque $dx_q(\R^m)\subset T$.** Soit $\vec v=dx_q(\vec w)$ pour un certain $\vec w\in\R^m$. Comme $U$ est ouvert et contient $q$, il existe $\eps>0$ tel que $q+t\vec w\in U$ pour $|t|<\eps$ (si $\vec w=0$, tout $\eps$ convient). Sur l'intervalle ouvert $I=\,]-\eps,\eps[$, on considère
$$
\beta : I\to U,\quad t\mapsto t\vec w+q,\qquad\text{et}\qquad \alpha=x\circ\beta : I\to\R^N.
$$
La courbe $\alpha$ est de classe $C^1$ (composée de $C^1$), sa trace est contenue dans $x(U)\subset S$, $\alpha(0)=x(q)=p$ et, par la règle de la chaîne, $\alpha'(0)=dx_q(\beta'(0))=dx_q(\vec w)=\vec v$. Donc $\vec v$ est un vecteur tangent à $S$ en $p$.

**Conclusion.** $T=dx_q(\R^m)$ est l'image de l'application linéaire $dx_q:\R^m\to\R^N$, donc un sous-espace vectoriel de $\R^N$. Comme $dx_q$ est injective (condition 3 de la définition d'un paramétrage local), le théorème du rang donne $\dim dx_q(\R^m)=m-\dim\ker dx_q=m$. $\square$

*Remarque.* Le paramétrage $x$ en $p$ étant arbitraire, on a obtenu au passage que $dx_q(\R^m)$ **ne dépend pas** du paramétrage choisi (c'est l'ensemble $T$, défini sans paramétrage).

## Preuve à trous

**$\subset$.** Soit $\vec v=\alpha'(0)$, avec $\alpha : I\to S$ de classe $C^1$, $\alpha(0)=p$. Comme <trou indice="continuité de $\alpha$ et nature de $x(U)$">$x(U)=V\cap S$ est un ouvert de $S$ contenant $p$ et $\alpha$ est continue, $\alpha^{-1}(x(U))$ contient un intervalle ouvert autour de $0$</trou>, on peut supposer la trace de $\alpha$ dans $x(U)$. On pose alors <trou indice="relever la courbe dans $U$">$\beta=x^{-1}\circ\alpha : I\to U$, qui est $C^1$ car la carte $x^{-1}$ est $C^1$ (Exemple IX.7.6) et la composée d'applications $C^1$ entre sous-variétés est $C^1$</trou>, avec $\beta(0)=q$. Puisque $\alpha=x\circ\beta$, la règle de la chaîne donne <trou>$\vec v=\alpha'(0)=dx_q(\beta'(0))\in dx_q(\R^m)$</trou>.

**$\supset$.** Si $\vec v=dx_q(\vec w)$, on considère <trou indice="une droite dans $U$">la courbe $\alpha(t)=x(q+t\vec w)$, définie pour $|t|$ petit car $U$ est ouvert, tracée sur $S$, avec $\alpha(0)=p$ et $\alpha'(0)=dx_q(\vec w)=\vec v$</trou>.

**Dimension.** L'espace tangent est l'image de l'application linéaire $dx_q$, donc un sous-espace vectoriel, et <trou indice="quelle propriété de $dx_q$ ?">$dx_q$ étant injective, son image est de dimension $m$ (théorème du rang)</trou>. $\square$

## Exemples

* **Sphère en coordonnées sphériques.** $x(\theta,\varphi)=(\cos\theta\cos\varphi,\ \sin\theta\cos\varphi,\ \sin\varphi)$ sur $U=\,]-\pi,\pi[\times]-\frac\pi2,\frac\pi2[$ est un paramétrage local de $\mathbb S^2$ en $p=x(0,0)=(1,0,0)$. Ses dérivées partielles
$$
\frac{\partial x}{\partial\theta}=(-\sin\theta\cos\varphi,\ \cos\theta\cos\varphi,\ 0),\qquad \frac{\partial x}{\partial\varphi}=(-\cos\theta\sin\varphi,\ -\sin\theta\sin\varphi,\ \cos\varphi)
$$
valent en $(0,0)$ : $(0,1,0)$ et $(0,0,1)$. Donc $T_pS=dx_{(0,0)}(\R^2)=\{0\}\times\R^2=p^\perp$, en accord avec le calcul direct par les courbes ([[ch09-vecteur-tangent-espace-tangent-def]]).
* **Paraboloïde.** $S=\{z=x^2+y^2\}$, paramétré globalement par $x(u,v)=(u,v,u^2+v^2)$. On a $dx_{(u,v)}(h_1,h_2)=(h_1,\ h_2,\ 2uh_1+2vh_2)$. En $p=(1,1,2)$ ($q=(1,1)$) : $T_pS$ est engendré par $(1,0,2)$ et $(0,1,2)$ ; c'est le plan d'équation $2h_1+2h_2-h_3=0$ (vecteur normal $(1,0,2)\wedge(0,1,2)=(-2,-2,1)$).
* **Un contre-exemple instructif.** Le cusp $t\mapsto(t^2,t^3)$ n'est pas un paramétrage local (sa différentielle est nulle en $0$) : $dx_0(\R)=\{0\}$. On ne peut pas en déduire un « espace tangent de dimension $0$ » : l'image n'est simplement pas une sous-variété en $0$.

## Pièges

* > ⚠️ La dimension $m$ vient de l'**injectivité** de $dx_q$ : avec une application qui n'est pas une immersion (comme $t\mapsto(t^3,0)$), $dx_q(\R^m)$ peut être strictement plus petit que l'espace tangent.
* $dx_q$ est la différentielle en $q=x^{-1}(p)\in U\subset\R^m$, **pas** en $p$ : $x$ est définie sur $U$, pas sur $S$.
* La preuve de $\subset$ utilise que $x^{-1}\circ\alpha$ est $C^1$ ; ce n'est pas évident car $x^{-1}$ n'est définie que sur $V\cap S$, qui n'est pas un ouvert de $\R^N$ (c'est le contenu de l'Exemple IX.7.6 et de la Proposition IX.6.1).
* L'égalité $T_pS=dx_q(\R^m)$ vaut pour **n'importe quel** paramétrage local en $p$ ; en pratique, on choisit le plus commode. Pour une sous-variété donnée par une équation ou un graphe, voir [[ch09-espace-tangent-graphe-equation]].
* La base naturelle de $T_pS$ est $\big(\frac{\partial x}{\partial u_1}(q),\dots,\frac{\partial x}{\partial u_m}(q)\big)$ ([[ch09-base-espace-tangent]]).
