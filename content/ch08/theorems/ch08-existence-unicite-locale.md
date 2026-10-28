---
id: ch08-existence-unicite-locale
type: theorem
chapter: 8
title: "Existence et unicité locale d'une solution de l'équation d'Euler-Lagrange à conditions initiales $(q_0,v_0)$ données (Lagrangien $C^2$ régulier)"
ref: "Question 15, p. 146 (non numérotée, section VIII)"
page: 146
importance: 3
depends: [ch08-systeme-premier-ordre-cauchy-lipschitz, ch08-legendre-inversion-locale, ch07-cauchy-lipschitz, ch07-unicite-globale]
tags: [euler-lagrange, cauchy-lipschitz, existence, unicite, probleme-de-cauchy, lagrangien-regulier, determinisme]
---
## Intuition

> 💡 C'est le **déterminisme de la mécanique lagrangienne** : si l'on connaît, à un instant $t_0$, la position $q_0$ et la vitesse $v_0$ d'un système dont le Lagrangien est régulier, alors son mouvement est entièrement déterminé, au moins pendant un petit intervalle de temps autour de $t_0$.

Le mécanisme : grâce à la question 14 ([[ch08-systeme-premier-ordre-cauchy-lipschitz]]), l'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]) équivaut localement à un système du premier ordre $\alpha'=Y(t,\alpha)$ en l'inconnue $\alpha=(\gamma,p)$ (position, impulsion), avec un champ $Y$ de classe $C^1$. Le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) donne une unique solution de condition initiale $\alpha(t_0)=(q_0,p_0)$, où $p_0=\frac{\partial L}{\partial v}(t_0,q_0,v_0)$ est l'impulsion initiale. On revient ensuite à $\gamma$.

À ne pas confondre avec le **problème aux deux bouts** ($\gamma(0)=a$, $\gamma(1)=b$, c'est-à-dire chercher un point critique de $\hat L$ sur $E_{a,b}$), pour lequel il n'y a en général ni existence ni unicité.

## Énoncé

**Théorème (poly, Question 15, p. 146).** Soit $(V,\langle\cdot,\cdot\rangle)$ un espace de Hilbert de dimension finie, $I$ un intervalle ouvert contenant $[0,1]$ et $L:I\times V\times V\to\R$ de classe $C^2$ et **régulier** ([[ch08-lagrangien-regulier]]). Si l'on se donne $(t_0,q_0,v_0)\in\,]0;1[\times V\times V$, il existe un intervalle ouvert $J\subset\,]0,1[$ contenant $t_0$ tel qu'il existe une unique courbe $\gamma:J\to V$ vérifiant l'équation d'Euler-Lagrange avec $\gamma(t_0)=q_0$ et $\gamma'(t_0)=v_0$.

Ici, « $\gamma:J\to V$ vérifie l'équation d'Euler-Lagrange » signifie : $\gamma$ est de classe $C^1$ et, pour tout $t\in J$, la fonction $t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ est dérivable en $t$, de dérivée $\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$.

*Complément (démontré dans la preuve).* Si $\gamma_1,\gamma_2$ vérifient l'équation d'Euler-Lagrange sur un même intervalle ouvert $J'\subset I$ contenant $t_0$, avec $\gamma_1(t_0)=\gamma_2(t_0)$ et $\gamma_1'(t_0)=\gamma_2'(t_0)$, alors $\gamma_1=\gamma_2$ sur $J'$ tout entier.

## Hypothèses

### H1 — $L$ est de classe $C^2$

**Rôle.** Elle rend le champ $Y$ de la question 14 de classe $C^1$, donc localement lipschitzien en la seconde variable : c'est l'hypothèse du théorème de Cauchy-Lipschitz, d'où viennent l'existence **et l'unicité**.

**Si on la retire.** L'unicité tombe. Exemple vérifié : $V=\R$, $L(u,q,v)=\tfrac12v^2+8\,\mathrm{signe}(q)\abs q^{3/2}$, de classe $C^1$ mais pas $C^2$ (voir [[ch08-systeme-premier-ordre-cauchy-lipschitz]], H1), avec $\frac{\partial^2L}{\partial v^2}=1$. On a $\frac{\partial L}{\partial v}=v$ et $\frac{\partial L}{\partial q}=12\abs q^{1/2}$, donc (E.L) s'écrit $\gamma''=12\abs\gamma^{1/2}$. Avec $(t_0,q_0,v_0)=(\tfrac12,0,0)$, les deux courbes $\gamma_1\equiv0$ et $\gamma_2(t)=(t-\tfrac12)^4$ pour $t\ge\tfrac12$, $\gamma_2(t)=0$ pour $t\le\tfrac12$, sont solutions sur $]0,1[$ : pour $t\ge\tfrac12$, $\gamma_2''(t)=12(t-\tfrac12)^2=12\abs{\gamma_2(t)}^{1/2}$, et les deux membres sont nuls pour $t\le\tfrac12$. Elles diffèrent sur $]\tfrac12,1[\cap J$, non vide pour **tout** intervalle ouvert $J\ni\tfrac12$ : aucun $J$ ne convient.

### H2 — $L$ est régulier

**Rôle.** Elle fournit la fonction $g$ (vitesse en fonction de l'impulsion) de la question 13 ([[ch08-legendre-inversion-locale]]), sans laquelle (E.L) n'est pas une équation résolue en la dérivée. Seule la régularité **au voisinage** de la courbe solution sert ; comme $\frac{\partial^2L}{\partial v^2}$ est continue et que l'ensemble des isomorphismes est ouvert ([[ch05-inversion-c-infini]]), la régularité au seul point $(t_0,q_0,v_0)$ suffirait (quitte à réduire $J$ pour que $(t,\gamma(t),\gamma'(t))$ reste dans un voisinage où $L$ est régulier).

**Si on la retire.** L'existence ou l'unicité peuvent tomber.
* *Pas d'existence.* $V=\R$, $L(u,q,v)=\tfrac13v^3+q$ ($C^\infty$, $\frac{\partial^2L}{\partial v^2}=2v$ nul en $v=0$), et $(t_0,q_0,v_0)=(\tfrac12,0,0)$. (E.L) s'écrit $\frac{d}{dt}\big(\gamma'(t)^2\big)=1$, donc $\gamma'(t)^2=\gamma'(\tfrac12)^2+(t-\tfrac12)=t-\tfrac12$, impossible pour $t<\tfrac12$ : aucune solution sur aucun intervalle ouvert contenant $\tfrac12$.
* *Pas d'unicité.* $V=\R$, $L(u,q,v)=qv$ : (E.L) s'écrit $\gamma'=\gamma'$ (voir [[ch08-systeme-premier-ordre-cauchy-lipschitz]], H2), donc toutes les courbes $\gamma(t)=q_0+v_0(t-t_0)+c(t-t_0)^2$, $c\in\R$, sont solutions avec les mêmes conditions initiales.

### H3 — On impose la position **et** la vitesse au même instant $t_0\in\,]0;1[$

**Rôle.** Le système de la question 14 est du premier ordre en $\alpha=(\gamma,p)$ : il lui faut la condition initiale complète $\alpha(t_0)=(q_0,p_0)$, et $p_0=\frac{\partial L}{\partial v}(t_0,q_0,v_0)$ se calcule à partir de $(q_0,v_0)$. Le choix $t_0\in\,]0;1[$ (et $J\subset\,]0;1[$) est de confort : il garde la solution dans l'intervalle de temps du problème variationnel ; la même preuve marche pour $t_0\in I$ et $J\subset I$.

**Si on la retire.** Exemple vérifié : $V=\R$, $L=\tfrac12v^2-\tfrac12\pi^2q^2$, (E.L) : $\gamma''=-\pi^2\gamma$, solutions $\gamma(t)=c_1\cos(\pi t)+c_2\sin(\pi t)$.
* Si l'on ne donne que $\gamma(t_0)=q_0$, il y a une infinité de solutions (une pour chaque vitesse initiale).
* Si l'on donne $\gamma(0)=a$ et $\gamma(1)=b$ (problème aux deux bouts) : $\gamma(0)=c_1$ et $\gamma(1)=-c_1$. Pour $a=b=0$, toutes les courbes $c_2\sin(\pi t)$ conviennent (infinité de solutions) ; pour $a=0$, $b=1$, il n'y en a **aucune** ($\gamma(1)=-c_1=-a=0\neq1$).

## Idée de la preuve

*Existence :* Cauchy-Lipschitz pour $\alpha=(\gamma,p)$ dans une carte $J_0\times U'$ autour de $(t_0,q_0,p_0)$, puis retour à $\gamma$ par la question 14 ; $\gamma'(t_0)=g(t_0,q_0,p_0)=v_0$. *Unicité :* l'ensemble des $t$ où deux solutions ont même position et même vitesse est fermé, et ouvert grâce à l'unicité de Cauchy-Lipschitz dans une carte centrée en chacun de ses points ; par connexité c'est tout $J$.

## Preuve

On note, pour un point $x=(u,q,v)$ de $I\times V\times V$, « la carte en $x$ » les données fournies par la question 13 ([[ch08-legendre-inversion-locale]]) appliquée en $x$ : des ouverts $\mathcal U\ni x$ et $\mathcal V\ni\Phi(x)$, la fonction $g$ de classe $C^1$ avec $\Phi|_{\mathcal U}^{-1}=\Psi:(u,q,p)\mapsto(u,q,g(u,q,p))$, et le champ $Y(u,q,p)=\big(g(u,q,p),\frac{\partial L}{\partial q}(u,q,g(u,q,p))\big)$ de la question 14, de classe $C^1$ sur $\mathcal V$.

*Étape 1 : la carte au point initial.* Soit la carte $(\mathcal U_0,\mathcal V_0,g,Y)$ en $(t_0,q_0,v_0)$, et $p_0=\frac{\partial L}{\partial v}(t_0,q_0,v_0)$, de sorte que $(t_0,q_0,p_0)=\Phi(t_0,q_0,v_0)\in\mathcal V_0$. Comme $\mathcal V_0$ est ouvert et $]0,1[$ est un ouvert contenant $t_0$, il existe un intervalle ouvert $J_0$ avec $t_0\in J_0\subset\,]0,1[$ et un ouvert $U'$ de $V\times L(V;\R)$ contenant $(q_0,p_0)$ tels que $J_0\times U'\subset\mathcal V_0$. D'après la question 14 ([[ch08-systeme-premier-ordre-cauchy-lipschitz]], point 2), $X=Y|_{J_0\times U'}$ est un champ de vecteurs dépendant du temps sur $U'$, localement lipschitzien en la seconde variable.

*Étape 2 : Cauchy-Lipschitz.* Le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]), appliqué à $X$ avec $\tau_0=t_0$ et $x_0=(q_0,p_0)$ (en prenant la condition initiale $(t_0,x_0)$ elle-même), fournit $\epsilon>0$ et une courbe intégrale $\alpha:\,]t_0-\epsilon,t_0+\epsilon[\,\to U'$ de $X$ telle que $\alpha(t_0)=(q_0,p_0)$. Par définition d'une courbe intégrale ([[ch07-champ-vecteurs-courbe-integrale-def]]), son intervalle de définition est contenu dans $J_0$. Posons
$$
J=\,]t_0-\epsilon,t_0+\epsilon[\ \subset J_0\subset\,]0,1[ .
$$

*Étape 3 : existence.* Écrivons $\alpha=(\gamma,p)$ avec $\gamma:J\to V$ et $p:J\to L(V;\R)$. Pour tout $t\in J$, $(t,\alpha(t))\in J_0\times U'\subset\mathcal V_0$ et $\alpha'(t)=Y(t,\alpha(t))$. Par la question 14, point 1 (b), $\gamma$ est de classe $C^1$, $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ et $\gamma$ vérifie l'équation d'Euler-Lagrange sur $J$. Les conditions initiales : $\gamma(t_0)=q_0$, et
$$
\gamma'(t_0)=g(t_0,\gamma(t_0),p(t_0))=g(t_0,q_0,p_0)=v_0,
$$
car $(t_0,q_0,v_0)\in\mathcal U_0$ et $\Psi(t_0,q_0,p_0)=\Psi\big(\Phi(t_0,q_0,v_0)\big)=(t_0,q_0,v_0)$.

*Étape 4 : unicité (et complément).* Soient $J'\subset I$ un intervalle ouvert contenant $t_0$ et $\gamma_1,\gamma_2:J'\to V$ deux courbes vérifiant (E.L) sur $J'$ avec $\gamma_1(t_0)=\gamma_2(t_0)$ et $\gamma_1'(t_0)=\gamma_2'(t_0)$. Notons $p_i(t)=\frac{\partial L}{\partial v}(t,\gamma_i(t),\gamma_i'(t))$ et
$$
A=\{t\in J' \;:\; \gamma_1(t)=\gamma_2(t)\ \text{et}\ \gamma_1'(t)=\gamma_2'(t)\}.
$$
* $A$ contient $t_0$, donc est non vide.
* $A$ est fermé dans $J'$ : c'est l'image réciproque du fermé $\{(0,0)\}$ par l'application continue $t\mapsto(\gamma_1(t)-\gamma_2(t),\gamma_1'(t)-\gamma_2'(t))$.
* $A$ est ouvert. Soit $t_1\in A$ et $x_1=(t_1,\gamma_1(t_1),\gamma_1'(t_1))=(t_1,\gamma_2(t_1),\gamma_2'(t_1))$. Prenons la carte $(\mathcal U_1,\mathcal V_1,g_1,Y_1)$ en $x_1$, et un produit $J_1\times U_1'\subset\mathcal V_1$ contenant $\Phi(x_1)=(t_1,\gamma_1(t_1),p_1(t_1))$, avec $J_1$ intervalle ouvert. Les applications $t\mapsto(t,\gamma_i(t),\gamma_i'(t))$ et $t\mapsto(t,\gamma_i(t),p_i(t))=\Phi(t,\gamma_i(t),\gamma_i'(t))$ sont continues et prennent en $t_1$ des valeurs dans les ouverts $\mathcal U_1$ et $J_1\times U_1'$ respectivement ; il existe donc un intervalle ouvert $K$ avec $t_1\in K\subset J'\cap J_1$ tel que, pour $i=1,2$ et $t\in K$, $(t,\gamma_i(t),\gamma_i'(t))\in\mathcal U_1$ et $(t,\gamma_i(t),p_i(t))\in J_1\times U_1'$. Par la question 14, point 1 (a), $\alpha_i=(\gamma_i,p_i)$ est, sur $K$, une courbe intégrale du champ $X_1=Y_1|_{J_1\times U_1'}$, localement lipschitzien en la seconde variable. Ces deux courbes intégrales ont la même condition initiale en $t_1$ : $\alpha_1(t_1)=\alpha_2(t_1)$ puisque $p_1(t_1)=\frac{\partial L}{\partial v}(x_1)=p_2(t_1)$. Par la Proposition VII.3.1 ([[ch07-unicite-globale]]), elles coïncident sur $K$. Donc $\gamma_1=\gamma_2$ sur $K$ et, par la question 14, $\gamma_1'(t)=g_1(t,\gamma_1(t),p_1(t))=g_1(t,\gamma_2(t),p_2(t))=\gamma_2'(t)$ pour $t\in K$. Ainsi $K\subset A$.

L'intervalle $J'$ est connexe et $A$ est une partie non vide, ouverte et fermée de $J'$ : $A=J'$, donc $\gamma_1=\gamma_2$ sur $J'$. C'est le complément ; avec $J'=J$, il donne l'unicité de la courbe de l'étape 3 parmi les courbes $J\to V$ vérifiant (E.L) et les conditions initiales. $\square$

## Preuve à trous

*Existence.* On prend la carte de la question 13 en $(t_0,q_0,v_0)$ et l'on pose <trou indice="quelle condition initiale donner à α=(γ,p) ?">$p_0=\frac{\partial L}{\partial v}(t_0,q_0,v_0)$, de sorte que $(t_0,q_0,p_0)=\Phi(t_0,q_0,v_0)\in\mathcal V_0$</trou>. On choisit un produit $J_0\times U'\subset\mathcal V_0$ autour de ce point, avec $J_0\subset\,]0,1[$ ; sur ce produit, le champ $Y$ de la question 14 est $C^1$, donc localement lipschitzien en la seconde variable. Cauchy-Lipschitz donne une courbe intégrale $\alpha=(\gamma,p):J=\,]t_0-\epsilon,t_0+\epsilon[\,\to U'$ avec $\alpha(t_0)=(q_0,p_0)$. Par la question 14 (sens réciproque), $\gamma$ vérifie (E.L) sur $J$, $\gamma(t_0)=q_0$ et <trou indice="utiliser Ψ∘Φ = id sur U_0">$\gamma'(t_0)=g(t_0,q_0,p_0)=v_0$, car $\Psi(\Phi(t_0,q_0,v_0))=(t_0,q_0,v_0)$</trou>.

*Unicité.* Soient $\gamma_1,\gamma_2$ deux solutions sur $J$ avec les mêmes conditions initiales, et $A=\{t\in J:\gamma_1(t)=\gamma_2(t),\ \gamma_1'(t)=\gamma_2'(t)\}\ni t_0$. L'ensemble $A$ est fermé par continuité. Il est ouvert : en $t_1\in A$, <trou indice="se placer dans une carte centrée au point commun x_1, puis appliquer l'unicité pour le système">on prend la carte de la question 13 en $x_1=(t_1,\gamma_1(t_1),\gamma_1'(t_1))$ ; sur un petit intervalle $K\ni t_1$, $(\gamma_1,p_1)$ et $(\gamma_2,p_2)$ sont deux courbes intégrales du champ $Y_1$ de même condition initiale en $t_1$, donc coïncident sur $K$ (Proposition VII.3.1)</trou>, puis <trou indice="comment récupérer l'égalité des vitesses ?">$\gamma_1'=g_1(t,\gamma_1,p_1)=g_1(t,\gamma_2,p_2)=\gamma_2'$ sur $K$</trou>. Enfin <trou indice="propriété topologique de J">$J$ est un intervalle, donc connexe, et $A$ non vide, ouvert et fermé : $A=J$</trou>. $\square$

## Exemples

* **Oscillateur harmonique : unicité pour le problème de Cauchy.** $V=\R$, $L=\tfrac12v^2-\tfrac12\omega^2q^2$ ($\omega>0$), régulier ($\frac{\partial^2L}{\partial v^2}=1$). (E.L) : $\gamma''=-\omega^2\gamma$, et l'unique solution de conditions initiales $(t_0,q_0,v_0)$ est
$$
\gamma(t)=q_0\cos\big(\omega(t-t_0)\big)+\frac{v_0}{\omega}\sin\big(\omega(t-t_0)\big),
$$
définie sur $\R$ (on peut donc prendre $J=\,]0,1[$ ici). Comparer avec H3 : pour $\omega=\pi$, le problème aux deux bouts $\gamma(0)=0$, $\gamma(1)=b$ a une infinité de solutions si $b=0$ et aucune si $b\neq0$.
* **Le résultat est local en temps : explosion.** $V=\R$, $L=\tfrac12v^2+\tfrac12q^4$ (c'est $T-U$ avec $U(q)=-\tfrac12q^4$), régulier. On a $\frac{\partial L}{\partial v}=v$, $\frac{\partial L}{\partial q}=2q^3$, d'où (E.L) : $\gamma''=2\gamma^3$. Avec $(t_0,q_0,v_0)=(\tfrac14,4,16)$, la courbe $\gamma(t)=\dfrac1{\tfrac12-t}$ convient sur $]0,\tfrac12[$ : $\gamma(\tfrac14)=4$, $\gamma'(t)=\dfrac1{(\frac12-t)^2}$ donne $\gamma'(\tfrac14)=16$, et $\gamma''(t)=\dfrac2{(\frac12-t)^3}=2\gamma(t)^3$. Il n'existe **aucune** solution sur $]0,1[$ avec ces conditions initiales : par le complément, une telle solution coïnciderait avec $\gamma$ sur $]0,\tfrac12[$, et serait donc non bornée au voisinage de $\tfrac12$, contredisant sa continuité en $\tfrac12$.
* **La construction de la preuve sur un cas explicite.** $V=\R$, $L=\sqrt{1+v^2}$. Ici $p_0=\dfrac{v_0}{\sqrt{1+v_0^2}}$ et le système de la question 14 est $\gamma'=p/\sqrt{1-p^2}$, $p'=0$ ; sa solution de condition initiale $(q_0,p_0)$ est $p\equiv p_0$, $\gamma(t)=q_0+\dfrac{p_0}{\sqrt{1-p_0^2}}(t-t_0)$. Comme $p_0^2/(1-p_0^2)=v_0^2$ (et $p_0$ a le signe de $v_0$), on retrouve $\gamma(t)=q_0+v_0(t-t_0)$ : la droite issue de $q_0$ à la vitesse $v_0$.

## Pièges

* > ⚠️ Conditions **initiales** $(\gamma(t_0),\gamma'(t_0))$ et non conditions **aux deux bouts** $(\gamma(0),\gamma(1))$. Ce théorème ne dit rien de l'existence d'un point critique de $\hat L$ sur $E_{a,b}$ (H3, premier exemple).
* > ⚠️ Le résultat est **local en temps** : $J$ peut être très petit, et il n'y a pas d'existence sur $]0,1[$ en général (deuxième exemple). C'est aussi local à cause de la transformation de Legendre, qui n'est inversible que localement.
* L'unicité n'est pas une simple citation de Cauchy-Lipschitz : celui-ci donne l'unicité de $\alpha=(\gamma,p)$ **dans une carte** ; pour une autre solution $\gamma_2$ qui sortirait de la carte, il faut l'argument de connexité (ensemble de coïncidence ouvert et fermé), comme dans la Proposition VII.3.1. Il faut aussi comparer **position et vitesse** (ou position et impulsion), pas seulement la position : pour relancer Cauchy-Lipschitz en un point $t_1$, l'égalité $\gamma_1(t_1)=\gamma_2(t_1)$ ne suffit pas, il faut la même condition initiale complète $\alpha_1(t_1)=\alpha_2(t_1)$.
* La condition initiale du système est $(q_0,p_0)$ avec $p_0=\frac{\partial L}{\partial v}(t_0,q_0,v_0)$, et non $(q_0,v_0)$ ; ne pas oublier de vérifier à la fin que $\gamma'(t_0)=g(t_0,q_0,p_0)$ vaut bien $v_0$.
* Sans régularité, l'unicité tombe même pour des Lagrangiens naturels : $L(u,q,v)=\norm v$ (longueur, défini pour $v\neq0$ comme à la question 9) donne (E.L) : $\frac{d}{dt}\big(\gamma'/\norm{\gamma'}\big)=0$, satisfaite par toute courbe $\gamma(t)=q_0+\varphi(t)\,v_0/\norm{v_0}$ avec $\varphi(t_0)=0$, $\varphi'(t_0)=\norm{v_0}$, $\varphi'>0$ (par exemple $\varphi(t)=\norm{v_0}(t-t_0)+c(t-t_0)^2$ près de $t_0$) : toutes les reparamétrisations d'une droite. Ici $\frac{\partial^2L}{\partial v^2}(v)\cdot(\ell_1,\ell_2)=\dfrac{\langle\ell_1,\ell_2\rangle}{\norm v}-\dfrac{\langle v,\ell_1\rangle\langle v,\ell_2\rangle}{\norm v^3}$ s'annule pour $\ell_1=v$ : $L$ n'est pas régulier.
* La solution est automatiquement de classe $C^2$ ([[ch08-systeme-premier-ordre-cauchy-lipschitz]], point 3), bien qu'on ne la cherche que $C^1$.
