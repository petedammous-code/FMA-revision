---
id: ch01-integrale-chemin-parametre
type: corollary
chapter: 1
title: "$f(z)=\int_\gamma F(z,u)\,du$ est holomorphe si $F$ est continue et holomorphe en $z$"
ref: Corollaire I.9.4
page: 26
importance: 2
depends: [ch01-holomorphie-sous-integrale, ch01-def-integrale-chemin, ch01-def-chemin-lacet, ch01-chemin-c1-par-morceaux-derivee-bornee]
tags: [integrale-parametre, chemin, integrale-curviligne, compacite]
---
## Intuition

> 💡 C'est le Théorème I.9.1 ([[ch01-holomorphie-sous-integrale]]) dans le cas le plus confortable : on intègre le long d'un **chemin**, c'est-à-dire sur un intervalle compact $[a,b]$, une fonction **continue**. Sur un compact, une fonction continue est bornée : la domination est gratuite, par une constante.

Rappels. Un **chemin** de $U$ est une application $\gamma:[a,b]\to U$ continue et $C^1$ par morceaux ([[ch01-def-chemin-lacet]]) ; sa dérivée $\gamma'$ est bornée sur $[a,b]$ ([[ch01-chemin-c1-par-morceaux-derivee-bornee]]). Pour $\varphi$ continue sur l'image $\gamma([a,b])$, $\int_\gamma\varphi(u)\,du:=\int_a^b\varphi(\gamma(s))\gamma'(s)\,ds$ ([[ch01-def-integrale-chemin]]).

Usage principal : les **intégrales de Cauchy** $z\mapsto\int_\gamma\frac{\varphi(u)}{u-z}\,du$, et en particulier l'indice d'un lacet ([[ch02-indice-def]]), sont holomorphes hors de l'image du chemin.

## Énoncé

**Corollaire (poly, Corollaire I.9.4, p. 26).** Soient $\Omega$ et $U$ deux ouverts de $\C$ et soit $(z,u)\mapsto F(z,u)$ une fonction continue sur $\Omega\times U$, holomorphe en $z$ pour tout $u\in U$. Alors pour tout chemin $\gamma$ dans $U$, la formule
$$
f(z)=\int_\gamma F(z,u)\,du
$$
définit une fonction holomorphe sur $\Omega$.

*Complément (conséquence de la preuve et du Théorème I.9.1).* Pour tout $k\in\N$, $f^{(k)}(z)=\int_a^b\frac{\partial^kF}{\partial z^k}(z,\gamma(s))\,\gamma'(s)\,ds$, que l'on écrit aussi $\int_\gamma\frac{\partial^kF}{\partial z^k}(z,u)\,du$.

## Hypothèses

### H1 — $F$ continue sur $\Omega\times U$ (continuité **conjointe**)

**Rôle.** Elle donne un sens à $\int_\gamma F(z,u)\,du$ (intégrale d'une fonction continue en $u$) et, surtout, la **bornitude** de $F$ sur le compact $\bar D(z_0,r_0)\times\gamma([a,b])$, qui fournit la dominante constante. Elle donne aussi la mesurabilité de $(z,s)\mapsto F(z,\gamma(s))\gamma'(s)$.

**Si on la retire.** Sans continuité en $u$, l'intégrale de la Définition I.5.4 n'est même pas définie. Avec seulement la continuité séparée en chaque variable, l'argument de compacité tombe (une fonction séparément continue n'est pas forcément localement bornée) ; on doit alors vérifier à la main une domination locale et appliquer directement le Théorème I.9.1. (Nous ne donnons pas de contre-exemple explicite à la conclusion sous continuité séparée : l'hypothèse est surtout là pour rendre la domination automatique.)

### H2 — $z\mapsto F(z,u)$ holomorphe pour tout $u\in U$

**Rôle.** C'est l'hypothèse (i) du Théorème I.9.1 pour $G(z,s)=F(z,\gamma(s))\gamma'(s)$.

**Si on la retire.** $\Omega=U=\C$, $F(z,u)=\bar z$, $\gamma=[0,1]$ (segment $s\mapsto s$) : $F$ est continue, mais $f(z)=\int_0^1\bar z\,ds=\bar z$ n'est holomorphe nulle part.

### H3 — $\gamma$ est un chemin (intervalle de paramètres **compact**, $C^1$ par morceaux) **dans $U$**

**Rôle.** L'image $\gamma([a,b])$ est compacte (image continue d'un compact) et incluse dans $U$, donc $F(z,\gamma(s))$ a un sens et est bornée ; $\gamma'$ est bornée (Remarque I.5.2). Le produit des deux bornes donne la dominante, intégrable car $[a,b]$ est de longueur finie.

**Si on la retire.** Remplaçons $\gamma$ par la demi-droite $s\mapsto s$, $s\in[0,+\infty[$ (non compacte), avec $\Omega=U=\C$ et $F(z,u)=e^{-zu}$, continue et entière en $z$. Alors $\int_0^{+\infty}e^{-zs}\,ds$ diverge dès que $\Re(z)\le0$ (le module de l'intégrande vaut $e^{-s\Re z}\ge1$) : $f$ n'est pas définie sur $\Omega$. Sur un chemin non compact, il faut une hypothèse de décroissance (cf. Exercice I.9.5 du poly).

## Idée de la preuve

On écrit $f(z)=\int_a^bF(z,\gamma(s))\gamma'(s)\,ds$ et on applique le Théorème I.9.1 avec $X=[a,b]$. La domination locale vient de la compacité : $|F|\le M$ sur $\bar D(z_0,r_0)\times\gamma([a,b])$, $|\gamma'|\le M'$, d'où la dominante constante $MM'$.

## Preuve

Écrivons $\gamma:[a,b]\to U$, de sorte que, par définition de l'intégrale le long d'un chemin ([[ch01-def-integrale-chemin]]),
$$
f(z)=\int_a^bF(z,\gamma(s))\,\gamma'(s)\,ds .
$$
On est ramené au Théorème I.9.1 ([[ch01-holomorphie-sous-integrale]]) avec $X=[a,b]$ et $G(z,s):=F(z,\gamma(s))\gamma'(s)$ (définie pour tout $s$ hors du nombre fini de points où $\gamma'$ n'est pas définie, ensemble négligeable).

*(i) Mesurabilité et holomorphie.* Soit $a=a_0<a_1<\cdots<a_p=b$ une subdivision telle que $\gamma$ soit $C^1$ sur chaque $[a_j,a_{j+1}]$. Alors $G$ est continue sur chaque $\Omega\times\,]a_j,a_{j+1}[$, donc mesurable sur $\Omega\times[a,b]$ (les points $a_j$ forment un ensemble négligeable) ; pour $s$ fixé, $z\mapsto G(z,s)$ est le produit de la fonction holomorphe $z\mapsto F(z,\gamma(s))$ par la constante $\gamma'(s)$, donc est holomorphe sur $\Omega$.

*(ii) Domination locale.* Fixons $z_0\in\Omega$ et $r_0>0$ tel que $\bar D(z_0,r_0)\subset\Omega$. Le produit $\bar D(z_0,r_0)\times\gamma([a,b])$ est compact (produit de deux compacts) et inclus dans $\Omega\times U$ ; $F$ y est continue, donc majorée en module par un $M>0$. Comme $\gamma'$ est bornée par un $M'>0$ ([[ch01-chemin-c1-par-morceaux-derivee-bornee]]), on a, pour tout $z\in D(z_0,r_0)$ et tout $s\in[a,b]$,
$$
|G(z,s)|=|F(z,\gamma(s))|\,|\gamma'(s)|\le MM' ,
$$
et la fonction constante $g_{z_0}=MM'$ est intégrable sur $[a,b]$ (de mesure $b-a$ finie).

Les hypothèses du Théorème I.9.1 sont satisfaites : $f$ est holomorphe sur $\Omega$, et $f^{(k)}(z)=\int_a^b\frac{\partial^kF}{\partial z^k}(z,\gamma(s))\gamma'(s)\,ds$. $\square$

## Preuve à trous

On écrit $f(z)=$ <trou indice="définition de l'intégrale le long d'un chemin">$\int_a^bF(z,\gamma(s))\gamma'(s)\,ds$</trou>, ce qui ramène au Théorème I.9.1 avec $X=[a,b]$. L'holomorphie en $z$ à $s$ fixé est claire. Pour la domination, on fixe $z_0$ et $r_0$ avec $\bar D(z_0,r_0)\subset\Omega$ ; <trou indice="quel ensemble est compact ?">$F$ est continue sur le compact $\bar D(z_0,r_0)\times\gamma([a,b])$, donc bornée par un $M$</trou>, et <trou>$|\gamma'|\le M'$ sur $[a,b]$ (Remarque I.5.2)</trou>. La constante $MM'$, intégrable sur l'intervalle borné $[a,b]$, domine $|F(z,\gamma(s))\gamma'(s)|$ pour tout $z\in D(z_0,r_0)$ : le Théorème I.9.1 s'applique. $\square$

## Exemples

* **Une intégrale sur un segment.** $\Omega=U=\C$, $F(z,u)=e^{zu}$, $\gamma=[0,1]$. Alors $f(z)=\int_0^1e^{zs}\,ds$ est entière ; on calcule $f(z)=\frac{e^z-1}z$ pour $z\neq0$ et $f(0)=1$. Le corollaire montre sans calcul que la singularité en $0$ est « effacée », et le complément donne $f'(0)=\int_0^1s\,ds=\frac12$ ; contrôle : $\frac{e^z-1}z=1+\frac z2+\frac{z^2}6+\cdots$ ✓.
* **Intégrale de Cauchy, indice.** Soit $\gamma$ un chemin de $\C$, $\Gamma^*=\gamma([a,b])$ son image (compacte) et $\varphi$ continue sur $\C$. Pour $z_0\notin\Gamma^*$, posons $\delta=\frac12\dist(z_0,\Gamma^*)>0$, $\Omega=D(z_0,\delta)$, $U=\{u:|u-z_0|>\delta\}$. Alors $F(z,u)=\frac{\varphi(u)}{u-z}$ est continue sur $\Omega\times U$ (le dénominateur ne s'annule pas) et holomorphe en $z$ ; $\gamma$ est un chemin dans $U$. Donc $z\mapsto\int_\gamma\frac{\varphi(u)}{u-z}\,du$ est holomorphe près de chaque point de $\C\setminus\Gamma^*$, c'est-à-dire sur $\C\setminus\Gamma^*$, de dérivée $\int_\gamma\frac{\varphi(u)}{(u-z)^2}\,du$. Avec $\varphi=1$ et $\gamma$ un lacet, c'est l'indice $\frac1{2i\pi}\int_\gamma\frac{du}{u-z}$ ([[ch02-indice-def]]).
* **Vérification sur le cercle.** Avec $\gamma=C(0,1)$ et $\varphi(u)=e^u$, pour $|z|<1$ la formule de Cauchy donne $\int_{C(0,1)}\frac{e^u}{u-z}\,du=2i\pi e^z$, bien holomorphe, et la dérivée sous $\int$ donne $\int_{C(0,1)}\frac{e^u}{(u-z)^2}du=2i\pi e^z$, cohérent avec (I.7.1) pour $n=1$.

## Pièges

* > ⚠️ Il faut que l'**image** de $\gamma$ soit dans $U$ et que $F$ soit continue sur $\Omega\times U$ : pour $\frac{\varphi(u)}{u-z}$, cela impose de travailler avec $z$ hors de l'image de $\gamma$ ; en $z\in\Gamma^*$ l'intégrale n'est en général pas définie.
* Le résultat donne l'holomorphie sur $\Omega$, pas sur un ouvert plus grand : l'intégrale de Cauchy $\int_\gamma\frac{\varphi(u)}{u-z}du$ peut avoir des comportements différents sur les différentes composantes connexes de $\C\setminus\Gamma^*$ (penser à l'indice, qui vaut $1$ dedans et $0$ dehors pour un cercle).
* Ne pas oublier le facteur $\gamma'(s)$ quand on écrit l'intégrale paramétrée et qu'on la domine.
