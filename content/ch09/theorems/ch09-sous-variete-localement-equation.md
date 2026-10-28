---
id: ch09-sous-variete-localement-equation
type: proposition
chapter: 9
title: Toute sous-variété est localement définie par une équation régulière
ref: Proposition IX.4.6
page: 156
importance: 3
depends: [ch09-redressement-local, ch09-point-critique-valeur-reguliere-def, ch09-sous-variete-def]
tags: [sous-variete, equation-locale, valeur-reguliere, redressement, submersion]
---
## Intuition

> 💡 Une fois la sous-variété **redressée** ([[ch09-redressement-local]]) — c'est-à-dire envoyée par un difféomorphisme $\Phi$ sur un morceau du sous-espace plat $\R^m\times\{0\}$ — elle est décrite par les équations les plus simples qui soient : « les $N-m$ dernières coordonnées sont nulles ». En revenant par $\Phi$, on obtient $N-m$ équations $\Psi=0$ qui décrivent $S$ près de $p$, et elles sont non dégénérées parce que $\Phi$ l'est.

Rappels : $0$ est une **valeur régulière** de $\Psi$ si $d\Psi_x$ est surjective en tout point $x$ où $\Psi(x)=0$ ([[ch09-point-critique-valeur-reguliere-def]]). On décompose $\R^N=\R^m\times\R^{N-m}$ et l'on note $p_2:\R^m\times\R^{N-m}\to\R^{N-m}$, $(u,t)\mapsto t$, la projection sur le second facteur.

C'est la réciproque de [[ch09-caracterisation-equations-locales]] : elle permet d'appliquer à **toute** sous-variété, localement, les outils formulés pour $\{\Psi=0\}$ (espace tangent $\ker d\Psi_p$, multiplicateurs de Lagrange).

## Énoncé

**Proposition (poly, Proposition IX.4.6, p. 156).** Soit $S$ une sous-variété de dimension $m$ de classe $C^k$ de $\R^N$. Alors pour tout point $p$ de $S$, il existe un voisinage ouvert $V$ de $p$ dans $\R^N$ et une fonction $\Psi:V\to\R^{N-m}$ de classe $C^k$ tels que
$$
S\cap V=\{x\in V\mid\Psi(x)=0\},
$$
et $0$ est une valeur régulière de $\Psi$.

## Hypothèses

### H1 — $S$ est une sous-variété de dimension $m$ et de classe $C^k$

**Rôle.** Elle fournit, par [[ch09-redressement-local]], le difféomorphisme $\Phi$ qui aplatit $S$ ; $\Psi$ est construite à partir de $\Phi$.

**Si on la retire.** La croix $S=\{xy=0\}$ n'est pas une sous-variété ([[ch09-contre-ex-croix]]), et il n'existe **aucune** fonction $\Psi$ de classe $C^1$ près de $(0,0)$, de valeur $0$ régulière, avec $S\cap V=\Psi^{-1}(\{0\})$, quel que soit le nombre $N-m$ d'équations : pour $m=1$, en complétant par les équations évidentes ($\Psi=y$ sur $\{x>0\}$ ou $\{x<0\}$, $\Psi=x$ sur $\{y>0\}$ ou $\{y<0\}$), [[ch09-caracterisation-equations-locales]] ferait de $S$ une sous-variété ; pour $m=0$, $S\cap V$ serait une sous-variété de dimension $0$, donc discrète, alors qu'elle contient un segment ; pour $m=2$, $S\cap V=V$ serait ouvert, alors que $S$ est d'intérieur vide. L'équation globale $xy=0$ existe bien, mais $0$ y est valeur critique.

## Idée de la preuve

Redresser : $\Phi(V\cap S)=(\R^m\times\{0\})\cap W$. Poser $\Psi=p_2\circ\Phi$ : $\Psi(q)=0$ exactement quand $q\in S$, et $d\Psi_q=p_2\circ d\Phi_q$ est surjective (isomorphisme suivi d'une projection).

## Preuve

Soit $p\in S$. Par [[ch09-redressement-local]], il existe un voisinage ouvert $V$ de $p$ dans $\R^N$, un ouvert $W$ de $\R^N$ et un $C^k$-difféomorphisme $\Phi:V\to W$ tels que
$$
\Phi(V\cap S)=(\R^m\times\{0\})\cap W.
$$
Posons $\Psi=p_2\circ\Phi:V\to\R^{N-m}$ ; elle est de classe $C^k$ (composée de $\Phi$ et d'une application linéaire). Pour $q\in V$ :
$$
\Psi(q)=0\iff p_2(\Phi(q))=0\iff\Phi(q)\in(\R^m\times\{0\})\cap W\iff q\in S\cap V,
$$
la dernière équivalence venant de l'égalité $\Phi(V\cap S)=(\R^m\times\{0\})\cap W$ et de l'injectivité de $\Phi$ (si $\Phi(q)=\Phi(q')$ avec $q'\in V\cap S$, alors $q=q'$). Donc $S\cap V=\{q\in V\mid\Psi(q)=0\}$.

Enfin, pour tout $q\in V$, $d\Psi_q=p_2\circ d\Phi_q$ (règle de la chaîne, $p_2$ étant linéaire). Or $d\Phi_q$ est un isomorphisme de $\R^N$ ($\Phi$ est un difféomorphisme : $d(\Phi^{-1})_{\Phi(q)}\circ d\Phi_q=\id$) et $p_2$ est surjective ; donc $d\Psi_q$ est surjective. En particulier, $d\Psi_q$ est surjective en tout $q\in\Psi^{-1}(\{0\})$ : $0$ est une valeur régulière de $\Psi$. (On a même mieux : $\Psi$ est une submersion sur tout $V$.) $\square$

## Preuve à trous

Soit $p\in S$. Par le redressement, <trou indice="quelle caractérisation des sous-variétés ?">il existe un $C^k$-difféomorphisme $\Phi:V\to W$ avec $\Phi(V\cap S)=(\R^m\times\{0\})\cap W$</trou>. On pose <trou>$\Psi=p_2\circ\Phi$, où $p_2(u,t)=t$</trou>. Alors $\Psi(q)=0\iff\Phi(q)\in(\R^m\times\{0\})\cap W\iff q\in S\cap V$. Enfin <trou>$d\Psi_q=p_2\circ d\Phi_q$ est surjective, comme composée d'un isomorphisme et d'une projection surjective</trou>, donc $0$ est valeur régulière. $\square$

## Exemples

* **Graphe.** Si $S$ est le graphe de $g:U\to\R^{N-m}$ ($C^k$, $U$ ouvert de $\R^m$), le redressement $\Phi(u,v)=(u,v-g(u))$ donne $\Psi(u,v)=v-g(u)$ sur $V=U\times\R^{N-m}$, et $d\Psi_{(u,v)}(h,w)=w-dg_u(h)$ est surjective (prendre $h=0$). Ex. : la parabole $y=x^2$ est $\{\Psi=0\}$ avec $\Psi(x,y)=y-x^2$, $d\Psi=(-2x,1)\neq0$.
* **Cercle.** Avec le redressement polaire $\Phi(x,y)=(\theta,r-1)$ sur $V=\R^2\setminus\{(x,0),x\le0\}$, on obtient $\Psi(x,y)=\sqrt{x^2+y^2}-1$. Ce n'est pas l'équation « usuelle » $x^2+y^2-1=0$ : les équations locales ne sont **pas uniques** (on peut composer $\Psi$ par tout difféomorphisme local de $\R^{N-m}$ fixant $0$, ou la multiplier par une fonction qui ne s'annule pas).
* **Spirale** $s\mapsto(e^s\cos s,e^s\sin s)$ (non fermée, [[ch09-remarque-fermeture]]) : près de chaque point, $\Psi=\ln\sqrt{x^2+y^2}-\theta$ avec $\theta$ une détermination locale de l'argument. Il n'existe **pas** de $\Psi$ continue sur $\R^2$ entier avec $S=\Psi^{-1}(\{0\})$, puisque ce serait un fermé de $\R^2$ : le résultat est **local** par nature.

## Pièges

* > ⚠️ Le résultat est **local** : une sous-variété n'est pas toujours de la forme $\Psi^{-1}(\{0\})$ pour une seule $\Psi$ définie sur un ouvert fixe (par exemple sur $\R^N$, où $\Psi^{-1}(\{0\})$ serait fermé, ce qui exclut la spirale).
* Le nombre de fonctions coordonnées de $\Psi$ est la **codimension** $N-m$.
* Ce résultat combiné à [[ch09-caracterisation-equations-locales]] donne la définition équivalente « localement, zéros d'une submersion » (poly, Remarque IX.4.7, p. 156) ; c'est elle qui sert pour l'espace tangent $T_pS=\ker d\Psi_p$ ([[ch09-espace-tangent-graphe-equation]]) et pour les multiplicateurs de Lagrange ([[ch09-multiplicateurs-lagrange]]).
