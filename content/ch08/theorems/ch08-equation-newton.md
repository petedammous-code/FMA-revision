---
id: ch08-equation-newton
type: proposition
chapter: 8
title: "Lagrangien $L=T-U$ avec $T=\tfrac12\lVert v\rVert^2$ : (E.L) est l'équation de Newton $\gamma''=-\nabla U(\gamma)$"
ref: "Question 7, p. 144 (non numérotée, section VIII)"
page: 144
importance: 2
depends: [ch08-euler-lagrange, ch05-gradient-hilbert, ch05-differentielles-partielles]
tags: [newton, mecanique, potentiel, gradient, euler-lagrange, principe-moindre-action]
---
## Intuition

> 💡 C'est le **principe de moindre action** de la mécanique : parmi tous les chemins qui vont de $a$ (à l'instant $0$) à $b$ (à l'instant $1$), une particule de masse $1$ soumise à un potentiel $U$ suit un chemin critique de l'action $\int_0^1\big(\frac12\norm{\gamma'}^2-U(\gamma)\big)dt$ (« énergie cinétique moins énergie potentielle »). L'équation d'Euler-Lagrange de ce Lagrangien est exactement la loi de Newton « accélération $=$ force », la force étant $-\nabla U$.

Le calcul est court : la dérivée partielle de $T(v)=\frac12\norm v^2$ par rapport à $v$ est la vitesse $v$ (la « quantité de mouvement »), et celle de $-U(q)$ par rapport à $q$ est la force $-\nabla U(q)$. L'équation (E.L) « dérivée de la quantité de mouvement $=$ force » devient $\gamma''=-\nabla U(\gamma)$.

Rappels : le **gradient** $\nabla U(q)\in\R^n$ est le vecteur tel que $dU_q(h)=\langle\nabla U(q),h\rangle$ pour tout $h$ ([[ch05-gradient-hilbert]]) ; pour le produit scalaire usuel, $\nabla U=\big(\frac{\partial U}{\partial x_1},\dots,\frac{\partial U}{\partial x_n}\big)$. (E.L) est l'équation de [[ch08-euler-lagrange]].

## Énoncé

**Proposition (poly, Question 7, p. 144).** On suppose $V=\R^n$ muni du produit scalaire usuel et de la norme qui en découle, et $L=T-U$, où $T$ ne dépend que de $v$, $T(v)=\frac12\norm v^2$ (énergie cinétique), et $U$ ne dépend que de $q$ (un « potentiel ») :
$$
L(u,q,v)=\tfrac12\norm v^2-U(q),\qquad U:\R^n\to\R\ \text{de classe }C^1 .
$$
Alors l'équation d'Euler-Lagrange (E.L) se réduit à l'équation de Newton : une courbe $\gamma\in C^1([0;1];\R^n)$ vérifie (E.L) si et seulement si $\gamma$ est de classe $C^2$ et
$$
\gamma''(t)=-\nabla U(\gamma(t))\qquad\text{pour tout }t\in[0;1].
$$
En particulier (par [[ch08-euler-lagrange]]), tout point critique de $\hat L|_{E_{a,b}}$ est une solution $C^2$ de l'équation de Newton telle que $\gamma(0)=a$, $\gamma(1)=b$.

## Hypothèses

### H1 — $T(v)=\frac12\norm v^2$ pour le produit scalaire **qui sert à définir le gradient**

**Rôle.** Avec ce choix, $\frac{\partial L}{\partial v}(u,q,v)=\langle v,\cdot\rangle$ est identifiée au vecteur $v$ lui-même : le membre de gauche de (E.L) est $\frac{d}{dt}\gamma'=\gamma''$.

**Si on la retire.** Avec une matrice de masse $M$ symétrique définie positive, $T(v)=\frac12\langle Mv,v\rangle$, on a $T(v+k)-T(v)=\langle Mv,k\rangle+\frac12\langle Mk,k\rangle$, donc $\frac{\partial L}{\partial v}\simeq Mv$ et (E.L) devient $M\gamma''=-\nabla U(\gamma)$, et non $\gamma''=-\nabla U(\gamma)$. Exemple vérifié : $n=1$, $M=2$, $U(q)=\frac12q^2$ ; (E.L) s'écrit $2\gamma''=-\gamma$, dont $\gamma(t)=\cos(t/\sqrt2)$ est solution, alors que $\gamma''=-\frac12\cos(t/\sqrt2)\neq-\gamma(t)$ (sauf aux zéros de $\gamma$).

### H2 — Variables séparées : $T$ ne dépend que de $v$, $U$ ne dépend que de $q$

**Rôle.** Elle assure $\frac{\partial L}{\partial v}$ indépendant de $q$ et $\frac{\partial L}{\partial q}=-dU_q$ indépendant de $v$ : la force ne dépend que de la position.

**Si on la retire.** Un terme croisé position-vitesse produit une force qui dépend de la vitesse, et l'équation n'est plus de la forme de Newton. Exemple vérifié (champ magnétique uniforme) : $n=2$, $L(u,q,v)=\frac12\norm v^2+\frac12(q_1v_2-q_2v_1)$. On a $\frac{\partial L}{\partial v}=\big(v_1-\frac{q_2}2,\,v_2+\frac{q_1}2\big)$ et $\frac{\partial L}{\partial q}=\big(\frac{v_2}2,\,-\frac{v_1}2\big)$, et (E.L) s'écrit $\gamma_1''=\gamma_2'$, $\gamma_2''=-\gamma_1'$. Les courbes constantes sont solutions, ainsi que $\gamma(t)=(\sin t,\cos t)$. Si ce système était $\gamma''=-\nabla W(\gamma)$ pour un $W$ de classe $C^1$, les solutions constantes imposeraient $\nabla W\equiv0$, donc $\gamma''=0$ pour toute solution, ce que contredit $(\sin t,\cos t)$. En revanche, laisser $U$ dépendre aussi du temps, $L=\frac12\norm v^2-U(u,q)$, ne casse rien : la même preuve donne $\gamma''(t)=-\nabla_qU(t,\gamma(t))$.

### H3 — $U$ de classe $C^1$

**Rôle.** Ce n'est pas une hypothèse supplémentaire : $L$ étant $C^1$, $U(q)=-L(u_0,q,0)$ (pour un $u_0\in I$ fixé) est $C^1$. Elle donne l'existence et la **continuité** de $\nabla U$, d'où $\gamma''=-\nabla U(\gamma)$ continue et $\gamma$ de classe $C^2$.

**Si on la retire.** Pour $U(q)=|q|$ ($n=1$), non dérivable en $0$, l'équation de Newton n'a pas de sens en $q=0$ et la théorie du chapitre ne s'applique pas ($L$ n'est pas $C^1$).

## Idée de la preuve

On calcule les dérivées partielles : $\frac{\partial L}{\partial v}(u,q,v)=\langle v,\cdot\rangle\simeq v$ et $\frac{\partial L}{\partial q}(u,q,v)=-dU_q\simeq-\nabla U(q)$. Évaluées en $(t,\gamma(t),\gamma'(t))$, (E.L) devient « $\gamma'$ est dérivable et $(\gamma')'=-\nabla U(\gamma)$ », et la continuité de $\nabla U$ donne $\gamma\in C^2$.

## Preuve

*Dérivée partielle en $v$.* Fixons $(u,q)$. Pour $v,k\in\R^n$,
$$
L(u,q,v+k)-L(u,q,v)=\tfrac12\norm{v+k}^2-\tfrac12\norm v^2=\langle v,k\rangle+\tfrac12\norm k^2,
$$
et $\frac12\norm k^2=o(\norm k)$. Donc $v\mapsto L(u,q,v)$ est différentiable de différentielle $k\mapsto\langle v,k\rangle$ : $\frac{\partial L}{\partial v}(u,q,v)=\langle v,\cdot\rangle$, identifiée au vecteur $v$ ([[ch05-differentielles-partielles]], [[ch08-cadre-espace-courbes]]).

*Dérivée partielle en $q$.* Fixons $(u,v)$. L'application $q\mapsto L(u,q,v)=\frac12\norm v^2-U(q)$ a pour différentielle $-dU_q$, et par définition du gradient ([[ch05-gradient-hilbert]]) $-dU_q(k)=\langle-\nabla U(q),k\rangle$ : $\frac{\partial L}{\partial q}(u,q,v)$ est identifiée à $-\nabla U(q)$.

*L'équation.* Le long de $\gamma\in C^1([0;1];\R^n)$, on a donc $\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))\simeq\gamma'(t)$ et $\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))\simeq-\nabla U(\gamma(t))$. L'équation (E.L) affirme que $t\mapsto\gamma'(t)$ est dérivable sur $[0;1]$ et que
$$
\frac{d}{dt}\gamma'(t)=-\nabla U(\gamma(t)),\qquad\text{c'est-à-dire}\qquad \gamma''(t)=-\nabla U(\gamma(t)).
$$
Comme $U$ est $C^1$, $q\mapsto dU_q$ est continue, donc $\nabla U$ l'est aussi (l'identification $L(\R^n;\R)\simeq\R^n$ est une isométrie) ; ainsi $\gamma''=-\nabla U\circ\gamma$ est continue et $\gamma$ est de classe $C^2$.

Réciproquement, si $\gamma$ est $C^2$ et vérifie $\gamma''=-\nabla U(\gamma)$, alors $t\mapsto\frac{\partial L}{\partial v}(t,\gamma,\gamma')\simeq\gamma'$ est dérivable de dérivée $\gamma''=-\nabla U(\gamma)\simeq\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ : c'est (E.L). La dernière phrase de l'énoncé résulte alors de [[ch08-euler-lagrange]]. $\square$

## Preuve à trous

Pour $(u,q)$ fixé, $L(u,q,v+k)-L(u,q,v)=$ <trou indice="développer la norme au carré">$\langle v,k\rangle+\frac12\norm k^2$</trou>, donc $\frac{\partial L}{\partial v}(u,q,v)$ est identifiée à <trou>$v$</trou>. Pour $(u,v)$ fixé, la différentielle de $q\mapsto L(u,q,v)$ est $-dU_q$, identifiée à <trou indice="définition du gradient dans un espace de Hilbert">$-\nabla U(q)$, car $dU_q(k)=\langle\nabla U(q),k\rangle$</trou>.

En évaluant en $(t,\gamma(t),\gamma'(t))$, l'équation (E.L) dit que <trou>$t\mapsto\gamma'(t)$ est dérivable et $\gamma''(t)=-\nabla U(\gamma(t))$</trou> ; enfin <trou indice="pourquoi γ'' est-elle continue ?">$\nabla U$ est continue car $U$ est $C^1$, donc $\gamma''=-\nabla U\circ\gamma$ est continue et $\gamma$ est $C^2$</trou>. $\square$

## Exemples

* **Oscillateur harmonique.** $U(q)=\frac{\omega^2}2\norm q^2$, $\nabla U(q)=\omega^2q$ : $\gamma''=-\omega^2\gamma$, de solutions $\gamma(t)=\alpha\cos(\omega t)+\beta\sin(\omega t)$, $\alpha,\beta\in\R^n$.
* **Pesanteur : la parabole minimise l'action.** $n=2$, $U(x,y)=gy$ ($g>0$), $\nabla U=(0,g)$ ; Newton : $\gamma''=(0,-g)$. Avec $a=(0,0)$, $b=(1,0)$, l'unique solution est $\gamma(t)=\big(t,\frac g2t(1-t)\big)$ (on vérifie $\gamma''=(0,-g)$, $\gamma(0)=a$, $\gamma(1)=b$ ; l'unicité vient de ce que $\gamma''$ est imposée, donc $\gamma$ est un polynôme de degré $\le2$ déterminé par ses valeurs en $0$ et $1$). C'est même un **minimum** de $\hat L$ sur $E_{a,b}$ : $U$ étant linéaire, pour $h\in E_{0,0}$, $\hat L(\gamma+h)=\hat L(\gamma)+d\hat L_\gamma(h)+\frac12\int_0^1\norm{h'}^2dt$ et $d\hat L_\gamma(h)=0$ ($\gamma$ est critique, par la réciproque de [[ch08-euler-lagrange]]), donc $\hat L(\gamma+h)\ge\hat L(\gamma)$.
* **Problème de Kepler (sur un ouvert).** $n=3$, $U(q)=-\frac1{\norm q}$, défini sur $\R^3\setminus\{0\}$ : $\nabla U(q)=\frac{q}{\norm q^3}$ et Newton s'écrit $\gamma''=-\frac{\gamma}{\norm\gamma^3}$. Par exemple $\gamma(t)=(\cos t,\sin t,0)$ vérifie $\gamma''=-\gamma=-\gamma/\norm\gamma^3$ : orbite circulaire. Ce Lagrangien n'est défini que sur $I\times(V\setminus\{0\})\times V$, d'où l'extension du poly aux courbes confinées ([[ch08-courbes-confinees-ouverts]]) ; voir aussi la conservation du moment cinétique ([[ch08-moment-cinetique]]) et de l'énergie $\frac12\norm{\gamma'}^2+U(\gamma)$ ([[ch08-energie-conservee]]).

## Pièges

* > ⚠️ Signe : $L=T-U$ (pas $T+U$), et la force est $-\nabla U$. Avec $L=T+U$ on obtiendrait $\gamma''=+\nabla U(\gamma)$.
* Le gradient dépend du produit scalaire : l'énoncé exige le produit scalaire usuel **et** $T=\frac12\norm v^2$ pour ce même produit scalaire. Avec une masse $M$, l'équation est $M\gamma''=-\nabla U(\gamma)$ (H1).
* La régularité $C^2$ de $\gamma$ fait partie de la conclusion : on part d'une courbe seulement $C^1$, et c'est (E.L) qui donne la dérivabilité de $\gamma'$.
* Un point critique de l'action n'est pas toujours un minimum (exemple de l'oscillateur avec $\omega=\frac{3\pi}2$ dans [[ch08-euler-lagrange]]) : le « principe de moindre action » est en réalité un principe d'action **stationnaire**.
* Le problème aux deux bouts ($\gamma(0)=a$, $\gamma(1)=b$) peut n'avoir aucune ou une infinité de solutions (oscillateur avec $\omega=\pi$) ; c'est le problème de Cauchy ($\gamma(t_0)$, $\gamma'(t_0)$ donnés) qui a une solution locale unique ([[ch08-existence-unicite-locale]]).
