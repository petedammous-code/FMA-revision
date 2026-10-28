---
id: ch09-differentielle-entre-sous-varietes-def
type: definition
chapter: 9
title: Différentielle $d\varphi_p : T_pS_1\to T_{\varphi(p)}S_2$ d'une application entre sous-variétés
ref: Définition IX.7.15
page: 163
importance: 3
depends: [ch09-espace-tangent-image-dx, ch09-remarques-applications-cr, ch09-vecteur-tangent-espace-tangent-def, ch09-application-cr-entre-sous-varietes-def, ch09-ex-parametrages-cartes-cr, ch05-composition-differentielles]
tags: [differentielle, espace-tangent, sous-variete, courbe, parametrage-local]
---
## Intuition

> 💡 Une application $\varphi : S_1\to S_2$ transporte les points de $S_1$ sur $S_2$ ; elle transporte donc aussi les **trajectoires** : une fourmi qui se promène sur $S_1$ le long de $\alpha(t)$ a une « ombre » $\beta(t)=\varphi(\alpha(t))$ qui se promène sur $S_2$. La différentielle $d\varphi_p$ est la règle qui donne la **vitesse de l'ombre** $\beta'(0)$ en fonction de la vitesse $\alpha'(0)$ de la fourmi en $p$. Le miracle (qui demande une preuve) : cette vitesse ne dépend que de $\alpha'(0)$, pas de la trajectoire, et dépend linéairement de $\alpha'(0)$.

Il n'y a pas de « $\varphi(p+h)$ » possible ici : $p+h$ n'est en général pas sur $S_1$. On remplace donc le déplacement rectiligne $h$ par une courbe tracée sur $S_1$, ou bien on lit $\varphi$ dans un paramétrage.

Ingrédients : sous-variétés $S_1\subset\R^{N_1}$ (dimension $m$), $S_2\subset\R^{N_2}$ ; **paramétrages locaux** $x : U\to S_1$ ([[ch09-sous-variete-def]]) ; **espaces tangents** $T_pS_1=dx_q(\R^m)$ ([[ch09-vecteur-tangent-espace-tangent-def]], [[ch09-espace-tangent-image-dx]]) ; $\varphi$ **différentiable en $p$** signifie que toutes ses lectures $x_2^{-1}\circ\varphi\circ x_1$ dans des paramétrages sont différentiables en $x_1^{-1}(p)$ ([[ch09-application-cr-entre-sous-varietes-def]]).

## Énoncé

**Définition (poly, Définition IX.7.15, p. 163).** Soit $\varphi : S_1\to S_2$ une application continue entre les sous-variétés $S_1$ et $S_2$ et $p$ un point de $S_1$ où elle est différentiable. Alors il existe une application linéaire
$$
d\varphi_p : T_pS_1\longrightarrow T_{\varphi(p)}S_2
$$
caractérisée par l'une des propriétés suivantes :
1. si $\vec v\in T_pS_1$ s'écrit $\vec v=dx_q(\vec w)$, où $x : U\to S_1$ est un paramétrage local en $p$ tel que $x(q)=p$ avec $\vec w\in\R^m$, alors $d\varphi_p(\vec v)=d(\varphi\circ x)_q(\vec w)$ ;
2. si $\vec v\in T_pS_1$ s'écrit $\vec v=\alpha'(0)$, où $\alpha : I\to S_1$ est une courbe paramétrée de classe $C^1$ d'un intervalle ouvert $I$ contenant $0$ dans $S_1$ telle que $\alpha(0)=p$, alors $d\varphi_p(\vec v)=\beta'(0)$ où $\beta=\varphi\circ\alpha : I\to S_2$.

L'application linéaire $d\varphi_p$ est appelée la **différentielle de $\varphi$ au point $p$**.

(Dans le point 1, $\varphi\circ x$ est vue comme application de l'ouvert $U$ (ou d'un voisinage de $q$) dans $\R^{N_2}$, et $d(\varphi\circ x)_q$ est sa différentielle usuelle. Le texte qui précède la définition, p. 162, justifie l'existence : c'est la preuve ci-dessous.)

## Hypothèses

### H1 — $\varphi$ continue

**Rôle.** Elle fait partie du cadre de la Définition IX.7.5 : grâce à elle, l'ensemble des $u\in U$ tels que $\varphi(x(u))$ tombe dans le domaine $x_2(U_2)$ d'un paramétrage de $S_2$ est un **ouvert** contenant $q$, sur lequel on peut écrire $\varphi\circ x=x_2\circ(x_2^{-1}\circ\varphi\circ x)$.

**Si on la retire.** Condition de cadre : la notion « différentiable en $p$ » de la Définition IX.7.5 est posée pour des applications continues ; sans continuité, la lecture $x_2^{-1}\circ\varphi\circ x_1$ n'est en général même pas définie sur un voisinage de $x_1^{-1}(p)$, et la définition ne s'applique pas.

### H2 — $\varphi$ différentiable en $p$

**Rôle.** C'est elle qui rend $\varphi\circ x$ différentiable en $q$, donc qui donne un sens à $d(\varphi\circ x)_q$ et, via la règle de la chaîne, à $\beta'(0)$ ; c'est aussi elle qui donne la **linéarité**.

**Si on la retire.** Sur $S_1=\R^2$ (ouvert, donc sous-variété), $S_2=\R$, soit $\varphi(a,b)=\dfrac{a^3}{a^2+b^2}$, $\varphi(0,0)=0$. Elle est continue ($|\varphi(a,b)|\le|a|$). Pour toute courbe $C^1$ $\alpha$ avec $\alpha(0)=0$, $\alpha'(0)=\vec v$ : si $\vec v\neq0$, $\varphi(\alpha(t))=t\,\varphi(\alpha(t)/t)$ (car $\varphi$ est homogène de degré $1$) et $\alpha(t)/t\to\vec v$, donc $\beta'(0)=\varphi(\vec v)$ ; si $\vec v=0$, $|\varphi(\alpha(t))|\le\norm{\alpha(t)}=o(t)$, donc $\beta'(0)=0=\varphi(0)$. Ainsi $\beta'(0)=\varphi(\vec v)$ **ne dépend que de $\vec v$**, mais $\vec v\mapsto\varphi(\vec v)$ **n'est pas linéaire** : $\varphi(1,0)+\varphi(0,1)=1+0\neq\frac12=\varphi(1,1)$. Il n'y a pas de différentielle ($\varphi$ n'est pas différentiable en $0$).

## Idée de la preuve

Lire $\varphi$ dans un paramétrage : $\varphi\circ x$ est différentiable en $q$. Pour une courbe $\alpha$, on écrit $\alpha=x\circ\gamma$ avec $\gamma=x^{-1}\circ\alpha$ ; la règle de la chaîne donne $\beta'(0)=d(\varphi\circ x)_q(\gamma'(0))=d(\varphi\circ x)_q(\vec w)$. Le membre de gauche ne dépend pas de $x$, celui de droite pas de $\alpha$ : tout est bien défini.

## Preuve

Notons $m=\dim S_1$. Fixons un paramétrage local $x : U\to S_1$ avec $x(q)=p$ et un paramétrage local $x_2 : U_2\to S_2$ avec $x_2(q_2)=\varphi(p)$.

**Étape 0 : $\varphi\circ x$ est différentiable en $q$, et $d(\varphi\circ x)_q$ est à valeurs dans $T_{\varphi(p)}S_2$.** L'ensemble $x_2(U_2)$ est un ouvert de $S_2$ contenant $\varphi(p)$ ; $\varphi$ et $x$ étant continues, $W=x^{-1}\big(\varphi^{-1}(x_2(U_2))\cap x(U)\big)$ est un ouvert de $U$ contenant $q$. Sur $W$, l'application $g=x_2^{-1}\circ\varphi\circ x : W\to U_2$ est définie, différentiable en $q$ (Définition IX.7.5, [[ch09-application-cr-entre-sous-varietes-def]]), et
$$
\varphi\circ x=x_2\circ g\quad\text{sur }W .
$$
Comme $x_2$ est différentiable en $g(q)=q_2$, la règle de la chaîne ([[ch05-composition-differentielles]]) montre que $\varphi\circ x : W\to\R^{N_2}$ est différentiable en $q$, avec
$$
d(\varphi\circ x)_q=d(x_2)_{q_2}\circ dg_q,\qquad\text{donc}\qquad d(\varphi\circ x)_q(\R^m)\subset d(x_2)_{q_2}(\R^{m_2})=T_{\varphi(p)}S_2
$$
par la Proposition IX.7.9 ([[ch09-espace-tangent-image-dx]]) appliquée à $S_2$.

**Étape 1 : une application linéaire par le paramétrage $x$.** D'après la Proposition IX.7.9, $dx_q$ est un isomorphisme linéaire de $\R^m$ sur $T_pS_1$ (surjectif sur $T_pS_1$, injectif car $x$ est une immersion). Tout $\vec v\in T_pS_1$ s'écrit donc $\vec v=dx_q(\vec w)$ pour un **unique** $\vec w\in\R^m$, et l'on pose
$$
L_x(\vec v)=d(\varphi\circ x)_q(\vec w),\qquad\text{c'est-à-dire}\qquad L_x=d(\varphi\circ x)_q\circ(dx_q)^{-1} : T_pS_1\to T_{\varphi(p)}S_2 .
$$
C'est une composée d'applications linéaires, donc $L_x$ est linéaire ; elle est à valeurs dans $T_{\varphi(p)}S_2$ par l'étape 0.

**Étape 2 : lien avec les courbes.** Soit $\alpha : I\to S_1$ de classe $C^1$ avec $\alpha(0)=p$, $\alpha'(0)=\vec v$, et $\beta=\varphi\circ\alpha$. Comme dans la preuve de la Proposition IX.7.9, quitte à réduire $I$, $\gamma=x^{-1}\circ\alpha : I\to U$ est de classe $C^1$ (Exemple IX.7.6 et Remarques IX.7.7, point 4 : [[ch09-ex-parametrages-cartes-cr]], [[ch09-remarques-applications-cr]]), avec $\gamma(0)=q$ et $dx_q(\gamma'(0))=\alpha'(0)=\vec v$ ; par unicité de $\vec w$, $\gamma'(0)=\vec w$. Quitte à réduire encore $I$ (par continuité de $\gamma$), $\gamma(I)\subset W$. Alors $\beta=(\varphi\circ x)\circ\gamma$ sur $I$, avec $\gamma$ dérivable en $0$ et $\varphi\circ x$ différentiable en $q=\gamma(0)$ ; la règle de la chaîne donne que $\beta$ est dérivable en $0$ et
$$
\beta'(0)=d(\varphi\circ x)_q(\gamma'(0))=d(\varphi\circ x)_q(\vec w)=L_x(\vec v).
$$

**Étape 3 : indépendance.** Soient $x,\tilde x$ deux paramétrages locaux en $p$ et $\vec v\in T_pS_1$. Par définition de $T_pS_1$, il existe au moins une courbe $\alpha$ comme à l'étape 2 ; pour elle, $L_x(\vec v)=\beta'(0)=L_{\tilde x}(\vec v)$. Donc $L_x$ ne dépend pas de $x$ : on la note $d\varphi_p$. Elle est linéaire, vérifie la propriété 1 (par construction) et la propriété 2 (étape 2) ; et chacune de ces propriétés la détermine entièrement puisque tout $\vec v\in T_pS_1$ s'écrit sous la forme $dx_q(\vec w)$ et sous la forme $\alpha'(0)$. Au passage, $\beta'(0)$ ne dépend pas de la courbe $\alpha$ choisie, seulement de $\alpha'(0)$. $\square$

*Matrice.* Dans les bases $(x_{u_i}(q))_i$ de $T_pS_1$ et $(x_{2,v_j}(q_2))_j$ de $T_{\varphi(p)}S_2$ ([[ch09-base-espace-tangent]]), on a $d\varphi_p(x_{u_i}(q))=d(\varphi\circ x)_q(e_i)=d(x_2)_{q_2}(dg_q(e_i))=\sum_j\frac{\partial g_j}{\partial u_i}(q)\,x_{2,v_j}(q_2)$ : la matrice de $d\varphi_p$ est la **jacobienne en $q$ de la lecture $g=x_2^{-1}\circ\varphi\circ x$**.

## Preuve à trous

Soit $x$ un paramétrage local en $p=x(q)$. Par la Proposition IX.7.9, <trou indice="que sait-on de $dx_q$ ?">$dx_q$ est un isomorphisme de $\R^m$ sur $T_pS_1$</trou>, donc tout $\vec v\in T_pS_1$ s'écrit $dx_q(\vec w)$ avec $\vec w$ unique. Avec un paramétrage $x_2$ en $\varphi(p)$, on a $\varphi\circ x=x_2\circ g$ près de $q$, où $g=x_2^{-1}\circ\varphi\circ x$ est différentiable en $q$ ; donc <trou>$\varphi\circ x$ est différentiable en $q$ et $d(\varphi\circ x)_q=d(x_2)_{q_2}\circ dg_q$ est à valeurs dans $T_{\varphi(p)}S_2$</trou>. On pose $d\varphi_p(\vec v)=d(\varphi\circ x)_q(\vec w)$, linéaire en $\vec v$.

Si $\vec v=\alpha'(0)$, on écrit <trou indice="relever la courbe dans le paramétrage">$\alpha=x\circ\gamma$ avec $\gamma=x^{-1}\circ\alpha$ de classe $C^1$, $\gamma(0)=q$, et $\gamma'(0)=\vec w$ par injectivité de $dx_q$</trou>. Alors <trou indice="règle de la chaîne pour $\beta=(\varphi\circ x)\circ\gamma$">$\beta'(0)=d(\varphi\circ x)_q(\gamma'(0))=d(\varphi\circ x)_q(\vec w)$</trou>. Comme $\beta'(0)$ ne fait pas intervenir $x$ et $d(\varphi\circ x)_q(\vec w)$ ne fait pas intervenir $\alpha$, <trou>la définition ne dépend ni du paramétrage, ni de la courbe</trou>. $\square$

## Exemples

* **Une rotation de la sphère.** Soit $R\in SO(3)$ et $\varphi : \mathbb S^2\to\mathbb S^2$, $p\mapsto Rp$ (continue, et différentiable car restriction d'une application linéaire). Pour $\alpha$ tracée sur $\mathbb S^2$ avec $\alpha(0)=p$, $\alpha'(0)=\vec v$ : $\beta(t)=R\alpha(t)$, donc $\beta'(0)=R\vec v$. Ainsi $d\varphi_p(\vec v)=R\vec v$ ; on vérifie que c'est bien dans $T_{Rp}\mathbb S^2=(Rp)^\perp$ : $\langle R\vec v,Rp\rangle=\langle\vec v,p\rangle=0$.
* **Le carré sur le cercle.** $\varphi : \mathbb S^1\to\mathbb S^1$, $(a,b)\mapsto(a^2-b^2,2ab)$ (c'est $z\mapsto z^2$). Avec $x(\theta)=(\cos\theta,\sin\theta)$ : $\varphi\circ x(\theta)=(\cos2\theta,\sin2\theta)$, donc $d(\varphi\circ x)_\theta(w)=2w(-\sin2\theta,\cos2\theta)$, tandis que $\vec v=dx_\theta(w)=w(-\sin\theta,\cos\theta)$. Donc $d\varphi_p$ envoie le vecteur tangent unitaire $\tau(p)=(-\sin\theta,\cos\theta)$ en $p=x(\theta)$ sur $2\tau(\varphi(p))$ : $\varphi$ « double les vitesses ». Matrice $1\times1$ dans les bases $(x'(\theta))$, $(x'(2\theta))$ : $(2)$, jacobienne de $g(\theta)=2\theta$.
* **La fonction altitude sur la sphère.** $\varphi : \mathbb S^2\to\R$, $\varphi(a,b,c)=c$, en $p=(1,0,0)$ avec $x(\theta,\psi)=(\cos\theta\cos\psi,\sin\theta\cos\psi,\sin\psi)$ et $q=(0,0)$ : $\varphi\circ x(\theta,\psi)=\sin\psi$, donc $d(\varphi\circ x)_q(w_1,w_2)=w_2$ ; et $\vec v=dx_q(w_1,w_2)=(0,w_1,w_2)$. Ainsi $d\varphi_p(\vec v)=v_3$ : c'est la restriction à $T_p\mathbb S^2$ de la forme linéaire $(a,b,c)\mapsto c$ (voir [[ch09-remarques-differentielle-cas-euclidien]], point 2).

## Pièges

* > ⚠️ $d\varphi_p$ n'est définie que **sur $T_pS_1$**, pas sur tout $\R^{N_1}$, et elle est à valeurs dans $T_{\varphi(p)}S_2$, pas seulement dans $\R^{N_2}$.
* Dans le point 1, la différentielle $d(\varphi\circ x)_q$ est prise en $q=x^{-1}(p)\in\R^m$ et appliquée à $\vec w\in\R^m$, **pas** à $\vec v$ : il faut d'abord trouver $\vec w$ tel que $dx_q(\vec w)=\vec v$.
* $\vec w$ dépend du paramétrage, mais $d(\varphi\circ x)_q(\vec w)$ n'en dépend pas : c'est tout l'intérêt de la construction.
* Si $\varphi$ est seulement différentiable en $p$, la courbe $\beta=\varphi\circ\alpha$ n'est pas forcément $C^1$ (seulement dérivable en $0$) : on ne peut pas dire « $\beta'(0)\in T_{\varphi(p)}S_2$ par définition de l'espace tangent » ; c'est l'étape 0 (lecture dans un paramétrage de $S_2$) qui le justifie. (Si $\varphi$ est $C^1$, $\beta$ est $C^1$ et l'argument direct marche.)
* En pratique, quand $\varphi$ est la restriction d'une application différentiable $F$ sur un ouvert de $\R^{N_1}$, on calcule $d\varphi_p=dF_{p|T_pS_1}$ ([[ch09-remarques-differentielle-cas-euclidien]]) ; mais attention, $dF_p$ en dehors de $T_pS_1$ n'a aucune signification pour $\varphi$.
