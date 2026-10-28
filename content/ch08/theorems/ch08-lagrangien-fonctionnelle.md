---
id: ch08-lagrangien-fonctionnelle
type: definition
chapter: 8
title: "Lagrangien $L(u,q,v)$ et fonctionnelle d'action $\hat L(\gamma)=\int_0^1 L(t,\gamma(t),\gamma'(t))\,dt$"
ref: "non numéroté, section VIII, p. 143"
page: 143
importance: 2
depends: [ch08-cadre-espace-courbes, ch05-differentielle-def]
tags: [lagrangien, action, fonctionnelle, calcul-des-variations]
---
## Intuition

> 💡 Un **Lagrangien** est une règle qui attribue un « coût instantané » $L(u,q,v)$ au fait d'être, à l'instant $u$, à la position $q$ avec la vitesse $v$. L'**action** $\hat L(\gamma)$ d'une courbe $\gamma$ est le coût total du trajet : on additionne (on intègre) le coût instantané le long de la courbe, en remplaçant l'instant par $t$, la position par $\gamma(t)$ et la vitesse par $\gamma'(t)$.

Image mentale : un taxi facture un prix qui dépend de l'heure ($u$), du quartier ($q$) et de la vitesse ($v$) ; $\hat L(\gamma)$ est la note finale du trajet $\gamma$. Le calcul des variations cherche les trajets de $a$ à $b$ dont la note est « stationnaire » : c'est l'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]).

$\hat L$ est une **fonctionnelle** : une fonction dont la variable est une fonction (ici une courbe $\gamma\in E=C^1([0;1];V)$, [[ch08-cadre-espace-courbes]]) et dont la valeur est un réel. On fera du calcul différentiel sur $\hat L$ : elle est $C^1$ sur l'espace de Banach $E$ ([[ch08-lhat-c1-differentielle]]).

## Énoncé

**Définition (poly, section VIII, p. 143).** Soient $(V,\langle\cdot,\cdot\rangle)$ un espace de Hilbert de dimension finie et $E=C^1([0;1];V)$ muni de la norme $\norm\gamma_E=\sup_{t}\norm{\gamma(t)}_V+\sup_t\norm{\gamma'(t)}_V$ ([[ch08-cadre-espace-courbes]]). Soient $I$ un intervalle ouvert contenant $[0,1]$ et
$$
L : I\times V\times V\longrightarrow\R,\qquad (u,q,v)\mapsto L(u,q,v)
$$
une application de classe $C^1$, appelée **Lagrangien**. On pense à $q$ comme à une position, à $v$ comme à une vitesse (les physiciens la notent $\dot q$) et à $u$ comme à une variable de temps, la lettre $t$ étant réservée à la variable des courbes $\gamma$. On définit la **fonctionnelle d'action**
$$
\hat L : E\to\R,\qquad \hat L(\gamma)=\int_0^1 L\big(t,\gamma(t),\gamma'(t)\big)\,dt .
$$

Les **différentielles partielles** de $L$ ([[ch05-differentielles-partielles]]) en $(u,q,v)$ sont notées $\frac{\partial L}{\partial u}(u,q,v)\in L(\R;\R)\simeq\R$, $\frac{\partial L}{\partial q}(u,q,v)\in L(V;\R)$ et $\frac{\partial L}{\partial v}(u,q,v)\in L(V;\R)$ ; ces deux dernières sont identifiées à des vecteurs de $V$ par le produit scalaire.

## Hypothèses

### H1 — $L$ est de classe $C^1$ sur $I\times V\times V$

**Rôle.** La continuité de $L$ rend $t\mapsto L(t,\gamma(t),\gamma'(t))$ continue sur $[0;1]$ (composée de fonctions continues), donc intégrable : $\hat L(\gamma)$ est bien défini pour tout $\gamma\in E$. Le caractère $C^1$ sert à différentier $\hat L$ ([[ch08-lhat-c1-differentielle]]) et à donner un sens à l'équation d'Euler-Lagrange. À partir de la question 13 du poly, on exigera $L$ de classe $C^2$ ([[ch08-lagrangien-regulier]]).

**Si on la retire.** Si $L$ est seulement continue, $\hat L$ est encore définie mais peut ne pas être différentiable : pour $V=\R$ et $L(u,q,v)=|q|$, $\hat L(\gamma)=\int_0^1|\gamma(t)|\,dt$, et pour la courbe constante $h=1$, $s\mapsto\hat L(s h)=|s|$ n'est pas dérivable en $0$, donc $\hat L$ n'est pas différentiable en $0$.

### H2 — $I$ est un intervalle **ouvert** contenant $[0,1]$

**Rôle.** La différentiabilité est définie sur un ouvert ([[ch05-differentielle-def]]) : $I\times V\times V$ doit être un ouvert de $\R\times V\times V$ pour parler de « $L$ de classe $C^1$ », y compris aux instants $u=0$ et $u=1$ qui interviennent dans l'intégrale.

**Si on la retire.** C'est une hypothèse de confort : un Lagrangien de classe $C^1$ « jusqu'au bord » sur $[0;1]\times V\times V$ (au sens des dérivées unilatérales en $u$) donnerait les mêmes résultats, car dans tout le chapitre on ne fait jamais varier $u$ hors de $[0;1]$ (les variations portent sur $q$ et $v$). Le poly choisit $I$ ouvert pour rester dans le cadre du chapitre V.

## Exemples

* **Énergie cinétique.** $L(u,q,v)=\frac12\norm v_V^2$ donne $\hat L(\gamma)=\frac12\int_0^1\norm{\gamma'(t)}_V^2\,dt$. Pour $V=\R^2$ et le demi-cercle $\gamma(t)=(\cos\pi t,\sin\pi t)$, $\norm{\gamma'(t)}=\pi$ et $\hat L(\gamma)=\frac{\pi^2}2\approx4{,}93$ ; pour le segment $\sigma(t)=(1-2t,0)$, qui a les mêmes extrémités $(1,0)$ et $(-1,0)$, $\norm{\sigma'}=2$ et $\hat L(\sigma)=2$. Le segment coûte moins cher : on verra qu'il minimise cette action ([[ch08-euler-lagrange]]).
* **Mécanique : $L=T-U$.** $V=\R$, $L(u,q,v)=\frac12v^2-\frac12q^2$ (oscillateur harmonique) et $\gamma(t)=t$ : $\hat L(\gamma)=\int_0^1\big(\frac12-\frac12t^2\big)dt=\frac12-\frac16=\frac13$. Voir [[ch08-equation-newton]].
* **Longueur d'un graphe.** $V=\R$, $L(u,q,v)=\sqrt{1+v^2}$ (de classe $C^\infty$) : $\hat L(\gamma)=\int_0^1\sqrt{1+\gamma'(t)^2}\,dt$ est la longueur du graphe de $\gamma$. Pour $\gamma(t)=t$, $\hat L(\gamma)=\sqrt2$, la longueur de la diagonale du carré unité.
* **Un Lagrangien qui dépend du temps.** $V=\R$, $L(u,q,v)=\frac12e^{u}v^2$ : pour $\gamma(t)=t$, $\hat L(\gamma)=\frac12\int_0^1e^t\,dt=\frac{e-1}2$. Ce type de Lagrangien ne conserve pas l'énergie ([[ch08-energie-conservee]]).

## Pièges

* > ⚠️ Ne pas écrire $\frac{\partial L}{\partial t}$ ni $\frac{\partial L}{\partial\gamma}$ : les variables de $L$ sont $u,q,v$. On évalue **ensuite** ses dérivées partielles au point $(t,\gamma(t),\gamma'(t))$. La dérivée $\frac{d}{dt}$ de l'équation d'Euler-Lagrange est une dérivée **totale** de la fonction composée $t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$, pas une dérivée partielle de $L$.
* Dans $L(t,\gamma(t),\gamma'(t))$, $v$ est remplacé par $\gamma'(t)$, mais $L$ est une fonction de **trois variables indépendantes** : on dérive $L$ par rapport à $v$ en gardant $q$ fixé, même si, le long de la courbe, $v=\gamma'(t)$ « dépend » de $q=\gamma(t)$.
* > ⚠️ La longueur $L(u,q,v)=\norm v_V$ n'est **pas** $C^1$ (elle n'est pas différentiable en $v=0$) : la théorie de ce chapitre ne s'applique pas directement. Il faut soit utiliser $\sqrt{1+v^2}$ (longueur d'un graphe), soit restreindre $v$ à l'ouvert $V\setminus\{0\}$ ([[ch08-courbes-confinees-ouverts]]).
* $\hat L$ est définie sur tout $E$, pas seulement sur $E_{a,b}$ ; ce sont ses **points critiques sur $E_{a,b}$** qui sont étudiés.
