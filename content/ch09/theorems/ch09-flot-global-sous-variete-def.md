---
id: ch09-flot-global-sous-variete-def
type: definition
chapter: 9
title: Flot global d'un champ tangent et son domaine $D$
ref: Définition IX.8.7
page: 174
importance: 2
depends: [ch09-flot-local-sous-variete, ch07-flot-global-def, ch09-courbe-integrale-maximale-sous-variete]
tags: [flot-global, domaine, champ-tangent, sous-variete, courbe-integrale-maximale]
---
## Intuition

> 💡 Le flot global, c'est « la machine à faire avancer le temps » sur $S$ : on lui donne un instant de départ $\tau_0$, un instant d'arrivée $t$ et un point de départ $x_0$, elle renvoie la position à l'instant $t$ du mobile qui était en $x_0$ à l'instant $\tau_0$ — à condition que ce mobile existe encore à l'instant $t$, c'est-à-dire que $t$ soit dans son intervalle de vie. L'ensemble des triplets $(\tau_0,t,x_0)$ pour lesquels la question a un sens est le **domaine** $D$.

Rappel : pour un champ tangent $X : I\times S\to\R^N$ localement lipschitzien en la seconde variable, $\alpha_{\tau_0,x_0} : J_{\tau_0}(x_0)\to S$ désigne la **courbe intégrale maximale** de condition initiale $(\tau_0,x_0)$, et $J_{\tau_0}(x_0)$ son intervalle de vie ([[ch09-courbe-integrale-maximale-sous-variete]]). C'est la transposition de la Définition VII.3.4 ([[ch07-flot-global-def]]).

## Énoncé

**Définition (poly, Définition IX.8.7, p. 174).** Soit $X : I\times S\to\R^N$ un champ de vecteurs tangents dépendant du temps sur une sous-variété $S$ de $\R^N$, localement lipschitzien en la seconde variable. Posons
$$
D=\{(\tau_0,t,x_0)\in I\times I\times S\mid t\in J_{\tau_0}(x_0)\}.
$$
L'application
$$
F : D\to S,\qquad F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t),
$$
où $\alpha_{\tau_0,x_0}$ est la courbe intégrale maximale de $X$ de condition initiale $(\tau_0,x_0)$, définie sur $J_{\tau_0}(x_0)$, est appelée **flot global** de $X$, et $D$ est son **domaine de définition**. Pour tout $\tau_0\in I$, on pose
$$
D_{\tau_0}=\{(t,x_0)\in I\times S\mid t\in J_{\tau_0}(x_0)\}.
$$

**Cas autonome (poly, p. 174).** Dans le cas où le champ de vecteurs tangents $X$ est indépendant du temps, on prend $I=\R$, on fixe $\tau_0=0$ et l'on note simplement $J(x_0)$ pour $J_0(x_0)$, $F(t,x_0)$ pour $F(0,t,x_0)$, $F_t\cdot x$ pour $F(t,x)$, etc. On a alors, lorsque $(t,x)$ et $(s,F_t\cdot x)$ sont dans $D_0$, la propriété de groupe (IX.8.3) $F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x$ ([[ch09-flot-propriete-groupe]]).

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Condition cachée indispensable : elle garantit l'existence et l'unicité de la courbe intégrale maximale $\alpha_{\tau_0,x_0}$ (unicité locale du théorème IX.8.5, [[ch09-flot-local-sous-variete]], puis recollement). Sans elle, « la » position à l'instant $t$ n'est pas définie (exemple $X(y)=2\sqrt{|y|}$ sur $S=\R$, où plusieurs courbes partent de $0$).

### H2 — $D\subset I\times I\times S$, avec un ordre précis des variables

**Rôle.** La première variable est l'instant **initial** $\tau_0$, la deuxième l'instant **courant** $t$, la troisième le point **initial** $x_0$. Pour chaque $(\tau_0,x_0)$, la « fibre » $\{t\mid(\tau_0,t,x_0)\in D\}$ est exactement l'intervalle de vie $J_{\tau_0}(x_0)$, qui contient $\tau_0$ ; donc $(\tau_0,\tau_0,x_0)\in D$ et $F(\tau_0,\tau_0,x_0)=x_0$.

## Exemples

* **Rotations de la sphère (flot complet).** $S=\mathbb S^2$, $X(y)=e_3\wedge y$, autonome. Les courbes intégrales sont définies sur $\R$, donc $D_0=\R\times\mathbb S^2$ et $F_t\cdot y=R_t\,y$, où $R_t$ est la rotation d'angle $t$ d'axe $e_3$. La propriété de groupe est $R_sR_t=R_{s+t}$.

* **Version dépendant du temps.** $S=\mathbb S^2$, $I=\R$, $X(t,y)=t\,(e_3\wedge y)$. Alors $D=\R\times\R\times\mathbb S^2$ et $F(\tau_0,t,y)=R_{(t^2-\tau_0^2)/2}\,y$ (voir [[ch09-champ-tangent-courbe-integrale-flot-local-def]]). Ici $F(\tau_0,t,\cdot)$ dépend de $\tau_0$ et $t$, pas seulement de $t-\tau_0$ ; on vérifie la formule de composition $F(\tau_0,s+t,y)=F(s,s+t,F(\tau_0,s,y))$ : $\frac{(s+t)^2-s^2}{2}+\frac{s^2-\tau_0^2}{2}=\frac{(s+t)^2-\tau_0^2}{2}$.

* **La parabole : un domaine qui n'est pas un produit.** $S=\{y_2=y_1^2\}$, $X(y_1,y_2)=(y_1^2,2y_1^3)$ (voir [[ch09-courbe-integrale-maximale-sous-variete]]). Pour $y=(z,z^2)$, la courbe maximale issue de $y$ en $0$ est $t\mapsto\big(\frac z{1-zt},\frac{z^2}{(1-zt)^2}\big)$, définie tant que $zt\lt1$ (sur l'intervalle contenant $0$ où $1-zt\gt0$). Donc
$$
D_0=\{(t,(z,z^2))\mid zt<1\},\qquad F_t\cdot(z,z^2)=\Big(\frac z{1-zt},\frac{z^2}{(1-zt)^2}\Big).
$$
$J((z,z^2))=\,]-\infty,1/z[$ si $z>0$, $]1/z,+\infty[$ si $z<0$, $\R$ si $z=0$. Vérification de (IX.8.3) : avec $z'=\frac z{1-zt}$, $\frac{z'}{1-z's}=\frac z{1-zt-zs}$, première composante de $F_{t+s}\cdot(z,z^2)$.

## Pièges

* > ⚠️ $D$ n'est en général **pas** un produit $I\times I\times S$ : $F_t$ n'est défini que sur $\{x\mid t\in J(x)\}$, qui peut être un ouvert strict de $S$ (parabole : pour $t=1$, seulement les $z<1$).
* Le fait que $D$ soit **ouvert** et $F$ de classe $C^p$ n'est pas dans la définition : c'est le Théorème IX.8.8 ([[ch09-flot-global-ouvert-regulier]]).
* Le flot est défini sur $\R\times S$ tout entier si $S$ est compacte et $X$ autonome (Théorème IX.8.9, [[ch09-flot-complet-compacte]]) ; sinon il faut vérifier les intervalles de vie au cas par cas.
* Ne pas confondre $F(\tau_0,t,x_0)$ (trois variables, cas général) et $F(t,x_0)=F(0,t,x_0)$ (cas autonome).
