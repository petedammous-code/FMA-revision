---
id: ch05-primitive-integrale
type: theorem
chapter: 5
title: Dérivée d'une intégrale à paramètre borne (primitive)
ref: Théorème V.4.6
page: 105
importance: 2
depends: [ch05-integrale-fonctions-reglees, ch05-derivee-variable-reelle, ch05-differentielle-def]
tags: [integrale, primitive, banach, derivee, c1]
---
## Intuition

> 💡 $G(t)=\int_{t_0}^tg(u)\,du$ est la « quantité accumulée » de $g$ depuis l'instant $t_0$. Quand on avance de $t$ à $t+h$, on ajoute $\int_t^{t+h}g$, qui vaut à peu près $h\cdot g(t)$ si $g$ ne bouge presque pas sur ce petit intervalle, c'est-à-dire si $g$ est **continue**. Donc $G'(t)=g(t)$ : intégrer puis dériver redonne la fonction de départ.

C'est le théorème fondamental de l'analyse, ici pour $g$ à valeurs dans un **espace de Banach** $F$ (vecteurs, matrices, fonctions). L'intégrale est celle des fonctions réglées ([[ch05-integrale-fonctions-reglees]]), qui contient les fonctions continues et demande $F$ complet. Pour une fonction $G$ d'une variable réelle, $G'(t)=dG_t(1)\in F$ ([[ch05-derivee-variable-reelle]]).

## Énoncé

**Théorème (poly, Théorème V.4.6, p. 105).** Soit $g:[a;b]\to F$ une application continue de l'intervalle $[a;b]$ à valeurs dans un espace de Banach $F$. Soit $t_0\in[a;b]$. Posons
$$
G(t)=\int_{t_0}^tg(u)\,du.
$$
Alors $G:[a;b]\to F$ est continue sur $[a;b]$ et de classe $C^1$ sur $]a;b[$, et pour tout $t\in\,]a;b[$, $G'(t)=g(t)$.

## Hypothèses

### H1 — $g$ continue sur $[a;b]$

**Rôle.** Elle sert deux fois : (i) $g$ est réglée, donc intégrable sur tout sous-segment, et bornée ; (ii) surtout, la **continuité de $g$ en $t$** donne $\sup_{u\in[t;t+h]}\|g(u)-g(t)\|\to0$, ce qui fait du reste un $o(h)$.

**Si on la retire.** Sur $[-1;1]$, avec $t_0=0$, soit $g=\mathbf 1_{[0;1]}$ (en escalier, donc réglée, mais discontinue en $0$). Alors $G(t)=0$ pour $t\le0$ et $G(t)=t$ pour $t\ge0$, soit $G(t)=\max(t,0)$ : $G$ est continue (même $1$-lipschitzienne) mais **pas dérivable en $0$** (dérivées à gauche $0$ et à droite $1$). La preuve étant ponctuelle, elle montre plus précisément : si $g$ est réglée et continue **en** $t$, alors $G$ est dérivable en $t$ et $G'(t)=g(t)$.

### H2 — $F$ espace de Banach

**Rôle.** Elle garantit que l'intégrale $\int_{t_0}^tg$ existe dans $F$ ([[ch05-integrale-fonctions-reglees]]) : sans elle, $G$ n'est même pas définie.

**Si on la retire.** Dans $F=c_{00}$ (suites à support fini, norme $\sup$), la fonction continue $f(t)=\sum_n\theta_n(t)e_n$ de [[ch05-integrale-fonctions-reglees]] (bosses de hauteur $\frac1n$ sur $\big[\frac1{n+1};\frac1n\big]$) n'a pas d'intégrale dans $F$ sur $[0;t]$ pour $t>0$ : calculée dans le complété $c_0$, $\int_0^tf$ a une infinité de coordonnées non nulles (toutes celles d'indice $n\ge1/t$). Donc $G(t)=\int_0^tf$ n'existe pas dans $c_{00}$.

### H3 — $t_0\in[a;b]$ quelconque

**Rôle.** Aucun : changer $t_0$ en $t_1$ ajoute à $G$ la constante $\int_{t_1}^{t_0}g$ (Chasles). C'est une hypothèse de confort ; elle n'affecte ni la continuité ni la dérivée.

**Si on la retire.** Rien ne change, à une constante près.

## Idée de la preuve

Par Chasles, $G(t+h)-G(t)-hg(t)=\int_t^{t+h}(g(u)-g(t))\,du$, de norme au plus $|h|\sup_{u\in[t;t+h]}\|g(u)-g(t)\|$, qui est un $o(h)$ par continuité de $g$ en $t$.

## Preuve

Comme $g$ est continue sur $[a;b]$, elle est réglée, donc intégrable sur tout segment contenu dans $[a;b]$, et bornée : $\|g\|_0=\sup_{[a;b]}\|g\|_F<\infty$ ([[ch05-integrale-fonctions-reglees]]). Pour $u,v\in[a;b]$, notons $[u;v]$ le segment d'extrémités $u$ et $v$ (quel que soit leur ordre).

*Continuité sur $[a;b]$.* Pour $s,t\in[a;b]$, par Chasles $G(t)-G(s)=\int_s^tg(u)\,du$, donc par la majoration de l'intégrale
$$
\|G(t)-G(s)\|_F\le|t-s|\,\|g\|_0.
$$
$G$ est lipschitzienne, donc continue sur $[a;b]$.

*Dérivabilité sur $]a;b[$.* Soit $t\in\,]a;b[$ et $h\neq0$ tel que $t+h\in[a;b]$. D'après la relation de Chasles, $G(t+h)-G(t)=\int_t^{t+h}g(u)\,du$, et l'intégrale de la fonction constante égale à $g(t)$ sur un segment de longueur orientée $h$ vaut $\int_t^{t+h}g(t)\,du=h\,g(t)$. D'où, par linéarité et la majoration de l'intégrale,
$$
\|G(t+h)-G(t)-g(t)h\|_F=\Big\|\int_t^{t+h}\big(g(u)-g(t)\big)\,du\Big\|_F\le\sup_{u\in[t;t+h]}\|g(u)-g(t)\|_F\times|h|.
$$
Or, quand $h$ tend vers $0$, $\sup_{u\in[t;t+h]}\|g(u)-g(t)\|_F$ tend vers $0$ : c'est exactement la continuité de $g$ en $t$ (pour $\eps>0$, il existe $\delta>0$ tel que $|u-t|\le\delta\Rightarrow\|g(u)-g(t)\|_F\le\eps$, donc le $\sup$ est $\le\eps$ dès que $|h|\le\delta$). Le membre de gauche est donc un $o(h)$. L'application $s\mapsto s\,g(t)$ étant linéaire continue de $\R$ dans $F$, $G$ est différentiable en $t$ ([[ch05-differentielle-def]]) avec $dG_t(s)=s\,g(t)$, c'est-à-dire $G'(t)=dG_t(1)=g(t)$.

*Classe $C^1$ sur $]a;b[$.* L'application $t\mapsto dG_t\in\mathcal L(\R;F)$ vérifie, pour $s,t\in\,]a;b[$,
$$
\|dG_t-dG_s\|_{\mathcal L(\R;F)}=\sup_{|\sigma|\le1}\|\sigma\,(g(t)-g(s))\|_F=\|g(t)-g(s)\|_F,
$$
qui tend vers $0$ quand $s\to t$ par continuité de $g$ : $dG$ est continue, donc $G$ est de classe $C^1$ sur $]a;b[$. $\square$

## Preuve à trous

Soit $t\in\,]a;b[$ et $h\neq0$ avec $t+h\in[a;b]$. Par Chasles, et puisque <trou indice="intégrale d'une constante">$\int_t^{t+h}g(t)\,du=h\,g(t)$</trou>, on a
$$
G(t+h)-G(t)-g(t)h=\int_t^{t+h}\big(g(u)-g(t)\big)\,du.
$$
La majoration de l'intégrale donne <trou indice="longueur du segment × sup de la norme">$\|G(t+h)-G(t)-g(t)h\|_F\le|h|\sup_{u\in[t;t+h]}\|g(u)-g(t)\|_F$</trou>, et <trou indice="quelle hypothèse sur g ?">par continuité de $g$ en $t$, ce $\sup$ tend vers $0$ quand $h\to0$</trou> : le reste est un $o(h)$, donc $G'(t)=g(t)$. Enfin $\|dG_t-dG_s\|=\|g(t)-g(s)\|_F$, donc $dG$ est continue : $G$ est $C^1$ sur $]a;b[$ ; et <trou>$\|G(t)-G(s)\|_F\le|t-s|\,\|g\|_0$</trou> donne la continuité sur $[a;b]$. $\square$

## Exemples

* **Dans le plan.** $g(u)=(\cos u,\sin u)\in\R^2$ sur $[0;2\pi]$, $t_0=0$ : $G(t)=(\sin t,\ 1-\cos t)$ (intégration composante par composante), et l'on vérifie $G'(t)=(\cos t,\sin t)=g(t)$.
* **Exponentielle de matrices.** $F=\mathrm M_n(\R)$ (de dimension finie, donc complet), $A\in\mathrm M_n(\R)$ inversible, $g(u)=e^{uA}$ continue. Alors $G(t)=\int_0^te^{uA}\,du$ vérifie $G'(t)=e^{tA}$. La fonction $H(t)=A^{-1}(e^{tA}-I_n)$ vérifie aussi $H'(t)=A^{-1}Ae^{tA}=e^{tA}$ et $H(0)=0=G(0)$ ; donc $(G-H)'=0$ et, par [[ch05-accroissements-finis-borne]] avec $k=0$, $G=H$ : $\int_0^te^{uA}\,du=A^{-1}(e^{tA}-I_n)$.
* **Théorème fondamental.** Ce théorème est l'ingrédient de [[ch05-theoreme-fondamental]] : pour $f$ de classe $C^1$, $f(x+y)=f(x)+\int_0^1df_{x+ty}(y)\,dt$ (on montre que les deux membres, vus comme fonctions de la borne supérieure, ont même dérivée et même valeur en $0$).

## Pièges

* > ⚠️ La **continuité de $g$** est essentielle pour la dérivabilité : pour $g$ seulement réglée, $G$ est lipschitzienne mais pas dérivable aux points de discontinuité de $g$ (exemple $g=\mathbf 1_{[0;1]}$, $G=\max(t,0)$).
* $F$ doit être **de Banach** pour que $G$ soit définie ; mais en dimension finie (par exemple $\R^n$, $\mathrm M_n(\R)$) c'est automatique.
* L'énoncé ne parle de dérivée que sur l'**ouvert** $]a;b[$ ; aux bornes, la même preuve donne seulement des dérivées à droite en $a$ et à gauche en $b$.
* $G'(t)=g(t)$ est un **vecteur** de $F$ ; la différentielle est $dG_t:s\mapsto s\,g(t)$, élément de $\mathcal L(\R;F)$, identifié à $g(t)$.
